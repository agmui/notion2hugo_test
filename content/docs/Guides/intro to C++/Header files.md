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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPJXVVWV%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T080734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQCDepGrS8TCQZWimjU%2B%2B6fRE1N3XYj7h70yaDOdtZk8agIhALOyT5wiih%2BQhto3b8i%2BxNpiIINdKGFpoLirLvmwQu3AKv8DCFgQABoMNjM3NDIzMTgzODA1Igw7DjuOuq4GwXT%2FN%2FUq3AO2F0KJ851%2BJwD%2FV3ljdeaSfirhp5i2zfNlDyXmrqhT5UKarW%2Fhx8ZyXXoc1q6%2B0MR8gslnlNKukTfCSQtYzgCv0VS1h5laaLcGGR2ZlBZ9cnHA0qh%2BnzCRnNSe3kTH9%2BxgiqqvKPz5n7EaXt7isNtqDv6JcgCk%2BZFpTm7eE0JU%2B%2FC5kBjkt52zoBdUEPmWtJgWQMl%2F2cyR5jIcwXdXBJi7n8aSZAKpEsayJQ14g838U7EI%2B8DSqt6grWKSXhPHJHqPNldWsUvTlxPDrfwOMBEZAfbjM9oyjkCiIL3Qic04KvinEqJKkoKQPnIlncb2aQ%2BmiuO5HJEHfzzN9Dyj5%2FHOSHOac%2F1wHgAhA2XKZqTOZmQgvllNfTnNxoaHtMifiqTcxIcx1tpijYcK1tixr1iBEWl5mlRl0HDU1C5U7%2FnJ8ea8cVhvzt8fUPkTgsA%2FNIJvDO2kAsY1Ow%2Bt3feT8CTFD9C%2FRk8o6trJ3eWmhqhbcKV9rsi1hIZh19sHnWUT1UnOGyHEXyNJf5LlqYMA5W6tMFDFQf1YrEXUMwIPADbJA9BxDLHpUNk93pdwkzxecNfBbdUqMNMG2yWQVp9eqAPqTVRN9L03Fy%2Bd3o9tX4Sb0qjzN5WdTPK%2FoZBs8TDD4K%2B%2BBjqkAd%2FTg5%2BX6jnf9Z5vLpPY11ftfZvsK5mjicg7iWhLCeWJ5BdNoJFCdnMWUlTcJpZZIj8lXRrYooOCLr09aE9pr3csIYuTYrO22CoAckYEYsQcnQXSeedU0NhPUudrch9soYih4ILX55tj0PE%2Bj%2BBYUexdYfyGh0mH%2BkN5qx02ERXZ9x9Fr6NJUAJflfqXUb7gCrnNHSDiQMfjbneyJBYFyCNqpYla&X-Amz-Signature=689765ff21cfebb92eac089eca39e09e94e98f1ca1f890911edb4304fc767227&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
