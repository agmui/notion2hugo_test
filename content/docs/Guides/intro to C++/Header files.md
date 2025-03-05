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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMJXNQ52%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T100848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDml87Gwin04dW5iY5fgy4579KPhqSwuLWr0Qz6iPXVQAIgUtaBgkaF1ggWkNhJzz5%2F6R00KPDYdrqTIQn7rQpqtqwq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDCPtTVwypgvnwC9U8ircA8wNyYIRnuVvSU5eBu7CBwHeBPycrVwVTVthcchIibCUkX8u%2F3gBkRPw4K5slf9%2BDAPqsoMbl5qIcSWkT3KoNjoV5Bvl1A0QNZoTKIB1V%2F3CusPxtWwAfVgAIfRlLAicMso1P7BykKb%2FGQ%2F0%2FeN%2FLMrQJeYP9SzGSy5EerBoEu77ORvDHKI7mcSP4Fzr6yJ6ez4hbIXjRUuoRDHEHVWFDVpvzCJDLkVMxYQR7WBiUq5wKyoERw%2FH5cH9EdJlECR5EKM92gc0%2Fhi0EvwYHb45QhDWpBD41CbSVvbuCHQWqdJw6Eat3NmhcHDsetB5D6YWHPeoAMeFGf53NSJWEVCHUWF%2BeCiOQaYVlI9Syo7mgoGVSNtMSx3mejcK%2BPfMuco0nFP%2Bzv2hCnycV4geoYqktT7TM15InVaAU24zCFCA%2FbUUhHqPsK6%2BVQRHutHAxchbyJNt%2BQhxjbtGuEr2bRfmtHweqKqTgOn7%2FJm8YzQuGCWEa4mBWsHrQL0YkltB4d4BXLLKmAikyvGa61VDr%2FsENEFWhLr851B6YlZi1yFPYkTb7KiYIRiqVNC92CExClKZW9De1N%2BDOOMp3QhlqRXTmY2vDtn9oD0CzYM9ipf5FaDdcZRuIfjpwy06NMHpMJevoL4GOqUBi%2F6fcftWX%2BX1Kv4CDjBxqe5UrApmScGgdO5beYb3TPvgmQrXTQgECM926W6xtF%2FeJi%2BIwbpyDGV9NvX8dAuWWhb7Vcl6uwGlIWrmxzZpMI%2B9f1RFkgTkVrf087yhzMdsm57MGpTNNi2HMY%2BkscNQxIBmF77xNJGKr94LiCwXiaEWYkF%2BmXXMW6JcFHPCTp9dMJcYG8rX9wXJzRh%2FTMB5%2F1ggk6pT&X-Amz-Signature=8307b0d5811965db2fedf09d426c0c3a420c13e22d74c04ad1e0506c6707f0ac&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
