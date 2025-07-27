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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5RZSCBR%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T170733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQDEi9RnCL5ZSybc52snWfW%2BiaZbfAXqAVfdVY44Ur0L9wIhAJ8TsJ4aKfbmo58UM8hT5ofwvE3ccUEWwWZHGCHRlc%2BGKv8DCHgQABoMNjM3NDIzMTgzODA1Igytn8Gm7SPYVmt5GsEq3AOonNDDZttgoAvRIlNv0TqcJboB6i0LvI9jbAPVODsSgAVbh5%2Bg%2F4ecbZN%2BBdw9IwZhJLSMHng38pVHqiJcy9SRnniLCpxIhTW8K%2BVss7vBKD%2BKYGNgHly9%2B7xhfCv5BiGiqyaadhy2cCLP%2B8YmOkBkusYcVeiVWBWn6XB0b1uwY%2BSMsE71gvyDQ88f%2Fn2MYDRVu7SMXKjp307%2Bu3T5hM8jWRuo0OpM60brxwc41phZg0iyGz%2F%2FTky1quV6WAkbtT5%2BTeOJ%2BgWg%2FJhCR%2FKALRR9Vyl7hpfI0x2DEz3THfT5w5mKnqodm1lmDZvb7iWToRYx9Wvmm9rdbGczL%2FbJC9tgozykj0UPZeZn28W0HX6MEvbehtYdLDribLRPyJfC6hFt24YCTe%2BX48ZL9gyFoWXJLJ0r%2BSno0gzyz0PZov%2BduNYUqcUX%2BQjKobL4N%2Fy7R7OZVNcYvZ5jFAldlPu%2FMPvk2m7NDP8P%2FKJcdH1DuO5Y56haGFvCFhazqk4VGBQ1HXlSA00FerWDTTz9kbf%2BujhH3GNvqogRBqPd1IoOOgQ%2BtCo%2F1ovf266XI7ADimy1rBGuZA6FtSUsqGV2ZUDx3cRMu6xFl7z71ihEUaibbpoB81%2FZGNNs4cApcyhryjDB%2FpjEBjqkAWYONndWafYVs78WxOHMNWJJ%2FacWaW0rAYyXOtBxzpX7k892Pz5KzuHaEtYodDOYgmLgkwHlKGIu8ZIidbMWX5VOXz6jygJvs4hKBc7pj8DH9sg2MNVWAeuT5xbMpEnOo%2B%2Bp9rx4vKRyD092gti5IVTPQc3JOBNs64lXeV9U6pEHZiFt28qYmNN1RzzE9x20BrQuJ2j37EjcYOvvQt6DBxgDP2Jz&X-Amz-Signature=b632d2da44cd0314e89e175ecbcce8ab6966571095a4c67cb521dad95a433391&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
