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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYQ575XW%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T110103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRlXW5bushzn%2BCTu%2B8qwr2Td3G2e8xP3gIyXq07%2FZsmQIgFHpb4lJ3shgezKQgnbsJQDr6jcfCjGLSiLTXJfRXkG8q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDFdZGWE214ZksX1KQyrcA6HbscG%2FOHJ6IT%2FWjCT7UjRBEa5OXc3d332YZdgb2pDHxd3fcPf%2BGtzv%2BUVr4e9hGtISxk6qT8eeoV4NzKFYVpPCcZDnqHlyNf1TxTujPIuhAexuLix9eVr9o37uFNymOSzL0vVZZTFj1iZk0%2B3LnPxR9iTCeklpQA%2BzMZiB2DcAdGsvatR4y2FqSbSr00JsBzSOT2ol8Xl0YxryAG4jsQfVf%2BMqQ8Hc54cCwK7sgGmoEoS%2BBsHf8Ig%2Fk5sMiMbyzNux36T%2B1CT%2Fx5x30KFzLZaCyudEZFzqOG1c2YOy3WPAvkmGc8c2pl4xDtY3HEzreBzLEHlgLwnQjj8xxfojB8OHBcXfMjrHasREkzJ2f2679VxcjqVNtSVt8ELFB%2B7xCXA%2BqqaRSaUMafz09IKu1FWHGkIg82T37aEn8siSUgjlGLr75HLgKlNUFjrpAT%2FQPAENLj%2FVclgMomCNIbehgK4i1vksoxb9huN5FxYSltCkL3XUvS51V9NfClnkcaE0sQjpIhgQ6dqhQs4Laf4TzVgCw8MJaZ2CXKvPc4dApfYfgv0YBLaKTdsoGz4x6JxOmr5FqcPmP7mExsfw2YdpQ1MHsLNk3%2BL0L0K6zM7j7l%2FDPj0A4Uk%2Ffy5Ief%2FGMJTkw78GOqUBXzQYZT59B6a2VoddTdPooBnivSFRyEJ8%2FzdzimVLI9IyQj1jomw9qjKRrpO07HnVY7FvgdyuYtP9ptzEiaBfJvWcLEbiwXU3t%2FIyxtA0kXXSFHcalleqRWySSFzkyk0pAYsn7IZtraZvcC7gzhmyuemEomCDQbTHasIVftOGljZEiRvmLLZvUMRVg6rXjbYAIdKOBG%2F924oROJmKlZeR9qFFE7DU&X-Amz-Signature=d62ab2f7900263998f71f32b21c3c1b405702b17379386e074d7c5b454841023&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
