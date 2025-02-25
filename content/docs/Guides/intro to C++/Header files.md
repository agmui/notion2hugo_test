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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IG6IPZR%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T121409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQCdep7O%2FrQmzz08u4KkLWtHMqbAvH16%2FU%2FXUpyoDauX2gIhAIcK9Ts0g%2F830fS3INSqbaHRh%2BV0KvcWlYFGo15kKcWNKv8DCEUQABoMNjM3NDIzMTgzODA1IgxQENoBpUng8iEBq2oq3AP%2BuW998V3DQb8nC0yMkS%2BLI%2BemCGzPkPNYjri6th%2BiJ5DlsGDMTtfGGr4dtVc7IZ5DXsm5RpY58FQpR55aX6k5To3Bio%2FApfgrkG2XrCuUU7QjOgOOES28Z88jCYH7FzqVXG4UaGr2wMsRyO9iHbJUZOx76EhjRt%2F6Vg3tZeyYMSsoA%2BbhcSlJbLXYJVRa5C1OAovH4506QzxndDOLdTgURx7qkJRkaHiL4fKG28Kn9X3DSDmajsSBsm2zWa1Lnnpk0znwU2SUpKl1yvDOlszYuhsWnEFkGOtbk57wKDvx4vPdzThJhiz%2F7pgfHLmvH%2B5IeYtlpgmLhCy5HUkWrtGHNQJ61p1x34TtSu3dqY7Ah4pojE4m2OkWjIsBtDUT8oWRotQuddlGbOrYDJWVUIQ3eADU9vEw2Y7fX42zTycT25TIq1iWzTqNZMKa34H5m6nEXSADA%2BQLLsqbMJo%2F%2BqqHFycHoE6U9sPn8InsIgfRcdAQGFf3ql1Bxy%2B7R3SSxPrNiirPWhRPmh6f6uHN0kg5FukkugJbgT273JoTQi14HT%2FVyDNkWdrN53wL54BVSssZJCTvQr3zYHr7VQvc6ArYzlCrrEJ5tMsPPL1lwCyZnxFAsEJm4N47zQQohzCL3Pa9BjqkAX9oeBPmDYeuRymAt2W3TVhBJrhOEbs9%2F5niu94Re0R0gz9HAHyaS4jhWniv5zE7peEleyK4qmhIdkew0QS1msnGSRm9MCdXAPL1iqf4Ue0o4qpZ4NAgjDI7E9mdouHJ%2BV30m1seCSzV48kkHSWHZhEvBZHD%2B9jonpN9OHHF3aDPnMgRzyCJNmSw47uX0jhsSaGTjBOMOGgz5%2B4KYNuvIX3WFJTZ&X-Amz-Signature=e9e45be7b3c138b9eb53b803d01d9ba6c596ff7d37d6006cda7fb19c482fef3d&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
