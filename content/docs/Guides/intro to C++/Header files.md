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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GY44ZP6%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T170741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIBbBkRpDp%2BKcnv%2FC8elYJJZE%2Bsc23Htur7mW4AwQSbJzAiBwrAJn1u4jOtQUJZ2XjyVxz7tWEb6iKzd75m14X2GL8SqIBAjA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsvqVfS9G7O9zdy6YKtwDUp9XiLhV6wmkjyd3VXU7YHTJs6BQVdiNHgpzYUxjhHTVqkFET6kM74kF8xzqeI1jZMuw%2Bsn4G%2FAvG7R%2F6IpBEFaxWNK0NEFfJWF%2FjcB%2Bo%2BQvP306LcWC45RfNHJDipWCCOIZPjgiPQMFBhA4mBPXCoHDAtc5YlIHCbh8ABGPeEgt5FtnCGM6GRlZ6Ww8mOP%2BmjgopfgGOpk7wLS5dsBNVTrDsvH3afZnZxr2TsNehBXWEmtjV5ttStblCiGKbUU84daaplEAuXd%2FfjVJgEstdyrQ8E7FHZ50aaoBWVdWlLY%2FyMM02d2ZqpciW887tF6g2tb27O8Awc63Kf1HduUdf%2BVbEVEZYn%2BzCcmiprcHWelC2kHPIwcL9X802QdEARQHrRUiNb37W6thzoaujsg5YXpV8EI%2F15v0kugtbc1cwxofpnTrSujlhNWeWtNWCJnyOOXeeg2EC3SoLsTdCS7K2g29ItlxEF4xYNegoQHBw8Nk8Np0nA5wj4qF1LoNciq%2BaERyxulPWRm4iZqpABZFeBMDvUx7Vn6ffkYw8UkHWZ6%2BWj%2BUXR%2BcYZc1TAhQRSqBzUZgA6J0eHrAChMcOx%2BF43AISIXXTtAh7f9cH1Q5SIMNXgiOLQciMYrf8RIwoqHOwAY6pgHsb2Bfq2XI%2Bj0qsmS%2BDW28DAuIgkA7k6%2FT295no3MWgvDwmYP3Xl0aPZDABF4qSd7WVikfWfjgg79c5isXxKuQDUxvKX7dJIdVbzt15cHWc2DIa1LE2bexI%2Flnhy%2BmgmTkbAij0XXiP%2FAtTVZJksJo72kR7E41o8Rr2T%2F2ZQS1YBberNoFQ2cBvPqKbat9Hqi7k7D3x%2Bn3Yo%2FeJ8EabIFt5kOPY7F9&X-Amz-Signature=41eba73bef7be6f9f7a40d15695d8be43110686eb2af3dc813f0787178c2c2c7&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
