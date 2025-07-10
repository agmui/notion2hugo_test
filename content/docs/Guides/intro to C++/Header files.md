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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RKID45I%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T101007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcNivpzjwG9j2lvlLz6m3W%2B9n5%2BmaZmZdqsFkOXOx%2BTAIgQq6k75OPGoQx%2F7i2rxADszqJPeIpXkV7Xr2URs1Vv5gqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL7YB7Ij%2B%2FcZBM7Z%2FyrcA6yk63%2BbU%2FmQSktx45Bc0YGgf9fdVTLX%2Bg17AlsaURCu8mn3EGFo%2FSadA%2BKNE%2FZxx0%2BvrwV9%2Bx1k0u8C3Yi%2FHoc6EpVLauAL5MXtDjBPBsyb589XB7Mn8isfCZgixrCe6ibLgapIkxzi9HubpQVweKFC2Sa49rDktTUimNDwqfwP7HhGwQ2Q%2FgF%2Bmj0Zz5UGFPCCoBUP9mTNciXFf%2FJYvy1WT4E%2Bj7SaWwxCRKTxdWKQtwuUYYT986yTGwJWLdtfMUK0f4dQ8we3syQHgYAHP6Iujm%2FyoF5xRIxziudO4sr2krmnNDC6qtx7ZYI8%2BcFB12tyLe8JDUrQmN2y50psatEnwdCWKxbenlQH%2Bdf0GzCpwVkUOkODq%2FnP3f5lyr3Y5V6QF8ToBcMVMKeyJLxMRLwS193ncfdDfCkkBM%2B3YzZRniLDbgz440MwKXoEDP16QA2GbsO7VDFT%2Bu%2FZ0MQrQpVO6anz8aBnZnz%2BJpkfYLUDtDV0ladnkGLdRTzMWbjqG%2B2hoU1YmuxtSxWgsAm2am3vApAetbQ15VrBfsCz%2FYqxBWhcj21eW8lby9oNLeYEEenla3YP4bjZXK50RE6VK1SFetgigH20Pd89uoPw0Zo7jC24EqByAZEtUZb0MO6BvsMGOqUBM18i%2BqE%2BsLhi2Uw7fkGwEkBL%2BIuqCXBUY2r74UvRca0G%2BulsFJXpf5ODJsvjKTRbi6kAHffRKuo7WwIx0glJIai1u%2BQ2SgUo17stlJITNsqQmESzxIJWA2Jp%2BCz2yqIzprbpvaOvbk4PFURsgBL%2F4kZlZFOAZCDgJsle6BUkWpGZ6%2BbYhJJGK2azSqglmSU24T%2BnIWvWl50aBbzi7kFOE2RqDcws&X-Amz-Signature=00b40c103de01035a8b2ca0bb428b87b6d4a6d4c747020f5b92f04e1cea13642&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
