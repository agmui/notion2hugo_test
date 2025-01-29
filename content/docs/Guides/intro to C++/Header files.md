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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XLANCY3%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T081004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDX9IddPdvvFf7C0sY9fZLJuGsBVIYiMlJz8YzT3ZkflAiAnTeTMbcefIgmd1LsM7CenfLUDwVTYhZEgJ4vuJ4m8SCqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIzkOXdSjuYz0r2B5KtwDtCxLeN0O6hci8teyn5TOCVWgZgQWOSNKET%2BFJ0HXfmoWfgNQZV0nAWvuhIZBWMhjm7ckC4qA5bvO58M%2B4Iso2XxAscPIRqIZdnnUParyEsIDiA6dWu8aAaILqpCgnEMmLg%2BTijLfHteSwKb8gVccWEE6zLQcS%2BoVGXXryzhBz6UndnLtV7IUTVFt91S%2BCu6uXFfkIWIAg7Xzrn5sZmjj1zTtJai8gfsO3o%2FRhdV%2Ffzqhn7DcuxmQSCxK8zcZrs6%2FMlc4JZLyjbZaUGtgMwjRdU7x8mKE1nNWfd0mwvErJmofWBP77ZUNW2Di7hWuWnhlQvUetr%2B0b%2F9UnXUEAve0rZaQUgmwb7S%2F07KmxLmrmvMGBwwSm%2B%2BbKQcpia92hA9ZzHE%2Bul1tOYOOlgkefLy5Hna2i5EKyajptGWI2GVpPgoabQwYq7y9ArEouP6%2B9XuSRkud6kpEecPZUbPHA1HhBVDkyLpRVzGkB0Dm7ecEPYU4mi8rNsGO%2Fgur3%2BdIH5KXCXdgqWeeagTYO0CXrPsBu%2BtBjX0o5YMthDjEGahxK%2BfvSx%2Fxv2dQXUD2Xdp74Jfp2GFJbz9jiblMgxRLbFB4%2F%2Fz6hnw6Hdgva2rAMKcnznG0r0OZtKmsaC%2Fj3a8w7q7nvAY6pgGIExAXnbIjtEfEIr4xiEmPhcXq3GWE7LN7cSWv2W8xj603EZWu4spZHPIFQwJkQqGgzLpfMwplutXaRBZcGaOPhIWe0yTaKAqKdKIRuTh52bqYCia9uY1rCv4OY%2FBn6p6aG6eoEgbfKcRgLUKJQWCN2w8UOWw5wTrQuDbBh1eYTLHiYoNVgHggN6B8i%2F7nQvpSDY539lbPKrXRdYGW0WKdUDbd37Bn&X-Amz-Signature=186b442ece64363fd85e8a2936598ed114cab72bc39c973467e74a98250444b8&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
