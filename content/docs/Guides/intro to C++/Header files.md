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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQT3E2QD%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T140708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQCPo8qUmb9z2lzxQK4t2iyyIESVbDvKKh4VUuMTXPSyKwIgesj%2FbEm0%2FE%2FASll1wW8ad64R1FGWi2mI8gdLkOoy2LAq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDFYSUPXxcP9K5JsTxyrcA87c6hKyqCxAggqrn%2BG4FcEJNnue3X4tOIzQiK0fHEJKcKh0rAtfKw5UH7ohDDjjkPSijLaT%2BExJoX2%2Bi40WkbiWOKkYOsIeDPydDV1b8zgrneba6ERMaERQPv5%2BpJMt5rzcchxJKxfsBUEWNrwDQc8EbbuHKZqVGEExuJcUk0KbbNtVpT1g%2FbmQHO9LimJyfMWOyFKvVDf54Uolc4Hxtbrcr0q8HpS9v4yzVQZhFQVjJHJDHkWzkDO4Iy479ygkV14NZqKPfGwogpNQeQJm%2F5ESv5xXq1iIo7l%2F9Yf9xr0pZBnwuP%2B81RmLEe%2BtUNFVzYa8DCvzBhtV4%2F7s4qHXkuCou2j180NHt9fzDE4zt%2FB8KX29feqa2C69W6UmLUdF8wFvwp3eAa6B1gvL4n%2BHRVBUtQlwiRyH1JFH6GuTkI4h72X%2FThRfgWVAx06hQdlRn5qyEDhy6IIpjEI9BnVwUp0eQtYlezq1a%2B2ebSt%2Bk90nc38q9WmcD9qg84XBXJ0k67fthsleok8AhCYcJ6wpXBiYZKsYvvbzxg7d%2F1lMUNYDfnH1oN7RWzaaBH3S9PIBtoa6xfdHWLsqaVZk%2BDqSbkWPIABMG0b1Ba6mbP0eQoho8%2BzPYEaF0%2F6GN6GlMPPDqcMGOqUB5OKmjHZ%2FTqDlTDJLCaxO%2FCvzzonOSFxpgiCtb6kaOUhEEdF5dcB1e6IPMbs6t8zIcShgPNxn22%2BPyCfwvDLwOV3S208etF9UtAJ00G7Heyc%2Flid0dNcZIquNloaG4IDWfJei5U617qPZ%2FyoqZo1pbw41YIBWRkO%2B1XxIk6I7gPMGkVrE8nEUkOTpARlDRUfOeLa%2B9CjwLaWoERNXP6sM9dQVCrJh&X-Amz-Signature=883887495f2ec13a399c03114efb4b0b8c8323f9ec324e9a18973970a6d765eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
