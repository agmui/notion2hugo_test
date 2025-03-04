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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3ORA26E%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T100851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIELUjMQsVuMU9KKi9BkLfLWOH1H8%2F3ReuHmyhJWb3gdCAiBqi0x24h7MIMobN%2BSRqftUARmLUq8cgLgj6DUIgO0Z5CqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKuQJ3e1QX7e8EJeHKtwD%2BiKByKYyntguVlYjW%2BoMjzsw6HkvigcKa0AY27P6ptRIuoD51EesKZsX9wLvCTtMKmZeTZ07ubOR75VROPEln14lK1AVM3NOcFiHtnwxMWrIW83RkIo2EsIYsjiZxzp9fxQfxKuOE%2FxhbZxENaAW%2FI%2F%2FulgvKvc9U9N91anHqw%2FzUxRdfCiwnyYsia0feEkMTKT6atwZBWDRb9OrQIiMoQA8a6rKyyrIYuGnToHlU7ogwMr357Qq1TOA%2BRTHd31IW73%2BQWtg6JvDNnYAfIALiB664gB5EcRbCmH9TA89Bx%2BYq7H%2BciVmPMaRBjuwKWTrwL3ZuZYpSN7J8EIbYFrxfR8ll5o9%2Bpb2c6anwVtaFc7FMlf8VVZ%2Ff%2BQz4JQemUOtdvDwbiFvEYXjakOO9oqnSpaPRxUSeEDPMrVQBCEi5hheEKpeGEnE1%2FUKRhaxld%2BnjzvUaa0K%2BJrq%2BISOddaPg3imM5fzCwKD3t7sydafX9C6qAwByTPTLXMvtGAIBoyfBIHMpE2zdugKhtgzdVZd9IqoXDPEc9d%2FLekzxoEEkn6x6aLiYTaj%2FiWbdxicJaWXkH%2Baii7kLI%2BYHTxYeo5ip3opP0RUQOixJEySWgldRdpusCyKf%2FUY2HCyvfgwx4SbvgY6pgErIYOgR9tEyOnidEJvlpfy2QhjDon%2FFRuTuUr5ej1r6CualwICtpTdntAU8UMumqC6BXMF%2FdkKCJxKYsxsaUds9446MvO393HqiI%2Bpkvgz80yJGAQEZt0q%2FcIBkDclD50BY9CwXB70dfFuBMr8HyPokCUKWLvWIXJU0uKTok5hRJukdTjKYX37HOKDCiSoWkv3dmExq5gqDyjXrRbu8QsON5bTSzGp&X-Amz-Signature=94e101bffdb9b92869ad049395f5d926e8e72ff0ee6c7355a778b00910bd1212&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
