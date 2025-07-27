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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUJ2XNSE%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T230857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIDK5M%2BLf1gHdrljNwfBVj1HUKj72PX34pkE%2BFPvjeeQmAiEAuElju4i%2BM%2Fhga9U7BkyGNjwJeohGWscRfhStPxZOoDQq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDNB9naW9LV02nwmhiSrcAwfNfZL1yWBhf40zV7gx3gSznestsYsP%2F00w1mBZsAiGmHe7rL3amGl%2BE6MckCnxQuBHeqr11ggP3OtO%2Fuiof64OZWZ8H%2F37XcTr9lXSJq21xG0yP5l6vDoqS4kHQNy5j5bzPrtvKpCx%2FtUzkIgE9pPGp8hGqJ7HXRdAIrd4CbD1TGSEHi4KJeXzl9TutRWKlSKgxLhNtx7pFk64gkUngh8eMDQsMrnFmfEXBew2HBLD4kg6vyCoS6vRNJXTpsXMrUE3EbMT0wNs1XE6lFaeBXLAe%2Bdutq2USRxmQirlABjx%2F4tdEhSJuMLTrHjKOhYTmRU%2F7B6%2Fz7mnFKgaUPtsnFyjbtzl9PDrYNnK6qrLSJGv9ERninkDjQBdIQERLNe17N86NkDJsUpsTC%2B%2FG4W33ZCEu97krGyd6ayhYQeUMgjiRi77P7WNTIrnSVcNxzA2zzjSJVq6R8uujoub%2FIBYcUXEeZF5e9OMkRefWWNwgOVhJ0Vx%2BxSguB7o%2BV%2FN3Fmqx3epCdmta3Nwv7%2FCM33dxedh8ecuCgHDr0S1yAy6WSpLMmPrUygBWvHR0l7LssOHsuy5pkdJUpE9egWwk1FzaJV23R03i0gbq%2BByw8FgTabYShR7iP4yN7s287weMJ%2FJmsQGOqUByESXwWTH1E42M7w%2F%2BqCx%2F2jo%2FLM1cQFISNLp5Dg89aoFAgWZ5qDjKQ%2BIn6c8%2ByaQHpjMzgGJLv6DlZpTkB7L5u%2BAzT0KhmdQw2RMFT7k6Y1o4l6oao0b9SjXTqx97xJvuoGcZErtizgEOSFvzUXvWxIq%2FwA%2Fxq0xxRXHLw4zvIjpvTiM8v2E4H%2B9n7gNGqSgPvx5PTiWsuPYtD0t8Or7BzpOUJnQ&X-Amz-Signature=238bb44056c30269c26800233e2dd6cdbdd5f3caccafa3701d6323c88d2fb35a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
