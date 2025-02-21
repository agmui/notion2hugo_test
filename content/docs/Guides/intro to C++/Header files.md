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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CGK4EAN%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T100813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEfWyF%2Bf4U%2BkG0G%2ByityTtEAnkaiNl8uPArOuM2PMRCQAiBWSGU3Pj4IvQ2q6CK4zr8dD%2BG8ZdORJ3De%2BawaBhzu2SqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZcDDfmDVmuYfKniRKtwD3jh8plFiMdWG4mg3aM4tW%2BuTB8n8C9FN7q6f%2Fs3zWyfjqHBiOSBpDhuuMI6debPeoTyRMNbP5Nb8Qx4p1hNSNZAx9OP0KUjrd%2FrT68Xr9vLOZvy2juPDm7a3dtuFkKWgU6WO2AyNQkBdVCOBUbO6rfyYHIdOvxYCknIDPQoEuJqc5YNkzSL4qTjuEb0X3x4mHv4agnXF8u8SxkSS5Utx76AnsR%2FZLK2FmZhnw3MVzcfd2c2X0626Q32muZkafDI3wJiT7InA4fXTPbL4ckaQdKjMRJ7gzbcPFAy3DfjyDD%2BNPvj7Oqan0QuPpaNOcmc3377jml0SsgIBReEGXcqYbxZ3fzFNO5bu9YLQkVlOzU09CwGQsrj2wvV7%2FNRphXBl1EOrLRVBMehuQczjJgPvAGWgAl1rJflPyPEbCRXT2YJrVcChRke58C8%2BT2w5SeJsOyooA2V4w2oJL5%2Bshj2HMn%2B%2Bo2fyHPpAhHKXwStpJJVJDaUg2Fl6w3ChlLMAIoMPWtiCKUr6bncCEtU1DLrG4fR4vvMq1sctkWFHCceEysM9T28hAobot%2BNcz81Uo6qnsVd%2FlHW015PZk7Jqvd%2FWEIg8gXcUDK6pbFYpmy%2FgNaP1F8ITWxKpiE4dypYwhZnhvQY6pgFbTEYClkDU2pV5KUS0lMTV2HueB52IO16gaxTC7F90ZQurAT8A3WAPeY0vttMgy3fThqv9Qm9BK9JSnN%2BWsP%2BYx09KKv5mZHbGNZy191rWwfk%2Fi%2FtIpjAq7r9qmWM4HIo90KZUKQGqX5L7X1WD44eLHTM1s3x4Vpg%2BhsB0xLQS8I1nZAYBiH7yXd7i0AkWWpR%2FRABxfUlI8GBifig%2BnK6P9aGk4qNJ&X-Amz-Signature=ed559c355839351e6599e9bd2c53d4652f28f54cd69bf0b28d87d7e3e9a8ce7d&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
