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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SREQDBC2%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T210757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDyYtRptR0ICh2%2BP6RZ1rZCbJ8s7aPw6snOVZ1M5%2FgXzQIgGl8HtBaC1XFnRuSnJRhgl9XIa56wn0gDKWg%2BA5KJnPwqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCiJLqtrXDzLkyko2SrcA8W5JDP97D6RRfhixU%2FyEWa7A6cYCtVH9tIvWJesPMqBMK9cye33NCdJMQYmwUhIB3Ay%2FWV0816IuG0jbp7TLv21irlYTKygPXJpYDt%2BNkko7%2BInimv8wP4DfAokxJDXSnwp1ZnQTQaOxwyYpT%2F9NVB2q%2Bi2bkzAkyX0DSycVRKnsgnQEAGs7irjtoKjUCxzwt3oXw3SD4Sx%2BgRnQj3s%2BMT7noQ1sgenXvONJ2leeWB0Fuy65uvUWEQ%2FxBSKp5t4TZjLa%2B02ouqqm6ENGz%2BImGTOOmKG%2FKEoiT3Q1h8kFUsFrdLsUxhmiD16td0KjpMnGGyuUtUb7qqbEt0gPReSO8LmRA0wL0fel35UuFMVtzqxcZih93BppKJV7vo6fwapU34xhL1Rz4532fHHkRAYID7kRLE97XvjGwWAttur246s3FDWjl0EvJA0aSFROM8e%2BLT5fQTTh2RgOcpRfGYZJqk1%2BYwX2jV7bSmR10N2C4Xrm%2Flwi2y6r1xlE0lqyK996hKZR%2FtevxzioWcrShFzhcBVzf1mODVYnrb6J6zQui%2BeNuCZhw9l0Gvm%2F9QWuUDuJVW8mXq6cif4PhqIZP9od4jv07xI0VK2kZYschv20TAqce1vB9p4Qpn17q0lMPOjpcAGOqUBMYZIm5JVfHXfkhfw%2BdlrZFmJ%2BCAm4ozkD0qhTKO%2B4YN3wJFXTz3YY9SxNUBWYYLMfSPgIA8xxyHGfk%2B0hc%2FtHFT9fQjddTxBMgsX6eRzZmCqhP7sRiHTUdbXBve580P7fIYrStmihGfb2EfggOKdT34sMp%2BFVnzVA5XAHyhVLiUz8%2BM4jIjgPZCvJPp62TYaBjEPqmoiMxCHXsMD53oFvphvBSTR&X-Amz-Signature=18d296b9df44ea13a38fd89f9100877a1e07533a4bda484e4ee760f32d6b02a1&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
