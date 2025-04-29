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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4N6L4WI%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T190644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB7jQ%2FjvMZH4kNt%2BK%2BfbeFDK%2BlhmpjB0aFJ%2FlLV%2Bdh%2B0AiB4Z4zRIK2IE8BoTF2HGWOht0DwqeEbMswePqzDUhAyZCqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeadQRBuYnHHnKcqsKtwDS1uNFLvy81H7Uq%2Fhng1W9Jq20JgtJLsmQ83fPDmsR%2Bnb1aizk%2BNxiBjq6e26aXWZQVCvcwAVaw3kw%2FkUQBpT1O4xkiFSvKGR5xAnGCjzz%2F05%2ByqZP0PrXI7hBf3sadn8ISLTpkJAVqUjxJYUrzuf%2B6S2gFIBy%2BwMFZKpm92%2FoTsxVdbVQVeNZrKv0RyE4ejMaoZyT%2Fbk6jWV%2B%2BSuzRZo6DwuZZ8fPU2tGVh18Es%2BDgDv2J1HIZyjeABzQNNrSFVaAsZDYdyhWo2N4C0rUAFxr3TgNR7MstTsxW2wvc4id8btKLBbh6DLzDCtOdf%2F7nuei%2BbvhT%2FEnWhI7cgNmWB5Ct5uAbbdFH3y0cwmcKiLPlgHoK%2FmZsiZKcxQCz2c%2FMtGJ19L%2BIE%2F3Fx4OIPUBNm4zYGTV4pazOKH4pIBmUF2lvNsPaAL%2FkjDA6yvjwNfjahMWW4r1XegGS4xFPZ2MYMRUqRxMo92uYixfzy8ipuZvI8rkGRHY7BYbNHEF1rpiQYCDWheiPoC0SyExOTEz150G93tQRC321Ra7NJsJ6Ci%2FBjPEchgG62n3dEg8%2BV8yij28ocxwsN60TkHf9B6aR6emd4yIr%2Fy2d297hxt2Ihk57LZG0GvtWHTwpeGBkAwzK3EwAY6pgERPasbxLXnWi1lS3f59AJ8Ca43BN9TqhNY1aXifTCecqloNqbiyCXVpgfVWlgwD70XxOuZbroa9AlohKv4skXLLkec%2BjUnZVAocXlTLygPLKUG5SWJmzMcjk8yWqfYaZk%2FXD1n2bzsfhDBUcR6wiSX5sLrKRIOKzDAUivyrJ3oXVz7w4E7DHGof%2FJU9wpZQ0DNvY4ToPvoWqWkjQ7iIyN9UfOjlFBB&X-Amz-Signature=b3e5d1a07f846a40e3bf2c4d54d01b216a66fa072ee4df5efeaa41d8fe38f0c3&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
