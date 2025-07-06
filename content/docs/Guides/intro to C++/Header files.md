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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJ3JGNLX%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T061214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIDWkL459xRiRMfL%2FH77zlzBy%2FSs0yoKZcHPuTc3gFFYBAiBkAv8cF0tBRNd3A1tEnydpKjldQbVjW%2BAX2IGHHH%2BuACr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMNywBzmWPJb6lxaZnKtwDjGmc8h9BSDQhnjvv0rfAptyd%2B6Li%2BdjnHrfDHcTmsPyxWCrjRlyRO9W05QTcRNyHMR6POqkNlOkayowsX5ZnIlfUB2bzcvnPG4tXFUNSBw9xISh7jkh51vm8z14PlUY1Fq0MiuBk25%2F4pf5T6ZvRkz7lpQIzOvEtqxBiUxkpBxz5NNVMcDWmcOFsk2Pp22%2FXnXsesj6e5qqF5yqW2%2FV56ugeFagrHw0rLbIJ2iPZggTD9y1LXE59yQQFMOv9Pt6OHDmH5iBFC3IrgayKOLAghySLf3PTU7qsU%2Fn%2BpfuiMy8Ea1lKiHxYlo8zN4JaIzBDuTIIyzKUPao0czSIAY4wqL4Uht%2BwCNX7xPR5g88%2FDoabUTSYSBh4f01AZGaw9llrCqMKV9ITFzRke7QG%2FiOOtCipf8IySpeWvJvaJawXtW5FfhVn%2FBK8fBfO4FkxqBjVo3L4rXdhqs9CEOxUJJPXKmxnWHQZVDGyWGPE%2FclZTwxwz0NSp4UFp9VecsAhyq%2FSfywNhrFgs9RXo6zJIcIZwUq3nny%2BUNcvaVV4fiu2HEojmF47uEUrheOLRmjlG2zzxxZLU7CzL5LT7lAu1Xy%2F%2BH6ceqWRZvgERk6mDmTsT80wyp63pMTCQgu7yLkw6penwwY6pgGRrPfJl9L5tFndhPzXVpWC8xsiEJwOE7KOZdjHW5bWHXapDL3YIu3DEvDwRstFetqgltAthysX3VUBEU07pnLp226UHqMn2l2UbWs4YsCc8tN4sn1V14hBDGLq%2Bg6Zvxxrsoa8kLW%2FUTxiTCPfSIuedqGKbw%2F7vJtpclll2VGufxHrYmPKR6raUJuWTXcymwCi%2BvFZubKieTA5hfYDivbZjqowDheW&X-Amz-Signature=7eb63c05d38288580fa4d1feb3b03c1f4a2229bc0cd736413c41dd1a4387ad3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
