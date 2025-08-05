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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DI5MN3A%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T071631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQCsjiYR5WClzBVRTfByO6Zos2oAxtbggFRYOUS7IEaQCwIhAL1ORD880jOJn%2BRYY7Ns%2FhJg3aDM%2B%2FfpK%2BABhuWhCqW0Kv8DCFgQABoMNjM3NDIzMTgzODA1IgwjbItzi3rw4hmCI8Qq3AMlDQRUb8CZlDfcNikf5%2FzBGDZCM99%2FKZ5JZB6xLvzqIP762OPJNDzM6A%2B3ETPwj0NItSA3mYnWRrUVd0ydvpgMod8P558ixk6ik%2FIKUJlq3F%2FQXUwVH0aOFGI3lzi7Xur%2FwlQFx33sLnDCFnkUCPH8oBtIa9BUM1%2Fhnl3OAcaK1QtwaPyldS04rOP8I%2FgrHkB817Q%2BAHh6lvuOMD%2BR4iQaEYvTOu4JuOzJ854f6%2BppATEvzvphEUNVcGk35yomVv353dcceBW0YS6cssc18KomiWITHeiZqDmMDrKBD0IBJXFBTGAlu2hfKH%2F%2B1nI0naY4j0FKD33%2FQ2JfnIFl9ewSEc%2BcLTvjdbyHbGpCucBHAXKyfjif95brWiYyNmLxG4pdiYt6kPHeAb5raypsc3pAnwS2kU7YByYKjZzPPbAANji%2FtSS7HyEJs3T1Pt0zsj0CaLxsKYZLXOf2Kkkouk233Y6f0QKa%2FP4GLxs9Zu3qadw2uIifEmNRdKgG0M5kLEh8IJP2AfW%2FUhm6SArTLYztBgOhs4730RNHsXXN1wi%2FmPpGd7ov1w4I0TwcYregqXy%2Fw4UUw33uR7TQCOv%2FRfLnajd50sffkTsRLX6v4ozTYBjKM9LF7yoDCKHJ4DDl28bEBjqkAXroENxZGoc2mDAETXbNngYfr0OWIY77aLftTbAeIJ4leSrpYj1mMaxaPHLTa1rY3WN0Ic1McBG05zgXF4%2BCI6SgDzANl%2Bf4rWJcxiVO3sS63iUNuyIa3kOaxKmJ2JgqWbO7hNOeu%2Fp0fSb43NXoKx6D0Jru1X0CfuOc90noU3%2F%2FEz%2FGnUypA%2BsFnZ5D1DT%2BQoOAP2X%2FXvKK1trVS4gaUT%2Fpen9H&X-Amz-Signature=3d83d57d5ad0fdef338be1a65df0775e6ce64cad2ec81fcc84bd9de563a70f2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
