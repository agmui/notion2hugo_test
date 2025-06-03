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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTFWQSDY%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T190707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQCIvEGl5bbD9B%2BsVlfCoH8x80NSirVlkx2xHjD6s0yTzgIgaVbRjESXiqF7QsOCyNsL%2BquDKZ59RgFHQRTigE%2Bj2g4q%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDCRQWk%2BjZsG%2FgkdMKircAwAalDviw8xLfSM0YoTvnmxQgILAtRwRSCkAPTS2oNuLwQSyWYQZ%2FKXBMTESUU1dVEXJYvSp4OitL7broaw%2FbZQV23qINFJrIAEv9tynkXnHB24nebbXAytmzbEeLins6X07CU%2BozhEmCJWkmNwIfcxjEvhq6uill2580q6eClW%2F%2FbL%2B2x3eN38eMm5Tk0iEpou4FyZgC%2BItE0FaBLYEoUXsLID9nc%2Be6K2FrIVre15Ihd04dxZ4b2MfrojgyRW74JUm%2BQnOQsu5Iy9yFNICMIkRcxRSL3ZCq3y6Uq7gCtqTOnDxX6Jh%2F7XDHoghQe7G2A2QTpUODNmNZ14WJFCg7fvD6CQVCcwXqaGO5d%2BuDokXw7UOGV5BNTAWIKmHJmA0kMe1hOiw3zLELFt%2Fd6q7zK0nj9Wt7zeIgmi3FptKmVtNOteHGmwbRVDn2%2FUwRl9aHcSAc8%2FLLE5ZySSFISejwHivV0b5%2B1PbdzEuLkpHwWJwLVfs4Zocu9CacrsP226h7vMdot0DuSUH%2BhLmIdhVL2cObdpHWn6aDVR5PPrW8pGN9M%2BSqEuaymgS2HLu8KC%2BhbCEq8orrN%2FvA025GNdQbCD%2BBKEwvKinNV22hZzgwGIFmaZkQ2lzsUbjFKiWMK%2BF%2FcEGOqUBI%2F9bIbU6pg%2B0uneJ2t%2FObdfKQ%2BjwdmBVfKK18Lot5GnMi3utRjsHwxduNBsfOfHbQDYeVH13cAUegNHYRoXZKH0NimvnPH4tSaTzVmR9XlhDEbuE1btP%2BJvlo5J4fWMLMGXMeHxiaBw2Y8Ebe84l%2B2FSDHIavTzCaf2RPwBqRzAXjZerne9%2BLuQJPogRy3UPTPgPMjct9VOz0qfndklh0E8fj3YM&X-Amz-Signature=634b9cd6fbbffdf554d06feb7eae86a71aadf7b6b5b9d63083bccdb427b6a2e6&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
