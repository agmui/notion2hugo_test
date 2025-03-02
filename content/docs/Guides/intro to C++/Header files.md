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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYGSEQHD%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T140211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDoAi4x%2F09tO%2Bms0UCtIoKa%2Bb4wZbfW4YX%2FA11JkS6L2AiEAiHQGddsyFq8RGPq7TiQRQTL3i7LxItEGSHfE%2BCz%2Bt3cqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAUv2MsQL9A8l53MwCrcA4SUeEPikY6HpXaXDuTju7nQXtG8zgmi%2FuwhV8uB7NGT0m6kGEH3wFmkI1XKh73er7yzeiBaavBjlykAMch3yDsT0tjSPXVryi5D6DgbMLwhgPi%2Fbyfkjb%2BzRL%2BULoZyaAJTLUIQHqidXNbjWsvr9Jwi2f9fyXL1kj%2FvFKxaXzvNbOuJDV5%2FvwoK90bZObmFx%2BwD4ho%2BCQrJ%2BUAutx3EEPajfvLxpRlCYo9PEyr9X8QJfIMnxDTpz%2FSQpAQYn3tPxmfdEVyTXtbmoISHTtQi%2Fsh0i3q3zY8QjTW1S5Z1FUqiAlwwcf1bDb6tQBy3Yul%2FhSdLFf8eDjXCixxnePenz%2BKHX1phPeij1agZn2CTRP8D3Fijv6lJ8OdF22h6Pxk4rqdP8DR1ei8W%2Fi3wHfjQ6ELnKjxKboAaVmmDhJnEchMLVYB%2BzCvyesHu3xkN1TMDN3aMsMsxCjiUy%2BCRymckaioHjZSrrTtqP8SAQt0DmZSjXVWspcfuThCGMyaX7AJo8hgHbRc98H1wp6gAt84GXQAikEp3K9cANYajvmiCRY%2FotaAya65cUyexZb1fyLiNNMyBDEl5nP7KS7jq70xXs3IkrwHq4SmGPeZedpTOEQtOS%2FUJfzjxlqKoA1uoMJT8kL4GOqUBYNyBFCNBUFC2tuQikGOp5VzFlx%2BPPqFiQPRuXHPumghqL3psizkLXt0JASWtEecceslml6vSW9BFgQrMis2haA0yIHFrbNvNosM2zLsB3ZBTisTWQMaeKzVcalYOjWWFFZQTF7Nnp9troiQF41BT7g3uCrpu%2B72eJsBHlxU0wMG9HusQtcAl4Yt10wU8Yb3%2FbnhzXkcyQNrSYIquIac6V%2FS4pPF6&X-Amz-Signature=aaa84620617350ce50b6c1c047cd02ed2b3771a45f54ef1cf18bb9dc1e271be9&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
