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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RB65TNG2%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T190823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIDuxi9fYV%2Fw2slMcO8ZovESPnWq7pqtuhevfu31F9a04AiAJWhaLrRJafAD%2FlKf%2FPZevAnboYFuUkgsoKHhJccp%2BUCqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FA%2FiaCczu8PjzJ%2F3KtwDzc35JfS1Gp1CDcW%2FIVqVgCZe%2Fh17PmAOLlkVPe9VjcOo5vXl4X1N8Tt26LeLB5HxS3vxxafPJpqYH8M8l84fNoyhouNZo2Ta6TXdzIuDl6glL7l9HPBU4166bXwq9nf%2ByVDvJi9aTjJxlZX9TnmjyeSnzxOZuL1d%2ByTYiiAqZMPENKtQ9KGswcnTn2Mg0Xr%2BiKw0%2FVitDuse3MAy%2FttBTRscKzapd0LNd5KEEfiwrgKj2E%2FjeZ3YaRr0t%2F0Gk1AvVE6bmzaCWStIgXxOXj7dxwz%2FBO%2FHy0MvP%2FjocgwklOqIwdUYGsdJMGsRuauHpitj%2B2VzxhntSRDzTAEyQFbMLk3tvK2G2iTGch4nJl%2BRjDEg7My2e%2BsXaojZ82OJ8gZ14vyDLJFiq49Fxxnq%2BUaE2pIhHbA6KFTguaTJhmwPnejL2tp%2B5nA9jvdkGjRLaa8PrIWZO8hm0RKM0ke4Jg9Qh%2BAFvXlrFwrHtgwZF3WlSR6ttby7%2FcHK%2FrtQxpxdQl1ky4zVm1yc2JQJUYv%2BR6P34ZXcdGkAW6OA8fl0eFjt0Iv7HqE1qetGgSxyqixuqauCgakI9SxFuAlxDZzKyP8C87c3vQxUaa4REBH%2FCHqUyBFiDtjxnhRwyZtD0Z8wnpLZxAY6pgFoUjoYL5ykjis10R4BpDPtke0ZTDoxOAPP5C%2FVzTJrtoK3VwtaQTpg3dBojGRJSzBnguQI%2F10Udsifk22Q4xbR8Touk4YFr49pCi2GwqszV0vpjtpta5Ne%2FGnsd3I1Qo%2F7wa5%2BYgFcgL%2Fp5W7jYBVDt06aA4sRtk1QWRR4tVJbL6bSstbxUzoZpsWEKV3YEyf7DGiM1SeZlhSjfZ59aZm0iLT3Cx0r&X-Amz-Signature=bf03bd12929f76808f73be07009d89546f8ab2111c2b2eb0da5f7f41b76ecb2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
