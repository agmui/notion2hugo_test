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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIRRGK62%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T051141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQCDTgTSkeHr%2FgHhdT3fnZxW6W1Jfza9VEQ8jKZ0aZ3MZAIgDAQOTNdVfaZj%2FFkhJHUt49WQ4DPfvFK9eqg8c3SQUI4qiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFQdNfH4LQvdx%2F85kSrcA59dymPH%2FS9OfHmBsk2J8MU03GBXzckApuhq3V%2FzorQLfAxLMUyaCcEDMjmuXIzxGRtDd3qHuiVMdXw9ZRVmWI9bbw1wHXQlfzZhKRJTT10s%2FNyd6jqDfOaXW%2F9uW1la0MyYHlr3Jrjn9HWuTFuGpQr%2F9YNxqdPQWOKJyt32BtljfjMjR5zJcGBSfNvTvIOlhIZ0backbbj5KyjizLDdRwZmrhkMzI3MHcybDOiyWbaqPF0UoS4FQWQXC3SkrUBM%2BqoQJW9rvu3YXwK8%2Fpqeg1yECBRtdTGxIs9J7gdtdtSYsLXT1mJyq7CF0plMGfJsOFD2yBa9U4FmcWDVv2gu1Y6mqite%2B%2FfxNfYsRNdQ4MoMkQto1DJqMeIBV0%2B8R2ZvKbMzn5GBlU1Mta1aq%2FHb%2FFxiEmmfboCcG3WZ7XilMFzrnkpqI2%2F9cdxEWSTabBQQZrCPsRFEJ%2FV4UuEphwyOFt9YzR3z4zzV%2BXQyXwtuqpgvxcgwjcIfHWL9aAuiBBTfRSELo4FwbB1VdPTqXkL%2FYzUc88WAuA2%2BZSBk%2FbIARlntM1oiB%2BvtCN3UM923%2BKwbrcDOdhe9r7pyMPQYLLz2PiCLa9DkEH16GRJs88AJCjnNSUkDn1OEVmXhwcLDMMuEssMGOqUB8VW0te7lF1DlL7fdqLuyt4qZ3bQNgEqYJq6P24JQHq0VdqMhwT3eRa9RUOpjkz%2FIyfjyOpovVR6J8xyAd%2Bxm6ZdKaVSECZfZlsKtQ9bfDu972QqKetwmF%2FqgJr5Ko9sBcL6UBqDAPvrhDRjk4CxSMTBFc8xgu3fDmiUYwGlfQsMaSTJGpzNJzTnl6v9fqfblwnzsRgS0enMP9auvlgmS%2FNxrtUlO&X-Amz-Signature=bc4777319abc76d5778f2e2cf9f1850f087ff47d0ddd21112b5b0b3197ae6954&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
