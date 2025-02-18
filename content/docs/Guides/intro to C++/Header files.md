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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USGRWRW3%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T131517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIF%2F987Uf9VHUHRAwkWVavfEzoktA180dGcwZ3P1MvlJvAiBCj6MOUZ%2BMgfdaGNTKluTALIFX9GdJdzqbvBSFFTeV%2BCqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPRIYvxFzEbZtN9NBKtwDSoqlQWXvbL%2BZ%2FVRyx9EkxdRCNQmg6yLjOaZ9t1GiQ8JI9jIg1AM3gJWNHlE8OKkFvoAUKzzuH9MAxWNPQVtprNnTsN4zAPhDOe2YXMgGMJsY%2FiMmlmlZYNa3UxpwQzc33dAmoR6Yym5d0bWoIPEKpzXOPXoJsS9cNbjtQ0qRs6L0cD8YlqTMhfFN0uV6PR1ogP4NXz6CCVLOXHisvnfZkf9x8AOdghMUZ1qwUhe7%2B4Y5pD4rVH0gKV5GrOfaAcrUSzS9qRuC2Lbmmcwa8vwk5wGilS7OiyLeWp5fq4m5noFs17Ua%2FBUMX7kk0Kq3qfdJYRN5vV0lGufjVbFMbFj7gc3ypIrrfsNAfaEjJPb5pmtJAn%2BiG4sa4hFJHLCI3RChPIMA20IVEvfEMPm4UilgMBqVYs23LRWECkcuPNG4nxaD37M%2FFR%2FHJe%2F3%2Bt%2ByqGlz820cwo7VBqQmyHFDz%2FWzF8zLNF4jVdE9P0lo6VTCBk6cdOj86PXQJ1QEfBa8j5aS%2BmqoZXmQwCExyPqya6UIfLIgMDYndf%2B3T1FrnKPHuNULOvbk5v%2F32WAj%2F95rqm%2FwZD3lMnNVAFxwOAcyy0yWJAIGbz9SDVbMD%2BDgno7RcxQTl1iKmLr%2FKtN0Naswy%2FfRvQY6pgHXQUXEJ8jImaqcbSPAPjQj%2FijATpsNQkPk5QJ9ENIVlZfcniAsiEKRUGtFqcmMBWkgcSNZN1BF18XEDMA2gnDmHQzJe3wwFLjijnV08YEbIAnifw9QTAEjPPPgGlm26ge6vb4an4vBavqxh7HFSIJ5ehWl%2Ba9FHmyiwiDP6TD%2BpJ25XdD7GYittI8%2BFfeXLX3evPEt2r0KeKxcDx0RNYwASsIbCRq1&X-Amz-Signature=ee984f6f789332cc1a83596a47ab41262fc73bb635b5c0378a96589142f11224&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
