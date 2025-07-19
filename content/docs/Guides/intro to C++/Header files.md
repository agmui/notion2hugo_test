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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRR2O7K2%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T051228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCg%2BVqC9kw5ZdLGv5wLfROnbSi%2BESwzyWcZqEBtRvaEqAIgPmFG6UGFxVePXLnbanqayP6llPsxqNQloc0yR7tIJ6cqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE9bJPdCjaCgk%2BPSaCrcAyzV5fbIOKLhuHWRpV9UjgxDCppW2C%2BHoX%2FbDs92wSKoc9Ro8kelwaYvCFKOB%2F2op3Y%2FOD1aSL9f1AI5XgG44czpBmdylB9NmmQ5V4rvwHnLuatruaqz6Incxdw4REDzthjUlserFT16lJG8aG%2FlAEVKL%2BHXA11JCt7bafj4h8qBUZ2V0EFsEZI%2BHSt%2Bk%2Bapl6LGNhHEE3IGAC7KQ1TeJSP%2FbMohqHXnjyFJ4TDaAsq9NbUBRhHgGh6XH%2Bw5k1nr%2Fc4eqY4xyAhslHBDUt%2FOW8b%2FX%2BX6ETFOhnjQnqi8ttIshVWWtIp7zCQfYtoCKRWeOKHWzHWafe0h2lW0BxF35l%2BjnhWT7is4rQv2IE5%2FYukOWmqGklwp%2F94JK%2Fk5g8vQfAPZ1maQqsx3TuRRehjfcC1tbbLTCwk6%2FV7CFDdfwoKx6IG9mX7r69Pep9jsxnTBamKi6KPHYQwiLBpC2fyTaLz7SCznz3e5MFNczWm4qFtGOSw6HFELHJllHu%2FfzgtEhfzjLD76tjhlG8fc3ttuWAmsK6RO1ASDfbUo6HpR9TLz4eWWEEHazqdNonUWRSemVZ7nSqVp%2F6G8wFKB%2F70oPhASu0vT3WRLpCwyBDbH1PhWsOuWBeUEOsdEKjjXMOzF7MMGOqUBuCGbceX%2FasCjLCuybmfIC5%2B0s8MdVBb8Is0ACvnDJHnIxEo6yUyop2juH%2BZwTLnbCUrlhBdoBr91faMuqtBfoZuDTySs%2FZVconGu%2FKDwAyOGLj7qLQpWi9EeVG%2FtwTjnCKSvG2mYNlkZIlzuNDmSI%2F8HJaGfed%2BpgWS%2F1MkrilCamzvQHkwseSZskfEKW9WCjVb4XUT4bbm2mds2ycjXiEzCDafh&X-Amz-Signature=6179052edf30a72a353c5d0bbee33027b722c457ede4a2402bf94cf853354afa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
