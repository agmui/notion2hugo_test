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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHS2IYVP%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T003322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIQCeePMZsdP%2FtXSUOIE%2B6DS10OgkIXGyFAi6ly060stS0gIgILuT7XDy%2FSyfWJfzhuaY1nLAi31ESXnseYAk7DHhxlwq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDBwHjJR%2F6DDq67IQrircAxvro53sEcdz1hldWOgkFH%2Bwvwf4QnH4DwrnThw44TFmZYe18Z4BW0vvT8bQrBeBa4Modcs8O%2BOQO7v1hn1AaPw%2FEfmneWK4vcuc40UjQ%2FkWkM91Rk8872s7Ki1N4WTjI2uLvEOENWAxXNCDUNdmq8kQ53Ed%2FkY4Yhz0hw40pSlOHMNbpYF2RNhrSJmi81eBkUbp9AwjxTjHXoAGXuwnxA8FuwC%2BMaSbevW6ptse3a81FMhrIwKiTHJ%2FHmVBSRCC%2F6c8hPvsVlNVX2onnhi8JBMUpTFi7oQ6df%2FSJXcmiBT2iw1gQMTEJ5kx1qu35GEbovopbDgUyYjJtTcVjOlZDiLU9Cz7pJcnw97HCJoj3Hi4b%2Bo7zzwBmhbStOMt37txUqHMyH%2FzZNN8N%2Fp9jgKsn%2F%2BsgG9DQ8st3%2Buj3ZrfFNaAjR85YSwjk14VSiE719ncXy7MBgdDrDHMYcl1hv2ONNTPaziNnX7KgWOzLKYLO1wOlEpIXm447iu3gzB%2BdnTIdznQ1Xq%2FkNiPaSCeu2yjb3biP6%2FJmOq1Tg5bdXZKL4p2q7EWIt1loGWkk%2FmtUB%2BaQbIlrQ2aa62fT0Bpm4AsBTQ4qF3WoObQvvtxcAUqhgD80H9sy4%2Flm05fuUXoMOSrs74GOqUBhhpkDayxxGnrsnyczx3YzKwUlE65Z8eL5Pbhc8HnPgepwAlznztylvLq9Q24a6YSFepeKuuYJ9Xxhcz1W2SoZpm7hNUID7u%2FvXkGPJgIm9%2BgOsuZRWl9bMdIq8Npy1%2FD59aNqShoG9AfdA8bxOY3Xqjq7zQDPnUej2da7Frrc3cHOU6q2A4%2F8yovrDhUmvm%2BR2G6kdvFieipnQxybrxCBaOIGe6E&X-Amz-Signature=f6f92a291cfd7f9deb6d4299b5663ebbf90004307b751f157e4716639e753650&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
