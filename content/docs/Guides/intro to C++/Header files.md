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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RQZTFX7%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T101023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIHCV6%2BgBJ5b8p6monuNu2YDeHyVNjXPTTlVBcitqdORNAiB8k8aCIxFfiStQg6fCHAG%2Bsql0jvvYUiP960%2FDllMnqCr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMunE2MgcFE4LmbTf0KtwDNxNrbnb1ztH5sARQAUw38Iq7gGtUqDntfMPq9tzSaRyYgZwhZIzU4MDVgN9MMBOyx2VAL8GnHKSVHL1TE6p0WchaYhwKn6Q9PbgIMET5dnJumLedXM%2FrVe5k7VrBdy6lJWsaSwyyFmzrzUfTG5TMXTYHlxVvSBQzpZPZjVGkxrSyRrDgiiHBIJ%2FprbCVj%2BTex4%2FiK77rYaYmB3TtWBh%2FAlXqGg9sJ%2BpsQ2ca1NXswA%2FdJg2BxdZQMfFyRzj7ESTi9rKCs%2BQEtAlGJ4yAD8NjSIZQOe1OtgCTkMxJdyWe%2Fv5%2FClPJ2rscCoi8BmcZvMRJDGmS87wNA0DJCs4hOGW5xwjz5x8yW%2FMSWO8kr%2B%2FD4EtVomVrau%2Fnj3j9zlokUqHlg4DYW6z1kT6TxxFQA%2FXUjp9Uh7oYKEjLCJt4oq13e0yyVNVpltbhvq875X1lbci%2Fm1e1VHLaBB1Ftysi7kNa5DwLJoR44Hb2OIX0eKFMZRDYM7baiF6d%2Fx%2FeeHz4QS4%2FQbiFFYyK7gXtzlKavDOVOhQp%2B2rVaomREnlwIuxcM3bfpSBUbd3y%2B8nmd7vvlXFGm%2Fe7Uq0IeWLmU%2FpwvbZknNjqxohJnnHIPejCn7FYOSsOQ3Stk%2FigeQjl9xAw2bO%2FwgY6pgFjSEj5wmGDqq44B9wECWDlvYYQUFaOjR4eSxf%2F1YkVmQ783V05eZCTqowndSxF7tSks0zQGA%2BeMEAtFfDsvb6MAhyK5FCpdgnWkQt6GE6kb98m2nY%2FRoIcVqqvfn15NDOcnlr8D7i4mrNUYfjuCDiSX524XNN%2B5%2Be8r2ZqzlsTo3Ompis6hq1RGyDK7lMJLdPgHXCuaiUMgOTfYbvpIj016QAPrHxl&X-Amz-Signature=153ba91e15e7634dd87a83a1c30435ec0ce57331c73fa2c615cad5446eb74f19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
