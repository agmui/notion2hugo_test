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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKSTHAJY%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T110106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPiHnvxBgaaKZZlV4yzV0Uf4HpJgqI4W%2B4gI1HCbK2FwIhAKjFrqKcilVvUmJ%2BFjUGFn0i%2B1%2BrxChCc%2B8HlmwB6nsKKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwPXRW3POha%2BFCQUJoq3AOsNkiRJj5VwPVf0sJWRuRUbghpt5xG2y8n%2BiiNqZLh6athwRsnkkA09xnHS2aqK2tnNDj87cc6c2ts8OMKyrE8553fgR3whLDqxWExLw6mY8JEqtXucxk9114J8MSaG8GkGyIC8IHuhQldB1hrRfPP%2F0lA1VGptl%2Ba4zzyyoQ7u%2BTd9BzzdbSdEaMPXXlj1GgWL4StTCAAai24Fgbn4JikrnC8bnOZYzJbAeMCM8i2WBPFuTK8%2B3Xv9YyvQ5rdDAeSn3Qiuz7bMuzY8FMX%2BvbcaRVJCu%2Fgw58ccCdKxwE%2FIvgU0ZxHkyvLeR2rwvcC1mFUMs%2F9JGwkUm5lpOfPgBnMdk%2B4fWvJ2b3QloYq3mFOJtV%2FBenwerK1sFPU%2BA10cug0JrZm3z9RoJZ%2FdHaZo0qezdXR7a0x%2FffalBQik6rkzYov%2BrPEie9OlFY6BAMhkaHtJvw0rw65IIkr8lDcgV3E7tFsqnBT8%2FppipWQBHzoN%2F0pjGPCKMsPw%2BJ4cwsp09svCbBHFLEOyjVt9tYIF2oqYNIMS9UABJaId0g56J0BeM8Rp4NceCx8Lw1F7lplpbNC4X9Bm4YOqPKGFe4HcQKJMUmDGeuoOvQzYRZmLg%2FFqf6s8AajAJ%2B%2FUL04ITDsyrm%2FBjqkAZ0qbcRF4XSE07IYpKiUbQTZivIYjqtFMvLKjgebxh3K4Z9P%2BZnFmr92IwYqbVsz4jih1WeiXmD4fGA6%2BzrqiMtRZFNiZi9QumMg9r3li2jcpKD5E6A%2BenVuyoc2JEk2hsROwNTozjLYoqDiUXbRqXX%2BKz7BpMXJgDGD3LDxzabnEsYM9gpY3H9kDGF6cTgubK5kYXaHaYbHExds344IiTtzKqTI&X-Amz-Signature=979d2e617a81a5cb24d19ebdc2912d2d7f39e9aec45bbbef393467d19794ec46&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
