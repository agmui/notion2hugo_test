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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635NCBGVA%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T210711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChLBdcUOEKgKXAvH17LhA81DFhaemClKeULC%2Bh%2Bxmo6wIgUFgUTLJ%2FgVWZiBdabzTBHrVao3JLwnHaKmkO1Ds0r50qiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL3UaYLgZJfIZL%2FW%2FSrcA72wMmM0PvjDofId4zIjsq0PGrtF1fYj6zBnTQtv2jZrNzFh4OwMF5leq2%2BC%2BYz7xIVYgGZ%2F04kUpH84QhSPOkFhbNJ8VebWP14bsuuFPH1qDZIPFhJ0Ndh4b75034OPCIMDAqfHGOgP1cLxncTNN14wx8I5tzn2p7gZQE9h23HMbQNd1lg0Q2uXxO9DqQdJ9DKNg6VFswlf3gWvrO%2BY%2Fcek2GZimbb0iDYzLLGnRDouYwh9siPJoN%2FsgXbyZTt50FVnAbNt0E3%2BLwfEylX3J0SqxKuK9q0Dlel9Xtl7sRLNmbTsR8%2Fyo4OwWCDJ3AnjqSSVp3w4e4OcRGQJl%2B86geKSWNi%2Fwjv7p2vnsxw6D2aKONNV7ajSymK65h1i9ouZWr%2BVfWWKT%2FFbpRV61TF9CMiNBUzYwcb541hNhiUG29o44f4QQPULtiUT7RwnTD2WjNqg01mMfOZWXXJmhovlJO4Rez%2F3JmADxIXviKEQpR6C4cjkC9ryXYV9yCGBzFmpZyqDMMWSBg%2FGiT3ktyv%2F8GTtKisw2eByUIelEYzuqMuJPwKYGk6XI52eg1fNaqWfeOpy%2BD%2FXNYIy4ftBpqnMk%2B6GhxhH2%2BhKwIhlrl6ZA7az0o4q4fOjyj%2BlMRS5MOSEy8MGOqUBG2j1PlTRz3sPyHDILbPcJCXkAb6bK5WPl7plbkmOy7sXlKOjgCwFoIAm2V0902W%2FLOTVcJ9LyK0664ppMmAhiQe2RSa%2Fo2MQqVeoVQVTrlRKmarn7YCSFNQJ83Ap4SWKVpOr1nxD6yqgrNAinTOE%2B2eHZlmESDpcIalYVOJzOKGclBCYZ9KKthgZ4XD2phgJXxQMidwmXOSxQfJuiAEkV2BsY6Bj&X-Amz-Signature=18567b87ae6c67eb0157396c56479199a1679a32812dc004620eaf17ed0b4a12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
