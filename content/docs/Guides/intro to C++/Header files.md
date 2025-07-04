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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQ5A256J%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T061351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQCg1CVQi1CKHxlSEdNmg3NAfWHoYdioB3KrbTFoGzcndgIhAOSWr5P7Y4cVGqFXHJJXpMKLStIVr7a9IQev1eo88%2FKZKv8DCCYQABoMNjM3NDIzMTgzODA1Igwg3zug4nVDGpgOI6Yq3AOVPryHnYYI4iX8OX09HIKWetW08THLKDZHycsIQ%2FUlhNqMqfK4BYi8DNOBIuRAszn9JCUEnylxfQPdC88CWeNI1g2bGEXJuKLwr4FERLb6QwEicocFpkpwP2zbDdyswBfb7bw6UMunrlreWkLcRp55bzgUYIAQBspn24NiXmNn0vIguNukiT939H3C0gR4Ma1DPEi6IwOrEQ%2BHQSyalWs8W%2Btmq0yV3Bp2b4ygQ5jzIz%2FK0Ggzl2SdD8unQJMTf3TW3ONp4Fg3vm9uUMJnSr9QKFVgV8XQq2dQNz3S5KFZniZ7pH7rAUKA%2FsL1xAGlTgYyUaVxErDYwuGvom5dBySVixEUtYy%2BNUiVBlJTVrOqRAoLK7ap2oppF7WOXmbZx716w6wjnipcB25yNXgrjVdTmHk7rH0XG7%2BS9Nw%2BWoLR0lXU6kyHFgpbp0yC%2Flak2s2l5JtNZzxyt5kiWRwx9HHExXUAFGSXwRdzKtIjEnieOWW0CbxwNAUfx4w8UgSiwXE4L79HfReCKen%2FvQoZhNvGxBtg0cOh%2FPh0cUpS8UfzDjhqVpswx0Pea5Sg%2FIbT3y0kkCnE7XjEIhs7p93l6OgmxumLzieif9xiLQfQOdN0ZZoULaMbu8aIPtihjzDrtZ3DBjqkAXQffyuzJzjSCh5BkhLiFaGdTNkWisYVEFdGYMUwBU%2BuxoboEDJqLskkLnP3LzTZ1WGz25q2v8zAHMjSKoQKJRd9p6Zkj48%2BFlW3mvUEn%2B9Jijwdzl2akWPPM0Rx2IM2NgWWPT6WGivx4j32NGLk8rWuN00bx7GtRHdppcWe%2FZe0JBZbKkOLNKp1jyK6xGQOslA8GxKn%2B0aA6MC%2F%2FnaIXMATKcbW&X-Amz-Signature=7c3d49a8fe636c0e1b45a3a565137ec158ed15f6520232cf9b62ce0d01c5dd76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
