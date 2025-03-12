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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SUIWLL3%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T190201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQDrTHlRW13PruJyRMbBK%2BULNXcf4wiW%2FSAs83jzMjYFEAIhAJ2M4mBQM585GDIo%2F2G6dquhHrKgcD2CYxRcBtXfspLOKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwMpxw3LBSjAXctvUsq3ANXJf1Kt68qHz7P%2FMSDgPp6u7hsfA%2BPgZGJ64zME337sXcYIJJVYRAHF1j2DjyX5R8m0MdHAoSzrxwylw0ZushTJjNwoXQixPjLmv1AjrGqpJQ4GxAPqUngoM%2FOarpr7ZrjJEZ2PqqmYOBBBP7MVXX911lPW6gT3MR45Ei5bEVvZC9mqjGCHmNkGM0wgDHcIw2QimOVzD8aLzdpYm%2BNaIz9dtTm9dsRp7QT30eXnpeRIW8d2nQKoDVs56knwYNdYhjZPY2FnfUi%2ByS70TvL%2Fqnq1m%2Fi2Q1RMCpHG4HI%2FDkp81JmaL2v4GoK6UeussAncofEx%2BTgeynp0qIZphQ6W79IRZuZUbh%2F0umWPZyoSpxj5l%2BI8WY%2FDNhVo%2BtzTQm%2FY7JGD3mv2D4GE7RkCnEEQzZ2eUqiZb6iIBWwkscPwTAc8g7t7awuABBoIthTOfNdSfbLcbppTunKGrzutj8fRzFDNF9lAx17DPMTKAVAzRlp2Sqw6UXgPD1%2BZ2cONJJlvQZyLjWLPYI0rdI5hVzDRyBz7%2FZtlBtmmNSVq9aHMmlNHYg8FBEu%2BTbiyCiDk68%2FGf%2BXS2tMoyV2lbz13yQLsZLPSslDvEVykvbOWLZas8CrBcxsIVbIuv%2BjNVRPyzDLose%2BBjqkAc18i1QSJ0GoT%2BQ2HfxVqRgGhK99%2BmyHJeeWcqcJKlJ3vLc1Q9eACbdPTcQ%2BpMvChoxJ8Y8gwyQGznAV6XahylULREHeiKTF3MGS0%2FMv6D4dlDUKSWUaxEH%2FtHK6%2FwjOdhH8Cd6S53TF4ggDyKQDoeZD3Ny9kRqBIt%2Bte0FvgetGebd2KxlNZiIBQenHinpEIZSOp5Gsp5NfmgnJkSF9uSb1BW85&X-Amz-Signature=93254d6e8cd604d2638fb93fa878658af31929bc4b20140e02e871ef6b642783&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
