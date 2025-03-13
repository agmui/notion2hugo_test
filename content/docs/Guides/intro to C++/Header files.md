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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMXZM7OJ%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T170106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWSShllmPZKKPRXu3nOFCCTzilXBThglgXk2I6mtmvOgIgb%2FUvlqbAdH%2FsxH8uvZpoeP2F2DsS0qTPxdPu1Sbfzr8qiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDDVknze0hsPOJHtUircA1OCW0EEnpq0ntEilHAIYqIgdc2kQJOfyxMu8Pl7zZdsbwAk5W76Oh%2Fm7BBjrxxRe8ZySdwRys0hMqNehK4oLxdhAF2SaqzcDnu0HtOG9SOC9H6RaOC4Yrk4Xsu2ZTWgacN65FKR%2Bdla6Eq4UHIo86emucfX%2FO%2BeHK52SZwhCYkEGnMb6UwQaKqwm%2BJAK02ShJHznkbHuFdSGZlq9DicAysxjiE5PIr0Ix0qP5xI4CmNYarpYpuu6mdKtAFWEGTCwzwmoA6N3Z4R6EUPComSvSSyHdEdVMZ3PknreQB2QCdKwWj%2Freyilb8SM3R2A5ODM97HZ3%2FKmQNZHMSkid2x%2Fdc1ChVaVRyIZDKfdXCPBA%2BTnCx8SN5GCHTlPIiPU7Tz9o27IHeCl5pu1ymnkad1vTuSdNVfCh%2BqQLjvW4MNkH2M8yiFIj1kFTqkRXkfdqIJ%2FEGpVKxtFf%2BUufA9A1XZY%2BPpO43EkTtckN15IJ1xzk6ikE3iHDlxpBysvE3MR6B3sy7fF2NiUzHKztLV792Bo3%2BjncnEIXDLRX7vNQFaBQnf9fSjA37zXlOAIkvGIkGKH%2FNKtUmnvv4ck026oAtAyNBH2wBXou%2F2EIzA4TiD%2FazJsqJ116AbUTJYN1FsMOGWzL4GOqUB357dRsq7f2pRFzf%2BJEkTdAtJya%2FzPauU%2F5jITajur9oAOwgS6rzfnLZX%2Fye5mOBUWV9tvLpn9i1XfH4ekq6bSelc2cCBmHbXrloJlXwDhvOtg99A7jXIhPYe8spFv1dr9xm5%2FQ625WQWzzT8aXPapDeQr2Me%2FUcygPxAOsmnzZBuQMPyeQpiEEABbiMA21WM1Rj0AzBH5ZslRxCaAKfjJueVCVQn&X-Amz-Signature=efcf21e0e0888a427f49900d8e9102895682bf113257b6a131e18e58b9a0eb24&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
