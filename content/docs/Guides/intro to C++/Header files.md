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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665K77QISQ%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T022802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQDYu8cG0apXL0kygY2xq%2F901ugx4e3lymFvl7YETk9m2gIhAP96yTKscxzPu2vyEu3VCRGdeBI9ORnSiEP1arorxxhpKv8DCDsQABoMNjM3NDIzMTgzODA1IgwS7g7SfzfMBWow%2BFYq3ANDnkr7dQpa4WqlmrR%2FNmRMWyNGOP%2BbwKmz2UI8cbz7VidV3WCYzdrvVXKO%2BMdIsE9SBLz00kgcEhO7zz0SAbVDCplaH6xJZuo8dfpdJF8dwlryE87rTIg2b4ymlcM9JfQPF1x7YBN1mWALwo2zcpamtnT1%2BpVZiMZXWUGS5fAJFDb%2Bprj%2BnmAWlk4U8SlapUruQ%2Bjkch8PETR%2BUV5HuxCHKr%2BEsWNub7E7bEN8Z48a094j%2BOnIWyCLRTk2oSOl%2B86um4iZXni%2F5l1ONHt%2BNSCPfE0PcFyoJ1ASgLJbkI5sR%2Be0qFZ%2BNgAbcqRB8Qq7D52HCCekJnG28ZUCWD6h0JZiorsBTa5AaYZtUkP6qzcE8N70I%2BpubsWXxnDwOXpiX3aUDlBkcLh3JFMxaQykBVGAy8UBpkcJKeLL9IFHMMfDFwBeXbD3V0FqFIKRDHmFKlakGxvmGDr7RGTMJPu8CeI%2BO71EyGwoWG73XJjzJE1pA8UtbXRqm3t%2BsGJ9bg30%2FFeAcbu3OsjITO7CfXdt8eInzKN0SgwkR0lK9G%2BLxYFEa2CJT13RYxZFBvlYwLqdoETCKCp73wy8Zlb2S1lbxAioCSw5Ec7p9CpsIsRdhZX6mlLOScH0LreAOI%2FIwjCCgaLDBjqkAaFVV7QMs8db4iyS7rlnkJfV64mcnALxn9yPNFLPX1DFLYbQnwIzZViSOb0%2BKcdg58apD0QZ7jJU9bhvLXn6ShPprJ9gYKigTtwv8DuKDHFyayEiBpGeZmOboV9cyMKWy%2B%2BQ4zQDc1sLH2l2ACgAUGlt9gqFO8ZEotR8rd%2FkXuw5lGNajw0qan%2BkOyR9Q%2B4NExJj%2BlWGWdD6I7VvHvZgGt4znpvp&X-Amz-Signature=0c1c55f5e6778587c10d9af5ddfb3537068094e9084681b7836842e7483fb1ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
