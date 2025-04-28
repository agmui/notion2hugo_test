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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627YQCRXK%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T161008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDBmXKiIiXebrA7VJG5IAG8r2PVWsZ8luABTp%2BCOw3YgIhAMENBMvxGeYH4jdKrmAsGrR6JZaCBRNVlRx%2FqaXw1KmZKv8DCHkQABoMNjM3NDIzMTgzODA1IgzVglRQNyTPHw%2FJ3JUq3AOiQz5i4sgaYYdd7g8TBRI168w8PWJkhLplEr2x2thN%2FWBsBj27284K2dDzDo9WL7TqlHCGRIRw2Q3LC09%2FdAMOibSI9Pav8w1LMJjDdbuY3a8lW6Bww6OL5nYklagh%2BvoI10n1XaEAgtdG%2B3%2FIap1QRlfoIlVvsivRaaPjDafhIA1GO9pzBR8CpWkED0Co9D9ooUN1XQSDIHwI5g%2B1%2FKEXURazGZlY2W1imthkfQeb4UaVSdvgcccOFRooG3NA%2FXEMRiVgfzCh%2B6nGeKUvjxkfTC5heTj59%2FxXEQR6JbLZlT%2FdZjg754yaSxOVGs4gSP6lCzL%2Fmv3ZhJV6%2FuaxZr8M9DtVtHkPfj0uPnNVxOcR%2FtcvVWNP8hD0k9EFqPB04Eg50GZGasVHSM%2B4rRCHDPeg58l%2F9aT%2BzQE5RsBMJqplITpI%2FzNGlpLfz5E1w%2Bggj3mPSEDJL8M7WQXQpF0G8o%2FBbSq6AnA4q9XMmazkj6qi%2BhVfxNGENbGHdkHova44%2BQCA1wM1LLjXgQUesmtJfao7vxh1ENn0sER6X7DApYlUtdozqWaT5jXYVx40pHsJ4tT1tJiTJDTgABZLqTXNpbksC6W0lRQ8zM4yNFiM5AnkzU5%2B%2Bjn7fbbu4P%2BbHjDhu77ABjqkAdmUzoj5dbXfX4DhIAnWRlQIz0JzezOqd9D0e7jo%2BkU%2FVGgiY%2F1vRNZSwvDQmcGgSYSHAfwPaRC3%2B1XaTJDmifj4C7toLi5dtoa34fpK6w3R1o%2BuJ1Rk7EjjreI5FrJaV5rSe9OcZeascpjkF3bE1Wjuh%2FZP9YUG0cMU8Gk9QtC9cBwYhRNqKtgVVIHTyh9sZQHC%2BygZkqSSU8p%2B4LXoalgerZpE&X-Amz-Signature=7d1d8db0d04aacbd2b38fc5a89b5a18fb7eb9618cd136e6220d53bab277cea83&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
