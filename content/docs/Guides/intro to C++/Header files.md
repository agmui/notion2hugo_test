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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPQCWN2R%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T170857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQDcRZXP5d96tgOiLsmlzH4WvtSaxCRqrghkzTZnDKJpiQIhANIh3A07afFzDqab0IPnAQiWvWRT9nMd9nMuhin66R75Kv8DCHoQABoMNjM3NDIzMTgzODA1IgxpN6q%2F5j2QkQzTNBYq3AOBGo4TTMSaFfnz9yu3hz418Iou6%2BjXftpS1bKY4dE2M1kDcrt38ijazf8iHV6UWPp3swyW89K7mcb50f%2BEoxdAgDHhFIxntE5vt3Ff9KG47XG3gsjTV%2BfGj99AO7ZK7NeCATVSeEQWe3HrVl7u3lpCbeHMFhFFPJCUWKcmsbXrv5sJb9PXP4y1j7FbH2GeLjH9qMjOZWLwCSgv%2FxNNFinCw0sll1tTTQB21p9vdNBFsQ%2F0zQVEGp1YuXchjO5CLdRLTPBgX%2FxKjK%2FF0%2FzQ5lrW3HkZiJUxoki5NrSvC9qkyVPdEKuhLeWjZySq8TmdlZcVtgxD%2FST3qmafzhGxuUBbi7wg11RLBWtWLlAtA%2Bq3llVmaX1UBtSeuXK53CkQmQ0APa%2F6cJgJG4bBby0mIqTCSxmTTT49nmuRKlOaqEv%2Byrk2aV%2BWveCGiOHXMZs0hyYtbKcAQBFU9eTVi2CeYHGlARjTMpo3Gbm1hpKn%2BRbbXKj8bT%2BYK8wnDCY8GlRGNhXgKmDF%2B9PDCLnuyRPIVl%2B2PRY3PsFZvRFjigvqy%2FsXd1WjCLCCE7jPwwcCRKtsaTEk8buxPkcsUYvv9EQ3LhFSOvE1f0S1f8s%2BU3px2%2F3zCdJT4%2FG%2BQ1sIgNbedzDf6q%2FDBjqkAVrlqgvhk9nPDhjge108xlbTPa3R4PV03NouQ0xrQvSDfyIn6YKygk4yIFwbTl5ZPGh4GbczlJ%2BzeF2mo6bQkH49W%2FwCw%2FDQcHo7nsJ6d5qWtesM6Vmq5kTdhI%2BEpj3oegIfWebhtTIsVXbe1wTFwXKfys1GW0a4Z7Odea4i87hMYf%2Fon1APUnnxgJyBj5EO%2BYJ8bQ0eiaowE5oe0%2Ffk2zq8IZAu&X-Amz-Signature=0bf5d387eeaf1495792ee4dde2c231f0b50581035ef758ddfdeaa80ca489bc13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
