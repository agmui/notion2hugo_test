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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QGRNMUO%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T160940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDl5IiF55XL2LRq9JleOojUA7h7NrxTnoiUXV5jze67mQIgEizbWgX8s4R4r%2FtTGMD1f0avZovQe4jasa5HhwQPBZ4q%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDNL53OZB4BoBGdGe7SrcA%2Ft43mFOch260Ud2O2OSNzXNdJoTJH4MRkWHljiNyc2wJgIRTom3ZmXD2GRR1qMdKBx9rsrehCBv9AtCUHuZ52bXgiT%2FK%2BFPJBziUs1LpyZR70LZHDInPjnDQGQyZ%2BRh9%2FMbzjN4EXi%2FKpPMBjTpRrfDP8IRjsm1%2F5zFQTngL0lcFzzhlRxvXyH39apHyTqhp%2BFBfY2jQ%2FaWM0zKcn1pIYnXp%2FYqOfL0BZWzG2fK5iX0hwmDhx%2Fvs8xQJK87UHPmVIeRVDpXOjP32vM%2Brb%2Fld2gb7vhZKEvThySbQ%2BVWwD%2FqrQZxfBDYuBbGXsXctTASkGJFrK1aiuLAnPO8NUH8lJtNGYHMkrP1Kjj4igPadR7HY8fd8cXqiua6LGSHdp2eKLBWZAXtdQma%2FZLHpSLSGcr8CfP9dQf8wZ5SkjeDMmvSns1E9DBGeo%2FBjouqfdruXhAjjnZknJNtjjRTOBGKYIo3pPnd3rjFBxf9eSKR6eHXVRQ53%2B8gwsUJrVVlxqHKWoea5cYGrAX6RyCsXbSBb3iyn4P1gtV9U23ONLvJ%2BKkeB69x4KU%2B6APz1Tb6MqECEUvL5%2BmkEbg6avjC0vEkBBC7RQYuckP%2FaWcFM89NN3x0Mz%2FyZ4twHy5%2FG7B2MIuJm78GOqUBLOyOLmMlC0fVImzNdQb54hI23H32pK1DwgDFUs7YhUbCgNhLygCFuJYFnVSS%2FD1qP4BLDoVF0HNIrZav4ogotOYlv7LZ0ei0t2Tnzzrgo1dfFEsi%2B9o66K0yFuiO55R7%2FeW4iRCd404fxf8L9AvSow0GyMlxBQWpfFpjl%2BpwcjeMleLB7mBewpDHW8LpPVcdYK0Dw%2FyLDKGnfoL0yUJWK9qodToG&X-Amz-Signature=b200b680ec106d765e6878193d454ce8949e11610c0345ef2102fbdbc74726da&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
