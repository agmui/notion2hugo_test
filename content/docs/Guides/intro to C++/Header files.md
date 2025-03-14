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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGMZZ6BX%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T100821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKpBqLGJdoQcycKZHbRrhOBVFyZ28d99SOOgpD8sIyOAIhAPxPFL1C7rf1yiBGFHqzfy2miyuet%2BXD3874lLN8Z%2F7QKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2FdCfzhHfsuYuE8f8q3ANFmCCa%2FuYUY3i1k9u1grP34q9XkAeSm2ZYKU6w57V%2BT2tP1wf7E2ugK3%2FjZzkuxrfkWn7xwcSqs3j3g7Jc4Hm6UDYUBWdbXcExnUTAD9zUYvGECP5nseu4Xv%2F0qmhH8CYR7TX3MD%2BWTYLTLqfb1ww1L%2F3IUp6J%2F0VPfEiIgcaLN2nLW4BnSkjlGY8%2FM4wmDnAzR3ZtoDdPYSspmROTanX7bT9PvEmLB1KrKYyO9I6AzM6HXFjhdB4EB8RvEbENT0YTefLfqR0gpCds9ShpKEiDa56qg0S%2FG%2BU2w5122IoGrrO%2BlzLw9zE%2BxRij%2B2MNh8LS545lntri02vYZFzafRttLH9YOFzZGOyUENgPgFZWox%2FTdodUhO7e7ZOljDBNXDR3pdr3ImM64Zr%2F1kDStS16PrAApTriUNizH5AKm%2F0COeGh%2FLbIkCp%2B5GFxDXeCbXYFcQ9zdQu4%2FGxEANcnh8MwFaZEOV8W28nnt7KyNAyPAepO73WcgeOmf%2FpyqV5K8otfQCMmUv5HZrYVZCpr9PdJ6jHKKuwLYRKa6esU9zS3qX8c0%2FXlmw9sj8outR%2BdiB%2BNpvWUkKKJ97Bqqiq6RQlycJAOP%2BPeif1V7q9R%2BW7WfQbE4uPuieKhxisN9DDT6M%2B%2BBjqkAVbPxewaxv6qB6NjVoYMTFlCdADQ%2FqkuNDBn54JCYb3iuaYTUShUH6ObPepSmGbBWJzUe8ncXVQSCfqEQft7WrGD%2BrdILfRp0B75JYYbp19i7zM2b1fokeC%2FNUNXXt1cDG00VGiGk%2FesuMb3XKljNBYV85wWap9Y1tWWFjOgt0m7sXt75OA3VkIcTGD8MpSZ2JIAfyWGry5zZWXozale5bX2pD3U&X-Amz-Signature=182d79317e298199cac86f34dcca4e3d88f453c43446ca32c06953d1aa7eb5d8&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
