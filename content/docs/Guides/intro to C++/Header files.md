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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SDQQNBR%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T200856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAx605E2RRP%2F3eAyIFxPIfuoUWMh5LT%2BNqnveUq3cyh2AiA5P%2BwX0bNRD7s8P9ccANx7uU7%2Bs36%2BXazTX%2B3Hv%2F%2FSlSr%2FAwgdEAAaDDYzNzQyMzE4MzgwNSIMxPXeykj0KaEQ5%2FcrKtwDLTekD0SICz%2BXa1A0Hz6Ha%2F8zO74%2BZzzd%2BHDAqxfhz08VR8lGKfvNji4cjN3l%2FVWH2rkZIlN5NfKpurzkeWfLv8FOBWN%2BtZDKrDf27630paDxuR6W%2BjtHDnRnnKIy7wMy5DRdFdWlpaUvnisdLGppsLykTnTWWz7W60rWOrwbq3bkP2jVn%2FQHwQws7897ngl2BL%2BUKSZMsiIrpJtYRvbZZgRQH8y6E%2Bi8rdIDh7dtuhl4lhi19fvDYfEpJKaJDQlM9C1R5vf3N0wXcKX3H1bb%2FFs7MJyCrNUUPPZWlGb8691ZC%2Fr%2F8biUCQAun9SIwrGotrHU0okLZ%2BsHwjdD9rR4LU7p8d%2FKg7F7QJsf%2FME4S4mScU%2BVagIBuDkRM7FezLWaCe%2BEs%2BYvSUmT7zK9p0BgfxoXofQQ85%2BfqdYVjD6gAEbU%2BARENUU2E58NMVmD9NFtHATkLdDw7RDWe1uQajHkCC0297FciPWyzSYsts%2FCGvztuZ04%2Bf2Oty2cbWwuaW1243Vpbz0lzC9syMpOJclpiN%2F42tnieWB3Fwdvu5myxIN%2Fk5DHLJdUoXJnDdiNYpRnWm7LKypcb6TvzCYDRiZhophtg70S4RiqhNhoWdiaAk4WoPcB02MJ4rrQkCQwzZiMvwY6pgEBAPCNkwVnKunQi3bnIehVLu%2BWDKUCfCO5GnyxY7iGglEqZ5rzv9lqeUGdsgxBsZAnOL5uolm79w81rjeIfrM9t%2F7c0LnA5oKuV0q%2BCh3%2B2H3Sm%2FVl%2Fi7D8Y0CwmSpS%2FCLYfIfPNWe68hgoJXcXo4UXjeDbGnY6KypS6Rf1MCDlqgyBheCWcieenPDmJ1VTyCgFn26xrRCoDHRbHcLHjelGjXIwNQj&X-Amz-Signature=7e507652738b5c9d1f8761ef985456d1e70be96467957ed26382d4e1acf4fe23&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
