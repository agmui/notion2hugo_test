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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZL24ED5%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T150817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQDSW4SQAFepzK3HRYf1pP%2FGw0d7Jp6ww0yCQuxsnw5A%2BQIgNyLt6wYk195llrkXDTYvqDb132lC%2Bvmm7TA4mgKe2Lgq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDHjmWtBEdDB298b9vircA9BGT%2FbwnVhWkATxKq%2FLHzqKnuIqPH4ohaXbHnNXCdC9yv%2FFhNjaZ1cMxKLQNmhPeMsokV3%2BhgSPW6rN%2B3NiWLnt%2BsSWQZWAQvbI%2F1b8eugJeXNWlFMwzEi9J0A9qXQ%2FplkGJS8MyhZ0pB%2F%2F0tHqSsdJaVzXZcMLhkOuXY4jbQOQlAYUybS9RDovyAi%2BunwUGou2Z3ZUFxIRTZ9ca2qaWLo9UII7qtn0EaOsf2E5xrJn5DVsTk8pAaLjBSPhGu88nMyOBz12mbyy%2BJQFiX643aDyz%2B%2BQSuhENKAEZbzzPGmBmYDA0AVuxs5tp0cC%2BL0cT%2B7O3bEpxL5dpNQzmNnpwKnv7C%2FK%2BOyUJQEK3La7mC9wsJ8B1VVNq3m%2BdVK2TFb6xr7JyVaRzY7lhG5AZtnAoHuvfVQDMfhL9V%2FVm%2BoW16Baj2t5StXzqNigq2wVMl3y1M35%2FB5OvhWLsX%2FenNpFjka%2BrFqsyfwkft3ssCIl9jbj2i%2F4RFMXcaF2JN0UtdGTqHGo3hYn%2FlBWI5yvsA5YSrLrK1%2FY8gtWS0o1SWV928mwZDZxUzfq%2B%2F1vy9ruEfE%2B4rydeFMtuHOHgjKYV3hWQ3FCXcu2HlBpzWLB3EqOpMb2q4JXzcTZ0IazfI9qMKT3mMQGOqUBIaCzekl80pg1DegAJC4%2B%2FuCqnevyaUfXACCTDQzBmSmaHt95r%2FLKKug9dlSpkgBUzfDx0EzIyrWn6xcv3b08a5MEv3uBKBASFJ8agtoI3CXhzAYpAYyAaeEIqvL%2B64v6ehc1BTzUVBKV406VCPwXYyRFt5AjSXuhu0OojqxmbIRlms2GpnbND5e3Nnq0Ejn5KIrSoqoaxQtxS57%2FSNNaZy0IFhGX&X-Amz-Signature=b3263aa404e4b7b58ed5629722b0d80358bfa6f7fd363dec20c076f9557c2da3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
