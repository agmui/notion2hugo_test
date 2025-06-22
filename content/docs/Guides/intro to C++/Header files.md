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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VEPUEEW%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T140705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIHpgtzTiwT42jsJqdliKnWYHFUfTgY%2BGnf3qhnsyqnm7AiEA5MquC9LEVO0jjnaKhUKD2hsWTVnb1RAcv4Ii5QQNFYsqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDODhKJH8x8%2BhZjD4xyrcA5xKuRXxdfrGkpllZ%2FaaMtbxpyUlUQ2knYe4dr1t9Rxk973XOZAskiBdg%2BTtq4ZVnMLIMWSnxkJCfbZsy5HjXguLeMjbf%2FczA50DtOVgXfpg7XlJFDlIF8KLkCeQk9C5%2F%2B1tJk2NfvQQmNg1vNMsqR0t1aQvud1J33vjE3Fx6x3HAkdhIR%2BPd3%2BEBfKikKnqR6nRDXc2VAVo5sG5jNRFiUYYDMyMIaz%2BzAJ29Uh2kCStL0Ra1oBtV5F9VuayHVvSuLzq2L3KF1kWqtJ7bzBP55axEqXwBbGywpsXEiaeTqx7MnGFJU%2FYIPj6HRgorVySxMs2lj0kx%2FwfBsmZOqmorGOE9fEWngi5w3k%2FBkcLVVYEHQuEmFsNzvh7qldwUbP5X9Fs2eyaxenndY7e3xR7qTdake37KQLx9BxqDNzHhmW2bLgxi98lKPCNz3go1ZJv3Ou2Y3l7CeIXeb9hLT%2FieCq2fvQMZY11Gz%2FrLB4JiRVBulc3PHqbHp43XTua2L4oMRv1Z7%2B1Z%2BUJRpGwx8qsdewXuJboM9%2FJRk1fJn5GiFbu5wbf44sRsI3DhNguOPL1PkNkB24cXKr%2Fu%2BBHJwtIvKZeGPt%2Fxuo8T%2Fsk1OPtVvqXhERH2DXeE20QA3DFMOTO38IGOqUBj8hk8WQMJ1ATxkHoVTVuPnwyyH3OUZDkG0u8Lmwy8n%2B20Orej%2B29NJC9hw9qbwIzhrazUQFJpIJQjVv1IKSfqswcbJbrsvS4DRU7c5XOR%2FNooD%2FoUD%2BS1ORuLuMWfk2tH5Sd2XjHeqiQA3%2BUYSpznKLgkRtxeLK3Br6GOjRebji71vrUjyaTvsGzu92oLex5g6L09hkLQKF%2FNWDsLFpZUJh4qvfL&X-Amz-Signature=d8bed7e94a14284108825a7de34c7ea1f2dc4c2556c175e52ae736db541090ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
