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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466352RGTL6%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T090741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDbaJoz6SdcGuMqkjxd9xgMP1voa4k19087orwv0GZ3QIgRAm1cB35BhSQjhUywZqiBUw%2BjGUZObnnyhB3BgDhPs4qiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAkL%2FnbpoYyP7B1%2BdircA52x7F0PScsyEEapFeeO9UNxwem9b%2F%2F7cMn1gFiKYQzwqpO2fDlpEM0OUrpT7MmZjyFCEQqfUcoKfdcgfKiBFaGRGYwVl6UtvaTAFqLTERNS%2FQrz5FU9Q14%2F3W8z39rBRVM0FTRwUSOQ1cfTl8BfHpVylfxpWLNd4hwjIHavPW0Gmq7BOcHOL0vHsnfRI1UkUKQzLdHEPNGh2x8Y6PDnf7LeaJ%2BJXOUAwn70rKxXlBujA5F7F7xVaykKpxFIkoPGbVCb1CoC%2B6MLwXkasyW2EfMaGm%2F%2BotOJ7EsWqq17OoPYt3Yn4DJbOirmvwm4mijBMKgENCOO4iDMDO7sCrTQzAB7XwM01sZC2YVgCAIf60OaJHTd2O%2B3vzMjzLVLDnV9oNcOdgPPvfWEeJl%2FzJZa2C62i%2F8KOcmBz%2BP%2BT1N8fXeCzEzuR%2FBoOp6qKy0CkSEjW8EkHoGMvlKTt%2F4v6MUALpc6pKMJyvzj9fIfwNHjmxtI7HjOfnjLGwkIKQMFimhpxji4o67LAMwN%2BuBjkpRm1bTtxNw8sTyWfPbu0sitT%2BTqUDFrhALi%2FQatXczkBa35zIruUB8hsa9d%2BWO3U4ekErMD1rqOfIh853TGw0mgVS9ZtTh%2FSR52A7y%2F%2FvM6MPuP%2FMAGOqUBv0FGDyThXIIbhiAKPIzLTayeDq7skGl%2FThz6YgRlYl5P3kewhf8iagfwdqMCzDFHCtjxuRc9JgPjPp3nYPk2I9CLBcOYuoSP43SVwfCSkzCSJmHEO48215vPPLi1SsMYSD80TgqWNL2IpWjYmeyF93tD1ljsTtbcKHT%2BiOYFbReQo2sY5Yjbz4NIMbaW0XZpAgw0vohtLTYE%2B4riMWH50pp6cLBU&X-Amz-Signature=1a98aeef423770b8244eacbe5732eb5c84003b6140af21edfec7198eed649f52&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
