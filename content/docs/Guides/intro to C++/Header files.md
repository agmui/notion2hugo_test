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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7DJ44B7%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T121320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIEX4dl%2BcEe4mQ7qphR89KAP17oheW5v8khkabWcL5AyTAiEAtTMlzCixGVgGForhhPM%2BmEM4ri0rLLkHcjd2pJsb0MEqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEzjY678%2Fb69nL46lCrcA8eqQayVTGB1ZrTtk92JdwFCZDLXp0jaINv6foLy1PDZRIluppIRsi98Lex368g1xWS7h3UzHS13Jeg9XKNDLrUiPf4VawEVXtOuKmiX3ZlC2Umj9WIJ2hoDV9K8ZJuHvs%2FSiWQwz8RGWdFDbtk%2Fux9srHsWkkm3UeTHucT1urQnFqD3VJqaukACqfkBgcN7zYJS5SJsSm4nfFEEi5%2BVyxvFMK0KqJzEqQ1Uc3uMsi2pcGmphQafRcnYt1WOCZ8tTwNtM1rLiewrx2DSS70xrYf8YusGDhoUSp9FiavLAmtqQiPXpQmNArtGlaA3Joo1CI%2BrMMwXDl2CoHPkaZ8js8AoXwCJ2G710RVcuqkMcBHQUhXkaJ3cmtuv0IYobwzNuDZcuOjCraK%2Bx0MiIMYL%2Fxe5hc43tS1SM5SZYiH9pPtH0c57hQZybPz%2BfdQwhAPnmadcZ6sB0SezhicRlcfeFYdg2v4AAWWMTeXNc0GTEcLVw5hn2hWFIyGLL02r9vqamkliXVhN0JpW8%2BE1B37hcsoSQ%2B%2FIMEkiaxFjrZenAWNSSPJXnG75awlHJJhiiaeWvdGLpOq9x7yclCKgIi1Um%2BnG43Klh3rm18pe6OKf89uhqFV0MuG%2FD0XOu1IkMKW97r8GOqUBPcyqyviazubfU3JiBSi7gS9qo8gPXwjRn9zupZUHw5ycffUrRY7DPFvuS%2Fu4n4035%2B00%2FlGg1AYL0CjhurB7NhJMQJvUhmLurAY32PDqpMpBl8%2BEyZ%2FfY1uxUmpI2WZV6o1Iaf1DqSpl6uOz%2B6WohyYW7WHXnhqtnAFCc0cKSeLfnGzzrpYJJSTSPQvq49AyzB5uG%2B6kZgE95zyl4ysh9cGYDauJ&X-Amz-Signature=3ec7e88f21013cdd4766814b7dfd29c7d146161cdc552e413683a9ad60dd7fef&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
