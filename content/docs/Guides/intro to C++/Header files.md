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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AICI75P%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T022103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQCOYnWbJEzxtdS0Wv5jpYTq2FLK%2B3N2mXYi80QO%2FD8g%2BgIhALHRreJQZSUZzZYAl%2FBt84iU5IeIo3MCG2t1o26%2BuQdpKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUAmh4ClqApje%2BhPwq3APF7rdl1w%2Fpcmhr7a0Pq0BG5oXRe8%2BmTBMyBMTpugf7XNZOvdtCGtgthIsyUJIAMlBnvvLg535wZnIksxj11UsTGHDdrRj9f03Rx96aFoSCextLnZaPYDSmwXZE9Jxgcf0t%2FlrYFnTdlJQgUrvTsHuwKQe0gmLQQRwdglk%2Bv2Vkvj42d40w8xuDjn%2B9Dt22xeSPBUsGX8N%2FKgP5E3g5Tuf61Ub78nJ4%2F%2F%2FW1pTYPhAGar65TOsqqM3BnUO2KiP7%2FnCB3D6eQ%2FQ2kdUayiUNRnfmuZVGDYiujbsdBvmyP4RBq2%2F6cB%2FPfrMllCJ4qGn0Y24poXg5qZRfLrk6mcZd42cptGoU34cb4IiMVoNVHuFNt1h5c%2FOnixBJoxCkXT7h82LHXWsISmlqMCwHk%2BpS2pweCXkcMg1JiHmZu%2BsabXgOp1bdxk1qQ5KZW5NQRGOJnt6YVkwnQ1sfo4ZkRiq70MPYXqjsPJl1O1qrjYoJ%2Bv37Fe9Td%2BGBg42F2cXHPEek6LxwuxC6J%2Fu%2BSobGaIfUBu9F2SHZRe43P28iMjVyBQsnd7r3LPY1d8cdSrh3A0VE3ikHrzzZ74zCoOJT1xp1Q9VCDZVjoHk%2FpZNd%2B9fVbpX6TYcAiOmZqoHun0%2BW9DCq7tXABjqkAeH6AK6OORXuiOIfBabpdJDe14LP09ydGXiF9BRVgV90y8e7c70%2BBNglBuYtHsZp6x0jhhAg0jVO%2FTD6eZRP66RFyGhz%2F83QDLxq2s2v6vZUdTXBrpxqhUD2Rs3advifWUlgyGZtqRaWYmdFE2dfqn0m0OLsyvUQdxW%2Fk95urW7sQ8yahcnFAuU5R%2BXXWDEG%2Fr67SPeiuJHtj%2FV1UgQuRGvmvupO&X-Amz-Signature=0249f1b537523c887c70a8ca43d4fee80d23a663e28fab7a331412beee13762f&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
