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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMZHR2WW%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T230750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6RcgoHxz4Er1S8m3nyeYg63OtI8TEHms6GsBgiyufYwIhAO4sZKJD0J88gyimrqGlUTWhpGx3f4hVsdFkWkDgAw3LKv8DCCAQABoMNjM3NDIzMTgzODA1IgwjqOh6bKRGDzTOCccq3APvM8VOmbD7zfEMyBG2Mdev0uAlcvc6tpU27nfQV%2FpkYmJOWC%2B71UjF3Q2JaKNd0mMvY3sHDiZrRW8sRkUlzqJHFuWM7Oi13rBeA%2FW4mvxVGPJ7ZX9UzBFWJ%2F%2FW4G5A60cQjIKFWkHThNldrHAhrraTKLWGx9vdyQ%2BZuV3tUdyqehKHh%2FzBp0qG7RP%2Bce2ExYZhQAmZ4C0B7BVk3svA7ptP8RKFqL8SDs375kQL4sbsUL7aC5OtCkhZpgQXq2Xx5Jp%2Fj9YJxSyKvewz0pTzybMg0S60afCwmANWeyHI3DIVwlZwiXkZe5b4BFpyMDHhP0Z1Hs%2Fy%2BBjBVBS9oyUB%2FTUZRNRkxGwe%2BkMHf0krNcupqfsdoq8agrmv2UrfgbL8sTjqZkISrCHtEUrVKttueFUslj6LbRBOHIFuF%2BAllN9AiEzPcfu%2FzoOEksJWNEg0FZ9Qscpz%2FfVUpyjf%2BKSdyg8O2cAyjE2GRohFH4y4i6sCoa%2B4jSyuXYnqkyScp0ZbCHvriVzvdyNA9L62AdpDPOUnaOIxLHAhnFPe4ebzogKe%2B9L0Url8Z0FMtxmGMMlIoktkXokEGcFS58s6GAj75UrfzYZKetMG%2FnpQ1zq6k3hggZIYTnCVq2TFJHAg0zDCvMG%2FBjqkAYRbTrPZiP5Ub82xlJAu4yj6cMRIDvGjTamfRi6L36umzneeJ2ReABf7deQoTc4XfImNCdD84y%2FPIow62sLKF5sBQ9KjGfD0jxo%2FaqEbGgvGQejTJ%2FQhMfyUoOd0Av2ttZJYUwcYFb0ZNsjdUfQ75bl%2FzVufo64nFiF%2Bq4KVNj7nVqUZFXfqKnXJ9hq%2FwEPUJrEOdqoYhaLylnnINR1ppuiX5yM%2B&X-Amz-Signature=6fe97b84765dcf9c70f27bd325a092bed7c3947c1fd993928103089e451c5f6b&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
