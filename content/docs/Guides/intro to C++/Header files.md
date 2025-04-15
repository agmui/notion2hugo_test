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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PMN2WUQ%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T170810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsJK7AkJuet8lHynU%2B%2FOlOVW%2BSx2kQIZFcRMREBESTnQIgZkFkSV%2BqTZMgeBC5rtY5WuPv4Ni%2FWYEAfWx5qQ%2BVKZ8q%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDJmumzUzpUnO5V7z5yrcA%2Fu2ZT9ivXl5%2FO45yuD3Ww9qe%2B%2BWcjpMtzZxonTAUQxBrNFFNL10NAYfDxqZ5c3INtya%2BMZWJVJIlGut%2F4JuNJHrfmAddKyjUO6rHU4HTjqhUSLAUJdXATVgDcJZLErxeh%2B6vyvRohJNcglAO27cvm3BkwpUWJrVkpuFCWP6uSd7bOevOotOcjHd4ZbEyUD9%2FN0ovZIg9kI66LHQ4vZbCEbaoA9YFq1i7brIAPpqWU5aCOmlWaKkgv203tusynIvvGKsnXh6XNl7Bwrxrjgksg8A2UE5hO22V5zpB6TFVaqT9l1nod%2BZ2KjxwtQSkUXvncVVXMOlzDEpo1PX%2BWF%2BdpQmSnQux7qJjzfV4gw8TGZvp75g4I8EqLuatsRxwTB0EGjHxFXTVu4NEQdTvIYVbAYi%2FrYb1WMd0jfWYHEIx8P1Mx%2Bg5GlQl2dmPPBnNTrFECNvofXJiNzJ4BnTG1NP5GPRUDRl1IyBCs7NMuxBfxLUD42d%2BUevH%2FLubEREc%2BxZmcjfG7i0wi6Pza8SUR3bdw7EdoAKBc%2F1J64gHIjrlex7fq3Lo0lvkcZNDbEpGW6AJoVSBPyfEpBEylAwJcB80r57rgHQiElM0wIc7pTc1dvXWsUImgqmZvAZs3D9MPOE%2Br8GOqUBdG9XokzN1Oibsi7xuqwhzyv3k1hdSUzkXP1wy0muOjuMOnX%2FDEqjNMiiqN1mUwWLOKpH6UWLxNL056793u7NoNQFFDXwq%2B%2BlmDiaNfO1WMueF8fqUy8wGVSu3f0O38keVtuR66cCRovyfuo6iKNLhIOImL%2Fk8k5BlQiSahqTqlLsQ%2FVqyJ%2FDd%2FrD2aTD8d1som9en%2FtS0XCiLQGSWghX6xkEMPts&X-Amz-Signature=7e55b4d054bc0014340452a785110d3d1765d24ff844c2e64f791433405f3136&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
