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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEHBBTMD%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T121518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGiPEifKIMVDd9d9ZVmsVk5XOVVO1Qlm2%2FWkUExQ6VgeAiEA2BdLzE9CW042BOBHe2aRo7gZ%2BqJqi%2BVm7ze%2BFynY4ZgqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLYsby2WCnjTaZ0ntircAxNF%2BspXfRtvkRrfsAuFdHc9sPrAkyUV9tPCH8A7JUxy5kOOeWS7%2BczgVkI67cv%2FqvClzL15BHhBros%2B%2Fcr6V%2F%2FnEUaqKNUeXB47LSIa93YgEyMnteqEy32Ky4OhC%2B9ILZpVqlqurjR%2Bgq5JurK8kgp86as%2BpxSYvP2zSXgxy3ZVaTGTdwGiZ%2B%2B3ExiOluGTm9W80ztVMN%2FvRs2Hb%2BUAZY3DnxsDesMppHTZyDN5ZJUq17lua4DlqIgEvlZ5vN5WW3vGXNpqdf6hS%2Fnb7gyI%2B1knXlF%2Bxe21gvOf37Sg6TQX%2BP7%2Bsq81V0AG3vu0tyyaNl3%2B%2Fv8oB%2F8GoGJluxX7IX9uOSSo3C5bB4kpq0QWLr%2BbkzEAh34boBkHjn1IyujzieShBkXWwV6dscek2%2FfdzeFdcd252ZUlta3T9DNXJqoOoeyElqPzkI9FpDQBxfw3i0JegqZAEcXNNESkG6o6nlnA%2BIsUxN8htNBt9200Qrqg%2FDM2gzfnMNG%2FfNJ9cLRu0XkeDY25erDgZeDEc1%2Fd6YLprhbu78RO8hHKXUsGCzJNlkmm5%2FFVN3oYMNAi5zJFAMBnSjE3Gqv1keGe5u7z3O1ZznKqwNFYYVcgcoBgawjvnjne15ZSZ6hkwPnTMJ6Phb8GOqUB4a%2BCwpvzeQBMZFVkBMZZ5AKOnq3O3ADIe7oifCXz5ef46oI%2B7LGngoqqHncXv9ggawfjMcSHkNWkXzXDCL8Hjq%2FElHt4sIpDEiQ9ObAet%2BWjelV1DjV7nLxni76jLBhXbo4rjoNHfeZo7%2BCGwsatOr%2BPcsFlqroIsoYP3Cge6Y%2FwD3VS3aK7HOkQQJwQ4x7kBfb0eVXc8r%2BssHz672oWswapSTUO&X-Amz-Signature=edfa403a881bf73db1746952e194ddbfebae2039743da81dd82f5caafc12dba0&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
