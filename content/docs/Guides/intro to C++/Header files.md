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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SITLZFY6%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T190928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCICjcpiWBwagT2VPzrNnkAMQ%2Bf7RzgeQtbnnQgAOmKxSLAiEAvxgi%2F3%2F%2FfOpSuMQ47Nzvn47CKVMXx0YZhABUjof4B9Mq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDFcQ%2Fal%2F1DNGnLWSOSrcAx91fxNNxL0rla8f9GC92ZmQ5jVZYBlycmTnOW5%2FWoKZySfBGZ0uMwADX5zfSVm2pKsuf0zAsc8mJpf2uJwDhAZA%2BGSUQHsfFuQUvVC9hWIUBN2DH5sDJbcNvGx5d1eVFcYD12xpXvQlU3jq7vExJaGlhFsA7UjGeCpSQnqXzuKXDy1Xf8gKvu5gjf3LKVzzcwCr94RTqpUAfsJ4EcG%2Fxqe1Ep9ZB4sDiOpiJmAh76N6z57OOWzDZMuS7SAwthc85nx6t03iePRJX38Ff3YdRcoLo9mmZYePIFb8JEKCrTtoRKGVzpzYzoVcmw0H5KfnwswamMLd%2FpsFIOyThOgQXrl9jHLSNYB35dV1oHMTFxTinWZxPEwsx3bzqUrxQLETxtD1UJRIgDmuSyDlm1Uk1l1qZk%2Bnpai0bGaZdLQDlw80fSnBbbaxbGTn9WL58hDfFP4VUL8nvVuObdcpt7yKYb90WwkozsRVNK2qVIi8J3gTR2boeSV4f4mvrgoIvOSB8kUnsA%2BhiWvqnmh69GSD20Msy8YLuFK5YIdUGjRU0hE3fVFbRwikdHNdxWBQ9TNtXliXHqIQ0UIY0YKN7V9csuGhSGBxNjTL2RnjXDyLtgr%2FL6sACyXdbZurVzIuMNnTicQGOqUBa4dLHC3jUgupZu9fuE0A495NiO%2F%2BiwZsdSmQzeVPCkrSwJ5UwQFnAtfv2nceac0yRxfR0E5rQjJb6L0IktlnlAHzaJhaYk75eKaC8OH5pao%2FbuV7TYzTUVuAx8kztw8XgrZuv5cBqDuJm8tADF4rtFGN%2FS%2F7R%2FYnFAqYc6ipEueg2WeKJLawEYKWF7ibwfqotn6EB2zVSCLhJ7j1WQGTGZyfFXf8&X-Amz-Signature=840489f8a0a2537ee02fbfeeaff80044e0a724b497d5e1691d05fb4b70aba3ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
