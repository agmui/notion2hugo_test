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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYQ6N6LS%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T121445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEvg8ZpahQxxf4Ql69fsF2PUOt53q4XwufZm%2B%2B4jp4jpAiEAs1wMPLIcJHzyCY%2Fm%2FU8O5fYM%2BKGuEmuDHmuw%2BEtR3MYq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDLg2HGSn5L9JaQYPqircA6q610zDZhoB9dZZZT%2BZoezL58%2FWStIBzs1Z056hYDIv%2FvPOFfg73IQSqVFNZMJ87eDntpmuALRzjgtQnXuaNz58XaoQLXUWI3%2BgWO1qpQVSSeFkuYulUz0sW7iG1nIMoaEBd0pa%2FQNUX8DytoyxPYThjUvKILrbvwuqtLL283ECZpJZJaPdRz%2F%2FQsmcB%2BCqG3zC5VmUqaPBDTT4t86KQvkGZxaaQA3jYavSKuXhTZZiSO2Ni%2BJ4TiDL4EiY1OD5MO8YDqCtdb24ra0sMECo9k%2FvF%2F6OymZK6qXfCTaIfm2Z2WjlN1NuJ%2FQM7fp%2BAAue7r9Th8p1JclW%2BHcLAfPROMgF7h%2F9b%2BlWsGxzpZLwsVjjgnTzAwNuvHq5XRNjoRPfjVbqONZXyIPIEgbKPZRsg90psddETvy%2FO8vFVzJmnT2Ee8Nloy0wnrq1Jfd04hxHRRM537WWD9nIMgHnjGJMiqQwYbtbcJDXRjWMKiwaFvwniqV%2FCOMosAJ3RV1d%2BCK4AAqge8FPJbChDPXFYC4MzhdRU0P9XWV%2BpP4l8iERWnjmFNEHzQcsNPaiVMklvIQc8hPKSWmeSmHLc%2FBcpjokzoBq8GcG9%2Fsxhdr1zfAFKAFUCc4TWPt9DcPW0YtFMJeoir8GOqUBnE%2BWul1dTEE4NpKy7w5g1%2BN7JrGpO7DtfTBZyEWoaBhFMDZLdM6zIwDn6LgwbFpZQ623CSUkFZUvOmRn0ZZksp750%2F1H%2BLNB%2FVPNiqld0dwgSLooqa31UP3nNuF3O27%2FR6558TUyma98oOD%2B5d1OmtfpEk9pQhUgtATbYn8Krs34ImQKQr7gjTK2BBByCdngudPM%2FQgrrPcJ%2FraxgEO4CdrUETq8&X-Amz-Signature=ff7c91587d82c24d4caa9e5b1d24a897d6bbf1af35b07efa978de78440ea2acc&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
