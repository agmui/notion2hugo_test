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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466665ER66Z%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T190656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrL9SwXbYYmM%2Bk%2Bjn59cWR%2B9wHEO8rCjtvx5RweMMjNAIgaX8gyWpy03ruOMFCiD%2BFDoZym1O2U7EXFz5ErDR42LQqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFosEfRyZWSB5qPWgircA0xMyiaEAYxFCnV8JJIIUhdzUDXMYlDeyL%2F0ZegpoQ31dL3SpSzu0h%2BGnb5GVzhpoQzm7MnRtRWq6QnFWTK2833Jbgh9c6CCXSPsi6pZmiAbaNQ1iDbMUaQhifiFaQ3aORTAMqr1HwlIbOy5WZKe5tMYlcxtE%2BOzJbkEEQjLENApPbLfa2978RHo0lypmx6Q9kNeZDeEYDa7ok8usU2ZbjfvlfQabGxWh%2BWAR3Ysbx9uYgPDXGDvxDh03bCsjG0fxsrsUwjaA54yz6YF5pY9osiExcsQTa0KZNVmbIIGNJRuWDGkwi4iV7NhIwz7%2B26dtTnVdiXQIWyEyQ7KQsyOF00CStdqjPZLGarSm5IbGpUafmTBB8QJNcKm6PAMZekZHuFMqhHx%2BJ%2FoLWBbRbxEBUzRjzRhPjdJ7lxhVsY0F1HUKsuEqf6aR69eWJLOWYG2lTpwXJ%2BC4UQe0PmDNFX8W6fozApv2MEcNr26G3UcfJ7T4jg2T5gej15touuDfuLL%2BPNQ0SvgySLGsCiE2HZE87kzs7YxZfHe8UgzVux%2Bw2ehSZvTSaaLhnV4kA3Ev1jCrkMgMcQ9uhFXDvwbQJnWwFfxIGlfIbFFoFj3dyx9bAJ%2FvzNwOlCDs9opuVGQMJDKnMIGOqUBMM3vY6koRP1cBANX3qupfaKPh%2Br522EKvUY1nPLJA7znAbZIqS6ioKMUxlInsP20jPdky0%2FiuAR8R9Hdpm7WE9zDpWZrn28Sb2M60stBqw1WhlQS3PSneBAUxV%2BCL%2BBSjIV7SUCa4Aop5aI6Fbiw15rtrBQNdnStoyu%2F9oN%2F%2BLIY4tzMBjVzkkB0%2F0MqPh1brxa%2FQXWtWZJ5ts9UHROzqn7iIkeX&X-Amz-Signature=cdaaffd3e3d9dba646919841466fa9fb88dafe658db5b84d0b4bfdd40a4a3686&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
