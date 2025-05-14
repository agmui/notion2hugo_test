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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627WRZZ7Y%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T070931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQD%2FU8nnYwFNPFDltqoeIZHNqm19cTI6yXvhtjgwOsTrbgIhAKyz2ZOiwrpHxykQyxOS72rfYxAt8nwl0dmghbwP2rCYKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwsjmbMLWLLIb9uWdoq3AMYV8wj%2FO%2B9Id4zkP2coLlfIGbs%2BOe0%2FKTox8%2BhilUQe1u%2FMm3Q0RUjpZDONhApIygSkQyP%2BCtSLrdyP6MkB1EFS4N6s4217CBAIERVmNVd38QhzamJWLHoA84vmjF1Qqe0bKKvv7JHdfnI%2Bh1ws%2BsjmJAI33oyd%2BYX8PEXsH%2FBbJ%2Bew8y0G1RwdoRHCIQoJ5kYyuBQF%2F1IFhfBck%2F0nxsxNHNTR7jBGdJkNCW3Vg%2FiCqq1jRP3wvMqRkNz%2BFNGx5IcoypTvMZGA%2Ba5tXBBVFqmKE%2B83UdLltO0wD8fcgm9uGZQGeMaio2ET4UN6uGKScWikV2iuUp1Azv8bf57i%2F5IuKFwSMn6k7j7Pi71gAvU8y081c28UuuDnuWLVvSBfGfJd%2FhfsRPyhAe7Uvpy93%2BGWrUy8fM50UeIuHRPfE2AZ3Ydv7pp2HKSU7nEqBzt6nL%2FBFD%2FOukjKN2fwKfbrbZBA2jHVC6W0hTs7TqSSOoPR6SoMSNENT65ZDJ0B8HvJeE6LTEluIlT3Ldbg1oVlk7TfTcbChqtuTWI1RUGBJ8wRIjRJ4zob9SYS8f4PtdSLXAiTs5qj3pKPmV0MHPHjbqyUZaIz5S%2B%2B7RN8GFCO1fQioVsyx2yR8p5GSAgHjCC7JDBBjqkAbKh95YUL0ik74DDWew%2BAkRfKlIwi9WlVs96vwWcihuLEIXQxUj3n06j5qaTpTNzHN8JY7yqbgwVyEWEVvSXk3GwVD5%2FomVDdmI7oDjjLG%2FKSP1NVg2yrRmXWm7Yv0FvwqHUCAJU7xUHkne%2BOmsIGyjVrmlPY5GYpRBT9PaiaqiToAT07hQnX6h5ikUBP%2B4EgExLJKgJRiIVk%2BadT%2FPWeTo49jpY&X-Amz-Signature=f14ff069f90936da4af5ae29b049593854d414bada24607128982635577457b2&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
