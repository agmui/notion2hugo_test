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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRE2AX6G%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T031134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQDj5Xov3YgVCnID3aK5o3qCw2WCHsHoVFbzZurIJT1nEwIgd5JWrAoysqj27TExNA261%2Bfsw9QS9%2FyHfVN584Jh%2Ffoq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDH0IG%2B3hcZplJLgNYCrcA%2FJ6iYzfKGZGlri5Vx4ZpzjVZz4rJ2BW%2FQtknmwdv9uDK1RhrxzLAyPiNw1NMj96uJ53n1BX7pbXq11iu6Jt6rxSKF4388%2BvzMcpsStxMDhmKfeSBnv6fhgBmtDg%2FgdBdl0TJthoMpMXdovT6z0dKrNTfoZf%2ByZrK2tBTl7g1Pq7ypMwOzCGdbnGMbu49npehTd6VIDa4LLkQfk1F9Pg6DvCjwhbKCHzkH8sBmZy%2BTl4zdFW6LUc3QFALTyPXbuCSSZJuAV00kn%2BV4HGFZbFgc52NDirpdJWbmqu6Ei6Q7JZlvhTiNiCuSdpkIIzH%2B%2BsgHrCAuIvycglnYiVA%2BnYWPvMO2a%2FKgsU%2FODv6DeIyZQnxUnl6ICFrdoB4iS7A%2BpSguYATMb57vjrGJ9mKliIG4TXu7Y%2B8777uXVsq3zPcBXJHQwaXXjeMS4UIB17z5C3rLyLhBVu5f6rNAKd0P8AGfTzwVZC5iwNZrIMYU0nNvkww1yyuddPF%2BWj%2B6tKslyJNeSNuIGctY1apGkE9ZsMo4jeGY3Ka%2BR%2F7n%2BJCWJq2xz0H78ZwUOM1qaaP3MDwgBDMIga9l7I0Sv6xKwDAPS2rbcN1NHXzvfPVRIBSZYmdLLoyVurrdklfh%2FB4b3yMNDsj70GOqUBAk6wg0FjB8dTMDIpF3wAP9wGZwaaG%2FxvX4N09E%2FhOz6m%2BWJOpbEjtf9UP0obQYqTvZrUmP%2FrhdUc6Hzt4SXyq%2BgefqeytFNQesFmD89K4ETgQGptTcyGocqa7kV1xods9qdbmilaSJwtoG7kopt17XuP29%2FiXCfDpbeqDiyTP9nOGDAxq4%2F6zeAehLpaXrXOE4b8YNnpUpI33PexYhzfGU4GRt6z&X-Amz-Signature=b54eeaf317fe6599451acbcdc3c38d9f922f61ba0f89c46a32647514bb2f2f49&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
