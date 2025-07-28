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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YRNJYH4%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T071624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQDoZncue0skL4cr5yUye1RhZskc%2BWUcONqe1Cn3YM1UzAIgKuCqV4WWvfRv7Q%2BtzL05AvO6w69%2F8eh8tXY6Y7AstB8qiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEnhG4tfZQyWiDoWASrcA11trG0nxMZhPPuD1I5QtAU2a51Mo5q9Vdm0bOpt9IAhiwCcSl6LXNdkYr2C%2FzEY9Lepo6D%2BAKws3pooFCDVHIbegGk6%2BuXZ7OuJVQKCcDcyYtnesk5CK6D586ArS0Bp6HbxOov3uTsgE9DiWeTlNNTvkWbpX9lFSmHqa9XWSBJ6bVqAzxdBURmPniDbNsc%2Fnnc7m%2BE7VeX4D9ZUzFeG%2BLRjE8lM6C03O2qGWeUMbOZ54iYWmKpp1qRTEidtSLWEJzpJ%2F6ydWH6130Z6woKYcs6BQC0PZglJF%2FSgcS3IbXHWtmSPHz5RWdFK5IyLaZzVv0Y6Hh%2BUtaVqYcuKkzHZsPkdnk%2FfX3E6PDIqyrvSlVshxfw85P8KYF6NkZzMJh8E3a8yvdSgzQ2U1gs8xV0L7Hte7Mga5gnPr0UBsC1U%2FF52cSTMPgsmioEHcSvQfOVMbEalKqu9IkHsOUAwlhv9%2FVT%2BJ%2Fg6JXILFjucTM9wmeuKrnkQ9h1FT8ryGFcAo3NZRZY46Tr7DF1X604tAafrVAbntdTy8mnRbJFglFGiVaMyfqopZoL4G2VWzmhaaMsYayxSNLmmZ9fFJFNGP%2FOylUiZqVtMrkP2iczmfRv%2FzKcmYm45oK%2BJ578T53r2MKuQnMQGOqUB1YhXZKd4XKWoACO6dsx%2BJrauz9dAp0Nrmix01SIEH3Bg3a1zsvsYlGzUc43WuF0R5w%2F%2Fs%2FYeUibSgFrUeC3lBz1ZWc%2FJc0Kx0yiuUqKV7UujsH%2FjoJNCJpuyLtgIuOZD%2B14N2BvprpC85QF8jAAhwAPKfs4img36fdUYx87cgHdg5VIBFBsuRnZY%2FFGipKO%2B965a83Ui9RUKAwJkUShSL0EDHeZJ&X-Amz-Signature=ed962b69e53ca014b27701d8ef446b05ba929797573862695020eb32b8da4e9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
