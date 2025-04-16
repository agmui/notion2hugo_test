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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PTSBYYW%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T200934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG3WST6oXBe%2Fdlu9YT0BQxrD0c4JMT31me%2BeWug4uS7JAiEA%2BpBUifnUOxpNbfSgC%2FJYhgXq3OBpj8EghEDLvqROOdMq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDIbAVo2OF6lTJeEBzSrcA8Tp0IXSJ4KPo4DwqR%2FWlkf%2Fl1EuNo0EmCVIqgfdwRNYlE%2B%2B3j9O3frAaZI1qETqbFAxDTG3s90BqhmUPnkQNJiNAkUZdEUOg6UOn42YBSO5PzK4kXYVhsOg4tH3DsT17G8AuXlNLO%2F4CYG%2FNm8WJ%2FKIMhqUTsUU1bcjLCe%2FPK6sOTkqGaVzQrgdk5HUTojVwerN9FzWh%2F9NZaS2YnMGvfsYEKWiC3Cf5N7VitopOyxTocoG6yqVlR7KZoJwU4qtOr0YTg%2FxDjQbfcRdm2HWVzxwFqi7gOuIhgFfBu4EmX17lVRqK%2B%2FVZIbxfBXw2VDXAnRx%2Biq%2FjOj%2FJ%2FosAuYzWatICRxE%2FNKK9Llx%2B110ZfmIqaU5cXD2rYbZ4DgNpefrO2rJ0sDA9dG1yM8Rmto3PHMkMPSquhmzWatvnqlGXpR1p1xoNmvbxTVP0lRZmJ1YXA%2Bf%2B%2F1Wn0z7odrj4NXPf7TX4Ljmv2E6bqNIjf9k%2Bc392ohbBQ%2Fgu%2FQYXRYKGR2G1gOqqFEqOaGUu5So297A4cxJIVVFAzENa9wU1tHxfbqzX63asFiWA6qI66MgdU6ouDuRMsUNFrgI924mG4r3Jt85oU5PeRSICt5VBamUuveNvBQUiu4ng%2FOS8ZssMJaTgMAGOqUBeoDFQu2auNYgkkx9%2By1Z%2BK6OyPDwoRxSYs8lRPxT7neZWvL48QdrAVm08AnOQYDcGWJa%2FAypnW2UsNBEdHeYp3mQ%2FYWDi90%2FXgB6IAAR520ba8UVTsYjaLjC47xOmJTSPJqjbLh09YmpzOWPkaABnXovJMpi7GpghaLSoLJX7Oy%2BTlmTeSYPRMjlj73uzdCkkUTHn5fQCNB1QVATjOzemRI7Dmcj&X-Amz-Signature=6ce088dfd817bde9b0972db3ddbebe0b23a4e0bb061bf555e180e6a2b7ed3a9f&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
