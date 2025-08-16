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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672B5RO42%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQCXNWD5AAczxeUUovD0ozsOgHSkejNndETrpnVCmMM7xQIgPi3qupHDYjD0wAY4mU8lJZ3arh4Ir5973ZzQAQ0I3XIq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDKEnUUhM7wW8JN7RZSrcAz2AujPL8JWwBQjNauduFz9BMRGOUoQZpzUR2vGvaxAYP2qy2Rre5oWcEKUDcAIelVHIpPdnHHAdRyotT0ZnDPL8Pz9MxDIcjroVBzQLVFiKp23tLsTwm8J0y856dSkOZGNQyW1%2Fmk89stukxriHqR8KiTISf9Ng9vCvnlFDf03vslz4cZwmNWJi7ybXxMqONb3aZFPQ2q2xHHEOoQakl0st%2F1y7okG5OZvu7CbGpDCJCKOExXcKT%2FCbeTwAojVJWPnfnYuCx9kWeVTJ%2F0bcqG9r%2BQg5Yg3Tp2T827i083yQoAyN7cZMBPyvpyUFAumSZRjOV7WmaZroqYswMvyNbSOqngNYoQkWVx%2B54h3V0yXWuuMGAi%2BoAfn%2FlTMnDwKmjGJBE28ACDTVIT0XmP833oNAhkPxMZ%2BU0atkOGARD%2BjMfKDEF1k48bFZ0Iw0BVdzOvClepdx%2Bw%2FdeXQN3untpQLpV%2BqXvRZsadCLgpcboo%2BjHLO%2FF1JQrzUiohAkRCtZ8SqzNWyoghZunEJgGIkylOJlnfw%2BjkQdQZQvHcOhUauP9RwiaRSPSKsX1q3SzxbiJZzq4WOBQkIVFG14vrC%2BLQXjUjZqdhiVbd3JnVmS2MeG8MLmYn6fy1v6S%2BGwMImagsUGOqUBusAtdgyGwbnQZOulSgW0ghxaCNJTwfJYORdCVTSlYL0FDCliPIwHQGUuqXE1LeJBqGOX6w90USmMfvFnfNIhBHGrhLkrxdzMVhFMfJSCHrHFM%2B%2B2UXEwMkLddufqqJNVAuqFTtf59RpC02Vlidi5tFI4%2BCxEidlfFkVFKvQ5uqTGyxUs9IvDBHv5Al0Hc6oY8chdz8TZw0L6FxUuWMcjFUpMQYLj&X-Amz-Signature=028fc79eb81474247b887a280e6a768c2ceb83a8a9db42be86493641b78aed5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
