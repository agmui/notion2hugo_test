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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5XA5BEZ%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T150808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIEOPaHToqv%2BSn2V4Q%2B7LlF8Nn8qU9DI2bPRHlVTlnashAiB7PQvEtXt3zhyS7oX3RWVoJt8Wer0blxZxRTkT96c1mCr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIML%2BHabnF5byr%2B7JxFKtwDYuN%2FEcbJv1pUxA7k9Gc5qbyz4ZF8SHt%2FcrmbpgKPzx1cWYQHIJBHrZ1oB3eNY613j6Ux8H32x3MgwPYj1k%2FaqvCMl6pnO1Tc3SnDbZppixKAxKGOuQrlHKhhLaHinQluBhhojwnjWuhzmX7MQsi9CDxm3VYV1%2FXoyk%2BagEeh8c71RECIVHUuJMgNXJIp2UfcVSw7KpYsSfnvEHevMdvkiI3LmbhrNEDciqXyCLy%2BEH8QeZcqN88eH5%2B6zY7VkOKjs4ed0C67XntXcx0UrRovul%2BParvX82RJpY21D%2FS4KxKArzcMXo23dHcnMAW658UsqywfqjaWbW4eQXsJSFkH9CM%2BQqHWJmO6IzvcVUrKRRs16aGFeN5ufkJbvns3oPcjrgioDBKr7KkIYteUJR%2BHFrsoUtAFPhAjkT6NqGJy%2FDYW69OXTAjQK9d%2FDSBrb99ke%2FrMVgC53hxeQpwD0mWkBbKzFjBNgKV8O1W7gY0i9pgyd4VG3UXCy8s3XzXn8lBn%2FCLMqpnMIneEWaCQmjnHkqauz%2FhmYkfW8VsuhoiKUE57h6XImznGRq%2B7jF0YPPj3V2rhktTNrF80hk6YVmo%2BBpSvxBCJyvdz3zEO9TrcH89rd0QXrC51ZXMr3v0wtrivwwY6pgFt%2FwlPErrIBQMwoCGJACO1%2BoGllnnFYrtYWhLH05E9%2BBKjh4oucmXWLtKH0fNxr1M7VArtdXZ5D7NlAXddt%2BOXrPQSfwqSJAIuoBEQd6ylTq9urABDhEMrGPsIKynoAZvsa582YfsbBg6y9phlf0mTkE5a0YtyEIYJvcy07t%2FSQSf%2FhWMisYjp0KWo%2BAURuNoaKy4qOMxOWtvm62d8rW6bsY%2BZ2HKo&X-Amz-Signature=51781a2c6e82adb0039206cef6684856e12d427a1c748d59fafb8dd048180153&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
