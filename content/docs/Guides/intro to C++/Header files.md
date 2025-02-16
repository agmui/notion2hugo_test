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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CCKK7IP%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T140156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQDTA%2BUQ8llsWIDsTo2fG499hWODcL33g85w2wlo712uZQIhAJyVKBPBOQT%2Bt4ch4qZqQqjSZewkBt72ysnLYsk%2BSUvhKv8DCF0QABoMNjM3NDIzMTgzODA1IgxrUCXyDShNS5ei3voq3APSh0r7OCUtztkeYzu3uPIAgzVAMxD0hWGRFrLQdnu29DQssyUdD6GkXJMxCB%2Bq4r5s4YtZGhJwHdIrai59Ya5FhseY5oC9I2YidYTHfx9GeOVM6Aufs0sXC8Y4uUC2ovoFaKBLW0pm7XeFJoVEbqnnooawsfqCO3OyyE%2FAZg6OrALk8NJPAkzM%2FH7iSujJ14RqDow4xe77mLUg1Wf1DMlQDFznDr7rl3lP02aCOBejLZkc344o0QpwQs5BbhKgBh%2FNLtqBUG2PDUnGbkKzavFpzmiRAYuOAUfZ91P7MfFu5AAftgiK8pAFpwUMfVms80uV%2BKweueZdhAGQ8EdyTMP2gFSBeb481R8gzGXqBa75V2YVwxCVd0prfg97tC1Mdgnyxlx57wsl4RB5PrU6m%2FEP36QyLuZT37sG6SzutWrSJsG0ykGNy%2FNKAhaOQQpaw5XPcP7e8r07kwkwDGL%2B3imHrUIG3h0zsMNoo%2FpIID852fLkrwhoJ2wE%2FhQznlQXFfb9gd7l7Y1O6E74i0sJ6k%2FzCLWglIjeVy%2BfJEGNNNI3FDlQtvTKkFTEens3ya1NC%2BU6W56OK4SUywshxQ7%2FwDBrtEg8BSPEulqOeLmc9SIs%2Bbrc4h468bnw7yCUxDC5mse9BjqkAWtU0aBJsIDHyGM9zPBAUohrhrP2mmBFnNonnztLgCYMcddRPta6WK%2F8mzahfhidCv3RhK0c%2FKbqvV3VdVlCBvFJjYVkgKmP8xlWit1ywK9kSpdaKRdNmjiBkxmzHz%2Fs2r6bzxCk4koz44ATmPwRBrzdZi18ukz%2FdMFA5B6DQTAnKgPH7QNdWjQqSRFX8jAIRdDlEq2MB7WdgwLWeTO%2BuZidATog&X-Amz-Signature=348388000e9035787965574fbbd8ca21f7032f3f688cd207af215e3b574a9f9a&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
