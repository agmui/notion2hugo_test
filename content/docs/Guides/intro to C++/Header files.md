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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFCHGIB4%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T140836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlWzr1uuisUlPrDflv47ipiu8VT5FzxV29CUu23%2BceDgIhAJOK3t%2B4ZO%2FzdTVnvxSJTCj7fDGMNXsLjYsB4GJSG6khKv8DCHcQABoMNjM3NDIzMTgzODA1IgzHClHD%2FcITaVZJKgsq3AO5xVro%2BCriWy1X7WXmIADQB7uG70GHRBtIeQnXBsAhy9L%2Fr2bH43PEkFCpAUceCX4Gp0ldWivWYTGLgCCI5zod0viAo%2FLd6hQAVxb%2F00Uyoe2Rw0Xphczjs1z5U%2Fu8a%2FChYDUgqaExP6aXt2S8wrojiUpxapO53GS7utbpDAwaB4Vu%2B0%2Bs9%2FHy%2FTJqY7L6ZQ7jSzX1qyjlCPvF0Z0rQq7a0u9r6pqzBVUpA6T8A%2BEZA8cMoKmbjGl5MHb1rJp1r7xFh2JyjlbPskjzRxDJI4NfpA3xkmdSN6QWrkTwyUje4hYQ8wPX6XlGQu3Fsa9UG4he6KeKF2nhTu95gZf%2BwOngt9FCJ%2Bo2ZpQQ%2B%2Bc1O7vyR%2FBbJvuUL%2FxTBV0Rb2YmR%2BDAEF463bR9cXW53wnsFKALr24mFPA4KILMio42Kok2dWrAtfyjdkccnL8qHmW9WMGX5Jx5KIYwp3qmRq6MlBdhhcCvhA2VmsRiTFUHu%2F2z9ymfI0fCIMIGHu8yHJLoLKgeL7uS5kJDBuRpzg0sh27fddblzBO%2BOCT2ZZGXZ4B38NxiA1hNyl9x0fwaSJmhpGC4gWYwXji%2BA%2FELAw90jkAZpNA4un9JqSyWSsR%2FA8OlQE%2FHgxun80TyppRToTCt5fLABjqkAe1vokxHvq9DwCg4wM0NMuPj1zxXWJo2OYp1YQQoccgMddAjxoFq9g19a7uN16ByURCI9MjgMevQ6vDioD4uZHM%2Fwz5HKfpQ%2Fuq89eoHFwPjG7Y8UITbMpXpeOQp%2FKUHMh18w8xQvFssHWK4X9Mt4qqmrJX9LeOyE%2BYpfoz4kzKUGn9yzCHW8GUkhpIUcySjhhgxIkalzbBEA7upjwUXezkSa%2F7j&X-Amz-Signature=265351a3c4b3db46b02801fab1dd1bbd33cc1ff4e375a3f2a5944e2301049c4b&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
