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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWDOZZJT%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T061250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEkQYYghInc0tplZcTZQtFWr1903J0xTt%2FC3RPoFVOVAAiB5%2BJc6V%2B%2FhhFAcHvCLaVhoUOYdr%2FKrWmV%2Bb0oyXcAZMir%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMY00YxcnDDLED307EKtwDHMYGkm0Whsse5J%2Fm8PKm4NC5aFoUt5T%2B9CC31OdhWe%2BxGzR4J%2BtWQO7LwPtGVbFW54OTRDlLvDaKDLSLUdyE7rmPNgCqE4IoK4KB%2BQYFWxyuDQxElEnjsDd5oykSPQ5qYHMJ13hELlrmO3%2FRMilXAW2PP8gmldUG5qR%2Fe0zXYsbKN5ugRc92td0klAy4PMhBvelCnGA%2B2X2%2FnNv3e8A8d1i6ILmwet7isK65SC9TF8hQFR2weOETHBBknP6rCmpz0dzkTjeKVOHYwtnv7rfWqLM%2BRp5YqXrghnk0hR%2FvphNLpm3jc9zjTPYHKdGZPrWG32ZWcMw2K5C6zDuqchMKYL9M%2B8mptSIU0f3yyxwELq%2BWVbPA8FabCUwoZ33sGBZVjnC4PtJE3tLnc0J5%2Bn19ar%2BX095AnOqpRmJVcUKm8b905UOT%2F9q%2BLjWfrB3XRb7RitceFSysDq2ePxQ2gM0d1lZgglSmsJHwd%2BlaX7EDc%2BkLTpt78QXRCGCpcPfGWtJQ9Gff8w38dkDULQulcsXjSf9WbrRrvTg8i4TUJTG8FgXWFBB9de0n0JxdFhStkgNe1Fnd%2BN7c50el21QPQlIk6p0v%2FNIX%2BnX82Nd0C2amSyKbRSOekUdN9l1oj8EwjPDrwAY6pgHyDfpGL%2BrhsZWBATErfpJ45Rj7ASHxtTE%2BMahEqtim%2BADTEQFPsHCe2zyXAGzaCZ0JJPaogdJYuEFu%2BYXpe6Y0%2Fo3CNULFVHuJtnT2a535nZDE22WJTAGyOnEfNs6yh7Ja6CcETFM0PUmNQTOTigfPHcNjIVUK19418yMobjp92mCuAxnVMZrIkjAeOz1rViExjrzGZ3flowjagHjxtMCEbxIQIAZ4&X-Amz-Signature=afe1d25506783615542909b4dbe15af97b07a356d6e81607fbb4a8a2f5869a11&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
