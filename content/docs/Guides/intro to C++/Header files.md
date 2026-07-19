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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7STUCMV%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCutbq2Uu4jWwjsPJTDAR6MqQ73jP8ru0DbMXiefOxe5wIhAIuO2is5KnIxIyEFrc2gB4YmB2ibbcN9XdB0EhAlCOcVKogECIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzUJyzsnhxaJhDuHbkq3ANbFaHwrhLNrFtECTFry9asYsE5%2B4ZG3TJ2HiliU0xhb%2FKZ4tX9td%2BwlVh3VyMDAEOKgPzfBuIU75qbSQMpQdrU1fkInMB1%2Bvn%2BhVXsvbqjb%2FBX5fklkLX7bwoiawpd1x2H6yFwrkeKYs%2BcyKLiIQQ2t2T8MAth2wbb0lo4VL2%2BjBUsRzdD3bj%2B5M9ZZavBl02QyTACgf%2FA5iDVzCHRkfnLgOk3nwDNZMbrnO2zxtJHQYVhcOeQ8jF3NAHeKZe2zrD0lnMx0mih4hux%2BFW0e%2BJsGe319%2B0WKQWXbVkAMmN4IgtLX1Emu4UBcnJTMyeJ0231jJUTrYZ9MFjtNz1fLeO6OXLmf1Q0CBn9QUzo3yghQdAouFzhKMENwftR8kmfWAIVSkzl34tpgXgJaat6bnZimFwFs8oi1iNgAKxj%2FSv1luwTCU162R6765SqRP5wRFp68Dlx6irb1sFtUjDmdhGxXTxcHkRzpxk%2FWqiwGoecQHjWIIBfx9mRibGiWXSgh4Z8MGv02eFXB5exUCTrFkjnJQsVZeS5rz5gbBV289dYtQLDVtLeRCjZhf3OVqyUr4OohilH8wkIELck2IDwOLoygTrPiT4Fh8RDHAnAzaZzChE1Pswu%2BEHp6R42ljC01vDSBjqkAV1Kpsiwvgfu%2BIMIFdMYqoYi0980fOtvr5xV76gCBcTj0YoD11EXFxV0FFYNVKbo397XMAGJ1p7Zucn%2Fm5lRczKuNdUjDp%2BHaBw7%2F9wpv%2FZLvaYnUwM3J7gX4qM33gAVbfT3OcB61OrK2woAjDpkGRS7rYYeexs1nSadCt0lGQB%2ByeeDMUDyRDhbmuAtDkZByf2H1CtWS%2BUROOMzw0cv2BoRJtEY&X-Amz-Signature=3f695fd715ea56df5a57cb9727cb2209dd22b562971f21f5783fa150a5aa7e9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
