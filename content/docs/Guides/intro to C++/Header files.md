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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UJO7LGI%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T230927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIBjIPn6qxT4YYYBBEEnXkDbrcL8LM9WcPobaM%2BtGHDTTAiEA2CmMMj9MPohe3TinxjmplVzmdo1MJe7c6lUh3snWevwq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDG7g%2FJEZ%2FbHL3p0Y0ircA4dHTL0NwBLSCXNsHzD1UNu8BlylQ6a27nsgz7cHHRvkp%2Bc40oa3%2BQzvHly%2Bsxv02%2FzKpAIr%2FDVnCDhSH9H1D12wCDv0sv1bJtPSCzWOfDyrIahgY5hu5r2GYUkUu4%2F%2FCUk8xlqWEG6LZe1DLdE3gxcAtS9xZZYlt8KNjG5325zddOmYNYu6DocRvhUydeQ79LBL9Sa%2BYqBoyc22XXUo5Arx9JbpiYQHblD%2FMPBHipxnGPaqOAB23oBO6RUzKakCGv4zghlOJo5LblQfUldcpq9Kq5jIUiXLc%2FFGM6sxBaOEP4DohEL5wErz8%2Bh%2FRFMEA%2BmbNEtWtzBdKP7V9GLs9FE9dXZWgo%2F31f8QaAPgEYInHn%2BA4ONNpMHSPm7M0BM9LH9DkPyOLCZcel1stlTaEI%2F0S2RZ7VIO46iEPb28M9mqWVmegcTGwrCzun8ZdEBs6%2FIfElvk3vok%2FU6FT36UmO5IVrILDACjKFNUVjtKeyPaLCbt90gxeznZqT5M%2Fg4XwVfiwLV3yyUSjPdohyeS3ckihzkUiKNQQXEv3KRCi2nPk3LqiVr4s7H%2Bo1sIMKbPUJP7FDKmoBRa8F%2BMkohirTb4jViHB2T6fQbzgAVxnJFwIn6xgkd938%2BZeATqMI3Yh8IGOqUBTr2bbYwZ01K%2Bxxv8lpBc50pTsNOIcm4Rlf8HZ%2BYPf1TjUCP5ISPSJgCKnmS8kQjaNGsKBq0Jt7PdJ95ZFgXELTeGjKIRDaaGYBs1KYXzCGS%2FAuzqF2vJ7J5pjapfn%2BbnSdSjO8tisk1M%2BTClPx6%2BxZegP3b%2BkA2H2NWb7gf1Le7NFhQTUBdc5sywDtiwh6Se2JCt7C0G7iO3V1DFCs3UfvJL6Xd5&X-Amz-Signature=54746b291a91ccd23f7dc5d83a04ea3b6f841cecbd42772ea94ac3c7cc62e302&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
