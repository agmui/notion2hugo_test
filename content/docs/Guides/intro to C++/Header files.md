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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCYSDIGO%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T021028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuU33aSh3hrFH5cHVy5Zq6Bbwyr3Dj8MkN2ZA5de7Q3QIgXBosfB0BofWD%2B0zm57Mn6flNIjkW9l6P5P5pMZ3CidsqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD9ac5kpmLH1NDiT4CrcA%2FlCJ74TIwD90NHNM%2FujGcX8hjcKffYJJ4Oh4GNN%2BT1EQYTFBeTwb9kH9MLJx4%2BUfrNB2LGo0GvHYoxsfoFSBcTupzqFoEvvIZvJHKuVdk3prX5%2Fz1tLVPucjAPMKbwbNYUNnK2xq76I5F1O8L%2Bb47UfCRl1yXqophCNv%2B4ShRQy%2F5VcOgg0f25qF%2BcpqXbq50uYWxTYzD7nrQq4sHXtUTt9GzA7dVKGbi6wyvuoWBCAyYtl%2F0MyBmLbD8rC%2FEFEgZtkrmVUJONVY2zZtO%2BaAMfwrvsyaJEbk2GjI%2BEFC8D7CMD68HQ%2FWUj4YYfafGKxNZRW4Tpro%2BumB7QSCd6RV4ia2eLSNocwEyVcm6bm5F1khw8a5zxzipI50vuD1%2Bvr%2FS%2FTalll2JJTsAcZeQER4a%2FuGpkjXkphT6LYMboHgQZYzfk4FYt4MOY%2BWT%2BAd4E1c4BIwxjf1rihStYLucSzflrTxfHwvbAF4brg7BbeQtDz7SsHpz%2Bv5V%2Bf6oRh0EM35e8J5f83AQViviJd%2F87w9N00bZBsu%2BKav%2FtfxeYddvBHjWrrxFTJAMQSHVSgLps8L30rw%2BPdj8hN0LhjUmXtq9jyJcPd4LJGsLXG7lM5sDDm3FAVb0VZILjDcnEdMK%2BE370GOqUBkjWuBjs2Zjzt1Nk6Ead0kRKnEcnccJK31fyeVvr1GAz8UfWv%2Ba2NIhZ3pu7aWhqdHAdh1Qo7m5MJc6pFdJHihKH8qdo8cg0oY5T%2BbFwVtczpF9F%2Fr4brbbePnV5nrwPhyicJiO3VArtc2K534pLOP64aBZF3ibIWC8PNBh8sPeGvuDe06KkXfYhS2HSbIHlSDpthCo7bMzmnwglZvJA%2FZO74nABj&X-Amz-Signature=44d33f24112cd58f79faaac275abd167c71cabe37caffa9108e79aeaa3bd03e9&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
