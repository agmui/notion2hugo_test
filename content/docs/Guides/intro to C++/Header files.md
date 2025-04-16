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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKZDUUGX%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T100902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIIY%2Fm1f3y%2BG0o%2FQ0gDymCmnhJ3rC8jcn%2FxpobUCeiwwIgP2ZHVE2Kapxe8i0leqSHQ9yfHDlmn0DSwC6mbV%2FBQZsq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDOjlrPe8JbsTGrULkyrcA1b4ePbUA9WALuqzjNmLrR9bvwcxc%2BjupOp4oDOgNeiGpavGaISAWqp1Sjl87sm5QzPdwiZXwSdhwvhr76wA6A3g%2BDQ8QcMyR0ll0Fbq%2F%2B36GBbuDhsabgFd%2BNdMMyXGvIA7ISWUYax3dxyBVFrNv8YhveDX%2BJczGosNeUQEei28yGIBi2KwBmvpOttyPlqwvtgy%2B2vjP82hvFsV2HEyeOk4Z8q%2FRGOpRzqfqXO%2Bac3AeePwBp0YR%2BpbGHh1ySPYJRFL50wyylV%2BcocGLHW6Tl2pFykXucAxJxNb72g6%2BkK3ACHaEIXdRxHEoZK%2BcA58a4pTWd4pgU%2FvacbUpJAB33B2u%2FFpuB5R0hLMv9H1kPJTPVRjbBu6r563kh1hySxCm2eTn9QWJuXnTFpatUf8MXNVeNtHvUBzJF%2BhzZrEf%2F%2BUZRnMzrO4JS4mGdu3HH0emM%2BD1%2B%2BGvP5IKYRiC8I4lDwCmfYvNrm4u1ANYtpGRrWWD1ith5GFwncReTKz01PojMjDV%2BGSnig5m1Pm9Ucc%2BLaxl%2Fn7sSRcMchr%2BvURVSINxSA7W3EGVWr81399%2BPyyqfcrkKMqHVXYAdu860mYS18L4%2BL5eOssj03tHdNgdXLO1GUh3QJdwTilrozqMNf0%2Fb8GOqUBX5CjQjFRIw%2FRdJbBS36Z%2BMmHMnhdIjJQFbRMD%2B%2Bp4eRC4SLrNXff6DwpGzdtmWiQneShcpTRtJtMwFzKMLAI6xT5O0eW3XGQKSZnpmH0%2BgCpYThT0DUpfuRwrlKgLxfX92NlPxWibl46mNvxyVpI%2F7soQrjNz8zC5GEyr6x6aXYW7g7HVku0rDv5giTiROWYjmi9wqnlECPfnRQGRL2HrrrR%2Feqm&X-Amz-Signature=c8589a0b1e4be8d11f10ad7af85409f3e82c3e17eed32748307f824885727bd4&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
