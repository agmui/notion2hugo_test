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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LGAHOZT%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T200936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMz1E%2BNmN7qOHSh4Hmm67bhJXiHVQv9rrD9V1X4Vw7kAIgcLZBYb3OAmVfFUhnPD3KTIJhMTlShbT%2F34Wub6IrMbQqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCi%2BiNch%2BhBaPI6urCrcA2NYxidGpachHdBlv63eWGEs3q3dGAMl3sEVEDsRIKxnskogIPb65yW0jlOZ1uxw%2BJ0nodTXkAGvA1lfJGWT36lMuhFGrQRDkLKHlzAY9MhDGqO3pt2N7OT6cv3UfEcHBsIZfuLVDK8hvX8Q3JQkW%2BvCRmzLUcauxlUVtxnM5TvjfYUJqeWW%2FqpbCypHd8sY50WTCtkdsEewXjoUbNfAoAHTqjZGpoOSYfd0D01UixD7N%2FOn7BXTghC16Jt0S7gEIQrZoNvoAal9ly%2FnDzxSfNr7TPT3P0Bfyvqvaer%2F3kI9agDPS4Zt3h7zIHa2MlmywTxB%2Bpp%2BW9GMhePfehIBp0OZW4zF1kqxQ7zSXxreeL4uZHZIhS%2FgCAmsF5UnZjDrQHgxVIknXW%2Bm27CfJd6Q5oh0iBqfiO5qhhWeD78VQT7LpqdU7oqnISrPhye10w7jELVFAoHOCKsNmJRzPjdS5v2zwIz41rnPIIYV8N34yfkJvvMZ955fvCpsit1SiAaQX%2BBlQiheVLaQgXWvGjd1B4T%2F2f9MF4K%2Fp6K4bKx9notFdEE60jPj3wbC1do30AQGIpur%2B9xCKJvbIyiK4yOPRAl7EEos1OuGKeHg8zdTyGCa9NdZHo5eWBkH4Nm1MISs%2BcAGOqUBObx0fFh0%2BgqoSrN2xD8hemhbwhjylqLrPu00V7PHaV0%2BpKMWRfSJp45QUOVSeX75x1uoUQfaRMlbGFOAjfx0jr47%2FM4HFxmZm07sb32Zm9u0OZS0DTAMAwUGy3U9SiBfEbtlF34lBT2cUYlNoDvDZxsVlHFm8giD1H0aUEWISJURfjR1e8mgpAk%2F7xOLHY5zzGsrNcEj3K6wYH%2FdzBVox3ksl8TR&X-Amz-Signature=9efe5cdfd1a43c203f3ddaec5c7e90ad1caa258eb661a8502dc6a557a4775047&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
