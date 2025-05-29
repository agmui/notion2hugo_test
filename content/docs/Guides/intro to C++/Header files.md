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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657BPPOT3%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T121537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF%2F4h0BWHrH1y43DW1dgg%2FmmL1rBHiUp1hnw31mW50Z1AiEA3ZRcdIvQXmkkv7BXy%2F%2F9T1aMLsxgsuq4fVMgxVmNwiMqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFKfU1B1heX9yFe1XCrcA5wR69u1KLUefP3t7T05yMamoZy3bH0mWlVLIhv%2Bxqw1NW6hPErTVxeH8%2B7ESIPgywSFd%2FGIhXA7E5jbH9h09EoRHGbVJXiiIsuoDf9fbFNWE1%2BKVapG9IY9Gxp9PhR4xzTZKbA94vkTmUah4a6P92h%2BqNw3VnH1OS8Ym%2FlndDenxJu1X88BNE3NTqHmVuk%2FVQyGEwWNRJHLcozUdE%2FNhLG6c2g2xYWw8GW1FwqKk%2F2yAXOafyq%2FFytksCSlVzjIox5BIIrQhqJbl6EimaI1g4EGfLTfn19R2stFmX7dwFmSxS%2FJvJAdMOHPuChom7Ez9uX5%2FDn6JH6KPL1gQNoLX5iKFuThgzPuTIRsKMtKSBFA2jHXFyGKvJkaMZQ%2BYfDm9ho1V0rWkMVqQ6%2BPGhU%2B9Mxu99LrZL1XHQ4U7QihhlIy705%2FTBz2mZL4S1RxqqO6YYTF0C%2BnjAFv0eYIGPuCSEZ9QJWkVgrreSAv0PipBsDOJ2lDYjEPo9oVlXkFwjs1pmrGuBWWAQ7RCmAvGnUubmlD6EZBdEpYaI950hSmTTFds9IW5q8H8UW8xCuGHoC5KXyMCnwPQQcR%2B%2FV7MEs%2FVDKSSRNOmnr29sMd%2BFbH8I6K3G%2B48EM0GllDja%2BeMNqS4cEGOqUBGH%2FRFjmfNra4Rzgd5xphc38o8LYKwXeNcBZqW3FY%2FNnS1v%2B2dfCjJRgE3z9EnugqJNfuJ5ze0fx0MEpShn0lSmfff0oZ96kZkuU%2B3zra72vuHDEcXh5z3Xg%2FneJiuluAMLmUgioqdafri2znfhH07K2ZkiXxPmRfgPcXdNFYWvFm7HCJNtcxCJp80G%2BaPJwAT%2Fr2MRcOBDj4fpFQcZEaCbMgkFsE&X-Amz-Signature=6b2ae2a2feafcbabcf96cc9a9a1e432b5992927cede55f4bf764e9b16e37c187&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
