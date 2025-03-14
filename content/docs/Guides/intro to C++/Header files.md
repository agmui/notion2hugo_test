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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WZBPA5T%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T081044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFPsJDRS8SnSPyQBlZmvR%2FofQbmG%2BAdgKV3ms3ThJI8lAiEAlqFUbzYqGCLI0jbXgHqg49gJ%2BaIhQarmRrYtQUukiLgqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH70oty66ouHkOs4cSrcA6L%2FvXa15dWCa86GO50PtcT85pojUEZPP4Pk5NIiGKicPtvoN1HFlMOobe2b93rHNB6YLSyhNydaVdufPTnJt64dw7st5dzGVKromMNZvk6cJfEWYdKB0XVdS17eyCjFbP%2Btf5T5A3VsP4l9ka%2B1puprUrdDjPCX0X42RtKSR689d3thQrZ573in3T227nf9zP8nb%2FjvrO76jrOSVvaPVjZ5CSlHFXwdDVPLzigci%2BpYNLe0kkKyvQ6%2FTYb0aa%2BbM9B5QZJeo5C6z4M%2FCgOhLisarstd1PKdPUawQ0duNsjGCO%2BX7jPtU4l7vbLGRaFyc6gtHl0g0bZ%2BsnxYYdSXDObn8NCk7Qgd3O3MlcXYynp3Q4Xe4UYEWO6KzC6w9vPi9HLXtIvDaWgwmCsGKyWvx1x%2FVwPKZRZYf90%2F71ang2o2jFRBCXMjngeh7MVirYf6IhhTEC0Q%2BK9cxNHkRU2fWZxtMH0zLnjHJJAU7%2FbtpfPVh8AQvo9gGkbCcODweIorRYqQibVGZNdB1Bs11lLpnGPLy9dV6qZTwWB8gUEqU%2FAi57sr5eks4RkMT%2FLg7%2Bo2ntBJwC85lfvUYKol4lDZC%2FZxZ3k61fvJr61FTIbmRHzshfW0J95cKGgpentsMILGz74GOqUBT7PvCa5EWRDeLEf6GW%2BxcquPgmw4FW3DEzhDAZOHTaW8cM4CcKJUanhZOAVQraVzXbGlV6MaCdsC04FmM2o5seMnB5iBHVkfm2jbCrntftkcE0F1nJvMFasPRc8PCbvrqZfGWUH0eM6x2oLeR%2FXmJt%2BbJ6%2BOxXEjpBJcb5chL1egkdFNgixOWZbVC4Sm0fYQ%2BDpSkBfmpbNGAhw5MLtqp90Eup8q&X-Amz-Signature=1606e74e5feae20ddd38743658117542a8ed2cf595bd3e17a6357c6916e0ceea&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
