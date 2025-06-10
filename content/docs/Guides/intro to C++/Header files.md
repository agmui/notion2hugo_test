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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UD2O5VDR%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T210844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1Ccz8S1O63Ph6AXEta2Hd9iuv%2BVBmeZDmcYhzA%2F4LiQIhAM1oC9Oszag4%2BXPuGBETqIEe8dgjNU%2B23M9pTg5qtCriKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyElM4m66S9GKFNFaoq3APEggw3Mof%2BeBZ%2F%2BN6oKyavqT8leTaElE0f9x2IwNv7TT%2FdaIfZiTrf%2F4LpOLdSh8XQIhRKuzOBpNbjMWTqCR%2BzeQ%2Bj9KwUvobGeAhxYDTfPoUiJhC6hd9P3ldZidm8iNFcV2glEbjRhwBtncilscqSLq%2F58eWTgbN1FzaHh3e%2FSGpq%2BL%2FUH4bg0u3jhi5JSwXE2So4ek10ba222y7VI2R70TUV924Q72a12b8zG9qgFBtlyacSK9KJ6F2mbZGZtnCDTbyV4P2B6c2IwE6Xo7Z4YLdHY7vdrOYZIwVOjEC9VPP4laCcNkR1qQpcLSdvVY1D1HUEsAVx4FJpOm8MXgO14b34N2ArIi%2FJ6w%2BVZzPzMTdkMO%2FbvWzjVZC93TarU9rQHrkNcPM8wQmRT93KiWz%2FKNIXoJBpzOGllRahmgF7YfWGXtjDGitfkuepzxLGnv8IUvnHeyb%2FsA9tNKmmgsf9D0U4d9f8nfPhH7Qw3OIEsZ0VqjGCQjtqyyvPQ52EOjb%2Faaj%2FZPx0OmUM5hONc6kj3B5DyOWXykbRr9pgEGjfOOy3CrzIa7ym3hwb8r48LjgV2FWpaMaULCHCjZN99M%2F3nTqsW4R6JEVWUEbvzK3pepf9lqxZiW0p8JDE2zCDs6LCBjqkAZyw%2Bwt6Y1dVrKBOp4iI9Zn%2FRNXIF9tXcNEOJP%2BqVpqzw92YIkL7rJU6rw%2FxuzTq5JoD4YFrECQQ89kzloo7Ri4o1nH6tV1jbYHAKnP%2Fw%2FhhMP8gDvI5MK9WX88sWOwDjAd6hFjvb%2B9eXYu3G%2FdyCwtJJUFjH8nH6Ne9BlGRvoW58OvJmqhhI0E%2Fuky%2FCKd4rtfBboO4pIs%2BXTkDFB05w2kc%2FVUP&X-Amz-Signature=1b9c77716a74fdfa43d834a1ab3eba9da9170eacf561ac9efabdf569e611d550&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
