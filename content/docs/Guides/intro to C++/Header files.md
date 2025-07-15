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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZMSBZQO%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T004541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCIBZ0e84aiGwGPdVbdsRfkwi6C%2Fzh2oWczb%2BYTBETXjRnAiAROixsUitG5TUsT%2BYQiRPg56nAN4LWN%2Fyk%2BHqmM4cG0ir%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMOWDGwoPk4eF5S4suKtwDNOs80HJJ3ioewPqtZ41z7rMDVvCUrKUPx0Mwkiyudtxk4vL7J37eRNRW3C%2F67VIYgW1yUWhiSVFcT7H5bRDBzlNxQh7x4gnokzqAT9%2FEe7b4CdfH1JCHWcSckWw4NbQ%2BK%2B3f086FphJJOzwQDIYPTm%2F5fpCPK%2FyGKi0VDRRy%2BbZ3YAepwvNzG5qCkJqr3I55ZaVKdFUl9uAvz%2FoMCBh%2BND1Ozrsgeac7fE%2ByTWxiD8k7UQo1WjMAbKWlazXHXgp10ZU6by2gC5ZqG4iAucvCidsmb2Xe1sv5C%2FTfQuAkA0bVEXha0LxF55Nvi6zEyA4KGnl9nfuDDff%2BW3QWzYxj0gEYLoERnpFEFoZVZ3yedKr8AD%2F2dO89ZA4dEtxnBOJ3FX5YnSOdsKu76gEu%2BBQshSTR3Pmml21%2BByU%2FirirxDR8z7gpEHiEz%2B1HMzL1cCMLMSg6APyQnNeOwojqn0Is9cHEuK%2F6NSyn7YxEfcXs0D25FD4e0BVnXj4mdzKMJBhf22WKq9uDODg%2BDUY7GPSZJ0QYKcdCUZvp0Ntzk7FBVMWmFxm2v3h%2B3tTVRQCwOn3%2BbU%2FKyZM%2BDqpZIi0BCPOT4eIEsT2sJhSYf%2FFEuHyVTFj6rW%2B9%2BnmGnQrFxlEw%2FKTWwwY6pgGMvfKC3%2FOz%2FyeApx1RQnb%2FhhKbXCtS%2B6jGH3eleJYNjvxtJGy0YDuHYHXKWj%2BWumHYybvC3FrifNveU9yl1nUJGEsxV0JjXbxno2MZfbmaobbVLX07%2BOiaMo8aXRbtqunc1pJ3sEXpxU6pvbuSncp1JdTA9xLEo1GKSYYaq8dKRVW07sR2jSZl9KYbgmXVpq4UvAp4eETZo1G1%2FV%2Bl%2BAYl9xfR6YiQ&X-Amz-Signature=118c0751c000dbf4aa3e139b30155d722ac396ff4ca0f964fc51600360a067d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
