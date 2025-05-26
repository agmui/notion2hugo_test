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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TICG3GW%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T121523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIE9Q3YWf8MJW5sWUDTTXyz65qw1PQ74FS5RabJufpVtdAiEAjb3q8QyX3lWzAwQn%2F7JXl3Gsx4i7y6f%2FP5o%2BDsb0Idgq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDMPgdcIZ4wsxIU%2BONCrcA8I4nJXM4%2BvHz%2FmZmRhH%2BwAONFor5CBcgThIhITQ7LSInq7PUQPRqrWJwcahulQ5htjhKYsl4d%2B2lKkADa1q81BIspmNSRJ2P7p3JYbSUfeTcdTkgApFE5%2BAtfP3bTD6UgEbfjmYWvkc8gzd2TqfR%2FPB4zudCpSuIm2UF4jheCOt1aHO9i6buzahhLFnu50YQEtRE%2B3MRc0vFU%2Fr%2FwhEMEusWNaYN6dJKfkNT9OSIWonA6PfucOk02bDgcxnUR71OGYz9pyA4dunG5LXd1E5%2FpRTf55MgVyh42UdElpIXVR%2BCobFOJ%2BCdPHNBpaAaeKuzB%2FSBLFKXGNGJ6%2BOb2raRJs7O95%2F5qxuhsKp92JY1v0EDYaXO%2FxYE8pUTf0du0onEx5jKORm6DxeAZS%2BxvXaa7D6PgIx37w%2Bqrvc9IjKM7u0HnElBPQnpEsmexHUM1yy3Zuc8gORERVTO4ycO3xtX6krqvTU0PmJVdPIXA6kz4cO%2BjWGcJMTAedtBgq2yeXo2t3JCLuodl2BntCgituCvJCkn0JDoy90Z02GeXbM3Jg3%2FY1E%2BRf4N%2Fc%2FEGJeWGn8RKYrSt9Jd1EariGsAtPJCn0XlHwaYcNVOV9bzmiuOv4PjVES7lz4Mntz0OwAMOqq0cEGOqUBKCUEAdIIcVm1kr14MCcqcFf%2B%2BmDz0k0m8Pi93jyDrqqLs4mcIT1%2FQyulbZwoz2%2BYac%2BIZTFQVrLmkrLa2YoXgnkocqmsArHirrxFpXfmwUjuaVqw%2BX3t5q38dE2Rf%2FL2WsriYFZP%2BZoFrX0IehUQ%2F40pw7DDWn%2FXShXKbsnBSSxmFGOcrBxC3YJbbebvn%2F6w11pBEMrRCOsFNfrHovcKr6RR2AYY&X-Amz-Signature=a1c821e8fffb51402b42e242b3f4d18300524dfc0687489ef176655b82a096d1&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
