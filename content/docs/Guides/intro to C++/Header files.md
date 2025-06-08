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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTVKCS5I%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T230753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID4shbhY0tJ%2BdEwwa5pFjlA1oNOLPIkGr0mA9J3%2Bl0QCAiEAxeUQ6IqCsIhSr0t1BNwdKVrzg0McdWqSdZUBMUOMEscqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFkxq425uKV6pmmoIyrcA0tC5fAwNJgoXxaEuLQiJ7qRPwUwIQgrmHMtvgjAVt%2FUU5Wea1PX8ko1lyGX3uPAg%2FB2zZCJ1VkNY04VKqx02gKLYF190BzQor1bvZ%2F8nAtL3dG188E5O45urXrSyIypGYuIHxTomLbf9Cr8hLUCqqfxv7ZxpcNt2ApdLAXMu4IPhbDF%2FZKTWsDn8LZah27PoX54MnNCDI8p1S%2BUauZDqHWpin7BymU9Z4m4sGpU8xDfbOYNzgrmYNijWigyl5U96DywcvW7VTqZX5DT4dXc4i5yWR7P6yYv4EWGDfoTRaF4ASosUmBrvshyGWZtlGgiBkgOMULgDY5kmPTQRYBnPOWaDLB3DeYwS6I34U2txO69T2C5BTZ%2FlWvJsuS7BYpc0uYJkQpdsyTsVzSfjngvhBzj%2BzGlhdHSg8sxUCKpRI9U0PBA3Djga3fNIPDNTLo%2BrCzGNKRS0mj9TtnNVkM%2B%2FsAuQIr7gbwu16e9K8eSkZ9y9jkFjAVfzwcDyvQKbZed8duqo0%2BYPqfB9O2LTwBUCJS%2FDNFvXRsBtDVoldSdyzGid9YTzFlDmr2hDtkO6HRFcEgP%2BeQtf2c%2BjEBuErhw9hbFLIWDf2gqOEy397xe9NSboL7PQmE9j8itizQxMIqimMIGOqUBJ1PCvIRJX0V4aNxd02ECmiY0UXn9UnXcreD7ggcrWG%2B5x0WGI1232rAUSQAkdNyYWCUkdcPxAHBkNHLfwyCKdq9rfuZ5%2FjYzlYkuDXcKPf044P6tUDc%2B1GjRWngBZXCyePqjMAmHM9r4Qzhj7Vi10CSCEtKNYPm9YSAVAdPrjraE9uYDD3o2T%2FOX9%2FOrhGTBq5Xyw8mvd4j6rWtwuCDkaAPdrE9T&X-Amz-Signature=997dbae0174b91b1469becff2bbb8bea60ac8322f87f48272d9b62be6e1daaa0&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
