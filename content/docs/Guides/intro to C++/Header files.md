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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SNFCEKM%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T121655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAInzRAFMue%2Fc7YhS2n5eGGPdActC3Kgk%2BewWxhV%2F9gmAiAAsg1C6AELM158Q54hJeWnN9I0a2E7GJ3tx2AEiERhFCr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMI0dVBJvYEqYOvy1vKtwDyDW7pGj0F65nRq%2FKD8q88x3zWRP0JoW2jQiuwKdG7KJ1aDmq9aeuRRoBTrJpuD6oVw5EFwv7u0k01wDy82JAneeTt2D4mChMJYY%2BDvkx6JkESzLEULjFKb%2FrqIYkgzVwCLfrXg0u6mEifIr9N71OPgb1rigpBzW%2FxkNjLnoC2oXt3GiQ2FFatbLssLI6Db4guHWlXHpLUrSRRH%2BOflOYOpRdMUlfgHSp5VP%2FGstp8QBI5svCrPEgI64C0Ap6itL4%2FvnUANvpqW%2FQjGVJb9frudNv4O8XmPm%2BLbmOY3MO%2FjbIY4KSH6pxlnyVRJepkUxf1i0lSCJAejfw94K6EM1xulcSSzurfszl%2FRKnm8Vsmo8TgqxeIGL1AV%2Fdk7gUrjqJ%2BIwkXE5OwIHGoKl6oM4e0zsX792mMEhfokCPiF%2BMBbQ%2BvXE8rp%2FfjAKbYjqJqKkoS69WvelsAv2P6NOhw%2BmW9kPiajpKBLh31xG%2F60ETZoQrA7WWu9swdOTzRXLGNJsQpQTNmeIUK%2F4aRCTmuplN2HpkQmimeNnV%2F4bKiqsqgWXokoW29NHlDyNokRLsyyEXHzRV0KRYOPaJbanzp45S5rS4LuXFuYeilaG%2FW3VDX7aBt2chUMgLgqU4pr4wmenxxAY6pgG7F3gD7DxqEc3MUTdh33bWYrvspkU64Pu3ZaeVBhH%2BRq47gqRaI1lGWYyJcC5J6JaUyKVvG2MVgfleq4%2BegxDsTK4LNy68z6Zw7XjSyekbFDB04HrjQcMfHgxUzugT4wiLMMTRILcmlaWenNyrsFAXo5%2FqgZ7Yg%2BvA9nKL5tP%2FVjnNzNWZHN0npW47x%2FyCJKjDfCXl3I2cuSzRUWyrVP1eWzN6iIA%2B&X-Amz-Signature=7a227d58cdf3f9492b859648c5b1dcd748331f8da2c07095089e5719133f185d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
