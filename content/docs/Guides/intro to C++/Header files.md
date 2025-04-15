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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BQ557OV%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T150818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFneiBKqE70wKi3V1t%2FjFZx3Rzw1v%2Fs7SQa7nJguc%2FECAiEAwDMXYej4%2BUWyIUtK6EwIEPAjguJxoz9ApgSHBivAqO0q%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDKPzsQeGg%2FTfYVC%2BgSrcA9bx3CDZwNudkD%2BkYq8ruJP8AdKAaUOU%2FlmJ%2BYrQqvfNwSosbTImzI%2FmHEzkC24bYNBpArhqaBRIrexgYanx7tK%2BfoO2WaspX6jy9YYZb7m83BsTPRTNmJju1P%2Bg1dBL9dcs1tOi9TwjUSOXnrlbKIcLa%2BwtbS93ZvAFs5snvHxogwcH7ZJVb1Du1FIQO9LOzMHORJOA5PcO1VbHv5kadYb0TQsKnr8MLMXcRxtrmQWLWHUwAWXfuNV3uq73Q8gxPL0MZ06TFKiSUyMZP5ZPQHkKmjfmcDXdFQeHw%2B%2FeqZAdhTKj4dZ00tJDOy6EOlElp9CgVDa5Fn9zrKaIJRKHfS1mnGBSwe6Gi%2F88wTouE%2FsTdai1V7TGROOXQwZgRaff7Mn763YDjzRfUnFcpY9SQj7VO2OP%2BfgFq%2F0OELK3DFXZvMo7QGMj1cfy%2BRn9zCpbYCDCsOa2aXJea5brO5VIDGfzzgM%2F7jZ18FTKMut3R2nnWJV8A%2BE85SPI7OreI9ACd%2BDyBSixAS1WjYo8wCjiPg8dqqDDTdDw70H4alCK7ED2OI0BmPpNgn9m8Z%2BiWBXxQm0jPtw6504Rgea0Dy3IzBlTiIR%2BwXiqXNVfHCMoTmBCcsp6msWd4P%2F7nwU%2BMM%2Fc%2Bb8GOqUBG8uw0GE3Ui%2FN%2BHakInWJTiyRdti5oTkknzLOt2lls2Vu2wqtLKYDP8qnppIu%2BiVXxvYESa4Rg4p8BM5DBZE864YjnsW2O5ogXdga7rIOQJGm5ab8DC1iCyH3jBvJtsNpAn22eCa%2Fux3C3cT9KY38LwP3xn5dfYXclwf%2B%2BdjtgYqpSuosuHE2t440GoBTI494gx7vNVIEW8lj%2Buj4Lj5Z03VT%2Ba1d&X-Amz-Signature=3c4638574d80a5f70360f3682dfb041c605ae4327fe5b9b041d396b85524bf45&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
