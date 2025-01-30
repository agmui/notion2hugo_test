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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KU36DZF%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T003436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHjxcUkY7rIei3gMF%2BcAXAF%2BPQiolKy%2FNK3cVo8swsovAiEA91ebQhJPL%2B194vvsOfItnmbexc%2BUokyXw52BR60HolMqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM3mxVAKOGLdTp2isCrcA0sUZLaheUV%2F8DNAH0jQG7GwkN6bGguGytixludhZz6ORbwdfhlIzQGck5mqBDaVN2LlG5e4vpFpw6LOKCUtK6TMy%2FzDupofyXnkBHJUjLWZ7zb7FD0fUto%2FoU4FulHkwiZnk2U%2F3Qu25jCkUolOuKvInP3ku6jIdOq0%2BBLXDD%2FHfbiaulz%2BsqHBB1rhecrH6nu7PELwr1%2B0aq8rXmcji0AeivLGebaj7G8kHOXaGX%2B2BnVp%2F5eZk7eJq0AbZDtm%2Bj9WXTGTcC1ADgwqmUlmHXpy0ZZl3M6wOMKj4E76LDUnr1zEbo55DBXxu8RJUvjXro3u2wE19s9SL7ibLlV%2FCeFRmjGZU%2BTpPeDjoYoPSVgpHMkwLezm%2BuTptG4g%2BqDRkczCPyQdIwvj368EqfrFbxfXB%2BOWZXgoL0HVd649z%2FE%2BFAzWE4m7%2BC8G5wiYVlCLjDp0aHtsd%2B0mxsHaus68U2BrsRdOQNp8gcirNldrB4UJQaeLADxGaOe%2BUhKHwa4EflWmusAqXN5hsnX%2Fqu2y41XEx0Gd%2FrH5cB13vZ9X5MhrRWARdgUIB9GlB78BPw%2BfiZXa3Y6ZgODwU9r0Sk8Q50Io1cdcUH8gBLU6S5mfbQ%2FHEFNbRB4ZI9BEcwZnMMvF6rwGOqUBG6WdVSDc0ozaOwZw735j28ByRxMnucHAsQM8qM1LzOPq3LGGWA7TdGfrKA59LBA5RYmIj5%2FlDrZQVIOSR6%2BlccR0K0%2F3KCQu1Dr2U%2F%2BSCFePLMMawbKlCX8na0vV9SJVkz0Eive7RK%2BOxR1cVKS2RQM54F3yTyRKP6M%2FA5Jf5LV%2FcYFNwgetVpV5YEt%2BDWqxZTEFHhVd9IGqkczClcTmmb25tWFI&X-Amz-Signature=ac56e1b2a1840c78cb6365575bcad25a0797683503682c0620a7d4027f792b8f&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
