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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAAXFQ2W%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T021426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoJ4UhBzjrJ6%2BEQ6QLFKdi5NWi2atHf9Q2HyfLP9jt7AIgYIJ%2B%2FLCQo9UCvMs7pBqKRjFpzU%2FTd22iDT2uX0qOlgwqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNgooqlZPXBYVdKxECrcA3wemjRNAeq%2FfPTPSR5weGMLXqTytf8jGZbYza%2Fg796mafcswyJF4HXJbdrzNKoZJGwoXv1PXLGGHuu%2BwodQAD2619vdrbNSXl5MpFKl3WezNUDz84md%2Bcn5uKuaNqP7PVxuEGwHLFmEbtpRCwKO9E0hbN%2BzwbGwpzHuWyTsXzevNDRRhjt27njBWF%2Bhxo27%2F4VBmDtuEE66HVICGIUZsawegt9krDEvXFYly8woXX6ibIYt2DmX%2BuCD8xDhd5z4Df%2B%2BTFqPIP1PGl%2BW%2BiYZl55BS7R8KGnwr%2B78tOj7UNeoT4I3G1wfj5jwErHuhlVw7GMoQM6Uu%2BoVCKwvVmjFsW8sr0EZL26wfheB0PSI4oxoShMCmSiP7hf2%2FyTwLCJypM2elUnYqHshWtL6VU5T8klxl06QwqUL%2FncmwbR%2BW7Oxc0qxC9uBYR2nINqHTCF3A5vehHZBINKaDx2StxSW8btQPuwqpk3j6uPPky0RwTszEEvG%2BYkJgXtsOoC42mYIkJhk%2FT8lL8Z879GGdX8ccUbSG0G%2BqppT3aLcdXt7lRk8o8LJ4JAjG8Tq5U%2BXqWloku44QUu4SDkwIwznqqCpqvbnwE7nr5TuOXWRRcAE5sSK3uzUaC8LO01JohCQMPqOzr4GOqUBsc6wFlT%2FYb%2Ft9UoW1sr11Cpqg7ingjEVpAwchTWzU2aniNr7dequBHTp42UO%2FEe8FmjMXe7S6luUd8x1qCO0oElN2SX2cXphsgcICVeLGdGRB84TTjjNoAlWKdXXkaQQlX8rM%2BAQthRGpxRCw10jID84K3WAS3vnLGFKiUMRxNAZM2%2B5c81C3zd4wI2tJxbM04smhI1FicalDwmBEot3DNQWiYVu&X-Amz-Signature=b28e8b37051e85bfdd744420eede6dc3a6bf48683cd589bdd1c87fe9d54c3efb&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
