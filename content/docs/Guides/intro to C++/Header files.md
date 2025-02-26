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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7LEDXCK%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T150837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQDCmrn16dU22rl9OfG4yOgnW9JDX%2BdbTnPkofkYkkDoCwIhALEuwMzOe1XNTkGsl3cjqWPU%2BODW4onR7rIBvqUdQvi1Kv8DCF0QABoMNjM3NDIzMTgzODA1Igz6R%2F%2FXUKYUaY%2F09iUq3AP%2BISNpmhZP7gkZO0Ri48xDwkqg15%2FkJrc%2B9bfJk2RTfgEUEhSfszwjmDf%2B1I1Syx3IaOPDUkN9S0ky5t5icKQ9oD%2BwDOiJT%2FZRCN76%2BzYUuFA4MqtD1l%2F1nXJX1vn1yV%2B8fvp19kfSoG4KiEGpw4M3sb%2FuHMQ%2B%2FWlgpOo7nlFCgMEzT2frGsjq8cuM5rLqsWXUlOL23T5jA5gzICb3fC%2F%2FqxPYeqEUiH7aghDjAdBq45CcHHNORjMxBfJmRKV%2BghtmKhp%2FhmROgtbEoMdO2Rl1icuzFtGy%2B8nz73NsBpbW%2FRilEfaRs527dvzZvSkEM8fDeUirwHKycvmZhKV8BUzIT2%2BLJmIdnK1ZK3U4dg3z4ejb53owywHY3dtMUznMG%2BPb0ZIVLsafXMKQLLVEqJEC5xuD66yVQT%2BLPl3hZhqseBtxNen7ADH3%2F63enIl3VYaAPbbLNXCUfjy43CCwgyRnutGIXFKPFxkZmUB80AS%2FgWsCITLXwCGRMM29Jp%2FlAjduq%2BSmOeemJvPFkdHWTG2laRIZfyWl4NbZSJtlDwKo2H5K0bjh5m%2BrOoDsepEJC6lptB2BA1Rq3gHd2IkeHV8hI827rgw%2F8UtnQTGGfzRtBnowLIkVy6TlYzLddjDXh%2Fy9BjqkAVPYGyau3ubFfW9WP92TfP6crmfp8lNgdFD1jCzJOmRigvcjbQVlivtVXiauG6h%2BlK%2BtK%2BCvm%2FappCTvIT5vSKyxktuHgCrKYL7DSGPUJJyHr%2B%2B%2FMoUqhO9fSfv4%2BBPBDJ16FgjQQ54%2FypFI%2BLiL1YlZ7P3UTHTunC1U%2FgtTA%2FWc3gKyQSUwxbdm0MEACLriMNx1q%2BeZ%2B4mp1c622HagOkG%2B8jIj&X-Amz-Signature=fafd45f8b446d71a1b04c333be7a60790dc33d24b3fd7c33be8e9f23f20a3ba7&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
