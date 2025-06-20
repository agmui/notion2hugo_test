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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGA7NJTC%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T210747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFV97WCdVKGgE4jq8OY8an5DD6fIzUuQq76RmY6J6b9YAiAub94VdIfVmiUqGhYfXBajDdqWllQ0GCsdAAOwai6PfiqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbmEGPrgVUR9GaTHlKtwDVLHDcXl17tlx9vSIuvdmd1rHh%2BQqI46GLup5CKWmSu8%2FLI5%2F6fNZ0At30azNoZ9nlNuVKO1eBwGd329cL6t4ZKJI5JNyc7zNnkzuV3aS612mE81Y2yWGlNvOfl0m5AXk7ucsQOWFPdvkT3rePiKxi89J5mUsw90FtudcusemJwxDGSJ4jpMPij2dgUGPPzmBdNdsHyV9Dx9FeIQ3vwuHTroVnbdXiyuCjzqtlbM7ywyTC%2BQlZjzGzbh5n73Mlhd2Y7kzAogQ4Ii92iZhpOYPRxUnjwfZb1RBijoCmQKv9FvhcJTg1nHFkNoedgLwKqZPTebXNCzaHZCgYEhqdCXqxR77T%2F%2FXmPtGBFsMfn0M7FhNkbsMS4T7TVkR2qdV4zdVI2sUJX6s35EHFMKCPj1Xz1y0qt3Nwe7YNkzVp8w857cm0dtDcVj81%2BpaVuRTu6wIUA5ZGfSiUVC5UU8bhzWzFR72y9bmjYFuzgV36nAqGBuvk9hp%2FmYA%2B5epvzS9cNAF5KGG2XnjFCbpEM3uXOoK9%2FbjR3e8ePmamp%2FuEuDh3JQkMWPT%2FI1QovguxwjZTeHSCYF2QC04RbCIaCnRTu2iI7jJRFEMlKGMsOqcYcboRzED4328uxAQYPIE74YwmLPWwgY6pgFEFZzP8zlqb%2BZ%2FCs7cgFb16x3E%2BpiCkB%2FoTd2g7xkpJvHsz10Ir%2F%2B3jQ%2BC%2BqGMJH2h%2BPnNG30hPDIYnyW7%2FqdPr9mbzZ%2FwyJjEm4rHjFP6nOSXhyHxFDRK73aQscws3GVkwx6JgHJBm43wfp2pTZ979J3i8IgBPAyZfVwAb2Azf8Aj8ZHG5kdjWkcFJa0jrxMyD2lp%2F6AOJHqqPBJDAIYTjYDksorU&X-Amz-Signature=470fd3aae9ebcadc347d7683d474cddce4ea199b9de9d71256a8c0c231716625&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
