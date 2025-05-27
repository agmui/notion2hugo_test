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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RRNGUNK%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T004053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJJI27WIS59bM0JqIHLU6Ezyw1UvgsqYMn1eLRfAPzAgIhAPs2Nrk78vBQ8D18QQddzhZFX7FoDxxJdGElZT3NiTsgKv8DCE8QABoMNjM3NDIzMTgzODA1IgyMtXMM9SKO9idnALYq3AP4iuYR7egqkqDjdHYuXfSTiYj9Yfy2YVU5iWyTfHqF366%2Fpwfu6ZhSrCg4IpUn9zRQZTcpIzEV9EGKVYN82BlRD4zcNJ9I9rMhoqvNfvhDDCPZJ6LbulL4oqyvaXKxSp4fHF3c7lhHOFVNI59akZI3RJhwI6dWN2WNCJArbN79dVvpkrIvlD12LtvhNhA5GmbXfg%2FgAxCbi2tqL7gRoVpkJy47o7Ru0ElMSwRYKyOFPEI7kWXXpRJY8epyLM5Jn63FR6FdD%2Bmd%2BcwZGCCqcHcXEXJFGUq7oj0GKDCaeRzz1GSraeuVbPYKGuarylUIqoT3udWzEm%2FVbbhlDdvsDEU%2BM%2BvkfY3v96Es5%2B10nh581l8tFKVWBQ54bo7SSpI34s2hIJXwj7BulXzbhmIe8YED56oycDTguo855onVNvtxKQ49cv6C2q8oW7lP1v5jQensuU2MoLjnrafkZSkUEqMdEsNsea67ck7gyRm3AW6lob2w4kJ7qP41Xua4N0UTHtT0nCPAFuVRelXUvS3atLCg95K7Iklvlf4sMRRP5sX3aOUXGrFrxf%2BoANG0yJDfkgQAfLJir6UjVwKgu%2F4wjWLCxIAt7kF5fMwQsB7eujdXSX%2ByRdyrr%2BReppXWHDCK09PBBjqkATo6jzRMzJANa8yzTMpPb%2FqN%2FH95MxYUaUYU14GtL%2BKEHlRgyneIyIMd4almF%2FR9tNJTfVbnOXnsyZhXHx%2F0ett0cNiklvmJKIYt08To5pIFNy9kwvLE7SX1rxSlwwJ1W0fHtWL3lB8S6QfJlLCJ5UdFcR93wKppjRX6xLp%2BMcvxPoutSNEwvzOINcVsvIEr7OU7XkyvR1Mo38CAWtXItvxdb%2Bg2&X-Amz-Signature=86cbd8ac3fdb2bb8ee1aa2d8e821fcfde0d61895120b16402c55d0fa6ef0569b&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
