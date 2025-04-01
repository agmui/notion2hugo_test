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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4KD2AFB%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T220758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQDAIdeGCd6p038XgW5w5WNV9MLYWKZclmaDYQAy2EQkiwIgDO6WBkq0Y6qQL7nq5Xn53b77YTzRqpiXEkBfY2lfeBAqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEvCD41m2R%2BpW%2BxYzCrcAz2EceuTMYYkP%2FAPPJwUq8LBx2CxxQUa9n%2FIA%2BTDStfNi8lnFY34%2Fq7Rrfode3g1cy%2Fr8qoWxVnc67WA1FLSXnfAlSGRtD2CTanID6QgnmISKBSNeVbQuhfvNEsy3blrd5erNhVf3QS%2BQtDqQFnxesPBnlUNHx1KkxkZ7VTPDUdbZetGAysRXqwlLJKvpqBWF54cvGpKIkXqz2L3c9w%2FRUEiQg7hnWJdgJ%2FilTuP9TDmRr%2FAWYHL%2BrdOYR1HNqR4GX3UQ6tHo%2FHdbAgEO5vrjhD1DPCNz4g6kdP9XRT%2Bjun8zfFmpDNfCN1hvYYOFz66CqR67gIp%2BkKFSkXmg5BRC0oazxUMeZLRw7LLkO5iXF%2BSZMKt50COWEeMqDjnTl75Kfw1c5DoZsWAmB%2F9S4Vc0jDtAI5mkUwrYrZR6KzrUSnumuVHZwQtnpbG7Qh%2BuQPOg%2F%2FzD7rbnoVjqDg8fbE6TFfmKUNHWUe4rZB0l2zxxM%2BjahVriLC8baf9Qduq2CiPTt1bMMbG85iiqbsmNXHiNH5sbrFNGxiS2VYTmolkPmYU3Sky0F3ER28D6rWsSpIpSAbe9kEUzLTdiiEZbBt9taoY%2Be83yPXJrVEkUWmD9CeCm%2B43Kf7I9S8hfMZIMPmosb8GOqUBhXXSZukSEWzhu77TvWKwIIfqB%2F9s2LKko4vqtLV%2FKRSvir98aL3Y05S8ETAbZLoNFentegx5aes7Gql%2BDshAEK%2BvDjH1X%2FRmNmPMTr8SZAXRSB%2FAYg6V810EOLY%2FQjNXsQAgoIxgMgxIXyt2C4UEtqIuitPtye8UotOQN04kj6ut1AIsiNquN69eZQfFBaso0jFn6Dphi58u%2FTUjEsHpavewlz1a&X-Amz-Signature=dbb92b893f2135434bd3764845290de243e77a52bd3053c3b5d0bfc7f3f7c162&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
