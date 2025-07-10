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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7QRHZHG%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T024412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEjHvP5CgVwG3JrAUXcRESI%2FEf21SZ60VT8R9qKWuODgIgW7CwAwDO99Jm3AP36Nm6J0iT1qkhMjcz2ggFAWg1dPIqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOif2nsXEYKu5KvWjSrcA2CBcTxaQUL6fCRWXB2f9z3N4guxlbuWXTnxhcqsgsi%2FNEq4docroizhsLA3enm%2FIUdqOxaxXXJ4vw0KphqCjw8KhGpX7hNRrbb00o2IrIXhExZkCEvT1dtfINbpgulpq%2FhK7d%2FnWJkAkvGy7FvcmCyFB0Bv7WFE4vW2%2FEfhOwJiaLZEVvoDLVkdo5NoG3QoNvBAX7nFlV0y5ir40M9CjPRviNobfH71D5kCnum5S1Pjaj9CtBGs39NJNO%2BUD%2B6MvojHfVQ2Thz8LVKs1HxiizLoD0I7moAfIOfkvgtumFWZdeOtcHLI8mN1ANy6bIhXyRm9NvUxeGPEMtpim3iZXC6r%2B3xxcoPZ3l1dodbEWXond%2BBHmYEUSvlx2m06lZtmEcDuAhcXkeuXhnZv3kq2iYmi5l%2FIVyX98DvNPwVF2UUeUdLiKENHSRXP1b3vgvxVlrLTiyX3l9e1q3EyCTbVQdqcJoUoV3ysxQ8F983D%2Fcr6mYp9m068bXTPv8IyiJL71wIXQsbIUFmCOGboMoEtzvVv9LBXCNusU2Aqf0kkCwPEI9BnwH58%2BxivnPij87vPmJLANs6lWn7j7sWZ3LE1dIpLYJsdRnkvupXim%2FGQD5C0jWmNeufgxAMiSl7RMLTQvMMGOqUBcGLzAcXI5PeemCWO2yAH5lpfp8MEsFQNNKsbr8i%2BtkWDnviIJG2XU8vT7b6QczMnJxeN8ZqgE2ccfIlKp7hhJrh43hPN%2BSLYlHLeYADaqTFOhkGHQJP%2FpZcsl5bdkdO9ninP%2F3pVXJHNweGW3pzApBgPEVxDbsprcV8zeA94pu4LJGlpjZJdDv%2FLq%2FtXEsjVZnr8WPyGNJ8qYSy1XLDe8Q7IAxeT&X-Amz-Signature=cd230213faf40bb44709d6de7a55d83a74248b72f7ee095469e883a83e96f697&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
