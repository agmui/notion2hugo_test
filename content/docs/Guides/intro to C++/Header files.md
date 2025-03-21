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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZCOW64N%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T200835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIGwzXwsTW4J%2B3s94BjuK0wql8PVbb%2B74B66RE6OBUObZAiAgFHQwCj5LBUviCJpAulJz3L7150mlACjV8TlIZbRAGyqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoelYl8r2SEbQOrQ5KtwD%2Bxhsitqc8XQ6wKawqvU%2FCy%2FPXoKfHP7FcfH8eXIpnW8KSZpfkd%2BW6juy4gYhfO0QSk%2FCQhfjxLQsOLRqnBJPGd%2BOEsku7X8Ju3sDe7Zul2s7vJYgbuKp12QiMnPFxtViF0P25kv0mc%2Fq%2Feh1%2B5OKNybBb58GpK2llbW61ajGgQT3PB8RhnfrcbTVyz9esPrzmpVWP5zJMZt5eLJ7qrw13DMhb7YRImq3WXuGiLDWjRJ6vHchGyTIIQ8y1tawmWf1e1hMniiri34dQTo7JwkbbDbLnthJQRyZHPLd2%2Fc%2FPklCf%2F3II4HxLdGWotKQs0OyIg75iyeSp4bbmAwqzzGIl5eM%2B2TEc53oiHPHkVoAyt%2FYigL5vRknShQbnmkLxpoX3OBw5wu1FzWtT1k0RXU0uFQdkJ60yJn5xgYHzCaCTzcpIKzdJaFoKhIGlU6EcjNvmJnsGp7Ufapiu9APIOitr02EmHFLrKJNInNoXyvrrTh1y3nLTtpbIOXsmPkM0pN%2BkWswhdYSX3p9UWl%2FoRIl7GXmhT0A4TF21xoQumDBozNOi%2FT1W0Gtvb8O0t%2FtaosJepwKm46oASKGRnvwB6IfVl0Ywz03mDsPcD7dsFvW1a5ua71x25DUxiVzaNMwj9z2vgY6pgFp5v4FA5pBOVvKyx5oquvQS04TBW2Mric2Fk2q46jDDQuvX6YVa5oVCpVEaxkBXg4Fn7LeOk0HDhAH9gueGgXsrwUqZUJaZ43aTxIO0SXwrI4jBwuOHpOTbslnvzJJE74ChReaohng1FrZSlbBAr0Mxfmxh7hakRj1%2BtMSwrVFQJoWxCdl8xFpGk3bqx%2BgBmg2BsX7l%2FjqNooJj3o9oi2XP9%2F0StYh&X-Amz-Signature=e0b50a445630d3f75d9f8c7d93d3b3ce76ebb4175f71d8a5b939663df2438d84&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
