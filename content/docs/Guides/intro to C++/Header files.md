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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664K4223ER%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T170729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQC5Sha%2BCysoqfVOFRjdFngaKAtt4qg%2BRRm09LbfZpn6fAIgPytN%2FlIykIqov4Qf1w8Jq4EUske2a7SGh3Z4JWtQQ9oqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHxITArjxRSg5GsaxyrcA8FzvO1TQZd3dKn6S%2FuECCoW%2BHQGPcYElLi6gEASRguV8jQLaopj7sNkMCWpKSr8k4dm5UIT%2F37AfaRabhbOKUiuSJQVWbwy1xhfEES%2BsPP7Osku5yk2wio7GLDjSQqdxzUiZ8mlxnssbRdl21dp7E4QrSNs3iJJwNLh5rYfwUUcKGsn7WNedo%2FUUnecMr2D4dMP6bM0CvN71xjhbzx7bjFdfT70U729%2FLfjulJYnYKUTm7f6AuUhGK5eyeoiQ7NriNRH8eXnMP8M%2Bl5tOBMRR%2BtEf%2FMpNCQnEC0nMLTl9Pn91JYpE2Bk89wyjw1gLln6TZXHChkJD6KI1vE69YUWI3zDL6xXlcR%2FSBtwsnlUAAYQrNAskI1%2Fq0eiCFjbyayfm91nMk21u7b1UbeTtmMfdGn8QFE5VlNV3FXZrIFcPmoppOLC2PpgybNgzaWCsl8UbYu3LGhs7lBzw1LwVoIZ62VizqFsCu1Tk7hIc6sKnEusLokTgkVr0H2jxn2h2LFItWW0eLYUBO5lgjB4nrWRv%2B0V6QqYu99oG%2Fr19tTO7CNc18DEcxuTECYNI0Faa32%2B%2BcUbGsIdV8UcFvBS6xSUgcifDkoLXdYe6cEGMFPFTsuta%2FCxK5rkHrwYCw%2FMKSdycAGOqUBIHkXvuSv1DYDoAq%2Fj563EdM%2Bfvmkgkw28ghbes4MNIoB1OrV7NRWV5LE0zTMr5rlbgwkJAhdY8C857PNOcjVs9yRAzNxXlRrvHfPX4%2FSk7S8QZN%2Bsj2L8%2Fd%2FIAo9vMFqiJ00wDT%2F7BvGzCOv8FVOyOVWKtrB58MgrT9KO4BnHQr%2BRoIBeJ2H8HIAxjkv%2B9qXeAli%2BslrgopcGAynXvZBvDjxykBr&X-Amz-Signature=b93d2d925e89ed9d05877d6b17162e99b351b75eaa42a21e3a16808ae6ba78ff&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
