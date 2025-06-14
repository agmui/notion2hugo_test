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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPKYTIJF%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T181024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIF6SZr06DvIa52Bsuf83DESWbdvWnkHOzwkfYB%2FokEJKAiB4sp1UGQXymr%2Bn8Orm5GZ0670rp35M0yo9O71NrDn9jCr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMqMlIlV9Wlp8v0qCjKtwDmEiZgojitBaBn8mrPqwcIKcfVFQcHL272z5zUuGxIYpyoDjtqk7UoDTjowCNv8K72vabv93zNIwpwlK7D2%2BxI3LMQKiyxdSVNUajKpQQytheIaQA395td4ZhsLebrFxQrx7IQV9rU31QREt1Z0GKmgO9mFFydikv6qEjnBNCNcfzlY6jvy8DyNOHKGi1nRTlam5lT1o5yEIBiu2ZMhusoJySNBhc%2F2JwDV7X7Q1q8n714s8Ptr7cjKJhzcftP8DTc0zb%2BPNC3dLrGsjC1pJ55WucaY1Cv7tYN55lD%2FmygHhMvHmZUPNiWF3D%2BhcKPhe8gOVrGU726lJFE01oAZUYmvIGV%2F6RPgHDD4752%2B%2FLz9ANipwzbyKDc09FNXUowJkqvTLdyNrL6HR%2BUTgsYXj2AX3QoLempye13pHISJ02mjLKb96ziyQPI%2BTjY6tyhA1gWgjBSLznxX1bQEWIlzfKDerRP0ubQ8q1%2BAOJNCF8O%2FMBf59bgVEW%2BlYWCE8FA1jUCuQeDbPT6MhR0xhEDLaeIdJmEm5hclsMb5M3xc6HAnZL2B0wSC01bzBruTjfmB7XB93s3RfnM1n0Ok1ykp7RSENB7WPSAYOxW8KNT68%2FDj16DZIKoDHTJjs7jDwwvbu2wgY6pgGRnNALD7sniL6CRJ8MU4ubC8kcN%2FMNxYIQqyzE%2FCFM5TtIs0hSu0%2BoMG7Lz1LI9I753ca7Wjt6rbDllqsBIlAUwU1MHLduARTEz%2FzESqQQIMmPPLWnu5KSI8tJAj7JJ795t5R9j5hJTOr64p40oW%2F9nzFJoHBNPuxRwAdpWxwOPianv7HDdB%2FnL7fEpeautrTaF%2BrO8DPuu5YKFoE3ppjHUo6HveGp&X-Amz-Signature=83b7cf611d6c14069749382aece3b95b255df1b13e04d453375006e6e750d65f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
