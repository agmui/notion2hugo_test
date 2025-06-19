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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVOS77IN%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T220821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAwi6DeZ8S06zORMzev4kip6LmQ%2FzS3tet8eZXjhXsF%2FAiEAyAdhpJGuNDYWNl0oY6V%2B0MPu0jZKLonCeZ3DPg0NyPIqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEE8wa4dZtebOxHGMSrcA8CfuczpleVXuq8ytccqFBl5LA3RGQZA65puMu%2FtfbcFW%2BCWQS%2FnQw3p6PHg3nK4IZE150%2Bx5UkyWWrd9lWO%2BONw88XOLVD9v16zzmqB8PgXjsoBbc9doFcnIiWZetirz6%2BSM%2B4ulcd7jWtQLmk0kUEEH7w2XtA%2BLJOQrwi448JQwMbAtbetsbl%2FC7cuqwyukwJZHedv2L9Hpj2u4f5QRXm8WQFgTVvcdTRc6XZFKsScdm0DYdN%2BX56sDeRerzdEpT%2FCGgjPbfl3REuoxOMFLnOF7oPGvL7RG0CEETpsdr2UqWJ4yD5B3kx8uX2%2By%2BYs7LUlyQXLIVxJTPMZ8DVztWaexah5fNtD0TU%2Fq7xGiJeg60R7tB%2B63OYIOh5HcbPfJ6s9JyLKiTdOWVPUTA1p94HKub6jcICpCDWmqdSmNjXgpDKcWdCNuqMdU%2FvXN9hBZhrClX9wBzjVMuCqlFlwVSl%2BDcU%2FFLQ0Wz2sWqKk1zcyxrsxQu0cai4TdY5Ts3arr8u34tAoneQeio1HXeWF98vWgQMM4QIs%2B3XFnDiobQxM88Ye8Dc%2B2TCSn3GNhRK3xAnrbXKQX2NjzmoEUVbV7Bf9Y07vtgUbJjf3M6mJAVuYr5y81jvanXgBf78vMLG20cIGOqUBd%2Fw%2Fg9CApVEzZKBfZuC76rwrtMOlemEJpsSXeDmh9LGdfe%2FNggURcc0n%2FbLS1vVzFyp1dETigAzK5SySLIs4NrzPIeq7xKtFUdr7SXcmVb10x0y14V%2F8CtrG9gl%2B82PQLfpP815cbTAs1rjFFRlWOIaMODfpH%2FVxpH5nZtHsg60SCovOM2pveiWvPSTGfVrpVd1%2FhgPEkZYsBVlgxcBKTeSAdrmo&X-Amz-Signature=c80795861b19893ce98dcc22cf9ea21fe96a0ab3d66392d5a1e22de2849e46d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
