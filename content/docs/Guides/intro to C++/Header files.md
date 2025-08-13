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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4L6DFO2%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T181325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGCDyt3pLlT8Agt%2B73sMJFEELMsx2r3HGUkcPBh4bMvsAiEAvQIaYQefCJEtogIFof8t0mVkKjZ1ZjZF0nLLNpWRM28q%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDGnobhCRV%2FeZHFwUDyrcAytXQTvrQFoS29liPIlgDfEQjsCnQf7uIvzxfCv8Gd3cbqZkO2iGkLRuK4tHVvRXmRwTZy%2FjCTCxr3d1bgjrKMuNiNRm4Y1Y9ZE%2B06OJA2lb%2FqrJo396vKYv0nrs%2Bn1HQ0JIyB6uenext1dDBlYqT4ul0KE1VDHfUeRN7ZR3068dwfaVGyZNy0CuA5UbylvNCq8g74JdeHY199Cf3jMrSAph7%2BreY%2FJ%2Batt5WFCGVFFLIwuxc0U%2FwLuhOnTS%2Bjedsz%2Fn9XllkjoJMSdLHsE%2B9kMinW5fOh%2FG3%2BtE05sT1ywTL%2BpI2VOVqILNUVMCIQo3qstvyeTcdYgz38Hn2yhmRz6ftMdMarEoGy%2BMzynSlNMHIWoMuU6GZf5YkETqKJnJcSB5OJkvmzbrN7FA0WAZ4or%2BrxekIUlS6Z%2Fevz48aJw2F53aloo9V45xkXv0XsL8UR%2BLQwERYV3FW9TupbQqNvJN%2FjcUICNRYpDl9cnYd2AJNl0x7lhryOJD%2FZXT01DHTCAwTqlDWiaWLqgHWmdqHZKUY5VsNXzSrMk97npD1dKFPLa%2Fm02bjCMd0H7LeEqrB1RosP4efSeYlzD0EDI7aEGN%2FGOvHQK7aa69RCRr5SqB9Dg2bRx9RjocnBacMNyf88QGOqUB%2B5l%2FNFdvKmS0fDVRC%2BeO9KC%2BuiEVu%2FUMOas0anAmg%2FK996Ug1pxz4CZR6%2FcDzG0c7GCDt%2Fn%2BRDLaumVqXXZ4%2Ffl6brS4FSCHCTkhkk7MTVApapWeZkQuvo%2Fi5WR%2FybnlFEb61k3IYKVj6YePUaIReWd7jB63z1m21mRaSAayLQ4b2HCcY1voTPRzKD2HpWWdVFnaUh3J1dsIa8aaBjHO8hjq43Oa&X-Amz-Signature=83da03146d8216cb7d6c08833180e142617ca0403e927e075d366241915d20d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
