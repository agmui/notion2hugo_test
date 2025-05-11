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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZI4KWZX4%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T160849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQD21VXLNkl%2F%2F%2BmvyAzb3sSaZXDIkudkfNCA8K6DOsFCaAIhAJmIxCg0rIGTJQBSD4UBRHiIrDH3%2FtRKgIW6L8Z8s%2FR1KogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyKmu%2B3Sx%2FOZtsHs9Yq3ANq4RtibjKkq8xYh8jPy900kP1jL7gaeZtCwq6IqLqkWH9vvPG7BZ6MzbjJ3Dm%2BXhKE9WoyoqJWnVucyT%2Fl8BPzmjeJdvxx9QI3F2B004PmdE9PDZ1%2BNz41n4PievOJYqym0ViXiEAumbrIOzBVI2RkwlLu95di5FYjCYSRrKQEyA7HonBLMIt4JRTylKv59MMcpCW3UsopxHDQHOG6Ap7vaj%2BhoEcrlNOMjH6PK5gXnGMmoMlVuyObeenArCa8BWOqgrizZn2KoxEF2tFnda70YaUMxfeyDLu6OUpb5M5EcrFxQMv6r4Bg1Aw8bDbuQZa%2FVGuA%2FoFIeIARLHD1dOYlkT1Yqc38bHWrRfOdgAEKDGAZzwT424s9bDAEj7V5D%2FOn36i5AewnHLqgwXMH6TJCsygpMs8za8T0Ojnr2oQ1CVwP%2FcEwlcIWBYdDFb8UJzAXY6%2F2CII96cI3dL1C51DfshJM%2FRSoftQBHitiuIBhCAh03GAGMeRe6FCj7%2BOSf5fD5KQKA82vbRh%2F0qEuBKj7cBoozrJe6fTl4qlhCEXmUFtQTtMz4em5idko2NYd56hDgcgQoQkSI%2FrP4ACgg%2FB84ixzQJY9h9k4YIhsH2hGHBh0IY9%2Fn51yC1kLlTCC2oLBBjqkAQzhSxWw8gjKOlJDy871ZVFSqerLW%2BNjjQAGsN8FlJZRRWq73%2FdHsobqgUGqngvRLZ4O2m55bGaXDDDIhMPt7eUMETcfefdKIf0LOpXjoFKAnipx74TG6ODd2z9cDvnAnxSjeGj124ekOI1UE0zjEiR4pxBC0zAcsC57oFFOAs2AvXvo3PGvwsJr3epOhfOMjpR3jCPcc4kW2k5yJQi4Hipo%2BlHn&X-Amz-Signature=52d5f472a26e5c7f98b81f7796d4b79616bc0b8289bd016f032a9f743e42a79f&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
