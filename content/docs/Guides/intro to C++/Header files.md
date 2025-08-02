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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJCKZJFA%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T061241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD074YGSO1ysovnJoJkFvKqtTVeHBv51%2FWSdwSe785LTwIgFBS7BAcQO95hxdlbVJGMU%2F3RA%2B69x%2FBRifsBb2KHqJsqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCUUFTHOZ%2B8tZOvqNCrcA6BR3XAwDRZ2IWY0z9s1ovOf%2FV5YaT3a519HoRPyIxsxv2JHHftTpAWQU0yJiDYXXniAhZeXw%2BPWQeck1kXt1n%2FwZ8k0Jhu2Htw5TtLrHIJ9waE8FXCv6rrC4F1wpw7qLMxMz8NPAPt3rNNeKn7jwhl57oKzok1wmOXqq5KN0Om0oQBZaRsTpK1c59JD%2BdkSPN36oUtupTIfb9%2Fqa8eDBm9n%2BxWbT1EcwgQ7KxQIRwCUq0AGWeOHSIwMUIRk3nRgGrJ2IBP5QiYzDSRYj14fw1c%2FGOfjJCWimFpIT6SXYenHK0s2QuQlZSZl62d6jXlfQqYy4fPMI8fR3aPMjh79n%2FrUwa5mG%2BirFKrq0Udt2vePmxRdAmegTlIjmhu05gs2%2BYHM4%2Bpn3IGTD%2F3OeHtgfKehskmlzIWFShebVcBNppzVvaxJ%2Bpxbx5sh1%2FBaue1yShmfVGDwtVQqIgBMDV%2BdE0vKVxivXSGzE9I3MfHRIhlSEbEQTttvVpFiDvo9UmxrmUP7aEna6OWWh%2B2wEajccy8fsCNhtJ4f%2FLJe717lJsdzdEUG%2B6mOcMX1q%2BjqfeOfKTekahAWjHiJrBmriZ%2FjSlcFUPtap6qKkiH%2FLby2syitRaiFrCgMAVFs2UTrMPXKtsQGOqUBszcOtWqIXDb9gdvGiGpVymeiJJOZd7SWsKHc8XStXxSNqJZLKIkvR8SR2UN%2F0DRqMyJRTmBfdLaHhBkRPRuRRskNj00cwglf3VKsGfaDMB681ZI94p%2BvcsZwliSYW2fgdYNIdHVodeQTo28BpQGH2r2ymK98rzp4bidoytAbXlhKN7nMbQZt8pXRdV%2F2RkBe%2BMSVqgNlCAKrKi6jaCsS%2FQQOG%2FXn&X-Amz-Signature=c6da9dc12c826049c046a3a8ffc12c26c75e6c00d368aec481d31ef9987caaff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
