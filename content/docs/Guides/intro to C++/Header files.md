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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654WQYQFU%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T210813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDr8Uvapr%2Bxa7179vEoMNCRID1qMedgjY10NzuP5GxGngIhAK6qnhINqthAgBntAQJSNiU6rjtDfH470ny2hxqq25MBKogECPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzrZYzco%2B9Q0t8BH50q3AM1Qk8Bwgaq9PBgZ4L0TMYTMWzLz0J6Iezw2NchrYWB3xc2lHvmwksukGCf9OgGPZhnPGkjUqkWnVsbjMs%2B03nsuwZH%2BtarRdbsfz6vasD%2BicmS2ZMrjB9zA1clDA9033ISppwxuf5oCbSz111Il2RhefS%2B8fMIjqQ%2BhD1vhnE3P5PmlVavGlwUwBAU2%2FzTbNenUDwDbZwuDdCaVgz8dVjPIbgCqveV0FFlhH3SbHjpMLqT0WCKoLm5MMZ4nwqKMxgeflFlFSNts%2BtJGnm%2FLdxDg7mVWEUwgX3o050BWv%2FphSCyk1mlwEbvslO0pzF0DFAwQVnrqFORKn6aiVWKXrxUWvqa1crS%2Bkk0gIaQo0yeTMwB49ckpcE1BOoRzrvxUsnPbYpRWDqYohlM5jfPn0q7vgQUpsyq0c5KpBsSXF28jM7GJoBlYymQ8zgRCkocv%2BZQPWUd8zCEXjKDW8TshX0kO2qlCmwbFvIqpCV71aI1Q2Jf3T1Wqj08B1iOFu4vK6qSFcmLNZ6%2F4oUiJ1DuhiBMO5r9745FKXWPNZ0EoO4auHQtMKiMWy3CxblJcfUsFm8bK8k2UUo8syURMOZzGdw27mn1T1hoxzES1ZwMjwPnNnmv9nlzYo94TZ%2F8wDD8vJbDBjqkAX%2B0dU6on8SbNGrxMQw%2Btub4CX7ZbRpRFYy8mxLZkpC6JJ1BFuLC68U%2BpZ7vQBCJfxPRjYSVyNQjljt%2BWQdtGAebc8e0maY5hJmRT3f%2Bv9%2FBxMtrKqNqjebvC9cBQ%2BhrS5bXL9QaHMvuGAuc9PLpuNLoDcXRMRQ8m1xVtBNNd8A9VNyvQObLmkZNfMCoPgduJklcsOen0yoXIVnsaRGOxDJQ5iFK&X-Amz-Signature=0fd1101fe4c3b1fc336345213cebe23658cbd0b2db459534a3f52b9d58dca74c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
