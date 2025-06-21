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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUOFD3VE%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T110558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGvye8W6NmXy1FyuFdWzVDEAw8NeW8lzVaXRieIUfx%2BQAiEAkeolQkUeuC2SfZ7zEz1gCYEUGUJ0sEEermqYyG%2FPmoUqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ48Oq7juZOLpWdpkyrcAwVWKj9N5S2J5z1MtwlO9MZICW6Sux%2Bf52iFfvF4rAq5o0NZFVt1v2gaN1Xinj2gz7FAkltt9Z%2BiB%2FDrFxI3DPLjdWNSoiY5lrbtvktV7K9XryMImrSrfbvcZqk88%2FfQS%2FRAZH551NYRdvuCVXg1keCHx96lG110cnNCERj%2B3pAbbKB%2FHO9x9roCilYdlD31qCy0D5yQWNqq1jLi%2B5FHXT6AQbZT%2Bo%2FT9VdBPUpRbUVZO9e1DOCNIgF27x2b3%2FLsYFPEcyjC3gCTcAtiLOC3tMFPO6FEz7%2F9Kyx1J79pKs0BqGVOabIIHfDLYDHfPPLpiikfO5BWpApGgomhYf7LkNXRJw7pk2%2B4kcv6Abxbpd8aeL4qeFPPuoflPPI5STRj2ypXYWNb6XNRG052MC5GleVa%2B28rv0vrhk56Ua2405LWzjBxXknH1RABwJ3oPEzS50Ig37u4kRVPXF%2B6jZZs16WcSZCFP%2Fe9vLpOcVS8CPKpG7q2dYlo67WAqUiaEcQSZbW8bO0kFAUqzSdUYt22cS7k9Qm4%2FNsi7A%2B7t06xfnOVBqp3ao%2BV26Tda%2F2g7JafQMYQRGwME5KuYxgEZcI31qBT68u0UvV7GQ%2F0gJuTE%2BCCs%2BW6BCDfTyaTB63CMKrJ2cIGOqUBLUt%2Br%2FGJ84QPMV2%2BqQttmYCSA66xDjeVxL4hGUZDLdzmyOHfCQYL3lZW5%2B4Ai1txBoZdkPcG7IFYe4Pc4qa%2FTdtvU88zZRiZMcW4pD5t9PGq0Kao33slACEGYdMHE1vw%2FrL6URGeItFmHGSc351iBD53Rg%2BXLhAUfphdqbh6jCR%2B34zjmuba%2FYRrIoyrdFbUHRUw7tNxIhgoYH5kbJHskQYtetFg&X-Amz-Signature=c198bb95b2eb957210ebb0a5c6bb215459a192a08408747aa37bbe42510dcb15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
