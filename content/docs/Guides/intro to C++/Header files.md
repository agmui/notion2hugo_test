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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YE42VZ4C%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T230737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIASvZru8FgXNB92CcLe5nZnSN6IltzQmy6QJkzD5xa8IAiAYKhHSXfneeM3dvr8cJv%2Ft91272cBzizog49DBYa4MMyqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVaARelT0ku1s3pvSKtwD2vBxzktzoiFkloEcg3kQys7C%2BDAt9TCFVwuQEfRxu7O33nCsNdy4Y9UszkJ8rJ%2F2SBd%2FtTL%2FTCbvWvD1FGEE9w33vuPZLYzO8wsKMA0KVRGwSz4xn%2BoOGfju8LWJCIzZ%2FOKsevnMuscXP9aECZrF3qiSPrfD5LFKRSDOonvjKUVMCmJhch37Pupzhjvzn9HxtPSiIOuXvp%2F%2Fj%2FuVsb4TWytXpJ3HBOn9yMhzDGqYisbQ%2FzaOk4jE9JFmv4a1llPSx0mITexJmTpBwU7Av6xy9Sl1ze6ri9thUNVEBLcvhaMDlVIGni7wSuLk2Dlv8T9HXohRcjHeRQMUZrhoQtWF78ICEHz4oAwRMlxqM78hL0fgVlh5ZispcUlZltAMIORhOMlwKtK9CK9eD2j0y0YO30x4K4pTQE0lZBTwZhzExyPnaAIKxg9aK4aO5E5y46NQi0C4EaLEFqovGo98ibRMzWREcc0YBE%2BBLPcDz01WgsT7Ox%2FaHzY6L0JB95zIVB9maHBDey2mOmsyM65bstHMXhsH1IcwI%2Bm3LbeisDACfkjTG%2F44W2VcNFNiGa%2Ba848DacgDlbhRVGlfUeZbqoZeGHg%2B5jNvlVIlbCfDTZlMjCUZx6DrQruZQhy02QwwtYuIvgY6pgFNfoNghjjcI3hnyNtveB%2FLu67oIn5NXmWDZjBrk5fszGl9F6v4QATgslXr%2BoVhY6IZk5DKC45YLrm5dsjViaowMveyjWJfuhXZfDS1OY4vuwXM32G2ervd2%2Bvb9oUTCX7Bw%2FYN88C56iaAUhZUEUlY1%2BV%2BE7Xnz%2FKjH8dZ5WAQ2NAw3u8fVYq8qmLpwOz5zcltyLjgTnePe%2FkDaOjb7KFKvlLv4Jgx&X-Amz-Signature=9a617745324e291dabaf23cc7a55949018db8b4d685d5db2d1aa1234bf34896d&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
