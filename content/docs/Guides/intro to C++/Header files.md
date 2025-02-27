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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HEKFC2B%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T031649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCICf%2FEdhe981SsUjq0sSHycnvMACicm96f9QHAhmCV4wOAiEAmJwzw4EwZnui231vrGZoAit%2FvyukAAUQVb1od7hq2Wwq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDOf6an%2Bxt1GTXWnhTyrcA3UYM5rjFJi14wct5jm5NQ0F0Y1YagZB%2FcA0xcXDvBsB56%2FBs7iib1dGVtS4uFvxf7vpn54bm1H2GZ7ANd3yE%2B3W2KmOFzr2h3Hr4L77Yvhq3Lthh%2FCFNuJTSUeJLNAQvatYNW%2Fm9Pq51CUC1YXoRNJFEWnWQP26toP3QIAm4rjmp86%2FS7oSOQ9Sqm8qqOcdFOh8Zzk%2BZyCoEXQ0vNoL1eaQJH8qUIEJjs%2B7ZjCruHmzUm0cHGtOz4NiDc9OB%2FhAZTmcxVsgiMmbf0DMO7Pz5lgIJE35X5qh%2BkReNk5yeESKNrRc5SRHop%2FePnmRRWjmO13%2B%2FokfDUHxPd2UEQOPK8p%2BNlQ4YH0E1GWNC2ObTPj2TR%2FrRi1RYGXSOdfYIncC42X4L1FomFxs83rsgA0jTeZRdKPPcOWAOCF%2B3C4kF82i55pLhScohcjEhRi2E1a4%2BehoxmAScpWs0EDqqHqLKWTe%2B0pPn6UfiRBtkzV1ybteR4AE4H9aztNlCxe0XUpmr4Ork7x0RAQLBnQ0aS1nmewVcy1abELnJl69ECBUkF5YNTEtFzOj9TNj%2BQF5%2BxGERj3Rkazu%2BDY8Dne6aIUySXxwtUp4irR6%2F6VTZVgt5dMd2EWK7gYpBvjbpiPxMMSV%2F70GOqUBExILObyrSMKvhCaOA7SwL%2BTANPdWK%2FNHgu65dLeZr7i5AHNeQ9RKinMnaLbSIXLXOUGmMHmd2bDPXDEnaTQo3ba5ZQrJTc7b%2FZqrLbuznLKPlAtIjQoglcqSgfbSPx9rm86DM1hK1GnrMo8kr4Eg4lTQZVljXW7eWM5jGg%2Bn%2BUUktLdbbWt0oSKInrexlRV4%2BiAztWkn%2FgiJawsm8MQ8NeSBQSix&X-Amz-Signature=7753896e87867c15933d1f6cbe4959f50059dec9c612471a80ab7e1ea4349197&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
