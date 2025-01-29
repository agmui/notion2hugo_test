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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYBALAS3%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T230725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBLqLfDQDgH3AROv9cLxSf7wN%2FAKPsubiVNEjYjFwMkXAiBRAnFVCW6G317BOWojd54gT%2ByLJXKyvdNCfPzqoZNdeiqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM85sKLCEhpWsUZiSuKtwDuOTGyjNJg69dpiE7p%2FZpcB4AXP%2FuS2IQaeGSLRJIhDo4mNfWj71JKtS3GZO6zfwLjmvvPKFk0rRgrr%2F3bqZl0lWNDe64pVR2S3lO5bbBo%2BWhPsBbQQJRrQLceyMWW9DD6hGPCB1AfARCItnH%2FTC7rUhVcxex%2BAsMNC9uubMnMkfjyQRuvIxCH8z1m%2FDt7oD1ocGmARdLALvwLrLxA2O%2F8nXINGIjXvJmi%2F9QMF4i97VnUoKASuw1ZP1TSrm42gcCHj4LkNW3QwvJ2n3qotH3%2F8PE3mGsJj7Q1mrUdBbFv3c0RNmle5if%2BWkQtumMGp%2Fw%2BeFdIU%2F0B%2FM1otyk3D2mkBb4nrl58KhdOR7cb64qH%2BDxqYCK3ytsH5MEuX9IdybyG5LGEme4emxyPq1crFhdg%2BetKkAiNrwmUDijwhNiqpcodDDMSVdGyWfcJgGlER%2FvP%2B5XPFEr%2BTt%2BNO%2F2jCFk9Uzgl3ya33BU3DSVfdw8HmNEQ865rtMFL3f7rm0U7WDB8hnlAVL3QRCscMGJud7oCK7FvAZaFaUEKmBC27ETEpksAzDWbJSD4E7mzdDhOG8i9PM9FH%2BDTYXsMIsKLXXVJA79%2Bmg%2FmcmaL%2BdNSdFXaQkFj%2BqYwltJZWgGe%2FIw7cbqvAY6pgF6gF6G6Id7mDUa8%2FLQdVPWyAUsWQjqg6l0S3aG%2BYF3kfQiOSEmRjwJFTQSlCLUBeJJ77YuWhieqQYZDQ3wgZpH0pwCoQKLOQswzSgwNJo7chZhS0B7cObI6yeJk2DmRFHMQNfxZoAsTKnNb3lKZ3PRi7JQqfFh43jLebXPt8IIdZF1%2BInt9GFMz4F2%2BFBOibQSDI8lOXNLhZds66JQpkwHgfuCSzI2&X-Amz-Signature=0f0db834e78c09ccf2d79d96de2b3286e94bd4712ea36bf6944c52121b614cd3&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
