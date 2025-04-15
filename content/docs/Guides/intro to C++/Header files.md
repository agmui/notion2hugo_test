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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZA7IFUS%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T140854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2BouOuEPXAM5Mk4seeVF0OCCSxlWD64K3WxHJVgNKEQIgFOsRjt6P2aNwA9JMH%2FHw9eMgjhNohJ7WmU4wdvw5E9Yq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDMxjaXadBKZaTdW3SSrcA1G%2F2HPifE9oAoP4qzT3%2BJoq7VHBltBJrLcgSaKXxDhzoAMn1fJMW56DwoaqiYJA7%2FcEj5OpieHTR1P7QNsyAQkbxFFL4PSxhSjFq2HwC9sVa3T5PXBWg7jDa88pgR5qsW8%2BTawFYWKnEYNE7TZfxPNio7sWqzpfKoL9Dvh3AqvCA7LCor3sItZg4Rc3v2GPO895MZjYL7VL%2F0JYIFhAS6zpOit%2BnI2JaZX4l%2BJ3tCF1hJZmcwLX1pdsJBCpaTvTmjxIUA9Jn3CJP64QWmJHDS0fiJgHkda3gsxVpw35qdDQPlqnFQxnHur2Olz%2BM9PDW07YDBMS1hr6tBrAjalfiA3CzckRQkQyXqkP6DsTz1obJjUwAlxnmXw15BjJR5m86Doy4oEIa%2Fa1o%2BP4Xu08dYKR39eINnGyyOwbWCszFp16Z%2F%2BVyAdGnEPwEspSMrqwADj%2FFCG0zLL0hNMY4Kjt%2FapTaTtHBn4iaGwixojsKBtwDcKdIlVkfGkVCDbQe3XZCzvHt2wtKw%2BoAIqCRAmenmXsm83ErggdyurpOv%2BcyLJQLp4DpqulZIPWCqaJ3oKvbLzUzjN0XQlXPJFqNP2Woxu2pDsFZzpjJKYj%2B5I%2BFpopSbjvd3ZpC8avcZe6MIXC%2Bb8GOqUBlcWuVGrV8HQtbUAq%2BMiOQpt6H7O3pXNEi8SE6jDpkxCruFjnGauLL7bVUa6cG6yUnNJ9KwGk%2Fp9Fcnn%2BvIn360b0HbmYhXUDR%2B%2BdSpzkmmmvt1G7Dd5bKgajPlwxBOCmG0g1uMV2eHKoj8x7j%2BkX4rP46Aw8ubiIxKKi6uQ9u4k8XMr0K9U76prUA6yOgacpyQpsrkXhrKb5nrP6k9np%2FmUgRn24&X-Amz-Signature=3e3a4c2ff8cdcdbf215b0894eb3d566104688b962a8fcea2296a8d8e05772e37&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
