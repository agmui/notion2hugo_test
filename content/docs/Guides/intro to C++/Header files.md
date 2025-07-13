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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RU4VGM4I%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T150745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDI4%2BE5xXAaCjgttlmArEybGyCqhnhPRAVI0WcFuFjqFgIgAmHbDfhSy4o6tF0QR34rSAUW86ldBVZ%2F2aUd3xTfTNIq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDEOwlbEpr6HPPiQIOSrcA7SoF%2FAK6HT368vbw4OsTEu%2FLceB160pouP17PAG04r8UX22eUw6CNSUEBTMAfSNGoCElzGjMMCyPvls7O8gavXqeKahVj%2B6DB4pWVsuS6Wsx6wZSyK2ki0k5grngrIArJkNYzJvqqcEOLCz%2FykIkYyAk45Xy4K1eK%2BJqI6kHmb9Fh31Ty2SjvRQbl7tZQTz%2BpI0y%2BPivjL%2Blz7HpVDVbaTTotQK1bexl7C9dfmrWQ7FR7t%2F4RoEU%2Fvvorpial0zcrdC0UUChiNOwYyH0SQszsrs%2BYNXJlsf%2FYlqNvYU1TV%2FEXhxeK9NQvWtP1hGt8915%2BtBL51yx%2Bmm29%2FGxwrmS1M42oZFQcCyL2CcEFvMgNYam8iUZ8cI4Ci0HfNzAy2%2FrnF1C3Y2bVnk%2Bg08lvDNovrDKKKJh1FEkJsmORV0d31%2FY7mH3E8Yooe0Ntx8OBdDHAAtgfhI8gfITvaBDaYPsskaGuWXxH%2Fie3asQ3HiKT4L6gR3bpUX3VGgCMsgsNQM6bcIBAZM7DKZNnVh%2B79kwU1F9oQdjjke6EJIKEM3ge11Aky7Q5oXYdhjtxlzWWMpr8Idsw89MwS%2B8MTpzYf4jGeK9JukZuyNR46pLBEGk560%2Fkm9ImBv7qEs4ZXXMNvCzsMGOqUBMwusz0muWpCO6MDvMaY3i0SJjjvwrUjpcv0%2FF8zCOILZKxyJ9P%2BJlwAPlU8FWZx5lJqcS%2FKUfcVBkSX9AIFMztkzcOx7BwjrlijfOLiUFlXUwnn1dSSc2jaMV47dyni4gjDaeE4V%2BxA7AVz2OhAVKsmZSO%2BwsTINr7001G7%2Fk9%2F25RetxPR6GtQw%2BtQJhzyeRKQ4jgF7cVBqOOz%2BSZTAjvLxgU42&X-Amz-Signature=afb71927719805827decb4585f486becc19964eddbacb5b658a93420c1c4ba5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
