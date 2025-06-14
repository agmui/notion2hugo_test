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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SS4XAWPD%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T150720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQD%2FO82Wrd77yQ33kIeWim7%2Fz7t92rNhBF7wk9e%2BYdbR1gIhAO3dXJkWum3CpTsD0E%2BUds8DXld3ZZqWgIP9BGi2%2ButAKv8DCC0QABoMNjM3NDIzMTgzODA1IgwGlIHcDSeVMRzD05cq3AP%2BJpjfBnz31PWuuS%2FjaTrjFdVZ7CTVG0tmfLGtxgSzLRq49B%2FqGNsL6yTPGTmttn5X9ofulnemD0ZA6TBcbkJF2zvvJnPnKYELLqHkkBcC6rxxdsPeunA3Elm1VnRPMy4URpPeP0OQrZ0iObY0JpS9UI0FNsHdSOhaEzPiZks9YiWRa%2Fv%2BXqsA2DP5qPt1ow6%2FSul6WIcw4ZnY%2FUfNFVsojA%2FjSz9W9tj2ChuvacxS5%2F5VIy2KLSV4UhaUCIhAa3NhV9Bgc%2BqpeNZF2tFOwh1nWeuZTEAbd25VrmOx6%2BfVkn1Q0h9Hvcx33xaQA%2FOsWElEModnASttuFpE2qrYXBOJSs1apJLVWcp%2Fet%2FJZScxX4ylTRyx4z9QBSlG1gXNaGuYSxBZkOstMtBHOuLff0Qx3WAAbIpt9K1u6Sd72fcHlqQCombMtlUQnNKPUXC1r2OpD7OU%2BYF0nX64WmiGaFsEjakkBTU8Telg4ZsZsbjg4DVHhDX8GJfz9u8Vuz3XlR0GSqDuh0DLEvO2b4xHunt7ocXJTLGn5%2Ftl4pbe6X5zjHCMJyaMSorEAoj9zCZn2pYlCVLrFZtzpLASsuJDWFZbdqv8yiIzukEsHN%2B1q2rfBbO80Kexxki0m6kSiTCEwrXCBjqkAazteG1PNmyqdSFirAkE4JRpXSCw96GSyrk%2FoPRAPoItwgqmYTYYekazJCRTSCtTN3k5vD1UX8mFOr95%2B3eqKgcPamR2UJfylTdVWmFVbGZgkERE06wmpXoWgE0gdJqFHJOGaS3%2BBg%2FC%2Bo%2FzTBsA3hLU6Lihc5%2BctxIqPffmmtM1L3GU%2FwIYQdACs9T0gVW8jmtV7H3Q5Go6fC65M%2FpaJSwFpHbf&X-Amz-Signature=4db9688cfc314bf4c3c3c39f4def1827e8022c31d9a69a022751351b167100af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
