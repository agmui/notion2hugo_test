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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NZVONLM%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T230752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIGpddM3y6Rm5IZkn1%2F6XbVql5ReTKxODf02%2FAIuIuYw1AiAl%2Fxa1OlZQmSoTzBQfHRGQp5sy%2BtDHP5M61d43NGqQ1CqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiBTE142VEM1ydTsKKtwDVLY3eG6jt7SqN8TphRHzeNyu6VdvRIi2rkxvelfZGDj%2FoPFxEosp7JVxI8P89FzK6DhwBfNbattGB5qtFM%2FyvaYJKgOCp3UYjAtv4YCeOzidXy%2Bro4%2F6%2B%2BJI%2F%2FyrqS0Q%2FKYJl10fdJ%2FEHaINnEaW5pYwuso%2FpmIbk0LJYkGNFmJq8%2FeTgiPMcp4yNJAlou%2Bb8%2FKK0%2FJGaUHCPitLln1QK8oaZeNoF4t%2BCnmv32YGucxseFELC6XdllHzusyQDyBgYi7x4V275hei5Ad1bYJg1sbSiHqzpV51P9NRDZm0NdVCYYrFvUDJS0S0LrvcveScGRR9LEaVtTfdReBc9SlwtewXpjKyoPsVJ4EXF9fu51OR0ouM72%2Fgd%2BIPRe7NiuDPdWm8zUQbHcE7ZiBfW%2FVAT90u2oBD8NS1O2FmfnAX8SzsCBvEXTVk7LC33tukNZkVOCXJvb2adSZhGXFkRUXtoJ8djCOXoyNwwf9RyQfMQVNXmWobjsqtrELsdF3q%2FdxSwGCOf%2F0muzuRznnT%2BFKdrrVIjT1qUzUy%2FQCjwaJgnPfpyNbCF8nQQEzqbTpXFBNlafb8J1bhDNsx9nAzHgLed6Ou7IFx594Hn2OrvC0g8nD8ElhVpElOYWVPqlMwobmrvwY6pgEJN2llnLex2EkX0bwOc8sq0Bbxrmvhrfes%2Bo1MdsiOqo82zVRzkyOumpRCTk51NPCHa7QrptYgnCQbl4n9xFuPHdZqaw7BeeGbM%2FSIR6mRiXsPzrAvyW%2FHkt55CvE%2BsVvy0%2FZCJtuXVx6VJzPFIcMq2rWgfb6b5eTc6gOm9oBdK%2FS%2BNTqZtDDbJqh02qT3H6alIQjavQ44hktp6rWkKcaq6AENBBjJ&X-Amz-Signature=b1c7390b69c2acc946d16b3474d8e5b8ca146ffbb423b5d858e088381e8edffa&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
