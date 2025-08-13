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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WR33AJQB%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T042009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDon1ZWWUlay0OVxY9zPwAyT00GgNJyytNsvNxbU8c2xwIgWN9Nhn5v9HaZXNshQzPGOCnWa6i2ClzAyMMtO5Q7Mn4q%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDAoIe9XZaC%2FsfRKNQCrcAxK81MkMCcqclj2kg0O0TRre%2B66cF2smX2pFQs9BWCN1zXgUpgt3n74bYz4j5w9eKBT5o5W3KYaUcQKB2sBx5U8dZRwZ4HbiPUeYZ96NxBPpXXpzEnAJPrBOnJV5w57kMCZSzGQln%2Fp4yOf%2FkgmiIt0gCPBRboETIhrKGnAN9tMiVNGCZCHnNvuWe9cyfZG3f44RJMZvYyfVBY3bRL7BsyV1QEtI73RvbiFyGK%2B8Sr0BMlK%2BXdlv%2FWgrMsquj2YCzsZw9NGQNxhKl7s1m2G%2BHbYjQ5VDPSD%2F%2BcTxqLiuX19KFBU7iz91Xhmm9lVkYTzih1%2Be%2FjdobsDX0qMuy8%2Btcgy7tk8jGGnzvu%2BMesCfOUIM5Ye%2BXuRWBrtgJ3gPjV6cVlAGx4TmIUNAZ6oDi7jhm2HcwYvK1OJfxN%2BOTapSDxNeAtq4FsGuaA%2FiHCnZzopgJDIvpX8DNg3U%2BPowG6SjWHcuFgksKFIvSmYhW97KEiaKp0Pcn3RrfXr8rO6KY8%2B7r2836JeFp10Y55VwRGAxI3C5TFSHew%2ByMbf6w%2BiQgU8MXJf8eLT0ypNynXv%2FhEYrVViDm1pKbOxCKx4Tui9gJ%2FtfzK%2F3lTOLVdsPwyso7pInMOy27FxH35sdhVYqMP%2BG8MQGOqUBCQpsZT1LEOI%2FmaPQ6Dd432cwYI9jK1Wh9aWJLp8XuS5s1iWk8OYnYGVt8CCx6L5g7EvBMneUBOvqcGsfOC5rbg%2FuWZfPzVqA0uIscxcCh%2BmVoy9jh22jAv1dWNWWguKkJor41ncZCSSmjUvTxrnPVlWg30J3ftDB7eSyehVpGmgm6J1jmHPZWZRCVPPNS6st0bLugwzkrhWDoPoUOBnTZId32Ih8&X-Amz-Signature=29deeaed41a2493960284acd4ab160f47f0b70345a77b4d5b9ff6ee6dcfba5ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
