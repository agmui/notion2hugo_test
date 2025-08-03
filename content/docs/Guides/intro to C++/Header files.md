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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWWZAXOX%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T090920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDkViLgK7OhPp2v7dXEoEdqhZ989wOU8Za317KPV95AbAiAx6j2%2BXTiqG4Ji4AGzmsxfxoTr7RIyEF09Elp446OgZyr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMHIsaLfBTBDk9rQYMKtwDgsLCkUT2xtPTAelAM5GngHFimDwSdlWe95vm9Ogtbf6GzIt7TXRT%2BDcd1V%2FSka95hRaLQbcxfG6bNIJE7j0f5ym4fnkn8sZIUE0dBQju8Izicq%2BpscGwijlZNwhqgOmZAY5lqiHcEMGaMVj7U9mD5M6H4kFf18EpnshFK8LjUa89i5NCqLX8oYCEtaURYzRpO9DyvseT03JymRnfJsobjdMNEl%2BIkOGkQvHSTm5OD47vwRlCu%2BsPcgT%2F2y9y8ba3%2Fwfb%2BzEyJKppbTEMab307XODjKV1%2BSMnKAdor5J7%2BYJ95jf3Me%2BgpwMEEOVUQMfosv9YVpMzFARkxDRWkG2sk3LEdoPJcawKl8phnP1iHosDQcN95756KONQrb398G5DMl3abkbHOqWTG83GAEVfAQOUH6bb%2Banuw7IXaOuMqMqnN7bJYlOYd0Yp3H2%2BciyZNjvtNi%2Frl9W1B%2FaSS4XFzvpWBrLdvQE0dRI6BIG6v6zwbuf7kP9gIpuoNqXCDxkKF%2FY8eTTpNDV9c9BGTeTQ0Wh%2BOauU4GzHCzKAl1MJ9ohoGLXAp%2FzNSHeGm3Z6ib2vF3UQxARiCS%2FVBiKl7hArXNWTTjic1s1VlHB4BVJ86v33wxP093T9f5f8EJUwlr%2B8xAY6pgGI6%2FRvLgpHTlc7Fb9fdeOZWgtGpBJE83RlspBZB%2Ba5AbkCrB8A5y6xn7go6mCtbnbdFnYVss3PORiuqCg42R9VMZqeif8LGq8QpQhQ%2FvTe2d97EJ7q3QFDckmsrEXThl7KIhIXQl7vwRKaVyCHcho4aCSWyuS1rkHJqQHQbGzEVXFKCccUM7u07r68KyBEuu5iBwX5fYch1EniR7cR6Nfc0W93F06G&X-Amz-Signature=96c90b427dc452c0b429dbe556d14f7d676b2db45b1a8ca613585b1fa487aed9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
