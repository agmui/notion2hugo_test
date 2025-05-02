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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664O2DGMKD%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T121458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQDDtPmkSIlnRcYmHruC8sr8HcbMUEs4mVKFO92o%2BAJ8IgIgIX58H96hIQWiRPWpG%2FaOeJjJseeraJP80jJlPrqedlYqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNHEK0w0nUvZPXk9TyrcA3KTW6l%2BzSa%2Bclaasdj9inP96pP%2FcLribm%2BR5eXCye0hZlThx97wwbEMhnBBo8UZGMeKTlDF%2Fvn3xTxqoEOaKUqujTFQdm1Z5o26B%2B%2FSh9rBmIlhkOGKhkRcEHU4hPrLEfvUa6N4f%2BMNAlEH0nTymaSTjC1uy9QKJXFh%2FuqdDNjRdu3VvRL8iNL6zBroVQfrBhQN81ZjC5ni4uCkFptMqkSsMSPobDBSj15r8GjikfdEgWa%2BueOhR0%2BeKIAE%2FpSpMVWwC9e70mc3cg0UjAyBTxdOd%2BqxwJ3sphr7x32jGeid68DPS8fAkdxB%2Fmo3GfxM5uMN%2FngrFp3w9itXfv%2Fmr2zoxTDz1tIGGi6%2BdBLYdG%2FBQGRxq3nB%2Buguq%2F1lVuopaU67FpPeDfC1wMXjD8YXUzx8nqdVb3%2FScyhdsEQnABLc2ms%2B5Aq0XSMwHAjQvInUGV5L0B7ONO5kdxm4NAd2onb0LJp91%2Bnd2HzRqwIbqdLYg6sD3e53xa8WxkFOajvewnxi6CXiPCrZOpXk0aXgSGUfMSvG9yHv3xGrAPoxbMfU0nkDLiyfiXBAYWjozKzbBq%2F2F8n5OUd73UNwJlv%2FePfcyx2xPJB47daqdvBqieqvVAGWzxWYXKOYgEg7MKjX0sAGOqUB6ldcnyTQ%2FWkr%2BeJURW%2BHEh%2FpVBVrUMIpNLK5QrW3JVeemORVY5FIFUGf209xD8TwCW4lnvs5xvD8ktWhomMq%2BRkBDIybBCCe6CHOOpP%2Bqq45ykY6y74n9hgnE2EWk%2BiXsNC%2B4XYyDYgGwsBWH%2BPR0%2F8kzZ24LVIVMul8SnEVbIyIsFcGWzadnEEXMrRRHY%2BvO4oSb7Ey4b93labJe007nuHRdwCX&X-Amz-Signature=a542b62d4e678baf581963b3660cb947a5104ff5cc1167d70cc7c3353ff7fdfd&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
