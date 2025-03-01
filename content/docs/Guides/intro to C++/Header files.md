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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XYWLX2A%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T110133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQDUHv41px%2FI9TvN3PNKA%2BJSWbOVTP0SorH22WtVVdAVtQIhAIonoVOk1sR7cJzza9ID0U5zM34T7HPsDe7cXtd6vgrSKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxPGWHP6bMN41sBILMq3AM7jOiRFUsTv%2B6zlPlJAv7R6pWpqWDivSTLfepOWTiIv%2FopVYixasxnwaruT2ZwPiGVFVwqRDsbGKrpD4P0uYP79I%2BFdNETqXW662qRs%2BNxWxAL%2FXjDDDu6GhW8T74VN%2FcPpDe8SZ%2F5BfcTERfBlYQH4NuiyQWb0U2KlFWBZPwbIWrecqV6ry2qslv6WLd5%2BBEIFxa7oS8VNo8DoqRZ2roLdJoeBFY7V3MwC9vm4EsgiEv29QV5W4Vxq0L6zCZHdCVjoy5q9KFS8xQ6V0USHvr%2BT0wm7aUCPlEB9OzANSkm%2BCrSvJikUSNJeFpWsXx6XS9%2FK24XAkwz3YhEu6RbMbitBNd%2BI0N6US%2B7XWz7gp8Na2zmrxKZ1hd2AceTDPWd6CsDdn39EoD16qzCeSADCnk3V%2F5VHE3UzKU5R2%2BdTJLNrggXrKBK3Swh9%2FLQU%2FP0f6Meq8grlYKmfzSBL84SgHWwpZgcLTT%2B6ds8754K%2F%2BssHVwaLSuvz9M7e2AeMtLz1hnPzobe1xF%2FfPuDl0n97sjnfwfolom2q713tD4ttg76OKXKvOURuMYdaynRbVPm3Gp8OXoZUzt7hy6uqT24rZReXuwE8Y%2BpLbeFVPF3XkdPKXRjaQxqR67cLS412zDVuou%2BBjqkAa7jNsvtytKTpMSnJOGLGMY%2FchKChxaKjVdInonRVYQ6yM3I%2BQ9OmxYA8f%2BnX9OzfJOOufJlgCvBZsv9ZV2zHSuRdd3%2B8XHnKmYnvgDjprlgL6CtDlvbt5mFBA6y%2F5Bn5DYBgo8uFn3vf8H5TnqKkV5VoR8sohrl5eZsFtutFBDPXDdLW3niZ2n7BB063goWG%2Fm%2BSGqRQ25%2FGITLq0UGYBOlG9Py&X-Amz-Signature=d416fb3cfc1069d95f6ad05e3087075ce03a4872c27ff791495b81a711ca4cee&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
