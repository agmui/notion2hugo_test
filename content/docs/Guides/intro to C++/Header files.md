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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDDFEWJA%2F20260503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260503T025647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFC9CeuJBUUsHx5WTZyCi8xT4vr2YAQRhSOQHLNaU9FeAiEArJtaI%2B1MB0Dlc%2BWs4z10zozlWznB8VtrTuQ2CMCMl0cq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDKeN9zYU4rGARcRLSyrcA4mOOEyjGZ7n4mMA5R4xFEv4mIJYsyMq7B8d7wRrTYvuTwmeV3tcGzWlcq1%2F8ayTDvzjDdcHeowRkmUcchBIPutPMA5My8dc56NMQ4HWjZdE9ahynlLcnlX9D0KEVmzGmMC1lSDKZo%2FBd72uP%2FutsJTRN%2FZI259Q33bx%2FxU%2FcXOtdHc%2BZsBkb3vn78e%2BVcGtt8b4VJPT7TRBlXU%2Bdqftw6KaDKNLlpBmtq6PcA4e20ETE1ghHvl96hbeFjpA9WQH%2FYz%2BJT53vHk4w525dsjXFQFFLwMmlpLz7esM%2FN0KyguFb3hqDkUxWpvnI0w7n69wkDubWNFhrj7sxB51%2F8yam4Mwo%2B0BEd6Y%2FvCmH9lz7lS9L1rgADF6M0pScDg5iQEjQzL7GGRb8oWBTEfwiobYd8Omf0oSrg02zOVeVjhiQ2iCH89iqn4JTlgAVgpT0ePyZ3HRCqu0TN%2F0iYLRJc6tljmKiZNqwwOQKDE19i4vXxD%2F%2FCQQTOrxuax6tZCb5TktwFThU6MAl4rcFrUO8vMSwPLo%2BRu%2BFbFDQL1dZI26ZiQj7uOceEOSyz7%2BBFCYLJBwmjuCwib9EjTypOctUXuTCkEvFdPXsJ%2FxF4xtNvqJEtC%2FFSrsj%2Bp00ejS1J%2BOMOrV2s8GOqUBiuDy8bAugKVuCgB0gkrVa1mBy%2FqCttSKDtX0I6nI3T75S1vaJK8gpsLcz5tyePYauNFdB4mCSeZCNo%2Bsr%2Fbjn2Q1ZkOjeAIBlMqWJhLJEOssaBioO7MXkyoKE8fYqng8zD%2Fv%2BOZhxsdDVYnlFjq62LsfG%2FUBMG%2F7YKRHPsW2nFaoyFl9%2F552JFMeE1pALFrx6iOOEybME0qdVY%2FrpaZKBODqN%2B80&X-Amz-Signature=0303e294cfcd7490911f536808677d1c74f67ce68cc56bdfb261f3198e22310f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
