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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663U4WTRRP%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T181010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIEwqbImlK4rX3GuVkQanHpVIDHhp0CjCINm0GlXZ1Xr3AiAAov%2FzTkjwB7I8VGyhxbSJfr%2B7dxCklC7Tx3kUwjyQCCqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUBb2xvifhfnNpMUtKtwDrHOX0IL9Yq0lWRVf%2FPSr6U%2FfsWbU%2B3djGBVcD0PUERN0cQbYUI226Kq%2BNLYb98bA57pILtz6WHJMWlKD47bCgKdpH0G%2FjfB1X9oHPvoVrIfGmh77yFAqovMI0b7Fh37PZWd1diBYqUOrmvNjLZIz1aOoDmZSmBK9FVZIEtcAHzMMEG76fzlqx3Z4JV6zvScIQPPvYKM4KXDF17yPN3CT0cF1bnixbQKmxGble4kzcDs0CP8v4mUHiXNejJhDOOFRHE28aal818XAPCIsdK2WC9GyAzDFRnD9z0vNd9W%2F55sfMWHGE%2B8wNoqvF4jnkl39cz5H%2B0NnAKXt6bF%2BO7d5Wo%2BsmSpuAedx61VMgZvr7BnaddikvTbW4uXAZtmRPkn5SbzcVZbqTuoxvxzzeScJsBmlqJoelWQgprSVs2rOcggX%2FKcH3DZrzHlPpiPlpNbZO7wh%2FmMkOVGcrgZ6lzzAZehzCQui6V9hY5HB8eTa1cqn0CLitOlrJDWK4cugoSERyO3C8Wl4ycSxY8h7llNXjhKa1Nxp%2FZ1JV6ojk%2B2fjWGtTTeBd3IWzBlpWQiAcocoIxhy88S5lXa%2BcLzTsoiqbXEig0TDQD8KeBEKFOzXsE4pBHAldORtPipx1cUwuaGDwQY6pgFwTIdye6ap551p7kLHgXVFPycizEIeGykJVfJeIctMPON1jz8t9zIe4K7u8QlFAfIWLiKkl5o2CznESaozwIAPAxLwblSrSinu6Dx1StrvSdlUSmPnYFfB1BFGmxAFlbaIiXAMxbTzMWoYUWpefjYsR%2BA1zn927%2Bl%2BkpV7BElht%2FNzx5ylOhvG6b%2Fx86UOb1ZRrBkYPxPbVqPxpvqOZdrrzDCKVyx4&X-Amz-Signature=774943199518ee1e7380e1c439e766b0ca045cc20162452fe07b311f16dfc531&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
