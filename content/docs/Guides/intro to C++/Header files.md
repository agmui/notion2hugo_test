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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKMPWZV5%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T035917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCd2Ti0IQ8ia3gx28JzgEdE3BTPdGzMoQLEczsmEuyy6QIgZ%2BaXpINxlE4U919Pl7AA02BxDiZYKG%2FK1kOYNPTYq94qiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFC0xpVCdtbljaQ%2BUyrcAzs0%2FsrrH25z9XHbBzJ1Z1p5keau75RgYHKuoQity1Tz9yyUXAbJY9FTp9JKNrr8WKo24kmEPTwK9%2F0uBvfDB3tOVMD%2BBrl8Z0Zrblg6gg3i1Andcj8RNHjV4Y%2FapduaLvnqW555FWRC%2FNcvDK0LUYpdyt9tkl2jQ8Ol7vGN8hfQ0Z96fRozlFmaFzLz5HPRmhc5sbfJPJeNrJW5admx4Za%2BfAbSHAatjp3w2aEvI5Tnhxdm1c%2Fh%2FtVvCS6FCM07YYzx3nvUdFdi%2Bj%2F9h7kXYKBJyZeidzEoNpJT99zIV4c9TM36LSRIb7v9I4ptKfT7QQ%2FNvemqnp7XvVrrKCNUVtYMhzHqc4KizxTCyB7Rh6GwNsNKkAe54tWfNbBlLLyCASb3nNfF0KbYmt3s40O0YcGIsBeAKJul68URD%2FCimRoikN3UrwKTwzpWkOzl45ktdUnH5x7fjEM6GC0ZHzr%2FnZoqWbYNLqvvRuH5L2LT2PsAfHvoQVEMxHsbPHeefTR7D4wGNsv97TxrpsDhocb2WvKGn%2B4eal6myyXjBShcFKOHLWlQ9JKWt0aAE%2BNefnxfPvkTjMD%2BjYsI54WkolC2s9hWKoXo1Po2lfXbuTk6Aus7TdTHdrvfNkHtzp6dMOid5cQGOqUBGfQxxGtDrqvj%2BcSmimrQPP18I%2BWYDgOaKxk1e1ICjp0qCX8fYzhGuRCw8713RfUr4sv%2BSK%2FGmcyr0RE7B0CxsZlMMZ042IhuBFAhfcJGqIQJ9fZbbQ0XCSHW%2BonjvU15bzpqUxsUtCJ7NqZma9NJGX0lOs3nUQDxAZAdA5441Hvui28YVhzCtrUK2aIqMynk0e%2FoAkzeUQxWQ3%2BPmLaTglbQLXlf&X-Amz-Signature=923b02ae0aad25e2baedcde5ae3aef2195b26c86be0853049ea664a5b34edc56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
