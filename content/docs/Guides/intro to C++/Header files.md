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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5G3XT3F%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T141223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEVA%2B4RU9%2FFRzMycHiM06KVoYUrPB8LNCJbKGKQCgQIbAiEA7fH2EPC4BIah9Oep3W%2Bko9nAZlBknpGf2MVZMn95EckqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEontIfM2rpN%2BkGxlSrcAzD4xYV%2BAziCn7d%2BpyhpUUwVeR8tCQthZKS38CyTmjiMVGy4N29mdQFBCGdF2m%2Bb%2BP5uWTx7BnWPNheThzCJx%2Btme1unPbxrbVpeF8PAwIZkucvSd5U13D9U0FlAXLJQwkcq6zlYvKz5tMQfQRee%2FUfdCN2EohwxhWoT4E8W0ZKePXTRPKO%2BLyMWGoNQcdfjhtUq%2BpkK46M9A3IZabSrHB2T7Lg5OwiCOPyAjLCXwzim%2FrmefemN0KcOphLJd6ZYvg1mfs65ct9lZ7Yf905vsdUMIuLpwI%2F67En4nobmiknYplaHawW4vwYHCs5Gv7evIKG4dX4nB4r0dkaGIjkIj7HMydjLwxRcEB1yKhA79sedpswg7R4l5mM7CNVqo6CNh%2FV3KLnimcjCh0i2w9PQBrVlMcef%2FPnx4vz3OxAxxNdup0gF%2FHNrU7pHFKIc0KP0%2FCShdRYumcz97NMR2fuxLoG2GDKx0kIJWjJ%2FGqqLWpv%2BEdyfphUbWGmewsklSfg8r4%2BKkD%2Ftg3PixGIWPInxkqJCZnvC20qypF4flP8mCs45BUX4qxLNz3wMvyzwcJyDF%2BhAcU7w6at8a4SUFf0JV5ups8pJ0BUoW%2FgfYCnvcklZ5l43B3qv2QAQ23JkMMKJs8QGOqUBZJzT%2BZk%2Bn%2Fq%2BQuwBYRini7S67QZ7uyNmjXjJ3prgIQ83Ymlj%2BkQeUwkDJlRxoZSW5NIbkR68dwms3%2BeqRJRBz7Q4Lo6p%2FPyCNpaLdfaGvhzxdF%2FPQjvAWkAtwiOZ4O%2BVuPsT7Jb%2FneOMdJGWm9A3VZzFk6IeaH8363OR4ACvI%2B4j9ENAvVBvnU632uBMDTSRC1Mt1hA63qxxHtTx8e5htXqSqM%2Fl&X-Amz-Signature=2048f2e5b3901dc7d09063cf8b5b7e7788caa65a500f8c6c5661404ed5296284&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
