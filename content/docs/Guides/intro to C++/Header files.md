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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOXLMYJA%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T181051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQCUXUUc%2FhOfHei9T7cPr2tZeCo0TbYC2o%2FKLMreH9mO7gIgHxRfkdwStI7Xwu9g%2FFmtaqSLyHzSlZaCW6pqMATQ%2Fsgq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDKvUDvxBB%2Bngt8lDtSrcA5OwXY6%2BrO%2FDi1Aq99Db4L8RspC41Y1%2BUB4tDcwew97geWINDQSCWy3wONwxcyBliYy0Nidv9jx7nwkNKIW6NIA39pEexp21wcFC8GGZKxDC5NIuU02EKyTEWxjS2S0o9JHmcwzZUf5tnhNopMuQJXHZR7Pibym8%2FzJRfWGw6NjaNmvzgoEreEn%2FQnKw%2BW84LKig%2Br3AXjrsOzd1JtvvsDoSjOKggQWyPV%2F9s0ZkS98UimwkZfxABcgN%2BXXxMm6uKo%2FN9pboOIKSrFTLPCBj%2Be9VDi1Z1vAsdKtV2ipIS9p7wjY1FaWmshnjJc3zb5xZL%2BnOxQ%2FRiUZa0Swa6BUu6yW7bwVxKN27E4tTEZY4A%2FB4qDDajWWDUWwD9vdF2yw6jyjjOasz6ffO71Dyfk0OX4zfiM%2FYTNkC4DX0niim%2FS2C%2F82PxTDw%2FpkejKRwNsU8teO%2BEDupbyaAinB67q7DOj3cKb%2BBYGjtx14p82WkdVuWYpgfA1kheq7vkRZDgJ5ghKV3OcAnl5Cn62vRpui0k8gW%2B0r4xzeE2OVEfXPIHMzRHX9OD1AeukwaaEaFykr4sx0t%2BNXL9uz75QD%2FWpA%2BmHP6gOuFzgq%2FZnSmlKuZ57gcoEL9ALY52abth5HSMJ6EvMIGOqUBmSHZe84%2FZgXUrxAsP3xegYXrWtT5xlFk9lF%2F7%2BinTZybANhER1SKbPhshU%2FTLi2q3LlLWrjbo8olvsg%2F6CGv8pMMr7dCXZ9D2yQ0sJGwNJeysr90Nl5jVy%2BEYBiB0fFyq4eddwSQyCg821tBLShhOq6rlH6SBgB5a7m4FqWO6eiXkEI%2FPNtPEOfnYeOIE17pxmMFjXE45sQ88YOWd7CSvPVz8AJO&X-Amz-Signature=699b8b1f3b7c89661edb839cbf73be6d6f7a3daddf425b54f2450e74fb109961&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
