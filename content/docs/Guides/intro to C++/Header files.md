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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BRDLCDM%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T150722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIHipjoxZ47%2B1GmgC8AvRnu%2FmM%2FY5qqk0XrzPgtkfM7x%2FAiAYIqL%2FL0aU4ABusN5ssrFd9rwuvLr9M2Whq2acPmpoIyr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIM5J1k7SVviZq%2F8bXQKtwDjOAN641VXWyoEL6HroW4U%2F7uht%2Bs2%2FHmGsm3xzMNGtUu%2BGANgpbNqVBnjTe5ZBLfSC3ZF6EGoNQ6oFqoSo5wsjNTkXuRgzLHxZVeS3HsDMudviW%2BmluSZZEUEHiAM33UPsW%2Fpe8isDcmZ2YXjL1mPYgQU7ejGBMcl%2BUvZoF63s%2BePnlafBrjLZ33pxo5lzByS65JrtHFjUaC%2BFh9eBzvVrDdLZR0U6hYfLDgq52BU%2FdoglqFcK%2BJPMzyKIwd4DgdjJVEU4GVGLr3d1v52QThnFRt1ZbFf2x1a8g2IxORP%2FQUksG7u5nuljSZYZ43BDGQrJV5iPBmYUdGpqNQmBpeIy4yd2gTLziITIDK%2FwGpG5buY9n7yvxVuXYHNzSudY4bDk7UnvrVCEQcSeqp2yvza8rKdhacthMfhQGig8C%2FyqHSTEMp55JA%2F05Fm3ES4Epd5ptiQuERpc5MvnGirAC892AJZu%2Fw%2FFA3%2BvCF0JPClwKXlybuzzNm0zu0EahG07X3uF7KpTvb1hse0Crd8NPboItJTlvCiINLw7BBUjkckeBD7%2Bc6eD8EXzs1woMRubd9DsGcQZi%2FsRTmlpPtMO0Btn6l7hWBcWq5BvrWpxvqtSmHRQIZRNRzDvSzLzsw96K7wgY6pgGftmwy3448LNSUS2wFfvTC5ASGWx9euEX%2Bk6%2FaLP2NXB7mGo%2Fl7wlabpQffnefNK6wOFfb8qGpcCm2XIE5SoCUDD3kwvOhLCPrLmBJo1p3qENNOYme7bU8T0KmSTvMcreaGmdIac34iOIEv5Czq2S1eZo6xe5ZrRWt43024d2qKQV9P3qOzGPjPDSm3cZfizFkQDE9cKSg2XY%2BSIa9QAjyeqTEEpym&X-Amz-Signature=043bc25498b9ef431762d1424bea22a1d7e719e9911a06ade554dc9a173bd821&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
