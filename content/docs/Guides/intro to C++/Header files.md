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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X372DTHS%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T040942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF2rtqqowrt9rRQgp%2Bbmrd%2FExxUfkeKNH%2BYc13qErPLBAiAy8NjekvsZDviKkYQdn1i1LDq4qOerOQ30ZnVtYDmbIyqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgesBrzblNl8siRNbKtwD2oD6maKwweKPPpf%2Fpw6r%2B25eYdjUj%2FIP6Ek64ZfvxxeWFDd%2BGMFq6UUkiPC1JQN0PZ4tAlaVjsi%2B%2Bu8FopQJa3IVmrEu0T0aUhV8m6ZtMfCugn5p%2FSJbYASHAQT6hfUlhzNMrn%2Bav%2Fw7LWTQjJqewpYz73sskYA7ahTRevjAw60h%2BbMv1owtNYaK1kvUAL8Ogsyx%2F1xAzXjQNI5rr88bRQ4KRAzdqEPk6gtOBomTesZsW708%2FvcevmD2VLeP5%2FZaTF3GEgy0CEShRjrIa8E%2BCa242mr%2BDNQk%2F4kTSd6nda6jr2Xeoo0666j1RVMjJtG9CJ5vhJcuIYQBWJLsvfrXsZKz6dfxG4mZz%2FRvNNQg3tBgIBvZF9aupH35bZYAYCqqpWhrrni4hHit7NLT1lIjmCDJvq8AsXDsy8W9EpRBXLn6Q6mvw2YOVrzEH4W5SYCwmKIUNzI3tfQyY7lfwgSx1Y3uNsqESnccs%2FL5NH3Kv7GricDSqXtdkhjFMfBHXryCjAhyfbdrQQwxtKpIivPLId5V8H51DsndT8Ji1MRIqvMLOF7JcNcuEBIoIcgA9Up%2FqSyqkNJ6OLDoEkKD5MAgHlBNij6z7sV3hDmFPQU11ZcffmOZfOFJ%2FrU1wV8wi52lvQY6pgFEcSI7z6yBhe9Bqb695SOm%2Fb%2FEb24cWswXzzOK%2FJmcq8%2Fk3n9jhrlEJTEUFaX05veAQIUXWV5t67OPM9ESbCqPSTqZtaaHbhkit2md5TNaS1JRSM6X6yfmdMf%2BP%2BS9LFy%2BPDB6P%2BAs%2F%2ByQUUEopfys8u%2FIdpGM02fMUnOSneqT2o89nGn8E7y0RuJyb77nYDBGKBrxQDJwEvCTEFfJmGorxB2msFHA&X-Amz-Signature=be03894acaf910cc7e0b4614a5cb9a8c3821560161f3802c5fb24389f5218814&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
