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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466535VFC4L%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T061227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIFIgxvnO8pposncOWuG1TcS4T9CaD%2B8%2BPc%2FfjWTDCfASAiEAhWmluoC8M93XqWBll8F2gVgbb4o93MHnATkSajM%2FIM8qiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKnXAhSCdmK8yi9EKyrcA4P00v5DmPNTNtJ3lHAF2hwusfI4sBesT2i9I%2Fwpa%2Fuci8ost4X4YOUs%2BiShTWb%2BKJJ4dKrO7%2FNkquJbmsOQE3QVO7oS2x6QfFjJWnr7%2FukrqKZ7WrruoJMW8Wkwrk0E2fOru%2B4%2FkG3TJVi0h3kQ3shGEg%2BHdZBEx6abGzZvURx8t%2Bg%2BYmbraUDwsCaAQyEAMXixLyKmt8tSlSKsQQcsv2bU%2Bt%2BAOtBuofsgMMjgmP6IL87GNFCybrBFVbND4ZTp3nLyF593yEPVyj67mnf7CIIZ2NBwfi9xEfwseK%2FSCKEXjYPzTS0PEDE5XJjcJLkBlZlA%2B9kuIREcPEuOYREFj57%2FR44Ldv4dEZZKP0FrKnW9B%2FB4WjD9iUdYiI1o%2BW3hZHyllbNfqxRLDNjxXmkyIaQGToxVDbnSPfLuLOvNhsPvqB0dEg0l%2FDJLBFCMc4EbNzmkC%2FEm14qorPg4ZxNC9NxSVlzeJyDYZ6%2F%2FbodOpjUBa5O8SWKnWhB%2FHkj7lBpZQ6qzpy0JDOZfkR0xOuqjnVo%2FjsU7EQ72aJ%2F%2FRSbQQJX4DFsKCOIW6z7tofrGetbEHQLgT8SeK6CVT2j6o2VtQoR%2Bwa%2FAyzGU3U0DQKrG8D9KIUHyDNwZMqucGg5gMLikrb8GOqUBEZVKq3pf51cf7R98nufC9ohUGWOkr%2BoIDwRzITlU1PlZXfHH2cf1ufPozSE17ZX9p06%2F22CBBwA%2BHGW9kYHWhwrgzZDSjCZsxD5Uu2TDAv7IGGC9vhupAFzfVxvVIgMkWJ7WE9cknlWLSfd%2FoUuJ6tVTKHfySDU1U6dfhDyv3u54SShYisWNXyFs626ZYoQ%2FTFTNvbumElIf9V7ZsvCMcZ6PPWvr&X-Amz-Signature=6066ee362a1ddde5c9d5d5ee31294be2fb2ba6ae0915cabfc40fb9a27511e572&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
