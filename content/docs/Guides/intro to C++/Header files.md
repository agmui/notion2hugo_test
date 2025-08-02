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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UQ76CZC%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T004352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbLzVlJ5gJHahE2gKksZDRpeT6YH20brzwItloY7rXCQIgFwaIpFM2AgKRNHWhgQ0pWVEpsXAnYSiu9mq3XKP0wqsqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGRk8a5wNPPX3t6eAyrcAyyBpbeyQ6yPk51UEei8iDkOiKyVWnXaCxWpcjmtQfUBfa5li%2BWeYI5gCYrzT0AaPktxuUr2sySRb%2Fe8mEnAxFU0WWjOXuG%2BnSVBYz9qBKFH5%2BZjrhskIebkFTfUeSmN4HQlF%2BFUsCd%2FhyD6SJ3p94xIANff6cJvLTfTaxDq7PbW8iMwwCgWWt81jebPdnKYGi5LoYx2gdmul9BJrAVdtazOxOJWimkUM%2BsCWRuw9R0igcx%2FEdK1ScAC%2B8JhU8sNCC99Jyb9i61%2By7VppgJX2ETw4aLCVtXgZAKU8a5CvJ%2Bb7VkHpcuFdLOhEwA31o2Cj4VU9tkoDbwzCPzXDmSuBU6LaKJzFeiKgCZr7fBkLC4qPvTI0Iy5817xkdRcOTJRYN2aGjcGgR14TVNz2NMnhiJXlfPttavymYfIZKfhUcn%2BhbDGn97kR1ZhdzrChL60QI6wye%2FL9WLeYYhuAccbJxzTjCFer6U0vcXa5QuHoDv3N6Sf%2BsmPPJB1nwpdQ3AS2PB%2BblIg6N%2BkUOKvJSYGm65gdhx84nvchHTkvDRhwdAbVAuVoViTUziOUvmuFAv53zY3cDYfjwNktnGPvxW72TXw4Pq19zt2glKGnqRjCGQwpqxq0J%2BlA7LPFN78MJittcQGOqUBDDCett2ZTxvkfHFjWVD7eyccxDbV9xc8azAXhz3ZUjqsc1OpW1%2FxDuoDI3ghqaoTkED4EwBmn0UOMZSIAmQNNOCN0I4IxljqI4lBeQXCQzyRO8GHnCs6txEIWMCp79CI%2BWUHHYS%2FlbWLk2iHya%2B0lHxebzeSfgIRRl71N9OBeBdBu1Immasx6f%2BupvjBfA4lLwACjCqW1Y4d9dz4TVoeUDa0Iu4A&X-Amz-Signature=bf686c3ab56ac5b99f7e1201e7775d7f46580ee2a6575b848894584c61b7a499&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
