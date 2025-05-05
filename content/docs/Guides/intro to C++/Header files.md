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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYHXQHEL%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T121518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbN20UauRF34L9CFdGgBLYxFadScq9OPVXpPbLg2%2FTcQIgI6MDt8HojxdtPSy%2B5YlERG25TA0uo07GWEHWYp5SJMwq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDFXkSmzpc4SLb%2FhmFircAxPRgE0iLZie0BNLVrhvJptlKq58Kv%2FMybttOhnOeZAKuEjBTL3K4ojNZvNfcsWtzkdY6%2FcetFP8O8Dt75fuq8m8oyHlm6qfRSsNyaECGCFL2WxTVA06TkkAc48ZRJ7vhzRjz9QpS%2Bzh1uy50Dsa5usBxG2nWQy0jgpJVumzVDXe0sGuThLKtjvq5lB57SYJwYiqJqi1%2FWOj7DiYQMqvnFFM97DepSNuf39sm3ffS67TexYpufKpigiFcVJ44WTyX1S9u8uP70bptSXqWjTnLmSHppu%2BdDcsx77HUXJUiIyjB0V7Dd94VF89esdxQa2BpV0ViC%2B7yFMXtqltZr1FG4CqEPMdn4s5wf3bJ%2FM1nTEIjP4fw%2BfYCWwq3UeUY%2FqFFtdALBJ%2BTd8azA8YiHUKAY3IUftVrv4j%2B3LR1TMJ7Kupnp%2BOfco%2BuNU%2FYeTAElO2wEYWm9lZQuqTuf3PX%2B4NgEm4MuyNAAZ2Le%2B0fif5Dm6wGUQsfH1nLC5jPJL5bOaTYPS8KDqBcdbCwqjhvAquIp6%2Fu0sSarPnDxLE4EMjrZ8%2Bns9rs%2FBwNxf4Rq6hbQYskBt0LnFhrZeJgmIR%2FY3Jyw40TTXivA%2FKSiYxM2E4dRC7CX%2Bff2dG79k9BM%2FrMKLM4sAGOqUBnULN9hfpNoZZJjSe68av7xZ4%2BpgD6vdA3DlzL9V9rlReByiFzY9Uygxl31yPSb946ga96aHWUXvXFpudD49sxubi7M7%2BRhv6uMiw8Q6gqbAc4MbMa%2B8E2UuKyw2MNOV%2B0Jzw3G1EGFj4qKedgxiiV1zVxwFzXPlzbUOHJGRpNhPUYgDLFNgZ%2FyQHkcZPys2BGE%2FzgvqWVq1U5uV89G4Mw7t%2B%2F%2F8S&X-Amz-Signature=a2ccfa5aaebedd6920bc81c3b0903c1368a08df130d866d5fe1ecfea289d36f6&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
