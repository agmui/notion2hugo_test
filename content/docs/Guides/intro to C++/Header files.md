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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHKJBVLE%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T121602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBNbGiM5aZQR3vAJnKZOLiBVwPislm6a4LLb9KDqGldBAiBGapPVac%2FviiMA3ZR27P36QSWmeZHvhRuOTW9gRFNmUSqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCw4VxZx%2FbfDiWFw0KtwD%2FAqC8jjd3QkTtDpPmIuktT7BhmYEaH0kbXr2qzHYSPOLJ%2BxQr4VMXITWMBHuNLo6dJXpWC0EOOFQBytZxre7jhckYD5xOGg%2FfN32xpHiE7x9xMgHsWLADT0C%2F1DdyiiECxhoubpjFTw0Gy4PqEDYw91t%2BHmu%2F3FMlCLp2n2JwjI76j%2FcJumwvVJp77Vm%2F1PgP7wihB7OAMg%2FXIF2%2BI%2FrI6TMUQDsaK1CC73NoJL38AkOEcdmbInSpI9l9LnarIzdfaJX4yPrZH6LP226goPfMBbP8NgUPHCgLrARRN1gGhd9lRnwKjM4ubszqOV%2BWPwLY%2BxO2YzIp2MA3iOVJXT05TQ%2FCk0ApBbQ%2BSW6lWF8thqOypTvIDh8tuuqB8703gsLC%2BDCSUkmm%2FT4QSqg5kx43jq52oQmY6q0ouHLKdQ1drhFEhWpX%2FJHrZTOwK6iKpU%2BjaAgrg3RKT8cCC%2FzvMBWyOuoTNYKUJ9g0FYzMAP8NF2FbvHlLcP2Op8UicT4pJYvHWHdY%2FIPCNz4Lx7UdBTaVHF6HFay9NVYUiVpQDNJx2foWnapoWT66n%2FQwPfHCi2UYrezk2XQtXhLY0ZFWtrRcbZ75wo6YE1z6xutH3Tm4%2BFG4TVaHoUHhVywW8Ew%2Fv7DwwY6pgF4hRP%2BC2hvA1be8gX1CO4%2BgyZRQ7pwN98RyTN9sBTHgmsh3w9J0zV78TDcY9CHYLRLeHQDqsKexuyVc5Tc%2BVYDwJmxYRY8Obp75a7kWAK%2BbRhGRWQuTFOmSeKxJBt94luC8FY7BB%2FPqfkFactl%2FBNd6bKBHK4mJ%2B16yEeR6IS%2Bp54DeaA9lTtpAPKz%2FwrWnWp%2Bm9CC%2BFLvH8tMDFYQU%2FLveBq884sV&X-Amz-Signature=e74ba8c5a8f136de24b565dc4c624bff747156c491657053556bff7ea83531e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
