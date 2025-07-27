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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFB2VQ5E%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T110733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQCQf60WeyUcoYg70iXqmX7alrENB6RLzBJRR95W0KIiVAIhAOLRNGMDoEHFMaGzZg%2FsT%2FqNKjlx4p7A6p9WWJBxJMGPKv8DCHIQABoMNjM3NDIzMTgzODA1Igx1dIQP0DR%2BX%2Fqxj5kq3AOABRo146aQR%2F70xNVIGC1fy5xOezTqHIgyl7WHCjlXJqjHHLkW1oE1%2Bo9Bv8oKX2n5w2ORyriNq8wMSQDzTAWsht50JJBh35pQPNJDSDR7HR9BlB2S80ZOuMcMjlWe86x3uP%2FGmbpij%2BLYHAJqfeLjW4z6PjNKXBSdUAbsCAejdZMvVGasAAOONUTlnXsPKZZp7EFnNvfengCl7F1JgcxgMP2%2Fe%2FeAP%2BTFesHQ%2FTxgUvBMVaTS%2FXFc%2FoKTajPtV1%2FY0PWNizPAONSRqKIQaTCZcU8A5aOMDGrTapq%2BOthOhAL3VcyS003N1Ef6kGJu5u0hTTjtDHOyzqRqqabbqaXGw3j6%2Bh%2FFmHUykX89HBGeNFJR3oyfN3Tr0vjR2Yg1VICliWMGlOHn%2FFwSFAjAQNzJ%2FM677Nz8YgItbT3jewyVmy0tbNoAffttSnnEvqHUAsLfo41WJc5p8G35QYwcS10gJEINPDfzKNm835sAefaKlA0FOVZnjuHsV4TKr%2BuLpYKYry8vtnF6UZ0WQbryIe0wf69ACPbI7Cs6%2FLdTGb9MIXukawe01kkLkiR1RiRZLcKjwfiQS5zdl%2FS8eIJKGlPElN%2FVQ9oE7w1jBdr7BTYrUtMu3sTz%2FI%2FleITcAzCP4JfEBjqkAWLe3VSofJ8a6hJGppYuj2hjtuq7jrtEuGIr%2FQ8KWHDHBu4BzdMBbB%2BWJ7oN5x5Uqdx%2BN5cuMy3sBYkiDzSmoFVt%2B7ImZWBpXAjRrM7eeVuRTusgtFAbVRG22JTpykvDQ4LuQHqLrFHJgOM4CutLLEsMHouKQi009FrKcImsjs%2BbOGLy1BLKoGP8lK0iUez9EjE2dmSkPyF8hDKUC42yVpRAilZg&X-Amz-Signature=12619f65eb85c21ac2b385e95e0fce86f6ed6146e15a71c16ce969f8d36e4b3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
