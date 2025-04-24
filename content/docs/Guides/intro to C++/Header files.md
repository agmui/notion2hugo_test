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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JWGIPW7%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T170732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFrilb6e3LfRDwdlwlovdLQWLYqW2g%2Bafp%2B13h4IkXeAAiBDexasKghem%2BwimWrG9r9I4f%2Ft%2FXqXj%2BgUuUhYdr4M%2BCr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIM8blgKg13rXAWptc9KtwD9cm%2F0DPEgH2WnbfPLxPXDXx2zuMqCsbCAjwNPPjlHIlaRa4KQtGvFT6GbdxfEdQ7%2FOjx8I829aYbv%2F6VCrWZ0CiTa214198JwPOJm1Ug9q5s9NNVd2Wj4WdvVyFWCYUGZ8Pka8UH6RrO3lfxCza3%2BNND6w6kXVmafZpSLDMSVrKLVIlY0oGse1VwVwDmN%2BBMPXwzXULgEJwypwnFD6suwP9x7UwILSaglng97QAM%2F0H7eDzkHgM33tkMtnUJcHGGOJtPLc2eo9tXU3Nhgm9VX4Ti1xrLKPDTvzjjyKW5%2FzyF2EZ1KK%2BITZ%2F57u0hj5IIX6V4xUl8yVPP5%2BLEjKpX4SMTVZD5SPXizD%2BU1Xj7i5FtKiOrQcqq6okMVsH0TvL3EaxHwMDymi%2FnVNOm0dnTntXih4UquGu1kgSEiDF6UI0d2X8u5nahiO3j7se4w%2BOIT3GJDDc2Eohn%2BjFQ3UYlAMz7B27c18t1%2BJAqEIgBhdk4mD9WPk7fo%2FlTmud2DDQYbLfhnFlV3mP9ULE8%2F0ieaQqeqz0vZjz6Be0c40ES8vjSXThRqD57fvhIifTlJAmVEe9NbPY%2Fc9oLH792wMBjVWFF3E2klXgkdyN7D3mnkQQGfAFnsbmy0sO5CMAwrdapwAY6pgHuFw%2FdjbB25SnV2vau119hDjnAvLrYoOqlxXGp4dz5VJk4W%2FgYPkI%2FY%2FvamDlRA3ETcEzd7XdhEg3xD6bJtSpqswI6%2FfcBgh7%2BYxaAdeErmjAh2Ilce%2B1eWzuW9cN0F3p%2Bt3rVpjVDb7O%2FiMeDuGjLuKm3hRKuXXgWAp9uzGVnV8c7bXnXjiOiGvcCfTo%2F8L9puCz1PvFS93gteTwbLgkv6uTMAGqa&X-Amz-Signature=efcce9b8181956c659f9f36bbed4692668ae366622d8f00b82f877ebf873616e&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
