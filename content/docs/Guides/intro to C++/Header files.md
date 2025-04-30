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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663THG74E6%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T004030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID%2BZAxq7lW9l5IULdn6CHsjUT4ZRSD%2FGGQTceep0%2BS4HAiBxRvYoO971QXrShyZPcaZaUkY%2BdDdjaXaI3FcT%2FvYm5SqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5%2FyQxeyCO7iQZ0vtKtwDNo0ZtUwdl6fvIXhwJ042jj45aFkvxeV0bv9SLlwss7E%2FRNDaYtmwnV1WWMu0mSZdHG2kJKgIxMfnf8OqctK%2Fus2196OGZbuR9C%2FQqm800zF3dkJnrBOU5XA4Xeuz9pMXgJ2RwTYNGEtkaywItfOt0XeYv1tbfwnzuoxQ3QR24sGwWKUumTysnvV3GLLIZW18dAh36%2Bl9SRCSgUl6m6GWjzwg7fzUnwFkfca7p1%2B0MsgTwLD0RzdDaNnM7BCacc4OlX5SvMvx1FbgYcuSVTyfoyMx5Q4avQnAvQL4DhcJgFpPVzqWc1cDt1HMZsjIZphplv%2BHjB%2F%2BMJhtmb6sGYjb83sHyt66Hoyhew3sPuuswwlshMrO1w7LWNaijWtfR8zAcXapN34T%2FLsBQtAocnLdvMYFW%2FTxU3qmm5ZufE2Omp1poc%2BJ2V%2BURxh%2BkNzuGhBKN8GdnOedjhups5ePNb1C9vtCEvTmA6cOLlCYNlS5yBMbE1l4naQ9O2Y5AJ0N%2BT%2B%2FtU%2FW188W%2F0YRysY5OCOtZkNbT1JlVbUHvPSpmnnG6TxNYOviAFlpQrTRtEBZxG7N4RWTu76wmS334S5V2DAxa4g3LH%2FigrrvMFBYbxeNIZxDLuBpmmKVdrBbPcEwhqLFwAY6pgGLiZOT%2BLHpgjGBNSgkvnPEpd6GouvQWqJ1%2B2IDfWWQBDrhkomc1Y7gsIMhtLa1y4rJPUi2cDosbv5Mg%2BfzTNvXHEnKDGWORVw32gWRfLfB1MJgnc48jOKjzjZWKygJRLR81K2QdLg%2BAWJYDNp0icqFIwXw%2BmY3afMjao3cBiFmhoBOenb5gk3Svv8%2Fw4RG0jRs35BG6wOKEVedt9nGKP%2FWwflvMtHe&X-Amz-Signature=fa1d11bb8a75fd16b8b07bc3445432930487526928feb5f776395bd06d99755e&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
