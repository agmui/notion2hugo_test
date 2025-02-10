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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LMNPYD7%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T081113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4dMU6vLUJaSYZIoRysnnMlyH4S7gk4U2XfV4ma%2BmQLQIgdXtYQy8bie4UE14j99p3anKtXPFTPVyG9Y0%2B%2FD3tOcwqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPIHGZtqFR3wLiDWYyrcA2A1ZMgkThU3YLJkhsQoy4qCUIBVwg6et0Zc75TyQsOeHKLCg%2B2GVjhD3bLfhSV9%2FXsBbvOaWQAfQ9VCk%2FZ4bmfZPc6yJh4zgBJHk16lOgPmytvmM1J1581wJ1EccXAGd%2F5o43mCeFQZPYWIxWCmjlyrE2iDPnDF0zBpByFqUIrA4oKM%2Bhuac7Xdw0SWDJFeHAN6%2FqA0GNmJDEV4kI%2Fr6h3nUSuvnbDv75U4tHtGnl0Bom8jMRx8MHF%2BM1nBaE48mhpiAId7zAM2paOe0Weoj%2BEjZiUbeCZAH8MS8GZRT9kvRrsiuAYgGRFkOYQKigYMx4JjOSrJSgRDCEc4BKxRctf%2FivCXIw8q%2BcQgJch7qybbL56D4Aj7gY9LzGXg5KmP%2BIxUAvDtsjsFi%2BkQ%2BCEhLti58rLdeeydt8FjH%2Fsgl2llxbPMnX921zA75upxjFxnYA3H9BElYMzDDkuolekQOK5OccrQg4B8i6LrG3zTIqZ1QDGWBY2voEyBRAMBrAvbJ66BNmevpF4JxT4QceQ%2BHjtgepX5jdVq2NrHwE50jk2vFjhnRxQtOI912TYjNv35%2B5XqxP4sicAIo2I64VRomELD979t31pwUY0%2FxfsHJYEuhZppwkxFD%2Bjwr3UjMK3Zpr0GOqUBot59g5f96MTsX1NQGvxr3IDVWIUK6avKur74VkW207m9qIU9zaVOva%2B%2BS7rqv%2F5vh%2FpdDQNVtiaQl5I0uBxpdTcQy8PIz%2BXJb8tC5e72lw9iAqdKpNqVK2WqX2lZrB%2BbjgBUmnlg2Esv9IhZ0rgtcyo53y8XC0v%2FHESfVdUjS7OqDnbY1btfpThBTzQ8jS0iR5%2Bplwoc48Ie7iVS57Unkajvnjg5&X-Amz-Signature=23e65f5e729d3b07505e74a1f2aded909cd0dc1dd87b309ec362fc833209b746&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
