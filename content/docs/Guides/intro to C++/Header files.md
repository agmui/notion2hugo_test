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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AK5YOWT%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T210725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDvDBe6CGQ2hHui%2FDPjmlTmg%2BaRWZyh%2F5Y%2FYz2ZaNqlSAiEA%2FN21GThPH3Qk5jG6HYADbPQFx4czwg1GX2qCXhT1R8Mq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDE4GmASeiI%2FG03m5ySrcA%2BPtJ%2F4Ic2VPqj3QXHCS%2F%2B09YytXEYtDoI17dVsfw21rXVLS%2FzHCy7NjtnvUFa6soFi0J9TnfByqSxqU7aBipxOQ82ga%2Bo9CpZbFCU57J99alqgKaTMdaN%2BGW7zJ%2FNlF6keHKSU5z2i1uhJN25Az1WQJCZIKnrbrlSMqeyyVcIawKx7dtJj2w0FkFj2nKliSv8I7NHv%2FL9KbAk43HOccNapE4tiCFgfzDWkztXq0G%2BjADDh1JVV7LYqis6sIm8EoEYU37%2FqyyT93SuX%2Bb4B6p4MpGuoZGoYGBP22Ok1J42LtQozH14oOun31KvBpWEBmpn6iJIyJ8dqz9jRALvewllD65edJFExzPLLn7QZKGFLRhRR0PGf4N3aF6y6IIdCPhW4qP2ezZ44qtmCJNvgZzNHKdTMVz2pCoKfQ1xxr0naFfM6u5TXXd9i7DpH5%2BtS7kA7ZoyehXRiVE0a0FdIfiZ6h3%2FFwkLthtDmQgsR5ULKuvf6CPQjtjcSkQNca9pVhkjVIg5Trbj3nneS7BU2PPV%2BedUmKvm9a0UdR4lAZQG4%2BNZjc2%2FDArqJsyYKifWL%2Bo7TsLUOmBuPnkkgklvtuuW3qkvfGFJTd2Ny%2BpywoRX15jxHbvLJia1Mgag62MIfsr8AGOqUBKMFqYmD%2FqDwK%2B%2BaRZiyWlkEzurOoGn9dKRvUWMCvCFeeKtUAvmln77NAHGJYk8%2BScRkZEjEsRXilGudUTAJNjiPe8s%2F0qq7GRc0VurGdGh4EhUoh2v2PyOwsQarMgMKM5HTTyzK3Q5dP7wd1bPY3PfM7W1KAz15v0tAftEiJ2c0O8f8ytKHW6RAcsnBqL%2FtmWtgKlLRy%2B4Yc2%2FEeX%2FcJzqWwtMP0&X-Amz-Signature=8acae85dbd43a09802a3825d3c2fe8cea662d4218065149f762ae345a355d032&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
