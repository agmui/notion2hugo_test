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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQWZSHFY%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T150817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFmEtaAwhmweFXh4mOpr%2B%2Bu5VswslvFNYF1c1wj9JWeEAiBydIAYU7dg5nMxjymWJyn9FYL6UsMK4D7Q%2FaZwphEYtSqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxbFrfjvp%2B5fL6PpGKtwDhahfCFa02dcEEvKFpYBRQ6NlkplG3%2B1c5dwdoQYQm%2B%2BZSQCQa2GvEW%2BLOQigZJC5vJAxTfYhdizuOGfs%2B84beNyv6Qt%2FsCcF8%2Be9rzlTk6%2FLAH5W7rF6iKAa2LhmLjQo8P95guDnQ1VnOa7SxbsdhA1wvJVltFjBP5LXYUiitn6hF9VjVJwvMSjhrvwpKR2TN8IJyBYDsRR5XAVNFAk6tImIQiJkbyTIPayKL2wuODlIQLI6e8bNY6QRuINXIVJu78FkmTRuqk4MzHA2flC0m1KFLJ5vFkYfZ69yNh7%2FniMJPDPvfUwa4I7UUg586vPBIx2Pdw4ZHsrNbAEFiQscRa8PJuQ6L6arbGHhT7BU%2Fwcs5ez4S8KerY22jwuYsE7Hxo00Bh6dbfsGKFLDSsRFZf%2BnkR%2BWAuMHJQwTasm1XxE8rt2maXE7WEr5qgrP%2B6LAPW%2B%2BskZzlld%2B03dRaXEnq%2BCfwgMqeCRjVRT1R2dVtNOTs4lOfq7912MaYR%2FFKxG%2B1L%2FSTU%2FX1LkQ8Yh8dg7B7EgO%2BXvPjYsjT2u5X1QSwebr2WSKPya8wg12SLHm40%2BheuhqSSe8ZzO6RiurZuV3O9DcTVY2q9O%2B%2FAA2oRNWOZhpBqCBt%2BWg3I0sWYEwktTzwwY6pgHiZZiA%2F0nuGKXleK2A8cO8I7ldgcBGBR1l73J34QvOE8gjl8nNMOKmmZY5EpW6tjMgZ5jhCV1Ieyuyi8rtwbknhsIj018M3t9qTHCYFKk5hWH4pJEHaprzNAtARM3RVlH4wR9TXLg2dJibPLv6ZOqof4eDEgswTe%2FM%2BHAQQsk1zg76sGFAy9ozhOLejHZ972rZ2GEVd1yMsIfv90RV3iJca8MAzFE3&X-Amz-Signature=422233c97d8634cf13c63fe260c590f1244ba0d628399d3ec2dc3fc053ab260e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
