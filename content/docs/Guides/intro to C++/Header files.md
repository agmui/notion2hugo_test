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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQNDQ4AI%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T070916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLfEbfW6JcxeVZ3soNLAAtAYejrSzZlLpuWRknWc8NfAIhAI3p%2BmVOT3j%2BGV60JmQVSVa%2B5M5reagrXzjw49SrEDRzKv8DCD8QABoMNjM3NDIzMTgzODA1IgyxUMVCS2AJ9xMQVY8q3ANRxV6bitS9lwR1k7J5YmSk3mxTT65pjTEgm6OiPQbgzchXWEW8GKerTzCwWfyWfmOXZOL5gY0ZZ%2B1tT7N6v581RKZsAxtU7o2PmGXGVSt3CqrNcR3mc6xxG%2FZFoIAePQei5T9d6a0nHdt4%2BeRJ2kUutmDGjHQTGYxvBM8l2wg12%2FVddb6uuasKyrGWWoX0%2FvUjp14Q0WUBogCijxfdog604F0iAPp1oBCeKxM9LadegKf7IsGtUqX26o4RQ2mFnRmamyVASlD1jEfAK1hQUq9%2FXTv8%2FW7W3GwvZwllQDrfP%2FVlVpY9obWeSPPiqHHqap8uGnMzilFfVW9Hc71lv6NaAkHsII6Y%2BTBGAushw6Ga3iLw3S3sCKQvH%2Fosd70xAtLhga2KOZw%2FBTckjctdjwSUapW4D%2BgyNyLHSgeNYioE3bgFGdV%2B18ZU8gnw9daxYPod3c3CCEY7%2F%2F6TAbBAeZ%2FK850c%2FFS2l%2BAIOkA2%2FTZxLgn83LJ3qN%2Bqsj40FdOnpxoGY17INKmc%2Bd2TRR9HtMvH2RgucjHrvzWF%2BMdnCtMNAvD5y%2B7SA5aDv9lPBrfIqgtnUoCazaiwBXQGkJzfKwG349Hx%2BsjE5RAoqFdp%2F%2BCjM9Ker9OYcK%2B%2BBp1iuTCV1ebABjqkAaoAAakntugvgUQuYO1PSh6qrkSIyRvQpzmB9dgi7%2BRwjmcHgCCGE8LHFiPOtAFumpLGmgTWMb5LcH71%2FkcOAjNuVQgEblzbVnmwcc3NVi43OH8isN3X9%2BqJQTK3eBFO436Y2VfNjG%2Bgkt8EyrdHY6XmaIZP%2B6VVbpbgiLyxBbcf5BjBiBIWs6fDabis4uA1NKsyyNK4I7hI%2BhFjT%2BZ%2BXCKalkGH&X-Amz-Signature=ad3eac0535bc3a92ea73e1dc48aefb396d197504875f2386eb1da1697eb066d0&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
