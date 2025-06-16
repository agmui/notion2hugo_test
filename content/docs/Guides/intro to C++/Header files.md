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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4THB62A%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T230827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCIH0CKbT%2FoikBDww%2FrRWVKDDOrvmjVh496NQIgd1y8TF1AiARIkDsorWsKKCGi3ewEwLZ17pR81rxKfLOn0ZEOc1hMSr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMMvWb89ebwpKcTOkzKtwDvkb4%2BWVPJvSO6Z3Sn%2BxGO46SQnpjzWbIwCIXrr4GHkba0Ne5KWu1kGOAFuXLq1mTYIu5COX8XObyvTB8NNTKXRLzIOnWsjGpJpg893PVfqEpB7dTEEPjayY7v%2FRWDdqk%2F1I4lNabFl1UCyoRF31b7dL3EUSlXMx8%2FYd1lJ3XtRjevqtWTM%2FeDIshsIv%2Fco5JT1tWA1cIA34siiIGYSeXnfpJ7Hr80Zo2s3biFVu0xEUwREpWGte8cydp0mDBYCObqS5%2BPxLHPUEUVR%2BCuSm8i0b6NuDN6qF%2BpNtzjV3U1%2Bk9jehqUMv8auKleJlHWQa%2BIwvJ4V79z7knuCH3mT81RfgdvUkrFFueagqGw2BKbact%2FYtN%2BTkaWzBfWJBY2C%2FO3OxPnggaAKy8ngIcZn%2FiPy0s%2Fl4kT4NaW62IC1BWhNOfVRhtpbGWX4%2FyX%2FwdusVeuzuP8Ensowc6VIA%2FyZ4ZY1byqE8QpiCHfniSJBC5JxgVUmhBNG%2BXs5Za70LTJF4P%2BUFCtjdZO7OiiFujvoi61fSn%2B5OyvsSGbnJROq26fTOPXIUWhUxpAA3nkzp5mRxllz7s069j7qwr7s2ZihmChaUr1clSDBazKaw03BxEszfgah3cTGL87QjlUpUwyrjCwgY6pgE4bDOpv3I05ZaeI1Po3KXzY2hNYtEHbDFpgZWSstuMnvULLji1lQkEUPSvxzkrIFXxQf5P7cLVNe2gJagMnORwTX4muthd%2Fw4cjDXd5KuTivx17u2qJUSa5CaXPPIotPlX9xnCjtNJiGVlfOWxbZZEEE2xlN%2FWVuXGNIF1L%2FMSwz73GBG9utpYyYmb7AqfTDRmmll%2FGct8n2aRQfepE6i7h079U5Gz&X-Amz-Signature=c62b6b5a881dc05f1f249644fc1816aef88fe40ef51eca1ae55735aa7d099a0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
