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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLLHYHG6%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T050901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG7lmoTVoE0snDlTzQCebMgX8X6xSC3XKcCleFdyBsAPAiEAxJJlPc9fcR6KzbMieZAhL0td0ogs1KxyWu2dw%2FvO%2F9Mq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDJiS3yOqGQOLtTU5VyrcA9YeApUzZ1BSd4Q%2BlZ7vWUWsw%2F%2BHf5EWuKjCtfHxp%2Bin7fpcVl68RV9adUDDH7jzsEoF3ocYK86YC8sW6xhMWyHsWbABIDqjaZbL5rNeI1ylEUVr5dYBhHgU3J9pNnK6N%2Fp7I%2F8TZb04Kw%2FwNx%2F94EHZ1f211WUcvx8Xl9PMJa061iy4pPIBv76OLy0UO%2BgP%2ButlrNK3iG%2BYG7hMTpo1jUb4My3e%2BZKF4t%2BO02QOX2FeNVVo4bkUuBTC8RpkOO96GxE3bCVQekgLi461a2SRV0AYcu17cEiztFN6v2kjAHrYQeZcSatd%2Fs0yMVmqsRLO2LOOiZ4jXUJqHFCfvfxL9hjgGWs7YCvR9LaHY0Cyy6nwpBY8dYOyCvk7uwnkEe4rc2GHzSEsG4U0gd0vD8vyYFzhywjVZpBeFt7jZZtgkymm0yKgwPY%2B6JJ0xvlUUeE%2B%2Bnx%2B0bi7UeoN%2BzDrvJMBxJb700aQpsCI004fbeZ4EMVCmnPgCTyBtv%2FXtU%2Bme7l%2F5Cz4F2vl%2Fs%2BoJ4ZmWfUgM4mwIVTTVWDRGdEyVko5EBixAHrCV8TqyV4ZvO6E%2Ff62%2F5OFPX%2BuKtv1xw0tVMtseMAuFJ4UvrXLMwdPLRLn9Sbfnp%2Bcsewtiya7se%2BxMLOUgsAGOqUBfk8%2BHeX2lyX2ddo8poARZHagRgy6k4QrexnexUZdMIfEdhEQt%2Fj7uyGm2v%2BlOXaLaaBj%2FRswvVi5v54rjafsrhy3NQ9SIjMok4aZMhgzQ0xvcnTDAnohuF0bJ2M6CBBwGcsvWCzqF9HueljmuMIyWfjJGpU7IEo69IpRIGNHOw6VtmF4bmo%2Bu8WpCivjJFZif0b6jsygkNg%2FYHiZqkAGJk4k5tjl&X-Amz-Signature=9ccd674aa6e3d792eeac5a17354c62b417e48dd71f0e710bcf5e28ebc2cb9310&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
