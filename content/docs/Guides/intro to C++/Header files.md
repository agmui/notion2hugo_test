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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLYUKYVD%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T070919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIF5iXVowf%2BjNT8CrlhMGhdnf8Giul1V4%2Bo4WRq8b%2BHNUAiEAgnpVRLIe%2Fll52utAxWCFmI44AqKMzEwTaKJUu21ZKJgqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMnCwEYHgrNq%2FgPXxSrcA7s623lffRpztw1y9UHXkAuTlDIPJjh9BOj0A8YgCEOdY%2FOfwtbc%2FDfg88amYiQfL4358Wj29QYNwvvow%2F1jWZsY6lnFPljFiRh4JuOrmu90zBGD%2BuxMpjlDlhDyeK4N3JgaIh8dUBWiqe6hIzzHWTRn10JgUyMWBveHrxGfL%2BIf5jKaTT7V%2BiYc%2FNeTT1XtOOMeEBAvN7VwNMSn6YixS%2B9Ow43Hl%2FXvO820jK3PV%2FvvDUUpmgtpX%2BYBifailszVH6Fwgqa56C02rLx5bv%2BkKR8ZSpCI8FPgn9GyriSo53O3itEeExCbWNUBB1k5%2F%2F3hsZixukPC7HZlHyu1durYjw5e0hSQC7dcLBUZUG5AsCy2XtOrnGT2PuGuon9oTOsnbYfA6wxV5%2FFxa1QQBFY%2F1WBAD6QMuvXzrvU1Q6EIg9LUDD9e3MFrLAWiZHaJ7GexIgCufiH6%2BWCOodG7xirRlxTou8XWXbsvVLLeivzMlFgeyAwwQ4WgKyjmm2nMfo2TC54u2%2F3s8zIglprigORS3heELw0Rc0zjmMMAC05BgfSLsiEVQePW7ZUTngshpGnx3optZC77YYq8FZLwQATsaRIuudsNTCrwx0AiziHK1IGVlgfTZun1mdtHrHTyMJzlqL8GOqUBjpvO5IMRAj%2FFfezpByfzjR6iNRHMpSo0KljEd7EIQPLzkFm4cr1jj5fGFWl3lzCsKN61skEyVZ8I1SNu67%2Bx58mOZRKzOkeY9%2F4QV8T9x6nYMFAuz0mpT%2BP23HMCtwcxrwnTnawodSFx2anFgyEFpouuGuC6EkNHiUjTuBKC3V1n8yk%2BLyFyxx0K%2FM4ppCSYyvvZM3TDxYdjocUcnYkoqMnXVZCH&X-Amz-Signature=327b8cabca644589be1ebfc94ca7ad1249c4cac8ec4366f1b4b13da4b63fcc0b&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
