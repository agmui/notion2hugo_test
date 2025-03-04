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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEWNHEIA%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T170718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC4sWZvvQYjVBM2Ws4YTSqgwgTKQIhaW6gO5kUmY1HWjAiEA1IO02FIMGhwo5CQ3IaVLkKAqjZI2dA%2Fw3dSApGcwyisqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNZQaBVmWkjjRDNsdyrcA1m14f69%2B7jTyQtMP5dSQTdns56SGmgLgFJDy50nn0ul0ioStu0k0rOXrCowxgFq%2Bwvk%2F0t8USxUu0EGCVrzWXeNewwYEeLBeE6wn7TPzORvFWtPIhhlBLRdP80ZMDhyiX2ZLHYcWD4L2dPpXJxYtkdx3kl5QBZjwgf%2BrnRTkZmrD7TbXQcXV5RCDv%2FDGVkbnGAP8Xv7nN%2FWsL%2BHZuuLw6LV9fLgvnu5grJFaWAjvu6xw2jSkn0nnLWV%2BFfhgGen3xWWIuyJye59zVMOhj6uGrRXVMeLy1iYvjqMOM%2FgORfKwx3zFCE5%2FtEoIkctgLmzS%2BCYBzzQI4guxbqeBKZd6HkvJfcDKpzmHhn4q%2B00T9VUUwfuUGpbsKb8lIbnV5A7kWx6QdbNvRZ7Rmp7ClRcqSaVIpDPbkuC8JC%2BvYKfFijEMxFcD6Qyo%2Fg7XH9OX2NEBQyP%2FEraOJLuEJc2hd5UQftc38w69Pqb8Ltml3DikZWH%2BB3x8XbqZAWWv3ZxPHW3et39z3Pu5j6sUlXhVYyLZdP0IO1bqcjRmZmoSa%2BiTjLLmqY6aOdzWP9tb5F%2Fj6E2wcJlFuWr50xf1AQuQp2ajV8ugGgFFtMjZohBgV5qr6m1DU8w%2FWDIJPqNQhfsMLrSnL4GOqUBTGf7tmzdnnjMJgbxdkRZJSS3Y3%2BsLkuD6qCXTdJuHG7jmaFbjW%2B1HqIMXTbDmF1MlcB3GwCzkGl7jaHKwTWrr8QZUCj0M5nHuUNOEAVmbx6NQT4vQQRNMhSR9U%2F0vZlWXg1MW4FOAdWpXLyECfNXQtenbtgxhpjToeqRqhS%2BVJg2OcmPEPPbKT5CVMUtiX8MTrViP8cZn8AcRTFFjuo86TXtB2YZ&X-Amz-Signature=d527fdddfc6b5fa88a8c1fa71909c87e0a40024dbe59c9df39b1a6391acacbc6&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
