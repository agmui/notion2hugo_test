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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MPVG5OQ%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T070932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBCOUbjE2XsWI2QsRvRVOC9NOZK1sr5zDtOaqc1ZMj1AAiEA%2FyI5B0f2Qy%2FMbMp5OYgpomDrq5T%2FyfDfZqS%2FaszZmrwqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC0seZkcRHpUGL61RircAygRx%2FdJ6B62ejPdfmiV2RWZ39EvAtWsi7bGcg%2B9sv%2B5%2Bz%2Fdh5gcmTdeXez%2Bg8VMEQ7wzYDBfbHD7va55161IPcBCEHbYdk9GnLTfbBAyzgj4M42hjyUaDOCmysM8o0GvBhm3Yh7OK6Mrwrq6nyEm10uvGBH23x7V%2FPe7008hhY28qYMTSGFGBV8ZhvD8dnQ5pwbX0v1tEgvRXMSrex%2BkgRyhbn1x9%2B3lLW13OHq8i81v1ztxjYgSHq6ZA79Edd5g2BGKby9jJI5YPd7LEeIWwTnKMiXBHLLlxyVJ7JOMH3Q9asLd2hLPUFoKv5BelGQoQs1mGssY4NzeIPtL4GGCF5%2Bfs4W%2BAFZ5nMoy6QVv7oH9gAiLRpydYPcSMKxMpEXmM8fSzbMjrW4%2BMeRXkmwWAkQkbiYE7G%2BUAqVzJMzF9Qx7GCKjTDZqzpsPgs8%2FzVGJbV4lGyENFNtLKpLSOu9wmtNrnZkyk74IDZB1BAxVn0ldliMlHfJcvPYChC9ZgqTUpJsjtRwETqJLc3sVUEQgxB7O7eEwaqsqBHjVLrWN3XFnVJDXAS1Db%2BezJNN3G%2BcxxHDMgpZzxEQfOcrWYOLYpyXYF%2BeWGp4KqFk5ryd0G%2BNW7M5f3YwvNfMjwGBMP3838EGOqUBbppaEb2z7JsH5fNpDiEIPkedp13ETUFqccjX%2BfknklT8upSwbXEBzDONdKvS18u4kVv4%2FPVavej45tZ1oYSQMwGf6hhih%2BP3VaSjeFxRPVOwtZMPcpgTib3uV1YTlt8kW7CB08L11OIVKrzHbzBhmlL%2FtnmvfmbjjJhPhWAyrbwz0tncy6HiKfz9tZTPH0yhV3sqcn8%2BuJvIoR0Xis5OAahDAQBI&X-Amz-Signature=b8dd59d615fff9721df3956ef2ffc47ab3aaf5ae8d9b6324b50852da429fbf32&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
