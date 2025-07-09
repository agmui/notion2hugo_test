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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYKDNPU6%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T171054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDX1JIVo6%2FWgO1g1NOo8K%2BfVkJ%2F0aj%2BXhlX5Tb92nKvKAIgSjdQ56njsQNIxQWr1Kqa7bHWSU5FgkAy5%2FZ5VNanRWAqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJf%2FVMkpH4Jf%2B9z6qircA2vNTZPSqAz2hxiMKLWfol%2B4AG%2BUSwl7TEAhtUu%2FwhzN3BG6D%2FYC2lLzGO7XRiiDmb3plog71QZGOXDp%2FTq7Y0ob%2B6RuzDuArhGcqBYc3zsGBTYqqU7TiqLrY%2BjQ9HsbJY0MObmPzvyGInd93lK615D8q5WVKDLq0bF5t3qI%2Bha50CgIR2ylfcEO3AT4lVk9CQMObTx1goci2qTJvTxz2kY8Ubhw%2BsEvTeSii5pFdwqnzGrmbbNz3cFjk17hPQxVgx6UK%2FUj%2FgEHSoR71OUIO6ApbWOFlurDKr5McskmZX9z7v2xWQu0TgF115YQacnJxeApTkQU4KrmT3gZYXk0Ey5O0nCkvlrJ2QbSA4myQuUZH47mjxyrQtU9Hk%2BODH9HP8q7OEP3qC5LXyxLfoj7agkRZy%2BCjAxSEByoxie7H6K%2BSej%2BK0SNMMWqdtPq5WNgKtf6xBXl6aLiEn%2FOBki0ppHWUJAAFLW1facX6u%2FHn8JAwXkaXawt%2Fm1ZCR0tN3jxic2J2WedzK9cs2YscPXaAe3wyyBVwmP6zEhI9LStp%2FJqFxFuAmPxw%2F2jgwY0SvRFrekYqZXv1qUl0ztc%2B%2F7bIxHwu5rnNtBm19ZqXR35g5FZdh3s3VIePFYrkIHIMPKXusMGOqUBuLV974grisIKT3nQRJ78iY3ZYNf5B5kahfUKxsnE%2FAUvjjvpxPW1Kl1U9bHwNRGNYT%2FTGLpvCFyfDymYYJb%2BCYL5b%2BsPN%2Fma4tbHQnue2BInOTZlS8fL%2FMPRVNRKYEK8pixRE4TwZurUtPoe63iimM9ukgS68j49qnLPkJi0i05UZtgx%2Fj1Io%2FlKJgBAoqUY8dy4HHFNB6LiRfeN6X3wW%2BYb7s1d&X-Amz-Signature=5a324afd92bb7b70a22e7687db420e3ea695a9cc1ea04885eaf2b94bfe60762c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
