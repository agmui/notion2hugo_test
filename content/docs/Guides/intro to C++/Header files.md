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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TS5KRIZU%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T121600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAbVOJ53RiwF2LUG2wur565g%2BXph8U4thlrBEUwZeZ%2FdAiBaKrBkETkxrGNk2FRjU0V8GkYfDfpsiQDbTQW9sy3i%2FCqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQCQZB2NcwBxevQhCKtwDtVxNrPP%2FKIqe5ZqWRZz%2FYSjXpeOmv4Cu5IX2eOUi2TObJooYzYy8K3FPsPak6aKR%2BI%2Bs2naxBbBwH1hR0iLxexkqDOFv1QhjNEfvwAtYPQEQpqQoXETtvpLFRN%2Bu6AYKDPUWhoQo%2Fy5kfK498qj%2BnH81CkzjNEGRXIlZibKpi5sX4mAodVMPWij5sxULQppYtq5nHlBNBPKG48J%2B1WK%2FgsmcrD8Ryfy8OSOomyxnZ8XIWk0wlDNaCpY43T5ZZxKSGCcUB0QKv%2Fo%2FbuoH0f7oSdPuaAYhI9uLbuX%2BU46%2FC84bx3JUpPuSI91S3Yf%2Fgv9R%2FTP6e0fWqr%2FZlFweXMjFZz9S3%2Fs%2BM6%2Fv0ps0IX0jJPdo46OEsknmAd6iaIJvcWz1DJP0%2BFh%2FYT3cRp2b%2BRhU8FFa4TnaVbVZEyACvJNcjLnQSnwmSC3veEPzIaIkD1WV6kFaPmJiJFJhiWUYHbdPcTU34ebWC11aSee4EYhoLiu53x29x%2FpREAysN2Ig7tOdEw%2B1kujsYt8pNDCinFXo3NN4FbNnWmeSy4dgYyIHyrV1V0qQ3r24JOTH0JyM7ug0JBlVW2Y82fc%2BCsFL%2F3ut8Ex1gI%2FZUWEdtSvQ4eTBMizspIwrZzGgcZmOrQYw%2BNqxwQY6pgGLksetrZvX%2BpDeq8h0jyeng2aG9m%2BKfj4CchID7NS7%2FRDGpxs1d1aE1hhHo17I1tugLWp5oHYasPGRrajYa3ykPDb2OfBUa2KVDAJDqpSE95MLNyy9OeFOnYf4NTbSHuQm6t%2BjlA2y9QwlrVA%2Bpj58%2BXwWPMFzlnAJZh5c5a0QR%2Bz8ye6PGQ7XLVVdG7BQvjsH85DNEkoTJLBOirdAeEFHFmir1qB2&X-Amz-Signature=d7204691f39db84f5015ab8705226662cf56e337d5180c895de179233d83a8f0&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
