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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMKE2MUK%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T141114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIBzlxpmm2GSXo7dmxNF7iF1eHA%2Bwn8OpwRc1QddyNm3UAiEAmPueBlrfhjUcxVVPxjuUqQ8HdCjSYi6q3mY4d%2FgQ36Mq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDALj4vD7dQ6zUJUHLircA%2BsV0BE13EJExeYVY%2Ben%2FztuHbJXnTYavRnYgbs581ilcqD%2FaUq01SAqdf9ti7yZEL7u7yeqXXh1BrBz31CSIWf3htwxN4CUwW4JjceirT7WIqNtfThpSKgic5cmOnAWU7xgfHpSl2govn%2FXAS0dKnGxEK%2Fe0DGmjnU6%2B22nsIQW8DHlfGFjTSp70tRFD%2Fo51jZk7n2itdTlSWR9a8XiagMnJ9nNS9KEhk0VeX%2BDYSWdnbfgsUV%2BCJ31NSJZue7BumhTUOLY7c6G4u0BdZG8%2FpSlcfgf0r5LDwxe4kEMuNzE3ITawAehlyVdgpVbrlG40NIj9d5i98QDJHzCkcwP007xPQ9LaPstaAwGwvDk34LmP0unNzp1FLj%2B8VunE7gQ32%2FhYeYWPdUD57I7AxYpFSUKeFa9zB1T%2F4YZeqCPX%2ByIo1eE83962TDLCpKmzPJsN8sr8zSr%2FYZ93zFCfnf4Is%2F%2F9NwS3X71KKGpMSWDO3JW2wBG5z9oZcjgvRsb7B8eS2zdxEvlZOH5m4IJfLkGBMNCHjYVacLzlZWlyLJPEWOXjZG2ODm0TzK13hFVWf2CM3q8ZF%2F4uLz2MmEg7pP9Yhfb6%2F16tckavQZD8hhuQPlpWcH0LmaxbtFqUX3WMNWu2cMGOqUBEQchukc7RvF7Tpzab%2BB1ggnz1gPmkR161ZbOw0tVycZwL49Af6EgQXhHHaVx9lxi1%2BvSldMKJXq%2F3j1FRoy0eQXWfxHbC6lOJ8xD8Wgn498sj834mz%2FgZ0X1%2F1PFWfVMdVGFJuvTwNKNhyViBAFtqdm1gaYb8kaupeZ45XsjlYDIjYBezRkpEaMpeb4lW6Gm1PutNx7Lp7RC9olb7e1bKgFEeyQ6&X-Amz-Signature=3b8ba6237ddb77e9f5f0399eab20eedd3b17dacd998913ba90066eb0964f940d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
