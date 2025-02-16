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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPCJHGSX%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T230653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQDLe%2FS8r4hxrORn4tbkTo8fY0RhXrAXiALt3osgD00XwgIgPJHp7c07%2B0P3B8l1tJEIhcOHeK4HDuY36cD2T2K2bGoq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDFJmWahxnH1prkCdfSrcA6MplySoqI%2F2vtsGfDnPykeIj%2BNcNo%2FZUKdpKtDkZaAPpGUr0pfFjLvR2BUpbqBWxDG1w2wEQyApIKXyy6X7%2BbHSutZsmrJ3r3G4ZzQR7Q5JHwzg55MGe%2Fob5hlFOjOG70AOZnK5XjwrLGSOT0XhaHz4hBpFxENbP0izzQNCjH2Nukt1GWGv2zRJi7ciTzvrgKr9yeyTM4HaJp3KeAY5Kxbbcj%2BsWPrXLXHqQNylukMPY7wuJ%2FE2D8StE9xFLd0RTorH6LpsDqISzv1pe0OVjPVcUR8nl6jcGoBetDpqhZkMswlsS3NbUtctQ%2BHJfq%2F9zfi4Q%2BXDi2ZZJ7SWOOEePbrkDVWFkh6Gyq2Bl4L6uFN5oLTaja6xkiBY%2F1XmFdgXZaZbr8GBdmcmz3OUNCiLFR5LmnMhJ%2BPww%2F2hqVOLtNFhfwH7eDnDjOqd3qhxqheV%2BuiJnZYGPfQIrIm1kWSgO8HNii31H4CdYQVpqq4zAlnyNOtqPPLMlb8mu%2BrQH0fxvZv1dsidneFfz7PfgtgGbPpcIGhLCdgJcNtzGzfcKU4usBJvw%2Fb9jgd8vZoY5a33qnlZ8W0Tj4uZ91Jk6ZhGWmkcXXdqn05CFv7RNKswUe02rFpSO7zaqMlJSVoQMKnIyb0GOqUBXbB%2FKDUoE%2FIP0kR7Tbf8omB4H%2BsrbyDOTT51Pts28%2FDiRZTr8ywem%2Fg%2B1BHkSDrdW7K8XeWaa%2BbZ%2FDifWjtfUSp9Yp5cE7TZ3wWM2UBYWTDXwq4MW0XA4EHuA%2FXZvk8zhOwyNMb7%2BnAbqTk5GmDDjh6WVj5fWde1czpgvxgyRDV8ur9KwucveE46uTmkIQbRJaNpPjQqbPu1aNW2ymHhDV37QVGX&X-Amz-Signature=dd40c9d524b478271663ff01907005c952bdde145265b64a49e32734cfbc3820&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
