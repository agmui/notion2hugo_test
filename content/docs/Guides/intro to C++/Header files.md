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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666I664MZU%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T140650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2C%2Fqoutj6IG4KkjXvCqbRAegVEmpBJFR%2F5Cwc4noinwIhAOPspXagkQQao2n9ltDvm%2Fl0pU4gmMhmbapMF8BTeZJ3Kv8DCEcQABoMNjM3NDIzMTgzODA1IgxUri6Oa3YWoyajpDQq3AOKnmzQj91wcYo%2FjTes6oHzEmU6r4vxJwDKjwysfa%2Fko1NegN0mkm0Fz69p%2FdABv%2B%2F%2B2WZZEG9qH6csZIMRbhFmmGv8La3llqEFAW4Sk%2FUuT5QsG%2Fw0KY5s%2FrE5rggwI9KTWuRhPjsAIiDnG%2B5%2BRRQLQ1uUjkZUFVHRL04R98T3B1HyIVnEOnTbc3OxqiCGf6mATVFpRAaeaH15vVawncFfrmtGvjjq2eUJIuIkUt36kA25CdE6WRHxCBX6UmIRsHjC4DKEBwoluZ1v1paNzYGmir63scPssSPHPziNbWQwp8CucRs0w6v23suinabu%2BzaCJ23JYpoqYnjxqvRiPnzb0nnZP5LpYfrb%2F0EMDKjYduw%2FLibJ532VI%2B5r0kVaqE%2FWhBSHE5pMPPoqCt909rASVkWB0kkI7MaOBIsS3QvwS8t%2Bw50aowWbzpyOMy5i1yQQQtPwjc1MVq2RfiIC4OzV6ZbCFnAs0ICQf9oz0NVJst18pS3oqLkPjM%2FZJKaWzc0ldICnkPXdRS3F%2FzspDqXQd1g3bZoBJ3lGRCpncWycGtHCZy1XwMs%2F100f4LfVWdt0M8QqrPjPzsAy94mT7GMHxZmSxz35aCf%2FUDf42MylfNCaOxmV75naIOsSCTCWzLPABjqkAdzltd35Ts55e9CvszpL3w1EvKgWKjlwsC7rJx38kH0w73BMGd8h%2Bt3vTMrJIXUI4oGk8MCU9wNMygrGdDpjWHaRaBTqKhsl%2B6%2Bd%2BHtBYoR7rmQc9Wndo6NaVm%2BRTyR3x5O36deu8HwLxrrZ6ZqLRks10nnbB65iG2zEtCWG8olT3ogoBCU8WQCwGJA4C%2Fnq6szn8Gl0bBtMcq0YmdpClALPz7SY&X-Amz-Signature=644a7c47c2139ac27f69aac9af866cbfdc059294b8a27e756907d451edf5cc3a&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
