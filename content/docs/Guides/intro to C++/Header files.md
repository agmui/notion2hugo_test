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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RR7UAMVV%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T150913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIC38qr52dnXnXnZXcqRvKSeM7TDUndF9G%2Bc4g67BAIVEAiEAm6ZPM1TBrskBxOHwr%2FbHr0wXQf4FuM7OD7m%2Fd3hcY2Eq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDPJeSTazjFviAazxnCrcA0QvAeSTJvvnRaqmDsgvYl4%2FgygNKoz6KICoPed3CCYozlnSmkvtBV7o0XJ7GTL5xnXaMUhJxID7OcWfhYiHTE6kSZ7IszOkGX4tTU8vbXG91UZMJHwDzDK%2BLK6uh%2F2rckJX8q%2FW0nrhIDnFL68GEwKEynyNK1yehK4gKPzKE6YN6ktz1qObva0bh7mEMgQK8JJoJLaQrRwCsX1l2BcfrLPxSIiRdjeQU9FgprLzawSFBUxvtCT9MV%2BZXYOQXSGnWBKERipUk3CpwicbWdsnErUHPWosblqr%2B8t%2BI%2FDpKStxdn7DGC30i4jVloOl01rdWviPHbhDlsvoIIGbeSEKh0TFA9gjza2hupdlKeroTXlp3%2BBug1Kh22w3PyWhd685Nm1BATwQHZLj3zMirMM8J4bl%2FpMOeDtHAzpzzO9r3fouNSiXmbCqoS1T7Wd4%2Bk2IYbF5Hrd5R6qVtqFLNKD4x5AINDYc9%2FsNQ2kNJwW0LxD99A%2BAk9qBHqGczynbqeUKg1xta%2Bgfz%2BzOFeNF0nCvePrGrxQR%2FSvorjY1wbwXLGOA0pARj8XxvpeF3e9rkQEPSjRCvKUKySZHIx4kl%2F%2FT8FD%2B9HW9N6V0Me6%2Bi6kXCcPPrCcnHlLnBoxZt%2FjmMMPvl8EGOqUBw%2Ff6gchOL0OZFNsm5ZzkP580wHLDq%2FMy3j8mmb6elLbQK8B6SjQQSkLU%2BZs56%2BcNPWRHaT8ANA0liGU3c64lTE5BxH8Wn2NpPmgUOjtb8TyohTDHXLttZQ9Tl1BuLSIagKEpWGlXgYVmWWmwGnYKy%2FMjH0mOJhUBNTllP2Q0pNQepQ1MRTNduy3d0RkfuwnADYzG18KEAOWFNEHDhYm4pIilK1rn&X-Amz-Signature=2c6a249a40700f66fb4eae25b5221742ee3cca7b42e9041a26e282b215694dcb&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
