---
sys:
  pageId: "790d67e8-cdf4-4955-a0c2-ca740556451a"
  createdTime: "2024-06-25T02:29:00.000Z"
  lastEditedTime: "2024-07-08T23:43:00.000Z"
  propFilepath: "docs/Guides/intro to C++/Header files.md"
title: "Header files"
date: "2024-07-08T23:43:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 117
toc: false
icon: ""
---

Unlike python or Java C/C++ splits its files

<details>
      <summary>Why do we do this??</summary>
      In C++ we can’t use a function until we have defined it
  </details>

`.h` file (header file) is like we deleted the body of the function

ILoveBen.h

```cpp
int ILoveBen();

```

ILoveBen.cpp

```cpp
#include "ILoveBen.h"
int ILoveBen(){
    return 10;
}

```

main.cpp

```cpp
#include "ILoveBen.h"

int main(){
    printf("%d\\n",ILoveBen());
}

```

## Classes in header files example:

## TODO explain y classes have a :: in .cpp file

Ilk.h:

```cpp

class Ilk
{
private:
    int milk;
    int private_func();

public:
    Ilk(int milk);
    ~Ilk();
    void drink(int galOfPilk);
    int getMilk();
};

```

Ilk.cpp:

```cpp
#include "Ilk.h"


int Ilk::private_func() {
    return 69;
}

Ilk::Ilk(int milk) {
    this->milk = milk;
}
Ilk::~Ilk() {}

void Ilk::drink(int galOfPilk) {
    printf("drinking %dL of PILK\n", galOfPilk);
    printf("%d\n", this->private_func());
}
int Ilk::getMilk() {
    return this->milk;
}

```

main.cpp:

```cpp
#include "Ilk.h"


int main() {
    Ilk *i = new Ilk(420);
    printf("%d\n",i->getMilk());
}


```

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2TGJPS7%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T230104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFzVjBRdh9sBYtQsJ%2BQDYAc1YOY7MjgFXc6HyKsar2h3AiB4VZf7Aio1a%2FrX7OBUkBIpHgYDx4zZ%2FJvNg%2FlPJqQDdiqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMk51EH3MdoVtqMzDjKtwD03b5MxGpK1H2HtGiA7dBH1Jx2tzVeQh%2BQYQuwIw%2Bxjs8VBaYoiq0SwKvHUZq9LHeUEbluljTw8MgIhUsTDgc%2FCBfgPdDFiDcXcvHo%2FmJaNS4KOfATqEPTyKrQh1JoVbuCD%2Bof%2Bn26OIFCk154Nm87rgC7dyNzRcyduDnmbyBZxAtfHC6CofsiLbvTsr9oMcZkEjzsWUsP%2FOuTFfniKiO6z4c0TxM%2BUxhGyqpCnGVjsgBXCSrdOiWn1rAw5bBgW5ASCAkVF7VtL5YntSpkAEcM%2F0eZVBDo1btfP2GJ8qsG%2BRBXnVkCFmHqCGTC63xeBFpCQ7muRxiAjlYpINi9CJnIQaA3f7glAj%2FXoeNKG1cvpwHpt8S0MxMEKD5GKh3VHTjHIsIsLhJEkcnvNTi3vTZ5jN%2BlYMth0vJeDDxd4e8GKnb177xwDOEVYMdGAE7%2BvyrSRmAAYTDMbX04L7wTa9V9QL%2B%2FfF9bsw%2BuR%2FoPq9s%2Bg1hXe1bZ6fTRs1WfuD1efDQb0OvFjgbJrrY7HNsqs2yoeqpEDqIGeMJfsAnyxiE1Jy8pnphbWq1qT9cfb7hmqUh2Vn1tAkC%2FuCUGUazVLN0538A8sRhkU5t3jQNt5YUFFOoTtGwVWe2cVKWx00wi5b1vAY6pgHqCM2BuIxX7aw7W9UGER0VHvVDASQHb%2FvWUO87VfKz%2BWCHZzydnYuqGArfDnxgsrKXYAye5h6qgp5XdkdCx698x8V4d1vimy3TTKOHeCOP%2BA0YeYNAA%2BSxTC%2Ffi6Bufv5T0wBj0Vnu%2FT9Rij8pWIDZVtXwWSCfOUcCl7pKfGTH1uYfzMJq78tLIKyfVEvz2r%2FgW12Lw1D4AkIyRUyqlvNlVBpAFu07&X-Amz-Signature=5f235813404b6deedb023d13f1c460607b56cc56c13cadd1ebbb5710898f5d6a&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
