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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667C2WI6BP%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T121649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDway8Tf%2B0JNiRTum1ddFuTcbOcAmhH9tck2CYJ%2BIy55QIhAO%2BQLS5xv26O3NXqPwsS43wVYf3ezJMQKxUhQhZTI8vGKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx5W%2Bh8Wzn%2Fblwtq2Yq3APwCb8iWAPJbUnD%2F%2FF%2F6dZNeWUDaCqapytQqKtcydgqqJBxTDc3M5K45R3J4py%2Bnaz8qq6AXX8AIF%2FHm8m84EX82g%2FWl7obe0AqZD61wu%2FUkFYgiKSlwI1VlprO4L6CiCTz%2BZTC0IxUIBxLCYZ9UjMDyYXJx%2BZ4MQT4Hi7oXBlM0mR8laK9Fgt%2FW9to9q9AwUDtRSOmhrYIGBraNV0fiCdtQleceqW5P9QHa%2BSgo676mt%2FjBgx35PP8roYYIb1QdqIvlvDeMeCPfIehQCA02Q%2F4Tu%2FFHvckG4qOwgvIp0QpT5%2FI7MWcRGZzEMPsCqx%2FgnGGyyGA6bMVhh756VaE8%2B3JC9nRm7XUHGuIz5AyYzIprFoxZ%2FZVztJ9CR3uoPvH%2FtNu9ly0OwZtneW1zMrm80w32rQzdT3kbDjYVgVepbvG5qVaMLkSRPyLgdzCzfCtH%2BtfycHV26%2FMgFwJELV3Q0%2FyRwEv2VZMNxm0JFqYBlmbUAL34TDptNLHVZB0d%2Bbx5%2F8WvvHnXs6FoZfk8Hhzi1dG7y6M1875URUG1tfjsCSI2e9LOsie7C4q4Sn0tb7BnQRPBMxIKT9P7N0H5ILy4tRugSechqngvKo%2FYuszxodRP0c0772zEiwdBf6oQTCi%2FbPDBjqkAX5%2BDKBU09qzOqgxv2SRv%2F3ANyhiMmVhYQtxEX5Zqle5x61HrWjR9FN43NgUgtx3u1ewlUFBWh8cMMPkyXvxioPc%2BunVKs0BMYDHZa9P%2F0Qe5lG37%2BXhiz15b3LqizGln3eeRm34Uvfxt8mlWXJfjNCRrvpJ7McRzPHSJ%2FYTbyTrp5ZsFP7nVd%2F1xK%2B5gubzPRq8VpLqvcpljcrIxptPnTVDL%2FNI&X-Amz-Signature=6ffd4c5a4dba8cbd2849948bf54323e9c809a7a1df62d8aa05de46059f64add6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
