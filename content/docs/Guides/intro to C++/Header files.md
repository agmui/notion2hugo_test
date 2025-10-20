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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLNL7GFC%2F20251020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251020T014032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCICFkWhhnoC0UZkZ%2BvB9%2BNYQn1SPmtGgUFACflEOLn69WAiEAsHFeFs%2FanirvR8xErB%2FcmSGdNO339hCIbf1Myjs8t1cqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJXo%2Frb864tZKs0vLSrcAwUyJHteS86jGfUJatkR%2FyYnu8EKm26a7BkumoDWRr7sRHLoRpDW9ps6cZH520hx5XLKYPwIeoEueIXadaf0EVu28UJmB9IZIR76Lw2L5GxkQJs%2FBVURZwaKXXFNlRQRMtNSC20LOT0AL3FC0xvWMu4Ud%2FnJ5%2FmCUH%2FLXxs967Tuc%2BFK14qdVbmAmw%2FoeT2p%2BRbDCWJ7fo7%2Bay68pJU%2BMpq4SlzFFYKEmWKKr%2BDYzsrVZi0RTrNiysbfgizmnNK5Os2f5oJlNq8ACiGAyh0SIYIiiT6o%2FkRaEEVqCFMEsP6fGtYzna7A0O0lxkkb%2BgNPxDcBEM4gowZ08moBEiivcEIJX33dWmXxHUXG01IS%2BlDb96MKdvx9CuzC1MED2bAfhtpzbHzawfqeUKvBo8tSKLVldvPJtUvx66VGgN8Wg0zubAtnZ6iVWnI8ATAteRgC%2BmOkr8zhcx7Kk3AKoXCErjsMMmiRaaUmFxuw%2Fk4BNbECUaDeK3tUlylIzJCeM9NwngfMazC6W4DsvQtFY8p61xBLinPX7ngkHXZ0MpxpMEkqDyGt%2FHD%2Bi2c6NQfz%2BWlhdPUQFJtMHmWsJIHl9H5d%2FdJpUQF9%2FcJwoAzVxSGFTZwbvhAdunAxy4Wq8G55MJWQ1scGOqUBwDDXU3pyTBXj2JSP77z10sXXUM43I7%2BR2HnkiW15wyIx%2BhvtjGQXFOL6OPE15BgL%2B9pXOh0VAgMSGuBPPH5SqHmo9qdoFriG6z7qbXPcZl74NeXFqUYxScj5vBxQrz8Cc8Ees1xZMOJkE24ztODmw6XlrgKOZdfhlY%2F57UmCM1XpQKeruOypBPkf1Gqku5H7pC0HqiG2fcXkJkhRSW4vaN5iBelT&X-Amz-Signature=d2bb19d25d0ab4e7d901e2f665bdf6135c70205de730a6004a64c3056d28d542&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
