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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5SP6W72%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T004341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQDI86R4Xg8FwPScO7CkE9uYX%2FnZOnHU9WKbUgvB8R80%2FwIhALGxbds8oSA4C5AX8ycEGgMtOqA01ErsLzdHMAr2WQUhKv8DCGoQABoMNjM3NDIzMTgzODA1IgzSjUUSgzbGRRaBiM8q3AM9IdYZX9jUcmkgXhCJ%2FQKfmpjq%2BROgXzIbZthaF%2BCf%2BrSOBb2iPck84LiVKFzVHS2cVRRW%2B%2B3kWyuIU%2BHO4ntubcenOmFjlT2mpkLRUru2LPJnetiJjcRSH0Rsqm%2B4xsTPNgi7GGYHsD8aT%2BVTlnBQYQCGjZlyinKNanOrDW3FH%2BQYV%2F4OjXbwOFR1y5p3WXmU6YiOWSyhFI3PzrvMrds5cQkwHfKsrW496ZxBFMKqzooI%2Fe%2FNizAJG1VoNkN5XHmtz1Mpf8UwwN2qEQ89IeSJ%2FZMFYVIvyCweJ3PGa7R32R%2BfFocqqc9pgQoqVazH0F9la0xfgRCWaWB9WEe4VMJeEFE22zF%2F4dg%2FA%2B%2BZg7QDIY3Z9SZtpIhI70eef3Ebx3wqyiPccIwNwL8D2ISHwiWNsZG4sSrVJTeZnBRMJs1lch24wmeMWP8JLjhB6iwQaALI1HqkuP47aZ%2BS%2Fxg6MvK151HVSCVHiGsgpOCanhXqQ6yEICngPRRdYr4il%2BupcBwlKpbtiSyGNx0I2GsySb5Gn2zatJdLHP1bvO00BJam4HuCD9BabZL5EKDR6saB0Em8lggQZv5c%2F08fkQx3Y8uPC8b1AzecyDMpnb8749p8RFYhS1VYWFA24X7IHDCTy%2FfCBjqkATyTGZ3WWnKCc52zUm%2BTXH7VYKIdgPDX3ETmOk%2FR8i0gmSnDsrmJtX%2FpUiY2VkNqkZOOBY17xP7FII%2BxUWJqVn%2FF2z6hZ3RNoriaY41yOlH2OOhdFGBj53wEu8GQVEeH4a0qq%2FlXeb8Rn%2Ff4iY9KGTqs%2Fm9p6PberQBehn7%2Fdhs8XH0Gdo%2F7xmk5xoC7HzVJo5aYa5wJnjiFrUCbjpH8g1TaIOFY&X-Amz-Signature=3ff0b7dbe93801dca51b015af8fed9ab833416c958caa39bd7bb000757f8976a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
