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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Z44PAGP%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T150705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIHSfs0i6xTSQIxj59QFbywD3nEsBiMM06frEm9sygTDEAiEA88UUAmVgIvjeqPoMEot9xfeeZwB0Tr01WlIFPgVd7eUq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDNkEFR9IOVYSuLJCYircA6%2B2hZqtSksRbift%2FNKFu5ksApFLzMJg07MYfDQlCLXlpYYlyACwBUru%2BbBTl9sd2UGrd3JzGiKVgaQGua36MH3%2F7l9m6vTqUgRc8otC1iVkNZo7iz777ZYm1ibDQK%2Fq2yTYxcpSeSFkgvp4DDDmAEkTzsccvbZFY3jOQWDOcqOwfTfa99d3E3hcIJvhnvH%2FD7SQe4EspoGPDbatqKlyo36M4JX%2BxrtqZQNgW9jUcSnZnofe4nxzPMoxSESkiINENSG2BlEt2ha1w5TUaofWG%2FR7aYRbgDnLT9jGluhCzNcEFuacoGzNb2t4p%2FdiU2BtrmmgFL7nvpABlno%2BzlazUih%2BPUHnC9dSiSn%2FWA7mmZaUyGanLiWjcfl15gR9ti77Tz%2BmYVUWmYZfJBcCSpXQdZ9XRTgh1SSBFbSaAx%2FXmpaLxpk6zDgcES8X7dlRrxyov3unfNlmsmSrHyMR1mCICTgHdkG2GApthaLJo%2BkNEG1duv9qmrGNuzRXRT7YlWA1fdvE1mi0fhvOIFgsmSooWJP8%2B4LJVmDWwIElh5ZRKvLrjZDmug%2BBu%2FkYTGue4caoDywbL9cjXvk1cLFPgAUTOQQRFCd2Z9U4g76uDuRNXoTww2n5pyEHTMsCuL%2FBMK2pxsEGOqUB%2BGHwig9OAks25cQ0wyJI7oGnJu38TE6P6qxMsx76hmLUzv6XVW5dO8niX8drd2MiT3bE0zaePnFf8k740b5Ke3XhpjozmLggpQDoU2ksFb5RO0q%2F4Ho85tq%2FUDeWSoiIipiIov8uIFgv3ga1Y8xyYLZrxMf0SlvfmdAV9MoJ6%2FyX8BXWX%2FmLUi2QDAPeHzo1zpHrikBYymCUoSwkTHjTyQFAKqrx&X-Amz-Signature=02b0fbd05de66bddbe88c1e8e6afe060b0b5ac0a1291832f842798fa9c207c28&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
