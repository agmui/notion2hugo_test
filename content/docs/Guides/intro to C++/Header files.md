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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIDGPRGR%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T081246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIHYZFWb6cuawHYvGRkVMR7hJrN6PsKGJR9Id0%2FqZyflYAiEAj1Mjh5zeRLxOXKqhU1pkwLy1nVFhH63WJD1UZELLTUkq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDMIU08zmbmiU4bRz0CrcA7YiQSbRgWDe9w2nIS%2F3prr2fOPIqsy1GI%2BsU0NJ5xWyj%2BTnWi02Ejvw%2FE7L6TmQGj1QkT3%2F04nY29wwfkpD7Fsr0Kidh1NXowJYJtLKwm8QiFsmdNXczlwY1vvCFC%2FUR4fSfG2cuDxbcnb9bFw5DdXQ90Y5dSjtVs2o9CgmGIxtmwDjISz79EelL8Cx5SiBjTatClledmEyX0Z40GRVO%2FhulBW4r4YlomyzBDCVt4EG183AxJaf%2FvYjMZ%2BjV2y7jOj0CT1JBOnZkRP2t4chJ2WpW7aQ680TzIQ8EpdjRwn6ntsixud6CyQmE%2B7l8uIeAU%2FVkLVoKWpTPemK8Kkl5uwGDoivXBi7gzbojcHPDYll22MNPqs%2FzRPw0B5ivNq6bCPdzkYN3f5I%2F37WVW%2FIC5xdPLrCcBE65oPniynq6jhqKdOS8TKyFtOHM7Rcrthip%2BL0unu2G9Thoqr%2BHAxknUoUEsxFMEVTcQciJ8g8ddyX7EGnUzZVIRS%2F%2B%2FjTdYDONHyi4C6YZq5DL2FuHFX7gTNv1NQuwFcjNS0xylpIkA%2FhRc62OzmHhTUZUANboyQ4BPur%2BrF%2Bv79kclvj7%2FgIZfnAuFUnI1TBnFEyqYeLtmA6wDRkOxEsZbirk%2F6oMJbemMMGOqUBTPBpqZRi%2FsMPQdWodmmdPyCqFhSHzJPOsMqCO7tot2ioR6ASivT8TTMA1IRoJpdVEPQB0rA5NrDTjUaQbRKAI3daVm54%2BekdEUaFpxJMufiZkVOevapj957o%2Blj4ghuMpEESpRWnKMnKyMDBeUm8hRgllfpm45pA6V4ZRsag9d1z2Lydao%2BrCxpzcXpjqJEUPRUdZHiR9lfc%2FrEWAOYNaX0s1jA1&X-Amz-Signature=69f19f90fe914516425c58b4c59892dddeac8a923824f77f0a4a38c43a2c4054&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
