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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULOI3CM7%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T220812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEBsfuWXBq3MIi%2FLpa89z%2FuJfwY5UAXDKe%2F4G4Xz7NWAIhANQUA5gVfiBatcwKoRxoYWiYqmBXeiURNaKCSz%2FzK4o6Kv8DCH8QABoMNjM3NDIzMTgzODA1IgytjqbxnV8oPXIth7Iq3AOkX5Gi0YTADroTCrsLAmg%2FGXSuxfiZAvm3IGUh0h9DaJJFisyqVhIsfqVShd9WtK5%2FaM6%2BeUUBL8BlZJBg2Gz80DTrNNncQr2pqJ5PUAO5sAjju3Lfh735QUCOECtpjn4ojhKJWZeZCANBaSveXKcvx3p3mv0bf%2FwDBBuXwlXk47agqQeDLi7fyDDMx0SZE3vQo4dn2UpDXczNhxGla%2BQOAHv7dsjgFuY4QwgfR5uH6XKMc6is6pA8J0E8sUHhLUbhzGJmIk92%2Bc4eLImnhi4ZFv33gNBWlmaV3vtVwCiQ03f1gagu%2FvbcU5R9go%2BRab9Sp6JmaXcrmU74WPf7SPlvwL5s0QOzZEL1nJfIvch5pbYOMVXyKxeZmNTPFQpm9UzRUL9z614pk04pb808DHHwAeQHI26O%2FiuNCYLEgKpgmJ93RzsEtcQaA%2Bc%2FkzPSBWCT4dMFPN7nWorYgcA7cwn0hY0zt0548F%2BsKeErwvCIqF%2FAw5hbdheI6cNpNRLv0MDpDcm8xmstgXJwlLpL1eDhGOGDD6iPsbcngeo%2FkeBZCfC9GuqG3VlqlZ7G0DRX3WQ4E7f%2Bq352qJ9CC2TnBwN9exgw6QiZlWSX67h7vtl4FxIO5OfagotvklAydTCEkd7BBjqkAUY7CIsK4GPeVaHIGLM6hDshBjn%2BRriM%2FlghGcng81rZHRVxMSmJFNj7q871OB%2BJmeh3v86HHDZQuKyS5qOaW1c8GvjT7XCeQ0Y68CZMx578UlY9TKNsZh92FbYMPWrvdnadb%2B%2FQHpI88Kj03pQdGB9JLTQC6iW2I3UQI4wsk3Cv3U2hHay5uuG314bd2xVhe%2FmN%2BA4m6F0AIkulkMo3KjTsu5Xw&X-Amz-Signature=95e5a4ee86bc501c33141ab66fdfff46c99be02787f758d728b4e61e8e7377a7&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
