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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLQ3UXOY%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T190116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDd63TuafkjEX%2F4J0Z8UPtuH5BNqUbr%2BFymGy949Ip2fAiAsHErAr8fW4BexZ4eRuAla2dhqJLEPVXxqdZiPjItbqSqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHKxFHepWB4QbSUoHKtwD6bI0Hm2i6oeAl7VoxYerzqjYj0Co8bgJAVoRfDbOrccYgnFxeU103Z4Hese6sFNIPfjPlWpBhaIfplGs1qe%2FtvklPbe6tMIH00WvfYl%2FWH046UWHTgbiGPALSKFz2jryuQSI02aGB5cg67u1QaBp6M%2BiI4sEs3VLYRnV0zv7hlYD4AkaHGXB04SSWARx1ubHWx6d5X6pCPfjIxGO%2FNcGsP7SU7Y1VbRUe6TN2IPf6kl7MVcikg8%2BWSWtXd578Hk5dTL27P8d34j4xCKpa2GN1kU1weKuFQh5ryU%2BX2PHTYuM%2BmFBBUUVG221YfNrhXFLkl51rrr2R%2FbodFsYgc%2BL2UfOU598vXaZBcRTqu1K0WnYweVTqZAUWEm%2FIFF7O0i4FV2Ew1A2NEn2tiSX7eApb%2BXfQWylpvrHLvU26Ok9k9gICdsibMz3jaucEA2BqPZObsrYBx8oX6YFnLwsMC3hmhOukd7nKeOhS3Bqlx%2FJAiQ6e5RstASvYdeAu%2FtMwDm7k06LfRvXJ07taYZy5%2F76gF1UwjV3ZYVpf4bbZ3j8pejLqoFjUxFyF0EBkHZ7MhwFpRuvs1Zv7ZUtMwFKSfxH%2Fu9ryWl2eI0yZSwS6kXoGfAgEvmQ8NSd5khpFM4wosDRvgY6pgFi5DU738Hl3ODSMZkH8sAcJLLi3PqnN7IbaY2kVuU68V7OqKPPbpwPjK09Px%2FamKBnd1KjTRb0i%2BPDcg0a7AoX32251XXme4Yxq8wWRZlOg9uEoaWhHPoMatHikm0K52PDg8p%2BCJvMxSZFljRzqOz1m0y0szpNjUHopztH9ZsMyiCp2hEXX7qt8pNd3pWPYnioBiDRwonlzgWGE3c2egLwIM2butq1&X-Amz-Signature=f6ba47dc74740cdf2aff4947b7b6826a60d52a40e60d444a201f4cd821dbfc3d&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
