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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YO5J374X%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T131730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIAYWPr2IcjJy%2FM5t0CqjEOTjc0B3XEezfLb9wsnc0mTMAiEA4G5QVMEItAeCyb%2Ba9f84L7BbAIER7NzNCrffxR%2Bc%2FtEqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAjS1VpTPUHByoTs1CrcAxYYXD6g7RA7wYhus2s4ZWYb9Q1zXL%2FFOXFQvqFhw365ua%2FBrEa29MnOAEmq%2BTIV3%2F63d3pN8ftnBJiDht4Th2gNVo65QkDFXHqpc8M82847lJCWU0uE3CUQ1WjKMOPmap8t904ONjlnYFoup0O87tGnq3QDA7rsBBIDO%2BrDRUkC9ZbyTIsEbEpkmsQIOo3UTCe22TrE0K4oy1mHtmTqaOKmvI%2BN5WV4sTrwpJNbzpyJU6%2FZAP7qGw3oUexQBunR3UGKyUSo742tpyTpaiYNybBitAvaN%2BkSbLAepwonHyYVe3j9%2FUvT8T8fn%2FAHQLsc7IgA3eBmi1FFogo7NgN09%2FLVXMtHWQyR60Pe3e3aGBQLgtzsV60yhxVF5%2FVdSgLKEgXkF1o%2FGIaiuPkpjKd2hyBQ8EE%2BSuQmYi7ezxYVEgdr7KpfEWzU7nd4x2icUQlDKkuAkUxUjBktxCn3nyAHyrARs71HfpnN0G8cR7AV08hZZ4juiJsntIam9UJ%2BOAt1nSIBB7lYXavGxtozUXkTtdOiHd%2BSSjPCAtvOpDXcY07XG5xGObooRe%2F98gSXYTNL8kMgsahtRI8F81S9uivULlKmLHaynnJOoGhllzww%2FkfyYWskBe6ILth6nV8SMMi59b4GOqUBXUSfm5h4xYf%2B5DaC9eOOUkzuP4ep4T8BkSlbwIr7XPLmEXkiOA2aMWbXdPOI7Ebw18rBk93CssY%2FKLRPN7L4lCVFSDlC3LaztFIEqqTvPHUV%2FD54RTegeKtY8jvVc1onBbSlcRCN2LhYzpWturfSfRL6fkMQLX19jUZKNpYW6RpvzqcMJu05cahr80yU8pRggBNJqN4Yd2ddgiDFbuEQWNKcdBTv&X-Amz-Signature=bd406c5b8bfbc925b98a81ef7bc9ef55dbb423f21ac882f6e27fbade8ed6b7ae&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
