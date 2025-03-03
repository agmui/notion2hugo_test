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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656FW4DNP%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T100913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEZ2mkrfRPG5eThYPrNGwHRMGLTg51%2BTL3mVjH8CchcAAiEA3BU6D7S7G1K5YzSv6IBoK5rlLpGQkRyiWZi%2FYmvLeWEqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPtVmjprXRm9f9k0PCrcAxmd%2BlwQRckYt6eCUDWNGbuQ9LayrbtoxxrFUkdpfJOIugO5cgkIFOBs8FJkOjvRh%2FyNmf%2FHOI6gn2yjHcTUD%2Frs6fqOTK%2BLS6nsx5a4N99bA3sSgKfxYvDhUqXQu80yudwy6mJyLqbpkIJ4pC2UBsPytRAmKCrf9Ih7HZg7LiSbQpyIVaJybOqmp2IRgbPMHYvSA66ZbX6cG%2BSEhRbs5QwAyc8Zqq3R%2BbP5Z2P%2Bt%2FroVp%2BGJpHCNhOIE8jYaDPvMA8R%2B47%2Bz6%2BEy5x2kQS2lIN5HwtmcDMiTSsz8izftJW2E2GWIl7phI%2B7fNdIhKi3UppDtL%2FXe1GhvZF7MkfSpXMDzPJqFnmBIJYTrOa6nZvmUaSKvykIZTaQwa1mqdez%2Bpk%2FihNk%2F%2F2JYQ3tiCJt875sv6YJbNcHmOT%2Bc85n6yt7hCRSNzSD4dcESmQglQA7aeuUVSH3KCS8llE0ASw%2F6bae%2Fr3KxFFnhSrNws9pn8na2QlNHykhcjNP0Ef9eqpYFWMUsxgJQjFo0Z58mWISsiJn9em9eF07uKLuUJ7ISQDUU68ZodSii81n%2Fm2IGHnz7G0rXacVgj6zvVNRAW9%2FPMnKDu0woinOYyun%2BccIDaCi2WUSQS%2FBLQ8uLlheMJ79lb4GOqUBB2hgzXFVtIc9PBbieP43pQYfMM619k%2FIJzA9S6PSFzn55qps5rc8yP6tnbzx2YbaB6Jmf2KVIc%2BR3oNK4nwCyNMs07bgi%2FP38suSynt2lgXvOoOseNz77c0QwyFcrd%2FcBj1EYUqR7IGgDZTCVxIOnRPDM67pMfNGgrOkdm4mjUmamfUEdxiQRUWxI1AyN9q%2BHSVoY1vkxXU1HJRADgGHcqjeFFuu&X-Amz-Signature=53c9ea1985c0d79901a00fb3f8690a4aa98ba714a07b7e1871786061b041fd63&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
