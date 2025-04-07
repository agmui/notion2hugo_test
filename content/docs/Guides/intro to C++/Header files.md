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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3ZV3LX3%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T140835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC69kwQWp76UejpKk3uJ7ROE%2BFhRjwinijbPufDDmGsNwIgaMjaqS7aJaF1LnUYQaKIz5Z%2FujsIG%2F2MfoRnZQ1T9UYq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDO2paTwq%2BtGkp8rUBircA9jzvKLeOq3LxK7FIEJw0PQC6bmHllpRAFm8%2BBsi7Q0rOompuUEQSjTkz5OX2J9HjuAGuT3NCAzFZwXZ0uRJxDmD4EouLQl2gppaOP2sDpzZNgk48w%2FXnOJOj3MydQ7zpaiU7sKdvcIKCfuA4O0NNHGuppTJLhG%2BwLQv1SJtV0x%2FGzCXzU49dlG0WNj1AuqScMlOyvdRkszKbA0ZPmyulHP1LD3CNoYOQ5F7m9ZD8VwkNJ5GY6%2FOdyA95RUu3OAiDz2sW53m3J8Z82FQUiUeZoYtEWIv%2FtnElLMyAKNAMZRG2csYZGmQdk9ZJrX%2B47STsA68ChYGMDPn%2F7kCiU4N3DYcBxfYKz%2FdkHV0degiw6zBHb%2BehxXde5rF5JaEVLh4qa3ymy2r2tkvXLrd0gH3HIWxMk8aTYAQiPC2wiPdubCJ5qVbnPcEf%2B9ZCaOEg7WbEkR1OujTRO2Eiha9Ukzj2lcbV3p7CoH08QRmJ4osArKvDq9jx8NJTtnb3i%2BiORL%2F3H7fWoqiZXvD%2B2twehs7qqN0LtUdweWIE3qhEwS5cf8Jn2LyZsB2DXXfajXB7G8DldhhAZ2rKqt3iMNQk5%2FhgDJ3WNWqOWa8IlukOsrg8CY2OfjDr4GLFpCX8N4IMN%2B2z78GOqUBLwNGbTh6NJSAfwwZWhNJJNbfMnjblAGUU7tovGBgAx%2BsRwcLFrjL9zmnHHiwq5ArFMheLMSSQIdnMMPyt1C7l8WODkjJMHyamIZUbeAiezMggOS0CEV8%2FcLxBR%2BSbpN9VPwWeabXzF6ZJxUWIY%2FszsNmpjKIZlOOi0oAsVd4KHkRhPFlsY8d21GcNR%2FPBTdzkfzg0q5YB6hPT0%2BIUVEeIGkCe%2B0c&X-Amz-Signature=0b67db88515f8b0b2d5adf59d4c2d2aee082272e80eb94bc7c80fd5c60c06fe2&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
