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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DSETKZY%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T210807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIGvOIhscTFeV6H%2Bkig68%2FMko9zrD8VJzIgjDn4H%2BqUyEAiEA0AkTWOOBxRczAEShj8WgpASae%2BEc9i3Naz7x741PdtYqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBEr0AYvfY3gjciHSCrcA10INrfbaFI7r%2BRX%2F%2BNy3x5zv6PSmzoVOgliexGVy8Lj6I9La7CTBB2WBZU14Q9P4Y77gnPV11zMIjT1A1%2F7q7bLTcGKQ92v5WlKbp5D98y9igAFm0DA82EITUFuWYvZYnRzXSUwGEAg1XseqFSUYQy03XE%2FnmNX35X84lT78h3gku9b6S3d2JzNrbiisLCgH0sHhkTay7nVkcH3QgJazsI3oU5OOPvLWylWI5%2FYPqd4nyoEd2iXMoXAmjmUdgL%2F%2BwHcL1m3cXQyk7%2FvBvB7WMt0lSPkjolrxLTE8xtppHDKsnrXW94cIWUqc6mV%2F4ZIPMmo73S3rBlu32uGdiAQFWhQLtZh3CgkF6dnXf55zKu0q%2B8%2FFI8a%2B0bzRJ3uNXzHGTewjclhPFbdVa%2FzfP261z%2FdFdACdsWtx02r%2BOB6wmEkEpXARLPpFn9WCK9IB%2FCcLBl6NblhEs9D2OkZoLkjDchAHzuLy%2BspcXxrF%2FXKyyUlgi%2F1HdJKgxedVX2HyFqdWogoQ5VYJCeyI3dRk%2Br07WoS8ygF1LocT8oHb1cYnq0vNCSaLsLW6HK6nvrQnQrLSGht2tfo%2FrMjRyYcjy5an5f5Sr5xjb79fjgzSxeZfcgqDokMQCUZ4oSSXU9zMLbl6sMGOqUBpyzaHEj3RefwVCfMrWtrFLPXCcLv6u7bXs6Oc4Q1HdnLYqHbRCcPDngXNckV7yErN22u9n0%2FDm7FnSNv8bNnDssuUDqe0S5NjKQDsvldOl9D0KdYjeJ9V6QFLSvz0qFUo2GoAKopZCuxb%2B1Ge1gHCQqSH2P%2BO6L1OZlIQxqr8fSB46F%2FneZGUM%2BbR70jqA%2FsmqGRfTsgKNpSdPkb8WZGsusCy9y%2B&X-Amz-Signature=f43494f08b85df2b18897309d1a62c3770526f0cd6dbe44bc4f4fa951cb625f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
