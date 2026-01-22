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
  <summary>{{< markdownify >}}Why do we do this??{{< /markdownify >}}</summary>
  
In C++ we can’t use a function until we have defined it

**EX:**

```cpp
int main(){
	printf("%d\n" funnyNumber()); // this wont work
}

int funnyNumber(){
	return 69;
}
```

To fix this we use forward declaration

```cpp
int funnyNumber(); // forward declaration

int main(){
	printf("%d\n" funnyNumber()); // this wont work
}

int funnyNumber(){
	return 69;
}
```

we say “Hey C++ here I promise I will eventually define this function `funnyNumber` but don’t freak out when you see it”

Here is a link that goes more in depth: [https://www.learncpp.com/cpp-tutorial/classes-and-header-files/](https://www.learncpp.com/cpp-tutorial/classes-and-header-files/)

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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTIA4B64%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQCyzK9UVLFgyGoZPEc9gGY2pvjl%2B9i3R%2FRO3u%2BWuSjIawIgF7MGsSSXQcb5B%2FhRHCm07vFLxXH%2F%2Fk%2FjhMxa26CUc40qiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA5HtS%2FfcB4wmMz9oCrcA3Pu8fuWu%2BxSTuRy8CywtqTwvx%2BijbXpZxyumfMwm6a9IwvtCrNw2N6%2FTs1waoh12JTtWZDOiSp7XMr7mbNnF2gWU1F23llp8Uh9hoVkSbSKqzjwqfYr51EySyU6Z2nnnpIsM%2F5ovt7uF%2Fsi7JmJx%2B8pPC8tpYBCtCb4TTw5%2BvqKaswalsgDabBeuhwAx3bI1920xzI%2B%2FX2hX1WBBg5uHbltmcSc9EObioNu1Q7iBMNAFD1slWJh5SC0JPul%2B3x9lCRd8v46G8w8kTnfRscHLeY4RA5jmLe%2B4%2F7Zf1SlvT6ILQDJZMXs2jyCAIAhOZOYEbgQbCHDb9V4MJVWyzLXfxxHMIui%2BKob0BpEcw%2B7n%2BxZL%2F2mJj8PGP5dJOQXMI6xD1eaKdbEFab6xBt%2BYIC11Ik0WW6mRLrk9nHDmO6UhQhC%2F%2BoNAsDqAiZL3XB3TJHYi%2BSw5yVwHS1ZkjCETKEDW4pyhNXKMe%2BrwdXCEarA7RMn5DXPfVQ6j7kQ0tN3E4KT%2BE%2Fu22N2%2BZG8AYy92QS9XKNvmZfOjPpwAC62CaZT%2Bz2U0h2n39%2BeQaUI%2Bej%2BiZuvmxuSoWpSPOujZblTs83haW%2BvrNMSc8HufJmFSQTNHaZoHSX1nKDwK0m71bclMKXXxcsGOqUB0JGd4mEx2L%2B5tmXj%2BF9U67041Kya5Qs4U4W2GcY71SIgxSkpfwxUYSlA%2FO1iCRIOVz6GonMJuJ2TOFU%2BO81mYw397Zf8TB%2Bv31lzzNk8NFdSDCBxSMBehlyJxCUD91fGJkUVis2O4nTyFgBe8gf2UnQBBXdflM4Kw8ydtMxoo3S%2Bjha3S6xzLw8D0GiRQxqcFRDw2S7Yw2u8YF9PlfXHt2fIGt73&X-Amz-Signature=efc02a046c7b1a4717db915d5ff3dfa059f3871162f4758c0598ab0b81e2ee15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
