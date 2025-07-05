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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMGMNH4R%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T033802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIEHmTYfKpIiFw2%2F9O9tMxAjw5EBoA6MssFsWY%2F%2BWRDXuAiBJAliXOPEtTL5HZ%2FVtVf9iv4TZRbdnaxG4lja8TCozWyr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMBh1PnzGeR%2FK0mlA%2BKtwD0j9p99YnEqpTidJ%2BVgrSkqJ%2BJjZxuHRWeNEQPvysGCDADrOCLydLbeRfXxSwPeT6rZf77MRQrZBpqBggNZWwpdkyHzibxRS8QpAI8YVC1%2BjKB7%2FSRXcPmwULhGFY8yOgK%2F8vLBrwSYwctSLGYO8viiYeDRLAZJ050zT6s8lj8OAfiPN4qtE9iEwEYWWDedZ%2FLmSF6jXo5xcK51oQwR0XsNBIuDE2%2FO%2BFV9lAlnE7B5SSXM2rEHp3Y5hnagACrgzrMiJ1J3vhDadjk0joLmGeXFnkS7Ngk7ogMrtYXOVPmv5twZ5Pq8FYC2zutuG9hl8R1fXmqUNcaKTDBX32vo1ufpXJwR3%2F5FDmwPUxd83uSGKvd9kGEUVNdgXzKdP9Rz7exg4PxJ72Iy7FBelNGL4uhIZ9uU5AgcBTMTW8QvIKa76zb%2FZYSnv6FGC1I53nR1iu%2FwsI4%2FDhvSTzMleWPyxnZ2awId%2Bc%2BxP3HEOvF6uga%2BGBJbFpA69X1N9wa6rFLyjTUmLkhvmtLyPJWBdBd8dSkzNa9sjrnYwT5dVnVjpHC%2BRmQH1JAVNH3deMLrbVFAit%2BsS7h%2FPQCyDK3Fg921xY5EGqIMlxBhoA0CC8YcCdVCB27hFgz9C93PRa5LQw1IyiwwY6pgHcy1ZgUbLU5w4OzmzlZagyHLloqQukHIA4Xz4IR0iJeDcLgCvvoJ0ksU45azMub8U%2BKR8mjclMVMohxVz4Q0mE5GS%2FyB7fogMy4ExsU%2F2CLmgfQNj0CeQ4ucwoGBGvnVYqqn51%2FEE0LjjTe5ZFdIE1zRnA6TC1nOGbcjDUFbRg%2FhCP1M0c%2BNb3yn5OfPvM%2BEJHCTfcqvRDCRwsNYxmI3JWhqYtuUCa&X-Amz-Signature=266580aa407bce3292189d1fd955da5d51517c8d53cc71fd80c77294086027f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
