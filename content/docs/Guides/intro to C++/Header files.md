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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2NEGMRY%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T100955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcdB8OLe6AQK0D6MZZORE9eYOg2kqVBLA0PKnbKwhgzgIgScJ4it%2BcCzUYBkDx1mHQFnGdb7V65DL9ihFtFp%2FiGu8q%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDHGTGR2WEsascN7KeSrcA0WMPVdRid%2BkYW4Li1bs1vP%2FEOEjQD9t80XcnyoUeWGe21Z8rZGipOH9qyiP3WSDMx5TOTLzZpQ8AV%2FSuK%2FWUumw%2BsR6xpeT1WcbeBtD6rvC7E%2B4ZTcHjBCGBzLbPP5hDdmG1b0Q1PwYvE%2FFl0TbUOo3W5ucbCJLWCkhyGFnsL2HNMHl2S7aanaVbSVEv0%2FKMQ%2BnqFNrFh4RcyWQJfrJz7G9QQUYYtRQDumFXLjwBe4O%2BGq9cNaE80uif95fnL9jY9LGjC36bwnoFw%2FDbsuQrNlrL%2F%2FPj7cIKN4vLk%2Ba05zPmrUFM08b2WzJZFi7kkDkrVUaZ%2BwijZYRUzTg81wBZqsxIBevaRZkcEpe2FKTm%2FL28PQwCsh%2FLAvpfufU23B03LvYzHZwbWrrbbXWojcGdUYgbofqpaYBlEImu7MfI99G457YyYBnyp8myiUGAIv66Wa8ibuM8QH5obnruBVQkKWS%2FvIgefjJ%2Bm3zI01fr0M4v39j29hpJ6SqnJrpm7U%2FEI8V%2F4rqYkUhta6Pb0%2FbL98DtiRp%2FQFu3X%2BGVzbTUxj9yFrW9Liycq3eQoFSVWHLwLGAQxfJWvNY%2BTALZWbj3Au8ZdNGWZWOsXH8ZVe97bnK3s4sqG%2FzZttmsRe0MPjg8cAGOqUBW2pYgrxwbP24cr5CJ8mAEWPutkeGb998JJIdVZvTxpsrolGC4uP1hdyKLYFPUXBzEDIeNF444P3%2BZEFKc%2F4zVnJaXfUWuVQC9NIx9DLIco%2B9rdHxypCJWRlV%2FjcGByiRRyxYqM1zPOvp16btvICTWiwwAdRyC4X8yu6B6Ho%2FwGhEsKGAWkqlX4FqIH8wJQBDnTBu1a%2BPP0KPpdvka9Sfoxy9IgVR&X-Amz-Signature=9dcb65e0be2cf28e95e97acbe46684b8ab907a2d59dd096aa770765c75381309&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
