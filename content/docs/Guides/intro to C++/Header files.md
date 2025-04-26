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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SD4V6U6%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T200808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFzMQb0UB7i1rLAgmqjysDBe5b598OZnH3sVd649iILiAiEAhiuxo3J%2FFOYSRlBc5DD8fMqVhjN9lH6kCR%2F3%2B0Cyj3kq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDPaTEETbBi5kO2f57CrcA4NYxW5xVEVaInQ9HcLjsQW9Mm3%2Fj42QEfurLl0AZzLTD7CcroyIrnSj6KAlQ7DimE6L%2B2IiFxdyo0vON0SLiFvLgZ6A1NGEH2FjlS20yUUZfsJuTJFc1x5SiuVeAOUyMGHQAOgiWTToWkMXz0wUsjCmEt3AoxY9XcJPYVs1HzoWq4oAQpkcv8NoMgSBI8G7MNZMmW5GEeuPBN7UGo3wu9LhQLJGji7XLuZZiId3lVPAjk9Bir2iCIC9UEhp0XhYnCy%2FADRv1uH2CMGFj2Izyl6cg5y9F%2BbWV1aiDenZhTrqgWBxTyqO%2FGioVPyiuV%2FDF4PleB29n4hTfvIXO%2BV75t6jVintplbOAjIpub%2BKiO8jBeQBKPs1wufj7LvFB28W7GPaeqj7fuUJfdrYpOCWmDKSlKf9EvUtkYaCXwDcs5h5ihMaWMp%2BZ9vQReSO6mmc8zXS7LM8XzGNLh7ZPT9aK0e8AkU77HZ1Bt%2BcmXAp7Z12OwWo%2BWtaNDakeaWAqkVxiE5VbXWv02%2BE8ph8Z5AZV%2BHI3wcbwRUxjukBLNSy6FpxfS8xAgOJIpq6qJNn5yI8VTCEeO34H9vgSO8p9B46b%2F9MYJ%2FqYsk8wP1VymlhPFt2edj%2B%2BYQoYd%2BG7FPSMNTdtMAGOqUBETEJcxLuYflYj9G2CxHReSlCt3kC57HQMKVzWrSe2cTWUfNak7YMn3rQtla0qA0f70nvg17%2BmKOwxVhOVXTvWkp6I0jqdIyVQCxoVbbqWeWLI%2BiLW7ns7Fjmv8ATVc8%2BblmAckegBsieqiw8hT%2B05d%2Fmw0kI00xjwrbIQwVPl4wXf%2B2%2Bto1MT2cclmFkjpRB0cRXb6rwmv1POVPzKYEQz8XrB2Ax&X-Amz-Signature=e00fe6e4b0e8d77f9d70188bbeaec4d2d9c09011314dd44586e63d76fd43a311&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
