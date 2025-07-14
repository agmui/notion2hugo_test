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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DWJJHM3%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T132846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIHoGnMR%2F7U7GRIUJ92oBJzQFLg7A7%2BKV0mSxeKIk4zaZAiBLLis6n4caVu8fJx%2BXZIELnoZmrfAbLGzgwvY5KKzGZir%2FAwguEAAaDDYzNzQyMzE4MzgwNSIM%2FoAPtzN5By2e8LnxKtwDriPK5o8bHWZbvRD0A78SSYdz2gC1MyYfAcgo4mbmDfpxxrKgzEidQBE8TcY07zM44%2FvxuEbosq0aWRlbTuvXI7eUrDAwxaBLi3IO8fy91C0mL%2BlL21vxIW5fvCfNAHo96sQNuF3v8FnJ7KSpeQM9RxBnNtPxrqF3xqkjGzNF8eSq1jTwGkbZJhabGjFb9GIfNv6R4Hhb%2FfST%2BePphb1AVS1S5TJ4CI5GCJ%2BTyyWY0ewsWebRL9SlWwoXlIR8RwQK7jfbd6Lf7feTo5GCEUeppcQDkfmSzYfz47o3Jm0%2BcYy7rbg5pw5oPVs99TrirseHtgMhiNwDNjj9HmNA1DONCOxif2x0KoZqdaogAfgFWMLgw97SQ9Y4pqnCnPIlvSaZ%2B%2FATicV7WxWBMUzYzoW%2Fz0p%2FZefaC8b0tm4DJ%2BlPEnRqEUWl7xHuGfBtal8I2XftjIem6oASB0%2BAFziUGkGVQTfgzziGh%2FiY4LxwViRRrTfxFZYZQdEzm3t8OFBb0JqKRfUOxrU5mvqs2KgA5mcwN8lbP7EXPnnbB%2F%2Fx832dhDzEk7dxN93pcrUnN6kmpyqK5aRmAGtWXF5H9dl7XkL2aPibkpG2b3%2FqkyDPlT9a9crgGfOPavjAVI%2FOi8IwnYXUwwY6pgH5u4qj1gYBCOG5s%2BQotE%2Fpil3RM1PGld%2F8ACJeELgcP2jzDSF9e0B9LW6zo3b1RO9tUACjM78smOF2M8HEhr%2BY%2BMoiXCUtH%2BNmTne1Uc%2FqfZ8HRCzvAfu8wUvl1VkupxwFi08gOUqAZ4w6EnYurmAgME1L%2FqA6pcUfEON%2F1OHLgYxAQ4tn3TLuwV5Ua9faag4uR8C1Kq%2FhELJjQU3CN7BnjFJsfcYp&X-Amz-Signature=7f2b4aa55372c3d998b9dd240ef607a7fd1c6d05f1aa994fc5d3fae85e101320&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
