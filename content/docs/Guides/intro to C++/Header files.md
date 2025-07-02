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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466264FXK24%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T121602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG1TNsmUbcBfM%2F8XLDx%2BekR3a8UEeobk6ShuO8wEG9hcAiEA%2B%2FkUDu9fFn1J2Fw9Dks%2Bsu6iL0Jwk%2Bv3Zc%2FPKe4d%2BgUqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDCZexFzbLPEtEo2AyrcA%2B52CF7QC81HL1WyS96cc7xZGBdmt4wkuI71fGsMZ0wQhohAz8oy6UMP2bGPqjqsS6FHYSDLqPa6zyL%2Bq82anMRUtEY6%2FlGHOoCKyxtTZmEGJ5zrIOznrTgEL0W5QYbOWCqaKvwKinC6IfxE4hCUWSy5oh9Vg5W2tUGbt3PmPWMgMNnkP4wU1qacqydrDMQ64f8aM%2B%2BmfYLu2BcgILtNWxNfkIwQsYSa7NuOstsbiyfw%2BmjR60j8L1%2Fjq1AmLbuUnGCoV5GoFs2XsMF9917HQ0AlU7d4Wrxd%2BR%2FIhfsK2rrV6WN1YI1W13yJOvLnv7YCAb5%2FIPvwnUeCnfp0Zh3AV8HOLgc2zbqOSBAngeAv5akmsDGizeppiHsCi0Qz2S8xUjhJYLzYnFgaj8TyTkBz9qYa8ZYvDP9y%2FruHPInvnummO4A5wOE7e0w4Fv00PndPqTug0ryx5061CFtk%2FYVWU1qYxveeP4AdXSf0Sv2dga1MCAAZRLIkTGBsHlojYsMZlbYNXkRHU7Cj%2BQ9f5Qg528Ua6LE9FEbP24HaKMcXqOsQrVTl3Vbx98lDpZHHbSyNzJFFX9R8fXskxcEicByz1v8zNOHAu7tQoju0pXwNQunn342Pjp2MEJuwX%2BItMJK6lMMGOqUBZ74u%2F6sWDdl1cNJQeAe%2BPRRSs%2B5ml3EP1lbDLRKR70%2B4Vrh6yncQTA6mT3FHVr9XrD5yZ%2F2FaU03lj73OBkPlxNjE%2FE12Bwygejk5vumeJ%2BYfo7WgyZ4jTNmignovWDZndxZEoCSUWT2lJ48YFE%2FYREKa%2BCoAUFjOsipFNkrLHeIwq%2B5zFsW1sa4JKxco29cmLEfODOChN3bJSYuEIcDiqdujGAE&X-Amz-Signature=5a3f845cbaf9794746bf501940c9e35b1a713575b8a6093c1f288d060e4e535d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
