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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667D7YAD4I%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T110127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCR%2BFXIV5v2vCP4D1dOvkYPjBDdzyI96gLmlivp3LvhCgIgD1PB9dc3LiXyTeD3q8BBbyoMkF7kX52RzAJDmrZAnqAqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMINx0QUaJDkqMccjSrcAzBMI6Rw0KiwYD7cUoUHjCfulfrqYCBus84ymy7CDiAk17fWhDBoJrngvsC85sjaGs3b9%2BEY9o8hZCA9Lly7RsDAiLpFuXxt5XeFeG%2BMUayKKJljEt9%2BiChxjfeLXkYZjwsKbTSC1%2FLToHezSKRdwY84vJoOpbmIca5xL9bsYBZ4utbI2O4s8nYK2D0oqKjnxpkrx8aVeYgZILA8TfyLv%2Fnynf0XZRJ0qCrKigoQj6FQ4D36jH%2BWLywiKnpnW4o1Ez0Isg11ugCFWDpzrELr90IMActZCIDXT8wDq6HdnwIf8Z5EO%2B%2BUqDgAIoWwDazixI%2BggZLMHx6wmnX%2FRr0kzTPkJUe9687QyIkcJmo0BN44cb9BeHzlosyV1wU8MRmfMpwOcrFLpdCLZ67t873XdTeINGR9sT62Z%2BcvfEZ0n2EIwA%2BRZuI%2Fvgg5biIwkZeema3r%2Bc8Jqb%2BsaiLFL1Pxi3tPwvjuyfaDxswdcIXVmFiM%2BnEtr42BsNURyYAKIRbmXi3NETqplp2uoKIU%2B3LGHtBqA%2F2AQnGk0jgDbNyVDe9BwfQjWp7bMWKmxC6Eyd%2B60SUVdwi8Vsb8bursogrGujvpqYaKNqx4vk1y6Hb5o4RG7nRRZftnqFMbBXnGMJqGsb0GOqUBM%2B7BCdN7M3Afsbz02%2B2iIsEF4%2FNSs5pgv7xv86cPJNzw5Oqq4c5Ez%2FBCRjvJWFgzomEV9OeteM3HEKxkn4pqDDrdHXwdYVLOYTpXKSJV7I3X3l77VwDZYMoZTV8kKp%2FzVcHkPknmWeru6PpzWM69we0Am2GymAUiRKomtEBx9I5%2FlMcRgzvhtuADZlDQe3HDIbeee3lVKCS8zHD9FOMe%2FZhHpvw5&X-Amz-Signature=8de3927d6d619b7a3b63efea87c11833c500c0a4112ae0cdb9f681255de5d227&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
