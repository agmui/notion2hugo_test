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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HMZX5V3%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T100849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIA3Av8441wZRZ3CPi9V8IceSuhAlVFp%2BMHxRvebo2XzpAiBK2F3kE4NTOAmiOZR503th3NkKCxBfUKDA1pYty9Iw6Cr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMxjrXJtRQ8YayBvQtKtwDRU8g5bqz%2BaikCxzcHrqxblNHVSaE%2F51RlLdgmx73Y%2Fb5fsT5bvAkgl6OURUk0ZVHNz5I%2BLS6Rkd0szG2SkdDVjmA%2F%2B%2F%2BchMYpg1OcICacp8wZruGWMz2iT9%2FZKHtheNfcF8q6UdGWHuG%2BGxCLHaUoh7R62A8OM6fj487U3sI3BHO27tniAjwQ4sLyVbX%2FH2I2GBBph3XvbxLPkTb6ytVWVuyRjLfoe%2F36nOrwlDNh3TbKZ5zzPcuofrocPc%2BY4XwZlAtxP7q9vFt9ksDR8o3YMfZEdk8TkS0yeUD5j5WHZAsitj27K7Rja6rqw3bZENFpzpa4c14BDnTJM1nsKAVCsAxWG05Z8CdaImDwscVBWEopH7dHtRxmwdffSE7SL6d84TWLO7h1koY7HaH7poAC%2BfKrd5RWVmG0tHWUWp2TZwoJPPLIvTWp4E1SuN9Lj91I9YKWJfj847A1RQsT3gxxsNwrSOep14GPVwZ5al0F3vP4vHr4%2F8ixSMUI0JAt9Sxm9BECb4ZBbL%2FyjyU3lnVIf19L5nSDbUKkzhZysg9R%2BvtNdvfLiW8XtQQVQsqAsfpsbpV9fvcTCC24ovA3eJspmSphCm63eb%2Bhb963WXAXsvhcSD6Ajb0jnSFedgwmKuSxAY6pgEXzabiqouveigliwPjGL7BO77Y1O0xg9qD4lDh4mFucojmn49P3eimX3u%2BBVjfIspfG8bFbHZfc2zf4a2LmuGhfGwLQE1BKRpWT7FkQsgUUvD7UW6zJYM3gzdpCNIOo%2BP%2BeJMch7U3WLxgJHTbcJ83jwW0Up2Xmxr2O%2F0N8fSyOXwa7aLchmH96d4u%2FjYoM%2BTZMsljxbz1m0iiwBRC1pDvrcDZiQ8f&X-Amz-Signature=a2b9fc929ac3bc8b7676ab07f3c67e81fcf5de6f79ddf8f9b62b73e22b8ae73c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
