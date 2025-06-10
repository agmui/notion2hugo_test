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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663F5727CP%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T170802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDf6iek5lDikl182Oy7KeEIY%2BQno%2FPqRYQk1cS3l0gDagIhAKsze401mP5BAyqM8eK0ynNJ4yYXFqHg6gxiH0l7bV3%2BKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxN5AzuvDM%2BOqUVc1kq3APbrZS0omkXdNoPf62ph3kMZa0YKgr5DH1TIatXYk1hE4VFV%2FJTJ7NImo%2B7MfI3VzrU5GHKH2xcersww6gxMk9%2FG94CPYHhRLoDnhFHwvh0%2Frs5xZTCsPdLcNpspezCjB%2FcasCSLkf94GjLjep8DmuDD0s%2BUXP%2BJTzxVhVibafL5WPhRcOmszfUD4ilzBxoOdlwNXQyRD0gxHAH%2FCqKyV20yDRT%2FIVk0gQKmdEN%2BJSurcVniIkXtwLOsS0Z71FwXS9xCrqg2OCKDm0mkuwFo63ofpnfCSDbPKQiI17SNMhzKd7xuUIRy2Hy3%2F45pOdwlOjwXJjJ2JjXtNZpwGoZ7GuF7ru0062ElFpBcgDsLaCxvBVA9d8XRDczZi485v95DaQlXcPD8kWXt61D0%2BBBnaSS%2FWW1qEZdWhZoRremZVlCjrKZz78bNJAlslhPwRqCUdc00Gch0xAHBQ3qNsokuqgEY3%2FB8Zm9vfxwNp0LWbQDumCrwiBAaLMI8AJ4Ys55YGG072NpSwbYZpDGYy4Txt6WQk%2Fw%2B7b%2B04ukawuMXa75QpcAfDXWZVb6%2BlAflbbfA7TuKw7kmvGuV1yE3vaRaLOIV3avloUgmPcsyQvgARJ1cRERJNE9EHkd599dxzCbyKHCBjqkASd2JceN86G%2BEyUUl%2F8GVaI7a6Pd%2BZkEWLvfQtJmtG7bSz0a%2F%2FY93uapTHwGhrAj3pUPsHmw6ima8aVnWp1%2FBWopHRfcpOsafgrPv9nZ%2B2PLM8n1%2BXmz8LuyAgMgDOGxgkgOM2OCNzGCjS24yvr34BcgGhN6%2FZgF5XmNUIHA2CwbgIwsgAazK7dDsp704h3VT3RXqKMyVH%2BWVW9xHI02WDmoNmQZ&X-Amz-Signature=036cbbeb66a516aeeb7057c862827d76657afdb5577d909272c93bfde46843a6&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
