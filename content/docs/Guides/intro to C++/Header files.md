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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCKA5UFF%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T200841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCowUT2YfB0Zg0oeumWBG%2FWaVa5RMdWPza07vGjXelu%2FwIgCT3AbubtOA7N0xweL4ECHVDj4RMdjZQPgCywCNrJUpYq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDLxabMJb4dUd2SoskyrcAwnQtJ34f4hV9Vgx%2Btoa3ftRfg69D59hqj02r1LOwUCTVwUtyjHvkz91Hb%2BXO4sbTtNcZX6jCZSSLDOOsZ%2BQZSXFuC5mq0Vlc%2BZgMrARpoVL1iezD4daQKc1Qzyoai5IqHILee%2FM0BaC30ZZpsDwS76LaPexy4RbB821pQKpmtWVA4UfitI5BUwIX%2BuyeQOlJOMwzXFBBoQTNdPp2LIld0%2Fmx47LS51bA0%2FFZMHk%2FOqiXkCcm8U90Xk5VUVu8KUrEvgDkc%2BPkg32ij4Jti%2F6u2TNw%2FWKE4EOX4otSpt11LL4vaV4q91mEk%2FTYgYCmF2ZByLZCXr4bk4ycqvrhlKc1yqwkMDcNCki6YQ00m71BkJ421jFGdZIH79cS3EaKUlPeAmCc5WKgAYLwa0VYXi7j5XcxtNZU7NADUJJVxC6j69UVQ5qm8%2BrW4hW7ZDhUJ%2FITXOfHkFrnk%2BRJ3fM77tvZAZlhurw%2FEPdHPFgoUJr0nA8QRQphzXiUKVJVYQqAEwZMkgAix9VV%2FmsrPMSiBFBEFtyg73blDf%2FowdYelZepAy79tZN5iM1EUkD%2F3SgAuj6mBNNM2htgknpTbhzBVf96rT3vihQXHVTM7k2xr7tfTXxOCK2GBE1N6eKUqoKMKvl4b4GOqUBZR7lksO2vbChOdFWYRaV7KWEaYP6M%2BhW63ZkAmhZBLU0DKsIoCV3FiuNqqIGadE8%2Bf%2Fn%2B9%2B%2Fljncr4FsFYjCLrAKNfz8JdP0b527kJVrVqzdX8Vnq%2BSZjo%2FGw5c3QBiuOXJnRoEpLszPMY3qQAhaiFAY6NmVC15C7QuwyhG8RhiEuYvhy%2BPQDEM4HOgGhxzcke3EEYKFq9ZNSbq08BELIlf37okK&X-Amz-Signature=0900327c041302eb3de68599b066968fc21074094ef3580a6f954726314b6cb9&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
