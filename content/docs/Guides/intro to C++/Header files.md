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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665B54YQTT%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T014510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIApzMEKADyBT1%2FMdaE9PWm4WXIu08894k10wM2S8cKTXAiA6KAz6fKdCTobxp5PniRsAXkOAVtkE5pN%2FtWUQKeurayr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIMF1KTFssQ9KNHixjTKtwD4QzVUJgFq0xhGaL0yDenzhURa07lYUCEk0GYbbqSLRawLpD5UytyccAPnaEmuRmDc6u7C6hgmW0lTZ7mLuDj3SVodvUHavBr3Y%2F%2BlDyRU7MLiSf7fTiWL%2FsfEC8W4y9FBmQq%2FUPmQeUsYUEtVAb6ZV9TYnDNLMolN3NceAP5EFeAiDBDebzPtC4gWMIF%2FBThpM4HXsqOPH4zQcMI2x1mutzywUXHFcc2J1FQCuSvLnra9aYOXEXtArt%2BngknxyNe5IEVMyPIhz4Zo%2BqUYVNZ%2B%2FruIQediuSUolMlVKcYbi1x%2FR2D6XyyBiJXjmyGYj5%2BafkzuaOgwIB7CH%2F6Y4HcpZXCWzVxeh822R6w2g3b8BuSyEQF%2FKWLogBsF1OtTDg7GCmHhnTcROCqd9WicY1gRohs8kk6q%2Fxs3TXkCwpddvNyWYqXIiviED01fhjumAJJQXZtCqQpXvz1o8rpvCt5UFrjnb8yfIFqiwk1eGtM%2BEASGSdrzs%2FdDh4%2BQifwtsHoFraPicyUatBl%2FxKtrAK593ze5Kx2kjwiz3Os2fpTrnWsVH%2BsEg%2BPDkqgvP7mg7W6zQXLE4Vq5h1b3wJw4wAfPQk8ZcTb0KmSI8SWtRdMnIUCIL8zEz4PC7jVhHUwisqCygY6pgEUbdbY%2FxG1hMJdWQUnUrH6DPrx4yCwpWrjle1lYJdeVPSGbBp7eJIDyd0IGccf2TAt6mLANkdVKgyUMbcpwwnUzsOjeZeEID5tCtyOyK8VuOtt5%2FoIAmaJ9fahq1KsQ56nDJTKHm3w4BdE8lRG%2FMVJ5nkQ7%2FpjwdYZuOmIbrgHox1o6rl9xriihKtW%2Folm1vgZwdbIptYfogm4CLlNgVRHczZ5ic2C&X-Amz-Signature=950877f729945b98b87b0aec6fabfc40693727b5e352b27b447d1bf93c38fe43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
