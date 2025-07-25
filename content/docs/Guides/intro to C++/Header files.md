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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VC7XBWKC%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T181254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIAs69V1Fb%2B3cRG%2BWHbjxT8hP36ufbxDrJ%2BvGZDYLsIATAiBv3pb7w2%2BG6lzoX3n4nysrs2ES7YG%2Bl4Ucvij8khjO1Cr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMFZwkd3Z8bKK084s3KtwD%2F3K5m3gLIkyba20WhPZzplZ2GGPkWEKSx7ovL6dWqDY6sfg2kbZxKdvpaelhTWtffjbrLKs%2FuSyLU4cvTJ827GYe76biYCuwUGkMtLKPsKJP4xr5ciUWsAvSWCnN%2FXMCqy7R%2Bzwa1d%2BtiDKfSBCGQohnISVw2I4snBKdKklFh1xAB22RidWn%2BRkeCJzCTH8NGPSKXuWMMJ2P9pyvhK8W1tvSa0hTrNNRXEk6XCJRzQgM%2Ft%2BzorYiLYe9beK1F192EiETXKcjbtCq2wmfv91VJsGLyKZt1kkocMrlzPRi2w0z8EmMXhfdSh3PIlBJvvo5IDDrVdyslpOkn9yw1e7Hbt3VIJ0wcmWqm5O3tZS6M%2FmovM4%2FFBP1GR0Swz6OJFyawvck45%2BWrEUaHRrbJNFz%2B6iToPxE9QjrARd0gdMKyoEQ7%2BeE5B2VmA%2BcXZjrwqy3gnTr01vWbVzk29Fj9tHRU0ZvWzROnJ2lJiJBEaCiF2SVILzh8jVqp8KNWYcIYp8HzOZQ6LOWexnBicm2zCes6k6jdwiFnchE0%2BHLII1Pdg%2F%2Fyqu7lNIBvVio%2B6E5IplPz6vsq36RLOtReHhhUznI8dko34yk%2Fi0Hx721rJyMsEHBwen96wiQZJgW9%2BQw5IaPxAY6pgEXbriVoBiAZKqlVygD2Kvcw4QlFfZ%2BEh3b33pmykpTm7R%2BWL7Bqt1TzZd0LDd7AS4yZq1IWlyKSpqBK7ArfDlbODlhl5kb%2BG0ocbr%2BKLu9ZFaA5vj2caZREbehLn6t320mNHxf1%2BTskSrlQDXhVa8ulPoFxYi%2FoftXmYsITTyuC9TwKbZHH0m6imIDF7GGJKwAraNJy2%2F2S3w%2BTCil0Ik3%2Fnx5TdXv&X-Amz-Signature=50d93ffa91c351b0008d7bb75a41a48ac8a37b5fe51b5c99e11055489ef3484d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
