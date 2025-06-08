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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKVGSV37%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T034509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDR1c1ZXURgQ8RzbK0%2Fzean5OqwesYmVyR8rTaElhCLYwIgCTuPc38VVqmVEhiNzmgngrVgWeg8BTo8LUGRUsjyvqIqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBdVbtjzyD7JNij1ICrcA%2Fm%2FtdWm8Z5e9zlOLvB1wtn6Q4AvfvGsAsRYSshdGKwOQLIMEf9hJb99PkAI4afehz4b2LpTrFnrxHMGvVXQXeSfttuQK%2FwWogtMgH9I4rqFi6p0m%2BUTvx9oldB2ZMFWMbmIwZ6g5JyJYvnVMVsnv2NWjbp%2F9fpF9A1iI%2BBSc4gxWxiHujJcslrhCkZ3jl2WaSjtQFU3%2FAD4LbeoCKQrCZP8E8mBOpCftfbJygxjbB4WkAvqrvE7e%2FfzNp4%2F2tfZqNJ24aHgDoLV3SSIjFCC32zvy7W61GsJpVftTQrgFOHDTwSbHdqU6v4YC7ummxyVqjLxS8Rb%2B5A11aDYn9usWIMWBsQxMNQbbRRmYvQiClEv1liC4atZ3EtLOrxXO1Uo638OykZCYCcclciuLpWPJ7QyiGNfpslRSM4apXPmbjqNMz3FufbwUdHPXKCpr09YQEly%2BHVHt55%2Bwb%2B1dKVwggBtiHRS3MQsAEGUyPGCwrfFRIfj6KV5rpK4r6FGDwoYRZ%2Foz2S5z8pILS6bDptQfsZO3AzclJn27rTCLc7U0%2FWALF%2BKTlzFHU%2FotMJr31DyVAm38%2F5SMTbPw8RwtuHVioUST63v97s5dKYU4PMPbMcwmU4vutISLM1xcEiiMOSck8IGOqUBNd97svLiyN04dIn5pvnGwT6uDTPoKOc4MKMuV530UUVsqKSJS9V94e%2BV2VmUR0Oz07MQdDQMma4ok5n80Unpnsu%2FGKH0H6GYrsVd%2FGJnt49azU2zzLnnwDE8Y90GFJf8ZCsdILNfoRjMXUgss6UALbC7E8deUURT2J8pgpvlApKRYKboiP1SrZRZFbL6s8xcFfhPi75Snzuu0uJGVJ7Y9mPU4RDc&X-Amz-Signature=b0c91c105a767a4e11cfc8ad0c5248676cc253cf995d30d87de73a4969ea8f79&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
