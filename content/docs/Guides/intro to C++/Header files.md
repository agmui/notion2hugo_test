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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KVDVFBS%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T042818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJGMEQCIEsu2cjXG97hY%2Bd2BPTWV1%2FVclhedWz%2B0kNsP4LeyrJKAiA9Q0T0w6RvpaKgXmm9CYXdNRUX%2FKY07kxxjV36EVHdQSr%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMeste1q0pYPCOTA65KtwDde2ProYK2hI%2FrMRH1WYYukAr%2BbrrfeceDvIBxGf%2BlOwpxY7khzLqfdUx0a5lh9RDi2foMgEOSI060Ja4XDSMCxZvhESqXjE0Y0KEcoQgmiCKZA8cL6qm9%2B8l%2Fp4RU9NxMq8AKzOjduxzBmkyK%2BGfe%2FNLulhvlAcaH5zkP%2BerelxjUXF0MVVQYSW07dEl4Ug%2BlzrQWN76wXwV1HDACnl3l16ruk%2Fq1E5%2F2bPr3kkCxr%2FFEtrM%2FBkeheEKKVsfxQHh7lsTVy6ty30BUGt9hSqj42nAqrLYNqgm0Z52%2BHfMa4n%2BO3dGFaiAKF4tYlXzXjow1LxazYzwmJO8bG9tqUkgnlnQeiwGmp%2FnzKJIbKjsC0vxH0cOQd7RtHIkklAq6sO5ytfTbFbkIKhp2hxWgC6%2BDNwCqFLuHea5MwEGqkpzaspub23n9OTWLBZrIZxtRX7VX8via4zE2I55IMmky66H7wyvQACOOCuiQU5K7CCBsiPhyLSFJ8Kt2Gz7LToK7z%2BDC3TrfMtuvK5qlfsxuPLr7cJAjrZ%2BQnqTsEzX0iy4ky2GnEj8DBqon7yjL4wAYjbCbWfKRl6XQlni9MYaKHskSSk9%2B9LjEqLZJlQ3pwHiqcAO%2FO%2BcCzjm5gcuPPgw967cwwY6pgG2YpIn3%2FNmGRqoa4smo8ijGjMv%2FIFGUneS7h1SY80zCXTXmF4r6aPA8IKmMdcCHdC9zq5kZH02iFnyvz4H0Slgh9CU6PkWxlcnot54aB9e2TR%2FR3aDe6TJCbQWie1695qkTL47RPyWAxnUg1MP5aLisYppJaVKpyqbWr9hA2fTY%2FYH3M4TmJsxoN6HjACo4GuzxeK7dxBP4H2y5NEfSSTNBm%2FUMgIj&X-Amz-Signature=86b6b9d9af4889f15ece964b04beb6a5dccf814ec9cdaa7988ed48c8e200e533&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
