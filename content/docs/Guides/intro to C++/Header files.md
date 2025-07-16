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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Q4MUQZX%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T121746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQDJoyYRY%2F%2B4BT7Zn4B8Lr2j%2B9JeKbxDRgEl48OwpS9zIAIhAJvQjHVjEmXKhN1qZC4Zso0J6agoeika%2Ffb6i7KWFsrVKv8DCFwQABoMNjM3NDIzMTgzODA1IgwM4%2F1f1Ek%2BzvkQtNsq3AMelsipHroPN7%2BBIk9BWMYzDBWAr5tTNnCYnOPlFZv7mH%2BCEYnz9xRAgCE6Q11ooxJisU%2BFMA5JN5M%2FfcP9VNRgyrSOuB2A9whxEX5JEwLvWGWx8WOk0KgIVGVy6Ko%2Byvl16X0Z7ehmW80w1IlKmy9GhUFt3Sjm2HvLdnDh5qHghb3bA909T8Vs8hQoG7lekqVDEn703s8pkj7dik4XhwxC%2FIxEKvXxCP5VQOpD9bKWBdmKzO1ku47oV6bjUkRuaq1ZGBpfYrPxQk660zjS0s4yUjSS1wrJw%2FhgtUIXLmUu%2FdDr403G61uUxpXrWF5KU9OoYcEATGacA5GtW6PMDWxEJbXXu7rx6ZlwOjwD3s%2BiCDGtOYXG0A2UF8a%2FcWYz1ZOg89Y9kUwF4GbHF8sP1z5rDhUwhIdHZNjRgH8KnEo8JPeaxtwrSS5h9w31e0I5lYc1FyW3rueWTjVaRKzpGZTLh0RsiKzDMXKPg%2BcaQEyCaxHybPLL1kXQV0qWWhc0LdFDzjdNXRo%2Fl61i4AZA15zN10J%2BZ10u%2FaRDd%2BG%2F2jYphZqCvc2xIpDZpM2xdy%2FfbqMmwyHfFgsAIp39utu73latb9OFuRjIjWF90ZQP6SQBfpdPTqs2Oa9R2gFtITDyk97DBjqkAQZynJpOMnGco%2BqvmGMgT6J74ry2xGoKNcNoyI8fegwAaNcvfyohCkX3Lu%2FrsIkzQcN378tZs0VkCoZW%2F%2FK0rh%2FfiKU7ufwIv042LT2Nc0yKa0shBfTLwnG%2FJdva7JmK%2FA6Vrd6F04TUSSC50dkjkm6t11snCzx8Cc%2BgRmUTQkujPdQVawjKaAchy5AZfCDM7fKOiIKY1y%2FplcA1r3Wj6TAhAQNU&X-Amz-Signature=52da252d69839e64801061c28011ffb48959fe31c4ca3012c5dd50c1199914a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
