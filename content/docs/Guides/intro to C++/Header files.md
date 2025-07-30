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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656DSSR7Z%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T151000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKBnS5rDDfJIZcKmF98Q6m8J7nnWIKIp0qBmM8Z3uCFgIhAJ%2FIi66w%2Ft1qmmKLbwWvbVdFko0TMyhuXYocQzLoPlnCKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzyCpid70Br36rBT8Uq3AMUXUttrI4j2JzV4%2FcVb9Ca4OIR0Rp48emY%2Fn5wf4Ral2dQW4dnmZeMixZJf%2BrUur9pYpgQV0LWEjjr6khjwGx1YHFO4JwjyLeGDxpvLnbnpLsVh6u5DnQk5KNLqPEXqyoB9fdRERlicvlB9NhWJJTiIuYT6M6jbpp%2B3IwTl4pyAqCgIpwu6fEGmVgJ74S5cPHba1%2FxHGyW3vnAba%2FK8YIqQWIN2u4OIe8eHt8npb7PDP%2B6tiBe6y2yMT21XjMyI%2FVP%2Byk0tD8QwelMyN7uQfEOjA%2FseROVrZamssFqwfhe1tpui8MWskjeuKj1OFBOkkzcLQB6UJKTuvOvwgB0rcjHpa3qwyhPtPnGvTyeLf9NhJHdcyK%2FKM9tDRTeLpOU13ZuEoSVlAZLbeoALUn7%2B%2F1gFEloDYrh0hrNN3thhOdMNR2D%2Fn%2Flywenetr2Jiz3HW%2BcYunfiLZIING5bvf7Ad2dfXpw0nSH44NR34DIhzI0UTXDoFOsOy64YK3Qsaw3J%2FiJG9iEtqkxYTAXVBtnKM2ZIz6fCcCri2oPHLZXz6%2FtLuGlnHlOIqQfxPmbHnU%2FccdZ%2FlJ4oB5wkE5mqiIzTcVYir9YfinYqcj4Dk6KviXmyG6rukpBhEa22SEnAjD5oqjEBjqkAVQ36JQR%2B72NQtvL8X92qPjwITlrSNyr77NfHwNxuRPf2Rbe8oLCAe%2BVsdcQtcEfsdRMU5RTofuXEIq2lHECuaPGR6vHPTtnZ26qsWr31%2FJdHzexvuqNJ2%2FanmBKZIVM5ZeSMb74053wqNgBAq4drjawFa%2F%2F%2BFxw5mBj9GbZoG9xaOPOYvOrM4LoLzb3QqpnHQ0NdTOBXGfdcplobaicKMJ4YxBV&X-Amz-Signature=af7b50ceac38c81dc4e3f24152fc5a53c7ff48239f0cbfc94257ed03465092cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
