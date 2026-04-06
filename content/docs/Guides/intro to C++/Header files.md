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
  <summary>{{< markdownify >}}Why do we do this??{{< /markdownify >}}</summary>
  
In C++ we can’t use a function until we have defined it

**EX:**

```cpp
int main(){
	printf("%d\n" funnyNumber()); // this wont work
}

int funnyNumber(){
	return 69;
}
```

To fix this we use forward declaration

```cpp
int funnyNumber(); // forward declaration

int main(){
	printf("%d\n" funnyNumber()); // this wont work
}

int funnyNumber(){
	return 69;
}
```

we say “Hey C++ here I promise I will eventually define this function `funnyNumber` but don’t freak out when you see it”

Here is a link that goes more in depth: [https://www.learncpp.com/cpp-tutorial/classes-and-header-files/](https://www.learncpp.com/cpp-tutorial/classes-and-header-files/)

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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XP5F6UWI%2F20260406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260406T023500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGK2XWvy5Y54XHxz3do6ixUtbRb%2BKcQ7oUMGcEc1DrQ9AiAMzyWyA5141V9vxfjpi9wvVW09DxH3Xz1%2FM7aCi3G9DSqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaNJmp624Pblzvn89KtwD2whNESud7PwSl7ZBoEAwTj2zCTRm366j3VdVStDDX4K21vg8qRpZtaNapKkPvZRe3UfK8xbufNRhM5dtOCiszuxn%2FOCyVrO4iFod6531Cu9CiPtQzIrxf1ARs3rEJt28Teu7DRBen1XK67b0zGY1QwtJlKx%2F7WfPwXXAJ2nvXRteRgcSYQp%2F4viog0J5Bcm8HY2n6NPJwVKhDv1ittMlB9pCw%2BFCoIQcnWE1t5Tjyp2Xx6NigTcL%2Be3M5kTwD1D66krE7DkX4gusVPBjNGxinGTfV1tKuN4XtuAzTPr4cKgJSSQMpkg%2BpOUYRO6PqDt3GYKONIVNxKFVuSYl01xD26WmV07djOysx%2ByzmYk9EBua0yrE3%2BkQdqmSuE2fO2x1bpVO%2FpRVzq%2BceB4ej2c3WTAXIQznvpwpy0i%2BcPwHQBolHwcKu%2BVZrW8FkgESjDnY4Y1nMNdZZwdPkc3kIpVfLLBiNSd0OOLawZJgO5pZDfGFx9dsSX5mnFBRqDTC8tQVvHZrdn0bJesg9YX4IoR%2FOcmkt3wcR5ABkV%2BK%2Fdl3mYCNfKXqUruvNWtNR9kbesM6puKl86wda4dxYQLvBmZyhBh3k9FpTJ7Cp44j0xhuZno3Duho%2Ft7z4PniPvUw8bLMzgY6pgEBgm448xHVMjgNjjwXjaqxLt0%2FB4BjWwL0ZZumaZnE6rdGJgii41OlW7tDOl%2B9I7I0GWg9ApwhX1SuYqalujuc2AtQV7JbuCt20kVOtAjwxRqrwMC%2F2ts2waKtruYv2Q57ogdnEZIIjEjQghpviDh3lcLMS%2BcQpPgejx%2BIBE4t%2FLiKnms4%2Bi0RJ%2F2lVlYehYqn18y5G%2FtjyogbqXT9S8X3dJsY8JN1&X-Amz-Signature=91623a645475916aa88bdd286d09ea9436dcffd05f1426ecf5e0ed4eb070b983&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
