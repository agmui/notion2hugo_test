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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHVZQ2MA%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T160902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQDjUEL2PPhlRDSmOKNyk5MU%2FLoa%2BVyoCURgiUAg27Jx6gIhAItOZdzjh71lNWgCvBRKqDd0Us8brdXWZpdSqauSU7xyKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxet1cZg%2FOMKqLgItsq3AMbQBJo8v1M7Bs7LnunNPn3zCbQpNgXV9fuGc1exeQ4fg3VGigiuX0Zq%2BvHxrUKjb%2FHW70XwtaUMpzue98W8RYDvPFo7ii4BjOeo6FKazDz98gHOcQqZF14YzshPlww4abRQ7zxNbBRYs6FDi8kwkNUhmuzw3r1Q57Z7mpNQcR5WGAqYV29W7IqkaOwfKiCYwsF3dsDIkuZL52dArMIrUb8IXq2y2Xbi2pvsOfk2s6hW8%2FxqXfzM3DQXuxQtXutf0wBUo3iLP6vZBY3b%2BDByby%2Bl4GWeMunPT8%2BP5i1RIVNqeVzQ0I0Q1nNabRbS01xboShFztBEH%2BXL8GYCaTtnmds1WzEtjHW2dejSFgKl7o%2BhCYkA%2BawSWkJmpVnQnI58TB7jTJi5AP4omV3OOZ2W5dzgR4FCr0g%2FxoQk0ryjRLNrcqaSPy%2FK6vn7g%2BiEZs1fDfU0gzuROoOQTd3m8QyORQEKClrE4otag2FvlzArsOG%2FNRWFxjQzM0K8Z3UHAsfixpn5ijSasNZtAPTNxzFqpiCuxlrEiYWWaGKkGdyjPxZUWutXpOe4mDGPxF1x2LXRrMn8YNl7vl8Saqgq36LhH2xAoIcfQehtCmoDY4UoUzVV5Szi5DkQAy8OI5kVTCElvHBBjqkATdCiFeQJqvYh1%2FbsM7P2Gzsi8%2BCfrVSYIGOQxcHfYUJ7GoH95MPRKdpg7EaFnDXD%2FM0Ud9Zb9ndHEJf3tVs6HIqH4BbA5AGpclscj0Y%2B1C68lCWzayCc5hUgyrUdq26MnQiX4CnxCtqlCZpxvk1DBjyR8phG0Ff7nFlH%2BN7SX2hTvY3aHfF5yRURlL5zu0iuGdzY2%2BRj2fIYx9dtYWUk5yJT8Mx&X-Amz-Signature=a927a7927293ad338c8ba37b83c955de0706e703bf0ce2528b5dea33d3f6e04d&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
