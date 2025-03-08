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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6XWSJ2K%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T022149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQC%2FJqwuH6CRGe1jsQPzopYgrRdHS%2BQwvksoCvk2Rr9J6QIgSYFzcT8iLhQEfM%2Blv4wUU2IRcpp3hfk5MnaQ2kAN3Acq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDAVTq3h0nvPRvbNPayrcA08gJRVb02n%2Bb9Y5pT112cOUSccWklj4Tk1qFx15YnFnaHjUyBxEVCbiGPGF%2Fea07BsT3WXYI7ZS8B8R8MlsjBBMf%2FQza%2BfmUSI9ElbSCa64CXjeXUhNmPjFFCCiyOmJI%2Fg%2B13RM1YurEemhzPNwjE6tgMwglpHuK%2FTuXaD%2BeMTY28Zvm5gf3E2Jsko0MikJtvt2%2FKz3q%2FWHfYde7C%2FRzwdApUkhrTXdZy0R7QZWd5lj3Q0l6Ije%2F%2FmjgBheSdazcsS9IJ5IM0Iy8hgU5wGybDDYFoNQvVubwQANvaxT8We87lEfK2TpFKDp4gk1E1jRptSpjdqpv6GmCAkZAL6Yvxkv2u0M%2FfFxPTDRn3CJ2UoEbxI6XRV9lvRsGb5XxVRY6R%2BMo%2BxGNc9asYyBUsM0GN6P5K%2FNdv8k3G4OBjPWZvXSAYmfGMmB9845M4tEtPsNnXBTxBDHdwzoibyJkTtAxxWe51FKLejkl4loAh8645C%2FJFG18ygurZmgw9EokZDZXRIsJoEbu6EghmOBNbjxxboo3eOwV5Ej3IIvIlaadlN%2Bk4CiDva%2B2VSAnVN3wUXfRiDVfZxMhto2F9QsFl%2Fdab0W5g%2FMg0VZ6A32e1EAyFYjKq%2BxCt6ngiZgfTGPMIq9rr4GOqUBKOdtigFWJKNm3phADcd2ZtuHUYxUUW0JkHqoMwR2cubMTrh42LCBFXxvzNQn9uCKZkrHQK5Onwz4QlrIoHqXbpxJc69GI8O0bxC0OMUWkXMx6hWoFNWAo9iX3IBrG5cme53Lu5PjT1VuyrE4iOtLe7AoCHsgySU3VHOmxtKU9ooV12D2gg%2FdlecC7Fa1VzhiWxs61Lpk%2BKqgcSjCQ0qeK3MP0wDd&X-Amz-Signature=5d689171a25aa1cd84614afaf78b29b2d161f924b4c1911ea63cefadc20db211&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
