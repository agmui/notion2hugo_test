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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFEFHH72%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T081029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQxZJrfnkoLO5XAVvmz8xXvrCEfdj9dzrqTmzuzvbFwQIgdul6HQ0J7vtC4EpdYk27LbtFw3Mb99AqUEuXdkkcYuUq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDDWUOuZ%2F6hcMIrpY%2FCrcA0q8RH6zVoU%2B8a7AFMDgF7C%2BuGNmO6HLVC1y26w1y9fV4dBO4EAOeWI8hAG4K3uv2GtCu5WJgfR3q2C09rCzxLN4117k%2Bff04CEQyVdevn2tNO%2FvqXAguD5%2FmFdKcxWt6cFckyLF4QeU%2FCjCgHL7ZdXII5JZQ9sOHVNJ9Fmlmka8p6Gvd%2BnCCdujFmgteQnuqC0XTfCsMQ709f6pcIC3zQsFB1CZT1W1fX1GhU2%2FGrDw8T2YawrQIVTNyCaLpbaF61rgoMkQWcg1E6Ya%2BX%2By%2FShtZ1xX3RoNg%2BFWGpInyMFsWGoLI2dBnxZVBdXbtEIgmAg2ZwHZaFrrszMSaAr1WEYym2AeKLuzNQUlbv7c2v%2FPA71rTU5QRKCFF%2BrKcOK6qbPweb4BKJ42uaHw4dcYD%2FI20ouPstQtsffa71OH%2BEp5opOi0B8T2XBhImskPrL8n4YLcwpsWmc47Vn8Ja1ajlACZdCvAK9gKO7eSZLqnz1v7fdiodAKISt2dA9w9LNKvKUKiSLjrb4xzB14vy6Luaqa%2FneKt4LOlfD5qT4hcM0cEuW5mLGez1vebuz9m0Bs69DPGvwvrqur9y%2B%2BkrvXQYr%2B65t16ZD4RELZA%2B%2F8aTBphl3b5dumTWvCVs5WMMzgoMEGOqUBlfs8rDquQAPzNQO91akD4b1QAZyNu8B2CIzNYFf4%2BsdWZCou14iiT2Yj3ftmXS6jq8%2FNV2BPujfVIPAbPL0lFiEfVhLFwcg24BvKZS8eeii9ZjE%2BmpJnXqW20%2FqmiA5oB8uPLBUW5cTEYROQYPzBqfVFFiAszvNNmu1k%2Bf79MYWnq7YdjbOqgu9d3mK2EuNvUCYmGfu4j8XCLfmVXO1DN4wqEznA&X-Amz-Signature=b1ad25c7d2470fbe716c42f8bd234a01a4340f2e2beeac32ca357de73bc5ccda&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
