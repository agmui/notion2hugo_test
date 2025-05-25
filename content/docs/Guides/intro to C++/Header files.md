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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QH6ARRUC%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T041550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIDWNZOQowbgqx7qGvvluXGdUXZrbq4K9xlx8veQaPrBIAiEAuPk5m0UtEM%2FSLvpqKr6DZEMOTmZxd%2BIPMBYFsV5NAy4q%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDP3yNurQjfmee7eyVircAwvSFybwWkSCfBOCp75Io0yqx0%2B6paIxHdrfwWosPp2pdAFo5TZdNfM49iVlNlKZJ0Cytwdfc4pNPQ74ckv%2BpRCFMKwbhuRPDDAM9t354MopNWK6zXCLlzs7hdrnVTUkwtNPYzONsr8E1WWvVFIrgLQpkV8SxOIjBO9082mieyLw51pc2nPtms3QlnG6YytxwKujDEG%2BeoAwUPKFUfoJRpZ%2F41BFnJ2dX4sYLSH9lNltdzdoQFA6MPaodqME7AOG1KhRg8fqgQ3cOk6kUpsAU52nKrDv1Ce%2BizTR%2BPzbfL%2FQfw213%2BqECEoF%2BHhvw4VzzyrkVLwY8h%2Fwc4rJ3jPrTU80KKL2M%2BHn1KpyhkSpXUOkTIPELK4mGQkdlVBNrkQJMDDehKmzw%2FizY7BSINt2DH0QY1%2F%2FHClPvDd1RunPXv6BjUkUs76CJ7wD93WabFaAHBADhrJQeZ4mSZfxn1PHl54ernRxZpJsr4PSoRqQi1Hd2eQqoGC4cjB1WYLs3tEhp7I79aqhWQPzjuHeRZANw3GJAKLDAM5CTeq2bh0xWos8NeWwJLMYMGULjd6NUGrze31sYILieaxy9K2JUWjf7UF9qqTyD8WIEIgj6OIwG5Nzc1KS3%2Fp7%2BO4aKwYFMIqYysEGOqUB6EZQxF8d3pnaFUQVHWwqptiBmHGph6bPooAIkR%2B7BIu4an2Cgl4%2BssmaGfb6VYMblNlVxyh7bss1wTMc9gKNg8fYbYx%2FyttTYZlYaokGXSx7Eeds34ykzpUsZRlfAE3iq8t4h7bHXgihtywVV4mojznEUxeQic9dT1kf9aVms1mUO3boBdMilFUAhd1QWDAkn3LgfSK%2B24XcMae%2BcC2OaT2HCD%2Bx&X-Amz-Signature=e38227fe3551187d6218494c5b33b941a54ec9ff907371a8a09719a784904126&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
