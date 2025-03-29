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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KXXHA7S%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T040951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIDtU9eX1j6gZ5ZaawSWXctHqrmTmEwwq1veTCbSpkVEsAiAjSg5AH4v7aXbTzztATmLvGxRSXqvriBA9V1QhCCnKyCr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIM8JJNyCnJYpxo6AI9KtwDa1WGQGxfEpRCQv8NqcJ7CvajUJ96obKop7y6kgU1ogGsC4Rdebtc7AWdtQdgX4lgGUQk%2FJUAdUfEwK04XxGToCjJ6gxzraFoGG9Pa9cuTOylupr%2B2FcrLHynlTt73%2BYBpGCSsYWBOKnHP4K0A8LbYgTHoMsA19JjbXI76Ui0tHmM3sMfdM6XDNToiw9%2BNpsT%2BsHf4R%2F4RPn7bqkX0MKOuYtpP%2B%2B7hIz1YgL50F5YvTMU1inwcCO4Sey83ckx1RQTrBewdrO%2BffDjWKkkUst9DGrjX7LfxDkq1w1POBm78c0ufBPFbDeO91WEFY1d71M0iknsxGiEx82h1TwhxoIcLPls%2BztHUwkqFTZtOMG7%2Bzm%2BEbAzWC1as3fqmXeSUq%2Fz7NxY6Ss3ghQdd8KzXZNyd3GmzQ1OGiL6gxMVe0bsTy3x5fYImpZpYfkFQxg8aqQAC5RpVDLFYiFH2YzjeJm2pXhOWjuclh3cTzsxAYlNGHq53YE9cKVc8BvkqweLJQv8ba1jDk5N70jxDIJzuDIi0thZyCky2iB2PMDHwmpE1gdzCfDOKQZJnEdC5yxMcDblm6WfW2%2FoLLTpDnSiz9bA9VTRXdRkVuEF94D%2FhJOplnaSHhDMGkM0KQgBAyAwvd%2BcvwY6pgHZNbwM0dtpEv8%2BPSkNGwQ42CUEyBbwzX0JV4Izyitz%2BiQWfAEt0Ye1ipKIn63pt8nl0ul1VBUgiZQRS5FdBMO%2BdON1H%2ByR6h0aMJSGNXB3HGPeJmNg6PoXFcmCWOWqygMZCbN2DdwWuKmAhIa7THhwIeLYQmpsacVUe%2FeHfhV67HjUyDU0hbNeoa4P%2B9GkrJcTkc2SJD%2FqgYlt84vmnJc41Cr%2BoYyq&X-Amz-Signature=90c1c30dc58c6fb4276851034c93e7e94cdf3d90bc21ccb9ff4ec4a73a695dd0&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
