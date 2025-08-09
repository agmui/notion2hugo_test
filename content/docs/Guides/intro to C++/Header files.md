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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UC2BJHJR%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T200912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDloPV2NqkMUVoi2EJ53DQbraaiyKaQE3DMRCQI8k%2FMEAIhAIZs3f%2FRvnyuyhASz1eRNhdUoKnqI226WLiXaFxXh46RKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgymzZdwvMabO6TQ%2Be4q3ANpo5QGn3zVStvue8NM5xKe9LqVjDP9bKCqfhVXItXGygM4M9zOjqd59ROQrAKFPsXaACCTcW1e2fvMPFkWzBlg8LaYG2LmsnuT9Oc%2FOKP173GFpq8jthbNjOusimTWBl%2Be9zFCDLBCrWe1xVKx0l%2FlH1Nf4GN5BYEWtYLPeUUK4Cik9wHwBu1N7glBFY7GH4xDedxiue1HQj6zv53wgja%2BngMabgebOqvPDOZWf9lzv6tuRUuAAYBaXgb7x8SBuF6lAR4GgjGqjI5rFWDd3b5xTw4ogTXbH333TyKIxXk8XBN3Hit2kl%2FDFq0xEp8V3N2pn7QfRAGoS%2Fq3hu0exOmrnnG8VCQA4ZROtQ9%2FgpqvnM4rK3vgJcBRWILV1eI%2BhPsz%2FxJtBOZWEgzwTCWW8vqvyBxkRUFXeVm0y5mTyNwjjPA8Dv8UvalSjxqpnOE8qvOM2cscUPAZ3anIQ6tzSPLG3rK3GYnd%2BYqy0gFhrO1cPuOi0P8SW1L%2FGWphRbsnqaE2XtsYyd4LWr6tKhMxXrtfDIvIioJD2LWAbSi9PWA3PHCU62nobe9t0uJ6n5Id9zijXVMIkhJYNw4bu4DDlqTv0bbE4HTGD3iHbBjdLhhqpGzjCfiuj8UTRbOOVjDAwt7EBjqkAUQWgj531oj%2FZpzh%2BQyP%2BojDQt2t1CAxY4SBGuAT3s4XAScObIOQhFmCHW2WtNmZ1Q%2BRziphg8TaePqKWWcEaqzyTUXeWD6PhmkQPbARJt%2BJFqbh0T7EQ4NdvOzdOpmw8MxTPQWZHZmBWIB20O%2FHHBop53mtYNDkg3yHEHtOIhgwg%2B6%2BTnLTsqE4qDup4hY8jicySjbzqZYRbHlWgiGE1ntF%2FxKf&X-Amz-Signature=5f0987b80ad7b52e63bab586a800b8100bdd5c830a4622e3d3e5cca4bc3efded&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
