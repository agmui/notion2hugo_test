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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWTZLF6I%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T180841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIATEbNyWvwpSGv6vft%2FmsxdkLTrIx97V1MewOw%2F%2FM8XQAiBAE%2BNJuUvh0aRXeijeRofy80XQQKDBm2kdcXq18P%2BMBiqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMF3j6gjDkZMP0XcVUKtwDESxyZ2P1cjzjPHLiwAVzCtK4y3SCPgUEdif9g%2FddS2Pv6zxjAwHAlI%2BjJC5W3J84PB%2B6pQyQZvB2PqFfACFalk76bv%2B0xuE8KuXbDS92KUnCE4JHNJqw72IOTWB41cdjHPubFAJkBYf3%2BmOxoqFrGR4DrgmgXBGm4F29Y4PROVzs78xClmTVLIbu%2Fx2hL%2Fe%2FE2biZSk7YtwjMlVgJar9IGmKTT2nDlI3UoyWFdzJ0t1Af7xHLoqY%2BuEdf9D4ChVzNdOzQUKLmx8GZ4vk%2F6MYnMQxWbAaJ5ziHisGjg9JTgk0hpBuEPkV6PCsRQ6vsJzez4hORLpDkrvvzYh5U%2B3I5ikz8L%2FcjA6b1a4AIb5jzNvHom4fbLIpnli2VUfeh%2F60O7OvsVAZFWqQd%2BRI9jDjgZ3E77wGqrXcwG8ZYTjWb2guqqsE3bVH0RGuaLCvbmHk1dLhVmwmF0Angdu73EtQ1sXyBwoS38PYqvomLt6XDFcXIUYyUZk4VNvU6R46hQekJ6BQW%2FVuZlC6aCHunNaaBXNBl41DqNVbDj19T8EEAc1WaFTOuQUWBExo6j4Me9mFL1WIyyXTJZRy1y1V6WQqyciDY0NLaSLVIf0VbU9W7Blw632xUsSSZdhrcewwuqievQY6pgGOPx7MlEdAzohAsJDKioZx0X8qBhVxL3gQIse4k6QV57FqEN32N%2FNcglC6r6uMePtwelccWCuqrxHb9HVC55FXUu%2B5cxVraOWeWxSefnA90QG8%2BgZgIqUIUX1ntsqZ3JFGxpYmIuMqibTtrw8GqGsu%2BUPVGzsucPsQ14ukzW6CHeI%2BF0FwtS%2Fh0253lH9A%2BmfuHQ2Arhbe6RnNH1r4%2FO3cmIqvU3eL&X-Amz-Signature=457a0f676941a27ae077aebe34524e06d3573b9bfac87c5e51df38dd41b6c196&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
