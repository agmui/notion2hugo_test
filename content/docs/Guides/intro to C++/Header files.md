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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MEYPUP7%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T131621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGo%2FuN%2BTVbmZun6OxeCT%2BlKBCuOMnww4%2BypoP0yYynnHAiBJwZiGDxQZorhbYkknhAutE%2BgGsgMRho%2B1eTH53IoGwSqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKO8yLd6tO3gwckmYKtwDZeuch2L%2FM1ClUHmM0%2FsABYqyYATwsgzsKCHM%2BhZjFbUwRsIa6vdrosSE7U6oTumF0Ror6J3nC9IObdaHythCEkUeuPn5a%2B3sKycapOigQkH4lHGsFS%2BvqXT2yTet8b%2BiwVFAr86AapVDCjLPpCk5vlnOR37TNEv3K%2BZetLwdADtapkcFOrlXPYQsQv293PwdIfOSsqZqvPPdhyvU85RoG%2FhLQ5Sn04JvuVlcOX5JBohgdg1r7Q8V1rsXCqcl7hEwZw9jZG8xSZwM7%2BNFcNBXTV185DK1O9kx%2FAITWcOLMji8eI0KEBHlY1DtHQOGdJ3FXS4E8e6t8sVUup2MAwKrUxt86kd40cUVLCsr%2BniFa0JGWKyETZJkXQiSbcq2HNWaFjIPN190vTRIaLDla4vPLsW9ceZ8wz%2FFTkS8feO%2BcJgxQF%2FVnkUgahWztlzIuyATIHgq5NoM%2B9Q9QVoOPwInMWX3BN%2BEaS%2B3ciI3fpLL5XnmPwN4G21sZ9MzhSrcbdz%2Ba0AW7zsSq06JXWof6BwQ5r8JkJYEARIevWgg13XcGRnMoPpDDF%2BcoiinvVnJ2TouzJ%2BTar%2Fx2qip61nzb%2FN48ipMXP42njAfiq4XvqZFQdv8K4va%2FEf1fnONEPAw7srcvQY6pgGB%2FXj21nOShWTkV%2FVNgHXwqSpHYbou1weBIQLxdgFMoonhnOmymXAd34g%2BfmP5883DOiicmXR5bFgn6nkfXhhIuorP6PQOAsptNrI1UUKvc1LThwu%2BpcmjyxuhcWwqJpwJXff2CupeE%2Bro54TqM5KjwXVouNBmfqvCunxtm0qCL52WlaAyEtCfCDoZKrJLuAnvlt4aq9ERN0VAI%2FSiSvg2gIgSGCoI&X-Amz-Signature=82b0792ef2942e4a603276632048022f0ff789780b9101b63af1267e03c30ff3&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
