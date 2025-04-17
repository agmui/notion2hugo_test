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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRZEV5KL%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T070930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEE8UGIJYYWSWiZR8tlkUfJ5vTWRbkJX%2BpbC2LiXwcb2AiEA6wKCsO%2FhCFAYna3i0pI%2B8kGg3eab60%2BDFJXOi9GSDnoq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDIzsgBsjnv71U6Fl%2ByrcA8BNqns4LCgReLdEOBzU7KBKlC1HgT3UMvA24wJfV06bx5QOreTEXzKVkO1x6tKqdFSVjK3U%2B%2Bm4fsHIr9hR%2B7DRWh3I%2FRqiOQ94GcOkqrY5etNBuL4wEnbUEyjDaVEoG8bcUNRdVzYYBx2zhQvpGo%2FGTrFnBspy9fFS1DJz81jB88UKFjBq%2FtLWzpOLmz37NRAfW2COIkWyKwoXNrgeT80CpSMZjQsrhxREZbRlQBcZpci5ilBSytGwF5mXDyvx7LQGGkWKFQa8%2FygTiRUqNGFX5UbQ4Ie8n7gMPdSa%2BdntJ%2B%2BWX%2BxQGJwE%2BUORsMBPlpSd%2FiolcMSYZthm%2Fb%2BL3%2FdGAi5en4XBI7ThxIb3z5I3FgNqUud760EbJM701Tyr4v%2F9DLrU%2FSp71maJlnNla%2Ba4dOXC8ZY5hQhTcVitI99wnX4rx%2BcU4LfdgUXecLkaWtxeccIMO8ek8FOiIGPI9mHz8rrb2t2MR3mx6FbrsMibj7AtTm8JsHHsrJ0lnWtFDCjN7y4%2BrVoLHtYZukYWykVeTMRD7hL65L4G7XmMXixUN6B23irNBZRusPNeoAkdY5k7bngvTU%2BQQvBqVqFGzfLfvl03ND2NseodKrQ07X9ocIZyDzxaAMHNIkHvMI%2FIgsAGOqUBtnPXkDpxfS%2FrRyzeVfsjFVujkv5h0DgG%2FeVYglKavVi%2Bp0Ea%2FovalhHsyoC9VdgH6OX2AFJU%2FrdFchd4BStm6mD6KxqIME4hwcv9kCVQdBBx2xbRJURl5ca47%2FHAXWlsPB9smJAJVRLXpgK9dEfDObWfQ7hGPgGpjY6kXM3lknL9AodgWOFoSyQzvwMpBk3gxubXgjyr%2FH%2FtUCjczqy2hS17ixla&X-Amz-Signature=72ca06bf3b48cfb289a758f5fd98741cfc39a9f9d4921eb3104f8956676964c7&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
