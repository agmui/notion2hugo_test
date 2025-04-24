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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHRV2VBK%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T081211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIAC%2BvLphZIauTGlp%2Bvnwn569dGLBEj6gr4vFwsr5m0iDAiBFz9PaTDaoGM3vS3fRKfII4di7XljQOitNMPyPOSYnsyr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMpIIsZoKyPcySPqXFKtwDQbZeaxrsj84zvAfpLQ8fxbDdJbeE%2BR2V35IfT7T0plxf06CYxz0vNHLPIwmn5VpafL%2FdLDLR823kMaU%2BvVjcJAfUpgBhWtXXSVEhO7QjfU1kh3l%2Bv3UBcEcAKWrlLQY5AOv280oF2K%2FN2893R1pYPNSKVN3uX1rb%2F1gRz2NM4giy1ays4uKHNvbS7ru9Y3rqt8GxUibcGlH4meg0I0RrVSmoX7edQHLqZYBWWON2h1o3rUJIq8rlJndm2fIGJ%2BXTHga66abBq55oY3FjeLCDw%2BSKDygV3M2YWDm5QdbUrntjxT%2Fr6EA%2BKSFk4HnNTo0hPoYC2fmVVokJSbW2G7CRqpBcFSHYmcpu%2Bg3I%2BqxZI8iV%2BbKjRonxfxXfCTHXSA5n2ZserHePkbR0jo6%2Fhi1mK08ya4EPyUs4NqEVcsKNKtv9hQNRw6XNIztBNOv6Zzq47TKXCmpm3JMV%2BmieCp0MAV3wARNODvLi%2FpG8hVsrrp2MvYJvCXwSnyYMltzKwdBVV5Un%2BSIkwUV7CFIC%2B%2Fn6ESBSmaeG74ZejC6DihDELuRhScuxg5oYTWhi91W40lakb1ZedVQQIcmaObxmdgdCj%2FVP%2B6aT53CYBf0y3WfxdSAG6zYwlMZ%2FqTReFm8wwM%2BnwAY6pgGh1VdnpDlJcpu%2F4lCRetAuCENi93fHKZaMqVuklwgPtfU2JlNenn82uGK3g0cHeV6uCXzC%2FxbxcrA%2FdF5yG94I%2Bwzcp6TK7nNKrkIoZtn4Qza8fjwEbnM9f5BVOLtsSxlKaVZhqvbUw2vpFHFf1Xl9FpicIeD5dBfoIc%2FvnLXk9qt25XZlzkNr0dhj8gzkRj%2F95x%2B2EpB5ZRWf%2FkiwP3I4KZMVqGZF&X-Amz-Signature=27a4d92faa50b1627a3f7ccdee43eb064dc2a2b3fbf9bef6c6ddd5e42c575ffb&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
