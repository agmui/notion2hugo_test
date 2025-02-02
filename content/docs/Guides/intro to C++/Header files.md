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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZV7P7FI7%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T230101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFMFE73nC98XfPOzvBf%2F769srUHmcXzanGTruon7C0gtAiEA9Y%2BOLyqVqQ4lj5zTXwbtRyzSPbR%2FZS77xUANW%2FOZNIAqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEWu%2BZaeBp2e1Ngg0yrcAxf2RiMoJ4m4UNWZUninX8KNBliSfpNnsRnLya3vmrZBRDOpsSJCC3JQe%2BEPpE29ZxbwDMPJHWMEYh%2FkUfRr5KALO3u4RpuaFqAthOiRW3lKeHDjsDWBQX5IqdsnG2kF4At4T%2FulZQ3uzLQgoKWr8CuCIJ74E0gS7g3MeHNgaXn7pl4W7mh7S0gDCdW4JDpAkoWB2EozmXPqbfyRHvoYC%2FCG7lZzucXcJNXGrKkQ1Axk%2FREkfZxhdqLg5nvmP0P%2FCCVWGZQZlUcBYA%2FuyUA7yMSMZAmSzYzCH%2FBvIHZlvbwto0j5Q%2FB79wHb2K7nPgSaLkrQmk0EoI3JzWb5UzbBIcEbZGWsNFdBXOHZeql3yb%2FrI%2FWSFJul45KAiDC4MToACJLvvMvAIX%2BqcwRLgDl%2FSimxBLG02sMD02pwkbVwfyZvBYC5MrfZzT%2FA6ZQ6MGAej1kbA1W2Ax2v7nS7HG4lD5LbzPkTrDEZ7QLHZqkV17lNXxlratLSg0fqY5cL3aNfrFC%2B1qoq5Kxzu7pt2%2Fjd3IHnzpn5yIYnyyYEJlpcmo6cJ4IJewOtpyWYcci2KFqrGRywUWpukO5p%2FqHa1Gqb2Kk091H7e%2FzddMm51X0ztwnLTtODvOyKpCUE%2BcOYMJjn%2F7wGOqUBtEhCnYtl2r3jfdHAEkvGCGuk6CRoDq9G4UTUsvOwJPuw5l5eu1uwZJZ3iGaHjTueadT%2F5QF3nawuu3mZqhpK2DsaHey4sjwa5QNq8iD2iKaB3nhtOlnUk5AsMYgmxz9zxwznWakr31%2BFf4%2B6AQzRMVOOunFU%2B6ME8MFCPS%2FlbxQtjLVFvA31LSYz5zLr%2BXMdS41m0%2FRpkjRE6sX1U%2FJNLySmXVVD&X-Amz-Signature=0d56dde80caa79c16ffe1507e72fed042ef252d7497916c4b90d05db3deffba9&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
