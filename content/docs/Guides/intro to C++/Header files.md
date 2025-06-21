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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7Z6KWSB%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T230813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0Zm8HoSfi%2BFYdZaps6JbUBapf5hnRf4lth9%2B%2F2dhRBwIgFU8KppkAkfFnlEX8SdJP4I%2FsgZps8di%2Fp8a2nvN7aK4qiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDG7xvAQ88EnMV%2FTpyrcA4%2BO9cUS9Lbf5gJMwkhOzqVSydWAcSq6dekMfszTTOLAx4V0ES8F0Fgri6uRjfcIFX0KpegqeO5XN2XXCzTfBo4K%2BCtqLjSahoM0bd%2FfS1RDDYOmeIh9ujW3kF98MDroWpqY3b2D7ciLl%2BmgWzjT16ACe2nTDdDdgpxuvBgSCnDtmRxU0%2B2MRfnaiSUMJVMaqjqXhXobcCxiS8rxChEjXUWQu7kv%2BQ6wlOyvh5%2B25ZXnRKBn%2BGtVARfZric4b%2BRRd55bAXE%2Fu7Edkyd8katA3ye0XSbJeWCWqd65hw94kWhLyNpgcsmvoVhPAb4GN79mZG%2Fa8EULrxnDrmgWiDLJRoDE3e7i3SYDwpRVCqnWTCFkvWbdO7MJvNOEFx%2FM47nLC2OQQg37spKYsTCsB4qm05ILaqO9xLbwEyRZEC3d3tKjm8g99EBXoZzkz9DChPycPWrbBsviTZZG2CueMUEsB%2B1RHgkg3ZEREv2oFfhPLK5VMfkKOIA69p5LPESDgKXHh5d3OqDybxvjhI9IqStcI9GnsMRyJGOL5%2BiQFOLKYaEj51lUIePdEpn0RuyaDFVQyL2OUHSBP5JJd9YU%2BHNInodg0wWpRaR%2FAUE4gO9jhedv4l2BRf3%2B8GdveaFGMJjd3MIGOqUB4i%2BJ9iqJPmiK4NEP0eX4CGtRWhwA5YJKOYq0p1muRk%2Bf4ZWF%2B8l%2Fjnw6mTSVZjQNFTX0NR%2Bznf2vjbS0%2FrAsf%2BGlKS2dLZHb4sIBE9G1RLDC80YWQKZvVYyEjtDVAQvSI3V6Cyp5P1rMaICVzyvzTXJ9n0qLWkPNne9%2BYhsP3gQzk4yTbjByS40%2FqdtcxqLJEKqcry8KSUwRauehyOD3L462bgf%2F&X-Amz-Signature=9c4aa2017449dbe5cf4a24ea7b3c47fbf720bc95a7b77a9c21fe05b3beee2669&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
