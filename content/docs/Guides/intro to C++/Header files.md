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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVRGKVCY%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T140837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTRtUOF03wtfnuFl%2BbLsoRHPGpMtu1roEU4lQrAX%2B7LQIgI2j8uDYqO1N0rZ97qZ%2Bsp%2F7UQ0lXc9uDl4XJ3uinBc8q%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDHA4q5u%2BEQuWXI6PHSrcAwle6o7e%2FK%2BU7re4OjaiIydHymytc6EWjiFhWUhQITARWS9r%2B2yRu6eXbbF7oWUCjX0W6UbJYx1UHGjVBb0xKguqMFDbvsZTveLryOhTifOJbktvyhL%2FR3fkIRDf8F8Rm7rOTNK7eFnGN2licUgA65WYwGi4Rc%2BjeDgsxa%2FjvzFkIK%2BcDCX97pJenbH9TyUJWO1RR0klhrgX16TnZMTFdfOWzsb6CayzvnSSL6AuePoyKmtnyRUY3%2BJ70WsGyS6WE9CQirXxKSKXfLiznwrv36qKETkNsZf0q8GtJcYw75XNuvJDhUTb0%2BwGR48zctfrT1MuBDnbF6uG8uB%2FwXZpmIqDqnMz%2BjD0Se1e5FE714kJJwtNUcwJdp%2F6LhwdRleRCCzgIRLZ8yHHBiG5USbWE4XNQMnuhFdsOLo98MIVAXRnsaa%2B3dCslFFSZqE2cArLiKVfSCwn5KMGZ%2BB%2B6Ari4tuKNuyNJrttm8drNJNCLaMcVS2rDjt40FUgOhohvNJVmVNXCxmn7WLwVuQt50jCAhc87Q7JGcW%2FqLUg4jHm12Re3EDV0yEOlkxtgJBCtHP3lJS6EbbFMsiSSqtJtAfWM8YZfWVEbG3VD%2B3NtZHfsMCqyJA0oJVFI2hHAcvxMIGo9L8GOqUB7HDEGLRhtSWEmzvS%2BU8aYjt9K4demwSwRoTPhqLWu8V0NKSNITTrP4LFCe4tnHwSeRLK6ewEGHAZKGwR9Y2zrmbRO3XAYx26Nichjvj%2Bh%2BHRDzcTA4iAFjSdwk9FPQ6GxoLKBYxCuztawb%2F0oKePt%2BBd%2FbuvCrz%2Fq11ILYkNPOBb%2BG6hrdOrVNPSwL%2F1460elxmyEcxzV3zZUGYbK7CT646yBU8Y&X-Amz-Signature=4064ad7a73069140e8530b7519875de78c4a455888388ec07e422d88d053e485&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
