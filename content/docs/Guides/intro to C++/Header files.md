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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZR34BEX%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T061424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJGMEQCIEohDUpkzYro5eCFKCogNJ2btOzDvzRBsNe%2FBZd84aTQAiBb%2B5coaN8MoHpY5L2YQlf3Vn8nJsIUmZAStRYz%2F7ZNqSr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMTJOHFZnO0%2FWTb6owKtwDocgK5WKClUfhMNHFH8dRPerW8zbm2qxuUfKQsdafH31QQmW%2B5aBcBGg5FjByOF%2Bme2zyKl42z4Va75BvUPetjMOk8U2BVkuQND5%2Bmm1FLa%2Bl2r%2Bidkpne4NWqeMsH8M2vocbY%2BP35y3E7jGKrU7EO2LdNC%2FobMGw4dUhRGmTnqoN6ZfsttBBn3VKoZ63anq1BGi6D96Mz0LtPs73W6xjx4QGyeHPdkhCWXNRFh%2F1KP5TD3NOjHG09%2BmUbDBDod4fkOu9mkMc%2BfG3j6fqTtrMTqtgPtDUqGE7NoLaFb26sMzeSYPHXD%2FKRSxCPLw6Tg02oZN5YQ66fLGC%2BmFlQF7cne1j0lP1q0IsbhNdS9tJWCOSufZ9ZrYF1JewL63bq0TrSO8jV4SlvcioTosmpub%2BZ%2Fvko0%2BevW%2FhZN5OvFt%2FwQmeWVKKtinauW8b%2FA9q2K9MutYRnBEaP4h2CWqo7Lm%2FewsBT86coYJHHnEb35jIy6uhQnhPCVd5K2UUnDkXdGbq8OBJyk1zKjodr2M0Kf7QCWmIp2HD8J7jK1pu0rm7K0vFImByz5Q6DO7ZSzV343n524VOtjGZhmmO9S2V%2F5ugBMn8%2BAsPI0CRz9MUvKh7S%2Fd%2FBg4bGDjHV12DqT0wiNXXwwY6pgGXHFfET8ABraaXfpem68iN66FlenCgXi7QBFJayJrpnvpoMyrudmUfr82xL0Sl4ccm8XeWO8t5vTtF2jaFzt6F0IrN2LuI928pK8qut6fmB4sDli68u9DbX%2BAEt%2FIb7yfYk51UsxJH%2FOfKhnCTae5OjLcd7OB9Dg6XDwpdET7MpMhnPMFTuGrhlPzsqyF0DGHscgFBlz%2F0diXKd04XjkzvY8PExa9j&X-Amz-Signature=e35eaf864449675e3a6923bb9bc13516cf3453aac962f3d32f8053494202140e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
