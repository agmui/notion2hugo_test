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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QM5PH64%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T080939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQDoB5su8OXJ%2B84dwUcZkYtVpmBPI3xwyrplvwPD7gmlYQIhAMMg%2FGmPjtqRbF8Fv4pbiPwQuos4Nc%2FTnj%2F8FI3ghKAwKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyHcBtutvvzQ7TNRdIq3APKpdwsHmPGlYouH57UwG2ZJBroE3lyTK8M6WUCP9j1ccpa7lOileufx8z1kliLvBjAHlf2en9g27H%2BA9Mds6o2lDoIhfT6Ixdx97hP5qunMZUq89Fu981tK75jwwhAZOEHcX8%2BgTU29gB7lnO%2Bb5WD%2ByBZ3saDxOFYUhwBtKONkgKfSPewnew6AANUKWYmnNd2sruRr9FBoFQungUK21ecEU0v7Xz1FARUR%2FrAfL4m8Hc2czkM8lLzEKgKPMSeFV6jIb5ZFgsxwqCsvwbt9wdXuFc4IbXVikXNmdroUCbyiGAV51R70jdYEuTC1U2zcgH0NkZ%2FapL4w9e1ttHwwit%2B%2FAVDMUwxlHoa0YT8G5gi0ts90Ya0TdI6JqOXH3CWYqM81NegTjjZJaCkpgYQ57ZWe1rA2UzGyuiZmGM%2BDy3QMqiDEUWmb%2FCVGtxkQdT5cvTatgl34Qp2OlEGl7AuN%2FHkLg%2FjblxQnGzjc%2FowvCeh%2FSHQQ0jWrLyuqlHlasWZ3GExA0iHp2CTjLjDNApEEXKSBjiK3pcXEZQ%2FGBjGfW5q%2FjU2M0ODQbz59WfBzHaJ4pcPPAW8yphGBQBkKA7DcfEcO3S5Novh%2B%2BjWZ3%2BwWX9hv18xAPRlbm7oflBLzTD%2Bo5LABjqkAYdR9oMQ4TDp7KJFE0nACVR4x2slEPaHeUuqy2gl0BqpTXX5iBJBQ5JMqGA21pDV3nlHfAcxVzXHnx2rcHx0x2d69TQBTXKH7XxgRNAN2ASfCPq9rDtlUeKZmxcKZQ27STkIDia9jWSXPcEzBV0MyOZ7p7fNr0v%2FBdK5bCN%2FsufEDz3E3BdR2y49z746oVXWwNGONYUWJy93TZpqRJpdVDy9a3MQ&X-Amz-Signature=2a96152478ea5ae198d57d891e0bca6ce9d21aff75fd8a0f564d1ad1be6fdb16&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
