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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHCLRBRK%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T170102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQCqEVlJjadsdsSfxrCN3TDSq33LbcDD5mz51aIWYBtgkwIgaiFSZDPHNnHn10aSbmn2kcABTFWNwP%2F%2Fe4EZT4xu2YwqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGbUJC5e8dMj9Du%2FBircA7TBNKcITlrtDG6dmSXZqSCCdHQfW1TT6XgAjWxi04VIxPgOHwVoqNRVByj78%2FXDzX3z844dsvBx%2FN82X5Ei6njG7OzvsYo7LI1%2Fmt4qF55q6SXLgjNZa6%2FHEirykAK6o72FFN%2BFQGUVzIZM%2FLIDPMDZmm890SDQxzKxaT5cK8%2BF242azwkOp15C66Q0mSnsNqFOm56PrlgfzUxtdxzUnB0EAI18AE858yUNri%2Fn%2FTo2g7OYquJfQo%2FWbHdumAea0BA7A0I6Okt4U8TkluMclO%2Fd8l0xkEfeRzZ1hwcmuOLLgcdAXYJzlEdiI6UoD3QUtuvLxldXmUfolZ6QC8k7DoJLbaCly4uc6um7%2BkR%2BQ0nBXImkYW%2ByNxqjiieSkDXq6sfne0FWfSsbYSlt8hJwLOK620rSUHXrM2S0j0xE55FmY3Bm3KVNR9iBZbGwx2Do5qtwUWWepMJjiSljqfviSkpr8oDFbzWgibjmqSwOtLaxCt2pYbuAudcQmRRTQoSam6UoJCtx2Zw85AQ%2BS2uW1ZHtvWsr1ws3oBQzuKSvJqm5SrHFHDRVFKpyMwoN870VXAxp4IS%2BqAL4rX30hfH9ARbPazgVlZrrxSrQi45gUSpFI7dlWPl4%2Fy2wlN0YMIO%2BiMEGOqUBT87700EeYA7PQUayC4OXmcweS1F1SRl%2B6Tz%2BH4vttz%2BgkwO54SdVqLsi7Wujx%2FCPlQJls3%2FMz%2FkY6Iu8MA7bV4q%2BDluzRdjovJQL%2FnIrM49Q1qcQShXqMwWu9%2B8J1QbEkBgHPwkYA1rpGardXnUzdE16h1yXe5TBwRHujI2PXVMLPqGB6sROgSM5OETK%2FfgqScnwajCsmrbwsMpaH0ot71EJxuRX&X-Amz-Signature=c88698e76f3c6b4e631988079d1288987855b4fee57d5f485558bac0c784f7fe&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
