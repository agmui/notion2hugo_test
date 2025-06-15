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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XR6QCPAU%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T140715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIGL3GYEPPsOi3jtzfKmLTFdBO%2BqiRxrca8ggKn%2FI99UbAiEAz%2FI2nSlhuGBpvTRxqIc8k1FZDTue2Agxb%2B5AbjtOPvEq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDFGXFnlmVqwCEhhV6ircA%2FZDV6m6iS0lND7iHuWn1sl0ig55zgn%2BGVT1frAw3W%2FXmBC5S0OVcslJV6QIJwqIkMU0CLTItOmP6PEV7iWwbYAxjuhk2F32X3GZRoANtebU8SV1z5hD1BpMs%2B5svY2AfTzZ3HP1wbIaJu%2FjXEzjo3DEYEjOfGWdkQjLSF%2Bfbh2rPCSRseAQqg%2B9c4hPBGk8pJhWX12cGrWaZx63L9mqKwKeZTBW66NoCvKfZcTE1JrSGnS6swgLuihSngskNCP5y2s5Rn2Br8zTQU2zLIbrQypysKTNjXBKV3KgXQIHZ94OOavLbhynwiPpYhZTAujBxbfCU%2BzVonQKRZ326bOhpN0qQIp0mfjGKsPR15shlWosz6seNVecctkCYsvIUd16XEmW%2BA76GISCPFEt8Di5jehl00HEeGTTsZkHDZTZAqqM3H%2BUHYP0SJHEewvcgSktWtON7rPwiN65CNTmKUfu04f03iPaxS1BG5tR%2BcsfRXpzYFl0PqR%2B%2B2xu0ffFIYGCnwDvqm3epXedhxr7HeKm61KkfOGBaBtvWtFLdrratgGS6Lo2Sa94xh09P68lF5rk34QjfaTbe%2Bw%2BhzWnouDeccxXIMPSQNc18OpEvRt%2FVZzIqdRR5Jlk3c%2BpbQFRMLuEusIGOqUBStspLgy%2FabSoO%2FnpzNlMeMQqipGTm76NDqn2jFUue%2B%2Fx%2BkqpIISvMkHEPupgzYCEavy5SaVilEsZwBN9n16LCGAq5C43icjqPyLNZ1td8Qzo%2FzdwNaSvvhaRtXUWwHvb5Fa3e5vdntm8fhIAEEyrHDDh3YXqG%2B%2Bi7k6P2UCEQwrUdUTNYysEHu%2Fav%2BxsUUs8ZrxcgugURFX94EFJkGFgszzbcQPk&X-Amz-Signature=b7fea83d7ba30e143396cd232f6b8b03fbb6f922cdebdef4504184a0f9c0d081&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
