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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQ3KETW4%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T050905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDaors3V136TBBZnCOTm%2F862Oas100Ev1pQrUUDrnwMcQIhAMDxtUn68mp6kHrHppmcSUgZLiLM2u6%2BSvJD6BFkP%2Fv%2BKv8DCD4QABoMNjM3NDIzMTgzODA1IgzGvsKuSZQoQP3kHNUq3AOwpiYfwCkU4clP19REBDivufYdz%2B3XGI64m9Yl7S%2FCjJCR%2B9E5B56CNrvq%2Fg0Y5hlKKnOrLOyECpEvnLbgY39byVJD9tklZDp4OuCueUD7rzaRde39nSKG%2ByFwPTAQOLODW%2BGDQ8TU7mzNiN65Ye4tRwtnv4uNCleXuib%2BdYVRzwAq8X9G%2FB6GKkJTiRB4r%2BWDPrULefOSAjXdDVZ%2FfhoZDifX7Rpb9xoGlyfpk12FINIoRsXZPpYqHxQaw%2ByaZoS5oZqVuAMe8niejVrHQiQauL38IKXBWhE0Ch4np0iJeB3zJ8AswMcLXevnrlWrQL6SekerQXg1lEtX%2FyIjTJfvc6rZDU98hIKMpDifXfBWyDyVxXy3CgPN%2Bejk25oMCMlNFU5reFl8xeQa2Msc%2BRZ8oLN3u9Ow5u6xKuD5QGu3xMNN7oju0uF6PPrGnclSgkyuPuJyLee8X%2BGVcg9IDQpdvxAnZb697H13nVtDuufO1gtsUanpHQ1iIig2AjgO0IxoiIoZhSsW%2BgOBMgDLMoGTLz4sjQtyK%2FaMR7n6HHKGqdsmQa7tmd686rwJYxlg1m9HzdGf2qJkn69BXd6UiiMr2W0gCfXAHn0PUs2tY%2BPluxHV3OeJsevUoNI%2FQjCY8fy%2FBjqkAZMTnzxBSPRkI5U6KlxDNBGy0B7E1BCoBcwqPyinKlJZoRAMatV93XpKTJ8lqzmeVOrYijOvngfBwzIBx%2FDRjCyf6kFpFviIA%2F6AXFDQ8LPzPFeutuHeywReUT3A8ArYcXSjpNZOiKVeJQx3gJXObFfA98cFAnvbxugQcdsag9hyiO2AR%2B5Qr51bbh2UPqlf5b7XNCQqdQrmrdoi0CDFmXb5Oa0c&X-Amz-Signature=23eb905edfb285e17b219759abce9c986064207b4efdb496dfa68dfe9c28f877&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
