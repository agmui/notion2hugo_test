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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UA5EEXCO%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T004238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGyAJTycTLyldq9u0LIKraVFuMu1gwfnCHXzPduQumPVAiAJ07o2Ubi6I%2B6uSiM64U2%2FQAOt1bZ1CDmEb48VOhOYjir%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMTuiEUANbHS1acqTpKtwD2w9zI5RLU%2BSavi5h%2F92nL50zNE05x1srovZ77FQI58ZQdiE37%2FKEz7uF6Eyn%2Bt7k8TmY6daS9qlqUT4qOvPt4Z8S0ShDGtgv5kTv1lCN0jJSZpnXMt9GTF0mNz63%2Fvrb7aQFsdOGEvkP76BQRif43iusfMVoTpzOLlqQtCxVOzIZZIA6xDkps1mHwKhSgx8piP15RzuX4mZ52fBI5sCSnWlVtd5m6NAweqna0EabMixeRech2KiSFNppVlORWWZlFyOhrf93LE5Qtp1LqLwRx%2F26bYRpRUX1b7proQzxX7N0rHc7efcHz4xcdDrRD4w%2FCzGALE7pp90pI0OBm%2BQ88y8wcyT0rRPM%2BcKRASSP09564M9pDckRnHZBg50Aasr9nW2PpyVGH0OfspYYoX%2BbC50oLWEj3TZ1L3iMwwlF9dYB7Yr3VQ6ldJBCGFWfYJ5ZIAT6CxJIGhgz7Bkn17JUFosIJzzKEzNJZa3V0i0JF33ZdyO7Hi30Kmo3Pc9N5pJuZBmERQG5a%2BmU4T%2FlftYFLs%2BWsi%2BTJ6TjWbXJy4bEW%2Fm5Xs9ogiCBWbrM9zI4exEAvubpI7y0FW37Yqj%2F5TVTJ6ljrCBeUI5OEofDHuPXxA0pQH3vg3fIkgJxzFowpN7CwgY6pgF2hABbwuyblMbLmK9YkIQmfxjSnEWvWfQ6Z3yQIwOOuvORBs5Q9YMKLN0zhoDlKR2pAKec9yNFouQftN3fXdjYIg%2BnRnKKKHOs4%2FJBdXiEAZUFnSOcy7LsA1fRoeRjAxAn%2FngmsGik8dsZhL%2FkHwLa%2Fyo5yAmj8obMTl2G6jOtvDX0ROtGjXDK8azdEINIKweYWtMVIVLo8zY6EZc3aYvwPVkiqtUz&X-Amz-Signature=8d0cb57be30b12c985d5195b007d327e89c924010b5f088b326843cb872be246&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
