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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIQNKH7R%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T140730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIEmZzxnjciYE4Jkf%2BOZhePmKLwhbuLhdTgpwCFgPVeZdAiEAmOYUq9WlqHcqSG9PNO6HLHKrR3xCeu1jYcI6wwJH%2BVgq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDJm51q9C7q1LVdR%2BDircA5UEmodASC6isWqOmqzyXIKbMI9Q3XTKUTzbn%2BOnxMQWMYGoW3Q3FFS4jlwD7dD7LVjiwjAwqWSQ6Xl2%2Fr1zDwMnMVm6mqNSFwj6Grt%2F%2BeCEEnR%2BBMTvVjObd7FnLJKZylxqV9qWgF6s1CBzcBvxhOQjecH3nQFLqKRXE1diLn2TPuxPhTK6Y7%2BKNbdp%2FqsOgFtH7%2BqHjui2P0XWpJGko1rbSJPXVmuCyYMvtTwSEKmJpmAaE6%2FvNa7m8dyOBj7b23syQ3xyHO%2BWNQnxHfwIqSYnILXIWG6Kv7v%2F2s19vCdYIZNsgfF0lPzr%2FGzc84k%2BpeZ0naJV4ZF0Qh69RAkmVLU7agxTmSryAsUOVwiOU1WL1dBPhQSgPNfixtvyWIRlEuvE4DJ0ED2h7FBysfUTenZSPCbFOYezimyojRxSdxLzjbK112UNlDgckSNbz5h%2B35QJJGtG8E3knqUR%2BuMKcMequ0Yh9H2XQFuSzF3oz7ka4Ds0YThtZOgxSss8avQwwCC3%2FTnt9dWWe5D1bJPjK1%2F5aJkUAn7zMYEnTTjPt53jJOkHx7Gr9YJO%2FII04%2BfNACXEmP4fxA3JZNGgwIs4MQ37r1mfYgyUP5DcDO%2B6qbKwtOgPc%2B1kW%2F%2Ba3bW5MO2agsUGOqUB0jv%2BZ49W89MP9l4uFVRI3XlUsqPFmqHkwgo9SYqJF6AyH6lLEIE9tz2y7oxQbOTmhv32Q7n7MAf9P8VCOcIhRoFWaMy0dqH%2FjCDaGpeumBKLpcNxrquKjr3uo1MdzgDvhhh5wOy9V0Lq%2FOjmLKUsAbiGRKeCsjS0u7FcDJuHikVcAmsLvBg484oT87WUfJGWx3ohK7De9DR%2BqOO%2ByntmDjOQC%2FZh&X-Amz-Signature=c548176c0417dffe92f57ac11b8bb5e7b49eb529daeaaf4a258a3692b21eb3eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
