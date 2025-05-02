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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZKFKKBO%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T131952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIDbBDTtnzVXc8iEoAe9oGQSqx6Mn8fMP2CbUciI5bbamAiBJyS9yQU5tIO19Ko8%2FV1YslE%2FOBbPSle1fZZ9Umw%2FxMyqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTqmE4MDGVLm9ijHoKtwDwRIfM9S%2FHQ4vw3%2FVGqw6qSEIDLNYDXC3mxTUU0l3ww0AU6aqRFcjocKohd6ALA6ORmb3eBIGBzKkBL2LAaiVvlMNByDr6IJzraChf%2Fc0I1I6SVrJta7ZWzMEVpaiavJ%2BgRRXOcJ%2BH2OUPnhiuWgw0378uV8ubtEBaKXJAWazJw4mMGZoCRerreO6PFeIhzMWb9tL6XNavSlyET5ayy0rOtxIckHrSW6FApt%2BEokGik%2Fy0L3tZTmqntXPoZGkS8wfvjdVrIKIG%2BItCSoXiYWh36PSFyh1wUqkcfm2L%2F3FE%2FwziWHetwFTfZHdTxlhCLCkGL0oM8ze50dvnp70pppVTMK2WaTsoTVwS7e0RMeZWeldVNbt0S6AN9sd%2BNHC6tJ8o7OyZscjIPieyY%2BOlZ9HqGZlH1WocnHccEz%2FtZxVbPWcbCibJAwNhOVHQOMbdgfzxXxjUNdPTiG4WwJ%2B1LiTYkjeGDPbeTL24Tw19vFpH47TKACh7%2F7PlocMWMDyAUI9vKdT6aEfR%2FQRaF18aTiaeS5Qy%2FWXf3Jq6T0%2FBx82rv%2Fca2%2BqUanzsK5XZOoMX5GYd5jsCib6w2Ial4dZBdXZYohzPpMdCVqq1Au2ylAXqr5ADXosAHWIBaHbT%2FUwq%2FLSwAY6pgHfuq3oW7rV%2FoKR0ypwjXa518zg7fJZPh2%2B5t8JVIXtFVwM4WWUp1Jf0fxzAdIK9Fy%2Fgk8wUVZdkeUx%2B161eIVuQmSUeAo01gQnPks6DtD33MUGkzeT2r%2FiR6dwdHxuj8vOWOefaoKrpmA%2FhTJoK6lqS7ocx67SDuy7J%2FFIMxp73y3N5nSB7C0MYHAowa50SUk5LsHovPQr7%2FSo1PQDSaoNes7QO10v&X-Amz-Signature=b27ef159ee5dee35104a40b81a8dadb722bf4376b6174664c7e213903862df8e&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
