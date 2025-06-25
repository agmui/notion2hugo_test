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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTAYX2V4%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T042024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCID0ptR8y%2FoSLl02nYHvfALlq0TkLqr9LuVtFLJ1FruF2AiEAj4%2BoqsGAxcQl0V0j%2FS9%2B0gbaQVp%2BoICyx7JroYXmUuQq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDLvjKC%2BWZSksNDlqLCrcA7xUVPvrV65PkaaG781ZFNt1d8HT88K7QfytPKFZmjBPNuvBsgBk30fB%2FGy23R%2BUO37leeCv6Qy4%2Fw3ysPA72pS4rvAth2eoft7DcQUESmu9pn9Xa1rdL%2BuEJYjgca7ggQCNOy2LQh%2BXlM%2FmC7NtPDgjIRQM7pWGuRX6KduZYrWWwL2y%2F4aCw2SPB5m4Jq%2FWM1JCbJlAoYBzPzxuAetnV43k5U%2BURl8Pu5wz5Zu%2BdTlaPUp9cdDRlzEtcpJ8Q3Zx3kjUB6AGn5VQ757zCZlKM8wTnbRv%2BooX6auQQ6%2F4j1NyCYeyfFWyBkdClQNpne3gnfpiYS476eNNuqmuJhfJSAV3E26B0Bh1hbzYR0l1AypustSLOACwZ%2FF8H2sPvrYI8mnm4M%2Bo2q6Kbp3R%2FqvuufL%2FPf5HWyh2gOktRox9qEc0QncbLjXH4ZD%2B2HhutrA8cwTxDbJcG9Jfj3C%2F9f5yL9IdkVoJbOcZoBWTiiTnsc%2BvaTkh36DH5AhBo8yuIKC402baIQqwLCPLXTPsB2mHNAz%2FUqO%2FQe69jNqDF8gPILhKoGwJ0%2BKwf149%2BRxVNbLq8nWBfNT6wGY367EQ2mEH5Sbhga8kaYFqrX%2BPN%2Be%2Bxqk406mJ%2BVHzWhg0r77AMLvC7cIGOqUBxvTVuXlcdWbgyo1YwwKHOkRDo8oG1kbA6rY61x4lsGVq4ogDr5ELkNHrXFMp%2BXDeyxSz7PTxHofiLCszJc7bs9dl0%2BbMhWRUvmk9CYigIv%2Fyw%2FqecvzUJ7GB1uZVlsh1%2BTIdNgJwdRDXwOzAuoKsINthEbJDKCpg6BCNgGnNeEl0bIcrzbXPE284y86%2F0W4%2B0Uqf7aT3cGpGpoY%2F6AdHW1hpI8vq&X-Amz-Signature=ad84553152b4b1ee3824c2e8592cf0bd86e06b846d080ae12a2336daf5a1420b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
