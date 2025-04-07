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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GRZBTR3%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T061250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBzZ%2F4o7HH8aZ4%2Buky8%2Bs%2FLFrnvy6o%2BwPmJzU4NIJxk4AiB8jinlll1mjsTXeCaZqN3DqkBenrbSdF4CtADCyBDI7Cr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMo56OcyEnNu2vz6%2BbKtwDR5rSLryLBifUrDrgUADKVXEUq3%2BpZ5HfUgoEHKbEShe8au0AEljmEcvYMjvbhZjtcmIsqRXIOBbANYlMfwo6rjDDZOx2J7g%2FXXGNhv24aBukVpbRcCV1wN6hoTrXoSTpVHmX0NH7VH7UrOFpQh01MKKMbzqJyn8pmtl2hmtUZtoRnSgF6zQsMa8kxC82lHzqQDMbU6v2DHEL55eww4ZPhcMcQHmK%2F48wJb3tdLUCLPZeqRoCTihPYYlcUB8C6AYdWm1s%2FkgDjKQSwXDDV%2BSpmhn1BMrwJyK9%2FcEguvXSjp83GnaVSuI6x1bflyWbubzuwUfDwnXiQ%2FkfpWiSGfJ22wVlNNE%2BzIpBykMypKnxQhAfCnxkpwvGvze%2B%2FLJi6w0plQfQ8gwJx9svB2vF8jIRaDF7H0BkzJlFbisPSNOIdaPqAm6a7I9zJxXHmqs9Cy2VpM01JNs4IK2qqozRmRJ57i4r6SpBJHZzgTiP64rHhDi8LJweq08gvEu3Sti6DI5CQIYJiajQCHUJlQ4ZEhrufmnYGU0dkKNNxeV3nrqvIKcjkRaLGnG%2BzbBCheNz9p9Pm75feQ8Kue8ttsfDiuEknrkW%2FZFA0RKxH%2F%2FupVlUFRAr%2BcubEgKmD%2Bdia0cwudHNvwY6pgGAf3lgwsUaQHLIyqEloK7SoGDX3MALwNesBEhF28lhSncu3D2JNDGtDCyCB6ESOOFM%2Fwr1XdYAtMM02ZBS3KtIkX9qkdGWL8%2Blro7pYDbzeGYya374yoc0RYGRh0dJxcI3oivTTEBB1aaNAKIVsJtQ6E1tCA%2BEByQz2chqN61vaXuzfmOzj7lt%2BO%2BDB2T7QZR1WAXS4nH%2FatZg6XfSefC27QXlpQi%2B&X-Amz-Signature=3af2470366b7fda182823e01c39207ffaadbc3eaf93d3528d8d918a2f8961381&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
