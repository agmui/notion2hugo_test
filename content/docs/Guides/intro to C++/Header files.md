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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZLKQPLO%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T181116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDECZI0Dx1H2bnlGxL8vI68TYWfYKBQXLvJMS39u%2FzF%2BgIhAIJsUapPsuQHT9IQgJmYQnZ2kCgbRkvjrYy1yqtYwe4aKv8DCBoQABoMNjM3NDIzMTgzODA1IgzrwLrcv20il9aTpiwq3AN%2Br2%2Fc4kdakJxh85VFljd6XMSxtEA02NKy27YpuPdUuN0DwGIrx60DXOjwmNMIGXGnXL8uWIB0tPvoz3xaMqHAXttrjFYa2ovtq66%2BR%2Be3u83Z77k8UM7ZzCgpZtkRCYaBVdkxURf%2BCyqF7GE%2FW4dS7Q6LP9Dcrxi95DuNG5nNEdhKD8YzFxF0y7EFn0WNTB4jCqY4eOaudelBvFNFwG%2Fw7MsRiQKdoYhAxyCNQu0ouFBcuP2ZGChPr%2FHuWFWrV5Balf86PcIPVCes2L0lT%2BfFcQWG2Y52pMV8MlY%2FoANe6ssam58luowtQwUapEED%2FtKeOtF0sjInVrhgmzZUN73FhydIkvJF18EOn%2FTJehjJofwtX5hQ1d2O%2BmUvCsuhIpcIawD1S9mns1JivdxP%2Fe%2Fl4a7MTXbMiy2Z7AWWJ6%2FO9HS4uqqvRev%2BfjJlqgmA8VQJDjkF%2FANmxSskR5RIQtRAL6zOg7hgoyUofv7Q871lKi7NBQmjB8kDWVGhvhcAluOE0Jf4RE9LEaeUrw1AWOUU0Ujnr9Vs9CCmsHrwcrvbitXTNe9DlDxe3%2FzCDIKsJiMccjzxSYEZ4%2FEvXF3PPJ1Be5YkG2njIzv6T9re2PrKl7On7LYpPS7CRjoz2jDZxYu%2FBjqkAXNeMXKk6iM%2BW%2BMvRduwFXFYigtVb9ARWLTwAJkRU5aq7kZtolBH19Q%2BWfCAdRcHpdU2eJFoK%2B0Klfw4N5RE%2BHJ3rWjJYejrT%2FxRFpO9gMfZeE96JaN%2FlaL0TRiXZZASYjGNadX2TnIfzmIN4k2GeqIU7oBW22evUUMw0hdZGoHPboQPNWZ9sX3EAxNXvjH2fSHSpnre338a1rqxid%2BS34SuMkNV&X-Amz-Signature=db8b831c417c46bb56f3cb7c13b12f51d14ca470220aaefc9403e7e761af4da5&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
