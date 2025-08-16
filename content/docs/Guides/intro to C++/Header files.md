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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKZEC2J4%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T110202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCMvTVNzjdl2nUzFozy0Fb%2BVxN6sk2GV1xHzAPMnsF3rQIhANEaR3%2BXIo9cRUYNMEstHHkcdUagKNYXpX9wq24Ot1EcKv8DCHEQABoMNjM3NDIzMTgzODA1IgzY%2FLiFTYJOb2el7nUq3APdrXFrQjkQoQ%2FI7wHoB8g0NuxKC61gFeHMnZUSETqeSQ4i%2F7AnID7OQOhTSYJ9SHuNkMD%2BG7jht6515IY09AVkhdu5Rm81KGmDQCYRhpxm8hqfNnsLtK52MNjfFTo7EUw11PIDyJBpEFK8Mbb2tLomDpPzCBFh8IV%2ByXkaivQZ%2BeysfMESMMHLz1L7%2Bo8UqD9ofZKtYav9%2Bz9FAZZmA7ahK8rg9JSvLX0rHZYNwPWk1NJMFhTes6HdvB0v6O7%2BofUoxAcqLUG2Pwip%2F1KyYo7abb3XScJEDxOI2ZtF6dOKXi2fa9J5dXdTUe%2BBbay1KjobCaoneMRC3alJCc%2BkDG0N0XbqUVdBgUWzAk7SE0Z7GGLCk7gkcMbieL9xGevFd6TM5SmobcKPhY6T%2FFfvp%2FaiFxt3LkT8ZLhotkgvnt9tWhPn7%2FAqilseJoINbZMsQfUue%2BYu0nwnmCaKACcH4UQvj2uNG5hOymss3Fkxllup2mqK%2FivSWVRjBqERKv2Xs8l1NrgI2HB7hdQsH%2Fu6nNz1Qr0rLev7j5dzA58XDq4JRk00I9bzhsmkBriFEYpl9NfAWbU1Rzh3CTGZJ%2B5Puq9ATRuYhiaKRh8d6K%2FKK%2FHWMuu3JwHSUI%2FC20W0xTD%2F94DFBjqkAWaLiIdQ44FgjHEi5bhLN52xuB4l3AAW2lKv3BSKIIuSj3S9d4%2FrvuU1cAHkukq%2B%2BQfENaljJmFJjiEL9Ixki2suTpy6l%2BHeIk%2BRruRxuSYrNHU0T1B4Xg5ov5h46JoWVNDot%2F2Resdxjt4cl3JRA%2FdHVdIrNW2emfeTCmi45T64EyLWasRn714YSabToY1akb0tXFVRl1S2ckPBU34YJM6veZOX&X-Amz-Signature=72cd9e0e4fc79bcdc89032c9dde2dcb39b8cc3eaebf75b2ed81b151a298bed1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
