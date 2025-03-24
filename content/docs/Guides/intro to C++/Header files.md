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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5OZ2SHU%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T220721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTAYVthTx0Vjf6b1YOa7pZqJNA5sDpPgc7%2BfQcH2SovAIhAMmGob3olNWYB3YZGj7bm9JbXsggQLzaMObec6ClvynMKogECPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw0PyvKPfX1mWU0hrcq3AO8J64sFQkha0NPufH7aTXsi512SxhMM3wfCtxUWSQmE3xXaGC7BQ3tgz7E%2Bk%2BDSAT4Mmxp8YmoZSWR%2F325wffqvyw4ypP%2BXYU2wO2f109RjzBy%2BvJWjaPHI3hZsDj9QtbzIJyROT22R2uSrhGzKzPa7vWrwGuFcENuZNDQBtNww9DrAdqOyUe4YmD2AHg2XBjigswtbDyuNaGvJCCc3g8X7L7H2sbm0bH6lNpZvZttGP%2FtNTOvW17g4ECm2gwl132NaRW8%2FvA5eccRdboojhlq5sOaicAVNAu%2BPx44lcqqUXBsdkKT2PvoG6STTvrViLlvYa%2FbCZvy9z2FZn4Vsf7w2lfGYfcpqWvSQlLweK1q1JHA3R3gK4EkKJgorMPHPkpncJ29V9L9lJpXrGndiJnyRHbqGEtq3XcreE%2FtK143%2FvaBIiZUwE5HXmae1Oz2yBRQaC9Nlv28ab9BZ25FNaMp9xCDP4ERuORhUky1Z67KlF11ZPpjeQPdYl0PPQmfgKgov3z7TfLhjMsKGXs3%2Bq5bTgQZA9QmRSuh0RWoQvw6Yxj9T2UT%2FCIsbRkZP9vH1TxWUC7EXKf224febfiuvQHD09u0hs6FppkhamFVsBv9PoOqpPvLyHa3r%2FndRDC4koe%2FBjqkAfUKmmMCMCxMJBsMK1ZhmJtUl%2BJZKMQ99177k1Wh3EGcMjvBepu3altFEfOgm2Tm%2B6er%2BfxZa%2FNaiqwnEDEbLN2QRpXUjHlFI%2BhdOjyvp9Hxly3hrk4JrSQYG9rx%2BbRKfyj9i7Rs8pBLj0PHw58Q72UjJ2RdtC1Gn41WDBcZPtwx5uVn9i8guykUx698Ls5tYnq3DLiyl5DfeHHDvPaPqwfFlazS&X-Amz-Signature=bebfa043f6b2a4c7727386e432d5e9844e89d86f24ab22eec90de06fc24f23cd&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
