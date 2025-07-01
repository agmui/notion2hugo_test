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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4ZPXK2S%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T150926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlu6xPZM5QW8uPuQ3fRc5JSnEF2jejm9pvYAzgLuKk8AIgUUt5VykZEUlKVZmZKgncJVgdK%2B3kfq48vQC5841yXr8qiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNp%2FpEIvXLkE%2FE%2FvxCrcA7OhtKe2yazhs3OqekwxMIR0eL%2FBjy55a%2F3Iwl%2BdxanL%2FtMK3Yrbu5ZhowI1AwSmBhnpXKl%2BP2EtGSGhwvPaIQjXn4Q3nMsWgN7ZYGF1jjVbb16v79IyURGnSNWy7409wx7dltfzrkxiYLLAdCND3EDTtK3c7C5QC5uYtSXQ2BA3wQdv24cKX5fobq7dEl8%2Bqs8tWUMEKRwn582%2F4bhsk5GAT2GZUqVEZkpba1JjPExBGKbcRLCM9p%2FJ7v4nywGC4UlkBMgXpBXcbyvU4mH2EjFFKfpDr8fs71%2B%2FCJqYZuSu%2FHyitG7%2BD7sgNOgjoB%2Bt56CBFahbYyqpkt8Os3OW9%2F8It9bLmWQ6Dmw0sGAiwpXVwpnWnV5I6AwqUr0xZUiHdoVlyF9FzxfG5KRmEfwHqp7mZesFUUZY%2FjqcfaNUGtkSjx71apjflzedf6rTJZqJD3NyQ%2B8TjmFo7Icf8HZ%2BR3PFLSaiNNACTxY8xnNAgyE8VC7DMkeNtWdA3UpEzxZkivM6q5T2koMmmGZ6wiGH0yBabqAQiTSdz2blzqfLrFULt69S%2BwiQoLuAayLznB1OpBCD2YaqT3O5CUJHDIggaMTGabFQKVDPyX9UYYd2MiMj%2F53PfrEpl%2BSZpKgUMLDaj8MGOqUBDHIUKVK6ZpzWyL4CLwBpN7rALAH39V9NCzlFJIJIfv%2B6unXUPO7wgtLgTUgLY91%2B7USVkcgNgdQuOhbKTosnrLFm5xeNks7w%2FMXHJoMrN0nAGi%2FhxDmi5cjtycligEUEB07ZWzCB8YoucNxbL%2Fp6uXqB1WUc3XGFBThToxSdBgoY%2FaFjYZ3iHt3x4579VHCoO%2FGroVKe1DKSH43dsdM%2BXAlq2eSw&X-Amz-Signature=8ed0dd10bc4a0e1d64235187fe804c4e9f58d9cb7153663a88a87ca5efe08850&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
