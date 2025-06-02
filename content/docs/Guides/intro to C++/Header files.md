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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RALASWXK%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T161124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCIAcW90zo3Bexa%2FOdOAlwVKGdDdrJpPa1fswdA90pJxxpAiBKjRSlfyaTE52r9hw%2FAa245XDJHSHqUfZQugD1tocMniqIBAjw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVRGCNihfn1fz4xrzKtwDyno1U1%2BzpygSKWjBatCe8bTfaeSzuGxa4l4%2B%2FWp5ccBCM7VG56vq7PiLh5RhwRYaU5S%2BV2c2N1RxXKCxRJH306WlwR6m9tV4gKb4VIUMW1Qn0SyU7sTl6UYBj2eL63Bdsxa1HgBYNffAQfIGZuN8j%2FQCKEjgj1kINqy5v06yxu7yiOYssx3pJcQGwUm8Jcsezf36uUcKc2I5d8qt25aRz7FfvxixsewN5W7uD%2FBZteOnjh%2FYkC9pccIz78LD1xpj6wbFE1gpsm%2BZJhmIaNIehlSJf%2FN8vxH7oS165wAetGhCtDqYuHhBz%2BHeWjHqBmAmGOK%2F%2BYyZv156%2FE%2B4esg8bjfVBck7lT8mHjo36qG631pZ8uCeouDzBjCbOARHYFgZj5vlS2LAexZOCrXT68qR0xetOUHHCydQZ3TMNbCvMcOviVlIDtgQ2RjjLU91hqwGjh4hunmsIx6LksSAsZEQat%2FD%2FDovPdKIMyECY71tzS4Zu5DjQBaXfhTqAAftML8r6LiLdYB71fGOyTwIMAZ3kFhOqWKYMco0mAcTJsloRyrkATmuvXNod%2FE1TIiDrlbujweoADRJmquzCal4yAXGrFq9JqxV7HvEsMmaTdHSp2TQ758y7Lp3otvMKbIwov72wQY6pgGGr3wQT3f9I5lCgWI5a%2BuVtlgn55X%2F6h64OXj6eH816DfSuBCrsVzbLknWhs8Vsoj1FcO6qn8zDtcOxKOMtMWdYBXYVXig9VpwUSxCUGNJhqLVY7695OSex5dSda1bA5EbI9WfzNeTGtOl2e92kplb897AXmZjEtpFVcbadC4zDoeh7BwWmQziPJqVK%2BVF9PoI0vz2tRZsM02wEd3pyOjqLLZ3%2FlJF&X-Amz-Signature=cc11357ed77f8eb1931ec6f75525dd05df1356a177d18919cc2302c896432c65&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
