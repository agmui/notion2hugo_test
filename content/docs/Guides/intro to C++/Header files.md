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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJGLHTBJ%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T121531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDPBO8r24b1sENUASb82NIq4beqIOVnviB1yvNpixA2zAiEA6qsMMi5VWtrWcUHOrrwf%2BAiBO8BmU1kaIK0sUzSgg3oq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDGyhpLDxHTmuAtng8CrcA6OXQxbiDxOEUWJ7Jbj9f42U51GsUYM0%2FOLsccXZ7%2B8yCEJwxa%2Fte9ho5a0oa0CX5dWe7qydnH2yIdXnr4hnDBZ4zFQQ010StTheLzTpl4xpKEx%2BD1znL%2F0KkuC6kvIveMMb0RM%2F2BIHYxqd%2BpJWHzNISf0%2Bie9mV72EqCl69gRzNCbIAFToE4iGmZKJcD2z2dSUydFzFfHZ7p08z14xQ40hqWnbjsnmk%2FCF%2F7B%2Bw9D3G0%2FqphLdhe%2B8LXEsxIzlgmMrJmmUsXHReUlUnl0i4Q9GgcWNbmbHplOlpdoj0VqSV08eYTwhBWWRhKqFZLzliISuESY%2BqVjkC4XBqPIQI4PREHFzfMWk2dtMaEKlajxOAuwdvw5KDjmUgCDxc2sNw0t3pf0cCYoGvC629soOTYZ9W%2FYwixl0W469JJ2N3hnoYsXNkK4iOzbUZGaR1ClXigMWqBp9Ait7XSNXE0hxNx8adMeWFu9B8r0Xkj%2FkBwUAys56l%2FRdq1XOJ6vNkHv%2B5e2gN%2B13Ag%2BIQEDDvpGblvsN2zBvpa3kmhU4pdW8QBFBM6Gv3zYZ8fMiDbj2sKeVKzdONi9w11%2BUD%2FX1aScNzY%2BILgiqRPelAtaAuN0Hv3VI8g0ya0BnHoTb8iz9MO2w8sAGOqUBeuDNP4YGc%2FrPdiw3GlYc2zvYVHYglNuBJkmr07U2ikBfsk5MD5xOZo6CZ0kB5DWMDDa2tBhNRegisVqcRBnFWmLhpxFK7%2FYDmTs4%2F5sZKXZoZlOXFwcPc%2FPbLUNt62mXHfrDFOSWlYWekH%2BJYW6DwZ4Qom%2F3cL7ir3aV18fkZ4rBKO3iagxjRkmroIwqR5qKZMlRtCG8kRcEepGKWhY1IdU1KLOU&X-Amz-Signature=3ecc8758f312f9b32410b3e9a64a785411a82f54bb28c425a48d975959a8c283&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
