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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TROTVPB%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T121301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCICbvy1%2FZ3M5%2F1TLRymOyo2hDCRfYeqbzxuAXrzlq1jWpAiB5yLO0S%2FUrNkcgAt0NO%2FSjg8uauP3wiRoIHPcu1N1FiCqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMT11YuB91Vr0xVvg5KtwDirY3HHCxtjtZfXu6SOWWxTxzchG3FnE%2BGajuTLKBt0I7U%2Ft4i0k8OVmUz0VNU04d60XR%2Bp16sP7HDx57FuZXRrls4x8Wo0WvN%2F0cssIfOgLlD0nvgN4dDLwsOE05ei9A7Ht9bKN1boLl0CF7UW1NzqBqPER7pYdMf97rO0hVjhMZbj0WXRl32KCW1%2BR5ZQMxv%2FyS6pivWhMW5N31WsPZhul88Ro758IFETlqXVcipRBeAawsgrekK3tjmevB0PKoTa4E%2Fo088P9P%2FW64%2BYDCpLFVDD2xtEYn3nuxYJUCNEecYJBrgUVDW2rg6aFlUWd6zEy5%2BAZb%2FtYomC3rfoyiCH2194ma4pbrhaFh6jKQSWXylLARaeDY%2F8hOZIcdvBrtUlUOaiufFCGBzeSlYqv1r38BcgdMrFLz%2BkSxhwsyg52HCOq4ke2BuakvayfDXF9KbpbgFb7MGjvRrlzXOCTWkg%2BnzeSF1Wl9CLjlIXGPjcecqyVAB0XPPY%2FnscqeqDyAzgNAawhvjn6EwWKsFboGrn%2FjyyVVKycGpci1DyDLNWlSI71NE01MWsQjKHt%2Bf7xEefk%2FEHhq9ennNVk0sOePACqkaFaSG7jQENp%2BCJAUiPdNRj0QqvQf9Z0%2BueIwnaSSwAY6pgFZzgGDe4HIVMSHSe8zX9M3sNKqBi5t3L7tHeP2isuPPgmE8Xb0iRw%2FRKXy8B%2Bv769xYzfm%2F81wBk9wD9dTD6WOoqNn%2BgG9LSwLQP%2BSbxaLF5JBGy5abg%2BB2%2F%2FZPvIiyeIQr7Ddaqk2Yby8R%2BPHjD8%2FMNz%2FZwN9P2feNGNXbqSUP0Nnq1kc51XdsQuG92LEAzCWfCodU5qQ9b%2B%2FeLQNiuNWuwSxMDsu&X-Amz-Signature=8638dbe83820e33bcadbc2bbf9aa795836efcf267995c24fdb5bd9b53377eea4&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
