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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SX2P73V%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T091231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIH7Jre9FBEd3pq64P1C5hHXB9F4Dx7ott51WuVnvfbv0AiEAyr9ueY5WIrm7qWiOvwiknmOT6WrMhzyci0SrCY4IozIqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPZQWgRtIsoICQL0xCrcA1nci7Qxtwd0kKxUTvwAXnSPKuCFVimR9qghA90Xvr3SjeuFHLQnIzrCtpQn10f63j0hgi4cHut53Hk2iAw99D%2Bbja9RhO1ZMqKSmruPPN%2BFlcYaR0h0TKkypyRPAhV6CFy1TnIw%2FEFHOozr5BN3sRKbEE75jskpgPeOYFyWM%2BywxgTIeYfsfSjheR5ZG2SbwJ%2FVraCXSHf1MZL9YKysnthe2eF%2FpSTXt%2FKsQldOejlIGpnyVliXVWNwYpCszen2BI1tycRLUFtkLZM9Co%2FaUSpThMrBXySKV%2F5sh1V9hV4EuK4QXghJYaokvVWOAujTdSS%2Fd4vxu11K6o%2FBepi0ORSsu%2BL2mYAZj3xg0xyg0gwacvlfvNE4T%2FfQ%2FhhrJWt9YeaED44RKOarHnLPLn0ZibCZv42twUALq5bDpnQCBj%2FAOnfAYR32zK0nf5I2Kezho%2FTasD99WTU8P64Oh2uXbfnz4oCayFNdQgLPdPWYdHXcsC%2Bq9m8OikMOvkEfv4DDEEKz%2Ft6X9SyQ5pE0lbyzvcHYKJvajnxrCJR7uFrDDAJ2X2t%2BS0P9zuaQH04xxGrRf5aTRxFKLceejndL%2BJwhcYJlIKRUS5v6LdlDwJguGRTAOIsfEXq9C5fkx5HyMMjJ48IGOqUBvB8Xfw3GAnhnyvb1SGKziSwHjv76Tf%2FxXELFVrRUWKThM9gxOT%2Btah54PzSw2%2BRh5QXk4INl1bQ8YrI6%2BLtONPlrsKs1%2BTFtKbef7qOvplw5udXz%2FDQ8qOrd2VHp8ESxvJ%2BxbdIDNrHF1K7G87XURUNU2hirmMZjvbEhVtmll%2FquxDC5Hea%2BEY09L0mZ%2FjnhjwnROj%2F72Mg%2FCM6HOlTI%2Fjb1F0ze&X-Amz-Signature=2ecfab198cfb539c94a379163bc9c2f2bba7a9073e48bddb2831dca0750f5889&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
