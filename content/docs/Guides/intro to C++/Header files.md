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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DUOFXF7%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T015016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIFIbuZPjSKQGzqPuuwsH509I%2FngPDrWAgjxrg5g9OaU5AiAG0z0TB3iKG5MvwTfOjpmjJpSHCFOKeVmWR4veFF5W%2FSr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMA9c18foZ%2BLF74KiaKtwDemwx%2BKRchtdLPNSAdlMJn2MsqCGDHyz7KTU0Zo9LUjIHn7tKHqiXl1JhKeyhQ892nLWNCLim26VHnxSBuy3IuoY6%2Frd%2FZHLO%2BDr1QGtXqaOluXBy5FWF6219sXuIJPe%2BSS561vL4NxA2wUnqCuKxVGA%2F04lLc76HNygyps69xsOSEt3bSOUixV5fCJt%2BTn5iynT072t5Cz%2FzvxMtKs8TRGbyIDUB7QHnOGslRii5juW6SnHK17MFGJi5xPq0NWpkTRhX7jPiZRyBO7IPtuGxQ1T0gnQiIwkM7DYcmHRbkqga%2FNQ5M5Zbrdwr3ddOmVF13TO9TcKh0dTGqd4oJtkitjR7TcO4wk0tP86ycisqxIzJnnpU7oLxzLm%2ByYkk%2BcRxjmsu1P0lDg3eZknI6NSb7AIrzQ6RmYUJGyYzAbIFGsAXyHPi7X64rvIbmtgCrUVuj9Ic%2Fsp6hKyK0Y7eJYyqucOZ3Pc7BJAGhqLs3ubRaYApkVN6rnEiyWk1tE31W4JAFPDER87Gwi8g%2FSeI1eWtJEdk5h2ubWHiBYl93vCfzJqCbGwYNvSNPRQ5wKRbhcMKyOBbmbMDTE7lHlye3dSLBNlrvlXAADtgaLR1vUlLGNaN9gwj0ty7k081axowzZb4yQY6pgGRTBcOIZU%2FFHqS667GWSOqRGqSPCLj359rE1EQtgcAyhHxYu13%2B7OLp1oiKVUFfBUrGHSF5tNIrGQ7x9f5nCtG6ApDiSylUEHuSukke1eVGaVTyt6NAO25ls9rDevu657MftlsdUgQ%2Bj%2FPZ%2BdtGAAJHP9iRWiwLnvkkKfYOSvGfNzpYKe6zB03n3ZMDg8V5ws6WbLto9GrK%2Ft0BXIXvh0SBR3jf%2FIo&X-Amz-Signature=fb5e37c6c0210ca311e3cc8fbb90e027a25dd70e514656162086cd54e212a6c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
