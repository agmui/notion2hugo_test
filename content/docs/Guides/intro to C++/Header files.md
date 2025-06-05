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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666X7OMXXX%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T210810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQDjWRFpNhxZ5h5g%2BQPqAEHlE3vzWqOjUnBv%2F5nzrJkfDAIgRt1U3XB4pc0RsMILYfXDyicJiiiE64lJYSVx4%2BWR%2Bwcq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDEIWoLXNv4k3vBOCmSrcA9InEcyVKcRRH6JEhA95VNJtaEwyJg653QfO%2FJuxI8TVW1o%2FR46v%2Bq1yUX8STPvu43Ey8lWDCzpEdhxk%2F0WG4IWMSNXWdQgG3akoRjdWanBFNuKW8LNhQTBXZ%2FS4mkwILWR2GGTLNYob%2FkZB6Xup59q4KKI7q8UfdxK3ZQGzqjNDYawNQ31O1tSiqgPzEqukpYLrfO2lOYOyJgKGCuUC7eHBLNxxd8uxuJNg6tf1RfNUQ2g2xphYvAtkGgnA5XFQOLLkNvjBlakRkPapvWhHd7ObK5wXO56cXCO0zFDbIPgVsnDGen523wk2LUDb7VrL1YISsRpWCy89RuMl9TvO%2F1W3Ah0oIajp%2FNPQHtv%2FqwWVuEIJlFFi5cvZVhl658jV0AZ91CxsXCqBVg7DV%2B8YpPK0fJp%2B3nx5j3gLPj0GxDZcPKpLdSQz3R7KKEPXrFBJiAo47nMp0wya1UeCOzzYDS5W9SMbblBIduTdxHMLP9i6BcqvLp0EcStzpNepY3DQz0hpclyJ0%2FFEx9PQ3MCHNMuBomBMCGfVx4tSjTUX3yutlHJks7M8bOeFW4YWh0pljhCEoZvUCrp6okNDmBJ2ZNY3Zri%2FlSXeYw0t3MgG8NIdTPCfwaN9gEYIUlJ2MLbYh8IGOqUBr8q10XWgDCa3H%2BckNTYp3Lf0QcSz72dR3Lic8oRZeoQrOMiUUih2%2BArPAcJlGjcFn5DIDH56lfLtUVPb6QnG8W3%2FGkafmQXSrxk%2BiS9C%2Bmghis%2BhFTAujyPImR91Dz6uZzy2KbrCWbVu%2FztZVV8H7d8zjGaGD36LStsJnNF3ff%2F8mPn11WRetHOleC1WT3mG5dJTC1wg2P%2BLh5WC4pYmduDmoWIE&X-Amz-Signature=36658149b5e1743dade3dfc078f6af37937bd14c12fd20b4e769ff690b05ffe6&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
