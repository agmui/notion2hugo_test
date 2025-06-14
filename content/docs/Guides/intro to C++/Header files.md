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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V55Z47LE%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T061118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIHgUt8To8cuTVMRcnBTMBqPRTioQWmW%2FbuieYh0jA6RcAiAHJdfC7kJUy%2B5NfvCGr8Pla0Z3q33tZVAfE8McJHDzvSr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMzDwxvSojInVAtnHDKtwD7oFgbugwozIqgDxE6re2vOXe%2BMHj3r%2Fl5%2B%2FZuPH0zS%2FsHuB5gnvYbAtvD%2FbhP3LIlQctwQsgBp4e41CTKJNAkGcIypK1U3ttu2bBT0uv%2B1iS5urdEcs2OEdEgiZH9kQSTZuEZ6B3vBzf%2FD6cJAmoTZ%2F1dIXRRylADjIKgkRNr6P5%2FVjtSDtal9kaYn05psVwL5sAZJH9pOe6J3wm915nuavK0LXiAOgn%2BsV3ILvZ5pZWO0MZVleBJoSffqaZyXMawRgca%2BK0WXukKxZmWfjdeRc6HmK1qRxTnfndZXDMHxM8bPNHJ8cwXLRni15lVmd0%2FdgwYv%2Fed8h7QdgLZxmCciaX7uGuVshAzHACLBFKagZ5OnlmqOLnz1eLE6qSHUeAU7OlUOHrOfI7sUWtEfTFkQVsQMNoxZCaLm1WY2jQpJNvncUP2VHF8RS15%2BxTxJTfS8r1pky00vZpNlkJWX%2BBDtxGgXvObDXKF2uJ4YzyNBgwIFYeParpdj9YX1A4uqZSh6ttttNssGo6PVWKGBD79nc%2FlJM8t%2FXCgUgAOHbJNLjnp7NWlois3dk152B5UApvoa%2BnFwBnu2fZtKcnlFSwThEG7nraXgF67bwudTiV8bNk64DBX1ktH3IkQtkwrpS0wgY6pgGCbzQNZAdbjFB8KwEpV0htj3ncLfyHNG98UHVctT%2BMCjA9eeH3%2Fuk%2B6PKlVXi2%2BwC1WhYqVdsgdXTQwxR%2FTTolv074%2FnrQ2xREdP6Zy2%2FlI0Q1vKJUtX5p6oNXZG9fhPB%2FsFj7IzksgbaZzt2dsikU2aTv4v4PH4YVdd4XycO0S2v1sC%2BphsM9IEBTVEN4gRJ0F9OgC%2BReEjRC8%2B9DQe2n%2FxuWboPT&X-Amz-Signature=45fdc5c1744755f7c187f651a3f35893f9e621a58f8362fa2a74253c88346761&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
