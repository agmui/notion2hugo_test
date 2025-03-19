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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662I3D6YVN%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T220725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIEw6Gxi4eOzcJnxsd8RQsmI8HiM3TPG2XzWIlh%2BInW%2B7AiEAz98UhvJTqX%2BY5hhwt%2FEgkyFfBNh%2ByFlbGh31guIKqHQq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDE%2B3It%2BnlaZq9DrHpircA41Oqt4P057%2Bl5lhQfMqgLBfpgpEtv2HAPAPsc7%2FPOAVql1fH8t78FneNsh%2Fnuj6pgD39yEw3mMw4cgOBdt6XrxYAACpXCNQsxVREHpVoJTTgbAn2IA1wLajmG9KYXqgKjFWZajrIyoIBVjTVtfXITLIUkwHLDM%2Bi5WQVM%2BRynoNOX3cp4PQMwy3oMCi%2B%2Bl%2FTGk800QR7Qyde8XZdAr1K239vIGZU%2FFyKagFdxhfDVJS5fO3KR8uNNKfEPHqlz0Sut4TuIZWuZwPLixthjjh3lDzQXhlTry99zeUL2nVoooq0vOGW7phBSV3t7vE2JpiN2acafepskKKGWgcYLJ2fM0QaUIR5xpFeFOYy%2B1eDwMCOZ7XS0G42i0MswDotkWGoS1DdsETO3u0tClXSpaRA4Vjf9bK%2FkPz9Z8IpTsQY%2BIpAowIGqOvRoK6TlWgRDMTpH%2FVwWSGw%2BNnMZSNHZ09Uf0%2FuALgIqteu825nb5%2B%2F2zNkISwHrKZROXQp3dc7zEkyQoJGqUnY1cpSNi2o%2FWMoLuDoxSlfrbO7fEJRml44S%2FVWIm7WjnAugqwFqwCP2XZDZslrv5lZrwJ1fDHCpLncPXPbwtE5ihDc5pBTZzcC6gvUpGsEzU8c92iJfGwMJHZ7L4GOqUBWrjjDjgd3vbf9c0nruhGpsoCGklFqrCKfrwegfW9X2VPetEbs8KryeYIv5diIFrWchP8P3IS7Fa2he9D9FXYUKu0ApWtwyGlVM5XH2K1rUhgCKtnbVpfCQPBHKPvhCBmsKpi5oZg83kQuXqqqT%2FteG5Noq%2BjbRz5kBA9M1U%2BSXnLAGucXaGsaGR86jVVZ%2FyjOHWQmD0OQ%2BgPx0ykKLBxX9UdUcO3&X-Amz-Signature=8ed711b866e2099eaa5fc53ab279a96c9d2fcbb88c4dd56fecd851ea3d94f8ea&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
