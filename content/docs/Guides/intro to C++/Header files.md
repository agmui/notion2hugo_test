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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROYFIB6S%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T061356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCK9dQULZ%2Fu%2FPg6NuRUZiZ0G6mDMGCfez2ngpesaUTf7gIhAPh%2BV9u4vovzq4YmJlTQJ4J1SPglhyYZk2Sa%2B29MQehUKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyHrWlktZS438uy1usq3AOvotXEJzd2SfhPSh5LCawW48XP36f586LJiJ5TRjRErWAjiNiu5aerOSzDlFZlhdbT3R0jC4rm3MKLs76bKtGFyfsfCEqeGEdvGpWyuBOamzRSFdwSax56ZYA%2BNpWSid0d03zcMrhgTVlypboSMR1ZsZcjDplc5VkYRBJ1kCdJ9rHj10yB6OzJBQXlnZjQXh%2BZeCKXm%2B3p01PdtjCQxISCCyJEuxAhIqH7XSKSBpW9kLPr%2FSsfiH%2Baj5ihyB3HsFW%2F2KDEOVGgEdyUUzj8t8cso2q%2BV22k%2FnpC0eWlxOAi1oNWN3uhr%2FjtlNt3jp39VsQAd2FXv1BHdupDTl40hicYNj19yXkjiyP1qvXo8hYFzZoKVQ5G5tEQjWglyTuDrTJekLn0DZAOxR3ZRn%2BvEbf5K%2FIEXY%2BAaPeA6AjlSy751FaZQY4%2BXJYP%2F57h3oQGp1lnCNZTJ6ZgYy5mC5jr8pQaF9pE3TUmsCJSLCKSILudYmDn0TVDxyECfMNEYh1Vhl0U0vJeN0Jh8iNGhHpmNRVotO%2BILIF%2FEWhj9ZuZuzulfALr%2FZciO2ka%2BwP9S2ixfC5YnEkmjxyp463wqYv4fAGmsWic2Y6aziK%2F%2BGt4B7Pqc%2FIqMN5fGQKCiiD4zTDK9LfDBjqkAeid%2FHLEJLzEclBI2cUZea%2BRVWg08vAFW3mz8mihrcekupsdpXfiWDnEkEBjxoKGS4eHpCBAmYc%2BjxJkv%2FioUSdmo2JKqQRTONGESaZcs%2BzMceYg66bOSV7Gq845plKufuwoofrLfLiGcWdXWwmQL5rpUGJVjSGsaU8V4moaQa2fyp77cpYJwE01kbPf6vaf666Z5yiAccB3raTMikeS2YmNTp52&X-Amz-Signature=bd6b711205e9f2d981c3f861fc03404f95811b42a6a3c922363c31208a83a7c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
