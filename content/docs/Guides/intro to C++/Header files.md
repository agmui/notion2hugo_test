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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S52Y5JNV%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T220857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDT%2Bea6%2B6GlXFNCsA1dJa3W0thoNk%2Ff0GRg1ME3T0SErgIgRRt1ai%2Bd8PgD6VPW5euXGx7IBbwF81aaymFPaqAO8vQq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDEd6GCZ%2FoBQF%2Fa0K%2ByrcAz%2FXaCbn%2FAfSHAw7N0UiUO3uFfqJTdFuUkR%2Bk8XXZ5qrSczUPPUt6HLu1zfe4GA4lcqkUs2UynfcPAEpHAw%2BZLUEwCk59pX526JW6nIUEKDNfNHWdEWIBgA5%2FkLRLI4ftDldqMYEV24WIsbAsOSBl9Ti6IJ%2F5VwdsgbEpTfXU%2B91Rmzx9khAsccuxPKPpcEDR1rFOOfEp%2FrvOdxYAgZflFjPrOcBF%2BL2DeHPdG%2FTKcRfFyebYb%2BMmEwdD97xRz0QsJU5vIvPgZyFtMuP%2BTIIbksks0VvW%2FcSoCMrgCEBrHrbUFdyiljkeUAfyr7KbsNtBbkn%2FC6hpZrvZ54CjAfbXqAdfB2w0iKMWXRvpibhoU53bY6UbBypwra9IGIiI4XqzkqqOPMZTRqYZmg0%2FgkkiPbnazyPwYBpj1IY2NjROwZ172bSZtc3HjZ2aE2HyRIDXJQ1RjeyrjvIYPw55DcNYUdhLnX4Q3eAQRosu%2B908s%2BEPU1HZPZ6AvYiar9bclsdzaUJg6dNPrU4TpfPxWlISGoKinSg1t4MgaJze2%2F0dM%2BVerMYvmCG9g6VtwfzJ08yKkZp8JkovUhYx0ztE1MzxeI046SHzPXbdCOXv3rRiyKJ0YxGbDGCeB0CKd%2BpMP7ZvsQGOqUB%2BnAKjz%2F%2Br16tSXMJ9cxl75olaH1KvIZHrOCxRtNWcJoEP8n7QScwQLRQV3XdKxc81%2Bspfhz%2FsDU2t8rxBU6H1wB%2FxvoB5avqqQBciYH%2Fhe%2Fm9RyvGu9EhNJv96X0TZ%2BR9hJjxjuO9PxBnaBe7TcDxi2QgrysYCBKda27ZO9HUwC2nNLveJ7SdULB5EGGtcooSLZvQ2pwFAialt2V%2BGYec0MHw%2F%2Bf&X-Amz-Signature=b7939d461dc3a0c040054e0201cdcbdac081570eb0acb621440debcac8cc9f7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
