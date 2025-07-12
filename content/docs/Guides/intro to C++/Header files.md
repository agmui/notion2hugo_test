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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643G3F3IH%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T051021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxyok1ZpT4FnyM2ZNG8dg0Sgq0NrIHSih6wYePgs2q%2BgIgN1sjbvFDbVn6ZbDUjjJMNJ9YT85Hnjw4I7NSoBoF8x8qiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHyir18Gdj3OXTn4hSrcA96kixw4FIJ%2FBsYwWUJK%2FT0xUjbLVLwf1CVS%2BqbZV1HYpj7APUOT0GhdbENfXqt8HeTCeM8Gif1w6yDywWRmkaV6u9tH5uIcQCK8a0vU8eVdFC%2F8A4mF3IatD1HtBw99Y66RAISAkoskYNOPvmn1sRTfwEi9fYgCxcYAVt4PgRUXNJLTrsBnSeKUV07LIkRZY52MnEg0ISVoM3noPNF55Qr3VRiiUz6HfUWdS3yFjc9Tp%2FO%2Fm%2B1kDLnZ5zunPsPfg9QOKYlO%2BZ9tWE3gdt0pnQCf2a%2BsqNXjXn3AL1C3lCHgIvW%2B1dMZpFRHKWlqAyaprLCdAzGMGfht7%2Fk3WDoG4GCsqUqqsjcFC9sodEn5u5FhqJDmH7T9oEn7khGgduiXALeQwsD2ihXeVc8XVpEWMvq4X%2FnpJ%2FzQcPiAcuXqEqqBWbPhJCqMNNZjEML%2F2jdyFGeIxa6hIuyHVbIUpeph722P%2Be2p3qDxF6yUZcV66%2F1hK%2BFfvIOkPwrwHSqo9OzvTpdbJF4XC%2Bz4YbF6MX8onjLXBcoUpwT3SCQslveKt3s%2BLsZ2lxacXKv%2B6yEVfHvOYcbRGxyHAsanW0tENE3e38FVsWWHgeErR2xpvhAOQqlxCkc%2Bw4poi%2FPZfVq9MITQx8MGOqUBMGBCzuntGq2EkBgEYCl2bZvVF3geqElrsmKICMEvywKfhjoLtSM0%2BgHJWdlf%2BejT1oeRQWhZ85x7oLAJ%2BQh5W98cB3p7bzbjQFPr20Q92Q%2B0TuX0KSlRl9ZTvONtCSBWozS2S2I3QjChGTkJx47UbS3gjKQQho82W8C1jxu6Jq2HTMF8LUO1NGfFUOgSqAmOyIN4dA5xqzXqsgf%2BJmk1VqH%2B3PH1&X-Amz-Signature=e2380db5834b619684f76318bf0d08f260ded73a1ce3f5e7a3d2b61f664d4b4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
