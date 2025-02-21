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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Y5XALVR%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T110157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHXCZABp73Tvei1k1qpeCTQBhn29vDm9Qc69EB7ihv5dAiB5HeaCJvtpKlx1TeDy0f52gBvtA1wrQ%2B7YsGkUPZw6iyqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzRyjUMQmJaOVxYbTKtwD%2FIKrPSLI0Jn0kH%2BO1yinGAgdaUse4Dd3aXDSi5d4%2BEeDb4PSabUbR8dsBqJQDNcgUJnSBKHk9lBVidwqAUJaN%2FiQoF62WBzKrsk3zVLlEJ3x6BECzlc93l6ivt5zIJ%2F2gTXnw9jGJdwogJffu4OvUJfrhMBqgs40z3nUb9wrs5Fl7RiR%2FHGTIMpceF0vh%2FcvXeZw0sq228lD0tiOo2T6czWewzhxRsNjtppSimyWaUvPRzde0mC%2BXyRiLfUIrga2Gq%2BebBIhiAK731dQoNc36jc%2ByMnYE3W9xC3hmOuLEnQumgGq9nqVhqKJ1Er0Xbj6aAup7Kus5MsM7KAcsYWMelW6lSvcGGHjqkY52drbNckB6sHqhFdIZUeEbRgSMlGHEDH2GqC6cOi047LyAUP5o2JH%2FenR2j7JM%2BvAhqmgFtL5BVL2iHb16SeTYyETYSmTGoHNOwq0%2BoRmDCHKQ39O61l1%2Bj5jrYIUuGjM0L9reIwUkn5v5x3gq%2BVg%2F0n51%2ByU4l2pQGFC%2BV9UPgdkcppPx0mdcxQGD%2Fd67Rl9CCmWFR4MegRcYNhD00DjWZivNUPLjD5wtUMpXqdX0ETQ4T9K2BqWTZCjVYgsmQypiS%2BPJ3MscjU%2Biyv6frD3%2Fgcwu5nhvQY6pgEik1%2F%2Bdoev0RiivaSBGNtnLDzI47m%2FfcdaRP3Y66ZqSIgPLxTAUWr5B9bnYDrc8OO74hhzKuuweYx%2BJowASx4r%2BUl3EuPBWYLPBd70S37HH04BN9wuXMIa6XiRG0IWkn%2BHByrDrqOmSZQklOraqJvBcaEbhkZXyU3XzTJyiVVla1hlV7jIQrRYyQ5wSyOECmqj3GNuyLX26manca0ffMyPWZku2d7l&X-Amz-Signature=da3f896c3431dc2851f944faafb09dd2dfa5600920720bce92fb7949534c1fe6&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
