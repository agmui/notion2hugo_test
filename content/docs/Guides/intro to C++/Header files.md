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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZIKPCT2%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T170450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAR%2B81ZgqyyZLWcfoiu61qsT36Z6aFqqdOIgHdTxyVXuAiEAwqeXyHSGxlec2BGo8E1heXx9rg6%2FR0IjamynYD%2FeixYq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDIIwHOrlSIrsVmG%2B7ircA3gh4t3Ue0mAEYfTaeNQDs%2FqJkvlaQubWlp9xfvaWBc4EpjjO%2FxZ2o%2B%2BkKyZ%2FIdLwp7DIhMDGj%2BbvFcqpSkcoUkEa%2FwrtMFoBCWoRiBl3IF7LMpTqjPVENiWNfnTSca3JxW3FU%2FGNhB4PqJ8sMX3tq2eylzRCh8UvmEBQks4k0IpClTNT3TUynRqGKu8DQy9J6duxsQFVFp8w5ZwZLCt7vYVRj8bexgHOhAVDwh2XFF3PUMUjJqAt%2FnMTcVAIKJX4GAzo4pM9IGpt44RkUDOovPxhKrC%2Fn8i6gnAWEcDr3U%2FSZQwHPgjMjJ1zHt4bG5hMj3oUYlaNyMlAK1JDTKJRX8mwh4Lz5Sca%2FOpy1MoUXEokN0CT8tkBVUhk9MldsYR3THXj2%2F%2F9SpYTYZTzVQcbxdSVXBMXO4l2osCcYued%2FyS7mtle5NbRRyXYck0zNlF8PIDfKl7jYp%2FtRJ2F7cjvmH%2FEQQjvn8Oe0QbbPiMl3tyizHKwyCHGScCpO8SbMxCdl6g%2BMamr0pl33BnTKx%2FWohe3v6NZKkykkUQ%2BCzbpghTFB3kbHsBM0NPZBxTXMbY8Wws9LiGx4mXMwaE4JG2buinIy%2FVR%2FiNBcWyUkRxiYSUL7WcGIzsc9Q2z5d5MLaxucAGOqUBJWrNShzuZDZfeRJssSUh4rA%2Figu5M%2BCbD0MerllutGLBT9CIVfGAFHxG0naf%2Fumt6eni0ggNS%2Bwt9114Nh8%2FfpfjF%2FvJihT7F2QzNxzjBDDBkgouQjyrpWvVXq0ZjHYdy8eyzsD8fu2nAKrmLcIR2UrbzSFWxngJ570QnPVjeI9g74rMbPtUCiRRBfQQbD7iS3bmtfd8GhYQ9hiLW9XHvua5O3ec&X-Amz-Signature=1704a544818df2428ead6a5634d2473b9188dd199b4ac598f2b546bea8711687&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
