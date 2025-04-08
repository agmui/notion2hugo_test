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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YO435EFO%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T050849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrKo5UJkS1Pv5I0UMXgvqInqOmYRDnHzOc4ZXtZQHVLgIhALnaR5otmLvsYBaDW%2BAMaVVt9yJ66J9iTWVq%2BOeS6XR2Kv8DCG4QABoMNjM3NDIzMTgzODA1Igx%2B8ZQ0nnVyE%2FxyFXUq3ANBUUKeOYIEIC05IH4BQ8BFFgk6XmQn%2F0snkjcTNVoHYi8BuNphs1Z82f31aD9%2BqSI8bTDbS7Xctfv3SLOfL9RJ553HLxjoxKZNzl7nGAzvJUooE%2FQdpokKXOWsXajny8%2B9HHI9fOnsIp6ipIizOuxvxQlg1iJkbu6MA%2Fz3G2Grf5NEEn6CX56B3DVMxa6v0An7qaW%2BMF6aQxlO4rfWWUU3yj7UPBiP7rCEV0yIq9ikuNlqoJi4VqC2I88Mw5aBsRrzDk%2FxQVbbrsffn4hHS1dxKNgDO3AN82DD%2BdMVkcgbkZ0cL9NQhBljEs4%2FjZf1qDd3u%2B%2B3Yb8APo2pl%2BO5yUHtgzEteVwZXI7AocAJ1fYDY4PcPiInqfkFe12nshEQlCqs7E4231EQqZdqx%2FG32EQ2LJBZA93e8P4lfQ1fXe5v1xpI5Zz12SsF2YLDpA5kQtLJ6DXjrC3Pnc4Fk0i45la3cmYQW0%2FDmPv7%2B%2BXVfiZZEREu6PHjuetKYzjVnvHDnYvzAFJKCxVqtANvO7d5J6AT7q9xHP0Z1nyymBGJZ1DtbFqWuQxZuvngFeDwiQ%2B2K6C9ErHv8QgY%2FExL4jhRMPZSEMjuxMTls7VQaz4F0HQwwrjb85Ydw8oVC7yMnTDc09K%2FBjqkAWz9juAINnxbDh9sMtUBkQ8gqzICkTriyQ6mBMVISOZ%2B%2FTxkHkf1UsmpYi%2BB6HMLW4Kebu33vWkAg6y1n5D5CvGljH0TMORYNItMCMp94aU1b9jAV6SUlOAIA96GmF4iy1FrBfZeXc%2FtPb5VYUB8Z2t%2FUsmZ5YNBCffxJEFN8BUXfmgy%2Bz6x50uER9W2vS1holl5xjjFGaBPfWtbl12e%2BOOZ%2BIyc&X-Amz-Signature=475e5d20a4f12cf4463bc0e8c66d9bda7d45f7408cea5d2e6add3d63995d4a23&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
