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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XQDFULE%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T070852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEFUUQlhGzjdJcTb4llLOGAuVG2OFbrT0vLcvtVsj%2Bk1AiEArMqEqb%2BAs626KV78jII%2FbOq3RLUZ1P2bbgx0PYvl%2B%2FIq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDCXzgAHqYjVH4XH6ZircA0N4x46yexIeTYwxGlLtzTRdMaBh7ixI0btOgxFyf%2Fw5sFIIskH3XJyyBGXUIiM0AT5JFB0ElkKmTXSERsuP2qyWuPVaxDEl4StalB%2F7IsA7lBU8doSj3n6sASA%2BJjDUNjIjWFdK94nNK8b%2FmvII0WGzYt8PajNEpVkYyLJ5tMWkIRWApm%2Fx2C0R0BGJ0kYv2NB9SdEiYqlW4T06Ym3h8E8Vo3eEM2MpC%2BusPa8k6WvbLFBW%2Fehb6%2BYF85bS6fhlrm71oX%2F02LH0EPRf5iAUdsa7iIT8N4YKSAe1rNoQ95C0lQVJAFBNM3ve4zFUKrBr0mgmJ5zAA4qWXLAODI1nRQJUhol62fK3uHqRou%2FZLpP3whR8jPEhrvb9YX45ArPKXSlP0w98E9Dn5wmDOvXJoAcvM5Km9qAKSV01cNsC05Hp24ZhH55qTpvVPt0lSwP%2BvgJwwGQgXhYAauduApvzGajstvMd7Wts3M2OOuY17oLXDHbeT4IBPhK7Ogy1yu9OalbIU2Uzd24EjvYUrX5tnulfJNqt%2FabbRmKc77KWNeGb8T44N2QPhk7DVtBgyHMTP7jxVRw79mGg3viz86IQXtdfNInVyx7M4f4ZVtygusy4Kt5gugrIUnLwGGoSMOzdh8AGOqUBBFCUU6YcPxcXk7BCXkKGK5SYh9o5CfrGe92Fsk3awdNwFm%2BVhwYXQEok4JqSxynlYt4EyFRq44xy2GXFMQMKXEXQZBHfGF1SXI%2FBI%2FfghFFqZTMdCoQY0AhTfWNnH91necIijr%2B2C0exCYcVMlPNJaE7tr%2FlA99M1GLn72K%2Bj6eZLWxHi5%2Fru3kK1P5iqwBwO7dNL8tpyEvRVJt4GGEbdXYVHVnj&X-Amz-Signature=c46258b1095854fd8bf685cb41dd141508d6c618dbcb5022c253e374c07d0adf&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
