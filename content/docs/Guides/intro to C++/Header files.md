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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2MKVFTX%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T015655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJIMEYCIQCdnSNas3%2BiOqBrGWR3JqHOxS81R7n%2B%2FHwBT7%2F6KYpGbgIhALVW99VpWjwHf1WGhU%2FSaozfnfaZYMLhOr26g4JLIJXSKv8DCDUQABoMNjM3NDIzMTgzODA1IgzQNNoANheMGu%2F0Hukq3AP%2BC8rbTSeYW0pNOWFNi%2BgVbbess%2F%2BwbpXK%2BXkimW2hqm%2F4yvVfl8mPa1rsdwixPdo5igYj7YEySyr%2BR8kJXlPx7Ib3SQH42YrWTTqILNcCYS4MR0tNwgub24Vgvv0KhKQEUHZiK%2FRt92YAp3ToUByUPBPGwhCTIOZkIfjvZmYIosyzGMLImI0pg7hh2RsU8J%2BKizaPN1xz%2FIN7KiI9SkVagXyeQjiakH%2Fl6CaLK4xqR%2B%2BKeVKgAxsZNj2NM%2FmaAoa18eDIvXb25keAyyaX995l9%2FRHy6cZoIvRU41QlzflaJFznWQroZoquGH5cP8S2rcOBt0Oj7NS8bZKc4iFOd00UDvFuk1EOSAXCCDyNFdjXdreGdaDwF2TLsaI8zfm2QPsXLYRiYcY2WBTXgSM1kdtVAVzmt7Vj6pKB1KWtz%2FYQEJVCd9%2FYRf7ybfjp014QGJFT5DLy6o%2F9uNOErWlNCYd%2BSfcjYS6qkGlRDVpzw8wLAAZCJ6sqo46v7sEBS6KSOB0ZMAlAbbUYvaD0XWQzhXMmKmoR4BhCVHyHxo5WTjhzuLMBtcbYcdWrXzVsqPuzaKqXiKfC9IXGpStLOChujVGVRLOnYAcWY1W2Oer8erzm5c%2BXR7YTcbUBWjLrTDxk%2BvKBjqkAb1qJ8EZCJGOT65jSMka74Bho3wo55nbZWBk5NloTJv4bpR8z6Wak57AhEuIMQ%2B1%2F6wxPSakrQXWVVXF9m6eRe9HHd%2FBM0kbCdtHO1ci7Eumen2j%2FAstfXfDuoKP4A9lJbwuWfo2oDHFhuE6IAhbxAQKnmhnNDclulU02jsyiJTMoIPqv%2BhZqpYjDvT3QE15mOrXncRKXCNN72LAELcrfb7T0Zje&X-Amz-Signature=4f3d7b37c6800c709311241d5bc0cee9f9ffcdcf0e961718c84494702e651360&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
