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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UY56LYLY%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T200952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDV8ZwQtID4ZVwcac4c6T5pkcfyyc1eoTYr1hzdteOwPwIhAKYUt6VWs9KIk%2BVkOVdsnsMKT7IHxYTVECI6I0gSMMFXKv8DCH0QABoMNjM3NDIzMTgzODA1Igz3qSt0OowlmPawZjEq3APYF2LibtuSJgsTACTUUpPQ1t9fCYDxxxdtriauBuz%2FOuGo77DeaLmfBRDITq79TczcvhVxuF0OjHiVg9LJkzyr3srxbkfT1ixU90JmC7tMHcqbzJcdXlXoLicsVo%2BpK7BqeY3PUlFK5Zo1aeDKNC5ErmQlFY3BKXS2j0OiJsOOa6KeekEFHQNAjgupPOahCGrze3jltvfEB%2B42fNyTfQuhSDQxzNx1KttWyVRDT7XsWQJIhAqA82QsfGVKx1GSuTLo1IyHjHR2xK10ctOzHQYrb26rZF37OVV5%2FQGDu4hpjpDDbfAatKYmTblqWDTt4LXnWsICwxDtJGs9PX6J4ND2bnAuQUXBQLOCGFcTSqelO%2BxEQ1sC7E%2BwKlJBkV9O9uBre07tXYHSgQBg40DSdPTAO9gHr8AGNiEA2%2BxYi8iQLxSxShz8JQ9%2B6PpbhnIQNSjH3tE%2F8qFZimTSVnRFCSKxnjK6gd%2BA0JL88%2Fo5gEgQBnMNkcAxi5Djtk%2BAm5AtEzwdA6wi4KKHebiAUuyrNmC7VHxw2bXaSqCsGnfWHIYz%2FFMrrsa00f21ClAB%2B7ahnsoaWJo9W3DpFQL8NmDuYunUCP69TcZ2V1j6cUDBDpfennH%2Fs8MZjSJFCEEx1DD%2BiMfCBjqkAcfKDhIdIPaXNCzfv84vfQODmU5sF7LhmT9tkUFpViNh2Uk0nyeSZ5uqfkjPERpXDt7BwjRnFeLxmLIMSdkl%2FB0clRd4sOFy%2B8rZ8BG%2ByNzQM3Aef%2BK6TiV%2FJIgbvOdzW511hL92CrBuZB%2BENbnatmFzlxBB66A2I%2FPCOPrJoI8SVKugOhsFAPKqPDCRCDBgeGBR1cLjkRF%2F91PeIkbb9vBbzm%2Fq&X-Amz-Signature=3746365fa9de15d8be50be85a770b5a7a64ebc719b5d541fea0df07b1d3eea1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
