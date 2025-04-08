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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZSAST42%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T132033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHA6tD9poeA%2FGH7krVzABtGSsAlmhBfvOessHhmvdaG8AiByi3Z3LJ577qHKK0UN3RkK%2BS4H3esxtzVyJ7%2FMOgUVRir%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMQi1ehsX5DLXEdEAcKtwDwy1kmApgiuJM%2Fswg8TkPZObkvZZ4LXzRlgF2NrXzwTOHC1v6sEMEmixK%2B1N%2F4uxPeHalSW6cO9YxntCyGlV8VEYyy5EqyEKUIXHiH1VORldzZf4AAhNt8eWCcgN2inxb6nOoeb3z7OzMSIHzjA8u3sVYKD%2FN9pz0JpFTRa4mh3vjtyTDIxlCY9mDSMqeYc9tUxoCSMteG64JrCk%2Fog5zLvm%2Bi%2FIBEdd%2BKuy%2Fe5BTso%2Fk6uDVrE6N69NOFCIPW3wlsVvpUQ%2FZ9kjo2C5ZunsEarvpJLR%2B9nFLXNgr6gCxZLg7cHRUbOS1o3liJx80sTS9wBuXhn3sYq%2By2zAxJU34SeZim7muTYsHcaauLe9jAzpeQ91ZAVlvfK2JreAW5fgF1lt2ef8D7ITD%2BN8cvFggQgkiZosBV%2BBONgwRRT8O8Fb6SNDxatCZhIPJQK6ITpayNwtph9NOeF4D05ATDcAD10A6VU%2Bkx9dlbZ7RKbxOvcOfVeOjER90rY9H%2FAfWyqqwSOlepcysm5MyFvTDOxV54nMHnH3B4YkbRtxU3iZ1T%2Bl66JFUqUdZa11jSdgNFak3b7qCrwDJUwtVhBTojVNVyj0PyrBzxpnkflPSKcBrOn2ZSHxHkBx0opJQdW4wgr7UvwY6pgEEHpTyzEeOPGsZPGVT%2FHMh%2B%2FV98%2BV6l0VWToJkLTBnWq%2BZYdDmBabeVJ1D8jEywE7x0tdjVo2t%2Flc%2FtgQrwkkHiARCCZCEWWLRRgYswy0ESxdzfgZvSGqEPXJ4bvoBWmStFc4yfDag0O0Up3vRstWc%2BFu2ib42xVqKyDr1SJ2I%2BOvXgNSXw6I2k65TvkAMVKTe2mBlaTh%2B6WFntE9AVd0QalMAevWk&X-Amz-Signature=99716b2d1252e01b3ac9dcb11691884d576979c428b7b3fe3ed991260175b9a6&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
