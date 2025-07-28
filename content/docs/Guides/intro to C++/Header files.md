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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXTUFTWC%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T040324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIHhPS%2BUduuwWfk4bg9vn01Nqs6WXJMExGqY3XJ52I47TAiEAwTVynlkrRhsJIHA%2Fe3kFY659JPspRhLRxSQARShH3lYqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLrhymkB1T0agKdcIyrcA4iLt6qFLyKqpwYoWaiAkQb3FfUBQCzBJtJtlbvgsHTyeILuhpSU%2Fa4JeTi%2F4Ua5%2FArTD6PawFpKY0sU%2FcwzHfuZV1OoU1hO3tyiMYBh9hzfpj8nROFBaB%2FZR0ibZFAf5kgAHhRBuB2dO3Ts0ViIrbriW9AXrsGQ12shKEwNaMnukpORlqPzdWfrw8A3hdzTVNVqdgPwQ0vt1XeIyr5VPeUUJ0UrcewVTTX7QX%2BKr6TkuvPDcPsO4uSiPgiMWhZEssAae267rb%2FL2q%2B0oT1sHizVkpMH8cTXCfWzI%2FtOIBZ7HNiRMSnQI0wTeFgJf9RMmiiIDn3dgDnwD05j5aB7bXYnBEdOObZqSebx5wFEajP2R7N%2FjWB4VpDd3BddVyv4XV3VajB677G7zX7of5YrA3z1ksrss70itMQaL6EOfS4jiXBlfunRlBKDSBrwXef9psicgzzc5bwLNkU8yiLMUahT3lg4WQt4wT09fCZ0%2FwcSlImlFQY%2BKw7z%2BRUfBQ1XFnF4IfYqKOzNhZPHIwK8OBKYz92YkzjyNibxhfX6TpBXQ1fg08WFnvCxagv6bR95Q3xQRilUvJu5ch6OYalDvZsRLk4tLiYXSqmsOsJAIkR8D1EZ78%2FrppVaCxZMMMmTm8QGOqUBmbcpC4z1nx4vpXRZW3II0RLKDuiV8KzwzexCSJoiG2WrpGEW0iq%2FuNIkiydRVc41QZLw%2FULKK7CodD6dIa%2B7DxUzoNY8yysopvcxp1JATRBPpDsj38V%2FRgb2DvAVF2FfKoaS5Jvcr5H%2F8xIO%2FbWcYr2OQWGxa69m8GVVLAeqGr1ilevCzyk3%2FbfhBUHgnrITzHuUZo%2FFwfnHTfa%2BCdpay4Z5qx0A&X-Amz-Signature=d9d9507e555e1067c1fcd29b37ff4b3d212fa18b21249ad9867634b887b1bd5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
