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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDLUMJIL%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T040754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQDLgomi9NgxE%2FzdXD3hyn9r4BKzJRuSlXLEgGIDHrQOGQIgVeLoBOJLeHeuYlm4ODNaS3KCj7UawHT55QqG1zn1iZIq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDPGK%2FicTDkETh7I2ZyrcA5ZkqrSsxfoBH0plMH6ztslBiK%2B8ao9xAVjfUqeMQgoIDg1NMrAz5ORVMPy5DxAFQ%2Fw2I13fQuYLr1ABgjFpTjX9MW8LWeqsfWBM6giqazsoAoi7s21ApKVJaU0TyzNdOxIMGcs%2BwjByXAOLrwxYVNSt%2BAN2GQTgLcFdm5IbiVLIwxy4DJXlTCLb7ahn4iDovlKt00IOoyglVLHt8zT9shjb%2FBT97jhxVXGLuC1%2BM36a0Dg80qzf5niSIeMATEuNoXckJfNHIDXlG%2FwO98TDccabxNnmLnGlcQIzsM5D37nlujfBL3X3jXxthBwSn8qLnW%2B8SiBlbhVQNy1uPo%2BB3KEaBBi73A3jSIODmC8P2%2Fs7I1mfwSf7vWnVg77FjPx%2FLDk9wTtlQVpA7W8ZU4q0dzfgrq2EYiYrZtlJgXSaLcWr2rRHyYp20V5LMbiR%2F7qZ2w2xtJwiDLAPIdymWpQ794AvHiYELotzvIOV9MWmDfnWsHH0yMpZMlL2sbDBw5yImagdu2LN%2F1PQAsJZIv33Bk%2BI119Tkw6U57LYS826gaszsbbME4dy%2Fok18KsW5p%2FlmigN7ZYFB6qPhVzx5ZL%2FMseNYc6RIOgi6V8acc68bOc95oqXhGeSbnubxnZ2MPCKtL4GOqUBmr7DElS%2FoSlJvXFwpRui%2BkZapvXGH%2FkBzyD1woPRQ%2F2ss0xRwpU7l%2FrMxUmsNdi7ocuDqVmcDoa8mOMoYWqP%2FT36jZK%2BXt1wxc7%2Ftb5sjimfWIbt4tM610B0qt8ac8wKLYj%2BEDUy%2FPcGfym97yLy7mf3BCRXrbb%2B2%2BmKyPR7q4TRoVWkde3fIki%2FpBXOUgW9I3Vv3z0mQlKxWa5W9oYGiW6TnbE8&X-Amz-Signature=c4545a0fcbc06fc8db2627196fd9fca5e9a1119496f4a26386d470f3b8100b7d&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
