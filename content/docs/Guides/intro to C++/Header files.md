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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Y3LSBKS%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T081221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID%2FPGB3Hip6onEopeZWlSbMV06fSJpDB%2BzhnTHtz5AqnAiEAoZjtVeIiyXkHZNezkdF6OzX2tGN6h34Fife620TLb9sq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDAsYFYQjqYHqtTInpyrcA9nYfwFXXxCKPMDk5xwRx6ycjGDsfssUx295C0SrnhIrfAiMfdD8dWOa1rgEUyBCMFv5xjPDkyABicpbxiwElHyJV0btodzU6J1Mol7gSMOUuFGYrOUSoBKtVYsYnUwOw4C4kjZB5Y31Pl9Jr7KD%2ButmDRIHDPL5y5QHcqX6LMQBTi84UppcPMQeM7HTjzOptdLL%2BWqynsbpWOkL0pESlhPXwFK1efbGvCpOdhVMM%2BfpLlZcYa3kBQyg8fTWHaQZxfUMSo3ZielL8CStrvOiFcl%2FVxVZoC1N5Q%2FzRontUaxjUb6c1fgxMuzauoh2pMR2CqywOI1F8N9G2eq8uRubn6d0quNiP6JrI3sTpr7YtCb2ItA8f%2BtnUk%2FESCiAj9Avsu4W5O1XkgsyCBP0%2BRDxoW8WG7KMDncZqfw3lcAyta9n%2FYd0uGaZldvIREYHjb9jirrcyIDdDkFmtUovxwVOZ8ODYXuIj2GdCz2FMrYgs9ZBuUJ%2BuuCz%2BH2JBQf8lmxZnppwQ0sogIIPYbgziirTA6CKY4HoIWKq6UfOkswhBc1KzYgaH%2BWyqI95keegGqWEM25RL1zmbV0RW9HcWYs8zok3lE4wwjJPAbo6Z9W1JvLnDxzuD2FlnlAJICbZMMvjm8EGOqUB9Fhq%2FHkWSNjvoKVTjWb8CHXwexefT8uV5pqh0Mw6SzAMHtkGUpLWqgMhqvVJkRoqpFllDugC7eLL7QctEHgCujBTo2%2BEz%2Bvou33mZVo5KgaKoH4B61Pky5cBV9LImdfDA8Oepu7K1mBQV8hRUHEFiQ5CsbhaoTBrGoFXZBwX5FWW3WM95TEo1TVJNNv%2B%2BP8NzP0tz5i0WgmdCzCZ%2BGux675iyQSO&X-Amz-Signature=2441123edb70e27d7e61f3801e004234b93f843fb2c7d793f4b80908f205a4a9&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
