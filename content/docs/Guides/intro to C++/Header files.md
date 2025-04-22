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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676NUI3LY%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T161018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIBBNCW%2BVx9LCfGY3BFvOeIFs%2FwNcKbXEWXnhyhiwORs9AiEAkdfFFb%2BggthjZ7jLPsJkZGhjcSe88XfIiK18DFLcE2MqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHQ0zCeBKkvc9jBOJSrcA%2BYIuFrG08g%2FEamWklAAtE0oAUjkVDrhPplkkAons4Rxc4pscM5h2ANhoowL4jWXlT6HHPfOHlD0XqRuNRpSiXfwvv3Ie2IPyk2oHJBXKDu0qP4N2uArke0S48x7nukk0WkYc8orUuph%2BoQVQ5poHrxPmvzQD4WP%2FpXTVp8%2FWnpiKKyDC0vS2eXg4Yw60B%2FYVuOdvgSqOuiuCiYoxb3mYszcRKqCCBSsR1Ujz8w6VS5ck5fY3wmMfahkrLrqJlu%2FTHqoEjpD5dqWG1HEpQC13Myx4YSoZWvafKZK%2BT7CM7g892O%2Bmr7oE0f9sEYQ0EQ2%2Fwx2cyVplyXLHOGJULNRGi4R3AeelGSr%2BtxTWjn1dyo4JFVK4hYfXK5pbbApLvnWh3LDUqFp96atuWWzVoXVUBsWVprJeV%2BaJK6GYA6F2fYWUnsb3sYOA3vocVw%2BVJ%2FnPPzphbsnjkbTAvvIO8PG8CoSs8PEhsCfbBUY5jJPpoBIOFYx2btn%2BcP7CCpO6A6Qf2wP4XhpiGkDbbZ6ia1WUicFww0OC45pbc7ni%2BW%2FyVWQW7O1bVGM8Ktx%2FW%2B1tjz7DycMusOcMXaTQmR20WXCEMSavdbhTwD%2BYERZ2R%2Fqq9A0p6vni6nKzR1RcWwBMOXgnsAGOqUBcVbBwkQoiWj3ob1hHY72wihEHWg4YphOv%2BecDPL5T73DWiUCg7U%2FSZScKAZ0WIrs1LkbsmqLOVVcZIr2w2uGpo%2FsRo37DU73dG%2BwkWM%2FknQJZQYcCYVOGkfQQ8wjl6jJeiuhZkBB21FvUqWQUEa1yhRS7th6xjX0ItHZqohd4PFyS02F7EFpeXQfRpT7oGBDiUsglMiz5tpshgNvlht2QwvL%2FOGX&X-Amz-Signature=6eceede28fea25684ca119f4027ef4f5305e2b6476a0500594f9d1c32ce391a4&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
