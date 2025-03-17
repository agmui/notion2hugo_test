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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Q55RWNG%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T041044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBs2VU3raeTqKm7in2PbVgbIY4KvTqBqY6oKt3iw%2BAkhAiEAxQuaWReQf3Yt1aheYpdgNqoBkWYKHZoAOYse7cvj960q%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDBLHZZROeTyp1MTrpyrcA5ol8m5P4s%2BhwOPr1pnEa0kpYgWMaJBzpJvYHaHSPh86w5CyBC8WG%2Fi6jh4EcDe4kFMDVPcU8iYYG6o%2FuwPmylmuvPyZZRNOnPRM6IUaAksZ5sL4RdqimbogokiBPWt4oTzPWn5bp7bulFgHSRONgm3EvQw5vx5sJDjauXi%2FuSvhw%2FZT6nj1mq4wRgQ9GvF9Yz%2Fd%2BbfyRsWGkjUALvj3FfvZjboJWNFfl0n4ZJ2g%2BBetMBC4qRF2jqav5IbppnALOMcXHu0FGyxAIvKLnPnMlpa1UXX2Si1feYCTfC5ARt1uKafEZA7J8QrDc3d0XiDUaMAAnTPOs2kVT6HDEGh%2Bj84AnrszSCPLdv8dhYdRsROH81uiafD4zphUIZBewy4IMzXewPsT8KE2OMaTjgrbntc%2FbF9LIk77z040N%2B%2FoF24qHGr5nDP%2FLbIhDElZSscvSVJP%2FxG%2FRXaiD6EAjkaawvJ3uZd9%2Bh4WbWWRC6EHd3GUrsHzQ72Gq04r9TyERY0uBgyLNZ%2F8T7Tde0W1FsqZNxsOQ5gjCvrCfrWg%2BMmfMsJ4JVJk53YkGz2dgbTBpoeHz%2BnYWHmpzMCdstcbbWbKECug4Cls%2BtQ9wIMTrFi0YgpgR1jj69%2BDnnlscTIgMIi83r4GOqUBtEI2UJ6LbEOVQ6FzBJnx77w2xYRuCjDqq9Pxwz4S7jID7tNIrP9KcobaZa3NWk%2F2ABCjB5bFKluZt2BK48y9mSqjTnb%2B20OZdtILQVciQd7ETulIOzFZqpDU1rARVKRuHjUOhqIaKkKltwbaANcePhwDtxfxqykp0%2FgcJ5j%2FeX%2FFIC0Rcj2ME15t7A47YJakLv5sZrmXFfi7O2b9tyJV3jCP0D67&X-Amz-Signature=eaf7976f0b9ee647f6cf433ee1256694cf2a37ff15784e6dbbc2698e3d2bd9c6&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
