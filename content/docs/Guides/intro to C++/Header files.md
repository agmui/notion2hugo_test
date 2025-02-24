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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHLH222H%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T181057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FN9doyX82WOumQFGw52OYVDoXynUtjtVXPXOz6c1PYQIgJ%2FD34Rj%2FuOsNb91mxYIv3w0nwdv74gjPVwFV1tP76poq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDP8znX3nZJ50wbodNSrcA00pK9Zjn1EnTQuWjaOKog1W9lkhjYQEuMkOmVIzQT%2B8oVfpTiFXSin9JO9DevaKnser7aJSmTBkpsWVn1KIKG8ymIazrYlNpLO225OV%2FDM0L1H5JeM9P1OoC9I3fE%2FRtimjQmv5alPAEFhkdnSt6ISM1iK1l%2BSHx0cn4Bbk2VQTpbhAHgqDDMv6O1JLmgkvFfp3WUJRguMKk%2BIEW4xLkyDkuTb4ER7MYOLsgZJz5azG%2Brdjal7yvmDqAl9Fkh66B%2FaqLo3HPN5AjMql25ABZ1z4O9SWcixHp84y52oKmNazUoyWDoLhhA5FgGxR6jk78nqoVnvAAStfCFaS8NjI6rBnbchmjw%2FprvYm65WeOnPNXnU00ORGjz6cdPZ73BnaHpF9KN%2FzXE%2Fkmu%2FejalTJ51wPANO92h0i2PPipdJ9blEj3slfjTUkEyRuhNb%2FgV3AmA2ycxnUm0cdmVVAVm5DppSCkX6DVEzPOR5zKHFGChaHHqmn22XRy%2Bi5FaqLVDLXB8YVzxT9Tk1I90uKvaq2MqXLAuYjP%2FKNuL%2BjxoD8LyENXM9E2Thr2A%2BA5ARNygyfA4kBWvZn5k75igEJ76ofOhdlRDsZf9aTBovqvCtuxTC7WlWnfSrosSztKc8MMTe8r0GOqUBM%2BZoxqhqMQAfWC8KfGS%2BGqT8P3hoYpRR4nhXA6xzI9NIgPZNH1BPXDWfns3VPZUH6oNUFIr3q6%2BmcPGuDG55%2BikMoqcNfNKaoVRo3Sl4DABtkyOyx%2BmdZNRIUUp4QUyjTUbFg%2BfiaPtAwOvIuufhJdMxuS%2Bti0UCDlApcn9xwC9QJAp0odHEFkThbNqtuCYZ5j4zWYd92aY9tOgg9AvL4t%2FXtjd%2B&X-Amz-Signature=7c71c0c235bfb9294218f952795be3a32fecd737b2ff686ed8caa05ff4d92062&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
