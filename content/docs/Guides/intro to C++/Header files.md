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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUQ5FVET%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T110738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIBiqDpJ0hfqbedI50jAJPlBVmInL6t%2Bc2koXs8BypPGtAiAXYcdbOCYptDfJSxfV5onE%2BgoiWifbZaV%2FFSwuOLbrAir%2FAwgTEAAaDDYzNzQyMzE4MzgwNSIMGIQ6qcc3PG%2FjleIMKtwDjfEYIBtFr2DN8kacwMVDECTDYHDJiECfjJhGckQS5a3YFIpTWhTMt7mbwH6LluimE3LM542La1QDoJGpAD9zWgyu7kwptPXIaCsPZJFS3Yv26VbybU3ValCH%2FFDFT4NgF%2FdNSYC3HFRDSRjrJm28T8UZ69JoHoDigxCekd%2FYV8S3AZqZ7GYcfhQ%2FPUZHpGnm3JUQEKikRYLixl8%2FuwnGXxMXPpQUyIjCevqcvVeTQyo1bpX75KjKuQ7xHUTWy4YAgG18j%2FQtABZ97B%2F4MtnyKsvmtI2wEOxxBnr3HMYlO4bKBZqA8zlWuFOOdx60s1iT8RPuPLHZVdVksBuH48KTxoFqgf%2FEIQJXKLRvr213SERFILSaTYzjjBobw%2Bit3ThBkbBToiZpU6jtg%2FjOOVWNhArVYkujVmgZLrVOYnsH%2BOenIMqx5ptpIF2MU2FZ6f0rXjtk%2F3m8%2FJcWJPwKk4QbO2BnsOmpL5ff%2FJtqnzPew6WJ4VrHw5hJP%2B8L6NV%2FyljRnD9OVSJPcKk3pJJVVmbeRFGhMOEGmwF%2BhDz9bavego6PRRV34w3l6hHGbgJYfoEfiyb3i8XHUwGXAMQhXQ9a5opKwbh0fjg%2BbH6Wg%2FttfoSZ%2BSzU%2B1rFFqxbsVMwjKCowAY6pgHMuGtgdK3gdMbVUcPlkGOlhttb8pmpjBmfw%2BRUJflwTJgfADuRgABNt5Iz7XAIgbgPygcuHeM9Y2ZbRlpkKIBVms7ChEZmc98ey7u5pvwMCbBpanWXrGibnh60m54mCdQd92yNuzB3sPgTU3HHpAmNCOxoD4XcDidgG4KIE02YK8%2B%2F45C716cIPOExsxfLJ22exmAEbZHZE8y3veuiUw%2F811x95ABH&X-Amz-Signature=ce6bec05878d664adc4103a7245381f15dea57df7c40c833f81953acdd061913&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
