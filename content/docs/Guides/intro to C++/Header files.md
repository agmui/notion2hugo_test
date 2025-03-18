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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663I4E5WSD%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T200659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQC4L%2B63qp0SqIFW1arJASbnpK1pyMiWxcKJFyPogAUHBQIhAKV2hGfNauycwvBDJsLSDU%2BDtXPAb0PNCQQXyRRCHozVKv8DCGUQABoMNjM3NDIzMTgzODA1IgzdnJIEsGGhtNprT%2FMq3ANeJZAnHzAyLB0W4PlWvElcQs8xNtXpeftsRZ2R239kDK3Pinb60P7HEPze52tIj3iKgcOBg%2Flx%2Bvl9fDmOCyNKGA2JR5lZ7YbIS%2FypSDk0vM6ii8o9ACXh6Z22Z2xKg4Uu3qQR10F5Xml9amsi%2FeaSvpknLxK4SGRP1jGejwD3A58edjQWpSV%2FXQWWmGL8AYW39TdmSIe%2FQ7AVU0pqtLhELfzBpWAZ7B39TTGXfYkHh8XRd1tvhJkZiF%2FFtIVjkGq9ceABO58A8i%2Fae8Z7gWEZo2Z4sm%2BHDVyDEKIYuji6ENx3h5yP%2FFXrIi85pPkaGJhv6TJI7WCLTXofx97xK0J%2Fqu2lMQIZTg5zH0ftBqNITqvDO2QfaNhkAXOpoOALOtT76QcCwryfa97lZUbliEJM7kOeWPksb5uRyevm8o2mRBE9D0wKw%2BMi4EvV0%2Fdtnf6ekZkKnm2riFFxr45%2FqV6TsrzeG%2Fi%2B9m7TOaQDwSjTGJJcx9W9fF9H4ttUU089ufxodnFspcVQJhyqZdCA3pYQHIEWM9TaOJPukObajj8Dn6%2FGFdTn0GYtd5Z3%2BHlRPqfWcNs6OkT2KoaLpmt2ZPEsIHkq5s0L%2B9aL85dWeA7esesNDM%2BwdvFCXs8HFzC3kue%2BBjqkAUxeu6ECvoURKbhSvhytdzix2XxuW4wJauLKkBnHoSh0DRj4IQTzpL4DgL2IJskZBSYymfr%2FjRGrnsEEfTmzkQzlUlPGc%2B2dPUQg2%2B5lM6oB6WBbquo%2B4oQTtUOe4mk6eMrsRhUCU5FDZoklb%2FhpQt1swJDbGlePjJdS9%2FNv8LtwOWUVinFsbMTuAPnNaXhFLqL%2Fdci00OMndrvus9xvpdlbobMv&X-Amz-Signature=a2ca1fbbd75b784ae6dece6e36a07b5e78bd86e6ad74598c3f51f83ced8d7904&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
