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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXPHQ3WI%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T140845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH2no3HLWbTR0LsUDp94PbsycCTiMmC8R2Tuda45lUu%2BAiEAhuM6xf2EMG14RifQYY%2BxFJAxxYemjD6trVDANvP%2FsWoqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBixjpkghKeZxJnBaSrcA1HbMD6TKx6yJMcFfG6CF%2F4wgDuhp94i53Y50FslwvshvIdctlCJPtZ61YAUQVA%2BbFveIkSzCjb%2FPrFcSho3sn%2F2q0WOLaKrWDIB7FjPyQ3P6Z%2BwgxhtrdowoB9VTz9aydB727%2F8oKTAyQ6Tj7lhwHzviNOpLbWszptURQwr99kkOS6dB9WYYYvH5bEbC%2BE4uSqC4FXBlfl%2BsuAbzsoEa%2BaxF%2BjzzdtB0LtSGR1NTyjsccY257yzOrXZjJu69%2Fo4XSAxr9pnyZaSK577035worIzTw1ucI9GphaJIP4xOBZIMFzA88Xe9SzXf%2Bq6yMrmHGnRRKRuZfTObcNFQvxR5%2BJca5RidasFmd7hBD6eDksWTgn640y4oKX79%2BHHQNwWg514gjmjxqIXB9xLr6ho1PLvotmrMeJvGH2X861PjkMqEEYHPtvyFHZYOHiYaq5fRtMrLfsy0AO0WmVIO4rj2c4S5jIb%2BQbW%2FHA58eapdo3I%2FjlVBUQW3s6LN%2BTLwnSCLZAl2MfVu88fbK0HzkqdXQFmgA%2B038r3cTOgHx%2Ff%2FZaBLvMG1JWDGdU%2FB4wZfT%2FXJwQXYVCUZ9WMbY6xJeWNih9l7A2I5cHT5JUV4TLwfrYCh0uVhyND0yRm4sBWMNDkrMEGOqUBKoazj%2B%2BrWJPzaCw9cWjtyd05md%2FvR5Ak0M6YD5jLqRX7Mm6MEmLzc9GuQxAeaGN%2Fqkkmxkdye7YvbEDUHs7pKu48w9lOzB1CXHJFDbMB61wrpT7oSdAiZ4HQU8lLfOR4zrtlhnDT6mGTQeakfqkaiZh8jBDxoSFM9L0TVrP4m%2FE5lcbTKoSbdlWbdLd1hpYSqQmq9WmJpdBRduBzsmP2uFHkRSni&X-Amz-Signature=1b1d38cafca3f632b1768b1e76d633395d676b66e356500b668f199506b99f77&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
