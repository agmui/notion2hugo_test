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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XE6P2QZO%2F20250921%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250921T013831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHBbMHEwHPEBjBPEFuR3DhZxilq6Qs3h6kn0oTmBBYg%2BAiAaeyCtCwJ%2BwyVphG%2B0XgHph8V6%2BsPDICJgcPGY5WYdUyqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMF30hNaZuevrFZoNPKtwDYgCG89Tz2KAFfvntUSt8g1zLgyTPZ5%2FSFKUx%2B0dJTbyqvj4d8kpyh2DagoHLVpZfCrRQVvTGSlGD7TByk4zcgGA4sv4uaZwfWjoEAeqGeSfG%2FocoRPkXrbTW6BMU739rEKNwDpiW2hzDCkr7Ecz0x0L6XdxmNLOaDLdURzNEnmjDP%2B%2BoTkNHlCiopGe3s1%2B0u8L4yqtgIE21OTD%2FKK%2BGIQW9Df4bM2ECGwJzMZjHuGJUsvxYBcq0uq5xrCQ1qvPIa2BooHLOJJVBYV5MaOOIYyhGjerSTusPHFMPejppRIw4HIln%2BdXIRBYvg%2FVW3g11Yv%2FL%2BAiltKN0wDN4PWk8HHSv%2B85IyoKg3azAgR4p9UfvEkdcO89viUacXSC9TQpUvd5zydOaqhz3kGrZLEDMyQhkrseTUE99yqIoAoWgbEHqu80UWelupmLe6JWTlBg9BSCXMW7K%2BmvGzJeXssPL9T9hbR9dxcli0uQkK6Zh0CSJcCdWEnDpjoDNswD%2Br9JAVFMxSZ6F57B9EBKBQVsJ2u9wDldbSP2R41qOCZj0iM6lTOM25sq3bBPkQe9zXfHpDx%2F8K3tTq9WuMozi0qbNK8RuXh3Luax99M%2Bh1OwPNqlEdqNI7eyz9dWxqskw4p69xgY6pgEOE0NA7C9ucdEHB1iCKJlOXKjsJXleo53birtRFHFI%2BOdXwXqBWO1Q9V3ierjbLLrVyntwjeuxfEilpofJE6fOHWkXuAnT2a1UQ1FPje%2B4GIj2aQymzdXUt1PMYHVyVU2YwbBQBu1gf%2FNQW7BG90GpKirEdOHObS%2BxGkUuntJtZS%2BVRE1sPdlHcLJ79wUEy93Xmcvk4Jd645WLvlxQIzNlYSBTuJyP&X-Amz-Signature=e7eb405c073f48a78488afb4a8aef4424d19b3dbded58033b3edb1192c8f7f1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
