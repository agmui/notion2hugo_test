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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2KHLTN3%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T061338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE8pmR%2BLd3tM%2BpTar%2BcQcI0yHBYT4%2FGLJYCJq5bBHf6JAiAGl%2B8mDzkg9mMiK643EToMLUjczd5b6YrPuF7Lpt2YpyqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4I4DPVS7k1hi1wK9KtwDQt%2FL6eLXBjN8bKbLdUthwuBx5%2Fo%2BGrI67LYubpHOo5QqYH4idNKaFCYov%2FgWZW0nQL3200C4%2B0njPOr7mIq5f4KjmtG0NZwJ4T%2F0TnPlopCDyQDETzQnERVLO7cQ74J%2FUvUY0dOdlnOFfL%2B049NDwLvAKSk7%2BUcdfJ3WAEaALrLHiRpGFIqjy%2F2zKL657vcHTe8ida%2B5f30YZqYTMQ03ntZW1fKCXtIWVK1EqALXydAnOwEVZD3q8BQhLME7YdLIPKPVjZ%2FvHNZdO6uZuHo1p1XZiK8QxV3PscbnfFfNnpJZnwnC7QVL7IV1Ig8oOzU%2Bh3QJ4e5MBXKBeZ1KseX1wvm1a%2B2g670izHohR5aozG0J%2Fa5aMGai2v%2B5sfmvRNPTNcwXE%2BkxbKQ9bijP001BVNpZ%2BP0uVssEhpFc1%2B9WRVafny6xWiBeZ8lD6GVSDDnaEmD5Y4dvRZMk%2B0QlkhGsHREjirI0Uhitj46EMSQ3kWP8%2BhQAKdV9FU%2Bd0aSx20g2GKYyRWNn8SuLpm3mDdyjW%2FvFonU7XitqzylRgYdbqQi8YbR%2Bgl1l84A4mw%2FKrUHmDgXZj8S%2Bn8Kt24pLjISvo5zy2ZWZC3gauyl595tlXZ%2BQREm2gslnUQPUiScwwIirwQY6pgHffre4oS%2FWN3yZ9umDOrD9MvEx3wYpJEXdRwKhGdsqi4AThae0IX7O992ntFI%2BMn%2FAYsBZYoJPR5Ju%2BsUdW4Yv2DrJxqhEUbNBj7J6DCJnHCFtFddAaVn8fMRuB0FQaoNsgl2A2M2eadQAQwuHHOqzqg4xRGSqym5HraBNiWAPH7FHNkW2qoQffWdvjY%2FN9Bg8tmd0m93df53e5rgJk2PDbEBWyfyr&X-Amz-Signature=86f0dfe66a743579640b3b9f85339d8a8b42312bfe0904bfdaae3388a23cd243&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
