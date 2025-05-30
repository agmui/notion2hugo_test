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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7HHFBHT%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T132243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDl8m%2BvscXcHsIaE06Dpl8iQ1hRDyZaF9uANp9SpVCuAAIhAJQogz26713FPxF7m%2BVUe3ZjqWhLoZn6v%2Bfv7s5oOvcQKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz0OZeMYa2c1wUFItEq3APHnM3EcgyUteoVN2wwaWwp1oNjI9p05qZd4NWFqqwRV7xwrictRgCKIlX771KZoPj%2Bs2o0rZugnj8ppXm8Qy68%2Fjv9QB%2Btv%2BXBkSCUruUy79wSnk5u%2Bdf4GbQ8xzC2JSg8LUQHefeUS0R2Yh%2F9GoRjEA%2FZzu9Rsga5UVLwd1rEW9kJCmi%2Bz7l4fZ6dbx%2B2dV1PVnsgKnr2MVmLN1UaErVyJnP3PjilXk9AJxswE%2BW4jLJ6CLr0dPGTu%2FIG2cc35EnZJzwO%2F3WIXgBye9IODVKhKMsn9DTjmeSEWjZFLMxJneUM9W8l%2F%2BEEXnL6TswDSzz%2FdbFiCrWO6mzbkuHLnDFt4A5KyQ28BF%2BY6Hu1K4HdIFjNXWqqZWHBvsEcDLRADAHgzWsgGBszHUqkcG5Xf%2FHYrS8R3DrEhRpY0Gx%2BFYdBerB0nBY4sNIjLdGr2nRw1jUKMZv1TQQCbt6I65nXOXNLv78kOXw4pa8Wgho5ZpiZE%2BWDOmLo3AAYInfgNwZ0ohpSWm8labHZXcTWH9XU3YXtYNZJpjMUsbmjbdaV4CwgQqe1FZltJDNEiAjGKmHaIxTPtZhcMYFZdeOkR5u1xPDCbQabrCrE%2FlWpk9eRiOxDSN5ZgHIZPWZDi1N5DzDAz%2BbBBjqkAQWe1uC2xi2o%2Bn5jchBBRuH8X5i4AzuDofC1d3b1WciiUlxxuaTVqvtmSVMhfVS7D5RdFnsVz1jLptbg6I4mFGs58crjqdwA7HgrXnyE%2ByCZGMDeSg%2BeAp1chPQ6xmtiJaQ5csrHDgL23mFjELIBITc1qVpmP%2F9GFpgcicJyyFE4WfQUu8nLw4dsUj%2FeowGA3NpBj%2BVsXfmlVoHkvX86a2mRguiP&X-Amz-Signature=96d10b10ba56776b197226666b46b27342ef7318fd9f8c8f36de53674c82a853&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
