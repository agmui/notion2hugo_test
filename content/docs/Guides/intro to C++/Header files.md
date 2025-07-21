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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JW3R4ZP%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T191003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkdCQkicBm%2FR1cd6FxQqYcb64JV%2F7N0QTPgRTS7%2BAvDAIhANRzBZ837MBIobJkztuCmpLUM4rlzdNri809io7Ng74DKogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwgm8VIILY33bOL9U8q3APu6O6jywmplwYiUkbKBn7ccOgyzzjuH7X9awkpL%2FEM0fzzlSvT3AabGXMoA%2Bn71ozeEIsTK70pLaZl9Ef77o3yLPyHOXDD%2BZyHbVIPtznK2gGgAgJBCD8G8rKQwRNzhIiNAfla%2FrSi77oaNPYZfd525%2Fuq4HECPPPcTJrwfpzHpMJBkkb7Gyqo86o7lgkKQVc885xqIFpV2IhFhmyMRfzmc1mTiSFc%2BDBKc1qBtp%2B50XGh1qPJsVEiwz8StnmxJreJwRJSYH%2Fy55B6fPCm32I7OxylBX2SKoAbUHbAObdU7sdnV7jUArnb5AHcx%2Fcy2iFGitm4kIDgmjtkAYrDeSiROMU6zsxKEfWycSGqr7Qv%2BSnulfHEjn%2FW1119XyKfwWut%2BYooOW9dM%2BQWew%2FAFIVsu5BI3uauioe9fr%2B2ZreoeWawOoKSRsRdes10vfZgmQao604gs22erJD9ENQt2GBke%2FLBXMkHBUN5pdfVeIgfD%2BNRW6bf6I1jPplgXjxb9o7ClHYNovz8a0M8wMlHHxhRi5GlsK2Ng%2Foy0OHd1lRhof0AHIvMme3KeGGj5u5S96IvJGXvUmIlwWi5YBbC5oHi8hfZ3eCa3jZhb1gOXB8qzDzu5q4OuPCWgEip%2BzDRjvrDBjqkAYbQKHsh6rp0f8RH491mI27MfJz0jFy7rzwPoxNVZp%2B6kZlv9iezYTEcvqgKGs%2FgS5k8rj4%2F2ERMYvdNZA458AMAipoMMKe7jcbk5n%2FYmk%2B3r5BhxbOL90ySvRbEWgmFN%2F2KRgMjaGvUsI9H3cVkZ6walIrZzTYi88ThFkuiDnwkHJE%2BfZGoip2Lx4atnNeDd9pfIa1DozY1LgAUPcy7UgskYyPN&X-Amz-Signature=8d1fef4fc32e0f7646a3dc785a4565bbf9b05c351cd7d59946d1b2938c671518&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
