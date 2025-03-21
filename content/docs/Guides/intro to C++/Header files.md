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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AXZPBFX%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T021736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCIG%2FtrAjC0%2BF5uxiYjyt2ff3EXGAeU61615mVHw0Tz7SDAiAicN1DokudyjQV%2Boau1XdZwJbeaxJRRCLthl7tmAoriyqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlDEbSbFQg2IGRYpiKtwDW4XTMQBKOL1lg4TG%2BnZqo3BZgYM8KZOmXHtNj%2FbqE4vYA8%2BKJ4sSemtcA38VnTtbGBw8Knbc1vMH4eLPphOckIGnLtbId8x0%2F9%2Fq7vt%2FGyEjSXxVfQ67cMeT4oyGi2TeFZzipxncjLRv4s0yvswdR4Vi48CKoYe2eDURPE5WQhnwIZJPHs50WUWOX0YmnJ6jEbupd%2FRnLs1dYe9hDAlh4r0%2FOES1Dql9jxbenX0BQXnpBdvBY9yOfg5nPcrUa8IaCaTI%2BBIbE2muz8fR%2FRlmSxbHXquLkEoSumOxgIE00OhKwshwIzPVraspr9fXg6hr4rbRl6lU%2BsYPTR3TrrvBdKzWKQm%2BSR9%2BiC7nRbQdgFrB85RxfARWzgdMxZFXnFXMXfeWFqQhcHmIpCVY7eDZADEUaE5dRS1AlVLD0S6VnstqUvoSzK9K2enpYgeppMkZdcIIgyfpgcD3TxaXm3pHTD1BPN%2FjzvdOnQJEnwkbsiorw%2B7ZVtqSgvfvIZ70ymapiYI9zpHvQUQ8TeeeZGfhajB%2FSaGZ2Ran%2Brc3Wb2ELjbLRKnHwn5orcxYVT4g0%2F%2BsVPJu7N3YutOxvEhfPcHMT4yJ5XkUijkB0GJdhxLKc%2BhbAQKuaeM058t%2FmIkwr%2FjyvgY6pgErDRk%2BWB02LLMMN%2F9F8TgK45jlNSdWK6iiCnKMbksyXsHbh39%2FGkwJk9R960LFK%2BH2BybOXiRMcoShKVKWwdmPt1nX98o%2FcolfFirhsHc4mXKw7SB%2B0d%2B1NHMv9vVQ9YZhm%2FgIX2WRYmiWMJZF5YrsIc4Fvwdzm9UUeHx%2FP7%2B4EA9rLhcqiTIkzA1%2FuPhRobNHOaq8wzjyGZ38WBNELV2UqKlZP4rp&X-Amz-Signature=ad5c933ea675084d5038b7dc72656e034cf9e67a3bef85ef5089c4fc832905e2&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
