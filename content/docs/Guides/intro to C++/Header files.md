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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WKGD2AR%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T110311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGKvIbEwotR%2F2cI5onvhOKmwaYlck1Z08X72huOBPuOAAiBmZOKBsLdNwS9kJzJCM%2FyA%2Fs64CNZpRR2yKGfEeDYnByqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQGFJVl9%2F7LhnJVZGKtwDWG9VL%2Bc6Df9%2F1tX8ZtIxSrHB1c7mOVgRxh71jMgh0tPuZHFI9LE7x6yNcV9dhRMUmC2d0tvvGKPkt9B%2BJuR7gp1eC6aevImC4IYtXzZV75N5ayZXLcmQNHn6LrH8HS9QkTi1lQ1Rgf4hxY0SnTXXelv1stdNvbyKmyC1h%2B6d4ikmjDZ7bnS%2Fox4JqWFP1478TRyup9m0vQGKRpKKjW9a83AFgiKKDybqFEutJkMmYcYgGRbLwf49sYnivaKGxFa%2BZ%2BpKV7KQwEzzl7omsx%2BBsskR6iQ2yuloy1VrcjYDll1izkLcnXEmBtGFYd9g4ADJqsCii3qtCHO2BQpfK9uNGxvHgHrAASabhJlohcJ989yColLvRD%2F5pdTJu%2FCA2p%2FCzCo2lQ33YDienR1nYVRUNl4fBszKUwuOLnm8ppW%2FZme29KBh5Gy6RtkhpjYzzinn%2BIqiBbt4m0XzPDk4sYlHSE7glnp%2B7luudtDJwDlyj7Ir1AyTIge69TSwQflw3SEJFCfFFEmzUMFYiZ585x9%2FGmXJFJolZv3aL6gE6VOfnj0yjPl%2BUoaXLH%2BLk9g0YyrsMnG%2FtCojrgE6WO9PPQur6A6XnQ3JAYGJ7jeTylM0G59NX%2BwjBrY2T58zKbowpITrwQY6pgHItI57bzaVjVcakerPO%2FkmoxDgdBEUiZzeC9NL3JV6dPzC9H8C%2Bx%2B6yi8JwySyMBO9i4pP%2BQyWLIjRA493V86fh3NnhjNwjDZfisne1lOYIw6Lq7b6%2FaTu1rsaG3i%2FDCYJlgkcwqsI%2F0ma5tViKAGfIH5tIBGorkOGKDXXSob5BODfyj1k%2BtOqcS4YqRRwTCJoxM1KU7FFLdO%2Bt0sBm9tHjMYiRMOi&X-Amz-Signature=eaf699e3f44c4e4ce1e74107db7dcf9e7441a1d59a3f184590ca9cd30b6e1134&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
