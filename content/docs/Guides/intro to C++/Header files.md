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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMFEO23N%2F20260415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260415T023520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkimUetnsK7Butnd0qUO2mNd5GkM0boXMU%2B5JvRzOgoQIhALhuVvWgFKIsemUCFoWOOjHEoWspnHF5iL%2BDM0qSerBWKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyBUCwZYMiLHYbneRcq3AMzJJlVKOZaJzyRgQzI7tsJ0UPSJfXX5m36kGcpFAGyI2rvnBwWgc3BZC8ImkxzFaRtp9MVRw0%2BivEZ1IgAeYpJY%2Fg84geV8FpAQ9UBw1AE%2FQqjYxhx3IYJKFmnIjJtEZWMseofO7Gav1B7wqYvSbe5SA2Io6FNf8XWFGmTT8gqGbgpVbgSyj2aQFOU2ixI5A8xrddqlR3rrdJfjP%2FMwxHoAYuFEMPQKPxq5nc%2BF4C1E6QvJQntDMmtuuLHB2%2BsKpuKvRt81tBTWKj0O08hViVuunmGAP5M%2FdBKpUmpuuiGNqXF2PKj5P8n%2FTxy%2Bskn%2BGbISdiDYjH%2BKqxZpN7UhNDnozDj5QUPxbjUdysX%2FxgX%2BlicHZxaEFJNFqNDBwue8dsb53emaAUoy%2FnlUB%2BWxGlCdMV9rUv8Ki73LLsXqFH%2BaKfmAx1aO77o7I93tHcOP0iZWWI5%2B5dQPpHhGnDHzgbWPqMZvYTCWDLVvRMvtHt6MyKbszg9o1SYIOGHgfLMfbLwDUOHjOokmvRIWnVKgub%2BFKuUV4fgrHAd1vns0cMdjinZoKOgkV8epPbvLtDCjbQcAo8qvi3Yy9pfVxD3TVBQ%2F%2F7hnAQ1FJSrCvgugY6ljKAg1P%2FYb6nswRGlDTDO4%2FvOBjqkAefVB88uilW7VswxoWbcik3k4KGNKlisuxtNjubD3RFfb0c1SRU1XQOHqE9Xwj0qXqq2eFUeTYwz629s1IfVGxv0cRFJXhW0Xp3HNWphFGOQMm3%2Fia7Yz7CPt%2F4Sr2NP%2FDhsJFzJQYF5bMFHnGdiT9xMNQlLb6o0XFhazlLmLKCJcUKb%2Bxqbhgh22N1rpRr7Dcxbmixt%2BIodZnkrmFK1iJBHUdZ2&X-Amz-Signature=2880cee8519c5227180e78750cd1c3752910d3cbf0305cc4f3900261b2cf9eb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
