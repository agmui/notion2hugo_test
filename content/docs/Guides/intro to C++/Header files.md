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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HP32NPP%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T061422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQC3g3fKMPlcR9Po1iGCMgFL4DEA6VInsNcH6zGS8RenOQIhAK3ZtJFLboj4293cExNUtUrJ6pi22ykMBOi7%2FFQHDa1nKv8DCFYQABoMNjM3NDIzMTgzODA1IgwK3QiyfdeAf0qqiEgq3APjT%2BlHxIZSGuXmMZZf5MJP5PyUg1S53BBXGFb9BRNjPUXOyDppyW7VSMJna3F3F0AmaZTgrn7gIJriZJMIH2NSBL1QpLlcrc3RabJSur2GdkQAT7bS9mxlcoSAkoAm7b9H2kFDjRdkd93VWmaNNvT8Z4VTe5%2BayGHwh%2BCDC5Q1lhLtVkyz8Sc0AQfE2QJtoZez3xTSYQt46fWWy0seXMWMNtfJD7asvGU9TU2ygEu8p6aVlcYvE26YakAU4MUtp0g0HPQtLagmXpOOR8jpi5hAF560K3ffjTsHM3pMMTKS5rh3K5TEnpg%2Bkcg7Ur0LgpCxW3uqikqWBfY68%2Fxs5l68xC7y4a6VfjaR6897N%2BrI0osz0iEkZ4Hb63%2B3MRFh%2Fu4WDizZxkGzK4hebP4Hd9%2F62jpSyl7lzShmG3VQikn5jVcYeXMb5XXThwnY5eSoORHcM7bENROlFhkoiqGt9dofsQ%2FGKYH5nmtNUvnoRP7XgPGEVsCmjqxmWVxv%2BnA3fthmynZFGij3tHuoWKS%2BoslZ%2BqLL6qOLYkQikaO4cX2xgWJndvHnjsjIrrm4oN4bLAbYWCsmb7iti7E6YHifLkr%2FKbuGdVAJEK13jn8%2FVgslZQQx5m%2FaejtLMWn5gjCRur7CBjqkAVJ20CttaXPhLoTjgU3JCj%2FC%2FHKq7ncsg4wME4ojilAUORICJ6D4JSf85tnaItPQmWZSqiugqFG2QpZTXJ5JcjlPHvda0gfgCAf4T5kJiAfTXgvi9X5DdQRxAwqZvQp9IOaxjvN6snTtgQgwBnL6yExgyueShwbMrRtvQ8Qu%2FRpbqcYjTjAUHSEG%2FePF1eEfWjb%2B9hg1AwV9ZeSXThP5rHrBAqNa&X-Amz-Signature=9a0d74d09617f40eaef44929bfc6263cb83bf260ee62bb758bbea46ff914fe71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
