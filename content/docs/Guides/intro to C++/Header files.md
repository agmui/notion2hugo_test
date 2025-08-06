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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UI72Y3NL%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T061635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIHPj6Ha1bKDHseAptn8nDVqvzICsenwlTYJRu9DMV%2BVXAiEAr%2FbxJtseBT%2FHY5VQ2g6yxvevnXx%2BiYP6lGTbMja2pesq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDHaFRWmnSJiKXikInCrcAyfJJ0fzkDdqfsd37w4yBP7xq56jeWOre82bLZANOyj2sgbH2c4mMfIBm%2BpZYmBQJcMdqO1sD9pL%2FmHfxmFIY9zRB9pF6NIlOGlWzMvgeUuFxLFrUIvePHiMFOnghO56qrsFq4ZnwP1zPXFbGUI3JTUwiy%2FXOI6zH%2F4fsSQUOGySVJIi5u4elEieTmYWT85D%2BaX6dWuVafyxWNpsU6IkL9q7NSBzMfLOzYO%2FuhYEnu48JCEgcRPcx7hZjgK%2Bo37lVUsKX1tEG00WVNpxOlIUhWRZ4oke9gklvPuL1ClZzRHfNifTaYQVFxuGKy52JDDAVhKDsrGpOYjGvz9KzlyNwS26MZ5oKG3eMoJAvWRsOz3xDGZYtqOfmK1Diwp86hFdOHvftvUZ53SBNvRdRZqck%2F54vgiNCTNWcsW6aim8Ylsj%2FabdKFrohnp4KWeEBRdDGth0u%2BCJ74ID4RAW6PFfCrJHXZWs8QJeVKQO%2BKuZ%2Fy4bz2gTNdnA%2BTFztRnjq6DpyTKRpXxva9HzLNbzu62IxVCQEW5ZcV44NJFdIsW0%2BbcwON9h7qNGlgS0dr545i8qmIBVeyfqqcur7%2BpVkHOlxpOJJwosO5jsR60ueyk26EZMK3IWpTP%2FP2t7W3QYMIHLy8QGOqUB1OZ%2Fm%2Ff2%2F675CGXeWB7fgiv6KKAvWyrtEl5c9sjtySK9qVGqD5FXZg%2BqTxWXWuLgRNKdr34LqTRcedX0ig6lnAJfUTJVEB93dBDPdpEy%2BpQwC%2BjSGT0fvYn%2FUQjYmuahyQcWjf5bd%2BXqaYUSKC1w2VHNz8R6dq1HljNL%2F%2FMHR%2Fd%2BJ%2FP13AndKThrIwEfh9wutXWs6OdQcPa8Iwq3XKSzvoUR%2F00g&X-Amz-Signature=bff5588ee8e40794743f08381d5d3d8489cf388013d1a26965a2f919f422a2be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
