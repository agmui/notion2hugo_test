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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJB5CQOH%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T131851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZZ7Sai6eMKXh5EGDBYkGwd8C4Vc%2FgLIDWXdHVVnjqwgIhAJaD0FIJlTs%2BAr%2BRK%2FI5pI854UXKa2P75UQ0TvmazkyQKv8DCBYQABoMNjM3NDIzMTgzODA1IgwrcQt7tNMDxUXBqq8q3APcZRu%2Bu3SADvCaY88lYWJY4H5TO9PwaHL%2BQtJL4juiAcYfY0u%2Bu3PzHMCBGFrjc0gJ%2BbC3eT9VqYRLSpC6WO%2F1qum9NcutmeAKXbUQPCjz%2BtbZ6WJ2zcwIm6Lt7YTjjDim7eyCx8XqQV%2BZJGBYRMwxvefyHaLsPNk2Wjklsa2scVB9vHETI4fr5vzvll7mLiP%2BwqGdn%2Bv4%2FkGtEPLy%2FE7yDiVG6vClsnEo5E6J9mXHuCKDndXZn2MjTngR0vslmWtRqj4ndgVfF6iPHo6cn%2FVv0trTMMDXRvWUsUkXfZq8iJ8NK%2Fs3Tpxzb%2Bkmgxgc1%2Fbd250fzlpUmCnf%2FocZ6gZGbqAMrJXLyMYHBKrRncaDW4Ixukp3LNRf1MXrX2%2FTn%2FkoBikP1LAx4CQr62Y%2Bx2QtY2wGo9KkLvKAo2%2Fbxr08YXXE0lNbucbY4Y3uP6BJf%2FPWkSWCJhZ9v%2B0APR4ItL1VkPwaQTC5dZGYgDWAjo%2Fcf8LPnVHEGkZoPOxxtW%2FozsZq2dYAat09jh5ebIK6yWhFlmC5S%2F0G24Sgw3OY6USu4mTh4Gik%2BNQDV0YEdnsFgYVAxmMVsNdAZmWJRzP2j%2FS8aQRk%2FEb%2FIBG%2FM6Ep4ajwgXoLjMDBEJjwE4cMDjDAsb%2B%2FBjqkAfu9YbYHzcMifVbDJMg31jXXazJSyE6pusbj4GySIG3HsPW9JrF5QXdlI4H%2FiTGY66MktyNIZx3wSFhwAgbrHXmjRssCUFLN5gKbUC8guQ5K9762XnTlLyPqN8IGvC2S0jVYeyXeoqAmRn7tAYMS3T3i7RFUmBE%2Byv%2FzR89Gymjx%2FQRZs15Hvx5yCtqlH05iAAjZbSs95iKyJ365WiZ6URuTniWU&X-Amz-Signature=953abc888a084a0811c297ebcef8f664702682e368c901293ac98c3fd47fdefc&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
