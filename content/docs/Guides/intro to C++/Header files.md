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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TVLU5WT%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T170749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCl81fUmwrY8i7iJW18Ecn0ihI59zNEav8cA6eeELWCggIgURFsa8BmNDWQUm6G%2B28cfFYIfw7uz0dbT5vcbgZ25kcq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDCpruXr5RBakxRQEACrcA4pnll%2FgZ239%2B58bunVLBJh24WKlG1PJ7MNK8mKZEJ7yJ%2FI5NNLdqEzb1YMO7IZRRTNRG5C09w9r8atcdFomJx84xrdM4Jy9V7zYMRJwGByIiJOa%2BzjctaoTRVOHDjdQTMpBAmO0CiQP6T7g6j3j1ZAeqV%2B8mClkRvmgI%2BMN2ZYio%2FMp1Q8vvN9upEse9hXZc6SMmXRJp3IQOTThWbe49gcHuI3tOT%2Bm0mRobT2%2FXaFchi3OMXBYU%2FDgqVNpQqX64FH%2B1vsnAUk4P0b7QRVi7rF%2BFhYMEA9nAImfmAFssKKP7ZaxbY6b4uNq9LRwMYY9xTPeG2ls0s1ZMGmKREBjISiJqgqjTkxwCHG0OUN9hm%2F4ISZaCMmtvO%2B3G%2F8GV0XadRwzftqqWrLmDCJsKklYW7LPRKpCFGsKcU4zE4%2BCo80r3r7XyeMh1EpytTasVZ5Fhe2TrBzj%2BlI2lvKgn42TOCuY8mT3hVdX%2FVf7SyvJNsOQfLK2GoHrLLrguWGvrc7ZMYy7wn3Le8Ak47VcKdYToifgc8mZW%2F6T3mYne5ilvMJRaAibMV0DFjBqtJ2L%2BI4kpsLKhPAZyGd3odDrbz6XlAa%2BA1MPiMpM4aWznyfEujpWkweAvlqAD1QTLI%2FGMMaA6cAGOqUBslBKPbzGGZxW5MMsl9IEU6WPYixY3uNw4dnI1bVYFC4eW41vL%2F89hlLDG%2BMAfGTZ4meuIdQYWWDrWWXGSKTIEgGjpgOlyhxT%2FPJR5SoEawpIu%2FSGOBKfFa68XHb0NgoWRNT0hRthFkSkMnjE%2BJq0QoYgkVUno7DagwbyXlGPxEV4udo2i0jh1i9qymcE7G1hByrftmIlX0gkC3Dqq1ZhWTBC985h&X-Amz-Signature=3820f30639b0cce840535fafdfd5ed40085bec9bf6dbc6e40645b5c0a4658bf4&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
