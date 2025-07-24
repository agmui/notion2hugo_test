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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RRMZBUL%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T141148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIB6UlzRw1c6a%2FVvLWrJ%2F%2BJV3fp%2F7wKrD7MV4Gr3DeyNJAiA1m9hmW9cmC%2F6x%2FA96f9U3f2%2FsvjXpznWYBR1CaYM0jir%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMM%2FKk26cofzM82ifYKtwDgl86XQTBenD1sUYwMuQS9V%2FERiDH1KyUpH3dHqZIAfmOVjY3FZ7DMCNtfPACzqKvhhahFwkwAj8sK5CTGVbp5LweksrFNKr0ul8%2FEkNt7Pm9N3IElY8PhUGw4VlMekMULE8jKKiKl0vo4pjUAA9TXet8SO46rVhI85%2Byl%2B6vZ%2BR4jpZraLso4K80yZqHtMLRR3xdGYi1G1%2FVE7IbdJJQKfFNufXh45RIT1V44uTm%2Fyafg%2B2ZfCFfsGXCqj6p%2F46B53Sdb%2FeDQ2XoAxbjlNcqCDnhHPc%2FSHmuBF9DiDVcr8rX%2FpBhHY0YDTo2sgiFlcX6raTVimwUMzk6d6rY6t8ZtKfvt7IvTjmAPKn2SNJth4VRAHUhgMdq2QAI6aLX4EhwJcHSd5rwPn%2FxtrBs6k%2FWY3A3XQjfL3M%2F8WBkCAy8zrAKvjB19E60AfFsynJmokFLxq17pxaABt9JU3YVl2QUr8Tu5GyUAcVrziegH5e4MFrQggHR3npgQ4i8kqgi4mObk%2BMam5ajHEumxaNPsxK7LKNA7qlVU3vtIxvNmE9sq4%2BsmzQr8qDXFw4l0e%2BP0%2BUJhoNfH0CsarOaEm0VnEZ4HuL8%2FEoRYOnKj2W8C1N3EzlMp2M2oki2QC9Tq2kwttmIxAY6pgFxiGIxyU99kaD7%2B5eJPbjLfRKF5%2BDqaX8uq8oTLBZtbmAlDsUNZlwAifky670Rw5Tt5kh3VapvlgW1s%2FKLNMucItY48YzJvFly7Q01jSsDBAcG399O7UqSEYbFDwBXtlkIqLX7ipIHs13V9w0abWJhHDMmca2LGgAPHlSaYpKKtPkjaXlcR%2BWtjuBtGzckzaOfauX7%2FcwHMZMclenRN%2FGWQKMDZzYL&X-Amz-Signature=7e00b0c5c45ca6c61788f17740cc439ed8ff814b9954580d4089210bd3fa7874&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
