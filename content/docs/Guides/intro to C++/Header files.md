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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UP2ZUY7A%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T061146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIH5KHkSfLVza9tAUYAcp2bd4RSA0k9G9T9uKy2UUSCH0AiEAqtI1FYuG92p7Og74H8KSCcqUutlO9NbQIVhoICCZIO0q%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDJQrtDWOUi4MlKuQFCrcA8xt%2FVjgQpZzAo5nWC%2FFL43fpYIoapbJFcjo3DKOgG1MV6LHb4S8cKJSP8tqHz49odfprRhucK4h4SzN2zTz7SPEhiwii7P2UXe0I%2FVYkz2%2Bwxnc5j1SCCVYutGTHDB6cXYaMAuzmNXLRKsftZZDJjRgHY2VMOujZZUy0Em4OL3i7hfae0MayHmRzzESgivY%2BwXmx30%2BYTlO1EYYB1ZW%2FI%2FJZS7RnLaL2L0UFy07tucTI7QfTU1YRluaWbhASKqTr7sysRYWPp3jPN5dmMFCkENpMXcOX3oYuEywNTitJ0cqBHJEHxWw6Uev3uIkHza%2F%2FYAPQFXo%2BQ%2Fyu9EQU4GmdvM8HL9L5TfwTVuko6L55fNt%2FhK3uvFyzyFrGehW9h4NB0nDx%2FvQudSXsMoRwcquhyWnsWcJgaswjTH9lRS73%2BJFTOk%2BbQ0FjKmp8UN3aB%2B6y9wq9dljr4SuTHa9Y%2B%2BcpGEaJuhzeesIouiCYG8B2PvgM8X9giPjUs37tUXNR%2BK01iJ0MINSl%2B1Pe5DgemRdvFjQjEOOiEWpzL31UvSTJjnizwaS8W9BClT5moPzoQTCgW6aYgmT5FTvIFSb7eTDhWUMB8zv%2B6XUj2SRlQvpd4BJXAdi%2BOqLXRMyKvKsMMjHucIGOqUBYH9iEETaVURPPfYcWjxxEdAS%2Fiwu9v2c%2F8nndhOosbBtDPCNrqT%2B9f5UM5saPGRCLuxhgg%2BwMSXyWS0diLNz45wO7377jgis6TNtiNNB3kB01tDcyvbv6XXJfd%2FU%2Fa3HNzrqV0rSALy4L61lztGtR2xXOWBnap15ZEApUJC0yA9S28Re5Ktxtgbf1DbXe8k7xdSydmd6Q48lKwn0KaYNhxX0902e&X-Amz-Signature=c4f64c53336a832b967a9aecdcea754cb3edfdf7585212309f1656d8b69516ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
