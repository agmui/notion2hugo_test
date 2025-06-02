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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666G7J66Z5%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T101011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJGMEQCIFewxD4J1vn4weWhWZTpuycsZTWjOHXKtfOfaJVwWL1DAiA7nzbBRgZrO2C4y4joSgacaB%2BKzq7lDpzUxSjbgaPevSqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbqo1u%2FFVdGyzNeOwKtwDzaVw6lHAYHEX6Wc0qYqu5S%2BaFLCShCFMZgKWO776zKrP9y3CVs5RN4kuSLZs47MvUi2W2UlzxFyWl973UoNCfBajIxRs1lJpJ4AWEukTV0sqrwZwPK%2BXcnJva3WDck8BKXPWDMAvJP0C9jTL6D%2Bw0gy03ELzXtiBZG1%2BnagHkDuOVZKHg3jFqcjIzLY%2BJmjzgeSWZxYTx%2FiB8o4pi6Dj%2BVrtv2KBrEYohsaq0jHwpweh7GjSSj%2FZZwGkvhfpapN%2ByUGGE%2FTJLbfkehu7UsHRLkPBxddxNapDjdyMKqqNhZ%2FChG1nyHboQg7K47ceQQse9ONun3pB%2BTcRilfBGFgafJNuErIMGSOCVdKsaob3eqhmKoonIVUqxSP5Z9YIAgLqFl90R%2Fr5GgksresD%2FawUyw5%2BArxSlxFPgAMEkapKCrhlBvADEqG%2Fh59a72kZZqmAU%2FoTc4Bgz%2F1%2FjMk%2BjxiAnx4adV4QCJqyX97vUyylztLp2bL1bMw4tGuXSoGiOhXPWo0Ro79pom7t5Ru%2FtWtBLzU8r%2BWGj6LAf6VswH%2BQvqwFK54TRs7KPiCLojyvLB8%2BsS0a69T6Kl%2Bys67Ip99FsFgCp9nUDvHZMKUgCpX4RV7uKI7Q3DeCz1xj4Wsw5sL1wQY6pgEy9c0TFbONQ4AETVXMCcjGWc4eKJCU%2BcBrgk8f4VJWz8r%2BwchXZwacOHxYhPsTbUA%2BnGWBkGgPFNluneDFt7XE2Sm7Fk%2B92Fm%2BiNY6cQEjnm01T8NqUahzN3uyyzUuejz5lEWQ0ao%2FWXurtA2TF%2BFQ96H2BXPUjudRxUhIwYy%2B9icnOjvR7jeUWuW%2By739LH8J%2Bvlc6uvMQ%2FH7XewLTMBtNs515nzt&X-Amz-Signature=f9dfb98d14552f5a0ba51aa47955410c367ffc042db8a3b29f30f5ea739b6cbe&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
