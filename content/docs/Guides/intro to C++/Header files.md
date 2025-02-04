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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2CXRWSA%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T181015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQCsXT%2FpBEjwPCTAz3GNx63G7ftrP0IkvsgSKHy9M7DaOQIhAOeWNcixqwE7f1csHq7sIGHnE0A8qFGIvkc%2BOSoU24dEKv8DCDMQABoMNjM3NDIzMTgzODA1Igyaghy2MfMpsrZXC%2BYq3ANJs507ZROFtGdlpg3U%2BY78tuh7sCIAXas05qH1%2BtCBneKWbvXvkwqZZMECEUehdWnYFW037NEiaQdaS5Xvf53TvWGO5b7iZ%2FClANnNdZ5JaNzVZzTz4EpKGGey0lDyRl1XJlpV0%2BjnKippY8ldZlOVzem%2FWadb3yRcz0Oe9v48Kof3WzpIvLw9a8w6Xiz8yTOqb%2B%2F0DH5Mwx22cxnCXqvk2nNjf5rHFa6qjuRCDfaDvb9OOv%2BY1yj2i7IVbt2GDcck0ebrdu9nzBKaO70hR4lImiwrJKQj2VP4dLcM4C62cv%2F3EWE8xaSPAGsJiiJwp1TaTA9%2BOB14GyUXm1oFQbyTeSLnpHrvPnk2PQINzH%2BoB6icfIZXH%2BKh4arE9SCh%2FCH0%2FknqAvAFVmKaV6l7EpGv2OO4DHNiToSE3RSZNEImudhblmanQQQMeZkMAqyEK6ySkk2Ad83rJ%2BISWNpnM1wpoNuQxgR7Fksje%2FjtIUmOkwYggiDsouIhxOi0ug1RmaVWlcSxCqPdm2pnfuNcQABUs1vmBy2YxK9f%2BZ%2BY13y0JJ3fWhQiclroqlmq7%2BWmEM1hOm8ktn3547edUuho%2F4YfTKnotNRSrGW7eTPbhLsi7H3Pa3QzWJzh3f2NlzDaoom9BjqkAdPp2LqXf4sfBNHvpu3UYmM%2B0htwqWWNVbNcQFuzB3UKP8hQ9gCimI7%2B7jHSv0UAtrt5YndQtj2obFeMVCX%2Bn7pcIZ%2BBToidyRVegejGXJTK5MArZ6F%2FNzCYAdAkA1xALj8HsfSUbZZ2i%2Fme9%2BOOAR4m9dR80xiLUrKI59NUeoH7xQ%2B3z1uimNIC7QZC8D3vMjmyAtHOXD1x%2Bq9zzhsDdrdIpRLU&X-Amz-Signature=63b0f7142b03e59a142520d20621aaf7f3933255a66f94a2affcacf4739094db&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
