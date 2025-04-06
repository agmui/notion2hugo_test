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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637VN6YLL%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T032702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6l8OWlSCMZewef5f6tX0bWD8sN7eHnxseOQO2ZANlKgIhAI0kfs7QmFKkW2N9k%2BqX9%2B8Wh%2FlWYyXH5NpYe719HYLxKv8DCDcQABoMNjM3NDIzMTgzODA1IgxmJK3iAGY5g0ykE7sq3AM70UjQ4Xre706LoLHnnS2AF0w7uDxxWiTB2%2BC9x9%2FDmJCKkUVIcsLo%2FVnZ4kadH3JMJxGxapLlK9WEyYLT0BrukfO3YJgkMfx2LuOsngh7NLsxj6RlJ%2FuNSnV%2BGU6s1aYOFx7Rul3f3bpCS8LNZExcCWlcU4JyCaoF9Ze1XLVSjOQlRDfYhML1tTkRr6KznJbgzyqw5pP5KQCj2NoiAiA9kxIY3BJm9BOEiyhVriNIT%2Bvoof0nKaMl4BdE3CMrZ%2BUVYzyEXEMSP3BqPWhLKva0eXUIiG0rFzu%2B1uW2cl2qgJff7zil3%2BgvXfu2fG4i%2BKwj4CO%2BF5dYYH%2Fd6ELp8rk6dMpN3OGkKEsB8TDa4PRQzJjXe%2BkybDAtj8ZVO29nBJQxT3tFhI%2F0yItmw%2BDBpOoGewy9m9yYejlbjpNRpO3%2FeWGjSKxZ937HSDLRrnDGGZy8KcJSQmOPhx5kVPlGsMJ8jEBJiO3b3Bq9O1pPi9yKumlTFJ8JRWk5aQavybOjyheAKRgvEb1Mfonb%2FKTF2Y5VXBLuu1Mi8uWyBK3ADRHG7Zk35c3utcUvQzb3UH87rXxzKAPuwTBHS4bOJCY4vvlRsxrIiMyGrgS9iXjIQKDvsMtm68JyZouQ8zaIITCXw8a%2FBjqkAfVx0MgF35z7cDmWvuKM85qmDIrQaHeP2ZPjDHGUOIm87LxEccIXUwwHrdpEIhskv8CcpEWozlzYnFSBg%2FxYIUxmt3qw0lwZKNqfdUtV1qy0%2B4ex8FyQylAy7kBg4ymZHTlqzyB6BkXqFTuDgcuPMh2AdIklXrzEm2ftimUZkMb4GV8tfcOS0OBFMZUwNokcwvK11whRuQzN93ZT5AAmULu6TlRo&X-Amz-Signature=078a5dac74552354f5e5be0eaafd882e507c29734708d180816bda2f8b50286d&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
