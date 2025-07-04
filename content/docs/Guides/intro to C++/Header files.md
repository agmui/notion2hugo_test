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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEUX25SO%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T081240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCIEPIJmOfD4SHbv9%2FqiOPMigviHgHDIpmUsGSPC6ojHsrAiAXFXcRVT%2FCB7BQOdcEL6ZE%2B3O9%2BU0%2BXgnEQN23OuZBrCr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMMjksAMC%2BkU63KZmoKtwDP43FNvZ1VYOHuJbO4%2FGisUq2%2FhIAPp%2BPl8vTTkLE%2Fi03xBod3b%2ByQ8LF%2B44%2F%2BHBCmtYQgRkNOcVNUH8sCFhZtVXymwslROt%2BdvQXRya%2FcaH58nUCFl29kHGornsAxRCcAQvZyolLQo01uMVqa1rAH%2BobU2ukeanM6KaUZn8h15VdRTBdcL51snmm1DoGZUML0Yt2otmylHn5PCp%2BZ3j14eP%2Ftg0GNjW2S24rLuGoZ2JaE%2FXkU%2Fch15%2FnyoUBrOgR9pemcfavAuXqjZws1GL%2FdngD3PyxAZlOOg0GH%2F6%2B6yw8erGwp2d8hmOktBs8Wrcaf2jb%2B9kRliN40Eh%2FEOPLqkpHASkP07kvzRwKxnIZac4hEU9%2Bnz%2BI8rG9T3IAN34pO6CkWDJJaxb087DwlgLmU2TjutaozzjJG9f%2FlGf45CK8FYLOuNi086DglUiR6HAJZmIC4VQg%2FATpbjbqcLHpIUBLjS%2Fqv9A0tDFciJwAwFjTqJQt%2BX7byJMEV2EwQf%2BolbjkgFVrkQizLNFMaYCK4h085v9hR35dXTCO3%2FZoOto3%2FWG3P9o2Ph4qcThcI9w9kYHzYYnMc9U55CKYzuT2Nb2cZVaB2qaF%2Bhwt0ph7ifVJKDu7RqZotDzhaV0woo2ewwY6pgEmzHjRgfA7Pn7RjV4kbQxlm0ge5ChdyMxLJZrvKK%2FElFyyd6EjgZVpK%2B4NniZnAvR3GNwrLx0Kj92kcBdkt0LYde1DNyrVXxtBQWzciSAMvbrUtuF6B11R2d2ADMyu5s3ANG21fmlFjE2C5ppvS2amWrhpQixBDQdvH3MKUdqcx7to6XkxnoW3vLiNOAHuPFpRKkBIHJwcD03oLrvVxSbrbiTnYPfB&X-Amz-Signature=9f6ba85c3b99b3ad3e58b942c48a533426a864d2bea6bf9b6cc199e61a5a1218&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
