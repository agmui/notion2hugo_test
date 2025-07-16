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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R65UJUYM%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T181300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQDA40h03g%2BEcpJzu17BXu052f%2BdNB2CzJagsfWhOkQcyQIhAJUv%2FFx4E7ueHZZmH7j9lkvTmI5lEMqGM1h3qUmp08koKv8DCGIQABoMNjM3NDIzMTgzODA1IgyguxZ40WHrjinynT8q3AMGfgJ9JwKs6N9ePGr6X6kFLyLgT%2BDkOIzWrgkIjYGjWmxJe%2BZoTYxb%2BoMQzoeHPpNS8Sah9%2F0FZnMb5mm2llv3YpmCeZYYW4W6r81IVg1QLiHA2%2ByQIGMxfTrdb89UmBQllzcd1MSwACd2WhcdvuGy6jAkgK6BZPSEWadJYdRxWsByQmx2KMjTHb4jDCO6hEqejN%2FmBpQcc2X%2FLbXGYt20SHEJBBsiwz%2FjR1ZaplnRjx%2BzMU8uI54XlCwqiaItkveDH73o0LrBYp5isRnetI7CamT7WrARQsIUeq2GKgSPLAHTJqzoR%2FxqMxGJSFy2j7XXOZwtrOc3wXBGYDZVfSppdoB1tjaMxBO7gtpX7uFt9Z1AB8eMdrlxCzH1rHdFWDco9dCfJOHzEaRSwsArkHElLWeB87xO0fGrMqtbBLCLe8JFrIB2Byt9v1FLBu7SamE5Nmckn1VoXKYd4Hz%2FEFJ19LWW6sAHUUw%2FWzczmPBikGQvEJ%2B2IYCxBicomBcrpfexi%2F5nP4hz5vzZbqnGqdQfLGlGc7rDouYU0oLwb9otmVY%2BfYI1D6HZ0JoJJ8pe9sHOcpKwFs7pJeJ19P9%2FRBi5gPXqnDnzaHaENt2Nrodq9EdBzYRc6kwnlHg6MDDbtN%2FDBjqkATfeTNfoo3vWMAVJqfWN6jz9fF2oeB4MfrxJ3TBgiSVaOlCfuU5paQ%2FFFQn6GoppTHkcVegPNyicRXtZa2cuquwYdL0IbohdSS8JpvPsAw4cnPPLA47rnIgvfpMxgBDHSC0Jvs3yWO5CIEf32NlCVkuxvnF7wuV8%2FTsBVG9Ni5%2F3GtiKLbCP93zF8t6IjXPybJH%2F5w5khdDvcDXfAdDC6ojmvt25&X-Amz-Signature=8751b0e47ccc4818d89e47bdda4d35eb41acb1fc8b67610f501b900f9e9c52db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
