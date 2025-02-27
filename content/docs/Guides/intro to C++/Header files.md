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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LHWV5UT%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T190115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCICOK5HqKhkdJ6WphRM1HuLDVzRjlazwNBVhDihS%2Bd1WlAiAu%2BvU2WEGilgV%2F0%2Bo65N8lpasddrMKDDgvxmrkBCikICr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMXg63MVWXpgYh9QiPKtwDR%2FWCY2AjVQGMJOQf3jVpY%2BA9At2h09wSvo1kN9d2WD%2BMdAKPHtBy3ujS1W5rVE3d4Sbd3WraBkB0ars3fMlhIchUZRGrsPg7YdzPRJIY%2FbzdmP1vSue%2FSpWIGLuMU350tmeI2bNHFofoegEBRnStxnN31rupDzft6sxxWcjKXvawd0c55VLXwI0h3wG%2Fmqa78H0lnpUYqCz5xhi0QnBXZBIXPk3bXw%2Fnp2SFe0KGwrsBqPy%2BAcOpLB7xt661%2F%2FSN7inPMI0zsctoG07vI2VH634LfsUrOd6a01uAbTQbXwj5Hc0mq8%2FAsFZxzBQNnPsyqY7vFBiSdM82kSBL4uJdVVtJgtZEnX7APziBxs4cahWoKHgM%2BvZirkhphrTUlB1f3XLPOQIipBsdOg8cyIozknEljBC7qMQ71npzZA8j74vElHQ01T%2BvGYpv4IemWvP35BE4bizl8bgHq0u8OTYnmu%2FTHFeERw2HvBVIfohKwScQESRspeQEQ8cgKg9Gw%2Br0hz036p8%2BvbZ6eZmccdO3rD4sDEJed%2BvfHIP438%2BAfLJ2RJol71MDgzo0EqJ3ta1tKepF%2FgJnfnHONIVRBwVZSUCiyKsrJBNgkeaPnDdHC0r431UcioyJJr%2BGDYkwj9KCvgY6pgGJ7HYvPpohuAjQ7VRlQxuauwLPxMwYl9l2SFnxFefYs4lZzQp%2Btx4GNe%2B8hyOOHnTiV7p4iN4J1qSQoisZGCnjntZ%2FIBSvTE1rnf5Y9CbyQrGWQ1Z8v6m5e7sXZU3zWOixqrsX6AfFKjCAmQgFsoo%2BAVmgtBo1YoNoQcLVc7Z%2BMk%2BX5As25Ws8TkN5VBM4dPyJyN0SmMsN0%2BIXHn%2BYNvTV01sntW2J&X-Amz-Signature=b3caf05d7fcf5766f1a321c211d1bbf04a9085a81221ee6c1bc1af0e05d5df4f&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
