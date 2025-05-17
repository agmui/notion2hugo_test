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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSFITRJL%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T041050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3l48heueSKS1Y0KeqJCeUfwB%2BOR0mCgoTjfYv7kDDWAIhAOd7uvKlYDPS2R%2B8Nl8tFaZe3b9BMyVZoFtzdvsLxROzKv8DCFUQABoMNjM3NDIzMTgzODA1IgxxUd9kUx6sfI2AfHAq3AOVIceI625LyUJo4TwJcFO3FIa8jYWStyOs2MJ%2BbZBnmA%2BgYSaKd5UszaJxXkRiMvGwD5%2F4JROgZ6a90s3foziqnZp1h4JNx8PXoSYNDKVAu8YJIr8ST9ZPKv%2FqEypfGQn7vC4DLnoedI%2Bk4t%2FLzGDFFmoKD7zZsSTk9FJ3QJJ2tzvocdxI98sJarH2k28uSA7NcaHzwijxQu67KIYjzw78yzdYalM2ygpaVGcg850i3oOpbhrF0%2BRdIlCN891j4vU%2FoUt3ABdBZOv8yYToLabIt%2B8hLMxFngyX8HNZ58hHTO45zhx0hbdA%2BwbzqhA9hkDRH91ZFhx4pI2NBfAU1NwCcWZa3S2vvMpLTY4hdqGRf%2BCjoPxZvgrkeElvgfXLXputAuPt0gtYq9COsAK8jgW3FdPfX%2Fnj4%2FDcmHpw1WFVUNZdRtDGK%2Bcvq%2FjmIPVuILes3UggTMy1kMuDgNnb93MvNghsUy3gGZTW42aSnr1522nBiKGWtXjW2ZbMKZheLNCKBEse8fWR2U3JxuTfspu%2FmhgI8V6M%2FoYGIkzudvCUrU5L%2FZkHEGonxwbLPZzzQPa45PQgcOEZTpp4YiBSh4kLiBQXDTyrXGtyr88cYXk8pXFS80zWGhVqdTkQ4DD6kKDBBjqkAaw0Ln6WRP%2Flg1kv9S8cPryPBv4Y7ST1uoDLDuXmFTiPaFw4oExfGyugE6vwwHzI5LNXl0BDVMAV%2F7jzJ7kB9Nnsm0zoH7QpeYV0rv3vRS91hwbmM5s4H%2BfK6rWPBhUQxDeDb6goGPvpbagNfehBEjVZ5XnXPB0A7SVA12hATMDRYEU6dyEmPledwMfe4yHNnxnULKYwQVCuju32ivljJMWWyGgN&X-Amz-Signature=9651d4d5ee80a5072c73f3c0db58d33c15cc47c4438dd01ec1ace2e2e8e6cf8f&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
