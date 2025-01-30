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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XWQ3DJK%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T080943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0lZ1pUqMLUUlgDfphzIdUZnTJaHf7LcVlRQLpI2RVOgIhANUbrJ3l21rxBbMozUsicqTRjOERTsICXZm7QWRns9tWKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwry4KPCuEKy9kuhskq3APQXpeJtZ9TDOerdJfA3fyNR5Sz3zFRkjg0uU0nK4eir9G1KlKBrtA%2Fw6ndnedbuq%2FES4E8UbMW84EW2puvum1UZJutqYM%2BqW62OjISwsA0JJ4eVTa6cd7NdfH63oMD6THb8k%2BVBLB8f6brHBF2qKIAKHT6znyDZeoLxjfwDrJcQSDhvsslGcoYKPPgWHLPvYY1toQMNQ%2FivHUGueea2Hy9g4tRKyPSJ4qB7nsYvueImzEynmTKAI0P3VlPojG%2Bu%2FY1BHJRk4yFDoRpJ1Ls0%2BJpcqFlx%2B8TLICR3%2FY3DE8rffMICGRnUBhXKEeyKOJW2O%2BGRDO%2Bo54yQrXq5MlMqd%2BzDull65405xRRlkDdmLS1V8GWsSQOiK6zyYn7tp4ocJ5OkzKc0dm%2FpWtPE%2Bs2s5Kvn49jBc3hJblAdqVfJ7PEsZiFuSiggqKaKMrUj25SOouUTaIIF95D7mvJEKbVYv8MWItvJirhwBloBSCTP0Jc5s7E5o5Yms3MyRgh6%2B1G6gYZ58VOWt3jwVXYDNzgVGxgAvi93%2Bt0UIKQbmf9fyv7upPA1EIcMJgx2AvrhYwFE63TVma%2BTkmV8kzI87xFk9GOMH7GmGhNI3nEXTiwmyOQuYF%2Bat4pcEtvOe4fNTCqpOy8BjqkAWX71xzu3AyrEAByvb7YFMGfcMVx%2BjSYTHyZAzAjIZfzqSYYEaRmOOANBgvkiohLNQ7uLEApTAPMJfvSWzVa%2Fqa0gEsBnx8BaUvH472UZ7wFcG1reD%2Fq8KXxq0TSXpPVnixdLXVN2KeRJkYQT8sk%2BnPn3sEp6l3voBrKImEDvpAdg1sA4oC4mR%2BFhg6Ag9JwrNfEDefZauJVHmNeb8e6INl0kbth&X-Amz-Signature=89207aa1a8f0a0357b7d4aec86264a024c290930ee7037143cac220f55ea538b&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
