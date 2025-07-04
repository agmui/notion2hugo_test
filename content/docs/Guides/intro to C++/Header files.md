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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VQSNIBV%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T170742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDkAm3Z6yPAL7ItmaNtlsJr8SL2l2Ko3joaBuFL4yW%2BawIgUafzIe5d9cNDmynLUMMeAXUG2dSzIR3w%2FtjffjaYDKEq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDF7P2KdMGWblZ5dgRircAz7GKdspQ4BjZyV7CxPrRcxJHkzQcRvy5RPouVem2pxikqMu9tydgrv1JI61EzjN0j94K2JPGsH%2FlVBQjiUK16qKiXQ1XaxrZPIS0tnj7jH%2F7uNc229GuTASoK6VAFYeYaq4E6txtKHliwzHwuXHbzZ1w3t3i%2B3v9mEbD7PpzY109Bq1ELwJHh3325mxsbV9hDrob%2FypMrhuaWxGTWJxjNuNCLzJ%2B92tNDBo2vBKHApUr1OAvVO0F%2FPtMI46XCGdnM%2FoQ9aumdl2yCYR93IdSbYTNwXOjz1dqHVxqxtwc6aW8kS6%2FYT2RS4KuUneX4uQ%2B02zVJeRiLbsU4VTNlBLa8YkkplRY0ZRhOg49FbCSAnGkqBubXBNfgQhWf46EV%2FTzerewIvWeSwooITVqipIcZSkssIsaZMgnBeqpIopXRekRLRnJMRyUZtLT7ej61DnG%2FnmA8VGOtqTR0Kk7Xv5Qg0cVetyHq36rahBN0doq%2FM0qi1YBWfg5wl4%2FDF27LlqIXG9d52Mx1jDVj5ruS4l2dSYU96VmOJHBkh6QgYJtvfla1GIzF%2B7qm4BInVckbFYf%2Fnbwcg0JRb36%2FFX8ojTtuykx4%2FzOf%2FVawayKt4CK9JNpnXQwSHixdGHMk7xMK7sn8MGOqUBT0uORFd5B05wc1I9eqOf6JWcKllAverE6y887aJjeWJSXyegTivlCZCZflkvGYt0jdojtEy65pJ3cjeNik8IjkEe3jsM8jXAB7AvzEc2D6DslanZDcRzeOYvkXu7UKwSrZK2s93bbjlyyuWeJC0zMY3vIFmmSeS3L%2B7AQ7Ux57bi2wE234lgBAiSi3mKdRyfr06jjh%2B53XE3YzBS6wQ%2FF5ST5g0E&X-Amz-Signature=c2da48a43ea0e364b2abc413c06db6d1fd7f8b36ac1487ba615c77dee6c7509d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
