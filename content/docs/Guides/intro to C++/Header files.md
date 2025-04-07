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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GENGQ5Y%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T090939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJFAyWROYgLJXWPZPo4SboOPJx0RDVoxTihXI%2Bt%2FeLBQIgOjWR2vD6fQEkmssx7Aep6lY3oaXxAiMcLfQzPNMLZ0sq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDOtB5KOmRA0ghDboDCrcA%2FB3HfG6unQVlExI9GqDZJDUih14yCUh0DbOW43l7WxfY%2FdMa4Kijvz2K%2FCFVpaNtdkAkpVeY215qesoEBR%2Fe5gZF4Zsve85HO7Cc9w5FAwTbhREtHcaGY1bC9wbwbleq3SBGLXl4T0oLZ9FfheNB7AzM7VLxaKdu3b%2Bl5kMzRo5jZ5315Eg4avKYyt%2BzfPDV%2B7PifMy%2FROIyImfwYJV%2FeOkkv5DLgKq%2F1XawUzgZyrRyTtmO3kxrzMlc8pfw9kZ29aSESFG9I5FZIhvW1rwqyzd%2FtrDv76vc3LRpB1zqoZz9qvSa9CjJOwjfCvMyifJCKA%2B7XLuDDRvjWVohN1H88lVtj7dowBPS4xoxXfMi%2BpNE0OhxmLgRNU95zrwAWykz67HIIflAwiuXH%2FeT6Kv0HNHewxFKJrsMNo6k2fxqet4y9UsBI2Lgh8dYMngXPeWx7v1S3fT1D7rMf9laKDPTyIoA3KvWib%2FiDfj0KQTyHid8RQ9uDw1VYX2eTr5zCKGUe7ebLZG0y8yKqef2MlMao1PtvP2MGUkDRBcUMzl%2FniKDxxXVJLf4AIxgrJPb3vJmJFg%2FPfu%2BzKU30wQRKgDUM%2F%2BaCeYQ9jFxbm%2FxSqt3ZLf%2B0WlfhccQNponN7VMP%2Bgzr8GOqUBXWE2ap6F%2FvuNee6NCGrmek14d86qPpQuF2LGVtlOcmdx3A8b75ywmBpr%2FkoJ3jfGJf84Gm33w87RpY%2BndsatOim4%2BIXYoDfwTM9ceXdWTUIoag2Tv74OdbblSIYxZHIbzVkqtCH1enosXGa4NYRXynFwOnZMkgJdAmnpaSbboNGQ31O3ZMyvfH86w%2B70v2sEJLwpgebh%2BqyuAg%2FCgqXVAavuITqO&X-Amz-Signature=e5d6e3b7106c40415c234f9ef8c83d8b907c08df47e8ad0d64b7b2f85a4a7631&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
