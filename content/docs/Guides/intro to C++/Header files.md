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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WUBKT2P%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T110851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID66imCHwd3KXXvQAThBvFnRBE2RTBDFNidDkt%2FctDXPAiEAp2T2RausINIIEXAZrBJiydpa1AHgLkSi2It5C2RSYwYqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKtlVi6%2FvE6beDyUgyrcA5I8LwV65FwLNkEBXVpfE7Gfo%2Bss%2FGnzWu49ZtNmfkVfckhlo8anPcZYhyhb7S94kk9alChzWbc9PrJ863KbQZJGDua01yXQWpjz2g%2BhfkfHJ%2FWolxv%2BjVbjAPD0lPyif7dmYdekKMP4Or4S3ga7HX%2B0xvU6Ku2X3SuSNgsztfsOUiPPEzLmM1NUgCF%2F0h9YM3etSGZzae6dr7lINRUPgr%2FdRg6TqEZ0T86YFx8EdIzjtF6SrJ6wwo6RPP%2BM1ub4NyN7jERMMCr0aV9exKrjngQGGD4jpKmBZ35PUd5uGxOi6%2BFFvkrmhOni9MxGBhcZ%2BSDjDW7nqML%2FCLQeW1PYr1dhuXLcPsLCHCr1EeXtXul4LXHrd8cPYvxJIwETstS4sLLBvo5s4eWT7QCVYP4lMCEADVdtdC4y51Ta%2BgB7xsSK8sr7b8zyJGkexa7LB7m82Xe3WyqZLDTdTzMiU%2FVo%2FvVo9yTWgKHHsP2Pp2goDyL%2FZr4f9Eyeauyh%2BfdWDUvyMek3l3SKBOxG3K6VvRW%2BoboW0kdIB4esmeOTiF9GTTCwnw2MYXdb8QuUrEmyomxbcVGFkKrn7pD2rpikR3UsyodDyoVbt%2BMlTikRH1oYrg8de11XsjlNp4Js%2BdtNMJKarMQGOqUBCg9havVcyI8bPfqr6KO36m96gZi2ZNNerM%2FeSiB0PuO477abbVTBtzsF5kbe5yZFOKO6lid2SKrfP5SG8lgOidZhMIVhlkAO%2FmeaKGxnoc%2F1c3VkgosyTMXMFoyt9l4uHYl66yVevvrc2b%2BO2BPgJmIt6bLf0qEBfi13S3%2BsDlixG4VDwXv3fu%2FzNLsSXiCooZqWZz30VJlMbu%2BNGp5Ss2rRAsFP&X-Amz-Signature=e73dc4f313e82d249741b4a26b1a1800c854e456cc1a6dc272b251912a1d0063&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
