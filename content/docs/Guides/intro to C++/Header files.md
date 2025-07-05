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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZANR7DXQ%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T140740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQCPF0EL2N6dkDciFJRBz33JcnrglvwhDJjaQ8mC4%2FgNZgIhAKWdmyhD71CZMcqQLWDLXc5hxJEWb9zDrZ7fP8jK9Vj5Kv8DCEYQABoMNjM3NDIzMTgzODA1IgzrGUta05RriBuLTE4q3AOzboxvVLI52fFxcmF%2BYUEIxGYtzQnYkQqsdlBVvtqqhXhhapwg5FPfUUYBjrTQzE9VPrlAlfpt5VoaN6eEOSbm94k0dW9i4tsW8%2Bqyz55ubqRcLFVfFA%2B%2FF0fCohLWv%2F7pT%2BYYmPPgKuuPLNTx7pbJPxDQ%2BDKFwyNeFBiO5e%2FRQ%2FIEu10hAsYK5qskioGBnHy8FtI3XPiuOMDdfX9l574d%2Bwcv4ct9oR3g21tLQPcZEjTEu8%2FGY1S8GJX3%2FoiIV8I%2BgMH%2FISE1r78sa638Pe%2FX8K257g42ajsblqV%2FZor3gV%2BQBFPnFeZnaU4kR8K2E7YV2llYx%2Fic8FdE8BT6lh4uL3OJxuEqZRGJARDG6BqJH6heN3kiRgsHrh4kgOeCKtCfBNvtHiACPYLqOM4pHnD4lmzu1aG0cviKjsjlSgGihsAnw%2BoraBzex8%2FZnywgwOCE%2FUzicHcwlX3v5tRjKzcyw1QNSMGSeiSwwKa6gv2PqKFZdBMhMaVz%2BQta%2BF%2BG5Fj7tnFTbUEJsX4nPh%2FfZlG4OjpNJCy%2FAY%2Bap4z08bQY7Z%2BQstz7VBvA9k%2BYmlj1XOUCuoE4z7wHVKZ2RCX75OuG4Dth9G3mINWBSx%2B1PHTFDoNH1lNrHoOqXKrdMDCdu6TDBjqkAfHsri5mvdxRmXNnjOqyr%2BZo3ieXq480GCjNnVsaU3x2%2FgLuOzb%2FUAwuT6AUuZI%2BBncwUELv2MoQja%2BnB%2FteQr3bG%2FQZb83Kg75K8z6JYyl1ApY7mSDSEp8k5EKM18326TLRY62mg1E%2BGqlFE%2BnTZMjNAb1E10WnBDXmUw6q9ByhKPqHEHZBh0tVa6KUG33Veti9CoqtPTngcOpspxmaVzSClD8p&X-Amz-Signature=33c3762e6b290cc5cfe6971305ad7504df18eb1dce892e10c1ba97b89bf50bac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
