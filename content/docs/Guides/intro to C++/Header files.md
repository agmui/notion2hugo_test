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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTXWSFHK%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T121141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIGcYXsgmIIBLJ7f0%2BQBYnpcVIS%2BD8gEC0N%2F7nsA%2Bw9wIAiAhUrux3Vm79PbKFJcs3wchlaeo0cOjQ6lHPPEOz9HyuCr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMZUCG6Ny2yK3yFZsnKtwDXW%2FuG%2B95A3Q%2FOiWbbiZGHvqyQs%2BgdrT%2F8YqdrR6zV1ax1lm2uZU%2BtyugFFd%2FcamxD063doqRj66y59jIrDeyC6p703eWlvldnlnEguipf0x8%2F1ocjDJsWy1BLkde6vcJKlS5QuQ2EcSxBpLnLqFn8RO6wbDh0NKJzbcIfTS%2BCBxQr2flMLF4HTaskdPZRHIcIDl1RHextRR0592GejQVZ20leFuGNTwAKfF1Ozv4VlvJrcXbPzB3DmM7Jt%2Btuy7gUcrDcj1aMji3UHX8UIUaMooU2aWtIx4yKRLXIZfiGrr9rEIUFvr%2BSXdY1L27eJZgId68nk1W56gcmOTwtcVi86cLWWEDz8af5wQJtK0xTz8nwXTvLdSW2WNQ0o1cdc14D32X6uYNLZFcC4wFzRh4b8fTpC7UeI0%2FyOcviCtHvn7nSCqwNlAli84SncyJSXy6qCDM6WAcr%2B2ujQRPuCdSCKxxToY4x85vKPn5IZPzj54ktEr9x%2BhTE1VBDprPgwm%2FMmJYrq5oM3KvBYticuC7iDFbg%2FMT8Fasyhz36lxJ41LqZB0WV4W%2FpjSlvW3brOWQOSTY4Gsh2vcMJtRkBGP%2FQh%2BYJHa6qHYfFIUn5E18jUEa5OOV561AR0lQYfsw%2Be3BvQY6pgGA%2BFykIdeyW4udSnwM3zqtS2XrFlvYCt1%2Ffub9YL5Evye%2BDr%2FNO4u70%2BkFEpAShUjzAXQfNhBGBWpTeacObGJRi9d37ozevs%2BX1QGvjX%2FZ7v98ahlgGzxVRBwee%2BNxFhQ72BP5e5ojGgFbcLe%2FCmHaBuWYz%2BIu37X95S%2BLrL77KxtFVH5m9a8SfJZaXZ6CuAAAO1ZF%2B8tCZGuLCk3p25hodTbJiPNy&X-Amz-Signature=c40344fe7c19872a789fc2c3987bc592d9f457e88c1ecaceb30d15aacc5e0775&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
