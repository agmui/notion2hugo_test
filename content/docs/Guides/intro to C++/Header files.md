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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSBUIOL6%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T051053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCICD0wp1GI31JggTG7xfL05HJncwqdjtgNwEVJIuPn%2Bj6AiEAy2A9XuwdgA2IEX%2FYcZprl9HAvzh4xnowP8isiH5VQJgq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDNygFH2s2%2BMnPjJeXircA4MYpTqTOQtvjaY2CARGR%2BXgMFOWZzzL%2FQXzySZBxtjFkdV7D2aNlVmvCFF1tZRPddGEtip9GOQ1yv7Dd6guBkPHhUUfEiHzokW45ac1TjYzmJLZAnZKj65FkQMeWoIM64RjuvjwraL3sjqTVIHmw3Z9KpWLdG2PcWizK70SjlbOCl71g%2FllUV6sT9BVr5PYJan330z6wVyINnzQbc%2BNoDYdqqworqMo1gsOUM1fYb%2Bx96AqGiEeT5NmEr3s8JWFJut212LwJP7W%2FgD5QBgpdBn3%2BdDO0%2Fre1XydsqMHWoGTMHwdikC3595K0Pslz23lUuAXZ3Ob04ymjXaHwgLnyQ9ChErJvRH5dL1zAVbv2mEcTMywSDrz5UZA8HbVcbb5vsmpBXTfj81pglFsyw%2BSojyGQ3JYq3p1rQS0J7IaKB7qhSSDR60GLi0PT%2BJ4%2FJfAGIGOIVoSCkjkcKvd1vD1W2zwszFaKQG1u4tBVY%2BBv3LJrw6Zn%2BiZV14%2FDxtEhebmR7S9LeNdXahNpT%2BBwTjkASAvLMpTRw34NUo4RbW1tHKOnAQsOrZY7gyhyYzxddkvpJzQqSJhOnRz%2B7amcqR7scXL8PusGkdAJjDQNsmEjVqsgJPRJnax%2Fv2hqtCyMPqi%2BsQGOqUBKdc2Di5ezhZ%2F5wOjjMSN%2FpRUsRck00AkuQ%2FE5dwvlVAT3JrJo8jioZc7oPc0l%2FqlPjWBxjm2f3uZiQGfDr63OQBTP7%2Fkv7o1tzMeKeHaioRKVaicvEc1Pv2eA9vWF6PXxORjF8fTqlpws%2Fl1EkKuBG9emXsayAmuPhH8HLFoxnHHakgqze6x3Q%2FG2ih2QZ10BMMEBdpUYB0z%2BSyLncTF1BlqBimh&X-Amz-Signature=9955c3ef2a51b3bb5b1e1faaf4b0a19c64dab7a9729981ea7c19f26b10e422ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
