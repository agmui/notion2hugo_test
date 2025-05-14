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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645745FCW%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T033420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQDRha9vuoeleU288u%2F0gYwnhJmAQwB%2BaiQLUXoK8OJ%2FsAIhANBCAZB4PHQkXJd9jJ1%2BTnN9uLbokrHBYGuf9omCgQZdKogECPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwy8G2sORm%2BxHDE%2FFcq3AMZwHwAHZqSEhy3oir%2F5dkNfl9nmpbTagawna1Wm0VsJDvjMRnnJCZ3Dgwtt3rSFmlM7tVzZsxUB3i1uRDqoPncEPrkNgmHkct4qAeuIE2VjNMzXHvnAVAzpfKRJsGPU8t5PJjkhi1fxTJnPjKwUiHP6w5f8KYBPeiEUBraeUIz3ONAQNaWvBJFnEINLBQFbf1V5INYVSF1Vh2Te8JBVyTilCm%2FcuokPPhwMWcuaXq4RgfTPxSUPh9Wcvl%2BHLc%2BC7zETzSBCPqiQXyyMEc3WIYzwL5oBdkRPAsysNwbbL3n8%2FupkK%2BbJYQmxHB1kD4DT4mqv%2BuoLu%2FWvk3zztYontYAW%2FOqkfZQpkzFelM72nQuou3Zc9TjBDFpDzmuDnaLSqx1ij2tNhlvN73WQVH45tq6e0TtAfdRNhFyxRiPVAonu8OOMQv%2FowIKBV32sr5td%2FRexV1GwM8VTruKfNBRwIfaNDoI%2Fjvwwm56%2F6UOdkQiz5%2F0REuxMz2YbPtlVx5U4Ufvw7PSLRy2gOLGJNM0%2Be6t4oqb000qfCVJJo2HXJFhV%2F0E6imykl%2FfRD%2BxdzoXWzV3UzlYo%2B3PSXSk3AvVyubgBKXK6MK4acQwtKobb1I8723aMEw8K09X%2FAMLtDDQh5DBBjqkAcKHzD9E%2BCKIw8JfYH7Q6SpAj0yP6B1EQz59HyL%2BqQyIOilfRwUce21%2BsdgO8j%2Fv47AEDAD%2FVLCT7jhUWubIE3XD%2Bsj2h0DEWfIZSqCva3TaLqYAPDCZ8hOSy%2F86jXHC%2Binc0q02peMbeJi3027e4dUnHc0mIM%2F8E969RKfWXh9ELhERCo4b%2BedPpaeZGdRZb%2By0%2BLuPozoyTrSS%2FXt1CTQVTbFx&X-Amz-Signature=df15e454125a07265859bcbec727ea9073b11d8eb69bdd0dc22a0639176079fb&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
