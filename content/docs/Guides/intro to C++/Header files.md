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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGDBDRVB%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T070746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyUdcXj8lzkthcGnc9hnXK1I9wBykSsNyKdohSD3%2FAWAIgRuVzwMPD9gXQlXk%2FQBsirRPYuwQaSuoXggFbzGd41S4qiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN3a0V6KD7y1ll59lSrcA9yQKKi7FFshIWWF94nz3yX55kNpQ98%2FBc%2FvYvdAMwDLQOyW2Sy%2FJkdACoxqM44fWZsUllzHFw27138UbSO4p%2Blwk1RNr0lwQDtqsxlh4HQ77UnAbIkwrZpf9hpAuyDWw4DtA72sU5cDHFq%2Bri%2BMBrQlQphvqbp2LyxyZ2LU6uHPFu1W%2Fwejyw3D2SDGvMBdflFYL%2FrtvqwhJVvHTVZ5y%2Fpjzq2U2Fk39t6GopQdG6DkD2UuiFJ%2BH9EALwiKpNVJMcJVcL7rsHAXS99aHPokyqyh768Xblsst%2FHdkVlapNQOMwS2wVjGd%2Bcxf3juGeoPuAGw9OAU7wtIaiK3YbHkAIQ4y3jGaVNx2abRbaOgof77ouwBLNpWUmzRW7ipufgR4O%2Fjzpkb%2BkKGocyYdA2WnZmKpjhBS1ebAPkvQODUQ%2BJDu7EoGSrqT7htjW1VgKHoutwlp4crnYin88fy8Q5XngZTNna5Dd6WBjzwCw3xXtv3laQ93SzfnsXW%2BYSnH%2BQrpOhBtXph8d%2BdUWCKG1cxuLrRqND6gI%2FibwfjvdpW3pWxXtVU5D2kIpKS34VHu7r2CirXT3VbYNHID3661pDwAtlnUb1rl%2F2RS8W%2FIWaAPtyIuV87zUSi2GTwKaeBMPfjq70GOqUBIjbpI7u4FYMdRAoE6p6UDGrUfbzi05WkOV9tmqpGiMTea%2BTWSnuCsp5VERBaTmxrSmtsgeocQulpBuNLjD8XBEEn5DVlpIgYaHRdkYZMSTf7vXnaks%2FwyA0CSjJczPFC%2BFc6Fn29l6dchFvagZUEqS8EYh8Esw9zv9LYapzfYBwWmaII40LYTDIyXKUJ4CQmpAd3s0uRI3FifqR40STSinVjYKXO&X-Amz-Signature=6cb8a48634fe7e46f6d08e71e82830d9a6f54f61f685563a4bcb12cadb885f50&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
