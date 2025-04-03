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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SPBQ6X6%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T150816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDZkegZPNQQqMsulY8sxvk2wdSN80KBneGDAbntiaMlVAiBozoyYb1%2FHHUgIw2qo41zqtmd2T9spbgLvXWfX%2B0F2MSqIBAjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIgGOK13lpHTJNhg0KtwD168XZ5hB6fxbRGWOe%2Fwvmb%2BS3UV0gXx7c74ahfAh8jmimaZ%2B1Eo4iAzVOEPIDJaVXJae3j0cuKqWBVKZDjRtte1Na9WKmwaqrK%2F0FhSH8aTPpk650DI3IpNIP%2BpjzMSJzLJRvVZdMfxmoDNDJeioomAlXHeKnrsfcswl29WWv4cMxQmdSjW8DhuVJPAp7O%2BN6n46yzP%2BEQZkUMbS3Wb69TMvvAQifCvlJpcQzEukBTCIRjMctnA3AtklKccDGQtXDXHSkzMsU0MxOD2CakXZjN24B8VAH4MtpEEXtJeq3CWRSL3PmuFFrem5xatPBeGnsRDnQwt11KQaWQyPQkB2hye6i8Smw7xD7a3tQ4uFY9eDwZSMyB74HndHiqMZOD6GYCJnOiDvpZ8vm8uzJQ7%2Bfq%2Bs8kdnQpL9QHl7WJZu4UIgkgF7qsq0nU4qUhXB1unK8yPQ2eeBMf2vm9X7FdPrC%2BDPspyW7TkYVwl7CdDpHrBljFIJDCs67pqWTO7ZLTbIsZHFZcCCsL00SZpUsy99YHgfOyXt%2FXqhSzMUZoGMJxpnIVQh9wRzKUbfq2MyktU0dH%2Fo8pJ4ZIgWOUDuoVqNG%2FdgtCItmfErL%2FFrfI4SalWRHFDF34E2FDRCuaIw7LK6vwY6pgEHte3iVHrtEBHFKG7198BElT2BuRAYgpSDH0e9ECAPoTbfyI9JSV6v7DVU5oJm7rWZmWtDPonJFWfaPbjav1IYVHxdq2PIvGvbRsHRbtiMXyfRawkWbIG5y0poCvpGtTmA%2F6aBUd%2BdwreVJj0v9R1hChTu3TTOCOzyPiBr%2BFy4lKbgVo24VJ9jeoz8Yti90xgasDAtuO9c2GiUTDOvDhtpu8AJuNpV&X-Amz-Signature=5a5e7d47a055ff89ba8d08c799331023bcc05e1e7e599ab6fe6e54fe999a8ede&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
