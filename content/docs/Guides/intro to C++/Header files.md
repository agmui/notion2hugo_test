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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667K5XGTFM%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T081248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQD%2BGRizxNA%2FWYsLEHt%2B7LghdRr%2Bhd8C%2BrCEivnHG33zBQIgUrUWDkRWXes9Ch3eoSrXFe5iH7Ahju9vwKdVHWr5lqUqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMed9dKS%2BWh4A5HtYSrcA8vKp6Hn4oTrgRaULa55VMswr0n0ieiihSqYWO0%2BZYkiq4FSBZok9pqj0mYQEFmRBok7k9OgC%2F5rsz4fIcCEuk4CoVV5xfC3ufXwAfA610dRzgtsOB13JXHHYsK%2FE5ui8%2BWoS1shFeJ2SsoIQY2mz%2F1xvztCK0GK%2F9czOfqz4Ns2rE3g4xey5FI2NGNahK3SP%2Fz0a%2FQj%2FNxHlUAb3lW0NmI6YN6l6aFNa1SqpORxdlRSQnUhVHXZdiNe29W7waldZbOGpy%2BO%2FPcPYk98TQ0EzQCRvDBh6Iwwzg4DsmpVu0eI8oLPj3vz%2BZyMp%2BeJjmrivMhueDT0JCPkX0Pe9DmiBOBGlsIJk5l7VkYEmvv7dyXwD4ZbYWH8ITz6ztH%2FFxAJHL3rWRQKUnqMpHHrWSlwt00F8KnpdpDRkPsjh79jkwf7KGBm3lnu7SuT%2F1T%2FUkHGM5SjAPWmr3%2BXFpb2Rpj2m8XXfJVgojc8oySiTkPcFEBPWQ68HHF3LQsGH9bQ7gO%2BNleU66lSLdsMRif9UWuxVwR5VFm3frBS1N4MQzGlwagLJ8PhoIzXKwXw4M8%2FfYPzZicB4Nuw%2F1%2BcMaRtWy3xTdnHSiu4eaP%2BkhOYdbg9fhU8%2BqJBB2Ps2NJmvJSQMLGIqsIGOqUBfFgG7MCJbZ6ZjJBLEAbfg9K0dwybjfAsG5YGZjXqrbOc0dWK9%2BMXNbbT%2BLxkCk53SFdKAcgkH%2F6CCHMWWrS4gH3KX9MxSrvn4%2FxQXZppl3RZW2vd0LE5wDzkdjRh%2FgVvtpeS2oWFjPjsKlYrLswI1FQ8m0I2JNzXlIRTVMcLBsWaZzQ1z%2BcDjCuAoMt6V9zyCTJAJylm7LZSWi%2FF3i560SXpVcgm&X-Amz-Signature=295d561bf85b91620094e88221828fe1b943f6629341436c9cad395b40689700&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
