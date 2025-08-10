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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPYU7KJX%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T040019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFD8IC8Hzd4Z2zCLdj4dpV%2FGinK1p87Lb%2BoOig%2BgXElQIgLJy4WHiV5D%2BBLf5fPsP%2B8P6qKL%2F6TBJQyJadfizkRuAqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMhwQzHM2nQfEBnKjyrcA3%2FWZZEa7GmoErC4EF%2FoYk5F%2Fm5FJkBAqfYnBBzfpOJfB3FhbA5a7uwEj78cUGI3%2Fsx%2BshRL850qjpW0NBEkuzoHtYplyb9IpTtN5opEwTMgivDBaPfoehWiLDDDdOstFoQHLHu7lVi5r4T0Z%2BpufX3HKf4HBqLQn34ZkzH%2FSn9lV0NHlJiCvavBkqK8sbzg41p9c80mD9uSpKb2%2BzU32p84Tgk876v18oedhEKL24KBTlDfQObCQwMtgmL1dHoo46vCSUbKKPXImhyiCDxQC3UfTX10%2FhNXOyblQe%2FJhIm6IY2k8hF0tdoO1NtYJQPd6j02r5HQb%2FKF8D1UzruvZtS7m48vnxJBeAMKnU9xcYpKU5sOcz9aKQsI68o6qUQyPeJ2ZhW6pU%2FMH4GUogzCM1UeHYI8AKKH58dWlS8nKsGLhqxlztr4Uu6ZGFmimCYXIJY373chB4C%2Fz3OkV%2BfRHINlRWAIWRegS2XBt%2FznyU39PfjmQ0eEomWayqffkxIB0UZJZ0TMb%2BuuiN6RIG%2BjPezbkJmtcAXU0vVatA6VpsKNpdw4pYw0s4ENNK32f%2FC9W3mSZ2RzTrtEcd10n594Q7K3V9pyihRyZZaoXieF3H%2BXmCSsngxOjdr66Yp1MMKy38QGOqUBZpt3RnEBAkkIeUps2sCflHqFt5B4rrRgpfrPEvy64alLOpb%2BSJ4Z3tayDlYjBvi0XbRlO77hF76Ikvxe8h7E2jqqU5ztS12EH6igsWo4cBlb6TP31WelzVDz7%2BZRi%2FZ24l2Kx%2FZXMqV5itCJTre9LzkgGUHZvgwmAGYLH8gePztaKJPT4hdsr7fncoKBPxjIq%2FwScRrVKV2suwJS2SWC1ZE8osYv&X-Amz-Signature=88e717c52c548012a9539bbe773eb10c1ed2c41d187f07ae5191861721e32365&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
