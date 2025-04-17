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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XT2RWE7K%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T121440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFeCREKj4xfB5wBu3dNBE9GxJZMVq2CHiaf8d21MclQ9AiAbUWRcDdiY0FbIen8O8zlB8Nk3TVBsyVLD%2BPfeEHLf0Sr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMMVQVgSLzC70iAuNHKtwD%2F7vK2xxtlZPPgwHoicW1FilHAbApN%2BllapxraFd0C6i%2FY%2BxNZuXleZ6vbx3WRyCCaHWJaU7iFYtflm9GyTLA6BPcxcKvyfOA28FjyL3ienQ6sHHdkAYFWsN6zaPmHNNu9VBDHeKgC1EsHwfHYi4jyuMsaJE7aSAHDO2DAZW3YrRwCcK1UvJ2WNscAGnFXUzCDbGknwbm5lRLLKvGru9s9AMjnvkFzdVuycB7%2BdGle6Q3mcfwiWShk5nNjGeAJcPQ14cr%2BOLnYQXfl35U17b03LkmXDVM6snkjzv%2B7YYTQxVij4wQFIFzJNako8wx97h03Pk5fNv0lLtrfEn2LUpiYEmjA291rZP%2BuWvghzqgHHBfn%2FGyoOiUM%2FVhyv7KThQ9Mel878dN%2FL%2FXAAxZJLKBXKlMpATqm%2BTDPnSbqNhp2LWjGh%2BkY%2BFnEUvh7M0xrg%2FrN7Ygq4y%2Bw4Gg%2BQ%2B5srRzsrQ3apoUoOZtqMnWIEx8b5vGST8oSKVyKL0GndCpJyDu%2Bw3%2FztOKy%2BAoDBhwUOxZHdiNG7gNP5yc0bcJJF5MoneWIYNfCW9%2FZADOkLO7pvwEwk4F80z6fb6HF4L8fM%2Bv%2FzPzV%2BeONrFQ9Z%2BJ3EhTe0PolABYj2KR%2BUMJJG4wv8eDwAY6pgEVe6nSDgY2sOW4BqlK0heZVxiG3Jxex%2FgIUgtoics2eY5zU1sw0%2Fpciit7Y%2FFdrDRIOP6KWfBOWxoExTL6RVh4ax86dIWsGiES8uGg7z3ewGMWZuMvS4MHbQwjmfqb2%2B209OKdfpHMkfEKO8od0hiHEZgvhaauiCTCBSFBrn6AlrJYofvuXT%2Bhwf0xM3vrFL7nrISqj9j87ZKjg48j6%2BnkZ%2FaUoTsX&X-Amz-Signature=f70eb5879b07fa57ddfba6e63ca709f18e36639c87a451bcd55b70ab666fa87e&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
