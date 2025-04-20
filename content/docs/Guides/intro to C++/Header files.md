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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665567KHYY%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T050752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIFFQi0KKI8OYDBgCaydsC29ClV7KJd8fp99izx2SQLfEAiEAgWwTh4BD%2FGyPOaJpRjtwXGoF3S4T8UlkS%2B9p1MNKi3gqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGvLOnU77ew4vMYaFircA2I%2BBwBRMMZUBss8sbn5nJVEilRYFfEieRBJPWFeYhDZ90smXPYeKgfvIwhfS%2FCbBGZ4BaJPohh2jaQEfg1O4pbT%2F8roJvNDq10JG5WSCb52l1NSwt5V8BHPB8nHDoAAPFQztxS%2FNx6X8p2buqmkdhX8qu%2FO1CH7kkUA43nHdiz%2BRocN6AM7AzhdksgFZSkVMnmgM2Xp4GrjVyfAYdbZtTip13Y9vKUlZwRjb1osgdeOEz0KJn%2BVRpGIFLOis4jqhVwsVk5JgeO6rpJ7gpFJ%2BAtQo4lixIjoyWDE17K9tzXdifnQ6t%2FznCslSwGurbvSyB0IjMrKVLyjR0oRaBbv6hNKY4hnk6sb6Yw1%2B6MXq0GfxvlmxWqHCfHaPRkz9ZGPw3TbxiIkHg7ZIa0PKTY2ral5d5m%2FUmDAynE2V7j4lwrAAbsqnpuevMTZEtZc3zt3sJB62ZuIolDOdxRK948in93e909g9e%2FtcI%2FNwxJHzL0f6DuO2r9ERhQZUvDpKsa95%2FxpjK7icfMdvVxuRmmc6KUIY7fqZ3htk1D%2B33XU%2BM8szPimFuF25KfJ6smWOLUxCv5AHqzOmAIGcfzGOTzhyKoiMrwxAV3W0Uw31PXrV4UWUzagwGPKgDLRIWroMNeBkcAGOqUBb7SYMZvjf23GkuZ1GNW2jwqE9AW1DFKC26CQDYASCNPErk02jztLC1d5IofdD%2B77f83TQs7k44BbGyG91VU0R41zoKmgxZjQXIMZ3ta34EknY3ctvv4jQsV2KrGo%2Fy6BsCqGIBV%2FMBIldg2QfGZJINzSIdYIJenpQSFdkkL4Dfc9%2FJMqYWXc5g0bh4t5%2BdPU3D3PA29A1Wnm0xQ%2FtDm%2FRdaJmq0Y&X-Amz-Signature=d32843a30299a98d1a9235b71126021effa7b6327d027c2f44e73958658ab264&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
