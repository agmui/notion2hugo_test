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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RRFNMHW%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T200848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIHEifP7KbpV0lnTQ27P88XaAW1z4WymfEf5xdFw9U86zAiEAj4IwGCbfmByPzHBGM443Gjc0mia3%2FS0Sct6jUGsdsp0q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDOx2VEg0LoOl6jz%2FNCrcAynA1VSRxYO91ScxWWVhiKq47aUPC5rq0MrtRkv7Wlt7Ns19qvec5HgpcRytlcdYZzGLjGXC3F%2FbJ94FqHn3nML7wQdT9gsips3rtceh3xCLHbD3UIkM2KZTtXtKmwskWATdqgA0SdJwqOf%2FbaMFsNrDn0jEosbdlxe1PH5iTN8Bys4xXPVOJ1hGf%2BBpR0ZXtxKIsgjG6vqTYnw59R5vH4DyBOy2e4LPSxEM9OqFFKEe8dT0yTjRKiWlR69h78nPF0DW7S2%2FpjPsSyviO9EH6iscoXM52fcenqEh2HwF9FA8mZiFNppOTxW9OS%2BLkszILKsPOpWbJz79HaALB4QMpT3Kvd8XBx%2F0ZMQkXnr6sTCT7yYE%2FUKg%2FcTiJcumC4rZ6%2F%2FNRse7DIUsOlY8Oe2vuGr9wBYTSyYpVeSXHxGmrkekD7FLAVNXyvz79wrLVcnKTuZln2tnMCYRlFpZ4Ckjh0BC9AExf%2BdnxEB3xSWO1EqhbMPywXfkTpa9NKlwWHxSBmwRp4YO9TxssMjeMBot%2FE5iOquYosRJ981hAOO%2BrGoY7BxsF69H%2F9wd35VQiY0hzbROdGB4oYdyMRO1DZWYaVNtJ0u%2FwI19ycuViIg8uVDetII80hjPMrGtkGkRMNWPisQGOqUBycN0%2BfJ3vVXvxx%2F9X2kMeX6ycAY4m0w451BY9LvDjH907pKQdh1c6jc1H93bdR16eb54Je7L%2B1Nmpt1hmJya5%2FM3csvvcA1kR0%2F%2B33b3332Di60PTE6fs%2FP0p%2FHgwzWpVnR5Hre%2BzSjBBnqcUFuhUWq%2Fb07fkVrlEZC9rdZz8g1O%2BYVZoJbf8MoJA8kB7F0AcVyNYMk4MAK3EkJJnPaPn0CHs52S&X-Amz-Signature=f289779d9b7fc0e546acebdb2114b2b045f65d928f0a15cd7983d5d8b2d393ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
