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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZI74TDU4%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T025907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbK5dGNPkJYKtlVIB5f%2FkbMeSWL8fjgu4X26y1unk8ugIhAOvsAnP2wC7ryi5kmj0j33faIjXpPhyLwUu4x5b%2BVm64KogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwSXWf6YC8pLLQ3Wgkq3APr63VqnNbWw1VanJQbabKeFL7odA8AVsr0mKVFcudJemcQ4zX6lLguBARgStP5%2FHWkGdA%2B%2FRtLymCkbMIP%2Fj%2F9kPs3%2FF56avkfaPXCjYKHJcOnrfcKASe8BiTxHcQ2kAgKoOqOLIqWZrNN0qtd8ong5fwjUb2%2F2uZ0E3vMJbvUeGzZbaLu0IhQSgev978NOKoRU1a%2FnaEHYg15bMd8Gv8TtHUoojUef1tPgBpsiXNpzMyPiS8kWM%2F2JMKEgDkykrVNZPOlmWOwUb5WFodMrMyS2EQs7AGlUW4CrvMhM9B2mfXWazLV3mO74GN3HnSVQqXSOFftfXRKl5iuxk56miUnprlbJwNk6ECETFJSJE4%2FCZG3s9OguDNi6sTgiOerfVkB93mx%2BS6d9yxTZtSWbr7gEM9zqnJAwM7BgKHm3xGnkFMhqUslG99lqB%2FJek3q8MBOb2fxVcSwW1F4QE3Rbiie3%2FxllL%2BSUvcsb3Z82f%2BmgAzHmO8gCgAYt7XiaJtCcuAYEKTz1MNTVauGAoSCEr5JXZyVM%2BV5UdEO1kHdT0UcSK73oPzQ4VW8sxqFTRuNEt2J%2B6RBgapBlYeXtg1tOomDAfSHpmeViY40NoDWx6otB97IkTbJQD64UbokGjC9l%2FHDBjqkAUSRuCUp%2Frhl1ZULVaV%2Fo3vc7jbyJcjYDJO46cebILV9J2xuGsTu%2BkBdZTJNZStjS%2BTUHuvrayyKKN%2Fb9QQzdNYc7aSId1uqdQVC7SMvyWwg0sXAEU3UIyPPIAgC%2BAsBYKl3nzk%2B9jWlppn3E16Jm7qzV44yJECBWcWWZtnxEAGVnMn0eXt0Sm3Dogi%2F4ZX0dccgP7S0gSyp4t0U9EPuIHWbKpDK&X-Amz-Signature=9ddf0c1c333a00a7dadef44b871fbb2e524b74ed354920cf53d3bf9e8cf16e66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
