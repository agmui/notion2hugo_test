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
  <summary>{{< markdownify >}}Why do we do this??{{< /markdownify >}}</summary>
  
In C++ we can’t use a function until we have defined it

**EX:**

```cpp
int main(){
	printf("%d\n" funnyNumber()); // this wont work
}

int funnyNumber(){
	return 69;
}
```

To fix this we use forward declaration

```cpp
int funnyNumber(); // forward declaration

int main(){
	printf("%d\n" funnyNumber()); // this wont work
}

int funnyNumber(){
	return 69;
}
```

we say “Hey C++ here I promise I will eventually define this function `funnyNumber` but don’t freak out when you see it”

Here is a link that goes more in depth: [https://www.learncpp.com/cpp-tutorial/classes-and-header-files/](https://www.learncpp.com/cpp-tutorial/classes-and-header-files/)

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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVG7T2KJ%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQDUzeSMfcJEes60bKNlDuokwQTQ%2FPUrH1GtYEwLdPTnUAIgQQ12zFL6aWsd1PFAUkHM41Ym0G8jG834srwxM1W%2F1IkqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMxRhFRLgcYsei6hPCrcA%2BXWDuZcurC7gjNnZMvuXjTvoLIS25zijeSoGkOqd8HiLAa35hUj1VB4d1E3%2FDFUuS2%2FDciY63bwnSH9odRxn3Xvg3BX9fxBtMyyMo8FDWQ7QdDhjf1VMhPTCs%2B3gBMVVJuP8qkQCpLu3l4FWR0ZyP2dFntg%2B538hiaZufA30%2Bwv9DJ1dOnczCq2L3npsM0X%2Fy6A0NivgxN7f3iUOyBxoAEoOV2bThT%2F2dVyZRcqPgX5ALpsm6op5C0L%2F%2Ff4Mqim2MXQz2zGqmQMvapVEfutVtC6hlPLXWbta0VpUnq8ROJAosqlnj3ATSjcL1eWPTx6%2Fwuq4ua7pYBHixZwEaMoFH7zW9MAWFllaY4zGSBge8FAw2zE4X3z2GXoyue%2FXXnZKJV7abn%2FtJU92RpSE7iGoMYTwy5jhywxwxm%2BDrB7ZqT4mz%2B4hYvLpWupQuIGVoZPlR4Gg4xfpp13Fr2HkfvZsifFoqpG79twoI12AmwP497qG%2BHvzreSzB%2BUzWtjI4VYj13Y2Q5cNBeRl%2BxvErSFtgxnKC6REBHegTtSdR7GOdD6ZVE5BAIfPEgyF6%2BD4QdkUaRx%2B8ya4%2B1nemlMNdZLf6GspUKTf4S2sqIjT0XiohT7V1oWESqjWdzIsq4nMN6HgMwGOqUB6q83DPBBq2PukMPq%2Bd%2BFpAhOdUIOZz2m2HVpJnc9QuI31xKoMN4Ep16QLjaqyLl6Y30CpTc6av6yTuA78mN3H4k7VKePfnuz%2B5ZCbOxBPY1S4RVVb3ANeLyodrg1X8AbAvpUjLLvIkvjmUcMl62KXAeh%2FiS9oW48XtMZO3BS7g2t9Hj1f4kg6OLQV6mMMWLysUumTc%2BJQ7klQme4vxmDf%2FHEZeIR&X-Amz-Signature=8480993ab6353b832d831d1bf0613e5d69bd91dfbddd91bb98f1bce6f613acc3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
