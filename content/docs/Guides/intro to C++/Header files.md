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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FO76DMX%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T200857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIE072EBXTDz1cZuGT43e%2FtMcI8zqynIlb9vM1w%2B87g6zAiA%2FNLUXwl03S8KVyp24IJQ4Yq9O20qQSEYRVvVUcRA4Tyr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMcIsuD%2FeaFLvfCpmRKtwDSRS0%2F%2FjVskPSza099S6gptn3byDYpvM3X0kZysFlaXmxha77LahalW%2F1GVQah1gsuGi6D3MpR5sU3JUrNj0eyqHj7g%2FPRgr7JAldRVm9Ywk0GCUlV2V3WWnl05vkaidl12lrdWz2oG8HGjuq0mPHmzw4hPTslO0u7iro%2Fl0GSb7L6TaiibUu5zXUDnEZRNRm5ePJzHxZ2UkYbXNxGVUipE5R4cpNihHjY6dJNi3D8VhxGXTkEjwz1tU89tU%2BXAwAVZaTZ9sFm3vfjGu6OvPmZ71iBmt%2FC9SttvcpVBiRu6SsVS88ryN7LonY03iC%2FBhubi3Y8ZuItlPmaIxOtgAOYNlg4OmRvkBedxStMAhbtsbYBeTpHAI1M7dTqZ87oyeBIZVFIkRT0viOyEN2M2lEhvkyN3BYYUvcpiBWXA7HBiL9f1C9ERpoeUYmKbgYlrfr0yqMVTdqL1WqGfuGZNt%2FMk%2FHVoaupzFLY4oM4gfEjxpJBUT0cr2SSIQBJs8uVPam96bbGLG69D%2FwE9W2RhoQFgzrmOVKJ7UnBb1S77w7wE6rMTmlr7xrtd%2B8%2BRVHS12xJVyGPyNXlEFBA73BCVq4%2BZo7vWWpvbUnbcl2pM0uPCU%2BPDlAFKw8I7x2DzIwhv2qwwY6pgG%2BALh4xPZQKmT1njF4Y2xvCC43zB3D0wU7uQKkmhWj2nWAzDGOTZvu7za66CKo6y26bo4UaXZL5R6nw5jxHatMjj%2FnzMPGFP4X%2FKujQT93bxwsn1YHgy%2B0%2F5dV1J%2F0fQTJnQody8KdcBYgPsLl8ZX45blMjWRYv5QnmMlBXeymTSDUSZwSrO5rMR5pSivt8bT4MRQiv%2BPAaGL5aqcKrTwAPSsbI9uY&X-Amz-Signature=39a4a2b407c55dcdac777e395d28f9a3f1c37d20b72db55dc8f03a89a5d378f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
