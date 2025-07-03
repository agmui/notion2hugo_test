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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTHUZ3FC%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T220816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIEm0HVX%2BGbDnpsxmMtXa3uu0MGFm%2BQqJcZgtIX4FapvsAiAFzKEMiwD89GHpDlakoYCRgm8gYZw%2B%2FmgZHDjjnzLOqyr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMgWlHR14Q1BMB3VRYKtwDl49WKhSHvRIBQ4taikk%2BdWAfu%2Fb8bXFGChsDMIi0F5cjQtMAz8xphs7hn1WB8lS%2BuNuRVQ9wilzGt3WmrQ5Hk6iw3CYD2%2BKJtpKy1ak43UUjdsH5magJctB7SxOExss5Cg5JB2vz0GvlsPbRVzqcQJIo%2F4nyQU%2BVltccz0mKnGSj%2FbHmL8PO7r6qb%2BG%2B2n9AqwXlMUjtLI%2B%2B%2FyosjG95ZZEiMAh%2BI7KzEzFAhrO43b7iP7GTnKONpz%2BXzISJ2GVoHN1GzCCrl4CIvdD4zVt2JFrwuRHTClAQM9%2BFVmdmRUC1V2Rcu4L0Bzmp5ymfE43vEPL8iOrKfIlCaRPYNoYqoyQixVqyTOR%2FRs%2FYt3TnBMXnihf2H9eUwrmHIRFVGckIwLwny%2FofQOShToORUi6fJ5rLB0mIe4x1Dob6L6KD8pyhmLnf7dbg2gKPaMJOSEzsbCndGVsPDxBM7rywEx5LiGK65pTvircGMmiIaqTeIK07dXcppzyYD1V7Chl1YVLBQG5emnneRxelB%2BJFm%2BcMQnDaa3X84APCZxpiRlteKBCEWDpqQHnOs2MQO3%2F8OzlYaJ26YnQh7sHaU2KgxompBJUedvSuoIMbPbOJUhSuMiaJXbwAboRc9IluopgwrOSbwwY6pgEImzHbT2W%2BC956wgcFHazEhDwnRGfUKvbRlTLcULmtEnscg0xQjnemGZ9RGF%2FBxT92tyTyA0cNNzuxhoMT9%2F8QKOUOV9aSxZBFpmIekpQ2zdril%2FC8BYY%2BIsr8pKzJS4TATFEqhE9KuVTnqzSEkoWQ8TKi6fnwWc9g1RhWjQdFpcNmzo0U7GmGIA30q9Xy%2F1cMkUwQg4p3Ep%2FkI%2FQThkNaIfu%2Fq%2BLB&X-Amz-Signature=625300e09fdee675e001ac0381c658794b83d7b3f7d3f0bcdb125f64baf882e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
