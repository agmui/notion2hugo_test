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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMKUBQWQ%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T090732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQCyjTOev6iHl%2B3QoNraShCo%2Bafejwr%2B9kk5Vgb8N5AX9QIhAP4i6i5szc5Nc5%2BAk%2BwYAeHB3624d0nOEE6dHG00c8UDKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwI5W%2BOIWyN3SRI7UIq3APJK6JEmvuVipv2EUkMip1JvhLg5GahOHXwXxBBmk3pn0pNhMzv1IwEA7DZZsEpJXmRt2AfITpGD64DX869Uti5w%2BHAYBgPnqNkg%2FibJ%2BMvciLIcqE1Jn7M7FGdE3MpkySDqAqylA%2FT5DAw2NviiFP2QIWzJRnjcjIOb%2FQQ2j4C%2FsxwMJ%2FOs7FcBDUZeQIc7FRsqDxER2Uiy56o9j7Vq0gE%2BCTahlMhW%2BeVKLWL%2BiNlFJ2A14Jv7TcCqXrt%2Fw8Xzr4YpUQixJKNkPeVXHbufD2qbBav64K1uocaJqUAlllnpUxLygI1G4EwZF6TznD4cadN83EPCNSqOSd7KwSPf1dQz6OW0DMilGLbYUeIsNXxP8%2BA78pMGeQ88%2FHrVWn%2BNcJc13zPDF%2BslOuSLjdV5trhmjhYTSjVBHX4YXMG6%2BiyVvIUXmjn67cCJulfbCuWI%2BhaSw545XGxtHDND15uc7gAp2Xwel7yHu3IttL8Z8cW2TbxU%2FL0vZlz%2FELr2IBzsXsxR7%2FMgvO49QxCPtf5%2B%2BmGHXvhwELlSRNT9vyNR6jOXU3erTW5dm3f7fZO4ZyEpCxxC7b9BxHmkjoFFF3KL3IW2l%2Fb0MuZ%2FQvuuaPs%2B%2BU2JVGkAFg3CMo7FapFQjDXo5LABjqkAeGoRpVmKtgwYHhE4TE5v6zQkAH5m9DGqWaiO9N9F3tpm5d5VfnmLU6fK8AhjYxlN3beMMN6Qu4bgEBNv3OAzGyVWoYsOnQt7hzTajNxeg0PDhJsGEvhtHDpgI9xn%2BXz3lSnZl%2FX2sslF9NOkHrS444nwGDY7Vq%2Fv6cl6eE%2BtzcW10SMsjmQ0wVjmG%2FDvRkmwIdHW%2BUzFnZdKJ4%2Fxg%2Bsn1B6HCXR&X-Amz-Signature=4274fdfa0e7fbe60433829b83e75d2d801675b620e38ee80e9a5957ecc0ea851&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
