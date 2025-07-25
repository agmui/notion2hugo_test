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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNDSGKKZ%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T025021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQDOcl12AWUaMdMH0GGEeWtcnxux1lbpfRmFwcUOnXpeDwIhALF6oP443JeCEmED9AsOs30IxhJsC8G%2Fr%2BGf5L%2B55NK7Kv8DCDsQABoMNjM3NDIzMTgzODA1IgxzB3yXb6i6yvdl8jQq3APLnY8T0b52hS1KljEeJ0A3xCA3QUbHsxZ0aIuaHk1dXhJfQIXm0c%2FvupcA09Wwgrc1BTD19P9rNFMDHKlagd%2Bs7rU7hK%2B9cp4yvd%2Fe6wkdpHvwla30U9K43kin5pA3Eqh7m51LoczhhN%2F3b4KGVnDf1fdqRlfmzdgqSgzhkwJFQXOnPJe1oEZHO8Et6D3TG6t1VQUwdebPnhX8GnWxecu3S0yKPCASeBOg8pQJDIejng1cfPXlnLnTi4JDBcehF7CZTYE9sVda6ufhydzrd1BevkgQOHbBhUdLkU4rJ1oKxEqhTs7g0SQN%2FdcT%2B2wbGn69jghE5CJwwUvZfiptMhr6bgBPsQO9F0sovpUCyXG7HI3ZHsg0tI%2BOj55XmE3TxUxzMSaH4JjS637jG6ag%2FX7vzZ32LPD03thvfECoMnWRijIsIV6cIvjaBkWoBK5TBWQI1zngWdfpOj1nWt8WOIzKwCMDF7Z2Tl9m5MUPb3%2BzJfE4R08iGAV1a0rwMYHgFJrR7JtlrCAN%2FicRUHhHjoE9Dlki%2FBDNWTnqUcxHdLoEZYrxqDqM%2BUeSyomBMW9AgGdEhBpndJfwfxTojAKgOBFGDZQyqfzANMwqgD6o9NzPnBQQylqsMwCIbibYLzDG04vEBjqkARKQaG0R2q89medeDmUaFw%2FnHzAZAFa2kcBkyFeGRZ3v0yC3biGLK6amjxCxhSi73q2p0Y%2BcTrQsPkPBB0QinTpUTpUEwpCSmziro80in254Qhl3d%2BJCJQ3Cj9EgsHhsaVlJR0LfMXuJL6ql6vPC782lmlqFy5MHGSXlZZEE8QjHSMVlDhGN0a4X%2B%2B1SDoQwBdjNqdf%2FMNGVsnHVkxz0UZtAYAUk&X-Amz-Signature=b9ce4eb94d0e4e2152d668fcb0948a83f79bed615da3f3a4ddcf153d0c3e585f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
