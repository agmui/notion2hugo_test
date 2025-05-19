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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGOLU5GT%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T190655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlQn3ThxVPnyUYh%2B55o9aRsK2%2F52A%2BL6gaa8e8N6kXzgIgRTMghkq0gcw%2FPTsmkUOHDaOYlCUQDAVjrkxaNwMzZ5MqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOwR05NHYkeWQRURWyrcA8UmfyqVZ1SQWX2sBTjJ73zv22aUeO0e29no6IPcbqgj68w2N7yVXRD5vW9qvExiYfIYEyB0382Mhmf87hGhhxv1eqNMSGwPEYupn%2B7Wye1q1gDZFtyROhKuuMgCEwi0ufQU8ZVTltvMKuxtxvCFOvxexCIK8Cc0A1odJ4ygck7kPg2H8MSzzbVpBz1LMs7GNRsyxRi0xKyWXuIkG5N4XbbbfnhwKw0R9oMuQjaC%2BBXIWyL%2BvQmxAwbOTxtkryzkm9DmxTkizjlM7kiOFulpoFlSeqkS7VYpK90AV7gfLf91AVwzdm127yREUbfsNHUaRPmmETDfNdJdadM%2Bc%2BQ7GRM7cKkQsnhSozFMiDK%2Bowpz9%2FYCPMEdEZSsN5hIZNLxFP0HUa4DX3rfPMReZoyRqzvWn90kICidyEeif4IXAItT8PNSJoqUL573CBQt%2FCcwG8JCuOkhxCxtHFi3N8Oe8hBkQtjxBMN78niCVdKss7ckcIcRFE%2F73kci3OjQEUuObnSM5qy6wABQ9q6XTSF1d0puC%2BHrOIuqQG547sPNk2H%2FtfWuzQ%2Bn4OIaoBlvHIYbuRo2vADHN%2FTWtgWCZKNxeQ%2BgIgJqqBXCB%2FcVoCIH5lZ2Av9qtLJrHc2qDOk2MJv7rcEGOqUBk4KSZqZKtMedkTDgzUpkO0xBLthAKy8YERtv76aavYkmR6OB0eogFDLM2wOkY6B5vg349wjqbxBuGChJt4Jt3AcWLS%2B7L3BKqYNLdSgRz9Erk54nxfD80%2F%2FtgdiQV2OmMEWXm%2BKmROZ2QV5zBTCHisxNCj4pM2FPECAiVySsuIiDV2tP%2BH35upFb0rvm2LDGHRvFrOV4dTX9Oh29I3hHvBmI3zZq&X-Amz-Signature=59dc1e9a97b0637ab42f46e4142bd55c49c711d043192d2573b3973384024530&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
