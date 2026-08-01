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
  <summary>{{< markdownify >}}Why do we do this??{{< /markdownify >}}</summary>
  
In C++ we can’t use a function until we have defined it

**EX:**

```cpp
int main(){
	printf("%d\n" funnyNumber()); // this wont work
}

int funnyNumber(){
	return 69;
}
```

To fix this we use forward declaration

```cpp
int funnyNumber(); // forward declaration

int main(){
	printf("%d\n" funnyNumber()); // this wont work
}

int funnyNumber(){
	return 69;
}
```

we say “Hey C++ here I promise I will eventually define this function `funnyNumber` but don’t freak out when you see it”

Here is a link that goes more in depth: [https://www.learncpp.com/cpp-tutorial/classes-and-header-files/](https://www.learncpp.com/cpp-tutorial/classes-and-header-files/)

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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RY5VDQSI%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIClIFIXKGb3xjY%2BkoQDCo%2FJBQSfNpuocMn9O9iGGcnuYAiB3Ny54G7FPUjO9YZdKn21UTVTHxOtDuAiTWRA2oaLVciqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaymr1J%2BcYlV53mMLKtwDUNuvVQ0dG4a6q%2FO8QDRDRB9PWa4YxERbk10BuXU7lOudD8lUyrrgGRcXoBgHA0UD5RlBPnH6qMCN9CFA7WNzkD6fCQlA0oztcuC4VpMNlcY9MXF0iiPBpHlRtElvb1kHMA0RwSO2vzlc6BdFcBwPYnEKAEU7kZUwkEeImqSmdNQ1AahFQic4088tlL1j86RDb6I2s8BRm02uCyP0l9Rw0oSvbvEo5%2BsjFXI1uoLXhNjGk%2BShNoMXJbXIyZ5ySB1UUwKMKrQV5G6CzfW%2BatgmomDFNIrjWqjxBL%2F%2Free9cB4HnDqxyGYe6x5jywGXNuBsR9WVwSup5XUuOhE8FzEeBz0e5TtI%2BZjw44XJDZf9v%2BRb%2F0%2BgNZADf%2BOhqlKaZTNoatY5Js5TqdFWhyQrryGnoM9agndBuRy1EyQcOx30BhjgFru5x2I%2FjEtjEhJFfoeD73NUV%2FCjEJBQKH8kza69dQdR4M25rl3N9%2Fuqf%2BhMlQJVD%2BVPEul%2BZJm7UvRbk57XoR907MrP3ueOpJRrIRxHK4TsSjpOq3HwaBkTpqyeZ5A6Y%2BX6Aw6JHN0eV1LMsb6Ar6lC5H1l%2FKjZlLPNlLmydDl9YQdwvr0Elo%2Fj7fE213HvvVbwvMyWiY22E1gwwba10wY6pgGGhMd2LSAfqBOxNvADOLDms0EtJErIA%2FZKAdArywgr8Bwi0HlRb55GKvGXf3GgeT3bewQ3rjXjeln0zMknXVexJzbG5yU3hy3yiKOvI85Ezqosmcfp%2BElp0efoyoYFcAsCS4DQy0c4P87RFDrudi0o2aZSA%2BZQKuDRAwzr8gLWgDjJrgGkiZada0yU3kRFlTwy3gp3%2FnrscBbuNObYSG23YFCFImbV&X-Amz-Signature=5fb2bbefeb0d1414f6c049499bcba67120970eeaa0eb3e1932b73d7d1328ac22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
