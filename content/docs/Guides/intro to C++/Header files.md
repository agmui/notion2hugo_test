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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTIEK6AW%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T004252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKlt8qNAkDdx8XTWh4csXPh1fLpjToTqmBUUgxMDk%2FgwIgEKPP9R1boZt3GZA%2BP%2Bru87vGXKXaC2%2BDgZgFNVglf3gqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHq5SjYvuewvdTiEDyrcA%2Br1EDqoNEeRxgOueABZnDztKBUwqVWxHzpk%2B4g2ARAjUvzq8cEORo5y6voaFQvfHWZ%2BWYKVQwehaClR6uGm0m1EcUgB7HG990lWiLE8vdO3Rt5xjV20O%2FnQ4KChmaQ0kcuMxdJCLMOAMKE%2FzM0bPJCvDonsC%2F5sUiDtOOjDkPvihvOoK9M69gCayv8sJ5HG8FvKVJmPTULnn2xfhAj00fC4DsO9S7W988lM%2FVVvMUdVFMIY82uhqr1HhV%2FDT5yHOgUsKum1K7%2BTA%2F4wVVFyHYUWf9B0AeUk979%2FH98weh5EmuNYG5UqjzK6HhexR8GksPOfLdtyOlf9pc7Zf6f1rEdwuYXvHpznGcwedFhf1Gdh%2FxAa8Vx4ZIqpjdQMo18SwelFh7zYczg0ge0tIMfIQmmDEcfhNxYLcAx8lPcfUgDQzjV4XCnLV709fHrEc52oSgsRd8N84Rs%2F%2BCxsL1%2BcFbfO%2FB8fj9F7XSHm9lHdmICGmW9Jd6JvKwAJ%2F7OrTRbDXXut7ociGQKtJUnxsscXboJ4IDCWuY%2F%2FFFeGTyRNhGt%2FFk%2Bg0%2Fq7aLTKL8oU%2FqgJIz5C8Er%2FgtwkI5dkAMWcrk3HdW5Dk7pRCThIAkEapnnzUvxTz3FycXMP%2B4gcMMOgzcIGOqUBvYMWBJCr0tJLEjjz3Pyg5y9AtYHxGD1DslrPRBLiH8yNEqowpysVvIIYbPoM2i6j4FRegoG1707f%2F%2FIOOMnknavOxo%2B%2B8%2FkMf4lfnFFT74eHPUPqktTZ5Oooby42kBnKYkE6RAtPpC58t%2BgeujxaUOQVXy9Hcecveof4K0tQ0q9CIyeGQoPhPJ0rabmGZRWyckNhq1G120uv4ug2BteTd29QB9lH&X-Amz-Signature=99ba59744a88c307d6a18e8e940bf49767646a43a14ceb085d1406f310d73219&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
