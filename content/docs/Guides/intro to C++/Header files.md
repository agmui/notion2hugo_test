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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SPCWBRK%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T071631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE4F9dto2gxmP8gg3X6c9HsxNV5uYTu3nFgbqlt9gb3fAiBDsOQ9kJtqR5Z%2BxdKLiTwufEjaBJckgaSEmnyoSzKlByqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFORlBpLEcMK12O9PKtwDkADbp4vjMVaUaaXih8%2Bw%2FZ1ZtB0XxYyJoS1liYBLK6G%2FAznmN%2BjJwqseuujXFaQS0Ee7c0c0H9Bkr3CejMk5tSfZI9yPM1CB5JatNsyikn1ySN71q1Vxm1DSelrunBxhExKA0sXw5DAAUgZb3PcUnAlgo1v7EviBvQHW7ryW4GCPC5%2Fms972E11W8xWoTg7Ey6EEOdjoVPIKh0rHzirQ2MfrGTxWVnEx%2BcEh5TaJzBuVsR%2FW4QoV5m4MNrDSPhG082YFmOvk%2Fvp5GkyrEP59Nlqc2GyVrpeDIfZMUhw%2FnN1DIfmY2BKNW2Y7VpjzTElXj8j8Jd%2BZkvO5UpZfNedyCJ2rYLgaQ1voNCT3lEdNWJUwjjhdett5NRxVCE8f%2BSLO%2BC7h8xBooCvPy1kYnTfX8xfyb%2FkFgX9YICacrLRCN8GO5aG0kDMWQKXDeVGTtxFJIYqfsL9cQiUvtZA1AzbjUBXpCNBmnlEj5GZ1BdOOt2PXBmkgAGWt9bRwc592HwlPLgtQdw5FLcwvAIsXq5fZCpTflYhUtBlMX%2Bdm8ZKtRd5%2F3QpO%2Fna6aUu1zKG%2BLvjAwkDlstyCxPFUVNegwsKrp%2BFvDuYRTVvDjvSbpCkVqRPVdVnjPw6P%2BeHTwQow%2BL%2BxxAY6pgE7rWfaBqVAHuwiWT%2BVq%2B8oTuMpObc3luX5Ndfi%2BosFrQ5u2oeb%2B4AwP2JN%2BXraZORC2gBsnhmNJsYZZI8F6XrWOEvNpnVRsOqQdan2IqoJadhAmE0mV6tP%2B5sR5%2B5L7nHaxtvCGgrA22yfe2CrMyJPWnyt0nFjDrWJT8tANT3YNmPcpHpjw%2BZMgRZJlUgpE2UfNw8lu%2BZbJ%2FMsgLVt1K9zT0sW37rH&X-Amz-Signature=f3abaa39956bca7d5022cb8f12e5532d3f85c792a85a338b7ca3d03aab157d89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
