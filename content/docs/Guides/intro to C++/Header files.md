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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTZKPYKJ%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T061057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCICyBhbN6adp09O5nORUo7e2UjXOiwlUdhFjyiAkt3QW4AiEAozIBfCiBrNaM1g8lmXBxp%2FXFHdSwNwSGxTtrXC0J%2Fn4qiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG%2FagWaNnHEU2EQxFircAwD2KqvDwf8KoC4wg%2BbBxd18sNUNwyo919cdEjPKOtXBc7MLQ%2FnaL4qMkzgGa%2BcX%2Bh%2Fn4OjPaVLAzRumwSACiMcyOiqK3vau34xHvjrtEerpnctptvfqFOlHO9vevEjfqyHmeVRFNPkaa%2FEb%2BqPrxrNO%2B%2B%2BNrfISxzzUas2Sy%2F%2BWWupjWC%2B7nDggnhKQaOtW7Lrl49zzgAA5ZrCW51j5jRsCFEzJn%2BgQs2fq1eLMcoKUS08NCKIUOLCXB5IbETi%2B7R%2B%2BTTPlPVBakxWlREuVEoQoHvtg5PkeDSxjJFWIMNAhQkSYWPifC8OlE%2BwpcgyfBIGww6xqT5CMyh8DbOJeTdFdR4x2FfAFRy7vDWzsm5gv58VyyJeY0NSzHDMMdigaQjH%2BSJJBsSs%2B4OK9cf%2BIqd0W0%2B7n40SvDD7flxYue%2FNxg%2Fd%2BlRRoBrqf%2FT%2BA1gZL37jzQuOmRWvWuP6koVRbGpuYxy79LnAJYnVwvYRPrvEwZkCCxiUo%2BZtkThK9Pr218GChSXaOeHxOT2IMMxSgpPIh65hCcllvfZr0J8ihAx07x%2B9AuXfptMBC0%2F%2B%2FyhiaJkZzetgNrfl6s0LXPO1UR4wdbiLedpEoccaDNKakl73KXf1ZmsxKUdIlbkfBMNbi1b0GOqUBfWwXJTiiddNW8JIY8BSMDmUC7Wgg%2B9BHU8rvAguq1AYMtFXpoNQS4QmBmEqaKGLPfAEdycXbbl%2BCefTQKKbai5rc4DR%2FYwXebznMaPzY31jP3nIUAKJY0QpVPKE3suq9ix2%2BX%2BLn%2FNqtVh2Fx6pKhBjt07g1gDBVfw9OxT2NQukJ2sezf73ajRsd0ktY6IFAf%2F0D9ybjouoFZsnJWrtSAZH4pXYL&X-Amz-Signature=6d81f105a2ca525351c9f6804d38980a5eaf2626d0329fe603c81886422cd95d&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
