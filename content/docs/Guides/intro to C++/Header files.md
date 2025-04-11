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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IU6ACN2%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T003936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIHVC9P6LwwufqxerYAamciCWmD12wFf9JIOlikkX2N5oAiATT3LClmOknwM6hOmEQrnCEoiZ3hx6TyaPAnWmWyHsnCqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTPwtdaT%2BGWfXCzcKKtwDiXnGUz63O2UPywGEbEkCffHngawoDKgwdeKtPTlTbyJAXG%2BVvquRnfQHIkOx95%2B0REEwZtm5eNxl%2FybMKRMwM3RJO9NjkyEgU%2B7SYyZ1FxVjkC22hB5LoVsIp62ca%2BuzglIRMig%2B3ivVzgasjtMTXLoEcx%2BFOYIZyNPYuaeyHDXMOPYkdO%2Bip7j3wqEJc7rfj0VdmMIN2TtWKWpAfeOJY%2FgLoFJ8%2B2CrW75347aI%2BBGLc92uZXkh2l%2F5O8o1JsoovbxGYS5wVfuTkTakaXb2xX8b5IkiQo7%2FZkK7uXDIOWUmnhJfNuv0%2BAzS6%2FiycZInH8RVbL3rGkVmhGUm8i4TeRcXu1gWynOvLM5kD%2FtFrPR6XV%2BluZov5KJnNigvqFFGfywb4Q%2F0qAbNQ5i7d9IXXeIXeyRo%2Bs8OsBi7XGuTqfa0ZogvSfd%2B1aR%2F158pNg2QOFBEpqcsPJ2lgFIthGSE5UYAQHwqhNV91Qy3l44y3jTGUSMZne8eKmpMuRqI6mE2d3WTgpdCWsmppnx%2BHw5sjhFXOXmcKdsM2rD7cVDzfc%2FHCrw0LyKKAqGofyPg1T9%2BEh7wRgwKuSlLXo%2FYcaKzYWj1sJL83Kck7tsFLcvv4fB3xKJmkbgWUl%2FgH7swgMPhvwY6pgF59CABPR%2B35M%2Bo%2BaGqcaOL080%2BE7v41xFA6GwPOem29LuZ%2FeJvj85O0RNqduX19JsJrO5PW%2BsK99ihOCi5OEOkfTmvJIuIsyF4Jf%2BSVfG77t7SkFXoL4N0FpXr4tZoltUZhAcXp%2B2FwfvIevJIRmxXCviVTtsr3%2BccYq%2Fvd3QxaHYWLkOzhJwmdD2dB5UYXeY6Et6Z4y7iErUvd%2BfkBUSNFtb5ePrM&X-Amz-Signature=39e196874fc6118ecd7a15581f09682958cb1775d7181523a093bcb27001221f&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
