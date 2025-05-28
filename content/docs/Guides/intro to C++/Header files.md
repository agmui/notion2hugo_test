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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642OJB3EG%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T200941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFA4yZHjeE%2BzOD3J11SMq44pbyPLri%2Fbk4GgpOe3pTftAiEAhrwb1qfE7aL%2FYwJIas7LZRxSyVliSKfoHkXmQGq0WPAq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDCiaYPjk0utRgRe91ircA2%2BW4oaDE2blIMqSClMXayDUtbc%2ByKe2%2FEbsXYBaKFuCV1FCJDOp9QnWZbxQ4cbqEk7TX0ernRYuBLbSFyIrm8UivBvcTTYPawayGKLZqMwS5E%2BAfWIkd2nkfbdATMwpg8BjGHzluD9wVBGw2n8KjVUrvFa%2FXYMR8YezxVIttQu2cBVZPTuO6sY6rgZ7ioypG1Ck254VBe13bSHAkjxZBzfPCzEXlD400AfFdCHHzzXrbrufebEJNwEg4hPKH5XApA9XenCdFI%2F2opX%2BS0Ydd1ycZPuKaEcImxAYvKX5S2%2F2TVdK5feeQHG%2FZNyj8561Rzyr7%2Fu8YAaXi0DLPrWnVOM4Ygx0sFjpoz51aalTad12ygOGfXk6e0ZFT0umRse9kt2%2ByshasE56zWdWnEkV%2B153rNP%2FlC9oJMzXNsuETu3QV0SoZuIlLGPesFE%2FfQ9i5MlvMpjnOCsSC0bwp3R3EeypI%2Fxzy0QxF%2ButTb%2B%2BMy8HBTJMjeSRLzlvMrikvnN%2BoL5GOC%2FbtITTX59Y2yTFfjsvIwZeG6siZPKAmGdeKAaNjjgv11kcyWr8ZKcrjUZQuOtMDkKub97VJqwXbxf7NHTjuG9w%2F1fnCU%2Fj1%2FXHA5Vh95e00nD3x5kZKtObMJH43MEGOqUBUhbB3zZvH%2FKBNAJtywTFEvWzHebIYPkt6Wqb9vXk9bh7scPZA3EqFo8DKFENkFx5D8E2zHRoeo5XutImA9bllEjSbKsPBohjKhy%2BTseyKB4N03jxQZzeNQ1BDFGVQoyaMzhs5qOjaAUw052yInUt6unNVauv5YmihotxdDo6Fp1xuneAV3LHtyx9Q58CRyVGacYMBVuDLR06VQwwxUx4%2BkxoBhkJ&X-Amz-Signature=25895eb7251cadb310a91539272c0b3f8953d755cc78c004040b7f548bcbfe9a&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
