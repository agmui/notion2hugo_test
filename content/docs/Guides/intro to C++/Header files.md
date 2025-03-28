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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZVKQXM4%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T081142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIESZ0oojLGaY8sh3vtY7QO6slPWCXIhzfrP0hJRPOOC2AiEAiEWQbnH2K0E6kocBJooZ4R1foUQcoP%2BDKVmZzStMndcq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDLxyNFNb%2B70F6iQOzyrcA963z3cG7rLtDAkymPvg346gSkmCZv5poJ6WQasqRh4niwVYR7RSkvu0%2BViol%2Fsn4D%2FW8bFz0sBFqatJd1TQ82awlX10pnocf7S3Cf5QtK0P33BzrbnALAkcWaaGuGP8iQYHaUJeDMsKGJrUcgJa%2FBM9JBPBqyODLXZKexTLvdZjWZ5%2FElJTL4kggKK6QHMBGl6iK7st15MA6lXV7RVCab4QBMPFlz9B5ivkJ1cVqcBJlT72VLxoYokL0%2FWmusWHI22ty0RU30A9gjLUthRyfkzbhIpAKmlhhaol0QqwJ6VZXy1mATCUUj%2B5ax54kOowRISj6w3WKQYV5QQmIDiP7uqeNijv86OlfGJG7Zz2QDQtZ7zpS7k7o2sL547TKhbH0Fb7UIfF3xANiXIXQScg0gDXClESooHKgiliJpjV%2FH2yAlVGbpSmMqbPwrw8kwZKOtGHJqSLWGZcTzjY5GqJjhcCyandDyEbr4BqU1lMUKGg97MElurYWDgSoIZiM5xXT%2BFDTIsMxRQ5bdLkxFpmXmmVrFPMgB%2FIIyV1nmJnZvf%2BHZQxu3eqojszwdzIh5BFhDdZKaHV8RFcx1BRTSnqPs9PeF1zP0yhIRb51KCF8bULS9q73KYrd4mSSMVwMIiimb8GOqUBzVtS%2Bph76JDYUsUiSBoTeGAoK5L1XHeSFNXcJrABpCqEED0XDKJH5S2VmCahMMuPXu8CQF5IdcUV3fN0MNQ7jmtERrVsWUfEXu9yfpbKPyKfZX9bwa5zjGXo9eErSVHZnh4fDwwJc11Bx72lKaxnmh%2BAOx9yekDeM9miKfOjwJVq5Cw1bVx3iarEdB91plbJFrCc3BT4%2Fctm9%2FDlFYmIUtDKY3wk&X-Amz-Signature=b6f30435ba096e0cb9e89af56721ad1dee9207a9ff946f87cb3790f6d04e3749&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
