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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2M3Y36J%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T070740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQC0GFTyPEAYlbwq3efom7L92B2dyFJug6dhiDvXvQd9pgIgb1UMGGrpAH6DjQgKuM%2FeeODIgtoH3Zeh6qI9LkRqKZoq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDHdZo3zHsM11DbzvKSrcA3FD2sRUKdPHNPdd2wlr%2BtdDWHxEDUrF3Ki5oD8G6AGawN2%2FEqLPFo61Cb7Sn7FI092CtyVQO0cZfTMI16prftXb21D3N8M%2F8nqBVs1%2FTfRPEqD9DzWrt8FZb0IyBCsn6w4Tjm6B%2B%2BMdJXWwe1LEHnFkyH1%2FRaSLsSqf%2BNcNbq88wkm%2FFR%2BbjnhT2Xj%2F2xATjdnOgs6ChhBTrS%2FsBV5grBX7%2BUlmuH%2BAI91rKIKxW64U3k6hPMNHR8SY34ZiPyvbMolptOsq8XUJVKpE5zLy8XOC10MNwH6LPz4LPP5WXU4guaUjdemyMZ3QluCQFX6C09LOwO2aQdiHQg7lRj8s7vClHhStfQNlYQKKD4Dz1YhDXWpT93y9hXgM9mvcIbssYWDvlsv5V4GznbF4na3Hb%2FfrznkYYujOrv338PXs6ZOuWACr2jJrlHhzLju5E70tYoQ2WNltgqZ5GTrnUY3Q32BDFTxOP%2BuNQi3A9gyOXpYu772Be2%2FeC5OSoYU8zovy6WXL2BwXGdLDbQUdiCjoBHblns4aYWBGboFZ4eOHPx7juoEyveqoAp3UDpXXswmPPx0KxpPoL4IeQwpmRt9Xp2k3PP3VIyNutMrBs5%2BSWngilTFQYr8boj0hFvNUMP21kb0GOqUB4jROfYENK1jH7uSOeNQ9mcc60fBnVVQtfUQeyUk8PFLoJUGeQ0wD%2Bs1wOjvyc63x8CiEMffJgQnrfbA0uzunU%2BaRfXFKVJRvDvmi%2F5foQSbt0WzEwTFau0bQxKmKa3e%2BCFd68uZkDRUar5H0PYwdlbe%2FpwtI2ScLVItVJUs4kb98lDDHUva%2BWdVm6gsC8Y%2BILAKFxAEfTYvQMTz8%2BmDlBLpJTVTQ&X-Amz-Signature=9405df7c5df92a9ed75ff1047a71b0a668e599ad224e6c18bfb420bf5fddf6f4&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
