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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WG5DVX5G%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T190717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQCWDhk2FmdXpO28tICLxEw7yya55lzJBbQKR%2BhrI33spwIhANsjwnP3C1QBlsCj6%2BBmEwJ0WfelM99SxwBMux6BTVhPKv8DCBwQABoMNjM3NDIzMTgzODA1Igzq9rUK4fH4MiksX28q3APdVbVtorPxNIU6prSuuUsMF4xEAgP0RfsubzQm8e7OvOC07bMTlbRPmL2S%2FMQ91NojT%2BYDASorGhw%2Bj65j93Uh77T%2BT145GuGf%2BF%2FC%2F%2FHREcMT520GlM7LMIYCn7RADmRbsr0X0q3Ueg61GI1gUBvRyilmEBX5xnus563mu%2BU6aaKK1EuUjg%2BD9a62kqjrRRCWCMT2xLFa9q8IJvz3%2FBiKSEM%2BnAsYh6470OAoICHY1OpmGlvL5f8W61kccUur8ReS9OPnV3Fu7xtd9BVCINyw%2BC%2Fkz0X%2Fi5pl1taqXxqN4hrvCieena5tbdGwLU0o1RVFsBUPVzU2kC%2BMprykDzq3YxImYe8F18k8Gi0EVtiu85Gj1lwNaGU5gW%2BlhqEWoruQ57Bo3t0J3kpHQtxlqOs3BqSrMwJizvtDqA3330nJtxJ0U%2BP6ogP8O4nY9wkbXVo%2BMojkvQTG70JP%2Fu1F5hbK4UFv83X1TdHipKFHwJHx%2BtxjdRHR1d5Ppg9GXWVfx%2B57eChKAdSTvAbuzzbv9qTE5iosdUdVytK458Kik54anT7LQ7pRFYzH%2FeWpTVs5BrA6XJiRF%2Bo%2B5kOZlNd5ptt5E%2BkuYf6oBeBH8BVXMuT92NE30sQYMDr8BXM%2FezCJ0JPBBjqkARUjE0RAGGPauP%2FNv6jN1RGf5CwxDKsE8jkIDQQL%2FXvTN0fXKjsB8BwM%2FeBOhjV7DUIEpHvTSqNMC20%2Frdl2e2GzBC%2BNV0aBQeFB%2FpvV5tNvIqef2gqiWvtLsRzT5iUruobWIxl1rY4Hp0Z6emBLM5O%2B8izHgSgmTazxyb1MfL3V8r%2BOFdFJGjZTmCGc9DSKDbqimdlXJXGXEKrrkpZdFInvHipt&X-Amz-Signature=6be68911f0868b576537a8f29bb4df086b1a1e3384b3b56563e8960db0536bb5&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
