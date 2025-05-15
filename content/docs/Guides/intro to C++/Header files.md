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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466474O4ZDH%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T140900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIBE0ggSfTX7t5uRFSmKU1k1QPvx8b1fuSlHMO6qEb0K%2BAiEA14Qpwt%2FCOGZh3SdDBUU1oCYIMvDVbM8q7DoLQaIRS4cq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDIFASrdWjYnjCRjZfCrcA6bgs2VrhbXO5ykzDtDIMGPeokWjmSWEovNoOSyx54rB8AGQsGy4YzXlGbOFjc%2B10sq5UUgytufb9DAobeyr68dePMOEkCZgNwvMdISW2qc8TUCj25%2FzpiEpxBb7Ip30L4fDma8vCSRdO53fdpFi3tDvckEW7HD6CaD12FM7or8qVLsS19y7C3ztTXxXNUYeoThwYqZBTZwLMLnOP4fxedSiP%2BKcD8AbH7CdocUzs3KtiyV33ZQRAmXU8OEklRRBgLNUAXuT1RyWGAH%2Bic1ArGX%2FxFb0LRumw5V7lWZXdSjQEPjn0IVug0T8HXf2Saj2Zargoxu%2BC25x8nxFO9asFPoPI5qtfqg1pOkr5MFB6qvNZoXJLRrV0gKw6WRClJpM762EVkC557iDsw51KKCPN8vHC04zzc0R8Uq0YCnNyO%2BQQsYfmE6EIBpNtuwaNCEFqa6jE88%2FkjEeCv8eqNZTZumhXFt4HG4u%2Fv4bocjELAlenbQIToBnAgJMYNvaJNMyg%2BnHLVAy3vIyuyuA3UKcHOu%2Fp3L0oFA3l4x8nVC7TpZFKdXqTtJ1tTK40nQq4xzeWp4nn%2BmTJQV1bCesTdGGgJkgjGGWMvdPgcc3PWFPteonl11aCu0tQk5evO7sMKrVl8EGOqUBTbg5VSQy7a1lA9Y%2FxciETXp2WA0KCiokXqVO%2FjosmYi5rGV6ZqBWwnY0RNt1%2FBmxUkXNNd01dpRt%2FW%2Bh%2BDjpuNXrQHVKyfXxlC5DhIJUS3i%2BylVJSgOpnWYHIuLXS0c3qDucEzifaypBTX0ynwATUa%2FtvMZQqstm%2B%2F3KMYeJ5P2T8UnuUA7ORc4AfdFRtHafFJkKEs32mv4kAFop%2Bl7xOrjcVWsP&X-Amz-Signature=7a9c62c703a3868e0065e73e9041c5e47f5c607598e454b74c413371dd1f2e40&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
