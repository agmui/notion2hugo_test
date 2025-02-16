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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VKXRKRS%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T220245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIBHmlRLACmxvkPrnNiJldd1nircgBLt6JvYi%2BpopoxnqAiBU65KQPAVNCqiXznNhsCtmeUkuiGYeGrYAP2XDfEGb4yr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMJeVoJi6RHJhgTtQqKtwDVCI2mhwMjhmnJm1M1psshnZw8Zq%2BSvd6v2MiCOdKcJg4FUxcuDyGKiKebPPoPQ9NKp%2B9478MrD7Qoglwjv4DMMRYph3aSBd19VZm%2FLKiovDymD2taUxRH0OVOhIEAdjy4gSsSCOff7Dq2x0pkFdnm5Q%2BcyDmGcnaFS%2ByUlHczbrX39VQhBBOIFp8b3DptSviVQ3j3yAjcNuI37EqcNWKaH%2BsneEcV4rYN8VUPIuDBn6T5xL0eQwWbuRd%2FQeqnD43QZm4DI3xJQOOdSEAtrqeh33syxlUuH3ZJqLyhMsf2gSMnNgemWttTdH%2FX2gnidxK4D3z1PJBvsRIlK9h6h8KDRSgNJDsLXI7eABvGnt9vflNUZ01KA1AfbCMu7NHcZzPUA21qETigf7NMZvUlNRh3ukp%2FBDIHjjGRmHiI9rKumEgjjpQd5s37X7cRwWExzGqQ4j2YoJINuW2lS6ASuHcOz3ckb5BtII2hn%2F%2BqQ893nCtnm2vAE7y4Lsbk2V3KdVt%2FfE6PHZL1Q42ki36p9ckJYQprEdGGBIdi7C3CzQN6hjfXuDVdv8yICGh1IImxlZI%2BGw4ristbe6rCh7hdXtL2PDlZM9lDwCkLqH6CSh309d4vNx6eSJmdvn1jIgw3aTJvQY6pgGlM8TBzZCy%2Bz%2FpfnH1jnklNMExknacboN2QvyHOs%2B9ZQDAGUokw%2BOUBXFmHx8Jim2Rfv%2B%2FtaXJPHf3%2Bu6s4zi5WYEYq5%2BnffWrrOS3cpQLAaDF%2Fk9i7IFke8Df4Ca0shqtALRcDD%2FCpm7ew02RBN9IbENHQp2zGbM8gZeW5580J%2F0T3WLqIHjAlSWx69xaYEtCFZ1O3uCq6BWLBi1Vsm5bm%2FpsmgTg&X-Amz-Signature=0b1b611c19f1f74abcbfb998dc39f7ac269d3b7a8d6078d393db020e01300c77&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
