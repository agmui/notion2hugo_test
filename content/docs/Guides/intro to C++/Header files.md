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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4TZ6AWZ%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T070837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQCbDtq3kKWtsnbmBRFycC5YkURz8boVwaSG3sE9AnD8QwIgORIzDmgPXUbowCrrPAWnrQsZY8Sl0XjM3AmKoxfEN14qiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMKM8lyOXBd4lxsLISrcA8yTgvPI%2BZpD%2FU8w5G2SFqn12GRqWw9xEeKbOAdUVwC9ZFw7PRP2pX%2B%2FtRgtQlKw3omZkXhn%2BOQ0aIWXuVohHxTT0c41Pp2%2FUye4xa0f7r2H4dDPcJClrFXvzBTVRocnnlc7SOY3KcwfSL94V%2BxhfaMsL%2B%2BMGjTLZOpRvM0%2Fuv61aPiLtJwYKRg2gpKEILOru8QgGsINonja3uDG5%2BVpRh4lljUngz5%2BiLwlG32m%2Ft9LYgk56cBNLWUJ822Q%2B%2FkLp6q714iGq8UaeXZWMcVFbYJFtOV4G%2BcGZwukdBgf18ezqHd%2F6nB%2BFq9fw%2FkYgNMGWxYE7CpQpGvJCkVChoy9J6cNYGdt1hoQA4pVSX%2FDY0z%2Bfw1ecUJgsVWs4hff4IE1kbjDeg4bB190WPiLwc9M%2FB%2BCSFS3RfSzzJaqtVxzFgBxmMQq5%2BWnu%2FUXFmspRAVCA2PIs7f0U6q12kV%2B0BP5BXVeWYKPTc5uWrgPLa5dC%2FWvt1N3R%2FB1NqYXbNJF3y8zmT4uyMuuoH5QS%2FjCn0P1W29DDHgJVdjSsGPB8wfazoAzCZcCHvFfmmJ3g4BPDktIBQoBE0KWVs8J%2FVQfZr7thHKLLiu6mYbAH%2BrBAfL7LM77IO0GWrkXnn23XlllMIL34r8GOqUBjjGvcMjHRDmIhYeJ8Quq3VTAfOIeBdNOnmnVpLQIb45h%2BC5%2FVo7er3L1mKfydxv%2F4nRGkggnPbE4pcVlC45SKSB9C7pDQ18Kauj9HeDOjEhnfd%2F4YtWlyjuNkqGxwIpLCgK8eJ9hcbj8MumFLEYsLPdlCJSr5dFacfQiAR9Bz%2Fo1ko3Mp955YHFM2IJzhhxEld%2FQkgdIS%2Fpt6ocM4k8YQGmbAD6I&X-Amz-Signature=24b56894f6118796e4862815324121709050eac9f75c4ab52c48644c650d0a0f&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
