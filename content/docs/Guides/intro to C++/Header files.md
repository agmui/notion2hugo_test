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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZEYCD4H%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T190241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIACQH0ptFMTkfgnQy1ldH7d%2FpGYhYyouTPb%2FpG18ZjZTAiEAoGvGwCNZoB0HYL3MiXs7PNjuvJKpPLIBfGXiia8npRcqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNj75r5lO2fsNdy2LircA2PRwTGOBA%2Be9p1kqfbUDkdjcQJttsvt7YKWV6FSKzlwmqO3NIXYly%2FT5LHgiPkNUMgBpKnUnnfqJ04nyiq3l%2B2aHBKJE7ZUpki9lVYafaiejqD9pQrwOhNcGZhxDG6Ki6k28YVclpBoi2Dcgx9CjWcbm37PzPRw0pecvlQjceSSbkpzdIkandq1JhBCCS8IGAWijfywFcXNVeE297J9phESMpUT5Canf6UCejqwoe58m%2F12nLKW1Cyf%2BUI0OFp4MLQ9SS2n5XFhUS4%2BBGbG37eaNygZCXiipvr6KQgYkotxG1Bi5NQv13OvGxwYPBNMseSKR1Ly3%2FLePDt2Ay9KI%2Fkuqug6mF0%2BXIhn0CGARwZc76vhMXDOefo4HJi5pipzKsGxDmhPOSBm2kPY1RVdS%2BTkenI1JGvmKGAs%2FVnJ8nor6t4sJjo2s%2BCocVp%2FYcI71O16oJOpwfv02KQMMxaMKQq23AatPj3gOW6jTh6e0i%2FNl%2BJ%2FzCzCjp8%2BHUG1UEaZQ93HrfM4fepmOpnxiYkOwwA%2FgNmLIQE%2Budd6QIKUeciUCZ1qyZMNOJelw26X35uMHEJoDSGX9zT7VkVBXYbu36Br6bMan4rPolsOmewb%2By6Bn0uZiKL6Kzxsgo%2B%2FMMPw%2BMAGOqUB6MNDPPya7ixFwjL4op5trNQ%2BgVtLdV9%2Fb9BITmh%2BLfXgsIxnhuplWBkbpWPmpxA7T3haV%2BW7a2yqSvNYfnxoQwqQGbnW64yDGvYd7wd8WkAL%2BO8RB1P3oRx%2BljGSmdqQgxTF5%2BZsPn9AfFfMV1wFnU8KG3oHnc3s6tnfV%2Fl0%2Bj9u%2Fwla7lISTz368RUwrDPfSgSnMSghbnv2dju9kezdAKOzSjqS&X-Amz-Signature=30d4c0dacc3472a632d90be8f1f9d02aed8688cdfef930b7c7a8d00ddfaa2443&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
