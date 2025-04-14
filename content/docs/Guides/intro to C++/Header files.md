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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMGUUCFM%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T190127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC96rpg4AiMQVNHfwgfgYxO20pMEFrGk1ITLhsLQveekAiEAhIQsFsyPi13lUhi3wVBh7hdJH5RVZrtRXGLu%2F8sZBQ4q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDK0%2FOD7DF7AttIOKLCrcAwEkwP%2BaVp7neJsb5KJnLqUQDoU0FYyREJRy4pG%2Bm2Dwle2KRANpkOjC%2FBWaiXHpdQiOBsPROdHSeX7dv3YzimL0Jrr6vAALrtDwB8RfFsEdxs45Jv64AzN7k3GTYDdl1cmks67PaJa8xA7HgQrPKW1XXNwbupEVULuZ6u6PSC%2FR80PhcQpLO20PcWkYz86P04AC81aAyAq5FD%2BAkRdqhdPjLBDOQGRuUcM7jTiZZXuIoMk3tZ4KCf2rjrN5vXlAcT%2FwfZ0qz4ewQZV0cNJ4SeNVPpzhuw5NFbBNfHMs5HgOlxWtl8iVH5%2BThfZY4Ewhny1eAuduz1NC%2BoAkr%2B5y0S6TR3E6cTIjuBtLzXhvdASERvbcWyAhQ52vCXht3sfPyh2yPz%2BX%2FSOiL5jcg%2Fgt14myyGVD%2BMaApdh3rEV2d0NYSezYeKzeGVcmddMRdQbc9TzWv5qLAohTO0RkstMETsy6uwg5uDFqm99hVrp3c2VAHSc%2BwkAOm78y5XJuOhDhb2EmjvwJIVBVvIAgBXITWxHewt0KmL%2BtiuJcjyLLtbgTG1RHRPw%2F42cPv4DtaQeBiUWzShV%2B8C2QPUVba1GOmy8wVpztWNMJlccpLJcbvrgfSxEt4ZWH%2FSyaYL77MImU9b8GOqUBVm9M6ErPk8oWbenoBPvfcS8pno7NvhjtN9wpgziURORkXFrOM3AA99WAYiV9nfIbq5%2F0HEM55IMxa1xmvLo3pnlHMvgHQik3YZgUXv96rQ4altPTqCGpkcYnr3I0qeEEPQGkbwM3lmzPxoksEkDxVHbCfDE2%2BkQ1EHngLeDVyfVrnGyoWX11FKCdlu6QbPs3RcGDlrPeG3nqXp0oYhpLF5OEn9%2B%2B&X-Amz-Signature=d910e07cb42abb341b6a65c7a5b36738ff607105fdebb6e6d646834b671cad2a&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
