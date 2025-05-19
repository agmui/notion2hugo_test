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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HQORXUQ%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T230809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2npgsV4uhQUkyOGcQwL4l8l0ohStwSuscmcjmcGR%2BRgIgOPctwb3NmTBdautPc%2FErNpPlshVB2P3bw50J0TxGK4MqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGXs9QVV%2FBRalvqnRircA0GNnYCb3Ff7Dl8R0F9RckyzxHe3Q2KHIXImh3cmWLBAZEUhWTAcWRLbZghunAvs%2FGwnDDVk1YCwHHvB71dN0Um5xIaemOZzwNCwiXcFvhESuz9V0xq4M7cbNuTRWrXOKUT%2FlTtqk4dWIK9PtOVRwpcwmqmXKulB9rVpUCMwtNCm2cQ9JuSJVVMesJ3nZdFXXMCiRgvZ2SbBK4Js1e7hGgULSCmiTIfsxDNVxbU%2B6YDcJdIZfeOsPAbPzsUbw7wDZzpTdrkIiLnSucHQnKxZwRijH7BFNvZXgf2bQFJortCf15uY64mf4MX2CptSpS0GEXz3NemcDFyvCJ9R4yQP6HWIfnTsrX2KILJvNmUKSlV38T23dP7z%2B5GcDx48vQQ8J8C4GMZmXd0u69Y6z8Kf4xV3YhPxfGLpDoTEr0bwbaBf3yw4lZE%2Fy4GOujTlzRI%2FFXnLmuXxPKy92dMy1l%2B017t5e7mC2spOUzzu%2BjIjyyFCtbBUWvA8PDWG2JyK%2BwTHfm4%2FYY0yOPG5J5I4FBwPNcZ8XfuYdRMw%2BDZVFrNcMNiLc50rBnRLVIJgHQUNBljji0pUtfiO7cW6OYQk0iMBBqQS0f539NfCIABe20Hpd3mGW%2FmUFoZsNUNv8tBpMMffrsEGOqUBfc2YOdDMVcF2hUTmf0cvD0tliJAycoXim9hgEPhYxMLJYUpbcivhjN3enNU7ymA%2Bq2LVQ9E2jyvh8rb0LJBBKxIS2lr1zwsxBuhT6fiVQOEBReOdh%2B3S6GV2A1J7fTTm8z9eLlUnSoVf4WvWbSg%2F6zdR2Fr2BgLCot%2Bck71skiDFjSZ5kPjsJicpSPJDQmuyyH1RbfuaRL14%2FTLA0gMh4A5m1lLm&X-Amz-Signature=923452a58a5fe4cb8bf5d8950d4d02dd80343aae499f117ac3e9aba9bbf44dd9&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
