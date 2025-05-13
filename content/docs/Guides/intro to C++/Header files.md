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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSQKIMEP%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T033546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIG7fTlViOLsfaP7sv%2Fso%2F817upH2Vloek3M%2FsKCDWq2aAiBA7n0f02VsQCTJhH8qJWlafpvFaQbYK29gu8ctscbFCyqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMz2BQ5fcyV1Z3ifywKtwDWbueXNjUv9h%2B%2F8WyR%2FFPRkkUYJ8nPAFOFRyH44OusWUaE%2FGE89HwQ9is8bNpMV3776tn%2FrzqtzffzzDIl%2BD9Z%2F4NogTBglJUxB4l1qVbp5Or1l3w1Et9mc1rbTgxgPloOkFRUJzuSLtUhJxQyiVwSJ3DHyT0efDxx9wqJrUNMwQV07zPAChOAVCZbVYVv2pyRZq6pIQxkAOVRgbndL7WTQZNlPWJehYATTDu1WcbYrlmQAPelkfL%2FjVMspePevHc6XLdiVNgFAlgIqwIcJo6iFPLYLN9XyXMVtLV%2FzEWu5IN%2FOdwVH%2FWFJONIUVgURyRLiSArFsIlDHeIu47E7YVHT4W1NJFkZPuGFriPt%2FDlBL6OSnXKrAtRIJ4e3UhY4yRrewYjgXp%2FO41qDczLOL%2F8H5ACdd804De8rWScekuvwImtm2LiRYds29%2BrZgVxDl%2FvPxgaQuyGtKdCXwRZI5m4Aq7aZBSCiB%2BQG3zJNHAQNQB%2Fbq7hOvmvo%2BcyoY%2BsWKPruitqe7ke7x4hMyxk9ujHK8%2FSRJPdLWNonxs20btY2%2BkCvAouPFNOnVtTeIjAjmEVQUyF9vWYzXpFQOeXYtj9%2F1STjrDMoqhdQnotb2H2RT6J6NGT7vasS%2BYqacwuveKwQY6pgFIu3anobd3gG1MjZrRxgibGocq4xBtHq2hBn94vEhFhrmja%2F%2FWl1FzG%2B%2FqJqNNK%2FJ5ijXcsLoOngPKnwliFWWPeb0aStgVvU9N9ANnlgnopRvk3ydNwCJ9Jsh6nD34hpkyDvZsqNbda%2BULKrDnlHLQnAmV%2BekKzbaTAgJtMp8OUpP7UMhCE%2FByqZtuFOewBDZdNaKt6GssmoFDYayX0NeZ83JmkhZI&X-Amz-Signature=95f5d292729f578b8ee540e1779b0b787f5da7ad9682895a247706af69be93ce&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
