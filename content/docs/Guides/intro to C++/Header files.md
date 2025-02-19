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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WU7OG7BY%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T031321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIGuY4g6kfMUjz4ImOEUgeR7Ybyu8Y9QsieVwW%2BTOeqlkAiEAja8E%2FfUyKRhwkPKJWF1SzoM3pmVFUGrN1zr7EKj%2F9OAqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIdxmQZpUMwWiRlZvSrcA6CfHOXQc7I8nlVtzPIjhvr4wkguC69WdNU%2BAkVz%2Bg%2B9cgeFgVN7LzZzcd3u1JNBFzUfgXKD%2FXTYvM6fKXq4S8I%2F6pVQLmkF4Q1nn5q3k73i2UfirQQgAwgFRstclElDmujC%2F7LjjePA3nEZ1D3GUopRU3fPoXmadj5x3%2Blm3CY3EJE5A4edMC%2FzqpuL73pP4fmdahtsbv5srK6pOGC6SYhBs201Y0%2F4yAxSRF3iB15PijEoT4pr%2BdqiONDTO8Pi5XxZ3k7s%2Fxlws2YGsZcLmATH0voIJBVaBBx%2FJ7wrSmoO9XRMuZNrpVoGcreoP%2FjLw16o5u59XgYFwesK3latXxcTSpsv2u5TKix3y6DvmXB8KYtgt3gTJt0lBKtFOm1vA8pJqRNQ%2Fmu24NgvSqmHEmWFR%2B4EIzHZLmB%2FWIOpfsVfT6goiYK39%2BAS3Hbfckrh%2Fkyl7mh5ZLj3iw38%2FyDvCfxms5XvMWnRWeef8dXQfFG%2B%2BMso%2BORUtov2A1Ib9Ekdfl1j7eRbsr%2FhmJOIDujmjbfUgp7vfgrUjBtXusbld%2FUVdtVe%2FwOLve4Zd2nj51ZNjN4TlZHsOx4kpClY6Tx9XR9NWxx9d3vopg2lfMExjcTh6fIyguume4QYLcTzMImG1b0GOqUBv1E9cTwQjiP81Av23BwFcHGrL1wJ2tig%2BAvUXgimdHL7AOI%2BkwTr2h2OPC2%2Bz%2FkS6cmttsdLz57Y7i4MqZ5GlVOEnv3jMiqLCsRjaJUi0rn7UKqUTQPPkByjizXM1r7mRe7oHXkBLUqpQt3g3FzkU4jbcuu%2Fhxkks9zvXLth3J5jYhB%2BuFHTkp4Bz9WuE0B3Kx2gmxeysmcqQDdvkmiXThZ75jG%2B&X-Amz-Signature=bc79006181980c8bb9821083784e469c7670f01dd974feb33be07b6e06a4b6db&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
