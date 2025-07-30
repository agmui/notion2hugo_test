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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642DDZU7V%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T025441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIATKtPLBD3FHmxVAmhZVo6G4yPxLaRQdmKhYLIEBJRyJAiASVl9JO%2F6qJ4nC85cWKEGrhhiufkm9%2BJrZeYATrkzJGyqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFG4KcOoJMSAxscMrKtwD4meNYROFdRCzWqRyChq%2BlOCVOcJh5cInmShBINk2xVx3s3DNgjatcBYELz%2FsyLF5ACKZ79fbOv6ihBeKVjMNx9XhDHzQzJAQoAuDbvJe4AedCjzv4wa%2BZ920Zz5T%2FL1%2BVDQeqV7Y34GcLShi0Dw6GoWdq1Ui0Zh4Q6N9i72iHYDICFkBAZo4RcRk4TUE6i%2FcaEs1YEc%2FmzJN%2B0hqbRQY8P0NWwmrvYnXlNqa9NvsXcvuUdm2x3H%2BBu7zSr32mZD85Nfle1%2FUrx2qmeUll0CgOQsVczuGy7ACFpnaGOBpb6ObaEXVflfUSRb1cl%2FaEnPBHeXbiM%2B%2BuH9ugnrHxng04QcVePkpxhqlQ54AHB4Szs47Fq%2FMkHOjTIDiFQKoiDEUfwHkDIxZURyz7EWJUWkRv2zsJqxY5qRaowJc045IixdoD6ew%2FL1OveJGCnyNfSEhgL9pboaiDi4E34o3uWAE3ACKhla4Y26Jt2PD4iy8oJDQV1WGKofJaWxuFy3whoRhi%2FslzOu%2FFgaaXZN4EZUCU0jU6mvg4tsEcC%2BhG8eMSUyroMnwfPopcjFlZ%2Fc7iAZsQ6ES4ZeP7ncy8p1Ie0kgBGd%2BRZVd3JNVi9mAIV1WZ%2BI8AZ13GsBzEgSey2swi%2FGlxAY6pgEHczA7DtYCgcKA%2FrAHoVFp7Xu4Q0CoFkkNwYKSRsH7%2FUivkkQRXxvQOFlyrONKJu%2FpQSiCTtDKEWMGae2PLUqEXF0a9y9k%2Ffv%2BhWnWvVl%2BarNXSomfIZKQmPxSVQ%2FquUDmyoY%2Fa7tlho3Ekeq76uMY0HexiyLI559uAtqcAJe98PBBa1P%2FJbqT6GaRXN6eDHE4f7NqlfzwjdJXynqEC0KeHVf651qg&X-Amz-Signature=9c35ed0bab57eefba18e965ad3c80cdb214b3f7cd9b3b807c73bb403aa3a5684&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
