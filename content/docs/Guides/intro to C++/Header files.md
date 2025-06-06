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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWLMZPF3%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T140835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDI1pHHs53lxiPgCHDpdK5qA%2BX9vkjL3JRoUCuo8TFncQIhAPDwO%2F4q7cGrxON9iN%2BeB8IFCThqT5IhrHoiP%2BepYuB6Kv8DCF4QABoMNjM3NDIzMTgzODA1IgxhH4E5C4iuwYUCRq8q3APFvG0GawzfjPV%2BmZA4yg44Bs9j3M1kxayjMq3vSfXX3RduyMJt%2FSLBbIlIS4vQ8MUCXgMTRsZnKmqrsVEggiaqrwVHxFz4PaBQZ%2BaxU6V%2B%2BrjYV0rFGtRXLbBb8Y8A8IT05wIJgwacbU%2BtAjees7vcNHl3yffvmD6zNgjUfb%2ByqWciYPREQq5%2F%2BN3TxoNcY4LGIQu8OWr2%2BSham6coa9MXVjdZ%2BgrpjwOtdgEPId4pDFYoeDcs1KmmstBiNhSfZBaU7ah4hKzlCmwJyyf9Jv%2Fgx8E%2BUzKM2gnfu25y06M6hyiM68%2BVG7h6Z7VeR%2FAP6YSyd1a4nc2oDBoOD9wTWvHoJLjwGa2HGvS5WZqv5b3tKeAinDxXJ%2BKy%2BYZ0DvBwKqImp6ZZcmV3jJpKPJAN8gjyG0zNmf2MgLbExXs5BYZ%2BEZzLSyIqKASzs4cpKQi7X9kkXenzDwunfY7mavit%2FHh0RzUBOZQrGlACw%2FhaK6%2BkLXKCjuGQVDemNQrAJu14OM18M09GxG%2BSb4WqBpq2YRuTTUuRxr1F%2F0U1RDUSk2XCcX4Qd99EWZ1sFpT%2BamIiPj%2BQe2Sazf5l6T3qU1%2FanM%2F%2FmuJvYAXxXDXApEPa1DCLaKQuYMIxY2%2FcTBBE2zDuvovCBjqkAWyN44H9zkY8aq0t4qQGpBp6famiJ5AfOkxKTsnd1vu0mZcfUIR0v3phL0qcPTEHZSMh9QYJZe5wXYfp944p6r%2FrgYp2pytvXGHuJsZ7Lp9FJt%2Ff9IK9CKrckRMLwxtw5E%2Bpqs4Miz3c%2B0fK%2FWV5aMUbOn6k4IvgV0%2Bx7oMGyKlfPLcD4hBt1JH90HWdbcfQRosS2ODr14xGhgPPkMV5IidqkLc7&X-Amz-Signature=5bb17daa49dba66828c6db4a5d366d6492196ceb5a98ddb8977568d3c9fef64c&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
