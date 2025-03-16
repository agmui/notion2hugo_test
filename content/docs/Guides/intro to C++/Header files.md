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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VWDVZTV%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T230710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7n5%2B%2ByMV5NlniE8hpzfNsi8kw%2BUzxXwXO2PxXQkxwFwIgP3UO5xTnX2MKUF8FlAg%2F%2FoHX5nMmTBLxd1CfmWWIXJwq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDD3ch9yVz77CAEebiyrcA58%2BHUWQ5nVBo9aXfQ9E8O3jxNTXLJinDETVv%2FFMgsQk5EUlfeSKjxhkhZq898TVVpMYaGzssW6A8BXI61OcjqWIuUbBl%2FLc13S7C2x0Lr3djrHe%2FHnuTAIBf9A9yzk8%2FSUjCsLnJPkGmzN9zRVJBbwb2RsoKLyUvHv0irIH0DqjbbdUeK3M3tMpXJpINg0dXtgMMj6cZAWX8WttTGI3Pd1CF865qbRnuT2MWd8fihh6iH7LIBnjEpqgYZjJrHJK63UCkoIt%2Fy24kZsrMr5XQhJLJLSIwstZ%2BFgJwNWgGmKbB%2FwpTrPEZhokWH6KJU%2FWcoeWdOcijUZng3hkggNvM%2FLRQwRIxZuvzoBUxdcMwMTUqrrizV4%2BiAV%2BQTXsQqiNv15%2B0S2lbTwtjFWo7hcdHFOHzuUlhjBCEhkTY9Ye2vTiYOO6E9lZhPK8guKX4dw%2BY5SMMZ0Giueynf22MamIstpO88qEcay5ALvIAcSXOStGsp%2FZxpOo1o7niAof9JTW4YV6W8o%2BZfKVmkBeTmZgK%2FNLbxFEZIupxIYlo4Mcdst8g9G%2BQyg0UCXusgiJQh%2FRHzXHlXjQwlBuUoz0c01lYQGHqTkpb%2BYRCM8wjqheWLie7tCPmsruFYGj2G9iMKud3b4GOqUBArlgClm8t4IXDpvapDmGc2ULWICwiUQ%2BWUlsGnKqP3m6hb4h4u1PTf8T0vQIlLToJ7ZkTn5mrdA%2Bnh6NG5yrIbk7QB1sRpkfkbXh31jCBn0JR7ukW6x0wjWd8zon3xEcutuY4S2EaLxcfOx4fueu%2B0fz%2BICCyuapK4cfoCP%2BxCwfoOxWqG6W1XCO4yE4OH2oDg3uN91CDywopPY0DRVWwKZKdGiu&X-Amz-Signature=b4e1485d9fb6a6c6785a27725360823ace9ad3921cfd10278162dcac7a339bba&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
