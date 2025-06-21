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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYQ7ZF5W%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T070804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEfXqLM%2FCkdYKQqZ4r3haKrBAn7DDyIJYbymMLSe42NHAiAcjMye6YOern1kF%2BJ%2BRmOWzhwXGQxwDwbYshdariL5MyqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBrVuRdA5%2BiP91FLSKtwDiNa7eJ6P6cVUO0QDUr%2BpgSJpje9GICMcaNTIf%2FBjGVvB3sVcCfdFX4GwLwyZjD33HTbRX8WRptIji2vec5xlyrY7AOYRMJf4q5102HKpQNUCfx0yaYrdKbxes6lfujuRvAc19dyz8eBkQ2I0dpRYjRVdAqOpx%2B8Mflm2yYN9lvMK8iIxJvstDQ50dxl7s94TkpxIvxvqVYCVISOWj5C5kZc%2BBJXQfPXyT9zfOl6F18xuKq1JWwu5esPkH8HGKKt28zKnGya0hMnx%2FIxv5BlBoilKyAaNReX0R08FV11iPd4zgKz5PfTKYL2plaBfBWl7QkYK9pjaakDFowrZc6o8G8sgs3VdjnWzIyryraxWZ0RcslVPeP040NUazWwouuxsS3fZrq8Ih7Dv38L7mhr9lKdxI8Mvas4EBqpg%2FNHgTElBPzN%2Bs0mGzF8y%2Bg1dREPtrYY%2B%2Fpyqyh6niB67xYtmFdSJ9Oi87pW9l185oL7aa%2FX%2BwFnao1nnBKYVYTlBQlA5JU67NTa7YymKZ1tGdWoHrGNppZcmDkswJ6ropNGvmsxAI1cNLgIaKSPATkO9ZJfhHllVvdy5VCR%2FB96no%2FD5PcVW097fHza42%2BQraTHfh1cNZljBtVZb4lAbx%2Fcwnq%2FYwgY6pgEOXib%2BsuRqz70nWHljJe1W2tvM3KRVAhk11a%2BsjjYJETzd9LKJETzdgUfXFOkLdwdFahJ%2Be0MT0xV8ul7rT3CAXGfud%2BrUSbVoXc%2BCo4k%2BD1QRyZl7Ux6Z1rmox2IahtEJ1D2VY%2F%2B0pLu76zYZHeoNhrV9vbfcp3Gj8620tyfV%2F%2FzuiFZtDMa6ZPyewR8XvnQCSgIZF0I8Qx01hzNa4XgE%2BW92nRxc&X-Amz-Signature=d8d5e07f3bf548d7c991ba34d32e5b236d4230aad854bc6d415ffc11581dc40f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
