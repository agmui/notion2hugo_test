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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDLYXFGE%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T091423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIAL6lsurYJg6nDJ66lbtVLqWEWVYyiOwTNM8Qt2wLbz%2FAiEA9sPOa3DexGxoQruD3dmOH6Gbd9oFlP0u%2BJTdU2uXg%2Fwq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDBk91kC4aMX8Fp5gBCrcA3iYFFBzQUq4lCT5UuUiVrsnIPyf0YQBQKexzqAhpgz283iPMgYZGWNvW%2FocEWdZSpl2dIAx249wDHkZjrHj%2Bw%2BRr8oNVoH%2BKrJylh%2BLSeFSWiqzerwjdAPRlW3c1btjPb9edYHnajBlNDTHx9mR7lMTbrJzT6ARCeZyjKvO2fg35dVX6GgSqRqxL4Suf2MhgBi7lpFsrEVV6MKV5fOIk3QgY2v6sWclBys4sBTrPh7VMGaX4FhRIbrJc8HYDvajV9qG5c4NcerbJ5yhoYTpY2hKvigKWOtJ9XEbDJvzrPbk3oyYOYl%2BVp2dIScHbX9vCjlE2xx%2FPcny%2B9Q4GH1vm7G%2FbdFIZ2QkrHCQY0CYHSiQF9Dxn95L6iTD3ve7JGl%2BTZIbsO3QEtI%2BhRu73aMr1c39TjJn6XddMLWqeDBsOIFqYlVDYMkoxlVg0oAX9oEcwowXg2KGGYHqhD3LeU5sLU0LihYXYNoZtSO%2BngADjdpKxK4Nq2AsZFgH4O4s1JKVn4g7BvnLwBhiEWzvOjJjNGQEXdIoIZjzxQ1hMmIIe8RaMN%2FGMol6KUP84o1J9JnbCCqDjwZcrKeB96Wsk4aJHuBPo5VlbH1YANPNnQkzHDN7x0jukYvYd01EOW1AMJW%2B3cMGOqUB8jx0U04gvOdR6yu90cDhfgLIsyrlzg%2BHWtQqF7SmVdaCupsXZ7ksHQqNvm1i4HOsmCq0fNSMGM93R5dzba9kvQmWVh%2BPNhinMr5fTItfoYIb4t037uX0atGekl1R%2BEd6Guksix1QHkp5iPn%2BCwwzmNVsQrDA82Hxdf7cwjIlB%2FOheT%2FDUd6IPUfItD1YSs7kzAT7Elpa7QlZ0fKXldR%2Fyi9W%2Fbu0&X-Amz-Signature=5fa65b0f8f387b24506f397b8b3a6912726d6ca55312db1ea77c2adedf85d260&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
