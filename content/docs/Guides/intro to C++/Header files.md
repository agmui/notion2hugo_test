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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHFSE6D3%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T061411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4ELgn7cFTKx0BiBKWspU2ajOcpwdFbuR1X%2FLwI0iraAIgWYXSgXpqtzwJEtwtpC%2Fb%2BfIbKmbHfiqXaNnLe2OfUZUqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNLPDBZ5K0sqtZ%2FvOSrcAw1AI2dZdLl9F%2FTco5jGni7vFwm4koRjsE2IJ0uIUzdtIlThXGy8ARTmUYiQ3LhhEd4B8Eq1LPRtG7KFSbi2J6xVkWxhgleamL6Et%2BhBZsH4k59Ud7S0R8vpfge2vqFanL6cQWs1iy2oZ%2FKydwGEdOZBk3yt5m7UufxpVmUqhL0ltmTYKo4XM4zEs1Dxojwdo4AXLTi5trGexpy0et2FgBVKzzO0j1ufWNtn3ceJSr4dL2%2FeUfbEqpn%2FJg2KVf0oa%2BmxfOhp1nAe2JQnMmN40nMIiwEVQfZ7iEC5%2BYM2sDELAl%2BtvwEM15mzyUYvVpX7%2FBGAs2K4gC2zqpQpfTGeTGYLfVHnPLPRyLhIgSWjr3OqdKQrXcyDMvH9fU4CYVR%2FoDkHddW4czimrwgGxPULIy9M2B0fIoqfj6vYkuurMKRn%2Bl3w9zvf5M1GtQQwd%2F9b3v5oc7Mi4F4vsQkST8s0iaJcoMiL%2FwcBpn2SCJiEyZoHHJiVT6I6eKoopEjA6E1yGUh0U2krNjnBpFIEsEQauuk3CvWUUrTYcWGJ22C8eMpmTD%2FbD4wpLcL3Ycz%2B7wPfTxWsz6fGWlqRNgV2S3F7Yreu7WrLTjCpwjARELf38Q4GgMM5TsPAPhniHR4SMPrRiMMGOqUBAOCINZnXLkh6932PCqb6gUyczUukFcQHZpDySrB8wtRGeMJRxDrtkwloCfPL1TpkGzpyP3lK1En9OV6s8fTqcMRqtMKsCo7Ae%2BhI3w0dXlcV%2FbRVtJFLMlBOMlDUTwa4IM35fxjer8VIJUcXxxzD0haAVodOUy4u5%2FxfaE6bk9iGABEbWJnSs6Xbv%2Fddm2OlfRwC9NOP5xYs5cibbOs1HVc%2BVfDY&X-Amz-Signature=33cc9b2e1eff8b221466bb0179e97be29092b9e7799c40a62b4b00131df1ff76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
