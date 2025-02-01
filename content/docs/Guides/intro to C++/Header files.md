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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPQY4PWZ%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T230236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE7V9rOMO7c8C2WyWzkwDvfPFhzRHi4ceaAOy3vFxrmlAiEAp4gu28GrVM9yeITykQNCuq%2F08Arc5x%2FBOFJP6lAhC3sqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDV94RvPGgwX185NQircA6ZabXJ9JGfwsRb4PYRbWiwIeXAdTr%2FFLa7NrzJbYNxRbLqtreWXgqFktTV9Ozf17xH9aS7%2B3QG5iNnlQXn2c5ljI6qA9EgKGbiEMu7%2BcWm0ZWnGR7BcuUxGg7THs%2BjHvT5J67AQmw7Xy%2FKg96pLK8xZPPtHhiw43y9%2FJHy2rKVl7x8oEqK3NHcJiYGBR9TB3IZJrzZKzJSCkZFpen13ZdzX7%2BgvoMQA19xETQCMXaj1oos%2B4fahsDHBPEzMCkLY9ye9e2%2Fw2FTvT6gtF8cm53eVgUVASHQShnye8I63lpvuAcx%2BKeyZ0M5ZccadoKqztgWQOJewTTjfTrWFNmXFL2qGOMJAGxlv%2Ba%2ByEkDgO%2B9vmnKxfPY2UM9TRR9QuMRXzwRxb7ecfqQ7YYGU4BxDlFNa51lb3%2BSW2HF3QdRF5ZC%2Brj8wuQ5KBGc6Rlg8S%2FGDjmkxi48xcVDfOHElP%2B5s8zGgm2JO6CNrYmiEQS0Wx8uNXsIYwnENHoGE8h38ZTM8HJhl8rVdK5VwqZfMkBKIZpf7iDueofC5nGGfxGVZM%2FcwjRtie92CAOHEWGz9nq8Ec0XtqMNrbBiCeE0%2BwmW77ir6ZODY6R%2FTeDZL0%2FJoOeQcsylG4Ui1JSVQbRDCMMey%2BrwGOqUB9ppfHePPuHuJu8KP13wE4urUDw0nkJKKvWZEFBLLIAAe3BALl4Zg0JzBWW5uIx%2FeR7wGlzmajIX4Dg7WZ6pD8WJ2F5WrVcsvsw4S9kznR36jfvr5jzgLFxk%2FGoqPgMYygQdu0TePMdpJ4RZtkF0vwxpeacQjoqHtUXZqUCAsaxp%2B4FDSxxe2yDJDH41%2BlpZ3o1rd8HY4XhnuWhVEgyRJEF0wC8u%2B&X-Amz-Signature=daf9bf12edb703bcc7c52bb59b2ef0e4c15449ef177d6b2151c7147bba1e52b5&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
