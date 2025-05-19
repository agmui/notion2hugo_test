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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUHFVJTB%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T210759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICv88FqjhaoJQ21%2FFe0Yh1bkKMFqGRAXoTbpxbWBuZI3AiEA4LhvkHOmp2BJM1PkoeEFAd7%2Bk0ewyr%2FhYSuMc3zxsJ4qiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIFoL4714lvFH2L1KSrcA4KAiYVuWL6R8wNpYFOfVKDmN7Yvoq6HIhpT3ZV0%2B%2BpUsbKe16U2YMhsDcwygIB%2B3iRXXGqEIo4BnQWomyhVNwRJRjwn1NHpSKWYg%2BhNMaT0qF3u7wZceEmRMZqsScBFzVeQK%2FVwWIgGZmDTHRnk%2Fva4149V5SWNtJ%2BEaHx1V8U2U5AY71oVTrJckzj8MM6sqLf9hs3xdYc9umvK0eEb00s9DDkslgeT1zYyrJrheIc6L9wX%2BEV3xfnhia%2FmIJt8f6069EvNDXCQDl8OiSEO0SOxoBxmZEfmnYUnjhIv8jCx1ogmnZUseqJwehmh9%2FYp9K67QzzZfjLSvbR%2BifwoJms4ikaGcD0YImVAXKD4frDJZDCbFQ3pNAEahdnbNl248kspYoF4o8uXcSA425lNmTW%2F82Pq%2BPJKj8alsG9yXAzpxlnLDEBt0CuQ8eSwFFgnaAzx1D8YQHchNs4PrxP4ahj0MQlM0r6SAg20vkY2wYsBzIlbIcNFpJ3Vo%2FC%2FukXsMTSx3EHPv9kBbPJTKNCKMCB85YBaMIAL86rX2DMQ33YSQfncArFSRyR83vvv65YRmXMlK3XgZPTU1JytAon8ivIxwbiclsnB1R6AXGzb0hYiJBRLhGdA%2FI4kbT9jMLmtrsEGOqUBE6zOzdyVjd0LOrd5FRmt2HGMxCuuNnKNiz%2F4iV0aosSFnrc5kdFD%2Bws9P%2FgjLfg6kCRbEw3BkymJz3hVejD2XjblJpZNCm2Wen602b9WLjeamzbUenL5k%2FeuYD5L6h059EODX1V1xrDHl%2F%2BRQ3H3Aa3V%2BB%2FVEf%2BVonNqsmXY1rqfR6SMcQPiREfzRDjrl%2FbUL5cqlqZpG1xTdX3BFW0DZy2fsWex&X-Amz-Signature=25eb081c10914a1deb9e74e0e7598497522d237a150e448d59386f0d89c2d5c5&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
