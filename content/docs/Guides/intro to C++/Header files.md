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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YU2U3S2R%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T022239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHawIVvRM3dtswdgpa3%2BtARV0vGOQzDSVe1ljA8PyBJZAiBb5hNbwvXadBuO9l6sPEzunwpwQHybwkXkgXd83W16HCr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMA6nNpOyxBwsg1lFoKtwDYusOjgB4VAh06lqnYXuE8T4zAIl8MQ073ToH7zOqCiCdPc7kkebnAJ4xesBWoGT2%2BfrwJ%2B2Qew6SXvFKWDHa3mVs74qB%2BGacXjVIi8ON1JEjdZne0bggAY0t5Ubae4euFwd4SNK%2Fd2IoSBswH108YnMk47CQ8tlZMOsKWS25W2%2BuzSHdS64JrP%2F9RJX4EOM5eVP4928Q6M0MCm6Pv8TdBohcLDNlI6NdmCutpwhiPVC75sH%2Bgg8hsERdM81l7uLUan5ZK4sC8ATvxm4W8zzcVXRW807y7dVhSs6nBXfvzltrQ%2F0PogFR64cwhvIfqelL5Z2ZRu8OjGHi4jq7rzovwjbzEj2s%2BjpRaR%2BxGt1v2mJoqb6SxtqCrdi3PXuozOOryfYATg4KcMieB1GocIGexRGCiVPKh2HaGn4%2FxxY8V8klSmu6vuPWbuZ%2FF4UAWvkVcHzEdt3CII0Ofkw%2BQRP94lpH3TH4VUWZTKyWH0DQynDTAZeHNWBmdm3LHrrvG%2BGuHLwmdtvddvC9aaePIUSOcmpCr2i00Aa%2BKyWTgdt%2Bn1GljuIZTcaKRHi5fbPWSHorMFMLVU1a%2BxAbK4YCvXDEUktYnaHbXXFEf7MOq6fAmgn%2BDBGOn6mGodnAFgUws%2BrMvwY6pgGyUcrxSvu4ngNSYNSis3vJ0X%2B5g%2BakUHcmPjWdDIs0uX8YEgzSy0%2BcM43mbSz5jqx24CyFxw6Sr3gjk2biEQPv7JHz92ECi9SDgT9SJ3FBwLTpGFcbc7FUEV9aS2iGMwH4f5b4pnYQGWcj2W6QiCSEfSovk1rdLqOmaMFO8w7G8xmJv%2BxX23ppP1Eu2nDL4OQx52F9AZlEKLArrZXho5OYyl%2Fztuu%2B&X-Amz-Signature=45823e1815539006a557fcfc9ff992f71147bf235b612be21ea181f8f65d406b&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
