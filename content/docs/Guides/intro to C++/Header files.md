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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625HH5UDH%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T090806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF%2FG%2FUxRj3JDuOskstBVRSN86ZzJFUcVHW8jLLuSppSxAiEA%2FXL7X90oYy28zVTRa0o952RTWfaoPfiO195Z4NGf2KMqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM39UxBfGTCQgj0MTSrcA3b9QOB3%2BtTw3fdFEYH5O1%2BoT4ojKczizbKoDJiu6UoRDURrpt3h2Jk6aLJzl5w5OGkWmYXK1UqGCtUSW8BRlXwk1jSZ%2F0ByVBUWbPn5d0UW75WI7%2F%2FVl3R%2F3dk4bbg2ZcLXPZu67PGWrHehVwyaRiuiXR6tP6qXrs9AZSwkSHWFYYCGpIVW3RxWFwX6QTtoXzNcjU3SMzbkmUMoktLmXVbRGHG%2FY01zSfa2Sy2LOzKk96Y1qKtMVC9PnltLQ2pV9xd5UALWb%2FPe%2FuF2lEO4w22kD43zW%2FKMloSNJMVEvBevW5LYfaqhwuUNyfebgmiCJRueBfwUKshRTwuvI37HMyJxCjZ8bHHnJbBEPD291ciID%2BoZz0FKknGfbyoWxR2rAlvozMA66zyEt70m91NZpW59UmpVezwbbh%2Be6TVpAg4%2Bd32XRHclnmwSmY7gsycmXCbyVS38sVSljrSL5Uen%2B2JVl7LERcKBRKKoWRK2s9HoVdA2KgASjjfbUS1CLGdoiUR45baIjuZck7xyPUgPZ74lndMUldbE7OKhjbDdNPanB1BDOljR3uLfQKbm6VIG0GVfeLK0MqEta9fwwbG0zkfR4Nf4%2FGNzX7GlNPjtorrMTi%2FTtGfC3%2BzvdfL4MKnI57wGOqUB7cQFJ%2F%2B1C%2B9EuPbflGi9AdxMUjPVcv5lVwfhfxroTy9FThOZfk2jf7kKa6CgVKd6HrnjiXfIX9qH9baw%2BI6oRYPFjD9wn2qt404qb2XmNAp12p04XsC%2Bi0TE6rxHd56YwjwW0I%2FUZNk2WiE39ozOoDXFJSaUKjsqNbuybl8UDLHBVpOWUhoLVBbcOlHN6EoHIowyz1GY54y%2BzxQGxNQmWkol8ltQ&X-Amz-Signature=baa3d8533f8e6676560266a25441383d43c181b660bb9c9e77294d51d7672d1a&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
