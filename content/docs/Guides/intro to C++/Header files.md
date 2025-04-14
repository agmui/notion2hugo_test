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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XB2TZFX%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T110727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRS4tFhQ2Cetj5E%2F%2Fpco8UIaP0dICCTBFj3fi47Yd%2FdQIgKzzmRhmzykg6mUUSyICD1P9CfYW0cQT2SyLxvW5ENz8q%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDBL2DtwZh1veop8MbircAwBqRmQbNObsl44f8jR%2FOFYMJ5Cg1%2F27FPBHr41vdWng5VVGw2yi3rdL3nhW9xMuCh%2Bkr%2FXT0A97a4q1TcfZZCsdoErFZ%2FEed%2FxMgpnYG35auqV17y7Lg5b3xrYzJlPHRSY1WGHQnGvUbdwosdyb70BWjdn0xMbuUkGokdcL4Ye2hK%2BqRNC0k1HYjJe4%2F2zPyRqqfSAjd6zO1xQ%2F7Rmcm9U2r5K5KYPzMxCHWC7sUMuQQIVZkhW38XY07t%2Fd0K3XX%2F3aUFHOUyoNI5MtS%2BhYIZcNl%2FrhNi9MHj8u9%2FzYOmp7Lc1FL4rvjQ21iBTQNKSFQAucNvA4svjSYEa016mxBevQjhtWfUXGK40m%2Bb9BgDOEZyzW5I7at5V7KKS5itVR%2BYX4FUKcCQz2%2FGvgjpgiLnvwwFeXgnQQNN6cyouUtPpZ%2BK7%2F2%2FEi90SVK05D9aaYbbc0se82d%2FVS1BLrceP726DtVfgqnE2I6z6Ng01hv6kEeTQY%2Btc1IPKmyyaeiK9Dyss6gHgaK6LamnIH5nmBBbbnxnuDvaZoGmeHa%2F5SL0QmFfDYi7Aaqaw5BRS5Gg1qVQZpqAIVKSmbZYy90BJJ%2FMzsZXmCRwhU%2BGtrpa3EeZKvsgg2nJv2c6F%2FmN%2BXMM7A878GOqUBRjCwDXl7frU53k3ZLwA96udtQitbCDmyJCKrzIRzyLvzONCZqwjaaQV84s2%2Bm41zC6Kg1HJRUokcK7Iq0giKYGZHmMKyXGo%2FvDDoE9E5QAxfLxJiXnD6ObK9MSEfqQa7atAGkJfQQ9ES5xS3b%2FXQuoq05r6pbLf4NgIYlaVB2mUfTjzAlECFH77%2BzZCbLJ3bPMADFx%2BOOBsUSjQx1tuXcDK9Xy%2FV&X-Amz-Signature=fe38f70e4923848aa71bc17a954721d06899276e0cadb4f4aeff1b07f45dd836&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
