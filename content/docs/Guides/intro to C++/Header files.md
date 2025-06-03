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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJSR44O3%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T100950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQD1gf7%2Fn%2B0BBKbLzftQ%2B6U7%2BQASviIKbiGTUS5f4Sd58gIhAMwsq5uSD4vDW%2FxYfh1kkyBJrw1CvDKT99o9ueuoUSD9Kv8DCBIQABoMNjM3NDIzMTgzODA1IgxNF%2BWKIvvKiYUIs04q3AM0lre7xpOU%2BSNNw9gpW2Ku7ViofsW6ZZNtd%2BUDcGXmWyIRqFg0y1C6fnrEpkOWItqnnMoDT7lYP%2Byik6le9hKDLOvKx1P4xsL9wwLN8G8mFM0WPDbd1ZQtMcv7wRKdFOqtDlCNqLRrHbouTnf2C%2FrIk7aTqiyDriblcSRrKpSpZa%2B844gfDylICFSkKWdUYPkLwavVVaMZmW3DUjtJrxogbN9IsvIkfOSWAozXPBYuzYKmtsxgkp2nf571CEMEW3w1fiZv3cDjhPxf%2Bmz%2B4QpL4mzLdiecVIrp12UY2REceiAPxnw6D5zlv6thOaNzMgPXq%2B8dlqTN2OoUqz8cUBtSjCYAvAPEaLzxed7jVOGYYNbmVi3wHlyPv5sq4CWNVbsWoBAR2%2F2sSoDGRjp6E1dmupoX%2B6ROAacJm2bjOrg6jf6%2FzNM6f2EkW7mVisf0%2Fv%2Bp8A8DaegHl3VN16tZI7VgF9bitgMJxsxasdf6FN2sNtDJRu8OjiYS%2BjIoEpjg6h0voW%2FzAP7GdAju8T428OG6d8NyzfAaPnnhIOweSFt%2BCd2E6xyrlK0HzKm3Xfqn61u4smeh2CNl3dsqKv6J19ZLckn6zemfWJGuyHBsM%2F0fEtsOv%2F2UHlJjhp93hjDv%2BvrBBjqkATObzQhU4IDSN%2FuIPYhLoBzw5Eqk6n%2B7vQecoDD%2BO9BRR%2Bs1IQu8kI%2BFNdTU8N4q7EZOowxEqG0h5GemwB0DuXrpkgISojfR0nFmrpLZLRQ8IGb7Bvf4tPxSPQPQJBU5gxXY4%2F1gZiRTlfOQEK0IMEpukt2Q8sF3L%2BrAoNlTLrQ7lKSe9u3d3DjiD9oXkky5z8Um4J9mnfoITzs4EsD6yNG%2B3MLE&X-Amz-Signature=5defc4ae65b649f8138c4c8b4bf72a5fcb3229a1e158687b5ba903ddfb4beaa4&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
