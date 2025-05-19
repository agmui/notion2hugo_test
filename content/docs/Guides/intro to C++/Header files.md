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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2QP7PKH%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T200926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHXVMNMi7GH6lD3J%2FYeJuSj%2FXsvToVYpqZgV8QXZ3wCYAiEAtndeB5aJockCYVirXdRGeDxSOY8S0wRSmym%2FlLsAHe0qiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF%2F%2Fx0RPTwH6zdp5jyrcAxbIz05SDTjfSKLDNtEA9LyqKbsgUYhIkRJ5FbNlBMmDJOEzQZHPhuhJ3jg3OMX%2B0H6KeacABEjX13QGeb8jgLBMELythnXdeJGxqDxLI6N1bwacuSSbL2TU0QTkcmX22iooA1CPKKU%2Bj26ox4A%2FEAuYInOtMTZLKzAf847aw42lxuaP29wQJ2goc%2FSSF8Nc4RxPYuJ6DYZpvNKQpHc9mokw6K4VAxoaHG6nxy5JUhbdP2fybLc%2BTW2ObrODD8JP5KZROPo%2FSBTehS64VzZXweF5LD6hVVpJP4%2ByctOkD5EEbfJa6NCMOimT146%2BY5TRg%2FroitXDDxPJT1IxCyYCcESyWBwu0%2FNSnsfmAdP35FjAvjG0hZ8cSgA%2Fh%2FtZL6JEZCXSeKzz%2FSm29O7tEpG2vMiVQidLwN9ieFd0G0OfyEmqFBP0RA%2FQG8jt4LMJ0VhVg3EbqUmOc6FxSN8AA2GMI8wscRN5SITYtwhxgnVhfWbi8eR0KR5NLxQhcYishv2jOJiEbXmF4wNC4P6zaiP4sWNhp7POUyPIhoJgv9iVRS3tldgCfZSBr1Ow7E2kqn3O0y9I810VBSz3rYurp7G6aXyWqG0kibHuhHqaGGjKD2UYySziSKPeTOBboMwnMJ%2BTrsEGOqUBgbRsad9driZkXpFIGjhxyKZ1WuxIctV8bMCU2eiqF2180367zJKb8sXwavGhd%2FEF%2F9du7VzcLEDLmuY7G4QcgIqyzGe3BWCU9QlbpQ42flQpUJTlwVrD0s4flmsHOPSEtYkf26xW42No5HTvJGiBV1tWirihDYUDj2fMOzDWZ%2F48hvrmXANY30j1kr8sWetLX3ekrUXT04j7fndO%2BRdnNy03XiIs&X-Amz-Signature=f71d01a5e5340a280773ea925b6c2c13f46fcb807120fcc38b8070d02d470a4b&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
