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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TM2YDPLZ%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T230827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCP8V5ADXTNovsQADyYX5g3uoWL7%2F3AYY9AH5g5tMgj3QIgUcl0E4xPPSf5uJkik03gNDrTGwckpFc2ATlzW15IZ14qiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHofvjv2r4C1pTymkircAy7yPVaG5UQaxdA%2F9Rd2nKK9fwd0jh3aHGCs2MKuNXQrWpMVwWv6TfzorjnM76wzMtJwLtZLA5vwePwmm%2BhJavRVBhaKBUbG0PukgbEXmySoIgwXMBdmGx4m%2FL%2BxejGrfzEpqcKflxzsWIPK7%2FhPAyOE8jMTNFaUzoJS56AVgvBpJ%2FrlStdhsG8C4PaboiWC1PZUvn%2Fb9IZF41cb%2BKnoOWzpv6OD%2F3m7YXx8LW3AQbwECfmrp1KIm8IY0MtMDTY%2BntM7r%2BstbinnXmf1i24UrdvpEAMDkLLo1kMLRpT5sMP0fYRdMrPg2F4WoNLR1EX1QN62RWFEsb37%2BtcwTy4NvHc0SByCgmO5JTb7u30c9OlAcYSyCGRxOQkMMFeQ1xkfxWQ%2Fy%2FsJv3CVuU7WuxPh0tquVogMeRq423lWCikFSbvjX77pqcSJCU9diuKTlVA2vjlIifHSFu7E9LmpGfopGJ2Xye6x1o3w9hd7dO%2FbecOdGh2glMcvvlZP4Xg113JQyT8QWSBJTatfALa8TwNi4CJ34egTQxlJzxN9BxXBEDLXyl7FOPQ%2FkB5fstz7K3TT8H0oRpBmvAqR3cf3ojJW0OZFwL55noaGJNfKP2f2hfIeNOZF8fwIzIMj4wbDMMvIkcMGOqUBjiU4Jf7MaggREeDiEJhodrRbPU9e9LrxLgI27geyYsu9WKEujDGk0Sqnrg8qhY1QKvJGTus2hb9eYAq349w4IMENHEoJFvpzJjTq0Z4hbEJvq%2FFGPyqNDb%2BovNAEKqAO0bpAN1EYMCtRudlhqz51Ii%2FwRlVEnivOCgkZAwSrQ2w5CAVP9WtFljRjYDy8cgMVuqbeijDzI8OsQTN0Rko4ig9vsZ0%2B&X-Amz-Signature=8338aa81472f2f76de195eadeb9d32286d95059a4581b64026f51ed69e204ef3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
