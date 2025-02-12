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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIGMPQJ6%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T070806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6Tw%2FdfzJXOkBpQNLo2Dlig8anAFd2guKOjFeAG%2BTj2wIhAO6MXuPCuxOXz5mED7gqx9TyghnhaF9nGghCGT%2BCpbRZKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzQMpLFG%2FDFZr7YT7sq3APloXoJ3agRRC6lE1fdWDmNIUNQqpHIaA5WBkQYoZrQa%2FMh3I%2F8aOb2GQJ2R1ns5XdQS85P8Q1uMqRUle3YYZx7uQ%2FU3sl6M07lqqv4n0EQ6xMu9OZc22UcC0%2FjIcwqRP6ZSIiNqIAtTrG6bM9CukkFMCb057j0JHqQPbdV%2FkfkE2geGPNmmqjtH3nIB69I5onoNmZcD3YFiibr6riLvV9%2B2MWgpJdgaCIoxAlVZUmggVp2sW%2B5nWsz%2BjIfod6JLkWKgSpT1W5oOR1n456y7d60p2a4XqqiLGezmYvvpyVBWdn0bJZVTDIeSnCObGsVZoBjszN%2FeMLL9OUS0cJFopbBljl4LYZ1dITaOC8hlPCVHT2wu%2Bxaylrym5xs1w176%2FQ8%2FRukUMJucewGG1IuaBoYbGszlSRjl8g5gjieXwhFf8Yb0aPgG0UritpQia4PuWE2%2BWMRHdb%2F0JC5Qv7%2B9D0QemqC5kddOxcyySxsHprxpDGG3JqIIwvhQ7Ym33nhouYAb2psTat4dSdmM5cMbdb4ZLbJLDRPFj%2BmOAQIx9WiXI%2FZuBIFcEozzBoiBtUJlDQ5YCY8mdAwCYQdJLf48MVJ3L6sBc8sfdAn9lqf4UplHt1GWeQhXlRzzCwfGjCBjrG9BjqkAdKvePCcNb1FhSnykJjzKACMpOnSfaGEf5ve%2FL%2FwG3pHiCd2NLJI9SfxEReRk5pFL4liN8jSDLhnYSG6uk3KcBHaWXyPbR27UZIt83H5NqQpaEAh%2BYtjRJQ9UXdiuRqcRJTY7TksXSXp9uVBwkdEY6WiziNCPnQ44Y%2FkFg1WChSDfVkLw4EXI8jnRAl2xy0D4LWIx%2F%2F7WkjMmRMZPaIJLIhB8dqD&X-Amz-Signature=251aa33c6502dd6bee5da0f84c65021911cc6e442929fddea70e6a89710b7af0&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
