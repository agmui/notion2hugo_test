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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VBK3OBA%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T220735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMAXxJHBmpVKcQdITuTu5Ilq3KABFpuQV0D8ap6SvHZwIgYaLghS%2FEl9RlpUR2dU8qjqZWxwC6rSl8Q9muFpGnWewqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGxIKAFfJ99ApffqhyrcA%2F3HbQrNxLOeUK3fvhFvr%2B4vfGUueYhMDeWDxGsbde%2Fq4CBiBbLvXOE8ht%2BY4zIJYEtIMqR32NFH4QICbmqwvhbirkMZphTGuo9IXvK2NchPSJV3xanJ7XFGZZuu7CtI0knWusZoShGkSKwL8QqEnV8f9ehwhZFm8mj1VbiegEfr2YvQiDBTYa95J08JtvNBXOAYA7%2FPGBeBMPf5XyT2Kbpcc4GuL7SxA5q4UPJ%2F%2Fx2oJUvDZ4yzR71JEJGm85YGJ3%2Bg%2FQw8KCkjCoKd4wjGOUl7oy4nvr7RWNNW8AAvGo2q5rxMh4ZDuVm8fNLCkejQl2cKBQruKZwq%2FQFa6F%2BOCf7%2BBL48gifozqZBfushQ5vZ9VM9gT4yH7EE1KUrccJUozjeAxbG4BPK4tEjIlvzRHQwuWg9TldTUKgOrEEHwKANz1vkG22OcARv%2Bu0yBBmwx4k6OMH6rYS8vk%2BParn0q%2Fq1e6mgtmygkkhxG0DcWAd%2BvOwE%2BJewI6L3xRk0kHKhS0UX1PvT%2Bt6B8TSmRII89ibb1ev2aflZ6M%2B1pgvhiGVjHnElE7YnMG8svxJf%2B8BlZbjMoK1gJAYvQKmhJGQduKAcJL%2BD387b7hxCC8qvNgCyHT6MCSG6b4ZkE2PIMMbil8IGOqUBrrf%2BuxnFz8H%2BWP%2FFFze88VFQYqg9lojhxpvbL54Wvc8pa%2BWY567MKrmwFtbGjJk%2B%2BB7bWUwShJwULJko%2F%2FDI9VoKRTN6mRATi0p0tZH4CACXxQwmffuoi5s%2FQZrbMeHgReUfYWuA9%2BREr%2B7D%2FlKSEkq9Dz6UkXtVpnKn18uBhKP1VSIWv%2FC79YKZZEmSHXNt1%2FS%2FqlazY%2BvSvtVZsSxz15jPUgu9&X-Amz-Signature=f0cf51f9d7feedcfab88b172bed82c0eb54795a0d805f8d346311f609325fd99&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
