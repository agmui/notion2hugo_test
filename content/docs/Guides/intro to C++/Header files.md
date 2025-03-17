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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SW7B5B4G%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T140842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC76KDOFShh6V89%2FMx3CL56sO2px%2FWwk9FOfRrsZZ14YQIhALiWgKIfYpymHP3m9icuctZvEt3Yfwodj%2Bbyb%2FOGOi8mKv8DCEcQABoMNjM3NDIzMTgzODA1Igw0Vug4H8i3%2BLT6s7Eq3AMqPvgOyPoVd5xXhrde7sBdc2A9SEhIxABfuyfkZV1dX0C1P8R8qirNZkGU5I%2BMVpml9HJ4cjANMlz%2BSlGDetPc36NnOUhfILKTjB9ypMOw%2FtPGqVu5OO9mmtI%2Bd3hcbmUJUl1RPxEKr7zhY%2F9a3vRSEvqh70egb3YS7n%2Bv5jNYnUpzzVb06vPbrGnQw%2BXa0VAY3EQlfeI0KMP%2Bz02Xnk8hyugDwL9kK3VHic0fcZccM7kSmD6vkJEF5r1fjdHulRfAg%2FjIv91lKUBQ0Z7InHfiDg6f4HyZtZoRsbaOmSf34QDx7uYX5tMMMbpz8YS8J4rpjMhP2bNtH0w38rgNUQSEW8gSgl3eCRVUMEeBrsLTeXDEatjMVr9%2FffqNr5kWSicN9XuXQVfoeU8cxjNZIk%2FMsMn%2B9lPT8Jgyl2q4BhXradLXCi80e97xFHiu1eOvNuaQUYEUXs8m1Fo%2BQ%2Fgonhaen6PHz3HyqyeCwXNdmNYjs2BO5TCxC2yqWFhvdKGXVPjRf%2FoIJkUuA8rw89uFR4EpQR%2B6it5QkyHnJSZQxgJSbdUobtRzoEdpx6EmZ9g3iy3Mh3OxbJUGWq5wYQxxdfxa%2FOcoTWXihDW5lPqYxhN8sdLZtf4e%2B09vg5khbTCvyuC%2BBjqkAdCTA2uW8ffSdUqHM7EQ2l1X53cWsaLA8r%2Br%2F6vTv80WHdXrKh1Asn3PJtL%2BGm1ebKXfzLZj9jBXcma2MbW6jjjyKDRQ2Qcm8Dds8w3kjabDqJSyAM3pf0Jd3wQkXL3yaNmRaoPrXhXkHXi4%2FsgpW%2F4gaWe0kDPGVgR9pNgjbQL6vlJ7IVOyLTir0Br2Pv6kf8JIO8w0oXIHqco9a%2FDqpcFHxkjf&X-Amz-Signature=b2e98a07bfc8669e66a666a3b5bce8054d1b478bfacab1f309959fe90bd0f4b5&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
