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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSUVXAQE%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T180943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICuG%2F2WymCcgxn1UshU7DBBggx7I8SQeHvY%2FQ3T5%2Ba8cAiEAyj7xhvBn2UwdHng36e2nDGB2lg3P6LBcAJX6eEZHL8sq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDNcUm37oP9VpqsPHFSrcA%2FaEtHC59028ggGbHWpSIp%2FomFxb18OGHlIkdtePwX0vHdrZf9Q5a5ydwk5fGhxCwshPRwKR%2FJSu%2FpHldboYRfSs4JTqrrOvwd5AQnQJNBP9qmZh4O9tMUVRD0b7deWxd1T3O%2BaR98Y18T0p8vd7DJM%2FGT0U3%2Bf4YcG5Zr6apPBIBm8QjphOs0Bf54pvXo1zU3Ocf1MUFxIGcV8u6vOOEVbXVh%2FF5YtuK7nXJLm%2BWxz1RXGX0PuZkMmfEHV4M0brhyEkPSIo8Okgew%2FkhW%2BX9Dkm43xghCxWX5iFLHBW2s7pPp0fhYwatUif9FVAke%2FAEm4m9vPULEkUuWAyBSH8Dedywv5o5qT3a7TYsaNRxeL2BDnc1S%2FO%2FGN%2Br7oi2IhVFpXosOwQiN%2BAqsmPUvA428cdQWZ0MFn7z%2FGgDGayQ6ZPuV2Zd%2BY02iyYQ6kMRwvRSd2ufMYRg7NkAyMF6nBxHkDHT9eh0jrO87MvITY90BXugbVJlNR00%2F7oarqHaclYxzC7Isa%2BrPXU9hl3YbNvss2iJmbeM8aWFpvd%2FtEjpRSEj6s%2B4jHh%2BNfHT31vXNUif4WspLsaK4qtXc%2BSeeB398wekBXoECQIKv9A%2FIb2rqh6RjjO%2B7In%2BXKBwRtuMIz748AGOqUBFqd%2B9vFg36%2BkkwD9tNwm7cqJdXZSnl8HJBiiXTv2gxr0brI1GWhMdawUY4BVXpYCXfq0aW2mmuaWW9mHRFNDqfQ3wBRabfvWYha3kGmBhy1d0pk2pqXkqwHVaNv3sruFGSYgqB2KlAYKSreKWDGi0VBdfgER8c7PE3VoGz9%2BerNmALhtx%2Fub4IQtMnBwHcTq7Kz54ccNrH%2FMiIQQ2fQJ2D4b%2BkLN&X-Amz-Signature=2fb6074a567956c0052f572ec25d618c1c99bc765cb2b3c92bcfd4187afc2155&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
