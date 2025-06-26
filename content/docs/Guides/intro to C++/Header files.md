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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7NUNE3O%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T100927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIAyhtYAH5eJgGQ0teXGiXZtlurRu44U5z9uOknP5GqayAiEAvV852hmummvklzopvsSGja8tFmEkxssZI2TlzVNpVe0q%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDJwWsk0icQ4YhedurCrcAzCUlyBiXVKf1ULUEtp5FvrpInmW8lOsc7l15vc2CqYzW4SfhW5CpNoNe0BsDAZGqv4riuzkQWE4vB7xltmk7BRxG%2BxgALrfmPko%2Fnw2L8XybUsUqjQUgxLFxFz4wL7msJGFdzKQbepjhNxXm1GpwCLyCLvVu2VZqLuSbuXBtGoP4vf0gaLxwbgEeoUXVhDdMaVe%2Bp%2B70%2BAxJwz%2BKZiypZBsW3kJAWuzQdk1OZZQDZa8%2FNJVhjb8eVx8GB5KcQ4GuspltVwiLRCaL4RVcSePjJetdjF8dT%2F7emh0Lk0CVGqntUcx5%2F0MYQ6ZAfQvuUUI5blW6PGDNqYHVOYa%2FQ8yZcbYCP0WaudNdgRnSgjZbXFeU49tQBJF1qRNXjKcW9ZUMC%2BGaxCB4skYH%2FDUzYDsAAHTvWeM54ApnITx2isnJ0i0cIrI1MDJ4xKe3%2B9mHzlzWijVWC67j52NW5OTGsxwUScF1DlWTNgfpAPRsMrquaqOB766OuP7v5tTLv2NMBiOsqlVKzsKZy5JIM8E6F7F0ue821rJk3DOIzyqXY%2FWukp0z3zLmE7nau8aZZXsxWgK2VRT6J%2FemOCYWEX8J%2FJUc44kmPEFpyeh5qQ7PZLKG%2FlqJXNwkTJ482BWyOR5MP6V9MIGOqUBiukHphI%2FpUDDtKwCTTHrVC4IZF4qBukCDr4QuVLGSK9s1dfvjAUp%2Fq114SKC7cgiv5HUTNGWfAOAmr4Oxvw2HX66yQSb19g99TgGewyrDZqR3Nl4YRQiS8TcKPJtBp%2F%2FuegJctrLhWhc21YMdfsYr1RCTESYnEv3AEQlwG9OxdS6HkCHpvKeRHU%2F4NS0A9EkHvu95GuvfRTtHKFiFPt5xsZB8%2B9p&X-Amz-Signature=2577fe316ced364e4f8aa3881d66e4600cd918ecca36cac442a8377551defa50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
