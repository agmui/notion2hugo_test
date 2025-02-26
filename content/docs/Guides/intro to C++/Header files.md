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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466353G7AOY%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T110707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQDQxOOi4Fn3pr2mqXISO1qWaf0CJMj8AsqbFcY3D6XK7QIhAPQF0ja6wupOKkCfmwlJzOtlV%2B1ScUjy02xNj28u%2F61oKv8DCFsQABoMNjM3NDIzMTgzODA1IgxfnAVU7V4ZkwC8j3wq3AMuRgnmaEvGiKAN9bCFAqpfL84uVXjTX6xbU358sPYpR6ScGInMgrj6M79CSZ9NIlEbl14B8A1oH0NE2OBS0iQ5gFjyTJ6zaHsybuTqDTJqdFZGVN47EabtAbjEkwB9NvGRj24YiOTZWGX3mfiJD2uHKIcmP2HMdHzNpS%2B20EeuHw%2BgQOt9Gkvz%2BMVTZaVjpLrrb06kAxMKey1OQFmgcIlqUiVoklhNwd%2FpDJrbt8CgqGDzYpYN11xbePH2k8X3Ti3QjcGg6xnQWFYWfM8vxNKDvv%2B00Y2tFBVTBxeJSkQNeGcZ%2Fx0pI4n%2F1WgbY1OsrfXoV7IxWpr7MRHf78qi8QKm7mLq3EZCMYF54GAsbJgk15CqMWcryj4g2bLhkFoUVDXsus0RB0JPPAcwno0ICYQ4Abn7eoAM%2FnZuFXFLuDIo%2BUbWJrrL%2BCuGMFDFUIJh5XBhW4wxCRBSDsFMiuApVmbD4Bsy5DijNuS2zP%2BL%2BGLMht%2B4KaI8kJcHhkAb8QURnaBvmQVR%2Fpce1DI2ZP%2BBgbAfhvIbtisSamKOD9nPwTqROzXmMmQu86bbrd9XxcqCN%2BJ%2F8cF5nyigaW7S3yt4ZjYI10T%2FF0bSKF%2F9lwdHMo4s6w4pS0XzkWGQWd215zD8v%2Fu9BjqkAZ2E182FiWbDveyMYnvd9txf%2B0c5jgeJU%2BsNhXXLq4KkfxwhXaz%2FMz7jazvYtXyCPK829JfW4Pfpsnj9%2Fpi83OP%2FKIpHVJYNPfhS%2BoVmHS5w6LnWnVy4b3QFadXTIiDoCk5ME8Yzqke1XRu5AybKJ3k1upa2Pl08NuwhukswSMvkUf3Q9tpYndxYc2Cv2wahVNlypbw3pHI%2BXyPchuQkqunvqBYf&X-Amz-Signature=b9aaf7395e0efba53cca45fe96664ebd05a54be1a34cf604a6c4d92f2271223e&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
