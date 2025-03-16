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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEN6SWYU%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T080936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH40haZjh7SRjl4P2ln9TVvvdj%2Fpg1pwlhdjJTU%2F9Xd2AiEA63DNcq01hHd61TUZVb96ultjHsdAuaUoIPA8PYzQB7Qq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDDnKV7L6%2B49tIHPR8CrcA9YvhuBxkLjRBJ8XOSDNE3udBSQ5%2BE5dwIZZwFto%2BLOxLY0WN3Rldt9HcHi5bf8%2BUNr%2FyIkxSUnoEA2ui31WqJzw1sKvs3fZa%2Bk87iRt8jD3dz%2BniaCQ6IQAqKyZsUp7zMPE1Zt4%2F6%2F2D0xJhv9Jzef3dgK4zhioMEdd3jDTAnkQ2bC05Cvcthx0vv0npDBuRQsz%2BDdN%2FZCpR73EwecLH3ipGdIID7cWczdEgy%2F%2F4Y%2FLtdTIb1t%2F%2FJKfyoYP6Hffcc%2FED9sxYFVxabdc0EbNFxYzGzuIR6vcVQGemgnRbMUmnCub6FF5%2BqO4ddGPDYNYn49fnGzplvKhXXUue5vVVhrgZkmQ6DMezLmWGv5TpQzJTW2zMHdk4t0s2RYRN2o2XgQ15eGCFsUH0wZJqKEn8O3l5rHPD3vHcsnvvWidViS4iqpeaK7p0JWoGIpVg%2FIGYNiQc7kKAcePTJ0m954Hpz2yKrRh4pSSMj5nPQsq3BN3IlW9HDISANXDkN%2Bco3PPmxhA5EOE%2BezR9p0U24Mu8%2FWGEAH88b8WSKtR%2F9EO2%2FJa0sB0gXjyrsLvlF5lIbxc8e%2FBIdZb%2BOoPbepORp4oRED02iHto5Rba8fC3Kv7ves0JqUMCWVVy8kPZYcZMPzq2b4GOqUB8getWn%2BSxSYo%2FGzEvWJorUFVhAKPLKuE73eQX5UJsHTb2wwILEViPx7ZHT1WJOht4TR1AJfGuf69fDozeMM5bBEIiO03habTLj2NmtUmOsmwuEMWvaJjS9SoVpUMYzQFaxTnNUvC3Wc9E%2Fb9YC6SxkAKcCY968pEDjmTV0dPqE5rkjWv4FQ%2Br29kJ66DlXyBGO1vmQOHQV5kisaV0M0k0kjT1YkJ&X-Amz-Signature=4c71d47b120b98a4e99627ce7e7fb919c1fa2f632c998c339eff92d902d69513&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
