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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK7CBUDR%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T061218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfuK8CsSbg9r5kZ0GpsJmawIEiSRoj3QS%2FaN8KZA%2Bb3gIhAK6GcBoa57y2t5504RlWKVXsvFViLfWn9GeHVEBl9KPyKv8DCG8QABoMNjM3NDIzMTgzODA1Igx%2FCmHvurh3YwhMPp4q3AMT%2BK%2BW2QgVZFG1rrVFDHMczGS9enBXksjZD5I5nrydEB5VvABaI5uYjII2xsD2psSE4MvgaT9GdlHGh5X0KQEOmNLKZC6Gm1WsYH%2BaaUNGFFUf7v99QKCyGTOsB5ztL4Exps7ZHuHO8aslnCk1zRI%2BeR5LO2Xq%2BcFiMH4%2FMzpzzGbSlbbbJIxMEifI3Rx1Ckauxit2jLqwx4iKfMZf4R5JRRBFFXTtaTlbMMJVRMiQYXq8Wt9LJEr%2FJEni1COnotbeycus7byLnEStkjDOcQQqxG0oEW%2F%2BeBZIYcMyTRCbIRGevrXgieUISoHvDb7ZrgAmm54H%2Fd6BzoIM2QkZywwXDkWH62eefh10COROJR3Edy2tQDI3HnRPEuLhNDCGQPdNjnRkPz50rozW7CYLyoFL%2BR77FfBVdLfBZPvyi4tWU75d1DhMaJRZFTohF0Ovd1y17JQPPqoREQWbdNYbRlFz7jtoEVPhVU%2Bg8odlHyt9hRWV5I3V2y3Z5Xeq2ko7KioSvPMrYyLkh2EiaUFVWgpKoj%2Fokt7cfCzMJKB%2B70%2Fvz79ivQTjo3l3lawJ3i5bdAfcKeKkHU28HVngIQFf4QhRpH%2FpWALMlu8dcmvh9T2GNIGTNbKCmxgnjkRe0zC57dK%2FBjqkAXggzVA6mm9%2FQC4TkwA%2B%2F0S87a%2FAdHiDlQ93Cylxkud67fSYN%2BuwuRxF%2FjxuCCOOi60qkTlAMFuKf49XgFtLOQ7jLwHlJpwTB98OswIfbzlImauy9MSzVH1L0%2B0exGmwWfq2xSfO5iYLproU%2FQ0TF10pmA47IDXgEKMHwn3YpUxdbQ0zRxdIIlahBgHt6i7aAJt7OCrbdcKjgMpe%2FUk9Lef4Ug9o&X-Amz-Signature=ebaed9e6420b0723d4a49976b37afb0ee6bf287b32e95a03520570be76bdce23&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
