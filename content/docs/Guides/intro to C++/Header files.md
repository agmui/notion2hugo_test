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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJ6VNH7Q%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T210808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIHQMT3pYSAKJBRFtmNCq%2BjSIUKei1PpIh7RFa2I6ObpxAiEAmEedo43jSgu6DcTCKgHFxfwi7OnTjBfCsXwNGI0ce%2FAq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDPbRkEGVSqif4zaWnyrcA7EtXmMYTgWnDQBL9AM2iwTKZYHTSnktU61JL28hDjWI4YMCphnBAIkbE877DAgVAfA3WD%2FLzhApt%2Bd38ryirBxfE8qQylMcjSik215VwRaNdqckCfx8BcGiYGpm%2BxfTwmlESLU1E6gWE%2F9jgdxLFNoYUvId0KNLABBPANe4eD0r3urNix1KDeBwqdpQHoL%2BwIg6fZ6KBmuZOadYAwu55BLbqV3zLZJoLdOAvpTHBqZQCgNe2qcmn2GIhPx9XES0s03pTcD9VDLuNuwmhkskV0OqGWBG7vxSUAzmOVXVHHKFlp9x%2Bqx469QwnsQeKbU7avF10JUynmE0xw6%2B3UW1Y5qLi31obhFRmVrjRINW0y8FhDqUi%2FbHs1%2FKu9z61JzkdhxIZOemUm0WR14D7ogT%2Fk4mmK5pTp83S0CpCgZRmTjaKm%2FmEPQFnjXm7o5Wr2kRj4%2FYJ7j6AMrze4FzMhZUrXHvMiB5jZ9yPg82iDPv86XiwV7UD0WD5HB%2FjCbS%2FrOz6rlIL5fPZhW51XpaXk%2B7jqNLCZcGHUovYiY2Ry0AvdzmeWNKz%2BaDIcbbUyGp%2FHWuAOIKhLPoDh%2FSOupGI2ScnOStfvN9aLm77CrdVmLgMs2UI%2FGzSb%2BtuCyIB21rMKzrpcMGOqUBvrH6w%2BBtWUsiUqvW5neVDnPkAHUY3BtCVo4CFQigDTlzLZfXgKt657qSm8xm0Ex68mFqHiDQ%2F6MwAIdi52%2BVuffTtHmhfU2HrMcW9zANTRehUKfbr1CeyOV6LzqbYakS80fVDuvN0hswDmm9PlXdiMXbhDIGRNaBupeJNy1e%2Bmz7DIJ4pItiS8HTU1WiDZ7SsvQhUUdDFiWU6FfNze%2Bg9Jjck2Ow&X-Amz-Signature=807ef24c5deb2a9a9a01b5b4750058ca72381ee39390c950726fda8223f8a8dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
