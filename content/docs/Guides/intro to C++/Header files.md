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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BPRJG6I%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIAtfXP7NSrfX9y9EqEyi4hKbBjawmIdZzgvY2997pmZQAiEAyIrGEiCnU1O0HR2yUBtQD%2FH9x2mk40H4SRQgdihy2Hoq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDHKPeLVOI3HNJ95j6yrcA%2FQLZCVfFSbUYuCTuuv67nXLG4UaxY5nAD84mXs%2FBflUkboCKbLE7Mco5hYvyRxWLu1b9%2B87UoYyqSki1%2F9Z84KNO1x2vMwcLaD8%2BdpmDPgZH21dAZ07xAwf1VHCzbq8YbgNk%2FByOrRS%2BVCRPk6N%2Ba3mfRZ8MZ7JrFWcrRUHPCWYPDe%2Bo%2BYJjiX8EWBggT4FnoLbTSY15GxjzPXlFspgGDMrM%2BdABo5xatcQtmJi7hefL%2FDjiyI46j1%2FWdeXiM7hzxoSIGW9N%2FjPFRRH9Tt5i9s4oS4toFq0cEVbo1UoVf9e45lk8PHegTkS%2BsAkCEXFZefJh90PEvxtRSfPZ9%2BAewGMyAv8Zq6yMOBTOQwO7EjrAdpjQykLSLYtd2q%2F6gjNZk6OSWaD5gvPrADL9NE9HFCLYRoXg2EdVYrrTeA0yYIe8%2Bt4YNxIEVuJa4ooMi0GG4K6lZ87qqa4e4xBtQ5X1ryuu6UGXQhiOs%2BTvubwXBZTSOU9mKURUNga2lx8ckY3XMdCpSk6tdkl32U2qDypEke1lbL370tZNc3UsdiR1JTSUw0Huja2XqII2j%2BWtxaunRv4DER888Y3wj7wxfuCfZMmZgVNfjlheXFRi42bw9CKyOliNHWagPca7wL%2FMO%2FOj8wGOqUBnnUrGnPFz9q1EC9rizpHjAvJg587fchgzUcMiNc2TiqLsA2HILUdNs3Vzabcrc03p5xphilgKNCMUR6iG7n1NWThVBAVrR8eDyqdIi%2BQaYSV0M0QuVuc%2Be8Yjk0fRMrvSvwZ1RO0C8Ikalb60%2FTqqo8CKyvH3w2stnGivyTWgpUsKtTvWoNpnwQvBJs%2FXOMYCiuRKkJ0o8d1EftXMCF0VKIrsbu8&X-Amz-Signature=3f706d3ef4f79ffa1d6f1fade22bd2d5f6fd61b7240dc6972e6ae7551a3d17fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
