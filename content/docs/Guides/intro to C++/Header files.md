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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EOH2XGU%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T121541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQDmuywtceNJyzgxQwyUV1DV2qlV%2F%2F3qMxhfhSAG2AEzdAIgAWibVdfGkZXUyfoact4gT5doAWm2%2FchCYrOVmIAGhdkqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA57ndnLQTorVWo%2F4yrcAyEhds8z2di4hOdBQ0rK7zYIfoanavQ69IXZzPSssH9Un9Wz7NVledgsibkuc6q9Ak%2FiceGofrg%2BCejdSAiGlAXJP%2FZT%2FcrUM5QQWzsgS%2BzASj1Zo6LBH1S3Tj6wwQBSd9urOflzTS1xI2acm0TuuESFmrME6tJH%2F3ibzJjcbjFrMwhyWpwzO%2FMp%2B6zm1FoPeC7ueNhoMMQW1MnShUhA39HEppfHHmHbfRGwF%2BdI5IpHgGpg5JmyMh2MTSCaebeSX3EEJ8ln8q3ihIoVG0XxyHjF8WIUvJTriHp8F9hYkQ1ijUgeSnRBKN0f6jZ8ZPhXGlE08upXy3Dxyt7wZM%2FMr%2FG2A1QAwhUHv1EOB5%2FCzkz2hoBYcormg7G1x2sMnl4RWDC50LAavPMbwJffIoFf6iwYnKsLYb5y5EVc6Sn1XCKvbKMCl%2FrWlFCzl6ZFsSE7zo7NZ%2BV6DJe0TWyEK5tAnhFaHfdEXNkU%2BJ0M9lIakOgILKG3vJA%2FO%2B8pJahdBgUmRWSh3LrJRGNzMYM0KUA74HhSIp7k8Mrrmn%2BSRR%2BbKkjVotOAX9ai9IpG8mlgE50400w%2BJAv32nPzJ3M9SARhE%2F2eO1ZKjw0kOhhtYplXrXclQ0fqSIN4AKPr2eMXMJDvtsEGOqUBB5DS9fjRHvCeadnzsXIoZY7lV645bfjJvWpZEPzHgi8YYVwdGGyAO%2BMco8VR66d0utA1UMzN7ERcDMF9d96z9TB9HgkIc1WSD0viAIopNoB%2FdGyTzShMJ4K2CDoVwGqkQbgby0lUbwxGgDh6N4DfphRF1xUAIKukTNLTaaYkQFKr%2Bc5dsFVSKDVFow9QZGN0x9GRxZ0d2tK3yEx1vB8vSujDWsmV&X-Amz-Signature=9c546245fe35fe9c1d77cb2eaf01e5003b1cf2c1a34e689cc2a6d98efa6e945f&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
