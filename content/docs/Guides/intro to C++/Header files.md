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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3ABENS4%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T170919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCRcJRZMDk6hqhaseyxh2A19xqb38I0hWRm0vnttLeQlgIhAJd64PIoXO7ZJgpvhqZfTG71aA4fNfwb%2BBPpRQwFSDV0Kv8DCGEQABoMNjM3NDIzMTgzODA1Igypaa1wgefXNHTVZPUq3APrr74RN4WjaRaMHvs9tWdKXt7uLZS58ac9%2F%2FrGFTcuOzwHA4aBj%2FKRQ4OowzS59VQbylP%2FGrOffVEQDb%2BQlfivjg6gQHLk%2FlwD2XllQClkOcsxsQmPbn8gRAysuFhO3lI3bgIezhyOzFdE%2BPw685ZhOjMzvkPnXUFXTHh3uFPOzllStpIl6e3McLJM%2Ffqx3rNrhj1MZZSR52YP87%2FTF4yI6q501C43O1u%2F6YwTj8TkSmd1tz7D%2FpJ38C%2B7kX5NnZBzs3y61CVaAkxuAERLkEfIsck5lsMasfwB%2B6xynmng93BfkhPvzcAbrdm5J3La%2F%2FpCIHEhUyLI%2FnoE8PIETWzeVYuylYyZundl7CW%2F8o%2F3CA4Q2XtRLsS63UPNNXCM06x0MVErGmWqhcsgAeclD6%2F8jj9EdSbVYIn8VVVDElsbqg02Wn0CsgnfyW5dhldorfVeFxrVbgiWZ%2F3hKBSy2BC5%2F9onpmTXa4pCGrkbbhHMzcPUBKxLYIhqS4M3g1AlkvvzwG6Lg8z2omivRUdS1KaZip8pKTdYijB1aHO8v8nmkg1e2T0Vvf0gfToPjLzs991iA7CrbIDfyEWA5fgrN4tPmSvIqFdtvsHfZHqsl%2BPqo%2BHLswo512wDNz6KaDDezMjEBjqkASX1A7itQxDBS8d9qQxwc4c66njsf5MSIP2WujAcJu8RLbzQhcgLOiPeBOMMKFDyXvVrlBhQSRgZbSlUotQBd7HyNq7b2MdGjpq6whBT%2FH%2BwhEfZ7Dj5RODUfG%2BdFdrQ1h0aAYcG8NnbzvryUk9FDd7WHRNG1EHgJoU9vJLelcAmERYedci1r927%2FVKvVei3PKo2BJvrHPk35bfNWMUfhXcFJIvE&X-Amz-Signature=850d5b1239d5a4d517197747b35a9b9520ff43c4aadcc385c3203d876fbca8fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
