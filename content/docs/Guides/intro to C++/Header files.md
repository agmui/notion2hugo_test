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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNFIIXXD%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T201007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFps81a9hZ8PJC4Qq0ub%2BOqS6d6QmV9DlfNh1Fh8b50%2BAiB9T7eKEtcRkrEf8nst5FEmHQT35%2B67co99g8d0lAclniqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfsY9vHuN0XCR5BJ%2BKtwDqYLpIrktQNn6159N9ZM21BhGMLYrFxtjG48pqpH2sMx8qXHFuwke5ypn5osoGAl0LcRZcTFzmIn%2BItCKPQXuD82183aR86%2Fqz04YDs92MytAnhe%2FGHaLho1PkS%2F6OxSl%2Bd%2FdhjGJrAgDmWGV1wuPgcPcWP1QiHSOISIM03zzEzAXmajkfvaHu%2FQPVL%2Fnpu3LdKVXby4WsWAe40Vjus1JKRB1yZc8rsnnQHE%2F9lISzb6rxVAcW6rhA3q0Ga0yJhRMmUQUut0VZ31KCIvUIxeBqUZ%2B%2BZT3Ci4s%2BY8TeWyPyN1k%2Fzh%2BZ5okC7X47vUhDVq%2BSxKgMmAiTX2n2rm6pFADreoFsvqFceIeZe6xzrclsU0id3KKwBlNxVjHsoSxrCPW77xfBULWo4YR6kv%2FiecFlUEyhMdNwbhnsTecZ%2FPIjNPBkkdgd8EpCqxlJ1S0E9EX684I8hPjZzsu562O3lntAdRLxEN4a5PrPvfbwxu1%2FfUeNYfRtUir%2Fm0309Jtir8WLwbOOx%2F0lImCdYzsOqixzViZsLAX%2FWd7GtckKB62EM3t7ahIU4Aw9VI9muBwH%2BhHtUkuT2Rl5u84UPAtlJeQdH54P4GwmE3Z2htTikGtxFE5iuDjhMgF2YCJKPwwktbFwwY6pgGxS7fPHltEZHAnPazZu6WBML9YG10g958Eu0S48YMar6a7a37tmecUnhnWONqKFsdnFZke0XbWGohTwMDwqUeHv2k%2FoSe69r22bZs7S4VNb%2Bn%2BVKj0n4m5XqTvV2FJFBGyae6JdgENIQRuzyWWE6HqS6ap5z9mwiGOI%2Fqtds1RVPx%2BFFlelESxiQeJrBo5D2DyDoxwn0NhVvaSoGf3PdOGNuS3Ry0p&X-Amz-Signature=7bb770d27ab6b4dc401df3410002fe24fe36cfc8f7c7f978787cf28e851de040&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
