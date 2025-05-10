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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZROGFRIL%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T170443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQDs3TugeKmM9mz2rlRPxcu9Yl%2BzguEay3z0bUjVwq%2Bs%2FwIhAId9P9HFAtGatp%2F85Z9%2BhkVapcWTBX4%2B7iKKGNJVI5SsKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz0o0ALfGV%2F3WizIz8q3AO7tARcROPsAnSWu7jyRXUk0qxmSYzm8CyPQBVsIUdwdbbCS6G19M71a1ExGyccdxcW6mMhfvrssvRxHEmrohRtY0RRNksl%2B7shVa%2BPo3aMyIHe6Ah6RQjJI%2FrnwPc4SAs18UEl6gfPmU6n7YpwAO9K%2BY4t%2Fuq4uRvUBrBfW02cQepIn6BFDgfGbpNOs9ZxP2A4LUgdTKEsDL0wiNKllNBFCuKctcqqCbchno7%2FLiBaRG%2FPO6Rync%2B3yo9glwalX7a%2BjrYOHKInDItn9mCdoln2LHDRKw%2Bt5QYcYI8IYM%2Fc2jt5C%2BXfP39JRwPHTw2vqD14S9dNzEI4kZIp2nCxjpCWErIEPWYMpjh7foXrlUQaJae3v0PLL7YJH2CDJKtGnUlQ3l5KgfzKp1eH%2FQ9fboTGRMI%2FS2Xo0oqKt8Yhh5nEjy65LzjdF2Lp4Gde7cJeg9iO4pTCRt79Saz52wmmE%2BX1n0rHCyI5fm%2FQ9apLj5LHkFXKxTFJruSQAY03GDhXcsmrqcYSy5j33L98Zdlh5PZV9nX97M3SdU9rB2miMPOReWGTLfU3iy%2B93yoQSi9nseqVl2TCrSj72%2BY3gAQsKs7PnwCwwTfbfrc5E%2FB%2FI1Z38g84%2BOXrDLmuCcD4jTClhv7ABjqkAepn%2FEc2hgknLZ47dMdkPZYhG1TIJagiEGqH18xHPsS696dWrqvZhdJZ8aWjjc%2F%2F%2BksYYLPRmgcO7Z2fvrxS7Kkzuu82I7MtghMtK1omtkHg8JKMZtWG7eqlOqkN%2BgdjFT0Z6nmQRrNWh6Bcn%2F5AI6%2F7ce9SPe2mtgtjBtDkMpY6zqX%2FkQEPOhWiOArqBqBfiEVkvlIlIWYono6aJh95OQcKc5jz&X-Amz-Signature=354a5d6d61516f3c200a961d75cbe6551f952b73226fb39ec3f7b1d1401382c7&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
