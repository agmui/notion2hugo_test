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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWL5B6BO%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T150842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwhKb75PEBDS%2BXk%2Ba5snv8Qd5%2BXGE7Y34DmGOpnFgq3gIhAN4lkOFlWmh%2BsoPNpBQR3rFaLgOyXf5BC2ZJZBcEDiPzKogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwT6BoJK9iW3%2B4GJvsq3AP0TX6NFNmnDMcUnXUiD3tfpsG5%2FFBTQIh%2BkRlh76%2FYMrcf8hd8f4fXbKkk6MxjmbamzwkS2jPvaF96YtIq43dL9xtK8JEkMA3rsLY9as63RVZx%2BODd4xIFMG8ZKStWIVC%2BbG5AOMeKF5Fg2qfqmcI%2FLg6ZQkeqKWz0nB1JzbQ%2B5bvBNwe7On1USFKapbVHTjCpA1NfVr4JyotF0T5uAuNw3ADnKsaFchmMgwZJF1aF9c3GC5m3XCeOJzrojKJmv%2BmsgpSmLvQAHqr4PQjMIjj%2Bqmt%2FhLmtCmzsduVeJl1%2FGOFSo3V1VEA5ekxARNJ2OOywHiPXNU1ltcnjxOi0K62CTqrSdw2doIyyAhU%2BFNFVCdjO75KKfyIDA6dZElkcjQpjFyw2K8OTFVPqymARaolR5QJuOtiRDsMkzNu5ZLMAsOcfaoX8IkXFLkF28rdsv810LqDpdTuP2ktTz34LL07gu1Ga89tvMQu6y0Em0%2B5%2BdkpPwyxuuDxt0szfpnqkkkMlC2Lqq%2FlT2WLdRumkVlrBXsfKqi5APmoDafLNl9mp5pnqT7iaCGb0w%2BmliOET27nmpAQ1P91ZyuUEk1auQmmfKICD%2Fhn5t%2Bj7grcMQ4UwBWxUOYk1LCMGrEAmvDDHi5y%2BBjqkAcurV63mz5W4FsBfOT9XPLpFqcZkrYcITKE8OLWA%2Fv3P7sGCsvjZI%2BCQWDLPMt9yJb6%2BKYm3oiS3ZmfWmS1WnnT2ZDp81%2FuPZp325guKVWvHzETwSL0rb76ffvrxvpU16NfsIGR8lqUyXUNfBck%2BSDhxz7QU%2BFhf315zyJH9A3ZJz6stdWsTAWbx7z9zPHD8sf%2FPFJ%2B%2FUQK%2BPsBgix4f%2F2cjTcMj&X-Amz-Signature=07c829a527f5d262fc78801b134a01c65495a4855898d107a9c2308c3de6eb52&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
