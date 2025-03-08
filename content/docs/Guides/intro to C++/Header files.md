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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SW3GJL4H%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T110115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQDQ9u866PlnikUAS9SJgtpMAQYaw%2FSIALi8ba1Xc5doSgIhANlaB011S3EMLXSZcLAzHRull1nyYIB9%2BgELVrb3sISCKv8DCFgQABoMNjM3NDIzMTgzODA1Igz4IN%2BPLyRcexeheCYq3AMFfnZPhLQV34HwZVn4VCTT1uLV8qCamE17HQO8nXcW1kH0JDNWqxyZfYs4gTfGp%2BsuOxAh4Wt7xLQuXlz%2B6l4%2BmhYC3fzq%2Fkl9RrVhxRP0I%2BMPngbCHzLry4c%2FwIzyLlnXYpIS6pAejxBTfXMwD83m4%2FNHLkRLy7zI97lREkRGQjP9MHEHVppDumG1b8hqlYoUzPBAoFOhrYxFKr6nN0vnYRcA8lEUsiupK3Ph6nMx%2FOwkNS6ml3lUkKi4YBdraEMTmueGI4H2wFwtdl0dIiRn6oa72UUj2OBgNQcklTeztbzASSzI53aFj6cn6eStuNrdzdis2teZ7ioe9c%2FYCMAYAre%2BCjGlvxjWpzbLx29wRg%2FLM9gwRIDB39JDEaC2ZPig41JhYrV7hADAzcYiGV0RNmo1YNQfDqR8EBFbdtKPaR18PD%2Fj0rxUH7IoLqTMJddJ7bMPfqUwqWcERqcWFH798wUWWZBgbx7cQfkcUJpAP6FEB06EGs%2Bhtry8SL%2FA0gJEoGR%2BgbrnF5gqnf0BKysTbPzBHC5OXk39Q5568ZRnD9yGznmSgme%2F2uEyhxcrhR7ogl5VOC6TLfQQOXjyycnr9PmqJ%2FE55h8WoV6Z3YVmGXb%2B26dSRLf7j5%2FKwzCa4K%2B%2BBjqkAfn%2BOXMHBJFk6RjzaPQiB1MDebUXHqqNhE%2BkawbGuCuFCxYiN8%2BNkM26L5a%2FDZ29ESsp18uRt3TxSZWE1R8wLy7tTs6rLI2%2BgZBS5iqK%2FdQhdw44Q%2BBtuxT%2FSXVDk1q6ksdI43HRNw2NCRFzzQBTYhi4GnKEfJLyvAAqdoLYMitKtlqKfUXmYcw%2Fs5uqlt2g4SAHlSH5UfECYnm5%2Bt5WABW9Hyjo&X-Amz-Signature=9da673fde8bdd35f3bf102e65af56cee583e34bbe1b45b435ef80a4fb5ee4d28&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
