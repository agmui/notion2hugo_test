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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X553UMBP%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T091229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDrbCM8A6FFG%2FchBy22JDZ35IsrR%2BhWcg854arwcTKLNAiEAhEc4LGfVFWA3uZO%2BrVhuMywlzAXvQdilRnIHmBN1CXAqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIzaOKdGwferHSGL1yrcA0OIQIDLxZ0eU%2FaIEp4GhCK1TkkYufvQsOtupI2rt8SmPXUglh9x12R8LWWPA7bPjWuTzsg3l%2FWxTtAinwNQe8piSqBMhpUMbBBGSzqTBmrFKMnvCqNF3HZBYad2OPT7lS8un%2FINoXfgqFGeblJ7YMzDdiWWrzVNpwhhV9hVWUq%2FBiKeHKicHa7PcbZxhJ%2ByxExZSFGvgtC6ssoN%2BZSLm561xyQgHJSYV1DpNrfLdU8JKqD9ZJEh3Ug6VOtn7kHWhUZxix%2FLM7xYERhierJcRpP%2BsZG2L8bMrxxM6WUnPQypzJN4qbdghcV1hAyUREh1gjAtyobrZRbWD4SZEIeolTHLmZGM6x8T4J6OcHxZ%2FK3P7O%2FG9gwhFMMRNubvCUIbPrJ0jTucepl8uXW9ID4jchKLgnV4kqp99Xfdswm8c3xzQ52ZLbUr253%2FrG1ps7nuHo7UELy4t7xJffnwlnV5ojwbZ0u2x9zWj9yv5daxF%2FicpYRF8ydzzdoEZ7AWwduTOQ4ttqWeYZ6wV1xNYO0za%2Bo0PSCs9MHPuSXY1tk%2Bw7BOuG2I8ULb4JHh5wlPqwiYg8LQKewvymCq1nHV62YBQdOU1fMa3NxRZqhUfkP61lfXbNsMh%2F%2FhhHgJzjFvMJGCvsMGOqUBsz4%2BDZuMy80xX4Oa8Gipf3Iwjj9W%2BCR8KWUdBP8wBXDObp351sftGVhsjVje%2BEUSjvuUZqSZwpBW%2FtjSBfY6juMh5b8M1YbnieB4sZQjn0UGk77yVuhmfIrnGMbK7hNee6F%2Fvn4%2BSoCwtLUuh80qKUyu8TQvbq8hAzph1L69HbPEiEa4g2RJ66YPJBhGg41I2KF7jHArNnQBN40YF849urz3I6T0&X-Amz-Signature=424211e3cf2c349b46abc520e2d90c5384573df05f01b37be4febfe33fb4a66b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
