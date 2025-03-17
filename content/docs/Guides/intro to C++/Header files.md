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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XA26NNP5%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T110714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQadCeG8R9HQmW%2F%2BVBntwTsoKovNd1tDspI9YR2L6dNQIgG3O8cdDwIemJ8l25WvGtwUS93Fe4XzkAVmsyZGkGCK4q%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDCCf%2BpQOyrSOYm%2BXpyrcAzOSj1VTOADtkg2fTh4VejbWS7iY6BMRSjBn6IoXFMDpTcnibX0BB%2BoSAc2llbxSLtEwyVq%2FDr3DoTVLR3xNDAAzUHbXFRTIiiChAdnY4sv%2FZR36y1UMucmziE4hsm6ja9PwC%2FO4n6NIM4QxG1kQy356sQ9%2BtIRSKooM84DsHUK5%2FqNphHGqBVhGUujWeMzjABYU5ynu7mGz4XnOvztfX8KGriY8t0AhrWy7xBNM%2BftFJnCfuPvbtz06eXbbfdR9qMZ6a40aKVheTr8k3mcFcxOEdeU8Qlt5oELrmn%2FSQ6No56sQd1dOweiU3%2FcOLL%2BFzSa4CPn%2Br5930lH5DgnvS5jK5bEljItU4jBpxH2PgiRmTF19UX2z%2BAO4uMGW0WFVbah5%2BDACNs2sxKqZ3DpRUhIJy7aVhAM7Li52XxWo%2Bw%2BEwA7q1n7%2F9aJFhoES2LSFVgbHEpdbhk6L7hNslcc6Hm3qHYc%2FRD%2BASgmQH0yu1KX59zkx3Uq9WZ%2BWY%2BzBg77kMjrTH5ygMyiq62GSe%2Fsc75EiQE%2FZK2KgE5YQPwJhZU%2F02zqye1b3Bmi4NVq00U1q5hmFGeaqiFJYmM6azre%2Fhij9hLr6PONppKM6p9qvpOP3ZbDV%2F%2B0PgV5bun9uMMLt374GOqUB%2F%2B1I%2BQ6VtCst64hgWlmjwVhApX4hOak7gYWB0EclhsO9zO6sLF9x4ttUYB4lF3naTUOS56qjdSAhRmVSZUeOFSGYQ7GPf5KyLInI2AzjG1l4CWd1e5h56K5WTAZ1vT5hhx%2BFOChzwvuF%2FAUwbouaPXYH7RGHi72P0%2FMDLiJLxMqBwummv9Gjc5hEPObryuTBG7vC6FrQnz4HvKDe%2F%2FqoDzYBP35t&X-Amz-Signature=66fd20e81f2ed85ddc5b35e6d9bdb24f156cb351e46296296a5b4356dab03b34&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
