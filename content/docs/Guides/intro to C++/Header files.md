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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636T5J34B%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T070716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEaY54jWb117oY2Jbloo7JV7f%2BN3Kp%2BWMdtC8rhl7WONAiAFj5A0X7kIp5IP9CrokEIsc9hxitRKh3nCS%2BySH8jPpyqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2F2eSwymyxkKjzS1ZKtwDLBJPwktTYoNVVRw0YfpPOW5DZzeBpxFClAzkYDUGmHXMNbCQ3TrtK06gLd4YdTMrbC0TgMvXfZbstDhHFQlRqjAyVaNBXjgeTFAdq7a6WOb0pvw5RgyIGm8fTEXgPWREE3PuwsXIN9%2FCHYkfF%2F1n7NZjfupqWHLIDXskxmQOL3pjMUsR3uGD8PQieeTd6X75esI9B6qHGKlJl%2FA73YxN9X7w5jJwoAWWlj5rihSPSpkbPozivcdUl0XnADIK7VGiUYmCvtfLeFgKNt4aseQefuK4Vuhmfg1Rv6DZyvNhHBq%2B3VYTYGKamW7ZyEfOWV4royHz2exXsVV9LVfWTgS6nrOvtxzGb5ioUBTOHbMPMYWiuOwpyABHrpjxJlwEfuU30daSKTzaYSqjo%2B9tT8l6c%2FbsobnZqWVkALiCpetySvUSrEJzCSGPXORUPJYUNNLtCVaSXl4aZUI4vjg%2Bt4RGBHaIXGi2xdZrkJXBzMRn84U1GT65roOL4J%2FaTNV31whetVt8bT6B2JrFnRkeOBmt%2Bt688K3tBOVTzseFVKaEpKVS0ptpkMPQ4hgY8pADhZnLe23NIpocZli3npV51Qk%2Fts9GEbehXWXyXItMGvbP%2F7gnVJT2zAn9GOxhKSMw%2BvuMwAY6pgFqrdYpKgppInYsal1xTlBv8TUC%2FPNpHSQOrSSsE6DrtnC34ceP3EH6m1XFR%2F7wuTtuL9qX5im3G8Ba%2BYPmI77P2g%2BY4lI2J5RN8cehLmvyZ8D8NOLTg7780CDv0UCPuvNwot7aFk%2BhBLT84V8GWld%2BXMI9279iYgoCYpfKTOF%2By%2FfwDu%2BKM4vYHg%2FLjGtdt1EXUlhMZnLIsNmiByBq4JnoEu%2Bc5lOz&X-Amz-Signature=d9069bd68883ca3249a46cfa85a7825cc914153c643bf53472883219c9517015&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
