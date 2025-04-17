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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRA3BWUW%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T131937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF%2FLOpNTa0rivmj1fxl9A2UwbxMAzHo8zVoleCLqPz26AiEAlobicMfpozrshZ7DuwRTykcVn8lLI2t%2FBb0YbAkNDyAq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDLNk1EzC2Rew%2FhaQ3SrcAznp3GFwrTQj52bd8WcSDwXblTqAnFqjv7aikl8V5xycfbuvt4Tw6cImNjWCXoaJMuWez0LSnTtiGsTUsOfkGKnpDQNtZ0m%2BE3QFOnzjYkm2zNb6wJcIbKXzIw2Gou1iXa3JYSvbUkq1w0pirxBQOu00JeZUgiIX6IoXzKmrZQXOQHXE0tYuQnu9tcuJdg6PcdSwtaQE7tP7NAYxdjLyS60Hvt4c3muTkEyIsoqHuhB7%2FGMmSp7VNo8NhnBzvt2m7ogdbPy2J3BiCjNTy3jS3JK2pUL8uuLZEobq0OTUm%2F7fQRVgkRQWTH4fzp3sgoBFgmVEWQkuf1W5DUTb639DKurykcvvCpsWwb6m5GABoT0lNE%2BCo7ceXZ4RjiXMflH5gaQCykllrbeBj0HgJh1%2FBb%2BhDeb1c0AQOUrltelgqkNt52ePQYwDicYpkHeBPhnVnRwVyy3pnNd7pSELhEcKaK3tg6egOkYzQv16K2OUCFfedv2zPQVkaK4%2Bh69jqtmJtJhUFh9C9AAEADW%2BS2V%2BSZFJRwB66WrmHmKW5ivjdUnnUdAlYfQFgj24q1%2BdERJoMxs0q0T2868A5mUZIWvUR3GEBbSLUoOURSfTu4jVhEuM9FTVv9sUoQOTo9%2BkMMz7g8AGOqUB%2BGERAG7bcQq20j3fTKwiNBGwlO7ue%2BTFJrtgFr%2BF92gbjEJvUkRA896c8HU%2FxMpNKEi7CgELp2Vbng6RJMks3K5nm70ZHHSmAdZX7luZULBlervX5hBxXOP1MeKyYFaxqLBomlSX3iQcyw4UwkdfZRuEmSgU0iJDzom%2Bd6XAuH1h71nFbWWIqWCUTieKigjWRCrURulDixKX7JxH78xvBrGTfK9r&X-Amz-Signature=e23fa221caed6a20be72ebe66ff9944f863addfc99e6df7eb9e891c40b9035b9&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
