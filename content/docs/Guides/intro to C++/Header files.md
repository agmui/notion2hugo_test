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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAP2BAPY%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T190518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQCSmxqrn2CZIwSfruObq%2FuYo8iNtM066YNPfwyRFdhuiAIgRRV485ykKlC7RUDJPU7vFfEd%2ByW%2B29K3tWKOlWfLNWsqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFQgjeHz83j16ntGdircAwpE3uTzN8G99Mj9M8my%2Bq8N2YoIMhfsLLDJTXZjRWn%2B8Eo%2ByQa12mLUQKBE79EhsOnQbI046xV%2Bvrq0bv2O4k%2Bx2kM782ce2R8by1508%2Fydu8Y9o%2Fp0A7TPMgrddT6%2F8njladP6uiOON6%2FJIDm1bR5TOlkeCRXiXigLgKs2wzLQxpHovYpDb3dfcaMtxQNi1NaDxmguFMgs%2Bw3H5Px33WM30%2BInBqFl0nM5DwL2%2BPAhKndFP7CsT%2FX8AFFgUpuKc9vP0pon5Qyr%2BpxGvVkQd688%2BUOHCM4hl%2BvpZfO5R7zHVOi0vVbECir1GJRA8uE9R0w7%2Bg8KGbhF7MSNjVIfX6y4cnzMLwVNh5Q0ELL5o%2BWE44N3pMVLwGG34FETSQMblOIKMO3wbild8uFaopDW%2BRl6YCrJhR2NEIYCXQAxrIRl93EBX6bONJoybJmIQp%2Fu47tXwlxzjln2h6fhRjrXfyoBrkcq9JSnghEGn10FJuO9MLHCUOiv2WAd86GP6LUAFYoghYviywZVXy7i5%2FYmMcvN7yu9fOOGGBDHWMh%2FJ2YJTY04iUh%2BGcydsWsF2Ro%2FMrwkBenEyBFGURgXCx3GqqVcO8rn%2BZejII1StsDb%2F5ioHoTPvteGWPf24AvGMPHTycAGOqUBoe1QOEVe25xpzmEdpngfnkx78pMFPSzgAGFVlUaNfkPhwBwhGJ9JvVIqyoH8QB%2BuMGiutlZ0VG1XFzdGMvisxZBlAVsjKmJhEQID5y6Vjxx4aeMjysDRGNi38sB%2BXHVh33FSv6p20o%2BdDTITgHuR7rsnb%2BSo9P2LBt%2Fs8n5vhEW7odAh6mVOo1D4xHWpBpefaH1QBHacK3tTU48dEU6Q1UnQrJ6l&X-Amz-Signature=c34d350a5221d224d1d088b3447843884870dcbaccb18cca602bdf791060df81&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
