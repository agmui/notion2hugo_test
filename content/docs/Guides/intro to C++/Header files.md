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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIY2OH3F%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T170930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCID62go%2BzcHeZ2GZeMT15ivWqtheqNV89Wn321JI4fzGQAiAzdPk6hX6AkTumKG0NBsebhRZDsfoIx%2BD2DB8iGF7ArCr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMc%2Foyv%2B2JDsNRO80UKtwDPUMURBH0Z4L4afYfq9Zk9LY2z2M2RF7mmVGGR9YBi7n8LUtY1Vho3oqpL7kyRXXGi%2FDyGki00Ebijua8DcWgOvGyaS%2B7Gajof0gDOWd9qNOmbo7ZSK%2BTI1amOtSaKIAIm1aSl6HVuwCLXMbDPNWNw08g%2BxjGm7b%2Fk3UrRMtZU%2FwdkomLxL460O%2Bp34jBp2Az9VCW4HFahhAuX6UT%2FAhfSWzUBkgXQpq6lewTW5NDFjJnkygsUAs9reNb%2FysB2TG8njmrYBx7axziJWXDlkLh%2FYOZdLVYhzV7xldEGjuXDPbQ26WYLre1IRR8KHUmsx5RwHk58pe9473z3KI8BwK%2FObm8ZK323eIiAuHtz6L8C1G%2BtT4OCsLhyST7y8nY%2BhQlAqFHOrqjukd3WBt5NSDGE7XP2oJbZgd6icZq1pvGoVAY6MmdIsGfPaBoDL92KbzdR0Le0C56%2FBx%2FyM8aMsCMGUYbYtM4bAz%2F0Zb0JxJkq2KREcAOsJ1nq6dmIoALBO7coMaiC5zK4F%2FPl6CSkPBoZt6anFlFelJnXqk%2BB86Zu99S58OJYsrsaCTZsCahLYNpVmRlBd7n86MMwdvtFccnPjzeRKrI7ZvEH6wfSxMe06yImqyffBaF2FuTjBkw2574xAY6pgGy5Xt%2BKfP9mbQu2uUQpGMrt01xY2mCVgCViFsyP14Z6O0aqrtIL3t4W8GEC%2BoandEtvNpt07Dzu%2FqX2sAAHiM8L2HRf6GsUWUCk2zhqXaZNKXag%2FCoPPzW5au3JqApkagatbq%2BUhQbUmuXu1Ufw4dgWpHL2WhROFg6nifnG%2BBP8R298KKZzmNn23pP5iJgnSgJb%2FqL8sghJMxD3%2B%2FJnH6GQxUmQliR&X-Amz-Signature=1fb480eafe7d716025e699d8575e093bc503458e2f177c1f23f1fe00cfa4e2e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
