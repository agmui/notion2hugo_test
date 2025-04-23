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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662A6NTLJZ%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T032912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQCs7MRWH5YrsW3rPZsMW6IGRWx8fQuNILFRoBwPxF6HNgIhAOzz1Dt6bq7shHEzTJ4ptKyUsF4t2qlFVLI0bKHIjxQGKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwMfID%2FT8gZTxam%2BU4q3APL%2B9sYQZfJD6ja34R46oYkwwBgyXpHz%2FG4EVRwOqkTx6Tdvv0TnIiCaBtUVXmewPsTxx2fsXYHrxMD2SfGoEWQPobEau%2BO1QjMohSFCIW4tZZakDnGxe0cAd98IiYx47Rm0rOlxuNIsmKC2vamAoaHiO5cPNi6czPvMZNOzs4d6tx3WnXDorC6qJcpCvE3RJW7XbHHWDHBteIhX05GLGtRuEnx9VwKGIXYmnC06bQqEKyJcCaEHTKh2VD0tkFsCEPLjgttXpdX%2BEh8X65JpPDJv5QfV%2F6WG%2BO1wWePFyEAjxauBEk0ZBaSweTB%2BU8hToRogwqfFsCBc6aDCZdlfp432QTuCGvgfEO4cu6jgXGEj8KSNAM1AY02UV7fJI1XqjhoQUWJlLkCr88gRD1glXz9khQ17muTHRP5r6TqFdIP1ZRcwuU%2Bnkb0a3ZG9JiJpLNd2Mm%2FYwbcMqwSxtGsJMmJh2VT46Y8Fpb2duWTt7pGzH6O%2BueRnoktp5CG09KJLcqRgx8Gz%2BeQgU2bBNviCqcTQKUwG9ujrks%2FMScHelWn3m788tyKLFkbPBS4pIYUD1g3b9LiafVxxcVUloMk31Z46RlS33WmVmRCs1yxoQQfJkbSXu1%2FKrCz1SPQITCwraHABjqkAWkRJ%2FrXfJ2MeScA52vkvjLImdmujfOdpXSKYWi%2FSsje6s%2BInymNbwYOwWmPRu7pDHSqI3nWBe4gY556mhJB2f9rl7Anr4%2BBIHmkHsET7oGJgwrSCRJTK4LMnk%2BqO0xWTXfkdfKpjv210MKbjBo5nX0x0SOVLgub347Xq3mK%2BVpAhlCLtzcMXj1nSdGR%2BfqDrKm2n836OAW1txwOBEdL%2By6i3bLO&X-Amz-Signature=b53ee522de37d1bca1e577b581a217e0bcf1c53524221ffe013dce8ad3cfbd13&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
