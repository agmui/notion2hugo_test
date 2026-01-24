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
  <summary>{{< markdownify >}}Why do we do this??{{< /markdownify >}}</summary>
  
In C++ we can’t use a function until we have defined it

**EX:**

```cpp
int main(){
	printf("%d\n" funnyNumber()); // this wont work
}

int funnyNumber(){
	return 69;
}
```

To fix this we use forward declaration

```cpp
int funnyNumber(); // forward declaration

int main(){
	printf("%d\n" funnyNumber()); // this wont work
}

int funnyNumber(){
	return 69;
}
```

we say “Hey C++ here I promise I will eventually define this function `funnyNumber` but don’t freak out when you see it”

Here is a link that goes more in depth: [https://www.learncpp.com/cpp-tutorial/classes-and-header-files/](https://www.learncpp.com/cpp-tutorial/classes-and-header-files/)

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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6E254DS%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T014526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQDRiThJ4FUz8vp2t%2BSZxiiP56LMiRZo6IKVG4vNsJkUGQIgaEr1LF7skIBoi9X9Kn0G5XBhaLw8twmxkmOl8CwU3Pcq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDJirOnXeIBYAEF16GSrcA5pTfIOrfs8GceVWs5gb3jZ6WriF3q6Qxi47%2BxybbHQWlWeZSwC6fZuhr19OC2xcfmzx6S81bh0kBcOj4ZbpLdl4nYt2nDJTxeRnCsVSkVkHgOmksEMdvDT3nz026ZUThwUmHAVFqf17Zyon1cOnzc7HuinBU8Tikl72trEb%2FBIxPCvpe2MwUqwi66YBT7x1Adq59SARWDYYO1E3F%2BcT1DfEPPiBZDgK48Q1pUDQKRQNsw5DpBsLS3ZBLFw3r%2F%2FRTWKCf36zDeOB79f3Cegsaaj4UkLkx8yovEf3nUhCLhvnp9S4s6jxY0mTgdcKPUBn8JG1TsMFpJb58PWW7b0jxa8Q89%2FsBdWe29i2K4L5KPkNIY5C25IEDtApzYuFSFYKwpgFe0peQL1z2GHh8LYzO1eFc%2FkG01KB3ixUxAFXmY%2FDMDw1l2kfmdNLr%2BXT4keVahnO%2F%2FEVWBDPUnXwaWuCPEKlTPwM94hZz3QfGvtyBVwGkcKXszpapDD3%2By8GphKYSX0fNjdJ3e84hJsNweqvnQJWt5xXU2sv4z7MNYCtdj%2Fwbl23W9VSHEotWj7mR%2FibdCrpSlejwPOHGOBzFlfcO7MFcbZ5ieoP%2Fo2DTBPekWxHOiYUdm4RF%2BkJ7V1FMOKs0MsGOqUBjE9ZVxm1%2FljFkgJWMYimAFU8jNTQikC6ckTGs7agVLZLY3Z%2Bddr3PPysA%2BF8CtLNgnWXMFwK8k%2BJMLAzDZkkQI6rH6GkBgzjced3w8PaDW8qo%2BE156ZkbHXiz5ag9okDLlGUaahjZMtasSgN14PeyREnB6Lb56%2BNTHs4GdK%2BQNy5uU6Rz%2FKMoYXTFXITG5NyiO%2FleVna6aNRWaunuFZuvoizLzc0&X-Amz-Signature=0cf8289507eb00e54f7665483058587cb228848efce484cc8c8c910c922d3e0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
