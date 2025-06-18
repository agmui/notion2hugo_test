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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CICUWYX%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T091027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCdzpf6R6OQGw1VW2mopOXz0xxJ16nrTXMtOlGt0voEDQIhANp5Y2iOPjJVNxbYyXa%2FR4U3YKgynrxeyvJm8nuMHa71KogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyNPgp8ACrv1AkZfTcq3APkZ8u%2BrlZwAtLg1i9xSBrTfYaZr1dPZj5%2B9rIDzr788i5OeWVsPCMWO%2B1PTFrugZtDajSDGvmXoxXT5GdLY9EGffpC%2FmGYPnV72gwjOmuMZAjUOTuL7TC%2BZ4LSnY1s9TnoyKzwMVSUR9U522yYiMx%2FO%2BZkdX7C2HpK47b5TihD08pLvqj81%2Bj%2F3uvXxpBWTNOHBj%2F7Le7ZjEp7nf5BES0zIA3acguiLeZwS6fq0csGFLtP6vpHsQhyNU6G7pXkjOEEzfVXqCmpeYWSE1JhlR%2BmZDUw%2FB4k%2Fr56y0EvD0BZG5GoJYMKKaSwCHksc5i16rViQ06wSVO1HOdYsxTvm45eDmIGkSWqQjPBQ7ssSEXdv%2F8F9B%2F%2FxVtTJkDerwrFeWGKM8lsU91sTBmUfRNGYvz5oAmcWxYDxY%2BfLgwcMwgrI%2FedfD0p%2B1r1oJ6UQqYOAWhcOwxh59QV%2FnSnyUfxadKJzhC8CcfCvTbPiZ2xWdH5aQWHdcS3cf%2B4ePukoQ6em%2BvfuIliBDAIl0XAz3kQ%2B6DFHenwBcK8wBrTZIg7Yn%2BdWkjjECB2QdFxhFZbwb1GbjE3A0skwzSyEiZIc2VGj529n6lbYn6P9xl87bAir6LCEqinPbFa9A4xfJ000TD31cnCBjqkATAw5qUOBXSvdYuZHTuRhcOhUuoL%2FpaXQCho%2BcTKWFf2cNR5LZf%2BeZhvlDIxOCF9HxRgyX6kngGnEomZLwrMs7vJrQzhAnF0bKc5kAs6je3C2t%2FFEOisffWorONne3YhpTtym6gmz078%2FdfIfzac7lI3uv9f6PMaFOvTpQUIqtkUyK19L9Fqr8hTQOoBeaANitN%2Fu0asvXyzmaj5UiXMjWjYb9xm&X-Amz-Signature=f528bddb71ab9bc1670d5b6ba79ee18695d715d7705187f6fba833905998f6d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
