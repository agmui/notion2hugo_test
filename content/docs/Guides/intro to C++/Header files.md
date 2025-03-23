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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WS2BIMW6%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T040926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCICunNRYTR5LUeVpEIMy4H1KIFvP1%2BzphpBV%2F0Y6IdWdzAiEA5iEaNfax3rHue6Q5WCfPag%2F4LLzizqYJaoQwa0R1ix8qiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHYk3pwiI71hw8iz2yrcA3Obuyd31KQ3TuC85vxKlwKUqtwu%2BrzLG5xVKP%2FX88SL9bMzvQSC5C7veAbEailspSgvxKp1UX6B8VJQ91%2BtNmLQ%2BImxAXMXIjfqzlEUEP6keg%2FDvznC72q6cAhXdmC9D2UmWbdFD0%2Fz%2FJutW8uYZcqxesntPVhvIMuF%2FPKayUvDWFlR8CtWljzxFIh4KYLR2UtCEllKDeoYsp2qIy4AAVfI31DFORd5NjTA7oxEakMbJFibV6JSzam6bupKT4jfmzM2yYtQHsuQOfZtwTUKdJgvHQnioRMndi2ZEsQ6CN0NmCbbHXw3C7wj%2BulJXSbvFl74u5a4wuVLEceeoxjgXpnyS3Yw%2BFH1za9Pax%2BILOsthV4XaJE9VcYzIsdsBRbV4GLhYcgQ3%2FSVECtYwiJa2gPJUTaXbi0vqQgQcMN5snH2xstd6Dw9r8kp14expY52k5aFjZDG3xmv%2FmBSHHhSR4P0En9oNAtjaUU4W7Zan7AaxiJDasi9PcQs8G7U1q%2Fadb8QNGoPVuAPaTSnZkfIa68jAzH9LjDL9480Z30eghVoWrxbMDUce812kWcWMFqYdF4G6K1MRTGEHjkJQT1parZo9UMGOa%2BbdJRHv9%2FJ42nU5T5WC6DAeGBpOMwDMLvj%2Fb4GOqUBT6jZG2%2BnTO3zRJU%2FM1xDTgJnzg9QxTIKX7D1JjX2SeKEY72Xa0gTPxsndkRTTDHJc09daBZ5E0AH%2BtEVwnyESy3r9MjlKOSoZ3Q7bFvpIIhDjvLfSSqSROns5iVaLAlFcB5022CXNoNiRoCBEnzbGcaqiZVtrP5fwO4mlileoxqHQWIRqCZR3DcNS%2BEBYduFIg%2FXDyqwbUUu2MVKANBjLfQQm3g5&X-Amz-Signature=e85a24bb2d59aaac6fc1558e09405bfbd45685623940345dc6f205e4276ff523&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
