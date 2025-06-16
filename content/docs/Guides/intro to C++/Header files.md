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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ILENE7M%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T220846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQCzJ3O4ANOcnksi2TMfCHkhf%2Bmw81piZ%2BWEZmCjSiKVpgIhAMX3mX5dEEPllTenc3xyjBLHrUrXisStzu2DBarbXbJ9Kv8DCGYQABoMNjM3NDIzMTgzODA1IgwkDOcurUfmQ0GcVmYq3APMqZfaVEnSrn%2BkCNYPRzWXgBsl3BL%2FhLMMS64qkWqn3bCX0E2u4oAIt0MUZl%2Bvl0Q5qAnRrp4PD9Sp3gjHuYcAx0EWYoIdVM47Fn2dxSIwgssbZALP6wkjviBtens9BFnrpuZ29eSD5sdMEFYkG1qi8Xl8XKPA%2FWMq8zwHu%2BswscpkgMYiJopBqqtCSlG9irwwchuyINam2JFcHIaGxmxeHi1dwSGv2UmDK6e08fGI7ioYIo%2FJn2BIoGimyJW3yloY0Xp%2B46xSV6iVy4oCG%2BVMgBFNTNWL98frlzhFqH%2FZJ8A6hv7ZpzG6k7j1cHOKsCCso4cDgqjHJSgG2MGGacfp4JMtS5tuo%2Bc1CFhq8PTjI5qNP%2BljWn%2FpuI9KsXCDX97M0tmv7732hfDSnJWtfyH%2BnjyXJOE7DRppQDekL3fbs9bGBg6Whw8ef32uD6Tj%2BBcpukshri9MHApucboWrJiKLJWAHjj6m3sR2jASF5jkvsRSlg82os4kXsxbZPMJfzDRikUSbNUerPYj50pEd0GReubjhkUjtHjHnqdtC2AvUMCSqU%2FhQ%2FHSrrQvhA%2FvVLHIBfnzeif4FQ3FXEr9kuhckZ7FVWI18OvDmYp%2FYlr8W7ZnOHdhGsQBCCbsGjC%2BjsLCBjqkAWBhkOEy9gqh5wMdOvdP2WI4yIFNzZ7SNTefa4XE%2Fi%2FrBOZ66GP53qoJ40Ef7dUdv%2FoVH%2FzTzCMfquMoDjdX%2BvZTx4QnPPmU2EwUMe1%2BKlNgVkHtYnNtJ11HmWZ4vSQXmyUGGhTLcOOJKAJoyLHxRa88LxHcoHUKUOxTaqxWVKpC%2FPlF1%2BdGubAf0etIXuGmlwWvOMAXF1zPsd1rx9%2BMEDmvCzlh&X-Amz-Signature=ed0cfa4324614608df05befd89dc0411ed392211b8ee3ac82ca4b74fb967c2d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
