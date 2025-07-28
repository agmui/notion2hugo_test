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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UL2NHYY%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T052007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQCJ2cMxEt0QzUOjM9I9b2jMya7meEeFqGIxKBHwNARo1wIgfzdTwMugiBHwo%2FOtL03I90wztxIpkxMte3e%2B4Eb6ZccqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMj8rIq98L99UiUZMyrcAyGG8lSsf1wXZlQwRAJjvResHHGd6MbMS%2BC%2Fif7MB5S9S7r5uBJqTVxUvMnFAHUJNKadDEj5NO5sH%2BA6HkxcBeua4m0ytdWUOUdHqrhB5C1hQRGsB46gx2C9zelMx2KfxS0BtO9u5xPp%2BBW%2B1jvKy3uDJyFgZM%2FiyP%2Btp2CGF7qPzjutj50FiRZxgP6O3mvPd8ep6HLOUNd%2Fed0G5Yzig4QYfygnZ99%2BZ6F08k92bvVJibE3EwfVGmuqlSfLVSUxftT5PHnLep35R6sX3%2BGRyLWx9iplxGP8lXp8FddZ29p8DJ%2BpVhjdC1K2OEijKbxW3AReaPWA6eX6ZK3YeqP1PcdNffaO9lUuUteSzG3HBHhyJbY1E0HPc3Q0kZjD4rTnXFenXJxxjvQhvTwmW8SW%2B%2Fuu6YaZJfpTTKWoCsfPI30stdJ3xV%2FU%2ByU4lLXhkTZEeJtjgTw4MPgGkFgmKx2Ipu%2BXHPB7r20Xzielw%2FfwCeHk7c7OaDmdLtX%2FJhWUhrJfw5fVHh8rBPK14OSaoOGpFcW3l7dvBU2Jrv%2F1m9n%2FrwZMoXQjjVpyTEkvrmp8d87p66lT6dMBxF4jIWBnvbsatCnjAi66gaDCs7UhVQz%2FAe%2Fl%2FlLQn2HdmU8Cix5%2FMMmOnMQGOqUBU4pKpHcXvztMQHZo8kOAahgLa9C3i8Z2seIwxiaHoXBZSWuhP9WMRRyjAgdbz3MT9up8mhDwLgiTbh5YBWZ9QPcHT1Fu9lq9TNEA4BOcySLsx4mDIHRQ8kl1doRpeOhPdg9nWQyBdd%2FDNhr2ePhkH7vUrZia5mlGnywfwCaHSOMQ2tnYkPBpXBVY%2FErSLy8N%2F9TqSSiL6VQz%2BVbp0FMWmPH0JCph&X-Amz-Signature=0a9b42c38bb8ad3dac673e5560a3ab8a83a3cb41780d486c5911b67d80da14a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
