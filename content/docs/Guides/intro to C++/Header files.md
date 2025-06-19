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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5MQK4FM%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T140826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKcm7%2BqeGbaIzBSKqfJTK9OaGKYaU4FugPKtYoS%2BR4OQIhAKu9LfGbFN7cqNcFc15Z%2BMqR8a%2BsrLnHxzR2%2FeUWZetXKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx8OnA8v4APeNJreBkq3ANP8XQaGSkYCi6oMPGudXvd3SY2FCUCNq9I3VjrLHS9xx%2BRtbrf61ZrEvpMvUJWM5Cf37nZztzBheRZbiMPtBrmy5BIET4G3DP9Qc8yRygjkfIJ1sjIA1eZ%2Bhxj3T4zoQMFmjNoJxkN6UJVez%2BkrbT4wEdZ7RJaqpJpYMIfoEURaWMOErDRaDLWzQ16awy2%2FLn0tsz%2BxJ%2FEajbsuQVru78QeXnvD75rRghkM76IYvQQ%2F7X22wNTx4v8EDzgWjrUsI3ejDOnKPftm4XiTkOl0wYVxK9y1c%2FILu1deZ89vZjTfSlv9Cl2PdFb%2FiVz%2BYHvo45KKcjrZXynipGAPhvXiPjDDzTwMl5srPg8J6rB2A%2FTC9O9kC7bhbqFtr0n5W9FNElfI1Kiadf7zddhN7eXVvt8yialOIFDni4xZsLtXryXDVIyJMU3Qp7ydE3xvUDcAvGq61N6zLETDD%2FocQWxMzSRSHcsJtXf3lIt1jF1hAs%2BBWHh9eRg4qUuVIL%2Bc0MScfGgCmz7m6X7dktwb0bz%2Bl6jvKLAClHI244uf5fxZlziG0KuDjtcA9gAtjBhgD1C%2FMyMSOwGBL4%2BazRR%2Bhc%2F9bSA3iI8OSD8dwWit2xVe7EA5jDkaByjln69KZEOzzCXnNDCBjqkAbPSes3PHPsF7A1Rax5UA0ZPA5jyOPsmAnwavXEENKnR50GLTSLIWlI328fPcqCpU4NNZpzxCz3%2FTRS%2FDi207hvdciDgf36nJtP%2B0sXTw%2BuwhX1y9%2BtkC6RZt4kjOedusfA7Jk%2Bj%2F3Qde%2FK4kLjCMrHyY19tR7BNJZhy5Bm%2BgRQ2iypIcUbGxXS6hz0Lhox%2FeFsynUumAWjOdA2gYa6KD%2BOn2IqW&X-Amz-Signature=a972a80c0234703e431977d141c0bd84c27e077a3b9c09e06b1007b5f2bf5e4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
