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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOFCLNQ4%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T025530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6dM2tuR96PMZM5L6xKu%2BsbDSq21wVRDqTziv7csBVqAIhANJUP%2BOcTMfkjksY0FqVd1E%2BCL6hqlFvlK%2FM20IxGKwXKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw2BfhWGdoGR8N9uLgq3APCNDR55Ev%2B0NaByjqDy4l4CC2BIKmGsxL3UZV0tvcUGSjOsEBY9W1ywbN5z81Rw06HZkrVCIv1WpnaanYWoTJTwjpUNUTbZleltoJI41YKAu4nI52wGfNJ4soX7A4r6mQLTulRCq29PpOL5Y84O%2BCuJuynu5kbTfQ1TuizhErBvm4TeenHaorzRcW3rxemUMVNnicAHeq9eIDgsCIiWntGnnvlnYdJHaYEugu7LMcWnDfWqnfvs9ZdmEyKWFAYWnzEgCZ9V6CZwiG%2FX9pptzdf2u4GP2AgZv%2BJMNwJqVx8AxwdVC6TxcRcApKIsipj8cb6o1Hhwyk2UDa%2Fg5jDyjC9GHAmKf9MXUVTfBJp0Cjmpu1Pq6VsevnSb2Na4o%2BPaW7RyM0SNheYy6SAvj9eiwiAmA0DMkS8OrQZEDDVkALS9SP5K13uwvwG0BB6n9KlKAViy7vpGguqJdJA8k8TlHJgsNwtYzahzQv0foC5RdEP80K%2B2p%2FiMEqwb5uA4dnXDsay3duKLvhVwgna0CNWOzJBaoMsX0Ex1%2BhGjbHA2A5oTokAEI8bXcNmHpyBeacTHQTDKnc6zNSJzrnxLsCPtSvOLqJtImh0eKT4KoDfzxUkBFLs%2BtRtydQSev57dzCOrczDBjqkAaqGnJ%2Bo%2BVIBjez4euGy6Fa%2BLbDbP82wixJ91c4Oq99bEhy31FCruwYe%2FL4mgYJitIeDhWflrVb6u4cgJrw8COA8xCYfBNkpq%2BWvSFxIPHeWjFDwi3MzgigqmrQ9Jzjg82fkvXCQveMqfcDfewBoKdH%2BObQhYTj7tazcPNJOubffJ7hGDbeuzd%2BAqlxRzHJfNFnV0t1BeyJLfhaNe7A1FTA%2BE7Rd&X-Amz-Signature=6e1d7c9a3b6354e47d7578d69cdd4035013befd089c02620f2cf65b224b5534d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
