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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWH6S3NM%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T132615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSORoR1KxEwyi4GwN5%2FhX%2BghXUkG2GlHoNeel7i977ggIgA6IENehXlljztcDuugHnCZ9BFOG4zvo%2Ff1wBimyGnXYqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB4H44%2F8nHv5GuS3LircA5Lttiq%2FLpT%2FroWfEt0rvQkIQj22jlPYGIt4cc2uv5rQMjAEjPFN%2FDBG8v7QOQWfN700KbgAAy%2Flp9DYQRuKjdqLzXjf2tUwl50H%2BC6%2F84NGHs9riF0iIzUYc%2BbE%2BTCgUqPm5rJxbSvrl94bhVT3ltDz3Gj173ih025GTuCcKBE7mLlh7EYZBqqkkNm6oKGUZJXqr9adWFSCH9iB2Ivr9kJX5mhrOGfOSFdZV24oWU8fKnr%2BRxh%2F0G9wKFXhvjP4ZsO6t8WF7aPPM2Mzjc%2B%2FVlo8iwQr8noJFVDtHmotzXR9QcVC8Lh2oZHvt57C3gQjEYrvBwFmuv%2BPt2SpspG8WEM8ynPGyAG7ZPFn2bKGXoW%2FDJQ010biRuFFHEKVweEFf34H3zdmTB%2BeBOZF0jv5po5kPt9qwbpyoxc0usIbKRGBRbYHypAZlfw2PPruyRRzJHjdC9rgA5iA3Nx9NbtgsWk5Q8alCQldcQSCtgK0qWGvJj7WT9A1WkzNJKX6vrR7%2BXZVr%2FjgHUg6pHUg67LbSnrvhmQepkidGViu5jbhf2xGoDHFTXoh1g%2FhLY6leuoN5wmrDERr33HjoXk2%2F4eQVrIP0nZ6N1OFcvdCLP%2FYvBZYtjLbhtemf%2BLvG6BHMNC%2BoMIGOqUBBp0P3Dl3PpfFDmRqZcWTG2DzavXJ5U%2FR%2BPStJLIAuC1PvHK263dEpGpqv5FBplE2CFZo2UCaG7bcaTft0OonwrdwHck2NlqTdG9E%2FggQRlLM81xva2wEB33PBbzIN9HI5sUsmjMistAI1VWp5i3zb7qJ1jeSleirwW7sxrcYn4Pac3g%2F8cGH02lNncqAHmaG%2BfW1a4CQOzbiRtdDrF6r%2FtrzHgSP&X-Amz-Signature=8f3649ec46dd363d8225637dd5f04a6f296bab5b4ab92f13a6b325602825a79a&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
