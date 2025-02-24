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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466545HFISJ%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T140749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHamIE17Tex2O%2BjydJDlkctC%2BXaBfvQ9oh%2Bx%2FjuHeR34AiEAtnCwum2AuQAo8zebpe8ig1weT4zOFI5a7YPvFpRfy7oq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDJ60aKVvNqtgaru5wircAw21R9oSb0zkQYPllCV%2Fd434Mvn7%2B7RYe23vD%2FaDbBI8NqokVgdh0dVPFAF3aFKLpc5MEiTkj9Oo3dKKiTu7neWuCv7BBQV6Ynv%2BEuefYuVvvHkC3%2FqvpFeWqlmMMZRTFkIQ6BAtLWexT3MMYDzvSBVfHqsYSpCp0pKfMeOjpwCd0gFBTqz%2B%2BLLEgIYC3DDxOmU6lAKOfsfCRmmaeMwloasRk8Q4pHNGKsM%2BZ1rjr81Q8KzMfbt4m602xaq0TnlqyeJ%2Bm21vDMwfANCqo5oG%2BjMUKzRQ3XQwTT8qfRQ501XfjwuaGqJrpTkr6bogL59gbFZmKI%2FKsyeq%2FRd2%2Fsgzwp9ACvMceL%2BTrJHKNoPuWnNhlsT%2F9O%2FbKxpgENNCKaccKHAMXCcjUDtOylUSeKbMu4cGLDNlOIINl41R5tX76XyqkrOkodADZ5aVz0VA3s7V7Jgd05KvUDxv7j2MiYzOPSWW8v4bXiHec%2FktmR%2FBxV5VNzxKbBsvql1riuTRJYZJAiJEAdtipZblbkxBbZAPRL5eV0wJ7EMkOISAegvyzTg92oumsHOK8XIYm5kvs99v%2FiIulc%2FPj%2FVbpmCbzrHBnIcv2gbhuy3Yj6Y4SypEjC3D0yNR80%2B9FJIC3o7hMNnW8b0GOqUBNZS1VzqZwL1M2voT0zBowMJX06k3ynSgYGpVBA8fUm%2B1T2ZhsnzEKMceoBw0H3tdD6fYPCbHZOgIRlxMYqfSM4UnEswX%2F%2FZdQUBu6OGTQpLaQhce6Xelq47HyYmsGMp4jzUoWcD4xjtrsTPC0NhaUZAh9I%2BDpxi1rGCw5pMxzZXWpnvumw89%2Fs8knE%2FWguHMFXNi2P91IV5TS3s%2FZdWZ7owsFRp0&X-Amz-Signature=a89d6efb0c4f7574beddc4cf5632933dafb5f91ae06ce5493c9252666717642f&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
