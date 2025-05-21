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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMYJYP62%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T041256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFbX%2B1n4StBq1uSG1qnpk1piXjWlvpisX60kD2AA5qPfAiEAycGyaEaJzAEeBqufltgDNhhjzM83pjTG3h0hU0GnifgqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEAWcZKmOxgBYX5C9CrcAw5NbLIYMG1uhbBAHRmTIfjxGjzYekh%2BNUQK6uIXBPyEtttDWykM9eA%2BZM1mz5lwxMDwbzrloewGKszptDwHcTahHK3Kk%2Ft6wnm1v2PF7MiFkaaQT7fGSWC6KEiJZfFlxmOwcq9%2BwH8O7KEqDMlm4GfA7NXe7vRHC2gslKyn93np6k%2BunJJzrXs2ybvj%2FhQX%2F6SbH1eR%2BVAL0Ci1lG9nddBzVP6auVhROvjbv8g5GkW4YZcNBj3lIL4wuNnomc1wxrOA7CgdfA0yWkOzWpaYP0wlKqMZlVzxNRt63aIkZy942u6CwtiTIRaUG8EWFRTViRC8nG8r4UOGuuRswhorN7jym9RpmK7eG4vZ6Mthe70lE8eiVXlW7QADO%2BwLDdH9T8XAOQRqd3N62hPdwOEOQ5%2BfFOxv6L%2F0CM29z11MIvLPYL8oDdV0wfAEsEmK74mRxvLxH3VhMESeeKFcuEzkWZTlmOoKVmr6exEWK9uilfmeuDunv%2FVcX9IAE7ExUh6qrxFoCvc9ZhXDwCDmBTUqZQGraNR%2Brl3FeQM2DpnYdg%2BO1qdrW%2FnreelzoYrNgWwOoQnX8qMuLm7NZptYhQOFrma%2B40ZbG15U9wuW0BvRstI7nkOgFW25Zw7oSYRaMOiPtcEGOqUBSCUh9I5WQUDb87wJo%2BpL8gs8CwuFP8f5QuJGcLwQLmsItzQM8ULXWkHsEb8mOTqMkld%2FgIvR3k9N3q8yuf7WfLGQYXOY1zLdm9J1l%2BIyqg0QSQsPp2phLIZi1Ws8wT%2BpirlPn4WrDu9KEBnMAlNJ2IJSpyXEO7PCS3OhHl8Qvehgr4Y4%2FpDxlZfG%2F1ZMyUH63g4TzQz7xKOQTryGqjb5zgIRT2dg&X-Amz-Signature=5641b002f33e443843f2bce6acadb7793a63d4910b7189a2058fa0f8d28524a2&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
