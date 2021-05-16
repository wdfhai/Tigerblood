const tileMap = [
  /* -01 */[["#",'q'],"#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#",["#","]"],["#","]","~"]],
  /* 00 */ [["#","[","~"],["#","~"],["#","~"],["#","~"],["#","~"],["#","~"],["#","~"],["#","~"],["#","~"],["#","~"],["#","~"],["#","~"],["#","~"],["#","~"],["#","~"],["#","~"],["#","~"],["#","~"],["#","~"],["#","~"],["#","~"],["#","~"],["#","~"],["#","~"],["#","~"],["#","~"],["#","~"],["#","~"],["#","~"],["#","~"],["#","~"],["#","~"],["#","~"],["#","~"],["#","~"],["#","~"],["#","~"],["#","~"],["#","~"],["#","~"],["#","~"],["#","~"],["#","~"],["#","~"],["#","~"],["#","~"],["#","~"],["#","~"],["#","~"],["#","~"],["#","~"],["#","~"],["#","~"],["#","~"],["#","~"],["#","~"],["#","~"],["#","~"],["#","~"],["#","~"],["#","~"],["#","~"],["#","~"],["#","~"],["#","~"],["#","~"],["#","~"],["#","~"],["#","~"],["#","~"],["#","~"],["#","~"],["#","~"],["#","~"],["#","~"],["#","~"],"%","^","^","^","^","^","^","^","^","^","^","^","^","^","^", "%"],
  /* 01 */ [["#","["],".",".",".",".",".",".",".",".",".",".",".",".",[".", 'h'],[".", 'H'],"#",".",".",".",".","?",".",[".","B"],".","?","N","N","N","N","N","#",".",".",".",".",".",".",".",".","#",".",".",".",".",[".","B"],"#",".",".",".",".",".",".",".",".",".",".",".",".",".",".","#",".",".",".",".",".",".",".",".",".",".",".",".",".",[".","x"],/*                                                                                                                                */"#","-","=","=","=","=","=","=","=","=","=","=","=","=","=","=","+"],
  /* 02 */ [["#","["],".",".",".",".",".",".",".",".",".",".",".",".",".",".","#",".","?","?","?","?",".",".",".","?","N","N","N","N","N","#",".","?","?","?","?","?","?","?","?",".",".",[".","Y"],".",".","#",".","?","?","?","?","?","?","?","?","?","?","?","?",".","#",".","?","?","?","?","?",".",".",".",".",".",".",".",[".","X"],/*                                                                                                                                                    */"#","-","=","=",["=","u"],"=","=","=",["=","u"],"=","=","=","=",["=","u"],"=","=","+"],
  /* 03 */ [["#","["],"#","#","#",".",[".","J"],".",".",".",[".","E"],".","#","#","#","#","#",".","?","N","N","?",".",[".","T"],".","?","N","N","N","N","N","#",".","?","n","n","n","n","n","n","?",".",".",[".","y"],".",".","#",".","?","w","w","w","w","w","w","w","w","w","w","?",".","#",".","?","Q","Q","Q","?",".",".",".",".",".",".",".",[".","C"],/*                                                                                                                      */"#","-",["=","u"],["=","u"],["=","u"],["=","u"],["=","u"],"=","=",["=","u"],"=",["=","u"],"=",["=","u"],"=",["=","u"],"+",["#","]"]],
  /* 04 */ [["#","["],"W","W",["#","["],".",".",".",".",".",".",".",["#","]"],"W","W","W",["#","["],".","?","N","N","?",".",[".","t"],".","?","N","N","N","N","N","#",".","?","n","n","n","n","n","n","?",".",".",[".","*"],".",[".","P"],"#",".","?","w","?","?","?","?","?","?","?","?","w","?",".","#",".","?","Q","Q","Q","?",[".","B"],".",".",".",".",".",".",[".","c"],/*                                                                                                                */"#","-",["=","u"],["=","g"],"=","=","=","=","=","=","=","=","=","=","=","=","+",["#","]"]],
  /* 05 */ [["#","["],"W","W",["#","["],"#",".",".",[".","R"],".",".","#",["#","]"],"W","W","W",["#","["],".","?","N","N","?",".",".",".","?","N","N","N","N","N","#",".","?","n","n","n","n","n","n","?",".",".",".",".",[".","p"],"#",".","?","w","?",".",".",".",".",".",".","?","w","?",".","#",".","?","?","?","?","?","#","#","#","#","#","#","#","#",/*                                                                                                                                  */"#","-",["=","u"],["=","u"],["=","u"],["=","u"],"=",["=","u"],"=",["=","u"],"=","=","=","=",["=","u"],"=","+",["#","]"]],
  /* 06 */ [["#","["],"W","W","W",["#","["],".",".",".",".",".",["#","]"],"W","W","W","W",["#","["],".","?","N","N","?",".",".",".","?","?","?","?","?","?","#",".","?","n","n","n","n","n","n","?",".",".",[".","S"],".",".","#",".","?","w","?",".",[".","Z"],".",".",[".","D"],".","?","w","?",".","#",".",".",".",".",".",".",".",".",".",".",".",".",".",".",/*                                                                                                                            */"#","-","=","=","=","=",["=","u"],["=","u"],["=","u"],"=","=",["=","u"],"=","=",["=","u"],"=","+",["#","]"]],
  /* 07 */ [["#","["],"W","W","W",["#","["],".",".",".",".",".",["#","]"],"W","W","W","W",["#","["],".","?","N","N","?",".",".",".",".",".",".",".",".",".","#",".","?","?","?","?","?","?","?","?",".",".",[".","s"],".",".","#",".","?","w","?",".",[".","z"],".",".",[".","d"],".","?","w","?",".","#","#","#","#","#","#","#","#","#","#","#","#","#","#",".",/*                                                                                                                            */"#","-","=","=","=","=","=",["=","u"],["=","j"],["=","u"],"=","=","=","=","=","=","+",["#","]"]],
  /* 08 */ [["#","["],"W","W","W",["#","["],".",".",".",".",".",["#","]"],"W","W","W","W",["#","["],".","?","N","N","?","?","?","?","?","?","?","?","?",".","#",".",".",".",".",".",".",".",".",".",".",".",".",".",".","#",".","?","w","?",".",".",".",".",".",".","?","w","?",".","#",".",".",".",".",".",".",".",".",".",".",".",".","#",".",/*                                                                                                                                              */"#","-","=",["=","u"],"=",["=","u"],"=","=","=",["=","u"],"=",["=","u"],"=","=",["=","u"],"=","+",["#","]"]],
  /* 09 */ [["#","["],"W","W","W",["#","["],".",".",".",".",".",["#","]"],"W","W","W","W",["#","["],".","?","N","N","N","N","N","N","N","N","N","N","?",".","#",".","?","?","?","?","?","?","?","?","?","?","?","?","#","#",".","?","?","?",".",".",".",".",".",".","?","w","?",".","#",".","?","?","?","?","?","?","?","?","?","?",".","#",".",/*                                                                                                                                              */"#","-","=",["=","u"],["=","k"],["=","u"],"=","=","=",["=","u"],"=","=","=","=","=","=","+",["#","]"]],
  /* 10 */ [["#","["],"W","W","W",["#","["],".",".",".",".",".",["#","]"],"W","W","W","W",["#","["],".","?","N","N","N","N","N","N","N","N","N","N","?",".","#",".","?","n","n","n","n","n","n","n","n","n","n","?",".","#",".","#",".",".",".",".",".",".",".",[".","B"],"?","w","?",".","#",".","?","Q","Q","Q","Q","Q","Q","Q","Q","?",".","#",".",/*                                                                                                                                        */"#","-","=",["=","u"],["=","u"],["=","u"],"=","=",["=","u"],"=","=",["=","u"],"=","=","=","=","+",["#","]"]],
  /* 11 */ [["#","["],"W","W","W",["#","["],".",".",".",".",".",["#","]"],"W","W","W","W",["#","["],".","?","N","N","N","N","N","N","N","N","?","?","?",".","#",".","?","n","n","n","n","n","n","n","n","n","n","?",".","#",".","#",".","?","?","?","?","?","?","?","?","w","?",".","#",".","?","Q","Q","Q","Q","Q","Q","Q","Q","?",".",".",".",/*                                                                                                                                              */"#","-","=",["=","u"],["=","u"],["=","u"],"=","=",["=","u"],"=","=","=","=","=","=","=","+",["#","]"]],
  /* 12 */ [["#","["],"W","W","W",["#","["],".",".",".",".",".",["#","]"],"W","W","W","W",["#","["],".","?","N","N","N","N","N","N","N","N","?",".",".",".","#",".","?","n","n","n","n","n","n","n","n","n","n","?",".","#",".","#",".","?","w","w","w","w","w","w","w","w","?",".","#",".","?","?","?","?","?","?","?","?","?","?","#","#","#",/*                                                                                                                                              */"#","-","=","=",["=","u"],"=","=","=","=","=","=",["=","u"],["=","u"],["=","u"],"=","=","+",["#","]"]],
  /* 13 */ [["#","["],"W","W","W",["#","["],".",".",".",".",".",["#","]"],"W","W","W","W",["#","["],".","?","?","?","?","?","?","?","?","?","?",".","#","#","#",".","?","?","?","?","?","?","?","?","?","?","?","?",".","#",".","#",".","?","w","?","?","?","?","?","?","?","?",".","#",".",".",".",".",".",".",".",".",".",".",".",".",".",".",/*                                                                                                                                              */"#","-","=","=","=","=","=","=",["=","u"],"=","=","=",["=","G"],["=","u"],"=","=","+",["#","]"]],
  /* 14 */ [["#","["],"W","W","W",["#","["],".",".",".",".",".",["#","]"],"W","W","W","W",["#","["],".",".",".",".",".",".",".",".",".",".",".",".",".",".","#",".",".",".",".",".",".",".",".",".",".",".",".",".",".","#",".",".",".","?","w","?",".",".",".",".",".",".",".",".","#",".",".",".",".",".",".",".",".",".",".",".",".",".",".",/*                                                                                                                                              */"#","-","=","=",["=","u"],"=","=","=","=","=",["=","u"],["=","u"],["=","u"],["=","u"],"=","=","+",["#","]"]],
  /* 15 */ [["#","["],"W","W","W",["#","["],["#","I"],"#",["#","L"],"#",["#","I"],["#", "]"],"W","W","W","W",["#","["],"#","#","#","#",["#","I"],"#",["#","L"],["#","K"],["#","I"],"#","#","#","#","#","#","#","#","#","#",["#","I"],"#",["#","L"],["#","K"],["#","I"],"#","#","#","#","#","#","#","#","#","#",["#","I"],"#",["#","L"],["#","K"],["#","I"],"#","#","#","#","#","#","#","#","#","#",["#","I"],"#",["#","L"],["#","K"],["#","I"],"#","#","#","#","#",/*                     */"#","-","=","=","=","=","=","=","=","=","=","=",["=","u"],["=","u"],["=","u"],"=","+",["#","]"]],
  /* 16 */ [["#","["],"W","W","W",["#","["],".",".",".",".",".",["#","]"],"W","W","W","W",["#","["],".",".",".","#",".",".",".",".",".",".",".",".",".",".","#",".",".",".","#",".",".",".",".",".",".",".","?","n","n","#",".","?","w","?",".",".",".",".",".",".","?","w","?",".","#",".",".",".",".",".",".",".",".",".",".",".",".",".",".",/*                                                                                                                                              */"#","-","=","=","=","=","=","=","=","=","=","=","=",["=","u"],["=","u"],"=","+",["#","]"]],
  /* 17 */ [["#","["],"W","W","W",["#","["],".",".",".",".",".",["#","]"],"W","W","W","W",["#","["],".","?","?","?","?","?","?","?","?","?","?","?","?",".","#",".","?","?","?","?","?","?","?","?","?",".","?","n","n","#",".","?","w","?",".",".",".",".",".",".","?","w","?",".","#",".","?","?","?","?","?",".",".","?","?","?","?","?",".",/*                                                                                                                                              */"#","-","=",["=","u"],"=","=","=","=","=","=","=","=","=","=","=","=","+",["#","]"]],
  /* 18 */ [["#","["],"W","W","W",["#","["],".",".",".",".",".",["#","]"],"W","W","W","W",["#","["],".","?","N","N","N","N","N","N","N","N","N","N","?",".","#",".","?","n","n","n","n","n","n","n","?",".","?","n","n","#",".","?","w","?","?","?",".","?","?","?","?","w","?",".","#",".","?","Q","Q","Q","?",".",".","?","Q","Q","Q","?",".",/*                                                                                                                                              */"#","-","=","=","=","=",["=","u"],"=",["=","j"],"=","=","=",["=","u"],"=","=","=","+",["#","]"]],
  /* 19 */ [["#","["],"W","W","W",["#","["],".",".",".",".",".",["#","]"],"W","W","W","W",["#","["],".","?","?","?","?","?","N","?","?","?","?","N","?",".","#",".","?","n","n","n","n","n","n","n","?",".","?","n","n","#",".","?","w","w","w","?",".","?","w","w","w","w","?",".","#",".","?","Q","Q","?",".",".",".",".","?","Q","Q","?",".",/*                                                                                                                                              */"#","-","=","=","=","=","=","=","=",["=","u"],"=","=","=","=","=","=","+",["#","]"]],
  /* 20 */ [["#","["],"W","W","W",["#","["],".",".",".",".",".",["#","]"],"W","W","W","W",["#","["],".",".",".",".",".","?","N","?",".",".","?","N","?",".","#",".","?","n","n","n","n","n","n","n","?",".","?","n","n","#",".","?","?","?","?","?",".","?","?","?","?","?","?",".","#",".","?","Q","?",".",".","?","?",".",".","?","Q","?",".",/*                                                                                                                                              */"#","-","=","=","=","=","=","=","=","=","=","=","=","=","=","=","+",["#","]"]],
  /* 21 */ [["#","["],"W","W","W",["#","["],".",".",".",".",".","#",["#","~"],["#","~"],["#","~"],["#","~"],"#",".","?","?","?",".","?","N","?","?",".","?","N","?",".","#",".","?","?","?","?","?","?","?","?","?",".","?","?","?","#",".",".",".",".",".",".",".",".",".",".",".",".",".",".","#",".","?","?",".",".","?","Q","Q","?",".",".","?","?",".",/*                                                                                                                                  */"#","-","=","=","=","=","=","=","=",["=","F"],"=","=",["=","B"],"=","=","=","+",["#","]"]],
  /* 22 */ [["#","["],"W","W","W",["#","["],".",".",".",".",".",".",".",".",".",".",".",".","?","N","?",".","?","N","N","?",".","?","N","?",".",[".","a"],".",".",".",".",".",".",".",".",".","#",".",".",".",".",[".","V"],".","?","?","?","?","?","?","?","?","?","?","?","?",".",[".","v"],".",".",".",".","?","Q","Q","Q","Q","?",".",".",".",".",/*                                                                                                                                  */[".","@"],"-","=","=","=","=","=","=","=",["=","f"],"=","=","=","=","=","=","+",["#","]"]],
  /* 23 */ [["#","["],"W","W","W",["#","["],"#","#","#","#","#","#","#","#","#","#","#",".","?","N","?",".","?","N","N","?",".","?","N","?",".","#",".","?","?","?","?","?","?","?","?","?",".","?","?","?","#",".","?","w","w","w","w","w","w","w","w","w","w","?",".","#",".",".",".",".","?","Q","Q","Q","Q","?",".",".",".",".",/*                                                                                                                                                          */"#","-","=",["=","u"],["=","u"],["=","u"],"=","=","=","=","=","=",["=","u"],["=","u"],"=","=","+",["#","]"]],
  /* 24 */ [["#","["],"W","W","W","W","W","W","W","W","W","W","W","W","W","W",["#","["],".","?","N","?",".","?","?","?","?",".","?","N","?",".","#",".","?","n","n","n","n","n","n","n","?",".","?","n","n","#",".","?","w","w","w","w","w","w","w","w","w","w","?",".","#",".","?","?",".",".","?","Q","Q","?",".",".","?","?",".",/*                                                                                                                                                          */"#","-","=","=",["=","j"],["=","u"],"=","=","=","=","=",["=","u"],"=","=",["=","u"],"=","+",["#","]"]],
  /* 25 */ [["#","["],"W","W","W","W","W","W","W","W","W","W","W","W","W","W",["#","["],".","?","N","?",".",".",".",".",".",".","?","N","?",".","#",".","?","n","n","n","n","n","n","n","?",".","?","n","n","#",".","?","w","w","w","w","w","w","w","w","w","w","?",".","#",".","?","Q","?",".",".","?","?",".",".","?","Q","?",".",/*                                                                                                                                                          */"#","-","=",["=","u"],["=","u"],["=","u"],"=","=","=","=","=","=","=","=","=","=","+",["#","]"]],
  /* 26 */ [["#","["],"W","W","W","W","W","W","W","W","W","W","W","W","W","W",["#","["],".","?","N","?","?","?","?","?","?","?","?","N","?",".","#",".","?","n","n","n","?","?","?","?","?",".","?","?","?","#",".","?","w","?","?","?","?","?","?","w","w","w","?",".","#",".","?","Q","Q","?",".",".",".",".","?","Q","Q","?",".",/*                                                                                                                                                          */"#","-","=","=","=","=","=","=","=","=",["=","u"],"=","=","=","=","=","+",["#","]"]],
  /* 27 */ [["#","["],"W","W","W","W","W","W","W","W","W","W","W","W","W","W",["#","["],".","?","N","N","N","N","N","N","N","N","N","N","?",".","#",".","?","n","n","n","?",".",".",".",".",".",".",".",".","#",".","?","w","?",".",".",".",".","?","w","w","w","?",".","#",".","?","Q","Q","Q","?",".",".","?","Q","Q","Q","?",".",/*                                                                                                                                                          */"#","-","=","=",["=","u"],"=","=",["=","u"],"=",["=","u"],"=","=","=","=",["=","u"],"=","+",["#","]"]],
  /* 28 */ [["#","["],"W","W","W","W","W","W","W","W","W","W","W","W","W","W",["#","["],".","?","?","?","?","?","?","?","?","?","?","?","?",".","#",".","?","?","?","?","?",".","#","#","#","#","#","#","#","#",".","?","?","?",".","#","#",".","?","?","?","?","?",".","#",".","?","?","?","?","?",".",".","?","?","?","?","?",".",/*                                                                                                                                                          */"#","-","=","=","=","=","=",["=","u"],"=","=","=","=","=","=","=","=","+",["#","]"]],
  /* 29 */ [["#","["],"W","W","W","W","W","W","W","W","W","W","W","W","W","W",["#","["],".",".",".",".",".",".",".",".",".",".",".",".",".",".","#",".",".",".",".",".",".",".",".",".",".",".",".",".",".","#",".",".",".",".",".","#",".",".",".",".",".",".",".",".","#",".",".",".",".",".",".",".",".",".",".",".",".",".",".",/*                                                                                                                                                          */"#","-","=","=","=","=",["=","u"],"=","=","=","=","=","=","=","=",["=","u"],"+",["#","]"]],
  /* 30 */ [["#","["],"#","#","#",["#","I"],"#","#","#","#","#","#",["#","I"],"#","#","#","#","#","#","#",["#","I"],"#","#","#","#","#","#",["#","I"],"#","#","#","#","#","#","#",["#","I"],"#","#","#","#","#","#",["#","I"],"#","#","#","#","#","#","#",["#","I"],"#","#","#","#","#","#",["#","I"],"#","#","#","#","#","#","#",["#","I"],"#","#","#","#","#","#",["#","I"],"#","#","#",/*                                                                                                    */"#","%","_","_","_","_","_","_","_","_","_","_","_","_","_","_","%",["#","]"]],
  /* 31 */ [["#",'['],"#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#","#",["#","]"],["#","]"]]
]

export default tileMap
