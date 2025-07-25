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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623N7BKA4%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T190917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIHJckX2YCPSfbFjyFaGMaWvjchQGsGfuiRQ%2FssfJfrl4AiEAzk%2B68b%2FDGrxJagwNpfsTilRuzKhY68DgHjK09rzlAWUq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDAmXzUBMTlIiOnXwFyrcA5t3bezliI68YH84FkznYMoyB1gA3MtQK6Vj79rVxpBwOk1Gujq7FBgieQqySRU50b5Ac0g6UgLENsE5IVKbkc0nBVToKAbe5zskf4Q%2FsTSmjgH%2B08LZRZ5%2FhOTllVuz%2FlK6xMSyOO6zuc%2ByJGcz6YMdWbis1oZMoq242Z2GZLPY7lD6p2aM%2FkVNWihBJTEJCs%2BCWemz%2FIeaIxg1E4R1X29AGZYjPeNVoX7apFtyLpLzBI%2F1k9G0tt2MLSI3flor6j4B3DmtQx9pTHKEgd2gVRjm2Zgqs8Im5rOKtwsXgiu6UU%2Bs570A%2B4gfJsuJZR0BimQN83qENpKtW0Dp0tWosIUMZv%2FzZkZj3PQJUlhUxJY%2BJRXEEdowLyfqYdjSTH2y9VmqOb1XBqw5a1Y46XMzXr2W55h0BPilFuuoxTe%2FIvBk5pzWo5iayfwG3rG2OIIWGT9EGtdHacwY%2FGjsOYLDxwfVTH%2BtGyZq8W%2FVc%2FyokQePjk8REw2TvqeELnRg5RJ7UIIQv97EDcNgZhELa2dAOxh%2FumTqd54sOSe4O50qmmLcxUqzZ5D91gmd5IVZ8BflQRAJx77pujYaldzPisL6yp6RvdXfXPt9N6bJv9Cn5m9v0CyCuBEFd%2FaNZUFZMKOqj8QGOqUBeE2G7Nffc3Sy%2FdWwiNcu83rKdNWZlxwVrMrVMJkZl70nKEx4aOd79Yb%2B4%2B%2BvdXfJLRKmfT%2F8JJeVWU%2FWnf3zfwAT64MQ%2Bvi3Dqw2ZueVN9tHEIfczEkU8vbl4sozE00jW7pYEb49mLVCRnXcQMjry3C9A41BMiDB33gu6UHAjB%2BpJhYsGFMm6N%2BUR0bWcmR%2FStsR8J25zWf6Zalo7EgQ%2F3U2zdG5&X-Amz-Signature=2c3a58514db0a1b2b90c0f5f7194cfcc24519d5cd9d5606753c83fe5e72062fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
