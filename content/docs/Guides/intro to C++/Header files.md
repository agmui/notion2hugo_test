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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFPJEVAD%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T150943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQCITmw%2FUvNNENyqyeAKgLSCFjMK4wajpzuQo6K7WFCqzAIgGWYUbbKsCWIzFqKB0jGXXAZ8%2FHIzTdfMZhlXg42VE5Yq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDOeukYkytPdjVM6USCrcAzfxKgjYbVAllWYFsETaUxSG16NivxZ9HkfgQdF1g349qAkVRjSoLh%2BuHtEGrhFU0Uq0CwBGPFHxGOk2L7HjB4BzeVIsRVXbW6rnMueSfzup%2B0OluUtCUwHCGUWGQ3yuAa6Ses8g5an2AAAtfTG0B4YZaGLqsrDMr3SWXDo68x3SmhoWNvfOkfNquQP%2Fib3MtqSozq0ERL2b6u5Vb6RgAwPwMt1bO0lIydX3jO%2BlGTgzrjVb8ynoqubvHL1v%2FV8BCoLo%2FbPn%2B2vQxEWIQAX5x3PStX0WeYVG1VhzSrMAf%2BLnBjMo4O%2FUZ63HbG00SwEmvSgg7oLnXdsjLHsD3rX9SHfDyiiMPxtFSVSs54QdLx0v2%2FdXHispXwFNt4fBSAnyefSP419ieDyV7B783%2Bn%2BlPuPNNO%2FZ9X0dr%2F22NYvtskNCD4ZcXfXJJ9wErxkpWub2475rClgovVLJlIVQvzJJ4lttEDUaLZz3z2Oykuzr3Uze3xtVaUleMdwEJznWAbqRhT7xgG%2FHGguNblWNqzObTXqnSGj6q%2BT77jiCLZMg9QNJslAJmOr8XG8PQfPXXeLYKryPHqRQTEps7F5EGG%2FazkZiJlwrcm1GaD8lpC7HdFsQCA8iCwyTIDU2GDpMKSHjsQGOqUBmQfGOo%2BrtKv364qJTSPW%2BUdKwQp7jlM9qfIJWlno0NPrJGYNLgiAQMu3C4Hcle70B9Iz%2Fu8NlnxCGbINNRmjQ5JXWnvB6SFg0uLJCOE9GndrHmgXYZ1UitgwSfJv6l0eRELI%2FnWyBjSqdVZCP8WJNOX%2BmaIghREFS7kpO3sKuxONXv5Up4HMnEJZkifDyPC9JKYKXZ5xWVmUhJCEZkmQpvoE6AdD&X-Amz-Signature=111da1617c051d235e07196776378245dcd228a301055e459f42a385f9d72cb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
