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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5EH3OA3%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T140738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIETH1A3%2BKiKeWjynWll5Zjd%2BtudXekwUy%2FaD8XWQk%2F9fAiBJXKoJuoFS46nE0l6H2J4tczpxH0QmGyo9O9xOa514xiqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMq2dn21feJe0%2BXxjfKtwDQSKGamzIONwcSRykCJCQWBrAVnxF4Aitml6Z1vpylssrAHVmsCvCZoyYaurHtz2r8LHC4HandbbYUSlCppHaC0cN3QBph%2FDc9aG3TUQ2LoqZQF0onN6d0RlTQ%2BxKb9tL1au%2FIzVbQ%2FbpeK0IHRp47XcI2CfVfyqkF%2BRyZPqB%2B2klsDit%2BAXcTCQpTmKRp4V9Rf65KFJDRqwa%2FZ9rDpDDSG5cOXd1OERm5SGz1ugb0ZOhJ9d69jqnQ7yE52QoD89olwcCGaXGJcZCUuLPhiv6b6KcpG936QAooKmIFk7fYRYF0Hy2h6SDI6lX5GkcrhkJJ4%2FtcyXoZaiPwXyZbJ6WI%2FLCGsze3CjUenXTis1o370SXuMsaCF0pHntiPkex8zBm2NJOAxVpwNHs7Pt1%2F9HOKI6Nv9ypqqxwkiUucgB8VM6T7qZ5BU08r7Ckjcb4ri09kcHFQVsNc%2FGvatWOnmZJcu%2B7ivfxDxoHbn5Wu%2BV5S4zKU%2BZxPL8fsCZiLop5qT5Ax1%2FHO7SXly%2BUMJZXABiiYyVe0ft5M0ZXtVy4XCj9JbcVd8Yft%2FNKts%2FRdfpyWxbccxhMyA7cbQHQF9EaOt3Vv7M4SvtJWaV1B%2FPGVtkJ17QYOEd4bAW4ysFIGYw3cvcvQY6pgGfh68bwGvkL0hyvQzZJcTk820uDbW5PKSOE0707AjlN7oLbwzOK6t69KtxJHVNdtY7ofoi53HGjaUTySWzaWorThsUbk4fJSi3ZOq2rz0alVrtVq%2B%2BMY97PO0YEDEWBHkGvhYoHSELzSsA3uxEMtUwPg9702EkFnb6ewMIihzLuNdKNHdXfi4%2BsSej634Gd0vmv%2FqWUYuB8SB5MQZQMm7AnQnrLSdB&X-Amz-Signature=76fe2ab70e068575384f87808eee9c7da8c3d19e88dfcbd7cdb8cf7bc4c15e14&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
