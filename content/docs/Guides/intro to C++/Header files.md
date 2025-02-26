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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVBMV5JV%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T061154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQC%2FnVs%2B1Dh3bqo5tDVPId71CpKNPeI1Y8HwSGBPDUr6BQIgah87goj7nDJKH5HTeqoMTat9JeuKfMi3yhGbxEwqsPcq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDChygJpkBu8uZsLuESrcA6ckruNH1oSmd6LtdFrhpPFm1u1aVLdUHa8KuOewwOXfYwbdpKLD5NX7FwD50Z1GkyiZY4MsgA9qY1HzZL8SeTMvM43rptq8pL0y%2BopIBip6OCP6pvoPJB95CetFlda6%2FxEPwky1DcoTtaJar%2BLY2%2FTwZxJGxbRSdsSFEcL4dTIkCapahJfeVRyVcmgaGlDOf7Oes6hI0VHzQIznObuohHVYmNKGg14HlkQDZ0BIVFBpRdNWTpjynX5RHVSuTgoe9bzFf5YV8bKWMq1Y433H0o7hxzV5UUrBU95XqqQASCjuGywS3PQFoPryvPmOlc3y%2F5ces7U52bN2qONg4uRUkrfX6yrmARNDHI6YZFuDXl8SzSdEOyhysiTBjO6GhVSFoY87t1VBpii%2Ft%2BpLUZ6DaAE9lz3WwDcJLLp14pbNRkICFaQCII7ifo6%2BlBp1ApqTgi4dVBR8j3m9LAVyUnal9dyU%2F%2BCR2LRi%2B0UyUwOpiyEbIh5TsDqYsuIgLX9UvRMGLrIG1K1Q2FduYOBEvYFp1k6Ch%2B9cfpSihsNOnKSg9yihk4pChIL6TmlyMmR2cvUCS6dP45gJSI6RUwM19ZrosCzl2%2FuV%2FkoPX7vdixUJpUprclVpIwoduZLuqEuWMMqa%2Br0GOqUBL8buh55%2Bx2rwlTEdP12Jy%2FyLrkh4r5Rv4h5kQEe1k80vbUNzHgSmUY0JMHixhVPjKs1KWrQ2rpJJydunJmwkfG7DfYfuep2SrMTfSfklw%2FL6TKoZrP%2F9IbodtoTNWMt0l%2F%2BztlnNwUrqa1mzYSsV87gcaBLboVjR7LjNm0C8JPCuc3eSkNpD8aYY7fgNCwiTzGnh%2BXgA%2F0DJg%2BTiBXJ0nR%2BwFHBP&X-Amz-Signature=4f0e08b708004b1743ce769b52a62181dec8c67348bcdf4d03ee456cfb6d5f33&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
