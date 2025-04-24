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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NGFGKVN%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T220807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDykXGMzW%2FQ8CZcLX8bVZmDZnN1IuxJjL%2FuGx0RgK3JdAiBelGCsN7xgZ68UJF2Oq7sS496ZkGAX9hLPQl4FnudS5Cr%2FAwgfEAAaDDYzNzQyMzE4MzgwNSIM8XQACt1Lqyj%2FXaGlKtwDhqOm3ZSmTWSe9aaXfH7URhWXMZQCJ4k8oN9sgKjwH9eGtkoveRgbo7qZWsmqhiVvNNCh1K7DSXOay21QiFaaKBUBlFn62Ncg3BfdiMuF7sTAeG5HnOwM8FNuAy9viH6lGCKOo4QivHBC58jUN3xR2%2BLm3jKDAau3IAB5xHjJeWlAGj6WXxSe%2F7wQBOd9Jr%2BvdY5lPPzU%2FgzpXsqsIHwrHpSfbeK8sStJj5Lgcc2Z1DwqG%2FC1VeyjC9fyh%2Ff4hwHIAx3BWfOaNNwzEd001D4GBUXcn%2FdGgsG1SOyeTwLUTGGu%2B3cmGhI3zNXzHZEizczuNftvzRy2UAo16ieTsX%2FQ7iz9Anoi1iW470lZYLTuY4wwFYdUELQHxELQAdfRe3RCooW%2B6BNjbIN7n3hXHmRE55aLOB2DNwilKFi5bOAXSiAwL48Sct02Yh1DRzfRn1BJr7nFuUo2MJ3xJvEVGS7YQsRjg9JQfWYyvCxwBlFVdyWBiN6R2U331EKzl2alG2dyNbxuWFc5DpNo6a2QppVmiSFDGqaRR%2FFrTRgCJoRc44G%2B5xeTkJD0daPVlgtJmt1VOpTvPL3zXuJYxTcM3uF4khnxZQBIXr7tCPN9KtvAghLjvqdgt7XIOxC%2BUkwwmduqwAY6pgF3mp%2FpmvIvI7kB3RLSLYPE8OqkXLY61aBgVulgtRlnOQOkilLXFWh6U9D4aICVvAt784fTTcLO30%2BQAEs7M0dYuj4%2BsAwWWZcE8By5DLTyNjJiC%2FeK38TI52LkptcsBe0YcuCaJPTw%2BQCTqqOYwQ41CLJwmTgWj4LDCYtbPG0HMP7KePJYFSaWMPJFC1Ll2rWnu%2BCzqrtRdrNfR6kLaQdFW%2Fu4XWBX&X-Amz-Signature=ac469fa18c7f11c1b3fc7aa7fe7d68fca00b4f1258595b0347c7bfead9b85064&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
