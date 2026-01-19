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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZYFCHM2%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGF2kEngcl1ye1jSrazXSMm7bVk%2BneW0302JucndqY5AAiBObH3rBfcl4CAIzFSA%2FgM7f7gGMpOBAut9nVnx%2BI4j4SqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhTmBXeH8%2Bq8Sw9duKtwDu1ENkM1WVmk4su7wif6KMZ51hRwbn9KjHrAq%2Bu0iyM1b1GsLy5nm375ablNWA%2FdMofxfh%2FaczT%2FOtRHUO4MHc6XITlQTtZ332YOseAufTidn35NiZgsbY127te4oopj3hJYEzQsDFoJZTJRR%2FmcXGwbGDcHD%2F3GmcdcF7expAHx2yFQBlsf762pEoOWMCVMa0hsGcJj%2FGGGATA1fcApS8XTsI1vxp1JoDnQm%2BynKhtXFP3%2BvPUARhSZ7mnwDnJNX6xW3vRuu45tVFMRrLuKmxeNLCbl86w7g7z28W1Z%2F%2BYW4nAwDnsDlfUUNBrZQrCnnntGo1xT4RxL%2FJ9KTiuPFjm6g6%2Fterz0%2FL56u2zPA8NplK%2FE%2FdKuqba%2B6iIWqSn0NJYxKJ8janoq9ZlEaaUStxVv7WQzVcOYiwxUVv5OuQxpvstpTiY9L55BDwi06t1V1xxg6SWwR9n4PItDn%2FoDujBfDwR%2FK33wSqbQSFoOuXhrmtxhWZCWXIUEEfl5ALaj8oNH75FleoBhtstv3LIHhZ2Z1fQatRUeWFl7mdIJcUWvJEg85L2%2F56BjMxEuFYwn3M0v1B10bNmc4ss%2BoSs1%2BfBkmpRe%2BSPvSrAQCF5eExNu7Litj%2BoE8ty%2FWIi4wxt21ywY6pgHeD4AzPKvxXDYeWmpMJEeMM42ggfHxl9MgNKts9dkV8slUlhdBrECjXB2T%2B0CHYOR5wvvxzTAevkHQ4Wk58qmlcJwXLFa45o3Syu0ONyOaOxo7%2BiNRd4Rl%2F43sAC26Zf0NRuoVr0hf7QunJkJ2byUmJ13XQr2y7pnDwRFGNUqCEckAQCuQcMQl3neWFA1XsDDZUo18vRbj6Kh63hIaCWnx9kVftNxC&X-Amz-Signature=2aadea55b7b626b2f89bc12296859e0307d56bd70c38d515182e393e100266c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
