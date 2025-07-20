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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFKN7YBF%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T210746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHJIublsz0u8bZ4ivgCmfSQ2xsbVnkw2vdytwUFyZfbbAiBE0zayDcPUrmInn05w4rfbGsMEqfvF%2B2EM2YXJjGPNsSqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMURMblFK8plbYlXi8KtwD8VsYDfuTIs5SOXqp9r9Mi8eJjjHfF%2BNQzmJRPdKUJGLtNf%2FYv2YBZ6c%2BI61Sx296xEL9PzC5%2BkJmTFytzVsZ1HFIQFUn50TpQJUM3UuCpuB0RA%2BY%2BYHPIrOxmpbKIau%2FuI%2Fc2c5%2BcJYAZcH03xKEA0%2FLvMMmquXGfg%2Fn%2BJh5HBhHMfIN5oD%2BeDcJCueuyKeiggYLG3uxnaOHxSo7q0zAhF%2FDPC4mEoIC66IqV40J9rPx%2FGkHtZqYOaI2DplXu7NCG2ikX8VdSFHd%2FvipI9TdHBcNFV4dvJhf0iZVk8JaO8ca%2BkDbuqQnmTEEUK4P3AU3eV%2FSGQnNkvAA3MuU%2FaTzEqu6PwY1ajLMAKcRB%2BoJviLA4DsVgrDtQGkVVtaWoo3MoL0wPWfJzymW%2Fnrz6h5x%2F068zxoutqe9tHyddAx%2F8pAEQuBb5xG2I3srb5PiNQ1qbTxQoaqizwqf8KlRYB5h40aDBWWgsU1qIzskfEGiMk%2BuOtJDo5XqrZf5zSMkMLRu7qwOprFS5LhVbX6Ww6DQshYXWuQiQ4AqbyHPnqBH3SHQ1bRR8rZtPL2dSPw9kpwiEJz2Ts7i4MtCkH1lU%2FMeHY34pwYTSVA%2Bm%2F0Zkqn%2Bvv%2B2qDjAvfJz1kjuBxwwtPX0wwY6pgEfkDyVJfeuRCLUoKgUZKmRu1Zw2fOC%2FfAGTu%2Ba5NbI7tzDHMlbttoyfH%2B46aDh943Dqk2dHINuUXqQlxK%2FlddydkVDJqqNcvh3JmwUC2U91xExlZDVQ9tA4shHSLVsIDfZfc92aIgJKneOewNvvFjOUSJ3G2xXc7o0lmtSktUGROAaasXHKh8lECJ0hZtwZip4c%2BnZhgJ40Z1f6XlGvZ2cd3JvRnBP&X-Amz-Signature=812c3bce74e13f86e10f4be9e41239dfde30adea574b78ac84d97a2c5d6c5655&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
