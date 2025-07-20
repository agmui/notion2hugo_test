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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5T3OAHD%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T081128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnFsFIO7qbWSqq0rd9NQq3jg%2BvQhyqrN7z6NOgtHCfzwIgXuIeX8Qnkka4Jmt%2FnnGwTqlXTAnDjUvMCYjb0tzEoZYqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGlZPGokBBeXoVcFcCrcA3ad2n5JZW7PKhtxD4ppLQ1aSSFAPjgW6%2FSZx%2B3rrZ988fHHwTMu3Q%2FNxUWsaX3kEp5cycI1GLyoOMTlZdbVyPPNblCmqsU5%2F80zbOo5kKe2F1CFOVkHLVChF3ZK3yM2pLeqi8Z8j%2BQ31FS6rfbnczuGGEiwGmXsO0vqW%2Fw2BupDo9VzwEsDie0vPERAXmwvCxaXczW5bt%2FSol7efZaL1si3dAFGvnqv8FPECu7eLCcw68ZLw7xiQPsVBCx0PLnrZLhvGFMxtzJwOzVLoWZhiC4O2yFGcylb3tAo9IDkLBbA38WBzTZdNu7%2BfA3B9RrcmIBOXNSWT1hYz49kRc%2BYJunwNKCfu4Zovw4Qdgi29oMgWP5wNxFWPZW8XH5uzluexFkyhyEv3%2BQb5Mm1ZHf390SBjrf49Fsc4BNzC8vJ8EnERPfrrsdADX5cOODF5z7RSpttr6WCUJZgzFFccSAaHbbc4UVyNB%2FSsP3AIyu%2BhZqGL70yRodEA%2BH8fdoJUN9fiwSF%2BaJOch7ZDMjn6ErXXm1kmk20u5yjM06h%2FpLXh9PVhE%2FvnCi%2FjM%2B0d5cgTh9hJ6sIEq2uV9sUKR9xT0nL5LGOjIK68zo1IMtT3tqKXdwaz6aJ2x9hw3NwY4r2MJrA8sMGOqUBdCeHl8gQakG5GSLdC8UjOJzbbkbyhqF2CRMZp44Bwnyb%2FQHPby1D1BeVJnTNOb0RuODKNKf5qZguUulY0RaoRg5LomobXJiO8bJ2fkjJo3Qro9TALwhl2Y%2BJB3agjMtXAaBR9o3Ke6yt%2Bvj8SL4r0vAy2KXT7cxawg59onfGHGEX10PTqpRja5BvhhWUDg8ACZDNCAwCx5o6jNecRKJwXoKjAQmV&X-Amz-Signature=8497d4e2ee182fdd4e8c4322b855c38a5cb31bcd9c1665a3b7db41a80d84d806&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
