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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NL6LCC5%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T050854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQCdY%2BhVya3lyoPihMZnTWKvFrfhhh6%2F%2BRJ1WqNYlkt21QIgJIMNHQ6UWaL1txkFF5%2FGTi8w6w%2FypSiPSzQW8MgUuTAqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGx9DUFRsmhVxKmugSrcA7ZPqaHdXTTyQjW%2FOyz0iK9tXQFcX%2Br3hAsHPH%2FACgBZXwFeo3PVY9jg4HWP1z6GzYTPM5IOyN8ojWOkvyveUq%2Bg%2Bw3WFhRZS7Vk8hXQygENixHzf%2F2ZKNfe3r0zH49gqXClAUJ6CLmjEmjIeEhfPoW5QogjbDbYIdFdhIDyqzvCVcxoZ84U1VriCfXZBtEx0RVHaepQ9Pa1kypNc7o%2BZdHMUkjpnVZcV32ZjTerZWWmpfQquv6jnLkda5Fv253kawkIoPOGSh1BPp3DTGaFFN4YU6K2o%2FMLIFvJpyFll8JgujG%2BydGWGLuZBEYi5Kg8op1py4Duf2Q1TExB1UaZSxDi4VEZ979dHKq3kipt7%2FpXvjvzw3uVVF84447e3W2IZueaMsxjAiMM0oCyoZU5ScJO3N4CQ5USBVbZcjVbvvLT%2Fvh5HPqvTiZRIiOnzjU5N2jTYaekdvUWzxP8Wje5FjMyj55SYXL5IuyFMl8E8NaqquSg1nTqJbNjLOSPxk8VeYtdCj9DtDts3V2uKco3elrFFC%2FEwfcwgHcUHDRY%2BwDurUq0KPyTLI0FdD2Q3RBcEI2oo1%2BK%2ByTptxyzM6d8cl5KrDC12pe%2FlA8i8birBnEUeAL3XXo1TPyEH4kDMM%2Bkrb8GOqUBmIlI5D1AAtW8QFr0bSYYYhV0xk%2BL8VwYiyUZ4H7kzaKINHevYOmXBdxj9iINKb1k1tv202mHsf%2B4%2FbV7nuiuSOz0iY%2B36%2BuDet0y4Oee3se9JIeJoFPCJgJx4msKbCE8oHogbzcwO4ZS0V%2BRxXeWqZGkxE6GSnBVZvxfQXz8MUQ6i4JHvQk%2FZ3kcYxcHmZ17XQ9D79EdXt6HQLcxII46UvVT409R&X-Amz-Signature=bd727fa6e98041b54ca83a73c878f28c94f4432505b9882128ea1c039cf45830&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
