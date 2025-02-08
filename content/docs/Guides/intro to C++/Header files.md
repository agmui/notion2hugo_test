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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGBF55IJ%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T140114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCICWZpKqiMghewJqoN%2FGnoGMbtiFeVsFvA96EMr3JXm9DAiBr5fLim9tA8DUV5D9j0YiYHB2bxLoL3rKxK3aPhTm1HCqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQZQOzpQwO4qWrrNCKtwDI%2FZfqTeqtSLzAvuZspv5Awdup6SEPz%2FfN8v5Wwnly54i8U62O4TsQhIEz4g%2FeIZova6xGvTTzzLAjsGSIDRHXE5La1mQEPdHz14DHxuAQLHtMJzD0gdEi7xB3t0O8YxPsMfEmDFx9VUFGV0UiEFuHVjKwZ8NIf5zOtwO5UcpcJjVSGQwfkCw2NsWNIypVx5HJ8HEqRIZ3WxoAsYdQT40XqRkxMNEueSUS5iDcWLqTSIhxy3Xsa65vDBRBDWlNxf8JcTb5WyVVzIOxaWK2VboKpNK%2BRDtMVaICyVQbk4D0BCBDig0P6P%2FaFC6Ex%2FwL%2B0qBg0KVFe0LGRRdCsokZlOTLN3%2FdDLDKqT3LEAtqbZfAnBa5IqerFya3NXf7ZJtQYU1tg2tEwYyCdSnAgtToTYMAKhxy6yNt%2B0ylMY1q%2FKCZ3CL9E1e9ijb2e2jTlyehbfQZIu0UCBaauJdlcpq4pYsrPBhkZQKxELp%2B%2BcDLEHK5Ry7gMyZPpgKwGIHQlkUXZ5euXJFT6f%2Bx7AR8wVXZOQMx8UL3%2FdKP4rxhUsy4qkjIgoAMWXMLIUCrmx5ZmXCl1hGf2WbUJd9bImyPpTUHgFMK05dyW5Gl5LtpliQtK6eE7VhHat6s%2FEqCuC5P0wrIadvQY6pgEWSMirYZn3LsE4bIdCegzJ7MRy9LpXE3SDqdbCkcjdPs%2BCle7OMKy4S8v%2Bi%2Bb9okEEYkgJktXDa%2BkS5Lm4n8Tns%2BwOsNoXxaU5nAL6WMpTLBRXv2CdiOSzBixwVjK%2BYtIgImlpQoxkRWTCXneaOLzF79vxpphgfkiG0LHoXxqHzkyc2BzZ2GFCOVPOoyAbiMWhPc893p6fPXt0Ey4qttV41AkYpc1S&X-Amz-Signature=c42699c75866a7b2c7e6f8a73a62e52f54723f55624fae698efeacb4b3d6a605&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
