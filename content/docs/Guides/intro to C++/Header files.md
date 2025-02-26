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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T74TALF4%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T121419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIBhw68lqQGhkn3Y89kVZb1LFh2%2FPVztv%2F6P1PIabVgHyAiEAphZ7xroVKOD8j7nFlJEqRaMBhQF06YfUIEpiX8i1LMMq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDEtnSuFrXuLryWQCZSrcA8QDlB7k%2BEfst9oz5Yv5wcbHJgC8ZNkuZ1C1wv%2BM8SI9i18s9Yc4SCCTLrNv0Vurik66yPDLNMSz%2FpdabNLAEYaHXSaPe%2FAZf4RY2x6Hm3MT7el6Sxa9GKoFVMSfDLQeAyrkLFGXDZ%2FlFYlziFFqNX%2FiS0YgRyYBemcAd9okv0Rg2bHxUHiq5c%2Frvt0CHTH%2Bhg6FEyJI1NDz2jC0bUUqC55vimN%2FPO22INDoWbybIR5kozqAeUBEGPWAOFvCGw%2BQ%2F3erN%2Fdhs%2BcTfOCbID%2Fq%2Fiw5VO1c%2FT%2BUxlo6fn8AjnlRAa40lTrnpEsQKh%2FSC54IyjpSDtWwk4Dj8ozEwr1EYaVSFnnrR2i%2BaLVJfoKShDzbkSW2BgWLWYH2SIhETPCTTjEaye20HG9%2B1fypwGf5A6oOFWJCHFgr%2F3%2B5vti3oIZD47UI9qSpRhpzTFUK0Ne8YstNBHy3KOs1uLpqTFFVK%2B5ndANpfuhGdKwMh7KdA961g8XnysWAmA85ODqKp3OGsRjeSMWarbobQAOin4dd3qV5yv2Zhz%2BjifEoh1T45%2FK5Usn5sl0pUpLrrw8xD7ZllEHcGEHWrOyS4Lt49f7E%2FCcE3D0cEC4AfeJLo0fngDUANydWlfNrSs3IAYKvMOqH%2FL0GOqUBL86RDsUa8c%2Fwzjygdw5%2Fj%2B9awSn6rPRIXd75rFp2%2BGQJyb1lcsw7KpNUmNWqSDMiK%2FtcA3mTKNxF9xeqwlZ4eCFTJj3HGK6xtJ5THMOnad5wQ7l5uQq%2FUxuFGENkXN%2FZpjkQmDOPnkYKypYD6EbK6i6T7NJbqudW%2F%2FJyyLGQHQH%2FyCrIvLtaB0kYTfttAsKXgQM8QqWBp8oj1%2F6xxyMKtfTN6N73&X-Amz-Signature=c63a3e8fbb5bc62baf4bf901c72f03a2be83ffc19e0a9b9e5243a48298e8a658&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
