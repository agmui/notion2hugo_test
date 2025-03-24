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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ANVPHWI%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T110736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCR%2BnoV2Wpt%2F56SXvkKnX1efQ480q%2Bakc0rqFxJ2Jt8GQIhAKQ4Pr9DJ0qD%2FvPm%2B7%2FRFtAkJ5FvFDo5waoAzj%2BDZOXOKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzhj5%2BCe2G%2FdArRASMq3APo4jUUj2omDceGYcPlPI%2B5H9QBI505UKz%2Fy%2BFjHDqBjn0iW4VbMJtJ4TpJp4WkENzYG3gikEnACghD%2BdIyppJa8WFQzbAcAMT4gPrMB2GJrZet%2BUHui32PMG%2BWtdcVrDJIk8nsQeStXU%2FbGobU18RDldT1gYS%2FlJx1ujC4Xn0YzdHq7YUggRpkQYjusPez2lJVI1Nc09EgWW9RxRZOGmV0pr8EfxZKiUCVzdwprnWfGfycVdKYU6icAThYc0SthhkxLdSntfeIin9LbLhHQhB47JFOTHLzqI3bSVJpn4FAYD84RMFK60tS9HLKwGqfHLOCuvZwipN%2BU3R2Ob%2BI2zRX2rOceElOe%2FsBAp1AFJ4akEWDqoS4BYBNqVygPJRJmpu7BgyeyDEMgUXRoRGwUud1PHpZ77LqKrPVj%2FxGWVbPrf7lubd3crrpJY9%2Bzjxror8%2FqPiYvYW5Ijm8bkL1kWnB53X9rMU%2BxdeU7UgJF9AGdIbl0FJhNWagjKlRpditww0%2FbFREPdDIz00tdqNlF%2Fp0QRli0f8jnKhhwsu394UylAFGNTNir28JBIpn330p0omDHNNxAVQAnmNZCa07NcECmquAW0NodQLnxGFEebyHw3qErLOlfcb9a4MaCjDa8IS%2FBjqkARXmgb%2FuGri5DUpxHcIU7UpBsuiT3l7pVV85IbdGztlGVUzXI2nAMY3kuCS%2BT%2FLACt9CMTKEM2ELHfiNViDWvxSD8%2FK7y4qCOe40quaiGDmVAWzIlKeycegJBuzIdYuvActcGqr93584l2GK7ogMPsP2m1Ydd%2BLikK5KgXcjJzbH6rn3alqLaFNxXlgA6hfKQ5DY%2FNNnvU1NgXac3%2BWSyGIdgDOc&X-Amz-Signature=690293eef4bd425e5c4c37d9fa70fe24ac7f2c257d33904eeec1ebb072e3cfd2&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
