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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SP2MTCTQ%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T090922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF1KwpCAQV0vshxU%2BROJEbX%2Bor%2FE5TRuGiOYaXqvGnG5AiB476tuso3QAZ3X%2FX6A8%2FCXuwPthRsGB5kTRb3sIY5Vrir%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMF6t9W%2FegfabFSyppKtwD9HTWq1bZHz9oX9pHztFEVawz0T4wHOGwdvXvvOJtVzL83Twx9Hu3m9dZ5Ff1m54%2BCVIQc5%2Ftrh8dpIXFtgMToUfzslcy8sVCmtf%2F39BPm%2FXpkKS%2FiKdDTDyW71wjQ%2BgNL7uk%2FxYSW8D3YjokDfK0rmRdNNMGjGB7tMKveyhFxCTolyusHhrMCMr4SBuAJ2p4OWK%2Fwz4TVC9G53Pq4lFmiicd4glxhdpIHoIrrWv%2F48zL%2FWfWzSPVRag0DDtEO73Ji1jyZnHYmb59rn8BTytuolNST7AIhd6yLW%2BwO74nYtrMwjqZMiOAWKbWAoBbh7JMkYXOudn%2F0S1iU2GM7%2BOdMtrSNv5VvgD75dLnkX7VpA36ns%2Bo%2FaugKeH6gaWVBzmiQDn%2BTU2vHZFrX0k6IykFbroM6YX%2Bg5nO2SOYPq6hIuAPlcANQXlGk%2FNs1UHmyuxvhGtb6IxIroi8qkVlQyqmWADSjPTMGyWSsWrRg2l8QR72Qd7YlLRWOutfNGNjaYVY%2BPzwfK%2BDyZ0LsLNnig7nO6dpaxStb0z4hfC1DrkZq1o7z0DvbDd3UjNQfAf%2F4oHzA8Gr%2FUcRNGIIl6WYLna0XQGxBG7Xew051%2B6CgSTHAyic71eJ7X6L9%2BBC7fAwyrb4vwY6pgFXlqr4ID79yR32qvk7cQ39N11wF2CBNz5E3eDxgUzmRtD4M4ELuXOtqjOI0SF6fyeuv5X5mOMdZk1%2BKYltvxSlIhCv8MHsoro40D1QvV1%2FiB1I3C3UhQ%2B35rnPTtakD9dG4c7RvsRpGGO6d35hVLc62T3Ylo6YMBe2PfviYGAOsbBDkOI4hGXEnFn8xaNUsD%2F78a6OY2fdb4VjT1%2BSm40XmoCLnaCT&X-Amz-Signature=28b95c1ec198d7953ab34db3d858527e06e875113cbac73c9fc3610a9fcc44a3&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
