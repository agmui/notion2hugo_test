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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVICDRJK%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T061350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE1lOkBY7cENRBEaTu1rxjhCATUMadEI7%2BttM9TPW4JRAiEAlCDNkiBb9LSVtAWsiOdZ3y%2FHRa68Oa7jtu0%2BOcmnpggqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGXQGddSY45%2Bw5LZfyrcA9rMJmYXdHX2CzWxt7Hk5JKBoKORjCO8oGd%2FDj8lip3mJLocLgwhb1sHtVmdGjzVrNkRHZFw3rqWOK3xqmpv2pMmGkxRdSsa1N5QYV2h9YMtm8IjAOkbqggA%2BSkGZEhpGh8a3LdtpNtD%2BqHOuK4MidCawiW03sDGJyPbNelNBLY0dbJce9R3OJ%2BgMTKjwYAPuoLPOQ%2FgHD7DxdFEOMA4k2xYoNyCitQvLE%2FCMutorKNviCRIrIKJlj4A6a3aOYndNvXuao3NdJdFJ6zc9%2BeCa9aKGU2U3eLBCQv6LeDT9slRA9VxBtqUSp8wi833zbvLNuvUpYAXsw11bNg0wzxsucjQ54MHlRTrzb5KXIFjbo8akhkeVSvQIaQ3EP%2FT1fWqwcnRLnY%2BmON7WyNBaTphoGjOCnG1VPce6hCXLa%2BTXAj5R7JpMvvmdB4IjhsbXIaTUrglH3%2BL3XC0b1BS%2FPqcYMYuUiUm6zTBknlHVRZJVwLCFVYnlAldFrbqvQ5kSLOKRlBZXP22ioWMbvvOKRtHn5fwc95t37MUMukIDqErpykVXojyB9oA0Bb%2BpisIgSfopizsha5P9z275uAGidzf3wvtR7T2V1OqA1fAWVcjxYSwlEgmWCTNPEXWuEAyMOCzzsIGOqUByS8bOlGhwJXHKakx0lwL00Ix7YoUCqM%2BoayoWDlFf7wh9L%2Bbh0znaE3bA28ZQkAxV7aKkrQMyLz%2FR1bvNMS1fyPs6ImQEauVLuEkS3R4oGCB8JndoB%2BE16Y9NxQsGRmrvwv467NMCGvvODExwxy0x9vp1Hz0lCR%2FPg9sf2KFAYhOiQ37YgH81qgbdbuO4pDBuyFOqGMSKj01ak8WWxVwW3gQE0sv&X-Amz-Signature=6cf7d6281f81817df3032143fa8b9df63a6f896610458ba1f187bac35d4e50a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
