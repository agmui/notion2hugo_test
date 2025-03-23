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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664B52LNK4%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T180942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCweAcKXXlaUSN%2Bb2DNVSFF%2FlYSa4inVRDTZwzN4kwHGwIhAJTCwyOWjB1OjrnJoXwUTLFNzT2nkSxvGdREG03aL1N3KogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyPZyX2CDRc1gFPPFcq3APFuCJp9dbltSj%2Fq8nkad4U5bZ0lMz1QErPBHdmypaRj5PFeBO0NcV8Fg%2Fl8UdM1rf%2B8YgDB2mJWnuZ6AgVbd3CuOIQTz%2FjCFn%2B3D9hC7NXdwMZhu870cevqGO5ZyB7JUAHcIQ9kqwE%2BO%2F3RiWq%2FmW2H5gjgMY%2BLgzD3aThbC7mEtJLI6tpqJs9wBXa2of43Z7nBOrngDJSQhNwunJs4N2iMYJ4hyRmOi3L2vwobeYI5gZr2ZEKTv9TodsJW17zmZUB0dmrNCFKzQRBernUiTIvscchM%2BLiCnY4X%2Ffsyy6DeRAi45H8Br%2BzQRa9jFRl8xFBUQyyWIokMsDVVYugFd25wRv18KT3z1QWrLkXdMKrhpkHkN8aNBhUuMyCtXx4k8mvVIiWHH2QdfIGU5AxXIX5Z6A31AmhF36b0F8QXgp1ayTA37zLtz7zxEXY%2FLlVzWO4TquuoWTXeInRe9pvuguE3JX8R1EAmb9F1wDaB3clrioHzH7WPPxZqw1QSI42OhZYHoqTMtk%2B0qewRsLBGvObOlJOayDzsYixFsWV9i7o9OhXc2YkPJSl7fPff4%2B1qwLKDuITfa1sUjM3ZtMzzDPouUz6VkZgkRCxbXKrQ8b%2B8s%2BzGkX3AErUUuNG6zCji4G%2FBjqkAZGn4Tp4V6qmHZUP5RF4sshmTHyyjt5XIgh83L9Zkq2DjNRMBG5ey3LaeOo0BsBsX8S9qkn%2FDp2bKWEn9%2FbQtFDbE5hmMgadpZaLknTqhBVJcHx0jTcIHdqTJoVjOReEdUcUTPw0%2FT3PtXRqQlJ2FlyUHqRyliQ9%2FspvCG5kGYl55DHgdXPusghgehPh9jIL%2FuVQaSz8NVHJ8bi%2ByuNHUfhKJdn5&X-Amz-Signature=d90921506b959431a7d87c8ed3478b0b27d98ec7c28c0444b9a2eebe99bdb17e&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
