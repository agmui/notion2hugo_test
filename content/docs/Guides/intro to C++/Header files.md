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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S54MNEC2%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T150740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCdpyK4gRHyvlvc5sxIcvx1zwyPkOLDU%2BP8VE1QojFIHAIhAPaLRn1bEg6Ila2gFQ6s6c%2FWi1pa7tpcr3TTL4ksYIRZKv8DCEcQABoMNjM3NDIzMTgzODA1IgyX5DfT44rWJDJN35Yq3AN%2F3q1fsxKJrTsOHVEMQkQIA3gHESszYu92OGKG3BN940c772rq798pG3sST3psI7Tgvnr43dCSnA%2FSLmJ21N%2B87%2BB9I%2BU22i34qbIpT7IZGaqQVmrnNCOxnfdN9l%2B9DWYijoZsuYkK8oAeccsgtq%2BfNglDYvOhtP%2FwPYGFmjOP0Es4uRNkTSOP3i%2FayUMvput%2Fk7P%2FvE1Ad0w1RtNpHXSkjgN5vnbbDmJ624%2BHxkvqSVAekQK8Ly%2Bk%2BsWk81ukAbdJjCZnZDnGggADQ0zVEG4Apcyay6%2B9qm3wyzxkeLqpHvbLcqJvBf11hO5rfEr8kTGimEDKkMkqfRgHcJQdpkIy1sH%2FZ13l7Mq%2B7n%2BiFnOzWhUEoTxq4ShcoFALb9PyOfbmtsvGc1bjrGXJbtNY3v5FjJyRhachLFSaW50Tbngegu%2FD37OV06Z4pKwAODp4Yd56NoxuN%2B13C8eHnVxiidR8rJEpALi8cykrYNJqy%2Fe7ZeRSEDVg232VLfATsLaJ%2FKhCmCscaXsJ6MvgXMFoUaGPbXI0OLYr6MlPLrLNW7yCMtX1HNU53iVrKIjazZ1OD%2BEFrtQcGNwvDpqhuktPCWaTrCGGzGwdqoZcdmfQkt2ERsreL0RjM9DELl4ejDDf5I29BjqkAQ%2BO5wh%2F4fn7McQsxvRw2meJVSWXnjPNSbDv7VVJIPNyI%2F8q46OgHsKdaAyI6sIJNyDYi80tIRMVgx8sFr7NGu3aVUSOr0WyuuiuIJ73WVfydBdBTYSVX8OgWy8tuxnSxza1XwfOGa12vLqbTJRoNTAGDhR8r%2FFMK4wzdZEd1nxNvIQHUTnZM4e1BMPk5ZFvBdO22dinM4ekfoyx6v3O5wbq1o5l&X-Amz-Signature=28266814a0dcb8c592702786a19ce268409c4bfed013f09f6f918cf170f5718e&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
