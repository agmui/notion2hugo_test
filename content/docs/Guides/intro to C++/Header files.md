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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZ2MF3TM%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T061119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIG0MuoRZaa10n2kdz3y6j1Wgj%2FGtwmhh2ViDetMT5nOuAiEA8Jt2W7aM5OmKQyK6KAf475fbUSTzdL4cyj3fyat2pLEq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDNbtGyqAhTFnca6ZZyrcA%2B9q%2BoW8r2GoX7yuaiXeBdOvisuDkTS4k1Lef0tEqXz0Ct%2FNs0bhRwM8pd8vhSrp5gV2WOlZv%2FqVlEUoLD4AzlumCj44xdqsJTmuvlpjNGDYNGZuVMLAQV2obmJ%2Fw6q9SvcHN2emlmKjNbg9TdgB2uTautPokNuxXZrDA6%2F66HW9XAplOTKrK6c4qhStNM9bnU0tRC7kOcJsgF5WzrrZRkVNSXhl898AKp4jfjKPKUoYCU%2FrEDqPiviYbfzmGXVmXbXLyZTwUGV7KTen34v6%2FF2korvVDTIF2%2B9VAcld7bPxwHw7%2FG9wEpTmk7J6AVQzazwATmUAo5B%2FQkBNA7VByZe23gBhzjKlp6BCF%2B%2Fpic1cAi6L7qkSxu%2BXAtejdulvIvap1JWcMEv%2BSAPogkjLfa1Qw4Oui8E%2FaK%2Bpc%2BaaiKzCRG9Lsm%2FmQpfD7GgnXLZASNmROu7FMETchiMO4wfp0ZyBghBBLVlUga11%2FQGH5zzmE%2BsIRZoU5mxr9OUjYCqK3GnfkkhCutxTkJEuzUpdk9h1BwQcEV4Pr985xa9MDagSB73g15%2FLT9jFuCqZUlKIAn1nCeZRdSoiB2oEM6qtbMB7uSvUUoi6UAf340nO%2BMoIwIVyvdnosOi3JlV9MJHRysEGOqUBZr1aQQg6Pe%2FNDYHJj%2BNhunfCZRqIacSRFx7Jpb4wYYVAul%2Bk%2FEBKzTCN3LfvwjWwpurwrePlydLRobZkIDr25DwzzReudTKDNyrrZbd3FWlsiyTeEGq9cdJy33HhnyqDoZ7umfK55YeVPseuH8%2F3eENHwmueu2o6huWjV%2FE%2BEhuT6ual6b2gjkRcQ5%2BrFSPLJVDcQopzTRrF2V0Bs2SOjZWOtfPw&X-Amz-Signature=5fe59791c2696d6203c8e2aff92536be565bf7c1b488e7c9249a3d4561a2f648&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
