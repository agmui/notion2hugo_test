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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MCEGXDI%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T034814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIH%2BDFYo%2Fk5LF59Q0KV%2BQ4UKqMUSQUFBMZnN2g14BoajGAiBDVJw6tgizCYLka7HdhXH4rvMfABPpf1J7bM6jjr%2Fm2Sr%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMHusxiV1Z35KACet9KtwDXF9pOuzrPIIcI7g8%2FVHCTdcNnp%2B9wvyWOtG6rj1rnkf0fsgvjVK664GVweGGelsm%2Bn1bX6EU%2BzqNNB1qNpmf40VX%2FKxzRtgei9UWMXsIp8kHB1mUdoU1XN%2BOWmO%2BCdTQy4K8womLPx58gsBLzEZ5HbTu6NZHsnplQQ2lr9amI9XiwPmSciCF4skUIi9h0%2FbN5j4X5F717cZLSr88ldykVjWJDoQKg3wL3r%2B0yvUjpHxoxyWBFGZOwyrjFdBd3tk0Mw780QBqF4sndbSpnNtKkHN406wOJa3xLLx6z9kSToYVwo1ASclFt1m%2Fbai5NJd7u1KJ4GM8FBYeslbmY5ALVGwJNAxYQEEhIbkfQHTnuj7FET4gcT6o9WVTrXnrgxiZlGUmAhMoYQ33WoPvJOxg7qJT0kpgoVbJtxQRvZvCxCr47r4t0WeygHozdVU2dLzhWHYQX5X%2F80oZT5B2FJ6sYsHbnBiLtnp56vCK23x0GdImS53uHZAy9ur%2BpiTQO%2ByjPyOWA7fVw8OleO35H6LTkUsB78RI%2BJwmmfgFyznd1UCA037rAqWMkwMQOqfrhl49eWYDuQCnqoakh0bIfwdnBlyYfX6w0Mf4vK54c%2BL3qvvePM%2BglaV%2Fbuz5D0Qwmfuy0QY6pgGUocEANpeMC2qstnb5YoWepaw73VbNaWMbAXR8znSCE3UlBL1Dbf3BcUcHgz4%2F%2F8uWPWmyPRnOXtku2n09bOzIcjQ5kF6LYpaSs0JvG1zfTliUpxrgFqOuz60beFSm7UedQd0HzDjf7f16vc6dOChuBn9qwAewGtSINtZ7yH8j5wl1tl4IBh371R%2FZFxRuo%2BjFjihEdTwVWk%2FehaxwkdpF40af0esb&X-Amz-Signature=ad2c801445bb8af6c2a40555bc669b713b048f94afdb0c2c37486bb2ffff124b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
