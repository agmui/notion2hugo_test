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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTG5CSNZ%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T181145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF0w4Y6%2BzbCn84aciHTdCRNirVka2ncCFMYPEcjiG9qMAiAa8Q87kmrD8JSACk9RjOgcH7KoBt19HaHaJTrsuU7BniqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiM51fBSpaKTgeoNyKtwDyZBQ%2FQx6hFaNeZDbzKH1f6cm%2BU9wi9QiRby9mrMUDZHf4KfanV5nKDqNVXXp2lc1qwq3RO6nbBPQpJdTBTGFIUDTXPU0ywyeHvi5xAxyjmEw2wEqyOTl0fzLnzuuUyBKJqCZ8oDOMvJDn2fh%2BrYRPi3BvLlwmnOB%2BEBAnfQeHS38pDP6MDt%2FLWBQqtVw2XhLjfzXAPHrM7Un24B0pGeqcvywkgHd10aiRWhfKUhOv%2FWacj2lk1WgiBEKChUI%2B1Jdc%2BbP3JGaPzNtgFDxBUWI%2F4Nkqd3OmPRZEYWq1gz5VvqAUJLEub1RnHSaJwNdYvdFySudS4j0gJ%2F2Yq36k34bX4HKfNTkyCBAtrKa5qbSqTC6n35%2BJsSQopp2x%2Fxmm%2BMi3czzBTrrSyLxG31RZlMdt1Lepv9%2BC6TtrbpfFx1jzwLn38YwNF1C4E%2BZcTyVSuoupfm%2Fk70eRYY7roHchsWcVSqMgLNUlHDcAlGsBi5QXi0BWg%2BWK%2BxI7pkMNJ0pN3TggDQL5NZccjGNeSdWh3L3Tzv7WBlNf809y3CZ133soVXpnuNRjkL9wRWvvPegIxv90aqohYKNhIfcQW%2FTmzPyU7nHcsk3YFGNBwW7XvtrySC5cmXcVKrLmI4VILEw%2Bt3QwgY6pgFjy2elKNLdy4mhCsJGCFu51Lf6p1uRmFkvwvh5Cvn1blprJAXyv52in%2FM%2FIuzXx2IYp4cBVu4EGBvknJ00iu75zT686evw3fMfSDfFjCN%2FmYq2gpq8bIE1fct%2BmAfEQvNHgkwrF0xBDMRQtqKJ1wLwXOD8Jzg2jbPxRS462F7TOlpupANmpTdivgB%2FYCDU%2Brqrog%2FU2QdM4uk98EXNBPwZCXqGHZ4Y&X-Amz-Signature=679445714e0df23eeeae507b6e91e0aabc5e3f9cf88a9a4fa6122e3ed5018f61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
