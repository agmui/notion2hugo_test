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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667J7QOBKW%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T090839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHzhflaLVg42g8Pdxz4QJpoCOcL46tC5Tg8hR7Y4Ypl8AiEAn3kTN1c%2F5eKDTudOI5ZmJXsLHVr%2BxYvrY86QF5EsWLUqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDC0HdMiR3PzhqXqZCrcA%2Baz2Ja4sweb5rHDIWm9IUmv3Q8fcZuiHAyIbS9dTkduuNpTZjw386LYYAAUnLGucmimE1gn%2FxVO3TqFs%2FesLK1Dq8YBgW2NrxZyElBuvIXFrzHIT6MxVWKB2lcrxcL8pEQijHQdBGMOpaoRP%2FVj0GCp6e5hxH0JytH7vpyQ6IpJPmkQazHUMJCfyUIv5dIKOBwaq9OsRh4EUlkuhqncLnkuQNYJBu8PYYfsD3vGhJD8i2LI7hRYJF6bK8jJT7rE6%2BzAoU1mMAvk%2Bj4C%2FdaAUM4MplhguAso9cUMHjru%2BHXTnB6LZBu4CXTj9cnoqNXDvi4n59WNEG7mR4f%2BITrDfm%2B8zWkFWnW250aAIWtnL%2BDz0%2F4xh%2FTAmXuOHe0iHs1PAPdWsCcv%2BMqdKqsawYhXFBgzs76jH%2FY8VrVZOARQKkpGGJSHo2S0AMSUYn6i07nQEGEy5pRdcEelq0uUwr6ZVyJpPQFJVZyw9Y%2B2Daf3%2BA9%2FdoHtnRyI8Gy2I9SJh3d7ViM4RNCd%2FU8f40CZrmZadLVrsZIaTRYdUBW6c28SO1GO%2B5sZazUXgheVCgIxiHmeHDC5Lr9LnJpXxDXy4GSBztdGzdCiS6ZqzN5eVpAy65q7P294n1G%2FTPJ0qNzwMJvLyMMGOqUB%2BwCm8kxKXqBM7SYwHArY58g6AQK3TGbZgDDJ0kGuwIyFmQgIc5cG47%2FIg5Ux7hr%2BbVopRHYcU3kZYlhiCebtDIj3yPe0qezayjV4qK2AESJwOiqzlLlhxfulJADXf%2BEGqb5wQ9SnwhDjaO%2FXgJoQXVSi%2FYdlkMfCaun0N3faUDGv1XqOcLM0Dcqrp0Mi067F4NM319z7Ke5lqOUlhMCYy4KCSwbG&X-Amz-Signature=836769657d02da4c73039cbd66116f68ec83a2c1d754c3a640fd2920c7066e9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
