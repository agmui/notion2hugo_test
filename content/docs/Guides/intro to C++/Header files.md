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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTHPRVTQ%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T041547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIDuR4gOJoFhrOEoTK3sjmR5F1G8f%2FX8fVd92pLRIdCFrAiEAitIgQA4HDruzXPKnyRUE2bh0f7azPzjzRd5V0tpD7WQq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDK11HRfAKujFPyHS2yrcA0UOsY1mvbun5O9baK5NYSQo0bLDFsqOiKh8G82%2FxsYqfEnqM8IsOU1TeAyIgAexCTagTrPhAG4oNg0kC5AIK%2FeaczVW%2FivbE%2Bd6nKjNP1JEKzk7zqiJRwTCcTpLCY1pq07ZDKyYHifA6fqUoqLdw5P%2BXKl35C%2BqT77OiGDtnWcNvI3yrSoABCqYRr0aQaoQDRxT7JXhgOj9JIdB9FVUj%2FmDCiwZEax5kX6MgT0iddTCIqHKmLJKgxQYkpj3joeiHqXI1ES%2Bvfs7ngv1m7TLHhqw0ZeRpytzWO1x5gXwLWWEJ64VW3Ux2NFVlHiApHHRRPIxA%2BCd3eaI2aoyycXgVyeQFe9dPdreW6485%2BcoDNQfF22NbW0TQBbNiKUyaF3KI7c9xvOU%2BT2qA0RPEpLIGj5T%2Faohdm0beHrQ3krHV8C1vWYqoH9gGvYXtdxTSnlLj%2B60kwT1SX1jNNgxUatchzWHKYvOLDuPhs8c4z%2Bu2kJv0X7vSn97k%2B%2BqJ350RWcJfJyvvzAD%2F7lZHIJzckdjrLkRxikPf%2FIcIevzZxrmzH9tZIgK4ey9JjrZ5B2Qkw5NxZhvXOh3DL5KML7yRc0tZl0hGOOI5FXowwXEBTFzQMuq5QNrs1IcY2t2pJdSMKGgicIGOqUBoVUqDBvdrw3HpBYn1iQUJpipQnAJSKAwK8tRx0bXU4WVwx%2BhVHDO0f00zbmkC64soHAnum5l2TjQCciO1LFCGr1OsuCEZOdgIK5visyBXbzkNnXcnsWhEYlQ0IubT3LD8Yf63s%2FbEoMY0UhClv51VD%2BAMp7nd8sB2%2Bft2srG%2Fu%2FSCceAjEhnS%2F1P%2BmVoMICk5%2BHqdAsFxhAybdPmkJMlbjudPcLq&X-Amz-Signature=e38a3c09989614e3ea663cf486a0d02f9acdfe335363dc6839084fd390e92fa8&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
