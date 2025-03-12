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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXBZFJHU%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T141842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIE8AbLa9F5gTpg0ZmrTdMYdmK42G3%2Fd8RCeaWE7qB3JxAiEAitf1mVsKz3vQvnG3cfycu3NVl2yKPQe0%2F2EIion0mfoqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIA6wZBhV4bSmNOIEyrcA9dfi2J6AaTQySNRKXQuspt08YiKuPRrWOtClFhSPnFz%2B446nhgQwV%2BviRvQ99CeSuBJDsFlr7xyd0YIl8HwALDMzyvP10%2BvHT4afPdiG1UmAYTQ4oZxK%2FtCB7wxPzCLyt0yvVOAC1HRSms7okpWazVBVRgO5rhwtKaAkSS8wp2ym5vFlc%2ByiZAfyVs%2BZ9hXeRIBmnnUNQpy1bf72cZokvWJ47hwuXNGKEzaJYw5zt9Tm6Fk25F2SZqSAT66KP424ilIHhPY4lgcNKnwbh3KxrMvlg0wVN4cAVZ6c5868OkkL6NFAs3bEwvQRqdPkgp%2FQf1xU07G3bkTp2H%2BKMIoKurOKrBKETgXf7xK5OK%2Fama6aYMFDRIoplTZ%2BiYGQi5dOm6kU4o8qxjhpCJM0EvnvSAjtgiy7k3toqZsuuAWdRN6aqluH4WmJctc422hfTgs1BG9Zp92OQ%2F8vFY%2BKogTMh8nCopPX4ClTj97xb7keT23anW1O63ote5c3saLUfxI3%2BxfJMObF9eFPu7Q8%2BwUxQIAHWyrjZdE5WvpuZTFfT7yotnqbtzFZlbDmDFJIDh4c0TQQp%2BARhNRVe7bQ4y3CyCKs0J9bzILJ7GFDjruMBYsQ7%2FgiMOW%2BNcyfeWbMKSgxr4GOqUB0d1OgU5Np54b9GJgr1mY2rXdxShYXjZ7bBFyynmbHBE8cEBfP92CR49j0yZp8Qkd2cpDTvAD2KKLMR3I0cvNsV8QKahcb0OPgxOqEM44JJJpp3wkdnxhF1fOgrlJpoBzRSffzQOHFiIULTrFQE46Y1I%2F3tnLTEEQB6gvVZlsOvSOEzAecGbxD07qlkipUcKnfxoowHpuFbf%2B1S8JeNtjmQzEZ8Rc&X-Amz-Signature=8af3e37cf14b60fceb1a4f2e4042265b430a5aa7f8337f9a92a4bb985a049076&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
