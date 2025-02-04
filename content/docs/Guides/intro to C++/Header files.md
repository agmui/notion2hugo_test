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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZ7HD2CS%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T040927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCID90ygOmRvS3vdn9F%2FcTQRBC5V10IJUDj90wLLuwDgRcAiEAlWOUkV2cjk0uIQFa5Yw0pIi52eu6WQramtPVdr0eDZQq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDJb%2Ftod8ROTD9bjk4yrcAytSUKk5%2Fp5YKymM1zrTn8wa6xcyFohhE%2B1QYU7Bcwzw74eIsoN5ccn7rrX35TDb%2FbNfUo0ex9%2BGeUDnmEm6eY3%2BtwVbAWj2BBY4aafeSekdlKX3V3g7eMAWrJWv%2BdLaPRAKM%2BQBVDJPPR%2BEhSdKyPA9%2FBX3Ls%2FoI4x5J67HZTDsiBUWxDyBt7lQs47Z6u%2B%2Fu2x3i1dqVZ2a0%2Fg5RSYfega4b8IxYEqldmOcdomyi%2BNPA6xNTaVAatxYzdU2L%2FvZHMLJW60sJRbXk0pNfBILdwMBZVhuu54W%2Bla%2Bg3FqJTgjo%2B46Lbxej0EZrIl%2BLikQN9SIL5rzmnsLd86pSBLu9Z5Zmz8C2Ix1UB8KTQp03jDmf8y%2BGLFX%2FK5wxb2OK%2BtWdZiOoMDgeJZWUc8MRg2MALBlMTL9brOpjKePxH3O9zy3riHL%2BibDBYQqUTYD%2B3pkk%2FzixUnlNa4iWHHsWylZib%2Btx1jy5vptU7CnsMN1195TWtziWsjmk6kkmy8rQ9AoIp%2Fk1PiRfKWeKxvqXn9%2FxIlRhGRXVy2FIX4Acbvqh%2BIhuiIXred360VglkrKlWyq9kX9Vmw%2B46JooVewUWGZxN%2FrZmg3rJLInXCM70WFHT3BYlis%2BzmMWuvFAPQ6MIujhr0GOqUBup9F8uXgt%2BSF%2FXLQAf5V3GmipZ6Jy1LH7bHICQdZIVqFO17D6JHDQJpdYyFSEaPqvJcl2g099QuXfLL5GOjtp%2FaaQDmE7WX3KX0VE5vaPbKr4yUcMbDNrFUVEhlZ2gWLRc7Y3z467V9V%2BUx0BENErUnn0JJxY7nkkhFtjUx%2BQss%2FLmXCS2REB9xpgYGWm%2Foot%2FC3edqlerEOT9ZztJt%2FV8tLwSmo&X-Amz-Signature=cae152148e3345353820e91f49f4c5cecce1f25bab9b2b006e17f56da36d3347&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
