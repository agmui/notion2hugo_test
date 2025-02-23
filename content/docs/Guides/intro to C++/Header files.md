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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672T7AQQZ%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T090707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBJB8qoG57C5sR%2FfvYcXThA03tlxF5N3VarpQZ3mlNceAiEAhYxQw%2BbY2SZ8LNI1S4KlynIbr5Zwi%2FOF4PoJOMJRQ%2FYqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNNxxXlT7SwgdCw2aircA7rmUFUiMsyjbfIdrbU60%2BNuX4bR%2FyuSm%2B%2FxLT%2FJUq5XmMNeHrVdMwVNsGfH8DaAfQ5gI2rv%2Fl%2Fi230xSFXG%2FRWVAMnQvWkfdOAapqG6gW9St%2FYZctxTFVHXX0aM4VihVh1c3Y%2FsXU5RyCiGzz5PnSh%2BfVtZmcRsoMGRx6zwUoQ31kTahIs2lARtc6pBp83v0cxOpb8W5qqmvMIjJifNpcewnikf1O3vxIHKJWRG0DMGAJ4C5rt%2FIkTjkdO1DdyWIEgYQySNJQg6RQZVXgZRWlEuAI2GkTTW7j%2F3WwkYiUNXk1WROFz6h1%2B%2BflcOBP%2Bg%2F9CNwYVLhAOOHafQ54nXgndEahHOI02iBExLTF%2FGEm4IbdZsm1KDu8rMiaxRwU%2FEplhCH8eiBxoUY8nmNvLSfLwCeiC1z3tBxQNfbDTQh%2FTBroJ9MxU5lZv9kGczSenV0pk0O5471UCQnn4%2FjIJY1zKwgtm9sKeKwf7xgGjIjihInazClHePoiRMo3dHijYeQ3yDqFr52gzy%2FzI8G9LlMNOwx5uc%2FtFXYSvWHvE5G63UGqUafN1wsasVSYmiCb%2Bjda5L3ZIg9veImkqnNOjId9%2BLZr5tXNsvUJ01jVEoj0YjSrHiotjrZ5qmq1LWML3F6r0GOqUBdcVH18i2XV4%2FBKPuYk8pZL3xucbHN30Y10s36AVZIQsM3TmXgtTZRIQWYRZ%2FFxEVxiUV%2Bzkq%2FNWhd3aSoFb38Ssg5VbcUZ1bJAIZLLyX7rEleAWDkel%2FFVARQ8dwtoJKgLSVcLEme2aaa2l7R43uI3FQOBoMevAu%2BSUm3l40klCGuyyWAciHdG1GR7fN12HIi5bzV6njUHLLiFAfmuiFqOd%2BaJ6i&X-Amz-Signature=b586e144cfa76936c2992f6a6caf7d8b47b7c2fdc369055408e94366b31e1fc1&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
