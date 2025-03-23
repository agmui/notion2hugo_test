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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QE5PA7FY%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T230100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGRwtk0yO7upfzqu2KKkv2NO1lsFjAuyOeAGEXbvieIRAiEA7qON5zglABDnJ131napQwtjtE1hGLWTijVKvkpPbJ3EqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEnSPzqE0yhTNwbozCrcA4YzTn9Y2OCtkIGDvGf1Sv24qvCkM%2FK0yJhx3a48fWsHUUVoBJuyq2%2FCuB%2BwIBOcJJmmKlGoaQ%2BSxkDiqe1QptOTxyCD%2F8u3sUOfxU4haYUlP7wZvvsu%2B4gswUm2KzIdmfCnpBncXHHuxPXtpOzxk9epW2XvNni%2FK0USfceSeDlkndbBKn8ruyZlaXOk2l3CKKfReBC4UclbBET7k0LZTAEW81vxZPGKTWCqVVx88UbS60nNuEO2NMzLZ%2FgBEZOzYi%2BlgBbQ%2BuYCrxN%2BDL%2BbmQSM9Cgm40SLfjDe5fI9ph0SCqL%2BefVl6AI%2FOmacMB88IvvyOBbkiNTL3%2F54fopVpureXEd5mQFMxuj4puCJ%2F0V96gkSMjxLocCqrAIQxuob1gGUwFJ7TChkdU6varceytA2h3n6GYuM4SeJS6KHKszbcX6ndXaLtX0UKu45H6v6zcFy8aONBGpVU29yI7%2B5Ycai9ZpZ1RLUx7V5BKXoFJIB%2BFZZAtiHjuaBlQb%2Fe5W370ZaOTaz2IFGBN8wT84F80pyXAcElzEdx%2BrAJZk%2BqRePubavA6woeqSRB%2Br8Lb1uN8I98z8LAI9SmsQWIwLdEO3PN4e6sFkuGfCa2mgXeL8JwcV01xJiHQVQeqzyMOjKgb8GOqUBNKDNwyd8rzY6GOljO68Cu2CFgV6pzMFGlsHdb71DpZGHBJLp65zzqCX%2F%2Bxeq85rkUDB%2Btcc192%2FaJY0%2BErM5XH3iZxaAME7qPhxajZ1eAQbbLT1n9ARn%2B18ynQtv1vAACNk%2BeFHQ2A2dpXjvMALP3FWbSIXwL7qVnsatxnEDq7ObYL7ovtSE8m7oYLY5cUu%2Bzl4DHYE0M9H0wba7hbwrRX1sl6d6&X-Amz-Signature=73195f7ef17ac3a6ec3ced385f5aa63576811f0c7dde02be4b75ef6f105dc0a1&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
