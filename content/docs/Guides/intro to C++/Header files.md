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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZD6P6DV%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T110821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIHweHVOfQDrAYHhIDqIiz1fRqiD%2F1qdwVlk5Avftu1btAiEAtSCl%2B7K6e6gcMWHlwBRrhOiUJFhyBCIVF%2BQajhcKBJoq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDFKHsf8DCtK%2B7p%2FccCrcA%2B67ijcp%2FyYuTorJdhYKON9v2bSXtXMrhZGE3YQl2m6ObnqKzLI1VPWeV3VW3KoV4wM2RKCUUO2nGIgH0l9Reexm7Fdo0kQTlHSVWrAL3b63wBr4Gc0WyRrKRB7Hyx0DRORm2pPGEx6rKuz2n%2Ba6%2BboBeXlqFBOb4ZOOudPWGvrwLi05KoRRSVkfU2rN7IzlLHuxPwcUIEZb2csu%2FlNMCBJuBkg%2FLqfGSg6A1JO4JxK%2BG9GfZEZpfPQNnvKptDOZODVzS86%2B%2FUAV%2FB9ISJe86X%2B1%2Bdzslg99j9olYgVvton3Xd5kId5tyt50mX4QMlwTYWRZVF%2BleGtKOIQPj0Y98skzOjdnMe5BL3muO0jjbeHkqAJuEfC6ll%2B6UfDsVnOA6E0WGxwUwD8u5NKIr4pVmcqXRlZDeggcDpjfoMDaoAAGU9i3MgWMSBLuTuFB%2Ft2z3mCc0ozeUxQjEYtTx4H6A05W0yx0s6%2BT%2BYgiICP6nRBhzcaYCXz7RkZfo%2FLuYpmvfKWck58EBnbpiYyWo2kPAmiGBEDKuznErcVvVW68791zYeMTpl5DFuRVTeEl66hzgObRlybDy8Y8E71N8q4pY0pm%2FDCg0vJx5vaFWhbakNaQtZ0c9fWEgxTs9g7yMIfkv8IGOqUB%2BzH%2Bv%2BsKAynVdJGUXof%2FXFzDvHtklIWrRofhQo4LzOk9f4gkErkyR1j4xIf9%2Bx96aVm1qeznxbZgMEXPyX4vue9o3DCMkNXNLfytpVeD%2F5OHjpY2UdVo5CNHlGQwnpGE5Z3md5VJP%2B2gbNEwGOvvKliV7jT7MikVdnVnRczxOCtHhcP%2BpNZaVCFKW1glzpG0ApBkQJ5vE2luiu0KK%2BflHpmP3isG&X-Amz-Signature=fe422e4479660d7eb09c7435257318bff16cf262ea3cc3a9a4525904343e0860&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
