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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIFJZ64D%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T220833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFITtluUHosiqvD3eB%2BZdw9tG7GBOZUKlsFipe9CYso0AiBmN2jriCUeA4ZZzJldSM8cLP9lHAQj8byEW3SB3zI3ByqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLd7ZF8rjSOFxRlfIKtwD1IftP9krhZvsvp8pchVR2uJWvbf7fbCxzWHN7zAiJX7upJ%2FbF8XvkfgVPMS0nUZ0Z5uihjYu2mf4STi12UrLhllUFru22TFEMFWihGOb2JnBS4ffrW%2BUAZEvLGM5sV%2BFskSU8wmlbLUe%2BKjCQkfq1ng2ygvCQiM49S%2F2F%2BNjcrZ2VUQgLwaZYWACI5nBV%2BSYFPTBFI5ra8%2BDA7CFhaGaoRTDgQApd5S%2FY0YD96HxNax9PM%2BAg8cNmwcFw4nV38a7XxJe6WUXxGEc%2FkSa447IEv9q0SObVGcpNUfAlgHWaXS0Na5uP15db%2FjgWT6iyGU9VPYvpWJaiK8pEYEzTDrP1bHdWVYV0LXCZNyXRpBf4LV1Hi6plSL6pu1CcLObtiIAATYMOKVseIdIIDIu7eSa2ca5wHepGDqJIPTvgi4fdUTp1fR10EvPw%2B4qerIfPxmuO2Z0hLTvE1%2BhLE4etihOUtIbWemsuZik6itLwp%2FyERva8T%2F8iYzQ%2FSPPoazXRo3W6ZTbyjecaCcPHmekw7x0yN3bOHbWu7QeAMqIfboKcj9Gbi6ZC8NyDU9C9uvRl8VuBS3cydJHde3OGaCm%2BK4d33kuGFjJ%2FRbTbINWwfEt3Z%2FJ5dkRqdSoG7CcTBkwk5WdwgY6pgFK1Mz%2BipL6j5b%2BwX5LpD99g99NGHLHpY6pU2s5OkJdxfoAVGT6H%2BJuevIzP8o%2BdB8Sw6W7tpWa3LUxHoO8GWJGyXVJ5xwJmx4jRdGyO4LTCei1eyk%2Bb0Vl%2B4k4MayqwQqYLnDzcTgOm2FXw4L9%2ByfZ2PZgjVnSTM4PdW%2B6W0ZV1MyhKQKsOwj2xJ7%2BpeJS6Ow8OUBXcv5vts7eS3DxHl4%2FgrohUR0x&X-Amz-Signature=785291fce547f30192768b788cb095adc230b3fd234dc3d3a6725edea73d9a11&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
