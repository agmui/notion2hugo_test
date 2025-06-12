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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4OQE7VQ%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T210847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQDuuIQqABi0IaFLQlbSIoDfkr46jCDROf0r4ZnXNi%2FNKQIhAPxN6I4ptk8NvuEAXFU6AacTgMMD3HzDgCNfhwi1NItVKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxLxt8jlS4PGe80604q3AMHppSf4n5ti%2Bx4I8d8MQK6ncbqHk6FQ17KJNO3eTaH3uWQXT%2FK6jFrPhyLrX7o82fX23LvFQHtFuywn4yN%2Bwj3bIir79yFHej4HyO%2FHiJNUtbp2ncpZB5R518BbJlY2Z5gvMghpzFWqZYXAuhkuK%2FRgslFgJiSnJKTTFUXryKT293v604P3RAF1hmWGO2mEX5yQV1yklF%2FWeXEgnukZeNfI%2F3Yu22Az8TBJ6VDCCMCoWDU134vY1SIptOeRkvntbJ2vwl9164DUULdQGBgrMHH1UwVoCbatksX5DIkGoBAcHZM4Lr2sGilRfIjTrf5qEdGvsOQLeU0jNHD%2FGe3PBGZwCsOQGRVHJnCGteDe8hBrsFAbeAK9Hxb1s6zHOA0YxXHJd3YVoJW9DOPBwDCwhH27IqGyoDULd7XdJumaR%2Bfu7F4myEr%2Bqj%2FxvPy9fWrKII%2BswojA%2Fe45a2fwlNbw4v2l%2BL%2FPI%2BoPGS399gPCuDarU%2B%2BaUmXw5cx81qYQnmwXMYPR2o7wAzyp1BszraxpeWOMFlOJGAIhxe6JyYRRpiMjESvkXH%2BJFwFYIdW%2FQOmSYxcztLDEIZSvcjV0nqrs6eISpttwuQEWd3aADISRjP%2FomfPFFWfPFv4MdAHmjDZj6zCBjqkAXHcS346TOZoMmPLLDA7nN%2BuGcDNL2L%2FJVSq9yGESBP84R5J%2FkRqrMCJhGA6ro9Xc4mWRbrp4Q%2FXCJ5ac2oFaB1AnrtwutSwcVaXyDN%2FHiCSrn1XKO9U7iBM7N9zpHJNzPoEZzh9SUV6aiui3Z%2FIyFTg6OYhM1dd%2FFwmSfTBwkllkO86UQOetP8Y2NCl%2BAKWixqZW8KjVjHPmvZPIROkETXUMx9P&X-Amz-Signature=93bab8219fe573e34c5753179308d23ebd67d16f819e47fc0652750f16c9bf9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
