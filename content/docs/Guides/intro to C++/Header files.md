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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TPBBRD2%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T220829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQD3NrRzdeAIpGBggneOxd3sx7%2BqyQqW6S3rlfgDAzqPVwIgTL%2FjgoBEoh1J9YStzvsYlQcQcfMwEXHPbSbEZeRQJeUq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDB1Twpx2TO7Fagd9iSrcAwxcn8vgesxDhSNQmz8k%2FOcfyOGyU%2BXJzCjpG0vmw1WvQg8Zm4MJDVPzU8hmyyjCNKqR8KV17avH6qapLPzqTnQy6d4y6O58VuLotQywLO23gkUNKyoSAClQRRXvyR7xVxcIM61XHPcuwdRl7TsuSGmrG8nvnCeGXTfy8vM8SIWsSttYm60ClgM0xyp2%2FY0CvF06cslPC0kGeYFYbcNeL0RoAhq1aN6rG7wgInTOVi3dZGkIdZqnMhX9Ba0PGvbbot7uRqkLbZr4cDcOoixLDuFp%2FU24DsqxM78neE2UBNnAJkC6SmO69nLXvjv5v3p%2FGM8TKsPQNcS9VbPXJc57xFVCxfhfWMc4KXSmHgOhOhmJl3LJBb4iLnSs21rrRJwpsAIIhwp5VaZCKwb7ro3rueSo4ampD6xzmg2RvyI0%2FjCBIJv4shz5fZwr2ha7YfoGP7pAlIIOah1mlHIn8ZsshmBM0xA%2BgqkE34de5bE%2FfN5J1RIHQr%2Beg73yfm3hB%2BZ%2B7ZR9uKFfzwmeHauju1pofFwUvqwBmvrsCkhYI3KQzVyGQuIMj2IVi3%2BhNwXy%2BYlhvUMVFI3hztGyZIJubrOt81FuF8dR1PEVXhjM3V0l9EMXfb%2Bm9MS%2FUULQRZCgMOGy%2BcQGOqUBo9iIk4uqL0nP%2Fzpv73KK90rxKWUv70KLSdNDL6XywaFlYd%2B9QtPYrxrld0yBi0Mlozj5eXoFxS7%2BnrHB4zfBtCFugg9NJqqCmf9AA0pP7kN07QCp0yG2vMnWV8sQM%2Fmb9BKqa1CKcQepWIJu9E7zltmpKesHbPBfMRl%2F3EEBSWKvgDuKvzsbhDnu1Z8CoDF%2Bqf50yxE8GjhINvMoQN%2FkjVF%2Bb2Ab&X-Amz-Signature=7c194ef48b420af959dc40a5045e6bbf3df337d4134b31063563c668e00c4a06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
