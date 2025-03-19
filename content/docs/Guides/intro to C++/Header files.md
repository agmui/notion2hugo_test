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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663A46CPGC%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T121425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCICxzxjODWlpWHnf3rPGG0mAIreBCmDvWGpKC4bEbuNr9AiEA2Eq77uPEgMrAD5yGnMxVYqjyFuTWzWunWdNgO3FXDgoq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDGzcCnQnXeXE%2BtPnyyrcA9aZdCz4GoUWffAtoaCikYpZN%2BpTWLJFhGRvZolaBi07udogsH0IzB4wfqfnY%2FgiUP2Jw%2BdK%2F28LxnJerVuGsftrqStyxsm16ff14eZAAKITxFQvhOmy%2Fm6zGYC4pIhKhxtFzo8%2B3p5B2WRBdQwGicCIlgtqxjPxY74xfbk3qlP5ebPCk6J5rrRYJ%2BE1B4guEWWFE27K42ao2H01fvQChnk0BWuzaDKQj%2Be9cwaRa6OgyQsOyW67PYUnsp63D2gqoCyrgkikLfL4ds5pjs%2Bz4oFNvotx3FdkPlKwvK7t0nb%2BlTIfNb6ZNgD%2FOuZ9KcMWpTHiCdyGY6E%2FVZ2ebh2VOQvZTTfj9X3IcSiHrP21HPHTTWC2lZmYHtyuN4MZYQIMpAg2tSYl%2BQdyczRloBVjEetzjmaHAWeQ7yw55e51xlWNP0o0JQpDHDgdiBKTbcAf1IcoZnNJ6%2FzkIBGLmZifInaU10TaqKD3uc6VthLJ7Fg2vIhaAWDTDegCiSwJXLnWT8DOafanHrllI9gPwMqJ3eehFYP1p365XvQfPprv1MS5ANTy5LZNSsSv7PjC93bVSaqOrvEpjg5ceQp7XClH%2BTC5G9VTXSZ0OQAMf1m2MeWZQzjobOVOik8RhtkIMKvg6r4GOqUBR%2Bn%2BEdDY9Vw5UsMlgma%2FkFV5XP7fk%2BQ%2B7PzM%2B%2FOBDKiFwLs1T2yZh4oC8LsFLZpzfBGe4v9WElZINv40irNYnGl0%2BsN8pQ0N%2BinzX%2FACmCKmKtPzV%2B6c%2F6ip0VJTjK0IbsdY83JgaqT0Kz8pzt8BHgxwDq%2FRLlaUfP6XomaUQxs7PvhSKMgfeaBs6jzdwpkqYp%2FNr7JsavLLbw3anQbNAbmqEskK&X-Amz-Signature=c4099236f873c18410be7a0a61259bf97700e427fabf3911caa6630b1985722a&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
