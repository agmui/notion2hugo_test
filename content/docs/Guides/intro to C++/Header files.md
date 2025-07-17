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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQ2ZLGYN%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T171012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIQD8XnIsYdTWbuP4d9HVejNCh%2B%2FwmpGEDVvqHRhAYYLa0AIgdDAYYN5V6f8sUbNVu44Emku7nt8tNeKosv6lz0zLsNsq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDPawpvIc3hBy08kINSrcA5GWDZDWOEtO83TJh%2BbUo9SXxUIvu1lDBEMrD%2FsURVpd3BZEjwAd%2Bl%2BDz63iQaJ%2BO7BOOMhUy6MFWKQc2bcfBeC4memADTLnw2DnG%2B0luRRdHW2xgH6gmAsd%2B37%2BcbAWxMZBFpMzuyF2uFkdcUO%2FWKO8FsFDFVsc6fQBXgvS8VqLDJ37avT%2FgViMsPrcfR0i%2BCVvYi3f%2Fj%2FeA%2BFhQWDeQOjBmEeqzx15rHdF7X9b7gYPpDCP89QeeNGHKWBTVNxcF4W0DLUkkqbTBE12Jyv1woDDk7p0z%2B1UpdjYkE06KsTdGohcDVxeoRTczLQy5VTT00yms0ksmaNx8DI65xYou524eoAhY4bAFQNmkKL0Vzjc6FhQQyPwa6CuVeVcHxsm1dgjr62xdcq4pe%2FXITKdaXFU2lggUyPy%2Fh2xd7Yipmdv%2FRaEQAnWfVi5a8z42%2BGNrWungnADsb5nqsJ6crz49HobxJrW7ZQpEPCw5u5e7mJfgCMABYtN3esSv4qzBHY2QJwyCdlHm68abNHrRTacPnDFzcP21oKh0JCy4uW7SYzMMv1b2e542CjwwXT7hF7obXbVn2jq5I%2B4MXFWt8qq1uleIuwkkielNatzdukLzG0QP4PIxqU%2Brlh%2BA%2BwqMLy%2F5MMGOqUBHw4EG%2F2DkvUztjWx8k%2FmGwy0VUCwwv8zn46tGZVYZodWo9u0eMIig62%2Fw4eSwcwJatgd3IQXyo9w4y7HeKvVb%2BSArdj8YXQkzIYs07NilDqDR4m07TCUwVFhEGdp8R7scKcN7YPcMKUHCMk%2FyOtmGTppnJ2WEbzzHIUoBHloBDV2cJPZ4Z0c%2BUM0yPnotmUClWl7VyLY3LlAUDBsT7BxKzXU9V2S&X-Amz-Signature=11859811dc2ac64913b25412b8960770ebba9f0a650773eff4f924a437490629&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
