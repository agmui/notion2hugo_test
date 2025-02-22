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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FCA2UEX%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T031027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFS88Lh4%2FpkNEO07N%2FD7fNSZyX0I%2BRQ45%2F8XkQQgnD4eAiB7Jy6gVjX0rkpFocDfHmCuaVAgvrlspZQLcZQ5J%2Bi7ISqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUzvmone1CzyUQTLLKtwDhqXoxgcLbjWcO3ifPQ8gqJgTfnFpikTTOkv%2BK3P1cRJc8CjzmSCWno%2BKLvoHLgZkAtcNWJjiPtZnAdKdJQEjHLhqxSa19OTbhcAlI24Qgzioy0WVqXJahLOn4KT2o%2F71rqErCQhzJRl9KGLkA0r%2BH%2FAn5UOY9ll2q%2BubfSPqCfttWer%2FodK%2FiX%2BQZmjLiuWpmpy2ebkRepg%2BxBQRt2TlXId2fodXyqXEeLwN5E8o6A1wbn58xXoQcIqHjLtAqYfmg%2Br1dQJ%2FZVn%2FnZ3fGxxZ8qcP5NGJzeg0%2B2djOmRayHJf6i%2FvEZkrqLNbuD7x0dmi00AtOvveCTt1XPclkC5G63SrcnXlMLG5UnMK6XHdugdP4vIBWlCvt6ummzYU9FmCjQ8LvqSnoNsAYiJN%2FMJ3DZPtaPVlOSpM0Qt1ehiTPUIdO0df%2Bx4pmg5Xknpf1uN48E%2Fh3EuWnsBz%2BCtP%2ByM0tBmhKu19P9KfKYXR4VMAYM0JQBoYmyTHAZfJJBA003UKQHwGmN2LXrIcQObqEX7sqjfzZFNmr3Co0WXZMMtOvPg6GXOnf05Ysb%2F6NPMlpNOHe91vUlY37mjsu3DIHt7paSJlcH03nkHDQVo9%2BREyKP6ErCYT3hL48e08anIwg%2BzkvQY6pgGIh8h%2B9HklZbQ2hg45H8k4Uy6gBFo%2BboU5rnTe0wk9L7knIjmm%2F9%2BWwzCNQKGUeX6zykakzAJpmaxLtDlQMerhj%2FJ67yNZACJ9UYLYQ7Db31HVJRCdIZs%2FOJn5KInX2OedJj0V2mGMxLeMeBl6DYp3gT5d57FM8tGPoRd1rmXdm8JaxBgwPgsNbyZ4G1JCc3qjvxxqYpm3v8UEtVno75Zo746QJiVN&X-Amz-Signature=f541ea5311176f7596d57b3573609b57549179ab51ac7dfd247ccaa266d00386&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
