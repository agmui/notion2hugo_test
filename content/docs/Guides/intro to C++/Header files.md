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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OLGIIWJ%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T200931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQCoYYRYnCy3j3fsE4ty4lInctsytEky2DRlC8txO8xU5QIhALoDLMxK8IQYIEBAZa59ueAFkXIhkxlhTfp4GQS66b2GKogECPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzKK9LHwLvdT5rRPTIq3AOzOtTw4IehARZfAkcs2oqrR7VZBin%2B6kNqhEEv1Dq%2BPGCvN7gFb1OpdvYfBgqO0ZBsYri%2BDqIUnjqUW%2BNk9vOZh4Hb8huptDT5X6VSg5N9TqDbOXvwwU%2BVay%2F%2FA4e7DqjEx%2FM2mki3z1UvmFotZLLSBVsSN1Vr%2FUU8PgVcGeWka6GmM1NOivNBbUvPC%2Fr76oh9D3YkyhA7KhhwEZWQ8ac2MVVLr1yannVQlnV8NKqgR7hDHXPGgyqcI6uU3Lyt%2Bry7P6SFXwqW2%2BFw6gT%2BVpvs8hOyiA9qdGwA4XFbh4n%2BHZlqljAo1kjgRRqtr3vb5MbbE5YNTj44RAoaMo2dk3xSNsJCHMidpK8IKz7UCZFl%2FxcfOd%2Bsu%2FBIC0sVLjxP2uj%2F%2BIcXi5ZSEQ9zqQMzgEubceSdtwxwMvi3t%2BGZJRLPhi84%2BPUOGCgY85kFmX9JNyIylPnBMt2OAsS33pgqNLzXv9kO%2Feh4CbuEIsaNtN%2B5pB2ShW%2Bx8kQDBx01udCCerOWXp88Ni1QiLW1wJjWtBto3ZjHQHGZnXcMfFOOEhMFH5ufa%2Fqjeldx5MMxcdZgHQuBn4cvZokCAfVnD14AXrWSA4xgqG7LdfSynjky1XKVXIJTIcZZ9qLso%2F8IVTDL4vfBBjqkAc5rkF6XEhNHtvs8QBFGob%2BAZhM%2F6L1vfh7cUSrCRBLbjjxtcOC1wowxAwYHTgEa1fwkJDdXQI8EKfsbjXFFCCPgoaeZa0xslrqCUNeuaC%2B26JuoL3Q0r478ivE30QprhQO7XADDk1D0WK93TqgzWIuD%2B8cVhrKY%2FpjCYzWb5CiK10Y%2FZd42c8jmBVsfT7j7tRx2ONFO2WE1JCfPq0mLthOlS7tv&X-Amz-Signature=1be2e31e49160408927d861c3acf09ffaf214e2ada1f93779b106fa38f8e7eb4&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
