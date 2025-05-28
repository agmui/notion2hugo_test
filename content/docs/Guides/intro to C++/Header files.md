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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7O5RNOT%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T033645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRFhL6nYeIdYuB5STJJewNPRVcycYVcN0Mxuy69QDn4wIhAL1ddN5eS25iS0LyXjWbSjJsjiR5cdRHMzRauPQQpqD%2FKv8DCGwQABoMNjM3NDIzMTgzODA1IgxXFloKI7tEIsWFl2Eq3AOy5tA1EkvbtRNjN8APwlnKcZF1G4dOwYD%2BFaYRlVIgREru5cs4qSzoKsuKDfafqK8uON4dVIfPYE12nR0GTGVo38TkMrvkyFcxJUafCNvx6if6Jo5rv%2FVT0SBn%2BMz%2Bi8Cv13%2FMI%2BaNafdZ%2Fmjvvpah%2BILQKd7wyK877RNcnskVdWUVVTM5vg0%2FKL7ZsjR%2BUj7K15msaHdDQCAOIxCQaSdd3OlplSFrL4y5rJ2jDiJGtGkzb8LG11a9Bqd5y7Qr4MalRQrzoVMoppDU5w12z%2Ba903jZaIhvf%2B1CvZdRbqMRONCiEjZkVbMvtNNVUZh%2FNIM%2BLIUM9XlE10RLpRg4jgI5mWI1JZewJMYvnAMheX5uG6aY65vVkza9IrRhY1%2FVU65%2FLXYXgJFa%2BwqEMhdQKCcWgqwEqZpB%2Fqlv8sTFkDvBTWcyHT0onrYpBKAYDss1OwjALFSYpPbJv5xDCDJhCDa2bGyfFMCf1yN5frHVWn31%2FX%2BXwalT%2FZD06xHHOAn3OcB7P%2FNqBXsVhqzGkeiea%2BV96x7j%2FxZIFIaJIwX64dDIHZfgOt%2BQbPV0leZ5M%2BOKAZzObFEUGBB897OquhD9uk8egxHgtM187P2R8Vw3OxHxxLRPGlMNKXWAy4AuhjCv69nBBjqkAYe5SRvRo9pUdNE8JOGYIPFwcQEJWhO67EYk7FD2OwBF7eEbc4Ad143WASGhw2VX32PL0aplKDq9WffwMXTWcwGVHBzK3kyepEqtVMj7Qb68qJ9P1KXrL1U%2Blpn8E05Ft%2Fk4ilmCfnuz6TA9O56VKtJTSHf07kagD5bDKmocgSPF%2F2jLqHwYxyswsuiRlF%2F67PCLzL9kfQUk%2FXpO6G5JSPa18BUO&X-Amz-Signature=f93e7b7d65415a9e50e8d5e5fd188ecfbb2d5eb16fbb4c149a74a61e9c90e4b1&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
