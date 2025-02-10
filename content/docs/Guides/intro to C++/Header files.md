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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UEIFAHT%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T140738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICCkmkPLnY%2FmPJkJUseMZ7%2BsAr01Gip0WCwX2YaPxBGyAiA8E7Jc1H7%2B%2BVnR8ZEX4Gb6s1TgdWKXwdOGPX0d%2BxvKYyqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWlbsnqPCaSjmg5YgKtwDcwutbQ3%2FmldBKk7Ct2DVu7%2FyHePgCjqPq7IZ2tKJ%2Bol9uGlRy2vPJPTzZdJEvpb9OkxShMZRXBLQyjz4j8U9Cf%2BU9HfUzVgd63wQqpnLN%2Bz5x%2BH7kVS1FQw%2BrJ0hQjr3%2BLZiinTwPUje0PrM1Ri5N%2B0QVKT60v0oexLJqP5lHh41ngYKdhqAx%2BvWOpXqyLzcEfptYh1bpyZLWiQdxS0CythuwswzNo4OHsRe7bZs1hb%2BF0ay0T5BhDPlY6U1kLia80ufIEqkg26trERuCij2sl%2Fdh25ubWNAr%2FaQ4hOvBMTYh75CrU%2BXau1kJ0RLukxoWs4SXjI9sA3JS%2F6TKramK0zmjU0Baplcpsa2yTEqSgGesztCsS95vo0SDeYKkOAMmNle6i12wYKWjDvWfmZuh9%2BzI4dbNIiTavuAywzJmsGCuzEVo5E%2FCyHnPav2Opjdl1cKy1%2BRh6cFtB87NDhFpWM1eLRiZEbZWwRJTPtCslNbdtRf%2FAOkzIOiTFMpeYomX4BUXDdMJML2SKSJPRFvGY3VMoDdauN0aaJHW6aW4THaNsWvhkVSIl5GKin8aRV7Sm%2Blj%2FQir9hBO8E0s2nsNFkYl1dKk%2FwkhuhZpuPVpnZwyBE4oAvNxyJeAKgwoYOovQY6pgFCSY5U4%2BZBtaDXFtBQMmoI0BeTqdQuR866m0ToVufTGiNOTQI2hU8Xt%2F%2FIGgrDn64dNDkYyi%2FWJN6d7Th69dn%2BCTLEg3XVvPFLc%2BW8gK1rKhe%2FZ2mdhwtGFsAYC3agAZaxY05ih3GcqoG4Tn8%2FuFJ5nQISgocNzNKaUqtDq4Sm%2Bntbr%2BC9X25X%2Fkp%2FZ4mt3xeJFX88m5LmzvKRNYqnyJFF0HmLYJVT&X-Amz-Signature=6320106258750d7c9b1091ec8295fda91b571b5f115a3bf3e45542452b084efe&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
