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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665V2X27NS%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T081209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBRjOEeRHd7vQnFFU%2BZIRdzSFbh3f8mjC4hiTkBKy%2B6%2BAiEAjpU8ihrgF9KGia7Om2SF1eg3Ola%2BJllj7nyCcthKOEAqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEGBqgdGqaZiorskwircAwU4nwZPMWJQMbjnPEwkjmAMTLiWV%2FAH%2FsSF50NOPP1IvjF0IGrY5eWVcE9FlpNssE09dUJD7tx3cEz3gnLAkb3w0UZUPdT5JtBHCStRQHk3qbclGkXtq2U%2BiX69ZXA1nXllA7vEtrl%2BWU7NWX5GgwaX%2FUo%2FCNNKSTMbUKH5Rt%2BYiWCrHhL3%2FbZm6mOGFWjyHmWitL%2FXAxG6zJ2booXAXIyKViMTkw66XOcZUP3K%2BXvvCke2eYRu%2B3y9RfWnKllUvas6KRmjISK8jtIGoNbtB5%2FNQo4A%2Bzp7MjHX6M87HzeLe45cMkqmwrsVoAO9cX9p5xHJtvMO6rTEYV9yR7fA7FRUhO%2FmmAbAKD0YAKvmEBKMZzIgutyLqMooDlp%2B5k5xUkMkE%2BQw%2FaPmzeJZ3hpnFaN7MTVLkSPoY9QzKllgxeCXbdv6GZkqFrHLNwtJdusyXGU8w6%2FeFRNqdHaRKYXNycNHy%2BmMSTc1nBQY6GPD8%2FMhXfSzxApp1jrb3Xn%2Bb6BByJa3Wj5PDQab7bt7dUOMaUyfPvUDdxmNYcyFc9ixeICX9%2BJ6lzeGkcVJEjXuY3SN5XZ6xYfsGQEAnmPos5lJ68zQqgfCIjba1HCDj4xVE064jlwAUcbl%2Fmw779ITMIbM5cEGOqUBOXm1nS6kkOTBdmoNLttRufyCJJGoBC3TXBd4wDXU7eDcdwlK7DZ3AbzaTqVX8KjiMxRwoFFIZm0kFXQ60EGASTJi%2BVusx5giux8mzi9nXP5nPilaHsi02G4XEnt9dRbJ4OiFH9XKBspAQttpKwrT6KGOtL36V5ZxB46EGcUDEUTLrRnDByzj3vifGmk59Zueo6pRjHl7GdIQZj8IoU1jSGnw23yv&X-Amz-Signature=1a981bacd943de63a9ff900ffe57cd6660c88f3763919407a843ca27389646c3&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
