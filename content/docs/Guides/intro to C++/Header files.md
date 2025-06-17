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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XFPHEVG%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T181257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGlvVKSC61po96o%2BMSWWO6jDvynOmwyfzsOQKKsj9Ls6AiAt7Oi8pFuE8i84vemQ%2Beof0cC%2FIk6uTm%2FdOTfwO4HidSr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMz06t6TaOD%2BILEve4KtwDKpvnstj7rWmoUVV%2FNZV9dy7Me8EHbFkGXb4k5DLYEDjcN6i8knWCggLx92WjYLWfto%2BopZ5BcnrDKfmCgERV6hPR9fv2cZ6mWuc3sO%2FTMwm6%2FPpVE5j5w5w%2BaEr93sYEYV2bb1n%2BC6wv%2FQQCCT17K1aK%2FMVepwchLURZPRt4Mr2a2%2Fm%2FAKa5ZegHvCi451XqLssQ%2F55SZdx4%2BNYnKdtIPfzblXhg92IR6O7RdwCENZHlK%2BOxa7O%2FPnf2lrM3M%2FQ24LXMJpTv13sFGclFxMpm0LVkanhkTr0Y6rVDN9f%2FbLsFx2Ij2zoCgBJVdW2GcGiMDVKKfCA5NrXr7tfoGHlx1ZWVrbOM4B%2Fj3fYEeb71JGuA%2FkfXiMh7yzVS3%2B%2F5spbZiEXJvJJrwhq3nxXxGSPjSg%2BFkS%2F%2F3cRKC6uKW8eMWacnpwe4vpcJ58spTm6ImwEImgZzsy6DhratN5TaDj23rgHd2nLA3UWjP6l6iB5k4MOWUb9N%2FjzLdkCdu%2F%2BITxNrv1beS8szbNsGFU39ZjviAR7%2BMgocUCr3rTy%2B%2Bj6w1a%2BXZ1jJ4lDfdgtH9lAm8jjjLAChw0qx2ZDUSVbTOV78cWw5EDQQ%2BRaKwM0wcDyVSadG51iuNmghniMcTZ0woLTGwgY6pgHwYWdEjXPg%2BmmmGUjLlQ3GIu%2BmwAc6oG8j9TAacGqV%2BJGUFRq2HDBp8btntidE5uqC2D2xQGf9WMzCMs%2Fhj7q6HjM84KEJ00RAzM6Wnzr7loe2ZQ73UeqTr1B7X50QgdoNdc6r21ivdEWo%2BD1Coysb5do5ifasCd6N%2FuF8mOUmbq%2BYNZxSwv6TzfqmuTIpLz1tRdd7LAeJO%2BNT%2BzpsvCRNIopNPqy4&X-Amz-Signature=6229f485aab35bb722fc0e3597b76d26ad50fadbdb368a0a9e98d7aa0454ae64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
