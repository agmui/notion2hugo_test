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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667N3M4WSQ%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T050836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIClSHze1ZzqFuELFjoSVv%2FMydqMAjvdHfxvPdm7xQq%2F2AiEAx%2BVPlSl3jTy0YA9TFwry4IQ5z2GnOnU5OqDyGQxcdrYqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOx%2BCVeXnbY6GiyWHSrcA7dvDRxVUq%2FD%2BNPr7D1NBeRLP%2FhMVA4mWb5WW2aMTphZ7h8uR48otQMQyyYMnFf8eHgp8ov2bJOtZN48Kt%2FJ47AhUGbe9phhY4K9mROUFscI5FFUDpy4k5RvRhNP7KRH%2FUKy7sFPL8SNQaJzkb7%2FVDMgaCN7ygP5hcDT6jSEC2ZX8oUww0plG89YiIM7kYTTnq1%2FCHjYILTnmkHgDW%2BHXUU6DkpHRj4fW4ZttKT4Eqj7CNX8nUaaE3Us0N7ev8HC9Np5n0%2BPx4xM8Q%2BTT%2F7XtaAMsTHzGds0HR6vGSlj%2F%2F3FT%2FTLv21nTUuWg4qFeFvf19z92THECx0JBNjHpdKpbxAuJde%2BCWgWYVfhPlK6AfjWTnZ5SDAzrAKMu0YCGT%2FEuOseJg041YPsiYps8UlEZFSa2tEssQC21fT4b0YvMR9j9fdef0rF3sPMcVac%2BiKswQ4eWImT7Zxlh1cZZjIRS4H6e8z7AubF4A2RCQFWii1nyPTG%2FC24HCI5RFpKE75xZP3SWgZ9whNhpXmWsNI%2BA1NvvhS0smitGd6AhGmetAspH8W5U%2BseLqzmWlbGKKixX8uqfqBtcsnb1TITRe9rofeqcd0xXhnbxju%2BzHMUgo6MPQCz1YBuabzcuxNQMLzwvr4GOqUBlcnP0ab%2BqP%2Bhl64CAcsA6EvgSe%2F7p8h3a3AD4k%2BuuqzKDbizp%2FsWjrY9gVGcicocegie3FaxkCu9Qt9texlZT1NLOh4to5XDB3zwtaYEkcbd25%2B79gHpMBtPObWD%2FpKB001XKabkvABgLEoZAjjyEtMTIwZ86NYod1r11dFQtMbeISOHHDtOOhGa29j169Y8r%2BWF%2BP91BPAJh%2F4FqfUvN9tDiLan&X-Amz-Signature=e716b2bd730b7a03e103c6030cf4286475520b97949ddda4da672054374d5158&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
