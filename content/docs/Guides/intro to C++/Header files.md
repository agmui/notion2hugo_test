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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDLQKW34%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T004114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQDzxQ2N0ujRDCSwye4yBFX1c%2BHKd%2FQTcLd1nH0xQrt%2BFwIgHYI9HNGyD2FoilyFP2dmWCF4nPbNWRHFcFwlEm%2FTY4EqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCGr9SsbgFvGIHd5kircA6QaJPmPTkGN34UazSEl5c9cwINcpDSbSN7Kr31ER55YYAdhvmz3FMQp0EvrT4pRogHr13RZg%2BJF31l9TPgkQJnfFImXv8ntOi95p5jleE9BYH%2FbabhqFKoG52YMJgelsBsD0xiHLLA8JlX4K3UHaWTHR8JsTQq6hH6KfuTH%2FK5pj514ha96jgIyWL6EDECB091ksfF9SNXyHPsv4dUxjkpQIeVfb93rw6un7lX%2FrZ%2BfMIyPlgGsKn3on2oiNdVNm4TwqQE9Q3j8t%2FY7bN2%2FMVCWVUzbsrnQ06HbgmQ7SEYTbmHa7B4RCw33ll3v7Qmg7dBkUq5UE6F97tt93ZX%2BwUWEKgm26L8G0mlMCx9Az4hjcpj57WrMqNVc3htmsK6Py8M5mcPbCqJU1csNosVqjSyBI9ohT8YQIotzJZl2Zzor1e4gux8mYCVnO%2BcHyPYtFJ9NSL7nfWeT%2FqY%2B76uZg9key78b5dWRYMAkgYCc8TdFioq49aFZhnyJHwnllULtCn2bnUjhQ5SdFstOriD1GZ2bpyWSDAX4EO02OsdnEbTyGQ6G4NOCSERzfUMMw%2FOciHfV7HVwnmJGsg6Tnd%2BY20Tv9x0tLRQDEQDdVu2XcX7iOfvq3t1gG3UQXoOzMKS%2Fj8EGOqUBafoYEAejxiCDRaVuL3FKtfi9RUqWAOhr8YGNjx2Hkv25%2F8kyRu70GDaYlf0LSWbq%2BiwoLlyMRjPF0mfgNVo7n%2FXVMOdf3fwuGQtm7iFl9c80TQtlzhFkiMCBHVzmY1RczCjA91CkY8Iw%2BgmSoUK6lNRmAOM6V4aKHEFZXyNgybSBm49H7JPlFt7kXl53ZfkStyP1cddsYFunKiCyd%2BrlWT30oVua&X-Amz-Signature=bec18b2eada294079cad49d41df167881095342c9acb654bcca4c2f4fd9edc6e&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
