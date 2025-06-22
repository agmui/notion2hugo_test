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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466657ETYMG%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T004751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDfh7WODOBT7lG%2BR475PfFWG0EiHojfUywmae%2BXyh48QIhAOi8ac6If25erEWfI4wWHy2Ex4q5QNjhDLU%2FU9M9%2BZBOKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igywvl9BZXgpalI%2BzwEq3ANRGBeoAngvRP21YMbSyRv7Bac2yCTjhzbPb%2BWMVQVTY%2F%2FN1GYmwF9scQ0WrJQl7cL6TFLitNy3LRvTwX2P%2Fo7Djsoz1bCP1OSEgo4nWizAZ%2BGI5JCHOoOg9N%2FYbZ2x%2FQBzXhd2LCFX5vbOPI8N%2BuGfVpixlsZNaGwEWq34NvBJ7EdyQuHSADR%2BByujrDMxK8MFtSfMdLyqvuD5%2Bu9BDOdUYy%2FmgnoZ5TwaurkNio1fc2szdoPZpVGb%2FhOpWKXlXRR8UKYxxAnQGYZQIC%2BahMLXAQfefsE%2BL0QWkkpf8az%2BALBVys3gFQKCpp2QykkLVFHBIfakulS15ncsuh7SbKlAvbsq%2Bp8KWIJwodjxCKVBPnJiBqjTc%2FgTfgjV6FaEGhzXCN8Q8ZbMPG0yrgH9KDTMx4%2BdC7LvCRI9esmXuTVVul0QWrhMtZaOoRkTif5r5Ro0XWKXZiVk5t3Cc8zK0IMpyPxlt8DrT9xcBp%2FLFiWbwhoUvFUPwMYAtGSgYRZCgIEXCje5d45DMMZr2QIaYSu%2BZkUPr9f6xAbJhzEc3UOcMR1RqJEmEHeyMd%2FkXVEg2%2F5L6yCjDRY85kto2Cron9rm55kDSuR%2BXjEyCUqBpI1AVGpeSk0tvshfdh8PCjCyh93CBjqkAXkVdE4PIkwyi%2F8HzBujoyvH4RsiGj4GKJTEHh%2FF8%2BUgdpS2v2cBmLuYOPv1pyNi2Dttjzy0ivmVC6j6Apua%2FMqkdGtsmG2vgoeOHJlGOACaqu5CRhWp0RhV9FcUyHqmJ3%2BY4Veq3OurFgb5DlfgC%2BPfYIV3Y7M67uzHXTR%2Bp9h9%2BbW16g8%2FXow9bsYkfjmc71TJ%2Fm5I%2FRGBMaA2Do%2BSdoge69Ui&X-Amz-Signature=41939a1b9b81458ea575dd7344be2e4fd4e7934f9bf32847d57e797a829e6cc9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
