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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LNXTXQQ%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T190121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQDNyY4g0bc7uFQSuSYdXXB6iAk8EN3nZI0nj6C5pJOJnQIgfrE8AcCNHZtzT4ezl7azWvfVAaUOuZHwpeER%2BkEAdCUq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDLB6jElhLyPjQByf2ircA7XuIIjVfz%2FCtktDYtamVtKfdJVVlzUVY4kHS1X15YDPHlzhw5MteeIlAqYlkhYX5y%2Bb4m122URJdN672CNU9MsfAlNcS1NC9huUFIr04hXNS%2BaiK%2FbYPnzUOW%2B3jzls5QbCaQ2UKcMpt14GrtFq0Fdni0eGRMB46bIXxtP5Bgq2AYsIfPcvwgiRMI8WIqPinmrN9EfalL01u%2FjVXf70srAS6mgdfypAiwkGT%2Bo7woJg2DR7OxBxv1PURE%2BmCn043IZ4G%2FWIJUC3gS2SuWw%2Bm0ZoBfTVEnTNQdGiEkXdxAGtfbq9R761u3AZdiIHElx9JR8dG%2Bh%2FHhssMxFKrVZsYDfbdY8A1RWiyp1ZR%2F2EvhIf5Da1O%2F6POEnGK07nsOuioTKh0xpABsUgOS%2FinHHCeRwJ%2FSPFBEl1Q3rEM3AECrJfBX%2Boi6hjho0B36Qx659W%2FzAyEBzEHIqkBP98ysn4e5Pbu18WMvaOkO3lQJXYTe7l3xqXo%2BB2euclBfGHGRLpXPS%2BHewdvxSVp4XdeLc9mobeBQmnNSuxZr0RrTFh9ucXm%2By3gNMHQxXsvuLdJeTanBUUQc5YuXf8OKqf71biPC%2BSHeple636mWOmvGW27f%2Fy1S9AcHZPi9OvqCULMM2Csr4GOqUB5qGOZVhhan2CcwQ7BsubcjcreohfrcMEaDsgHZUDAQa41S9ZXKpw8%2BkThq1xlvPEvJ%2B2BO7DeMvpMYtIJb%2BNozN8GWd4p%2FKjSV0jA0qghTRZbeeOJ8wjygntOFD%2FatsCLr3txeag%2F1m8Txm%2FAPCYxEhtCy5JNBh0o37BwVxzZIEsXnTDmAYQk4FYCsZuh35pMF1zyaXxWUVxMfEl2erSJ1ZwMsR%2F&X-Amz-Signature=c409614a1dbbb09d85ab664dd0bd82278b76fe0c5379ce10da836a657390d04f&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
