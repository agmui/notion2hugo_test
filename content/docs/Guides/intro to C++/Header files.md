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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UP5KNLTX%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T061320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJGMEQCIColRnbgmL9vIokM%2FFnIsl05QgZRqI%2Bf%2B3D1uz5uFmvoAiAO96Q%2B3DNlG4zQN1AQDvGxSrutmcttmHKG1WUvTTnDrSr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMv1L%2FIKJvHrFt0F7jKtwD%2BBLUgO7oTlcj6mqMRUGPgssF%2FpQGS2GSUbvs67AryR8b%2BynQRl6Dk39Sbbb5XEQf3NmSvJP9csi2MSKO9%2FbQ13aVgROBjE7Rw8bKct9BBS4OoBkiAva2757077nTQMYWhlrjLNpUp2J5XwVyLkoWDLg%2Fb2QMjS4W%2FdEmA9iimHQxpEbFhXr%2FAwVdKR%2F6a37oZTanG%2FeEY3lt%2B30mD%2B3gq9BcUZPttHVfiEuyr1dPKIWrsTiP5QXfjiT8Cz%2Fe%2FJRCCFGfY8oTp4adhFH2vAXbIlA%2Fa7Sa5UfK9%2FUD451B2nxMonnzuaCPZSdq9qZSvoAfq7sk2mB8VymNsiXilxlZxm5Ydbai7HnqXF9Ri%2BApEwjCsLhfOfmYq97N2v%2B07un8snMOrPc2QWgfOgbFLGcM6e94LzvClMMWOCleuJ8eFUhYQAoJVXSaCg7iTa9NfAKATC088D1ga1l6E3kF4Dz3yNot60IF0YcA79HilJfdA1HqYdX5smnQeQnKhAH35lcrEOJeyHAWwndvJez3bBiXYF5i5bzp7v6wquZZPEHVWYyEbsfGpOmVa%2FO4W60v66QUFbQK4cIlkynicSjorTIkVfPoE6U%2BKb4Xe%2F1PCF37d3I7BvuSsUmfqmNtMX8wrMH%2FwQY6pgGNnYjeHzCi5Vrt3MDZiP15HR1vAw7MHBRXrdC52riHmYXXXB4LNJXBpIkD6KnRaz9ZUG38sg0PvmL6nFAaGSbSEhf6Ii2cJzoKmgLQtUuMITB5ke7LwOvKSEE3MHzXmFjEDkAl6y%2BA%2BRcmYhgEaMKoWc8REBKUPYGmhUf1Q0C6QOApxM4IZKZS8n9v2CLGksh7R21tk7pdTfK6%2FWM6380SMdH%2B5%2BkY&X-Amz-Signature=744371856f82a584eddc23eb15eef6a4794234d21ed86fd8b0f5ba71f1178d76&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
