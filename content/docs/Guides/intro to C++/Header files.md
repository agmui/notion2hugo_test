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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKS3BQEQ%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T041727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIDoHyHe%2B%2BC53WnQFP0aKZK3IpgWvGv%2BU6ZP9h95uRMGTAiBFfUYe9wAdPLShYuj%2FzF2yHwYR4UXbUjWY87dakPblnSqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtOZGt564SbIN1IkcKtwDULrK0vxQ7JZeD9fJrTk6%2FBZrmu49Hp345tX0AfinEPls8rfHWkHZvyqymXz5VqdDA9riIPAvh5fpbdzsfvhhgdX8p1VZ8UtSNQG3BrgJIDjIgUov4g793%2BOc21oGuyRsXhW46t%2BXMbu5tsminE1QOLOjE76kUXTvNN9hHjZoZCSz9LhdKPVSZb87yIDS1IQ77i68O0gyH%2F62LtZoN17%2F8SvINSkjbuq%2B8nm3GXOgIi8oBn26cK%2FpDpEUWhOCzxrMsxXxM5CE0ZnQLLsqOXN%2FOgV%2BefteAk9bIyk5WWU%2BiW8l8hevePypKfAh9K4WovpyrxlR55V66AAdOTY0LK%2BtcVSGccUVFOJcV5dTlniJDgyB%2BmE9N34o7tmQeu8C1r2aS3I3y1e8OZiyHh6eRfoNgX1MjPvv%2Bz2BHh7ixW0%2Fy3AYecfSsJvG1Zt30mK16LdSH6mfcT%2Fx191sLqttOyQWnSBRcoQ3Vs0BtinIhrNmPHE0MlNXbuR8%2F0lU7URkngDbwRyzhb0%2B3qDA0ACWqpAhoJduTqdzBjUjzMfpmpofXUxFLNwzuLPWb%2BXQ6exEeEyersZ9f25UHnTnJ841lWOCPVbEtX3Ona6wF6nZvVWcwtPgKqqVAw%2BEIyMmdzow2LSuwgY6pgGr2TQK0umt95YSC%2FyCTsnERcQv8lTYD5463ZR50xRdElL2dFjByW0rHvKWz4te5LClrcGRSv4fPWbi1IakNWugXB6%2FC%2BbFMU%2B4J9rhmxIUM9jxIG%2F9CjmM%2F45BI8K1snVWntLJcQOsQRkhMDUnOKFu52M9bajUnNj4lGB2GDrqJTG2sn1K0Q51%2BU%2FxgusXWzQy81UxLGu0CbSWkOvinKrbAHv3dI3%2B&X-Amz-Signature=d7461664e8e9da3ca799fcfc0ec2026b512bd025b4a15fc58156833dd6756600&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
