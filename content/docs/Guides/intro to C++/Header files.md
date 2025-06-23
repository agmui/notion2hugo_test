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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664R6QTMS7%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T170901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIQDIlocytP5t5uzk8AL242GjIB%2FBE%2BIAMtgbCpFO7ZfwMwIgPhj8%2FCFX%2FrHkJVbY4Snw2H0yhHiwmgu1bDJs5e1FAwMq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDNHSYELG1eE%2BNlWPjSrcA2ptloT7fx6%2FtqQkDNQI5WWUCa6imJ3O3W6Rtb9Y4rDUgAyJcOHCg2qxu24A%2FWMGNPvxCXaW6xwLZv%2FN04dHKt%2FUcyHcRH4HRy3rHJXig4mCpiR5dwEAP2bO%2B7kO7ldSHzDq5pT8In3j8IeW9ciswMgcSTPv02jNg1FhkEYcDp4i7V3FCjZ7TSSwHNryu4z8SJKEm00uffpDMO%2BWnzUsToMNPpC0Ox6BbKoP1IywS8IHy0qCFMgXvnwp9r0sd3ekSphgUdVCIrpQsRJhBFC5wkw3Wr3kA4gkFlFabTkFAk4xgQ0npw1OKyhSlg3cFd9myzB%2BYoaEWgZH%2F7KmqcIovA2wixaOfqR%2B%2BZEb9mgCin5pYYewKH9pVImyaunMCffGheha6lP0vjVEEIg1yLkwMEICdZYA2fO8xfID0DtOzug7jMyUZkBYfYXqSnAda1F8oE9ya16mVr1zuOPY2VlaPr57HLcnb7hMToB%2B5SeLYntpYY9pxaCYsbSrXj7OKbvM5tAyZmHsxCaOK9m28YnnQFHaXrE4lzVFSCo0WRI5f1RxBMSMXEsjAZC%2FXa3XSJKSYB8c1i%2FSD4HI6s563WWGVntmZNPufUwmTFr2FKf0BENBN%2BcLgpeKnKpYK07eMJ6I5sIGOqUBSpBkB0E6FG6ZXC6QJaKIlKpdno3AomPt8TKfFZ98bowmlVgw3STyRJKRwOtkFxuBhVOLyX6OukV%2BVJ0KsIOv0SSCLdT6NOEVfbtPYlWxI0VHNLoNoGFT4TTWZRhpt34ZxD6r%2F11vNhRfAnYdlYcWEsSSAELh%2FrLTm7ZEfzSCxHqiZoB4AxKeSs5Mhu5IHYmamExEM78sP0fkOtJ1qPk4ttTN8kwg&X-Amz-Signature=25f664632eb752e00ec7ec86b9e0e31b816a9c1d9905b62418e536c318031e1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
