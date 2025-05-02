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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VACB7F25%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T100925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQD0Ndc%2BWpeyjezIH7lmduNmqOc5X%2FQGkhP%2BwtaouVibbAIgXp8M5tmmAPjeV%2Bk3zMhp8kWrLRtoCOh2ZmMQUiHFNe8qiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFnoXADrd3vqNShmTircA7X%2Fo1iwcnOO1qFNH3mtLOl%2B6Au9nFnqqbo6idZEA9azrDwUzW7UvyJUt8sHwzSBLlXnH5LUOnVBwPPGpxDboFfFD7DlCecSHA%2FEdbOjAI%2BgZVoZ4ZxhbEKmrxM699740nhvf2uRWfrEbmrqrhL%2F0%2FylY9JKFtbqcVHnrOhLvOMyC6RI2ih7c%2B60W1YMYlcohVbQx4KT5vBH8EzR0cOThVkMbvS7iGBOpo118BdYUnaD5L5DYx%2FlhAD8oJWVqlr83Vc9a66hbnff14zvrT2fraLBCGvNvimW9tVpdT9uXSdKUVzN580WP%2FvVaTmTOK48Fdnd95QIjF0onRVd8uFyk8pq%2BzhSvvvcciIQ3z7hKK9t6UjM2MXdIc06T%2BmfOd98qdnSGnHXToM87Ol8gZKRq1DtR%2F%2BM3KR1z5B%2Bl5WoaYxbL%2Blj0UdwvYOkPIM88f7N%2ByQAhuvJ1Pz2n7668o7oKeHHtQn%2FneVsyAEOa1kVpGVUnxdzQkxhqzb0%2Bvurj7uUiKR9zUTOBnHTENxAxl2MhkwICXDTD90D%2Bw%2BaLoqiOEuvtm1pxFy4NWse03JdnIJ7hRBJeHGb93fcgUq%2BR4yNfFagxIOHnsSoPh1IqfchkzZCOnQ3xD0ZHXMu2gyoMIup0sAGOqUBZMKQ1Lg%2FiS%2FXjUKvXrh5fLMiONP7lmJIDC2UlvfhGBflowN8ei4XPVKg%2B6KvfsxzHSElOyqO7TAVB1iQg1u%2BhOgFTtn4b9JM8C5YqzDPt4FwuIYBu8u6jZ6Mpk03%2BWVtfOVVM%2F7bT5BRJ3CXbd6Md2NBTqGAiCmiuBdTywGkSfU8eoi1d9MXa1DC%2BErJKAZHbgJUtVI8y70SlwejstWynaPI45QV&X-Amz-Signature=be4aa5c82cefb8b5b2404f653b81a2fa9fd8f0a6c10a6ecbb1cf8a0f85be89c3&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
