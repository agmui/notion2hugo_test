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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFSM4XMT%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T070713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJIMEYCIQDkgld88Uu1ZNKYtjq7OxAsrowh8D6aQYWFf4QC4p4U%2FwIhAIYSUeUdDl3Q2LrGWng1mzxFTV8SC6ahEdQOj4SPgosIKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy4Xn7y93FrlugVjRgq3AO4eLZ4ULOzj7I0W%2BbUDWJPHvrliF4SttWMtdmjV%2FzHx3nuyZYJDwCoxOj99x0AY2tmRhlKQNsgOY8zSYosoj3jP1t8RCas1nqGd3VngYa3S0IPkxTWt5cT1ktZ%2Fcc%2Bwwh3f4UJ%2BBxFGVFge6DDsQXEd1ryZJbkf6lY%2Bpxvvc5pwOhMlnos0ydQ%2FemfUdKjcXEnegujJkekpWtHBCDf7yWoCVpugC9QNGQmt0Oi5eEX14qk0UY0S9XOupc%2FA50aAZsw48%2BBXI3y1Fc5i%2F77Nj2fPqeEkxlWxPGvLZJneZo8xD0KjJAT5zGegWJx0JVUG96yPcng0c7eBxHc3SWwrHhh%2BchMSoOCF7jwJBPIYrAlBc7u8EYqjzvuzH%2FbHPotYyk2jJbWOzMkxi4mM8XJ2sb3ptgLYvpmtLpeX0LA3MdKJV%2BdmRscbQ6SqW%2FzPpi5WpPpqfKz6Q3pTZoLg1tZktakIxeU6WTmw5xL7JZgSbYo%2FxZeMAfFBIAMKiEj%2BEQxbZozKpA9raA6UiZ0oaU%2FwhSNBfqGPHJQ74HW31gjjpw61oV8Kv%2Bj%2FLZhQt07KCKGO2r0qYih75EhP8TSxN%2B1%2F8SGo9QtS2nOSPPtL1iek1tK5gYITKThDKmckYn9fzDEq%2Fm%2BBjqkAXSKpn%2FIvL4fJ4jdmKn23CheggOue0lkZcHekyF0Z2nsSSXBFpXdsMjn54LOzW%2FhbsCt3aP1TbwJ37D7pPyhnuPnP5FShLrC%2FQQCabSoF8Xta6KxFELNcPiiVitUR%2BhYsRi2mrNtF9XVf5XGIDgTbKnW%2FYjRXfa%2BuvfcfsryOx9%2Bb5vTQ2YWLBlRR8E%2BwcQIau5n5VWtD385vkezd%2FhGzLiflYf3&X-Amz-Signature=d7090b622e57d8d05dca6e1286c84a207ee16d9c534852de1efab6a0ac78be82&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
