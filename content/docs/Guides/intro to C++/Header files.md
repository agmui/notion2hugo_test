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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KSFVBXL%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T220704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQDzKu1s%2BQc2Md7G4yDpz5xd4a8bhxe2%2FPaOoW0HvmAE9wIhAPPzGRS7jTpQH322eBiDdzdGV2b96CQSmYgF4DwVQ1KuKv8DCB8QABoMNjM3NDIzMTgzODA1Igwy9UQ8xl36%2FLHr8Zgq3ANF%2BNWznixzQTp11uQFAqrQ69WCPxrjz79k%2F%2BXhnzlEGN5XZxcBsiJOFa1zFQDYi63C5zoKIcL9rLk8y8dXnt%2BfzMcjUj4Z6XbVC3rhtuMtTt99K5HLDxPaEPJmQsOmQkKRdPzzmko0g6hgJKS11c2IiV0SFTM8Ijuyezp0nEVQJ6rHbD%2FyWj1r7OoNiMOHrjZHrqHnvQPY3Xc40C65hUfKrVbfecmLP6Nfd%2Bwfg7BHAb6RL0UkV6Ub9LZNdbL8yVJN%2FBwa0Iqh%2Fx5zKzV2MmvwAeokM2HG6PA4Jsd3GA9O6y0caE%2FS2CTFLweyX%2FrpndtLGTtJTZG38673ArhdiGaA1Z%2B9LskZpQnKMg%2Bc8cVfJGK0fRg9VCE3D%2FH75FuVJZUP25RGUPBkUwMzwBylLG%2FO9yzZsZKU%2FyejsrafmIahHa81lwdED7lpDVpbJpD7aMTe05EOWRX6CK7blGQB4NnYd%2BUTR3AiDL2PzYzIFq8laCRxxMtubHj823ZU%2BtGfdEZp1m5X4zNRnUc176CawdCKFYFzDwsg7CFsGfTabnoYzsVC0BvdqeVK1ZeElIV0MTgueZChLei%2BHHXWHo3IZyzZZzW6KRA8av0IAWsh7NPl9fuF4PUr80ryIL3e0TCU%2BYS9BjqkASWcgOTufH6EzyhfoMM%2BiYFT643x5RnaebZ9F4FPTxBVlX7LRKmjYYCHaaysvnNonfTrw6jK1zt1aRYPakAFHw4tFTlEL3DTYjHvsi7hSz3yQnv6XFI8sZmkchpNs7wH0lr6S030cOMZ94a5T8yTcNVJN%2FVCBxi9C0wGSICpD%2Fp7uKL%2BIWNOej01Z%2Bm5e10e1B708OsKyOqmtmYdZe9a8bVYn8hG&X-Amz-Signature=7cbca4e2fd2b3f5810131a8885d254ec37eb0017c68391475588e61909b7ede8&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
