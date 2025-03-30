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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LSYS5DD%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T230659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIDr4Es9ziBcj5rqPQhGPXZkcnfVdPyTyRJV%2B%2B%2Ff09pB3AiATo7XS4nCFomI25m6MIltFxXsVXRnv5i30Ic7vfZgI4CqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMN8whIhRDmsXfYZA5KtwDXxJenZG5rv4yxmjTXxsv1kw%2FFBvtB%2Bdo4Fhx05%2FkBZkuu829uKbqSc3wMS3r1MHWhOjq4zIS6tyeOWjzuqPiTpdaWca%2F06Eb8s%2FgYronQWk7bL7eg7FrGTIK6ynPH1m7Y9Gi80DX5DhWmx7PvBnnLjnc0zxNluEkim4820A2asxu7IliE9MiZoyhefc3oWV9oxL9i0C32TmZiRcCzSdBdm8q43GPs0XK80I73751iRlXKIK3lD7RQWewg%2B5WBfTaCoZWjGRvkTdTdoxxLeWwgtW4CrKpUbkJtgKDFLeC1IfmhSiEfz%2Bs%2BXxUTbJXmVg8AXYybNSI%2FJ503dI8H8q2b2wY%2Fy%2F24RuIt1BvfjSWUJwuMo7Kvk5qLTd%2F2B%2FH4iy8JAso5zQB1ZuCudV75kyBGZKerqw4xKdm9%2FFSl86qG7B7HSD%2Fy9VydhblCltafQoh1OakIAiV3kI8Hch%2Ftz8iHtwXP7MPv3JPcpkZSdNGelLySBEIuBLfxIB2j8FJ%2BSGRCU16MLUXmlOFNoxjmACoOLvWSKGJjLRvAlZJonDGyWfvE6cWkaw9Eb3jXZkiBmECVDt%2F3%2BqPTTQ0s2haFd9AQI59JmOjAKPTtvd%2FnfmS5A7XszfrPJwcbTrSwzAwiIanvwY6pgFuiTrXbYCeIF5KzxntlHMrq0pT42sYCgMgeDIsFzpoZGFT0HV%2F3IgI0bW9sB%2FXNJcByI3tTDOjLnazBzLtEvoHs6XA9WSpD6txq7VCUdjy9EmtJwxz3OyGlqzWIshv%2BTONc%2BZgQUPB4Ywmw7lfq7RQiylX5cloyDmfcpsQKhkDAzmtCGSWYAeXdvCHL17HT8KIcXXX1%2FegJnKzkNfhSyiab91R6Ue9&X-Amz-Signature=b7c3c77bdc4484d523fe33a543dae23823b7fc38c23f41d335791f1e0444a958&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
