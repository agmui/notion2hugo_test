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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OJMFEZY%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T061043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHZWcvCtXjQkMAQojM2gMsO2wImcV3GhHJv%2FjpTtt4BlAiEAz7V9LmJY2%2BFDyjac9SPj2aF0bljXpLTTdN41PdCc2lwq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDETXHhRFg0GKtRvzqircAyX8TGRdT71%2B78mAr%2BIA%2Bosatp7GM48gQRHY65XC%2FQ1BldrgsRak%2FHpJC5nDpNxLelmvYtKsSiKC4ZaGRmOg7PlDiG2%2Fx9r9%2FR4jL09Hy3QqzqNSQEbM3raZ%2FiGC%2BiRofVzs3sALGnCx3y%2BUFsBC3fK%2B5S6VaSmFHlWtsio8LAWy1khjBvcW6y32eg0wJ%2B10fg7kb5w%2FBCdfhVvE6MoVpSOwkwua5PTpcS1Xtg5UVRsOVrey4WM0p6U5VPG%2BL4aYzdXmMnB6Qevhe9kGFzbkru6tpxDjYB4o0ZWlWAOgIygU5YXzyF%2FeZFTNu0UXQB0IDO2HksapmMLp%2FTG8Efbh9KTvOt%2FMVHTEWtlRKNSjAELF0wS2CZcXvQ1JCtkZmfYntluO0siP0nHwXBKee4hB8AsXAAKeoTakSU138XyhdnWSA1AsEdddq1SMbkAKD6qAj%2F1IWJBVcBwNvSfwOxsbj5kelgFvKf1qc3YFN0Wo4OzPyfyxxZ%2B8xau56ctvsOkrguil5oMnIsd8K%2Brcp0%2Ft5KR4GZCotfOIan0HzPc7sDLJiwxVgGobRlJBKybtZuBLhtVsH86O1fkoTTdbPcwS8fLAMBtvidWURO%2FRJ4Trr%2FDAcKewyEnFrGgG2ueGMJDkscAGOqUBy3fuUoRYV5L2LvTUGO%2BQhHj4fAP%2Fo2Qu39xxZKVtBJB%2Fg3LvQ4xYIwF0Qag5NbmHu1SAt4zNqs5t3JigFdf%2FyWrvYjxfu7AukN3OPVvn8XlzUmPMIRb3bJz8693O7X1qqL9ruAr82%2FUU5Il%2F%2B0%2FLxRWHJy8y%2F4Nu1bkBnppRP69uDjK6qmy7UZs5RMROEuiHSVSDOA1jfgpiGHgirXPvrF2ZnNVA&X-Amz-Signature=c7d8251aff631ff9fe255bc24d5c51920a3ef1ad7f635f29d1c1c6b581bdbe99&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
