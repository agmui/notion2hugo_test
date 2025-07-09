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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIMTLYJ2%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T160822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHj4ZgpVcBEUbynbslToWShA4ZMhrGwemLmX8zcSpBLeAiBMIUqoyOvNWKl1ItkciUuctu89YhG0hK9w0fkkrVQFjiqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfohv5kfMlG%2B1%2FF82KtwDnPa7Szjgfu7SjUv4HOi46KkGmyDJt%2FK4DABOd3bdOW86%2FSk08Bzn%2BjAITIisQv%2FFVQeEUtOuIyWdfqKCt6CihpqppMNjlUzRP9Sip%2BEpCcMiW0evZtuj0EtrSq2jfyYLliHB7LhsM6%2FXULV9Zkd3zHHvthg%2Fs%2BrZRTsODa7mltBeObFYbP4QDTSDuds8ACWMF%2F6%2BM7Z7Z2YblDhIKADKdD51dMWX%2FJdkfVs2xhZaDuqIzCreO%2BF3Be8OfayHvE67s9%2Bp939i5t1ijTaMIWr16ax2AU7OB%2F%2FVpnRqaFaL0hxw64rY%2F54mF7nz0MT5qs1bLNwPtqvVHECGvCI4kJk5z6WEUS5cHK6mCw%2BhPCVlqZPQ%2B4hJBXIKXT4%2B3lvtdeRL5LSW91EeJOkqBQvtmTigVZF74UdkOTzoqmfpxsH1Clz4NJNe4Z8eb7ONB8rns%2BJU37EMKB8LehnWyQ8xISCXbCqGcKeaQG%2FODICtgucBKmq86cTp%2F7EPgz6EvqPAFPj7d1hnKOSwbR7r6g3HB%2FjEhj2Ug7UhIx%2B3wXJpQtFFJ6f%2B6QOfswIV3KnNmLBgCvZsVqhMJkCYSbRR8XL8znNyNh%2BSGzQPvvdiuYlSk622OQu%2BUNQfXObzE76gLbsw8Ze6wwY6pgFP%2Fnnkr1IqjRODA4wk2f40sNLno%2FMZ6ujrM78Zja0vhQwavw89IqFX%2BEqnCgpmRpN%2FpHtMOOdyQj7aFZBJyJeRQt8kRAYIZDe41gwZ%2F0dr408JUNaS4jlRkQDbdvDxW34vKiefJlNvMTBy00F66hUk4Kn9700lyIGlvdO8H%2B%2F47TQurfulSBhg9sYZiwqtg4FmpIEVtZOMeORLFUuSu1ANPlmJTkKx&X-Amz-Signature=3e4154257474486a70b34478c3f37625cbff9da05564c9c17da11b94ac334eaa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
