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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6EI322D%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T100824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIDFTwE51Tu9w%2BTBufnwn9I46A7GdVcgqvNikogarqA8DAiEAu36opB0xhvvC8rAShjg2W0ZH2PhK8MQnA53jKOA81NEq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDPpt2Tcm9WHNVC%2FSsyrcA2iCX%2FCbvgJipk41zUnjGWhenvlRbiQO7TEP46JavZbqa1kexgs7t2ZjWRGd6sZQLILyUE9Z57diZ%2BVIpDguaP%2F1QRBVEy58EnXsq5AjGbOPex%2F7hipjFzk8J9P7HOOKxGAewUt%2FyRwZuEj6aUbWc2i%2FEXUbbDRbn%2FCmQNjNKY9xo4VAMT6ra8fomnuOH6qVVr6%2FbK2Ad5BVjwJHD6dcpKWv6rZ1V1R5edl7LZbbyQD9WL9QxpbQJEvlxKPXFQtoDVwvoya2vfL%2FNRCot8CiDJhOV179aQRfNhl7PAcRnIHFHVpMl2iCPPn22Mi%2FbvmMhXmXDqNcysAjeLOqkBf39%2Fd0X48gQpAhtAu0Oe1kozE1aPc%2BX8ciOyjY%2BQ09ucy6U7xrxYerLbrcZD4wY5tb9QdznH5lTuluHYULQaqtC1HxeZNkLfqUiQUGB7IR4F2vFolNgmCGrliVQy0CkY18XVL0HPhHgNP7M9RyutWC0jMWKcokSwE4H%2Bh93Sihf5g3HsV%2FebUj4%2ByGZafs%2FKJc8lFOi4lUGLS3qeOS%2FwCgWiuzdqQp91BBvSgVhboZXOxyxtbqv4QVrcIBtZpw7RV9siEbAfCo75WPle4vrqqfjS6HXlyFzDl9ZuzQBFyqMLuro8MGOqUByYk4Zf%2F9qmGBvgDHMl5cz9T%2Bd5lTXrbppcA2Cah6tMGaJUPbM%2FxkDhhvGGZJH1KX9XVA%2FULTkwih9WIY%2FU%2F6euGDWRyGr3gCvpu8BmOZs3WeiTqd9x2LRxcN%2FxSFas4utRlFaCHGPm76wj6Kl8q3U6icu%2BojK9nQVzjustevLKrj8S0bu8Drekdqf9%2Fvzzgr8QmBAwZyWCklWxKZgqrbEHl9Ki9Y&X-Amz-Signature=cd7f76bb410a46921e97118ef1accc065b84d5b76d903820fc57b7cb3d9c20f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
