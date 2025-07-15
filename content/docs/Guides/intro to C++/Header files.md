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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466636J3SX4%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T025202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQC6G2BFoWG4fQKmJpTxhaNUhqnIo%2FLLhim9wQb5oYi8mQIhALqYU93%2BtI%2FZc8o2ffFqOeXWgO5BLVW5D2n7capIZA8pKv8DCDwQABoMNjM3NDIzMTgzODA1Igxt9H4%2BSgN1QvA4enoq3AMT%2B7Aj%2B3SNzhjaIBzjNWWmyc4ODpg1SealqJ665nPl1QPPii9V%2FGiK497sMvgrEErwPJVrKHNpq8SwLC1VLiuDlGL4ffWOn9HWIZYlHTPwN6GKxUwxnfDRmjlRSgE5dMnPmyCQe%2B0CZ3aRx5nRG1tuCsxR5FTwumgkMOu0pzJxqcMknnGYSfVtoLji2TBSnFUmEs24s2qnbBbrY%2F0EoycWfqpfDN%2BKcCxKe3fFpLMoYNABfwHDTWZ2tTVaNmL5CqBRVgZ8y03M8LsJV0e50mrxQmticUEfn2Hd9zTVD0GRCUdpqcNdKdmPQtN19Q0FUvt%2FUiKQaFJVzocS07XSHgL%2FkHUE9aFr2hdAbdHuC%2BDybE%2FyoSQxm4ejmk7FrTIqsce7I%2B0pa96G4wJ47oCIHt5RW9eLNAQyIhqjntxJb2sTxF2jAVqqbtdXofVIw%2Fmi%2BKJbMXeEwgrIFov38tKItClOP9MmyOaoeX70BRfDDuUqAKlnyPcdmWLVo3ijqVVwgwcUrTZjPUcRq2CQfrWeF%2F6tDNud%2FKXJdyUUw%2FB8DEynCuK4UYCd8GdFYEWh9afmbDB3mMY%2FOfX7TGIQLJ94YjkIbp8e6mHnVFQlTrwP6zW7HWkp2GnQQLtGcU1nkTCC%2FtbDBjqkAaj3z3pKipsNPWeygasFi25Ql06jgFSXsvp%2BZB6GAZWxkprUxTIb%2F56MkSUD5JK69q03ajqPQjDg%2F4R6UMLjHmcbm8rNZTxtCYzJUBdVtN%2F1g0PQKt7PPMpCU58tuWCBo%2FdR8AGb4Efh0iwWqHxBhER%2FyOQfDf%2FlLDPDyHnSN5HRFORqBF8qahXzfiDRK2fjP%2FsRjOEUG0ysz2Y5GK64ozs9uWXV&X-Amz-Signature=6962b62ac5e8d95d3224a194200f0c2e455457849a58a4792f510eb32fd82e1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
