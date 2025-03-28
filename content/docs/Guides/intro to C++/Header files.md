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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZ6FGZ5U%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T150827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDtUmJMpD61wWuMnGR4S3EElgOB89VsItHPtIgKH5N47AiBhT37EQ5ZlYhEd04CcVSeqAfupxguuJNVvph9C7IrOlSr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMsWHUM1knWuXHJlFvKtwD1apdQ7WXPrVBGQTc4FfdU%2Fft4U%2FGkvdWD2hJTDuiqgR7BfAEoZxjpousf9vJmKmIufrEOwaObMUz2wa6HSuPSOd2xMdaO40FKO0gqN5Oe6QzoLEI2a8dbRy93DvAqY4WqYCJJIAISrGNqN3TVlSHthDP40cm7xCarrGV1%2BM6HLHSKSxWGUlJJ1XR5Pne5nsvPg%2Fn9oHdfVyIrQMjPPFV%2FbxQTd6FXiiH3GNPfY%2FbV4DOTF3T9fIwSmvD3HlLxU9spkhkR1yOLC2imLFVRhK1MNvS%2BunXX%2FxXLUpJw%2Bua9yCRn0C24sfy46BwAEkoDaxR3v0dkAHCeOeMj986WPRiWhHV7q6bp12y0Zkw7u9uNyy9nBEwiUXekWB7LyU%2FVWa9tqZ8BYJcwnM%2BVL4E%2BDluQFSJbicnVMKlJ8jTTEX9db4e8C5Nc4Mx58h7vNcp2DkL0sL99nX0uw02zkfqNT0GMB%2Fi56CxzrK%2F6fHqnmTXA9Wr1l6Ow6IExBgBiFAcUBjIrh7k1ugkJJpUQ1RXvQNwa%2BwQFStTO5AEKyy11%2Fz7JnG3EYvN6pKIXt6oguXcxmS%2Bnf0m6Pt0O3renKFMVZE6Acu4HmJstIi8x76vbNjgMMJguwEBsUcgsrn1CFYw%2Fu2avwY6pgE3R%2BuQlpifAkkXFJTyAz%2FLlElsIGxFYXamH7UM72au%2BS2MLqBRWNV5Sl8gBvDPEM6RVlGmFgwsT0ETHBD3xcKjv0qBwBFAuTDf1zMatav0PtSlKGLEauR6PWPALHRdHUT3dfRLnxvPC6S5foCBLiqiMp4bt1IhfoeheIfDv%2Br2PqzFyjs%2BYjzgMj0eMyVSOBtxRvkvZxA%2Bc6hvlT%2BAyihyrL96ZhNT&X-Amz-Signature=dd138a1105012d288ab2773efb56e5f68db69358a0870a813c0784e922321bf9&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
