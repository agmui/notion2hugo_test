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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2MRFYDW%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T081426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIBKqhBcgxQNDo%2BSQIuziMUPREKAHQs0xv1MbG8iD0SIjAiEA8d2FT%2Bq5fpErDsmnkknclCsQwnT8VTWnOP%2FZYXfvrQcq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDP1Etodm8SZuHAKxHSrcA7HPbRR11NpsRAx%2BjBuu3wrA1L9mpSr0YzU4bKQAbZbPaVJt65vBOF7vbTR7RQ%2Bx1XZtbfneKdlRnrJ%2FX5VyoMynGgHwo%2FQGT5EyGtuaDo2rY2HcE3xTPPPwPXMJzheMThynvzGKaHka05U8limRHDxu17Oez1YmxoBRCO0yffk8IIXDY75TmixaDAbzqA1ugCJqflWnOBAdLou%2B2EOtmyMYbAcw%2FRUhejyBsOMfwh922z7GIAh5wRip0PIW6PLqAmS0R5f32s%2Fzgo8d1K7R6WIbl6n4HeF5NcrRso7TYDxWIKRl%2Bb%2BbgDievvwWKf%2BQve%2Fw%2FPjuxO%2FN5LL8Vy8kVDsVIgdjW0D8IDRj%2FIaErPyfC4LhvW4u08jtKV5QhYzx2QjDBmVeHWp8f55e9R9Vgiwm0chZ3nFL0hhDdGElENw2kZDrW8mruIixDn9Ih0oY4CxsTkCkvTPsz%2B7FAzzFx7mUdMQfxMfFvv6Rqee1KpvdGCK6d1cFZPYxe3kd9hFHd381Zo%2FahZmxGAUL%2FOZsR7xbrQ4H1SHRy%2BQCdRUYO9N9h5xxo%2Ft2kvKHVRJmHUlcUY92Dkz2bS0B%2F01oNWmNayQQbfh%2FIIQTbD3OqKdqjdk%2BGKRSK1PFy2GOyrFEMIDc0sMGOqUBUMhCe3MT9wmNJJEswMgziT20VRGco0LizXrlIQS19U%2FiAw%2BZUpBvOP%2BVuDjz839GPYB1k9XUjAmqEYAUewU9lF5ZCUNGm90K0D9IIMGQlOPJ4%2FdP11NWtfS4DSDoYIzlLhDHNmUicedOeH2u%2FADA%2F9fVUxzlV0gGuY3OqzPK1oGw2i6%2FGCf1gb5kyGUzej3ABUs8D9iy13G3tRrYCyEvyW19QN8x&X-Amz-Signature=91e194ac3f87d88e727ec9d4c68700c353e348312312b2f38b8e0f3897cb409a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
