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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RC6FGUW4%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T161138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJIMEYCIQCabgIfpSc3QB80D5SXEDvYLKVV%2Bo1FbThsTfDsg31Q1wIhAO5KzEeKGturfZ3Ba0gM04zN4CgC8Jn5YFcR9gKrKCJfKv8DCEgQABoMNjM3NDIzMTgzODA1IgwRy17JwZojbAxRVBUq3AMjw5erFxIMu5joyHO0ZPzaEccOMWkL%2FHYFZfKEPioDASXX6R0Xq%2FkYFK1YY3QVANS4BYsG2%2BsEBYBhHb8Cb1B4GCdJVmlIg9dfNucpev5sblbQhsaJngQuGl2%2F2d9xKqa4xDC5JQypdA8kKU48ZdHB2D6c3Sz8q1ko4%2FEu4Iu5wlw2oIS1xvuksk%2BCeUqOtFRoywlP2RR1NPKhWL%2F72kYAWnuQ2Y9Bjpy0QLMLQc7DAoC5XIPc3Ju7P3LsH2h2jZTV45aeq0JHqcgWInt1Q99ZIN%2F7EDgvH%2B%2FRRrlV8b3Z%2BYvf9I4SIffcnR58axPiiphRVfMjti4Bl7V%2BfcqYZ5XWAhDuufNzoNYK1lBFtbK5DuYFF8EPAHZZSdXfMvd2zV19CbRdEae2f20wAi7ahBQJH%2B0A%2FTc73lWrBEPtgW%2Fwkf5%2FzwW7Po7XAVzzSk%2FQEqysGwS%2FWd5L160Dd0FifELZCxh7obmfI8Akpm0uSSPtkADwf3cntCGUGjUMlWTqn%2BIBJJLKuA%2Bq3%2FsjoceRviTYAksxp6lFp3REDvyNyStN2%2FAVzCUt%2BzuoqBfCje1bQEF%2BrHVq032QlrdUJfJtpgCdczbimN4wFRgoOEYbPOkV3zV8Hga5eO0IArs3ADD92tnDBjqkAap2fk18hLWFvZ5S%2Bde9hwuxnlTgIJEkdfi2lcMnuy4q59b1QZgR6jpOYauxw5Sa%2FnlbzKrdN5776pFnYF6R0kwavK31zzv%2Fc18l%2BftHwYb6wSvcMlwVbF5tXr4NJOX4vSbdeGv7BSv%2BhK85Ck20%2Byx69dabvrT%2BCBIiEABIBZs3N4Jpoda3sFQPs0ctGNEuaOYG4CQhZBRn6HUb8o%2BsiW%2FwIKMM&X-Amz-Signature=c61f41853fa7aa85d8f9a5503fa8ca229e3226b1d22d670a6fd124be2bd7342d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
