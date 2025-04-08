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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662P7OGYJR%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T200831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIBnxoOXkw4b1GbVgcEKYKYWL3%2BEzfbRrgeM%2BYRY3cG7LAiBuWb%2B1H3dz4r9Vx14lbtHW5JckqC1b4b%2BcdU%2FXDBe3Lir%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMWMQit6GJecxGeyzJKtwDyq4zs97XoZn5Frf3O4JhP1ty6pDkdUtMmNtv6kViqgGXdnPu5eOiS3tWPNH98QxjixK1dKP6PeMd6Y7sm%2BerX7um1%2FNDmWUGaTo98qB9CdgSzvCqQ5QllmL%2BqOs6MsvIQOYHr4d%2FJezUPBsU4ELhOy%2FtfmDj%2FLQF3%2FIxH7kYKntgs%2Bk8hwXOPvMyFllkL4pLbP5pDftdWuVm0j5Pi2%2B6Fj8NceIHTtR4BHDUTqkDVP5GAnyamkkbkzKViTNOUXH3UpXyh8u4BvyBl8fVoR7rrdxpMUNWruVBZRfdJOWDDXKcIq%2B1IlwLYwDEQDUeA3LByV2pHAtmJzNhk21Di43Ldk0wQZTVSKea%2BjFdVHU54GFegA9qZAJH9%2FoQFa93oHkcxVLeYersTrOj7OZ3XO11SopQRWy57e2LBQDqCNXK56Urb25NU7FNbbukGGf4TeD2lMsouGKZvkztaWvEFeCbKR97eVs5TKhgLBINEsHjGM40FpM6P6SsyotGmFAGlXIapk8Mt1aXILXgj%2BBkXCbvJFVv1hQ90FxL%2Bc9lvw%2F1UezErDGg6qKE0dMyckJReU%2F%2BkME3DT0tO%2BWUf1dXCMa1fKPHXYP4d0IVZkYtcFBP4x2PvetpcC2bUduPTAAwg%2B%2FVvwY6pgGBnoHNN%2Bf6Zitc80w0FMrZstJ2vEwwgg2p3RE72RoUQly3QheQibJoB7ILoMgdZvQPTONVfDjzcIHoZWn00zGBXb140qT4ES7iGXtC7e4WxIHyvTLf%2FFpNI1vxsCfbVzxjGnHWxBORW4sJom7DrmyB7IruDM%2FL7FtLXY2btQ2hclnCZJtvdxcOAlK5SJTncXBIUx9o6esjDyYoYkElpjPssB2dJ2Zv&X-Amz-Signature=227f7fd9c178d5f3bf8e37c756ab561a9568a9594b1a5697d07b85e67b3ab2cb&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
