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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2M5DQI4%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T041222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH73UWeWiLWKNFAnOj8scDyEzSA5A1g2KK8nPPwbEIvSAiEAiOXmIX3yjMWadMysnRvg4tG7EwIJOJys7FiyPSJPkCgqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB%2FgJmi3kbtBZC8BKyrcA1Kk6x3RpqNHt6Q%2BQomXc%2By3s%2FpuZBhZsJJkfncIYhOZAuSg2WFjPWE8m2um2tlaH33yzYduh0nBbtYnZaUMUocSnP7worswUVKElfrCxlFrV3skuHJZZBxc8mJs88KP5kuDXZUjAXrr5l2keD79OZ3DjYcZnh4JxSTCqshpsRshQsNuOC7zjjSfg0YhMgbM1bhdwtq8IHQcGv%2FueNCQGO0RuUZW1QphsTa6KWbR0X7Aq3EMZZaG5ksjpAXgNpXSW%2F2nXVUg2%2FP95C5LWeP2FBkGQHdoM%2FymhcNA8e7%2BVbGCDWylVvr2r0ifAZkhqL0WKIu%2FppLGihCpbFpAhzZrJfuPkEsnuBTngI2l43dyWDvnRTe6XWEvqiPi3CsdLcV2pU6cdstjdZzZ5k7c4na6QA16xoDCxVc%2FnGjrwGHTwUqH%2BftuBOPxBWExBrkVHj2Tpnt1AOnvpHxol9TEQRZwKRAyJd%2BoX%2FD3A5yOzgt3T5BZGXmsflzceWaT6JRgZKULJ1BXXBbwENv4U62DxZlumueuwP8J2Xj90WwrmnIk2eA7WdIhs24mMpVbYqepm0HgU23GfSCSNF30p0QXu%2FzreCCmYPMmNjhc5RNDKOTztFzgnImbA%2BRobp0ls91KMNf6r8EGOqUBJfo0X2EU12qCBAHKH53iwy6saytpU9y4fSCwIlCQpHpvWaTwjc9LihoAEGvNXiNVZKnyEBBJo5Pa59fsh7l6RR3CM9sg0ZzpI8JU3Xb%2BxopsGflknTvJrxeWzPJALSh1%2FzxbDtTYqc6Ap58NX6xdhK9YB7vpb7C7JE8F98bJgFwf5bkBG7ndmFioNsh1aqZSlwW49zgJnzKG1j1BauZR%2FkABVn8p&X-Amz-Signature=f860ce09cb66e683b2eae7df734f10076a563e8a46267574449e67c3f1b870f2&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
