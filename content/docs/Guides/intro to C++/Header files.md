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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KV4YZUQ%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA5sfTKjyvnXb%2BT1IkMEKQZytTZ4LbCbgcgQpa%2F7uN%2FDAiACyPoH1l1a%2FwA%2Fh2fB9BAdhsrpvH2sdmkeiiqb10gj8CqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUEP6b9%2FF9TmNHthMKtwD27TXtlahRq71ckTC8EsOm0y9uXKrKZsLScIRiKrGA9b2q%2Bb9pBVsxicw5aDOvY3a5XVEvG0U9llb4xm4FAKl9AFSLWTfr%2BeC6K2DP7pGb4JUIOuLJZeICQ%2FpFi%2BoDQm3J%2Fvso4IBKgAuanTG4Y%2BaPt9y5hnPFhmFjYMjh64%2FpOUjSlP7tfKnpwd9oaDl96TZ8iqQjtt%2BbHR9s0Zz2DUKemourBjHQa16AlC6TOkRkWSwWO6fut82YObtieylrbAtDb4WyOJ2jU8BY2%2BQnwpGlkVhfNyi%2FLrDj3BBHtFFEt0FGfSWFJugj%2FBLd1gKnyuN%2F80u%2Fcbi8QFqeg1t77tXui6aqaAzeTYZWt7W%2FeOV7lWiXaO0uAz68B%2BHcmDhTx4g39LS6lb6BMN%2FRNFvKo4q4Njf2u03lFKj0b4LNz6DKz7lAZtsfdwjeP2LNLD6KAAbjSF5MGIWvMv2ozke5HH7y7hmsR4eh81cXqTkpmGmHjaRpx%2BJ86iOWGtPcdTXs1kTx%2BP3DDePz9c2AhV19NWzTFN7M4UJwWhsiDznm4FCffH9W1b9P91g2Qz3%2BaaC8t%2F7KCLqpHAIJS%2BCyjh1ZGNLT%2FXEjUL76Ho%2FWaqP1vv3hPcyJxX2RAddian1Vxcww%2BDpyAY6pgHwQiDUFo%2FUzdW4VDcecb8Tv5tXXvRII9vPApnUrpCRkIfTM0hWoVemVSd5RD9GyVyxhtLnnwVow0FoJUjTZG4sa10eFqqc2rX4xCR4QmIhUwKTCyk4vCCgUixJmLm3XiCevNLfZpzO42iGOMT6iR0cyeEfYS7At0LTJ9vc6iuPBt8keDLqmxal9WaDVsOBSsAXS8R9Vt26VBiZTbMNQWDArc1LuwPz&X-Amz-Signature=ad6e7174415c158b1c3dbd3837274a01d69932d8708872e6d445a0a9cbbf1710&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
