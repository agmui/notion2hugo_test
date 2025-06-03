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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667F24EDRI%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T091022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQDwzOcY2JwJ93hxQbAQaSoyNpMsP6VrLzd99jUP180GNwIhANdcyII4%2FUoP0xUmAmuIAzxcjHZ4RUux%2B%2FkCA%2Btj6EOYKv8DCBEQABoMNjM3NDIzMTgzODA1Igz%2B0Zx52lIqH7SG1lcq3APzDkiERWSnaJAPYYgtXsdl63gzgO35uJfAqthQHEiCg3518Cqn3%2Fg2aYVEqB%2FdKojLziuuJeKB7Ut5njOBVmEiYjgQCt7Iefc88MXp62Pz241k%2BvMtndzHyoc%2F0cKJLas%2FZEUMwzkkUWppVlc%2FrErvI%2F3%2FWyRBrKjWfBjRvlDEA3IFo4DVg%2FeTSds%2FJNk2czlBkJgNq0A9oqFo%2Fm2i%2BazFRgtsR6WMQDJ3X41wlYAZTJV7KwlBotYRThxFABVhpEi00MIbo%2BjeUwlUAz8CmIV%2FEyDvSbG97HGAOtQpq%2B3Y471lEsuqf7KJ0ua08ZeVqbAzDbbiiPJV5OkyJ%2Bged2H1bZoml3EmvkBsPjAvclbN3nSRFNTDGf74v3BpR0P2YJtBscS9TaZ4hKc%2BwYEpCxMVAbJTkkJdyHAMl31wByFxl7GSX0HeoT1btiUhiRS42NvcaFN%2FMAksP8H6bkQZCBT7U%2F1oBQJBlZDn7Ze4%2FgS9j6JmL%2BP10ptUXKx5aO2OplNjVRXJHBrRJI8IjgSa0focbTpknOlTkLDpI%2BT93Rky%2F3rWqPdCTV8eA80I35jLCWKv0nl39ElxQs%2B%2BeZWXp9uPEV6QZMLqO5Fzf%2F90yHYAzKQfm7D82ZeVr9s%2F0jC50vrBBjqkAfHst9LerCZaoGU35yDSEwIHh%2BZ%2F2WEDzAN0nAyghek6Rh9P0R4VpcFKf4D2Gj6JAN9tJXfOiuiUJkTInN1jcK5Dk%2BKzONJOI9w%2BRqYlmFd%2BthlcvF6aBKtZHMwf%2B9S96MtsEukaYbUFFtk%2Bgxwcx8JTRgaU%2Fl2XycNikQNYpoiLC9gbuQA%2Fkj%2F3wm9ald9qUAXBVrxbsNvus9Np5URHh0wSvVLZ&X-Amz-Signature=b8a37bd00b65eaac386f84c157c012dac5eddd4b21304179449eefbc2dd1b4e9&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
