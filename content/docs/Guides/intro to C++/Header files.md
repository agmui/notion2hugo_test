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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHFH6DEB%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T230815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICf6EKdWmPSrWKVcvlFGIwr4Lc2dnogxGJKRoWjOyznkAiAYJ1Kwsgj%2Bt7m%2Bi3kiwjwNBUM%2BsUirb8nJH4I9LIqQyyr%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIME4N7JNUaXYJEajyEKtwDkxExQFHMDOEw4jqGXdOPIHr0EpEFL3irfDkat6MpF0NSPkNjNBc8Yk7IG14RsV%2BsLzokyoRA3zTxXERnwIsD%2BnMhLGzbDWPaSXCkUDOozigY261VpQmIX420cg%2BwnPNBJ6EkRT%2BOPf4c8a6G8F111HwDj7mttElVMCUGSGJ5slP9LwZV4S77K9%2FqEFEV9WbHsPDtuloerdUExO8l1X7iur7rRhCc2pqDdMcTPtt%2FoC7S7cgN9pQfXGeWS2F%2FFY6UNalHoDzBipV2KHLNxpuV6HjeqY19FiT1wDs%2B1LSX5JB17jqgDxgWGpQzXq7HieVQfcZwcJD2X99CVXoDka%2FqvQ3G6W9qUXUenrW3OfqYUKV4QJqCAMHOzXTzLyEUrxHmuL5ZPwtYUboF2QIwOyAuEfFSzMoM2m7BuxY7bdFMPndhbCzKXWYwreK8fK%2FQhkQ7WbE7MMx2TASeSBnz2n7GuhH7zciynCawsE8%2BS6OdwyIfz0ibQLuba9qyS1CtWOL%2BUbfDbLaEXC15qSeWsDfewVg0sVnbftO3DqeC%2FeX277iz%2FevY2QXrGppdFmQnYVKO%2FFBeMmlMDwSHsCIHDWVnK0pxhVvI1upwenT%2Fxzh6KhHEiUfhF2Zq8Tzt6MgwycmovgY6pgGXjZBqa9hZBoC2N3S8jYg2gLihQMErwBL1Jbj3KoPaR2RUJo7pWxjTeK4605dW4uLZp2WGvcM3qYDhc1RkxUMk9cRuTJ2zEw1Vr5cq9QFFRiBx%2Fu%2FPpSMPP%2FbGPOUUgZZ1JxhrGZ1ZQvUVPSM2I7djN6GF562IfyAeC9WrmTdcTorL0vssf4F79Z%2Br3bsCVc6eKcAiVmGGO4t2TiKdvd0ozoblHnom&X-Amz-Signature=76821332e5a50113d67fd90ec2a5e53059d5455b39c1ccfda703d1a3439f0e9c&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
