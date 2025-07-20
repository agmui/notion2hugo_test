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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666D4LHF2T%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T200926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDEL8IV3BayVq8%2BU1i%2BAKNxVlT%2FEGFS09b7mD4lcvRFgAiAVVe59yzibgBsnqvXZq8FHiorwm5YTPkC%2FB6jQKM5kxiqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNWwyKuoHAfCbgl%2FcKtwD6kAKIMF6pQtNT%2BbgmBGKsIXCprzUd2VQVCu0WwZsue35GIDNMy7cU%2Fn0N8awDal0jJPqg60nZOvXisDMMiD2F746p8Cq8jqHsI6LHSQw1DSoSvv%2BvpfvPSXfhe7d%2B7Y9lGsa5tpBcbTFHQ9iMmq%2BExg5Pzc9dOschmGRIypDy1x9%2FyYsxjkXTrQey4WKXqWf6xrQU6egFMc3raJSqTz95miZZXpjBsr2CWIQ89G9yDvuNCbn5r185SImLLNR%2BaHbhSonyn%2BI04hab6vquHKdAbsVlcetxPVCqfFCvvjKvEJ%2FxXsAcuyHM6Y83RlMlHQiw8B2lFsb4tfS27K9JiZCK74YdRe6QXEg38AUUayJuQYdcIFn5QxYqqMAf0BrIHF4048VnoKfqBiKVsNmX3Qsh5QTAvmjDyEJxKHWuvRQhYAQWbcrE%2BRKNTu3J23sT9yHU2UX2CtvYrmuopw4ThlIL35boGLslBRrjKN%2FXcil7zIFyTgpCqHrLMT%2BEVBgH8nddG3yeJeLhY4%2B1Eb9NNRGgQnsAGSscUOAOXGUCNG6zukZ9ceWBETFZhGJD7gSdziLD6fj5b4jo9ZqqwbGIoLFPeACrYBhoPgp7ntwTPDzmj4QmPlTXxBdEWqMC%2FUwhfj0wwY6pgGI%2FcTKw7yVEs%2BBlRc7tRoPlx5JL3V3d%2Bcvj3Nr7LxrLaqtTJ6mjE0RAX4USuUgfC6h3vwoptWM7uBl7R1Tzbo%2B9lb5xk%2BTB%2BX1bGnpaFkRLcw3UsIIBjG%2BlaCFXjiBL86%2FWXupWF%2FngGMSGfNKYrtT81%2FmtRTGmuIKNdqTY2UFPTpsZ1D25Hu2m%2FmxzOr76N3UHx3pQKC5EO%2FePIZkX1p0HgO59i55&X-Amz-Signature=3667f20169ee838995f2b0e7c68e878d4acb21b6797bdcfd17d95deb206a1e33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
