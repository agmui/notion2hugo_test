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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RERZIVVF%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T050920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIEcFw6zf67aizdE2fOfd5qSXpvbznUyCmTsUv6V8mt4iAiEA0L%2F9rcVmq3dcFbEtnbEQBZji76Fk76vbHzW3q4tpqUEqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLZA4vdpo8ipfmIsAyrcA0ilklwqcXTRm1tWNOEBNcWb5sxSaKFAGHFuxk7tQzIqonYtPWQd%2BHZ2Z%2FJ%2FQwWR2UN5f9FIOEpQYRccTeNlT8BM%2F%2BBmF1nPzbcbs2NzKesGpb%2BX5bUF1rM8OTHnuAtH4qetWf29yZeDtz%2FiGQ8wfuT53U2RNpggHhAz0TYz9wJSgCp1tLkpk3%2Bctsn60DF01qR6ggscywG7QSk029S967dwGdquvgGm%2BDTK%2BO8jWqJtZqgb7ZdtxjSL5hEaIXn3orNlUVlcFphamnAWs58vljkQt7jQJKiQhQxA%2BChStnzJZKwbHaWItessX7WrODktvU%2B3QPYlDbIUedbp8zcjLl%2F2YJUnATPmNql1LRmoGaI9YdBHUkbhIpUbmtwRSAGrhxYdzph0pvlwGsueKElLkq3OQUfkSWcyhstpN8cqBHqPXl5%2F2kQFnJiL3pPlgzbBqsN3ftPl%2B8uBq05p24bSfspKZAHCfpfzjUwLRwhqVVjQzYoEIq4bIfCtgXi%2BCTIhfaGLsrHNQylyNLiO12J%2FbRRyXp4BwhW2jwbVTez4yPdUIor%2FfTNEl9yYfB6Jcl4W4H1Y%2FnqJ4svNEENFgcKaKgy1fAuxE%2FPFtwlfcGJaqd1H%2F1h4dPX61K4MKdx1MIOPi8EGOqUBUJjTfqMTeq8NxSjvf3%2FUvU2QYlK%2F0p8X9RzmhD9omK%2Fa7wgWVL70YRp3Z9M4BX9c0nP8ozcQbvXfIqcWQ4ltDmJgMnKNYdLMQHYCR7KXoP2psdcXQufD1zoyeK5VznfcLPdQK23qrMmuodUfAGvnjcZEB32gjPQbluoQgFJcm%2B45VUUJxxWRG9ig7fMF4rMnZXCtmfLDzxIcxdXQokPAOJA9rr1l&X-Amz-Signature=ddb43413879d1557e04f1eb35b0e6d233dd4fe94c200333aab93c2eb851a54f1&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
