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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EPZVNLS%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T132140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQDX71l6fFkRpfjk%2B8lKPR0O4XhknuEGV2qtM5geeexKHgIhAKRLis7mgCldb4%2B01QMiCp1HaYznazoqVPQW4LmtNn4uKogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz88ADP90kUT0G8X44q3AMNGYLAcaZaR7YUw1MlanunZcOAh4TqQq7YvX9%2F4u5MbzjDiMHlSkBAWsdNtschvyvikgHvphrlnQWkHwaOHxeIPaRHyjI877Ud3d5Lt9YnAMuni4%2F6k8t3o4bbgOHYjPUXO2x0V17foV48mp4i1bWJJGsIG5x73YFqbBqkvxBSk9fGOwciylU34aYbssIg9FfGYuPTdvVKE5xJVFbTG6Zz%2FW05yYwLVS2iKRgi%2B4WowDkkRVTKRZVlSD4h3iJqGN8lbAjipb8shiaMqSntJqZ84z%2F93Gz6WEKozkXfLykPM3wwCVu42f51p%2FtzQtLAAz%2FOcnYwwzDnklT2207DRxrveO%2BzvwvfZo8DaXcEDobqh%2Bya6dtDOuaRQMuF0u2UwoCNvN3j2mWH4xiHyJO38IxtEta8EhevT6BviLHkFQQTr2atXa1I6wlYPANsYTj0FbGzhhbIMo2yTrvUYF93E2hQfanKGL8woboXMZgKoQjR7glOycqKbu%2BLvFKMvh60YRZ1Ygxq0XYTeELS7QBle3AAiE0OmH5ofZ54RuJOYuAe0HrpjHQXOUnb4glAGYLlqae%2FLRFw9KqIcuYan0GTkMG82IR1Xl%2BBLVuFACybgYLUikqHgaI70XZVhJ%2BjSzCh2cHBBjqkAc29NyQ49yXEj15xqyzq6K2u%2BmG2j60N5t34aCNK6DyXRSBFGLBAqx2AGWqDCTsZM0UB7qCd6pk%2FMBHAMqwYWq%2FyIME3O%2FffO%2FD69yZgVCqi2ua%2FtOf%2Bf6LOOSPmXqlBSefX6P6nNCuWj1kC759BMux2v1FPoqK%2BzmCPQoBjCd6u0%2Bp%2FKfyriBwBakilKSUstCpo7WNIUk8Mp%2FhsdBNzJ0a2HagK&X-Amz-Signature=1dc9240103882aa4f9c0bea321486cfb2de32d6cfadde25afd410e0562996ca2&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
