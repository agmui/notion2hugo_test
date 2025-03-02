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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBQUKNXN%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T150409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDArurWp5aXqB9oZWkuL2jM%2Bac0LOhm2R3aUZpd0yk82AIgf2JOfmB%2Fw8pddHFJ44n1tLgDnEdFsiq8OiP598NJpXwqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJh0%2FpPAmVi2JuY%2FiircA1RJ3YN7rmUiKgpt%2BjGt3IffQhij3Rm0JkMhUmzrAjdzOPSctiFY6P1fhH618GaPDbNUN4LnxONRkgGwnf4EawzCbt21tlC9jHy%2B9PQpC0%2FWvk%2FggQxxUbBw0oOuqfBhnd1cvFN2OZFhHzjZgMk8tPSt76INmLO%2FQfDiXh%2FUF4yYkR0VDWP8NoGuKbVMVEUCu6G3vY41j6At5EP6GU1q35Gjm4o4fdaynRBm2qxxINZwwYk0%2F%2Fmahd5s0A75DwK4WXzcBoF%2Fb3BsqOQFDcNqmBZRtBeeD5Bo4MotUTISr5jSMPfREGMRWd2Sh3wiTqeLYp9oE4BpkdaDAvGaKRlLW%2Bhx5kbEBofDd7EEmUz44iKj%2Bs95vD0xCHDoc%2FOIMfwlwlaf7NS7R24KDNETrz9gdgjtAecvny4EnpAmWWpgNEobBRTRMKh8%2FCpWhTjm8UI4rwQO4HThMsumEZkY9OJXSNxk7Ea4MuZGgW0b%2Briu9p8oJiYRa69xuGj0gDTntJETTNQR8urrR8vbhOHU4ZbBSLd1OY7xtbdwx6CXi3285h%2BQ97hQMSZ%2BH3FOK86vFSSKNw%2BowL8GWK7dKVWHVZi3x2I%2FT%2BePHM1OpncF7w%2BjFa9a5JFkZny1B%2Floy6lHMOz2kL4GOqUBH3t%2FQMsYtk44QL%2BTpKP%2BTtPTmlgUZLy79tcOda2jhYPuG%2Bz%2FccC5U59rl48xevvMAprOGRJBt7gXAEH0WBOgwGcHDFUVrDZeBdJqBJXw04cxjtiTc%2FFHNEw2%2Fd2COH3mR2upD4%2BC6tgsZlZT6kBTiqtxU3%2B4hEPt%2FLtRBLi01Q3z3O5ZBLsxLaRUT5DkmgLv6pos91%2FjgfoHGTlYGk9zm1E0LapQ&X-Amz-Signature=0a2fc73f36dde9597d17901524ec890a35b11c5ba7acb2f9e71bb811ee21fef7&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
