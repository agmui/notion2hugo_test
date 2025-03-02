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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZE7HMZSY%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T121200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmltcRoAYROYNppJont5NvJQoZlA0eHCfhi18gHa7hMgIgUPjBwI%2BzEt8k09vOFSvKBF9a11rHr5M9Ci2OAwoPUSwqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNiFSD%2BpStvy4YViDyrcAzJo3%2B2YXLHnRAlcPbQh0vKN7KpBfvW9Hc112I29BE7fv4JYJYWWQaG7ibHkPmaAhOLpllddUbibhOs7%2BTdoSADaeJQOQIqszCqdzlLeE3WRtP%2FQwDaboioUu4orLBHu7bIy9Gr7y39a3vV2SBhB4XUhpHWvlkjG2Bu3lLfNFe5XT%2F75117WZECK5ItWde%2Ba1I1W%2FShaNPdu3bjWCzfbvQS30nMPjUg07hnKdzsveBW9E4XWOQc3va8i0Onkr6w6a6eFr67sjomwGhk5Na2EDnUGXxple8bkjiykiiauohp4L9WvammWGTsGthzypHjZBiq9yZTzWDhWivWtb4hRPJU0y8%2FCxGp%2B3xA6MNKj%2FLqTnXMtizsldsHtPp4ndCDTWMunvW0cHbBTmUh90WDfRDsQeCtYyvE87bzvDtd5DPudhmcg%2FaeX1U38kTtf7G8XKEQdoC2FhbKdVYLV9Ogkblqze2Lb5Y4JMxYR30Zhz6AePObrVGziBgBQbL2zFPAk07zkyCNMsrqIS%2BgVxBz5UV%2B65PDUNi0OL2JVcsx55acEHPLf1qGs5Bh1I1n93FjXWuAq5V7lkBsweTx%2Fxo94wj9BwheSjaKKTm1z%2FE%2FlXPpcZput3gg4GMZX%2BM0KMI78kL4GOqUBQDngHjgYidjxRZjhQbBjscgB8SnDyYNsiVYuF2Q%2Fbn%2BN00D7jtxmM8ZxXci2LB1mfxzWsh1OVGbRVOP6R%2BqDt0hBzRkQq674OEhogV5rFdJ5l5DdnmTR2fKiVqvCGKiShQZH9KSRVjZADD4LohwEsM0%2FusnDr5m%2FVLvOyY%2B9xvre2tHkOA8DdBofBfkty%2FdJ4VYkXxRNsBGSkDgprhXII7sLGASE&X-Amz-Signature=75926edcb7abb1bfc0ef911ebdbffa2e18cf0ebf5510ddc49fc2fd45b5fedc39&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
