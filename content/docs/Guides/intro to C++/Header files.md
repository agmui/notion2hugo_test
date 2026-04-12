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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UB37KY7L%2F20260412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260412T023846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB8WzLBB6q%2Fo5Hx7frK25AosxPvDS%2FM%2BUfsZygeude9mAiEA%2Bjd83UqPaGgGg2nUtSsUoHXPZ2PVODYmWc7thWCib4gq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDIVOfV0kL9QaUnB9jyrcA3xTzagXWYNpDpHscA%2BuqjYakMterUFDShiYDpd%2FydXDHP3ZmJMPftKOpsdekQn5Fs%2BezOT9O47cKJx0sSvNh1AMolpsx%2FcMKrGK5WHDrGzgvQta95FDxKrobdmnlnNUQUi9ei5dmsGDBcoiMt1PwQR7KkUuVJbxQbu0sw0soY1G2p0GvaFfuRvKW%2FQN6Dk1LLnsE8tFi2PaTIGuonKAhHq5jck6RjqyL3AzC3HI6fISbtLP0TQyRV7E7z024E7SdyKNfpbXjH5Nnt6M2cO%2FDCMHvVJH5gPp6JR2yWhdiUb%2FsTne2Rtv2eoL4k0%2FvHPZsYjuOVS2NtLmW7ukWp0MKWSd6JOL4fdDXrfdsMxzdS4Pe2PA%2F2PIM0Fthc%2BGgXyJaf8%2Fs6iXAX3hN3wXpL9bLEzlpsMMAVc34jrabv9fy4Vk0y84ZhfjOzqU59qfZ%2FuWQG4tQX9LG1Dn3Fkiua16TrzVaiLGpMYtjcKDa%2BO4Mb23w9budwv7VSfWXWNsc8KYBrMEJ6uzo7Aq38ENV4nNakFn4mXb6rTu1IP8CjDGkkdu%2FQuJ3DzYqnReCnPdFAY3Q21LwNvTSE9pysfMa5EArBWVHtwz2rDIDg76C5Bc40KEbLfJzhD3JbIkqnF7MNuH7M4GOqUB6lywW50%2BNDKv9pL2W3TWKIIepHpZOIGyvoxtTz%2F%2F5Z1%2FojsV9BrjWTWyEur2iTAiTi5W4ctKDg4Wd81N%2Bk3kgD6DgZn0RPY%2Fw2mAYImmiLDjYbkFj8w84Uk6%2BRla1V0tNjHd%2BAgolZHsbvt3MGQZUMTOB08XwlhDxoZj4nw3wKFrIStil0inUQ27a8bEr9huPlYmCmX4Xo%2BwwfK%2BlB7MJRA5o3U%2F&X-Amz-Signature=b261f992e3b515b021ed4a507b45796fe8bc2eba35496b62e374c45e66ea1c32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
