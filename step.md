# STEPS NEEDED TO BE EXCUTED IN THE BINARY SEARCH TREE CONTAINS METHOD.

- ## check if the BST is empty
  <pre>
  ## if the root is null 
    ### return false
  </pre>
- ## assign the root node to a current variable

- ## start a while loop that terminated if the result is found or the end of a leaf is reached

    <pre>
    ## if the value is equal to current value
      ### return true
    ## if the value is less than the current value
      ### move to the next value by the left
    ## else if the value is greater than the current value
      ### move to the next value by the right
    </pre>

- ## return false since the value is not found
