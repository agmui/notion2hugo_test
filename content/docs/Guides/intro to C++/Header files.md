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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBMBCP4X%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T022847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGuI%2Fy47alpgGc4BGeop55QVOJki6%2Bg5wj1m1LZU26P8AiEAk3ZStKi2fh4PdqTxo6RZk%2FeWKuu8yWy8MggNGs38C4gq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDBuzTYqRL2EEomIhGSrcA59ohNsM7gPqpz17syZ4SarjrdRJDuU8g8lP%2FoaLqV%2FzyoxdOOSYEaB1AyDHwygUGJtfci1fSWWeqjAsooFDBx6yAtTDcJ2UUismXtf4VBXhdGbwLSmnUPTa5LwyOJBsbmfxAw5CHjHFAfDOEly9h4O1QgdAxj9gYkDf7LMcrlNx%2BHMkcRRAmVmSzhC9I%2BsfYvGRgjVF6y4%2BSMcuNaQVmHO%2Fg%2FPZhG2oJG4AuIf4wquB9CwbcLy1a1teZngHfRgG0wPWsTH5YoHv4TuDybBwpmGUZBCmxMVslMCsN4A5UCjSxMVm8hT43%2FKA5n3IC86v53kfbc8vuBe%2BhthFrNLk6xkSboDUEJnAfI4RCZgWZvBsdD9%2FkNhPIrBRfmNPKA9m7NNdXYp7xcm%2FR5SuMKVIspME8VY%2FzgyE1cpAFZTvajYx3bUkgCimhYrxVkIXp%2FUxSGmyfD1uMh6DH0Xg9mEuXJryCM4Ov0T1lB8ipTrT1RglZYQ1kS2A8VZxu6MIahOyS6wonj4VignfJSazoaLzs4cs95Svj8Db3NX8w3%2FL53pBfSesr8VP7gBR2krVqmlxzUR4tfgM%2Bn%2BpXHmUctZzg3pyrsmIIMwtUEewM7zsmIM6IddNrH6r%2FCy8wlSOMJG92cEGOqUBIMI6LFGLKjV%2BkkG71XGoVgZqFaYvGhQO02P4UefUvKVZ77yGPDBPdVdaXC9Kn40WUMYp3XaaSa%2BO4JJo%2FGnXkA5y1NALMBURmMzQ9%2BFauMP4os6ahbEJ9fR8YFLuZxhQzUM0YXG7nFQwoHRHKtoSQylSIF%2BVxsoqW%2F8yRj7SactQX%2F5a9Pop27ypJ7LzICJt7ed%2BJP0Mm4Fstag2%2BDuu3q6%2F7Qru&X-Amz-Signature=2f6744b8d9ca89763f6eb4d64eef4bc63847699c425bf448595e61424b338c7d&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
