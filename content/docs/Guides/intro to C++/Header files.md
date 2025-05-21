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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAAZAZDY%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T140907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQD3jLLH6sbS8kBaE8hMnXIF6XnjCPBUUAmDlosfXYbhWwIhAMtkMT%2FFbQYr%2BnyAR0bjpJG524FRm5HccIT7y1ThU0%2BBKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxfXSYJrQMTDtuuzGUq3AM25clca1fF7CiNa9097eB5NrGEfAfBY9%2FaHYPxAtuiGL3Jmyo3VePorC%2BNAkthDFlgATbvvsqzsmiGm%2BKjk0LI7UA%2F%2BvqTTszUR13sJ2YdkhPpPdgSNWm36yebJlIBBbj6VRJ1ocFUcMlPWEE62umm1obkXe3iTCc%2FuucWDlopX%2BkebLYoBzYJroEourMx6cB%2BRDado0o%2F2UD7cdDvi%2BX2MybLVs1Qwmx6KIFU2BON%2F18TYjHGiXRp5tu8Am9vr%2Fxk7oDWWgILCLHCg%2BJoUEUrMXiiHeXtYfAuLpDw5C2BFb%2BCh8JgZXchVVpdAk%2B%2Fi2ADJDaK50ZCw4HzLvP0UfWH1tZcypoSf7TPa4zE2Ny5LDpedjguzxjhH8RDfm39%2BLHdKhhMhTePrjVkAOq76IkmZTyVCRRXBs2wgknHcy75GBV2Ok0vaa9ufvMfUoBwrmemWVOQ8GluIq59GGkIO31fyt7DFvyO%2F0Brc0gUNtI3B%2FDovRIRjxVgh%2FwB5Fac6hG%2BzqbLbjHVQORmTD1cYuLjh3gynKVsIUktPOSqX3K%2BrAXYniWzzts0FwE8jGCADk9ZYwYa4hJfxIB3zS3YuyDHFknK7S18zMixbJUsMffF0Gyh6B5YLYNcy4Cy%2BjDt7rbBBjqkASa8YML0Oj8n7XFtm0nhkcUPMHBcnEL96XA1gLHW1wdNl2P32joqS9Zan%2FylYSgp8dwq%2Fj5ocotz6lwMKI9rtzI7NvtnABlXXOY7HSPupW1RCwOq%2FHlWLeU25xIz5idWu6JdbKY%2BepXiR9P70Mu%2Fi6uBUVtIsUCV9ocIewyYgcbVfrVT53V4ZhXhE67YZV8NOgTNPfdsX8%2BBD%2Fk4H7V5Dcpqf9fQ&X-Amz-Signature=1beb70f052a2fb24d06eaf5824885d6dc6d0132f5af7dbaaf500733a5e5f2ad3&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
