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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WC72XMGL%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T150946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIDMrmsqHx0NROvt%2BcpuA12zAmAWT8DSkQCnR3F82pOfYAiBEi7akWuuEXkzw%2FVw%2FnR3nrZFDN%2BmISNTM4QlKUQHauCr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIM11B%2BxzlvrNKGD4mIKtwD%2FuEHFjK8L0jVeMcacbHxYerumiNpyCuLi%2FcDWjOYo4EtGIuZV%2FQ3uRcKrpZ75ajqShJ4RbWEWCr5RARpKFvWvHb3k18AZpOIG6hNPvvYT8evnOIKFoWO%2F8qs2YwxmagGPeJ5mAgnwNGWXOB1NjSBTgGS13fOCEJ9ISwm8GesKfkVfLPl%2BjW15qf7lwwUtZmaIDZXPj14d3o3jlM1iJabV%2F%2BIud2us5Y4gs0oFsmtPjqoFPHvBxi6ZHnwe88fEykao8BJES%2BwkcqFfjyx2qEPI5IANsJFb3qUqMeNh5KQRp94NBUsjg4Nuq2egNJxluyCKVpHyWVijfcMJmDRgmEpGOjJQUG55L1zojLgYQeV0uLD3zOHLrjRqKsBTHRc0J6b4vC5X18H%2Bnvxs7DsaoVqONJoqWIRQusIojTh%2Fc56gUUyltrVX06LWstGi%2FaetCBDxj7ml4w31IwuphMd9Y03KaADe8z25%2BKnaiJKjfH4fKBbg32OSa3kVHJ71V%2FMYer%2BSnDL9UcAA1sAekowEhosV6VwBuX6TAywNhGH%2FXXpIE23%2BZybKV2Jer4btKekyAPIqQ%2B%2F3ZJJHuNVf5wEfDlhaiGOm7DtqAxa9VCFuDAe%2FH2BcBpp19Op8VywG7YwqYvkwwY6pgESy8Jh%2BprzTycStypknOc8AcI%2BOMLLh%2FIjIFX8n9Bw4U2gClx0oLzKChzHeVrzCBwm2UQ4QuS9n602JRTxwfrJa3PasHPuYVlg0Kmndvgw7J8jPZlqUARSAyAXFpg48IsaB43Hw4w49xZBG9eFUABlGBbxVYHvoO3VSQWWVab185R2djFikbaeJbTfaB1sxl12BdjqR%2FJ9nzAgXS%2B4JFjj05gV9DeO&X-Amz-Signature=b8f8eec5ff4b361c0ee3dd2cd1da84c8c4f7447b6bbff0517c15a3acef466339&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
