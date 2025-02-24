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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPRDELCJ%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T170715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFbb4DGs4r0g7PnkqBkORL%2FyEJuiTJgVuwYSI1XTD0rMAiBl4GgALfKET3Ft28%2BDXY2xI1f7qC12NT6VUtVQPuHoDyr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMY8gvDHWN9sYngq4sKtwDfOXU%2BNgp9ZvcDcuyYt8UQ%2FKdjmHIs02nchzH6Ja3iMY7W%2BLJfIw5PdkS9LAfipcgdDXaLa1IFElCnfGImBON4Ku47dzbHH8LyDNZsqYmo3tFsrlKSUGlhFPTzFbN9RnRym6dgyRcyExztjej%2F%2FbbWfz0WzME%2BQ3lVhPeBktdw5lSjzpPuIp7QjKzMkrE%2FJ5ltyl%2BS8BIXaqGfmJdT6MeVjOrd3Ai8M1L0R5ghLRHrcPzKzDcvFvk5UZ4cwEsJy%2Ft%2FZ08uSjljTEDJTHARcIN9FCh736i%2F7Mr4hfbdqjfldhe4%2Fq%2FUDPH61fLuw%2FsMcyJ9%2FnGDjsuY5P1eZHJHedszKM4cXU0Xjmns%2FytVIHkkWAeaNP8PqkZu%2FNbs3TQuLqM05%2F3%2BofDQ2oMEkM7dMdmYOg780hDquGs1ZlaCr20tErTs7oM5VWqeTd%2FuMAK%2BlhXdEWVg6NICaILz6wPxSy1J9z45d7DLuEY6PjeqN%2Fu6FUWV3BWfadTRSyVsbkZt19irlZM12TwKd49FzV%2FE9%2FDMsXJmuD0e1BLCTuAP%2FbliUNB3lD3Wz1GAMxrFoWl5jz5yxdnYCCGhPF3xOCM1DeYVvj6OJ16%2F1%2Bp%2BqzBDoxExRtc3swWcKuCimGaYZ4whL7yvQY6pgEHzLYhUTG1DGPVCHE8OmwIFhdk9jyiNio2ahhk9so1thLnEE4aZj%2FB00a4rbOzRp4AWwFMSEAtGqnhNcdX7WmT9rLR20L%2FbUpIMVY6dq4%2FK%2FXfCAf%2FRW1CFiZ3%2FHNm9Cix9ExQ3zHFU8F%2BAeMbWrMJpA1PAWOudFzYxPaiw1jtCzf5Ptk12JwtuJa45em8i72fvMiTYhG3qyv%2F2W3FN%2BxJB1CYdb37&X-Amz-Signature=be432e0cb0eff2e9b224e86edb6c613ff3c7f263d173b119705975f125c9b889&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
