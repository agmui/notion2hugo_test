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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WPC3HXH%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T170757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIEicUrjhmb5cNj2dzEhUb2F57M9iovq8JgZnD3Wm%2FNdqAiAx%2FPVDC%2BdyEo8FajQt65TPrb02qufw%2BX%2BemCTonpszXir%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMEdc0%2BjcCY%2FdO53TEKtwDm7qgWGiVJW7gTG470skXSFk7IweeylM6q1gTbHVdC1FYi0SOcJjgtiv8lVro16lQZN2idf%2BFoYwyYyIiMmmkkgAgqQx54%2BAqB87YnMY%2Fi1abRBOVJe5LDkXMPvet2EOZz47hzMVYc1pK2PshnsiK5YJpw%2BVmp4oevSuru%2FxEBxpBZtmk%2B44BfGpuuRvbyNLOs2eADl2qi4I%2FbBmKdiXZIYJLtF5FZ69PicBCFinsiwlQmIBLap0hDdXLcxnRBMbWAsa8%2BT88n3spgmFp2XR1V8syHjMVM%2BY7SfPfcGBKdoECaAYqEXjcSU22cFeUhQxUhPAk%2BjaUVDkYJZ%2F1hU%2B5%2FqCCpBhdAF4LeCploArPTqAP7FiuD2WnBx3wIDgtiKLbNpupwNthwHpTWZAypRfbxQeTgb7FUmZy66ZYWEdlJGfnAqfUEukIq0WbB4hVsYIIi8LDNQiZhNqSt1UWzdwfzYVK52mrSM29XaLQDM4KIl9syFBsYermei2LNBcU5CJogSi4ULLjyLDfTqS3vAkvKFVq95zBYfkkbS6O32NekeMk3V54uS9W3DV0w9XE5s5uahaFLfVvFm3PGNAN9%2FzD9O5vFEmUPCAnI7PwtcyXSj7E30aJwnqMLY5vCVUwmLzrvgY6pgGrVEzMxprpT8SOuPKpiiMuTbwLsRltTM%2BvBGrodWA%2BzFQ%2FGnC7TV4b%2F49jtD8uCcnufD7%2FUsDs0ayVxrbOLdBL3PZIKxVZrcYoZ9X00hoeKX6zpLO3Q0HUTfCT7Q8epCjXN3gcGAFJ5Z0QKKbqyD0tdvEYBgJpgVXkdLMC2pms8nHuJ7sfntaho9w62qlRDg13WVsL6QCxxilau7IBbVWF1hInolh2&X-Amz-Signature=1af1b53b1a9ef79cc74baedcf4dadb469f2bb93768be04d8509be1acfb29cdcf&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
