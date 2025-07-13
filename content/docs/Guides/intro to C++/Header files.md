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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2ZXJIHN%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T042738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrzoQhwoc2L%2B6cr6E0RryUaG57wDPyldGjzUKlLGJWzwIhAPJzpYhS13fyKDvXkyv3PggSWtrc5a0M44DGgH9buAOGKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyOOL464xh0XVnqtlUq3AP7UTvAjM0tPvPEMySIYubG4vFZprt3LE3qkjtZdVJEYuCdN3OJKjJlwSzCWyh45xa5iOnaq3hnAe1o%2FwRXD9t9MM3I%2Fb11aefpyLx4ELhlV9bnOp6SfKMELeLpXw5Tczi32IeUr%2BEx8sa7sCy171R0hQgOWt8WD6PXeKK8oHHNL%2BnRH1P%2BZy6avzrpy8EIa5wCiWi24Dje%2BshbQAS%2F2znlT%2FwNx26DypO5NRoLTREfXZaNGMvk2LxMhTeRe%2BvEGja1ZWS5s7R4gHF6B68otUDmEipuKDnFpEne5%2FV68y3I3yExM7bJz8WqUNHSE%2F%2F9rIptpHu8h88JAsQzxjTY%2FbothlAHzxAIsyYXr70XrIZQfDDunVd52QCJB5K8Xw5sRTuWNLuafXRehU3Z0wTAoxgSMOsxdeGrhT0AW3foZXEySAi5CDVmI4%2BUbZq%2BITW%2B6RiXVaSw6A1qupd0v7RGt5JiohjWAb8qOOGVpRherdVtYLdBEbH8EC50QXZA21kJN%2BC65jbC1wwfiJCf8UNtETU01TcS5wN2hIVjZ44DCbDXsg0eejDsjDjWojgKmvAi3bHdVsiSlbslaFbX2goL6ofIURhRikwMd4GEr%2BRTQGt0HuyALBnvQTe0qAs0LzCw2czDBjqkASydDKmR%2B1rMxrFJ2pj53aVzVg%2BHDc%2F1kCrUdxw6i2m7K%2Blq3MUw2t36TW7QiPMaFdXb1ysQ071SHRRVoXo6mcVNCJQxaIqooqtyZLFFydYOs5WJSfJ%2F42MFTft%2BaWxUu7lVZzSv3OFXisinJnNsAUuN3BbsN2eE2BnAy%2BsYIovHpW3mYLZ1XzV83%2F7u5sgBwizOEY1%2B1WincFd0s8PsxQIxYVyZ&X-Amz-Signature=28b8a9cd3f4e3e32ec5fe3b00e1b3deea415f5c93804a0fbca36732fb9ff0e76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
