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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYTCV5GH%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T043858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA3G9QsdpS9mmrvdr5AzGwz%2FEtn2ktx2SN2hlK9C8RsnAiEA4KM4%2BxkMvHyoeyzY2Q3VTKDEgUBHMShhoskFrkbK1PgqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNRloqgW0faCwemyDSrcA6Z96sWEW3AePXzS3MehxcmEZdsM%2FeEvxQfw%2Ft87BeHYpm9qH20lXVIpQVM4MJxZaHVAzxRIAvC9U0QMRPl6Nm%2BHMlGnqCcVI1k2%2F5bvkhr4c2vcYcTOKKbx7AVezu9X6Z4HLcemuBpGm7axdEtxUeBO6O4f%2FFMNuOPwhuZycx7de5%2BR3ya59%2FuLoOIW3hi1EVohYc%2BLkR4ZjgVJyEHIuWquTl2CChXPnjkBlEHSzemrSuej863W7QpxOjiE9oqkI5Gyc0hvvuRAG4We%2F%2B%2BCbt1HE1DGTayyQJWttOIZ9BpNwlHCqzqVnyaz5NOdFLa1LwYsBTlRu%2FCDO4whbp8jw6FWVdV2r%2B7IeUWCk7c%2FdTS2mv9OKBo8Arpqsi7wb05WfjO%2BBgIbvk36V5EvQN4CSH3Q5LsEv9BnnREDENZadRWj9%2BvesHDLSTc2yBY8VG0%2FQo3owRKYv1Sl99BbILTHDWBYSwcvD2xPNBJNkqIbc7VT0fno1N993Lro20Yx%2Ba8xDgHbwAM1vyazITuJENNvMS3m82eeFa%2FnhzZPgVHpPU8GOJU9PQjVD0RcUd%2B7UcvfaYMFlRUojKH6Vmt2fcGjo6yN%2Bte6w%2Fi0PvIo0nkSjNA98Zq4GhsbNaGxN4CuMPHypcQGOqUBMvZopbCWM38RNQlilRlEffoQXcDXENHue%2FHHkDwy0X1zdoZ%2BfmMybin0JKzHOwGLiSJwK6O%2BDl38IrQ8aMEdmM%2FM%2B4dP9RC4afca%2BXkz0xFJA%2BiItfXQ%2BbwbWA%2Fup7j5F7mWiwlcWu%2FERhsmIw08NiAFO6jgrrCFhh3zUXTCuyCKYB5yGfcRCVskp9aHJIxh%2F68E3OnSGFI%2FXQ9IHg8VY4qVvgT8&X-Amz-Signature=d8519e990781cf5a391dff87fe4363fca908913547568dc7c6983e93fce2818e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
