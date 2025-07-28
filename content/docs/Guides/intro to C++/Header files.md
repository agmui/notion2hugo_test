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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Z62BDZW%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T230946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQD%2BCrwgf98InzP1W0cFrjJ7hfUSXU141WN1vfBkKwmUHQIhAO%2Bm4WgDJyIKQO9TonoSrmHAg%2BSVjDGKC3GBnMCilH%2BpKogECJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxMO1YJZv4vp6c8Uo0q3AOfidWfEoOxFt%2FCeAPZVzWw3Vsjy%2BnO5FaFO5qv76vXEBUwlWqT5sGBOPa6rhN8SQzxwjFJh881gdS%2FoD%2F3Nav%2FLJ6FxvtFoxcf9TulrCbm%2F3MNClH9c%2BkGzjOuhQiedOOpVdxcvrnhLPIl339CtvSuMJmmnhZUin9vc2YFjGdZY0GAk3DVoDW2QWIMyXlKrLhP%2FMXISsfis2a3Yp0bNb%2BB2t3kf6ocEQRDFWN3mt90%2FMjOS3g6V0HKNux9XtdFfz08JeCEVAH4DE5Nr1C1%2Be1J20O7CWbTx%2BiYf1%2F8jTc85IW83IFYvBVM3DVlmPGaDUe7CXNpnJ2qrc9U7mFKDaA3bBcDKIKgIY3Vr9nnS0wGeCdKkozFffMRBEYCQq4WpUo1qwL5u93G1goM9CprTy2AU%2FbK%2BGhD5ND2NakHvVq5FPVzSoAxReF1%2F9%2BmfMNaDxVJYpL77NkS6e2DeuEW9BjqhBbsxgYjlxjvVvqvQVUZAyMRyRuDF2Lv34ohOeaCUBJYPckBPkh%2Bjzt2ay0fv3Dp6HRFbdyvtQnO3LJG0OthjjAqWri%2FhJcvAoQASwhdNpwOOYLIBkp8cznPXTUkMHf6F7vRQ38B6ByEkVhliVE%2F42FdOSG33a7gcLoy%2FTCe8p%2FEBjqkAbYTCOGDfWZCP9v1%2B31tgeMiuPsckOA3Ive78YFeuiLOk1HII01CKx0EuefkFr1tgPx1Ws7GHNCUtpj26w5E%2FqbRKlSGHPW3jA4LQcBJrEUWG%2F2k2xL87Xqoqk0gw0v32kifjNa4sODxwJIM9fq84LF7MyCNgedaq3TKYXXB4TwJqNaDIUveR8IfGAJaW836oY6VdzPd5xRxj%2BL%2FFrDROsyP3fac&X-Amz-Signature=38463b3e374f383725c39aadab5272d9b6357f45dc34aed0ad1a93759c20b6a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
