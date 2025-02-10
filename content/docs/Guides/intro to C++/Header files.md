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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRYT3WQN%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T160856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZgM1w3fxp9jGVwZIclim88IL9uhqsbDLn3LurztDi%2BgIgT5RXWLyXhPe2tKejpAG0dLvYIsblvZ4DKxteh8yqniEqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPoztYm0ARcQOGdOdyrcA6jo47wuAW175xFiJTRp0TgnYmgdYgco4NvBb3W6CCoPKSfc%2Fk2kf2%2BlmCyJ0GbaiAF2ZfJIbjTld9osHxvznP%2Bq1qXlXi%2F72mgaGDV%2FMb8GQwv%2B%2FOkQHsMBmNeFgjgO9AUpURWRIz6UHlQzW%2FthRra3PXLfVzHY2J9vH6xxC2j7rIrLCLWUV3BW2Mzk7RnBfr%2FVV8BQKwKxKAHP%2BwGxPYOsnMYQUe0DQZialgsl6%2FQmGbRyKp1fHlz87rlX8ffIpCeNBSv9VojLjqMiMToH2Rvu%2BcMQSCYDeLuSfiMxKXWcG0Elps45X2HjwWFXZCHsVVXL97CaW%2BtlVgSExJIzRKIFxboBWpF9Y0E6Kw6O%2Fz0IH6yYptZJUWu0Mfa5YAbisd0V69M6log%2FeIljmbOXUZJCkUEgqWT7uN%2B%2BMxmSgjti7y5H8RBtPTgLZFUq8Kd2XfmwA03c%2B3F6bUD6laTtaB2EYINd%2B24ipY7I2Hb%2BknSQ5a2srnucinTq2jMz0gLWs8toT2GUWpACM6WOhbbu2dUItm%2B%2FCA%2FzBTcKvYDJPyrRt7DpgL1rnOaRp%2FMIHYW6Vg%2BhkF%2BNfrW4QTx66J1AkRbQiKEvWB%2FFB7WD6Vdoq6Vsy9eNVgSK%2FLXg9qPFMIG8qL0GOqUBpxfmPg%2BcoAF1pfLoISxhReRcGtZmJnEkMH%2F2zfhcEPRRJs9ac8922Rxp5KxsgCDXzGgQoxe8l0XZznyRd9qUIYNEMgcFjJlo5ohHkUe7guxVseKjCJecVs8ITy%2BuVmggFqiNHcZ5r3DdGqLejq%2B%2BlM5rZPYUa8%2BxfU4wNmjsaWpOLaIHQQrgQbvzujvibkxNm9%2FLpb7fs8e9THurUFQRpgTq1tOG&X-Amz-Signature=735d7296618d4cac46f5ea6bd9398dd541f999bb1528a258b2bc598881967742&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
