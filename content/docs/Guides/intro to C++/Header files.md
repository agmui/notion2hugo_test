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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUU64GQZ%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T230830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQDV8kIQzYuE3e0SMEvLQnBTpljZcGjghqSxdLhpw2lDbgIgE06cFqLgpjiQMBlWB7MepMsVRi5gzMbs4go6NeRWu8kq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDNknIr8yEdv%2FoqjKmCrcA0tTwG8pK9WjLMwvnYK%2FNYqO2mjX%2BPbKYo3c1DmbraaRmWCSz19zRELGfkK7C541WGl3MlR5cL1wV9oLVZMw7%2BTVj4iy3aJ2PCvUJOO7mPSsMkkSH4bcq4DJF3rzUnQxJCN5CBoIpmfkWyz2wmeni8oAJi3s09cJhWWDXvHaDfrezFO4I06Jfo9rEcE%2FgHU4UIREc27y7YDTdX4uREFeQIy6FsvFhk6nN0rpPBLJLO5mfYdvx0HKD7WjUwH30V9X%2Bw9WnJGHprKbCCuW2L%2FGWbURZQ97Loju5LDVfGdxIOqIrRmgoSIeczZ9hZ14mJ7GU3zYIL9X7f475XdDcpS59NGqQg86hr6Hboaemj%2BkfoBl6goDZVdsPLUyJoPabTtx0nQC0xJ7an5UuRQLwsfaCZXHA3rttkb%2FRvgW46z1fyMS2mmXeurPrNmpoLyV98GPrDyLi7L86VyYKPT9%2FFSel%2FIGcdtlkWG8cpMLmhL1h0CcTuUordDn2JQ5wr%2FX%2BfmfPc%2FXjvJ8LAZt4A07ekRt6QpB9nj%2FMhOI8a5mOg%2BMuSUeQzIo6%2FezyZdz6eaJ2G2L0Vcvhx1u2VaQpPXNR8t5gucryShphLXupI0Mhv8yojZRN4clmWomJygLj7keMO%2FimcEGOqUB%2B%2FUOFIaESMgEhoEmMKtEyYn39DBRfc%2BX4N1q%2FHCc3ewCNxpoLyG%2BFRSjzqn3uE6aOqF8EiNagi6y0LY4s8ajyfKFX%2B4bgLGr5x7gEQAs0P%2Bjl%2FS4rTduqQV2sLBj4qiS1Fs99NELv4%2BtIOFARdCMFU8MFqu5JGYMOZwwKdEeFLAP6pnU%2BFHnVLXlvd%2FsnFgZF%2FkJ8nf7swIJP0M5vF5kv1vigucb&X-Amz-Signature=59a1b95b424bff18d7e3b5ea880e4330b7ec321737e1871d4ba05f6b67a829f6&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
