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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NJORCQI%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T201056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQC3GjcA5wi%2BxGGgaqFEOzw2JvR0j8PdGCIVVb1W7de0twIgE%2BJ0nemWNtSCeUkQ8RRA7yb17htXPoOIh1%2FNXEo2GDQq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDJkqWTzIY%2BDfZBte%2ByrcA0LtQ94R%2FEpkr%2Fvxg0ENXCJHPtEioEpuW6aysj%2BeAFfhlf7cq0IK%2F1i%2B%2BEanHdoAhL5bXDhLY1QGEfK4gKl7jnUAWIfPOVhNWLHndqU1l%2BHVf5j%2FX6kQJpYOk%2FIN5aJKl2LXTaOvNiepexnJ9O5nehUQgDNgVC7r2LLpxQNVvq83sfRnayMmzGXHUXc2hkaxGcVnh2%2FgEPhK4lraNfa2Ko8aZp3S4jwsBL1%2Bhn1Sr8u%2Bn%2FrcrMooxMCKB9xyxhkXHLShQ%2Bw9Biy6fdaN6Pv45S9hLqLy7lJVz9Mhk22UmYoMXI0kSbwZJ1z%2BHmqoMxO21WICXmovNlGxszTU96%2BmNoUY2unhmiXKi%2B7BKisSt4VZLKCPKUEOCqQuUkTSTpsuIzQduJArY5S4ReSh7TadGWsDciKYXQxHFHSKcF23OxSM4Nc0PCRT0HeberJl9S29XVFFJgkqCEY48rwHIdQOY%2FgOip9ViLqAVJ2iBemXblP5fLgB%2BMjxTrfUyx1lKmmdZe3b9vwtcJpfEfSFl1EE6rPh7bxdnXENlJRcRtq1aX%2BMYURLskKTfc5F0KlKPsYgpoqDJ9T5mJHVFEMqmdCUT4aeFTdYNSjhDr1CXAea9pRUpP31Fo%2BhvlfBDNjtMPKcxMQGOqUBGUCSWl4PrPzWN25SBuvBH7790Ap%2FOKWnR%2FccREIJJb4NIbc9oRx0LmORpxwSd7WQnKF0hA6tf%2ByB9UX9pHWVi8%2BO1%2Bk6%2FkrpJFAZ2sMVOuDhP4zgmgyzImvJeeewW9Q3zX%2BclwZPRG7dHCrSMlNaJB5tUpTE3StnFObkSesgr7GPsdjseCnd4yx5elY1DxZuueW9wrKXhC8BKTzqrGyX7sjeZW15&X-Amz-Signature=6e8eaef2fcc9291613ed04455e271261f71c196798a385ff1f23a6ae53dbebc6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
