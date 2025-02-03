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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBYQ4SU6%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T121325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmBPzRzQQnuUkKQ6B1T9roN0LrvrbvhipZtJNl05oHzwIhAOTUx5Xl9b%2FRR%2BFy57LwL1Id7UmL9oIdmfLJnTQgM6z3Kv8DCBUQABoMNjM3NDIzMTgzODA1Igz8sOI%2Ff8d7gJIFCBcq3AOEHDbUz6nTmlzrK%2FR7RHjcTxNfg4ficHK3vOHpreIwrfQG6UevijniDBHOoLUMiv1ef5yIB2VY5rzlFTO5htnGqXkYV%2BeG4c%2BuA5D7X1l6qtZQFeIqvlXc5rD0%2BIQEStCSRpiUQ9qYyXaLZRajeH7hf9KlobCbRT0I8puwfDCqoKPIHU4tnadDFM3LkoUhXzRxZj0Tagu3pBIU1WkKNPEMn9k2QnfQ3RkqyNLE9fJkgKnLHt%2BVv5yaMre2kjWAJlG2cJoDENKwp1rN10qE2iCUjsd2XZBsgh8G5mG1iCACe3BxtiwH9ZVKlrnpQgepUah8LgUZUjPosCX%2Bx0dn6QR7VKQT7tbEsNVHvYuxWegwKWhdfHWDoQe%2B8%2FMwNrFh7VJhwMOIyUzt%2BReEYDxDtemyd7vMUTzMsiZccMDM8g15V9DEeM92fWbWaPEo6Sju2mTOTrjNsFQEinHFiH%2F9dF6aQ8iTIiHzcuqmLAY8n%2BYzvD6hyIkLEOdaEewoqGBGUrn361vlCrQj46U8wLTJB3JhZ8GPDzlUjluG3yQLc45N2CJSBAILs7PopLJvo%2BhYf9qfgRESEcurDjALtsUw9bZDLaDuIxv%2Bf0Q%2BkOiDkA5f3xfVF5rvtTbawvj37zCW1YK9BjqkAfhG3OLd9SdIA%2FMUyjOJoHk8piudemESO6jMHxHBFaT%2FHEv3FZ2EQn7RmISW8jVKkzjrj62KXOY9LpIJssHGb%2FmTAGfz0EoI8FY1dYVisfFu4pNSAEDWf6sK2gIZYfVGsOUBoGvQkoTWvX2qtLtJdiuLVdfjYJp85Pi3YWwp344oKNI7UR06iFzMWt94AO1bQUJITJAzweXJUVz%2BpQF4vabBJ07x&X-Amz-Signature=18bd1470663b48806d413a628f6b52ca0a22cc2e5d859c8e105e444d6d1c724b&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
