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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665FUT7M5%2F20251005%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251005T013822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BfVDgohqxQddWaGDPx0F%2FSS%2FgQr3P6kpxghQcFGpRKwIhAOqqMZvjG7wIa5i1YluTuzNaFNEw2%2FrP8DowXAoPOAUTKv8DCGkQABoMNjM3NDIzMTgzODA1Igy9PVQfWKzi%2FPFNkq4q3APeSWhPp5ng3MbvCts8Mjh2iNc5OJR%2BIluQM5Wl8Uqk%2BUEdE91EE%2BJirHIbcTfsqVlOOUCBXjtyi28O6L5qRVQtRTCQ95aKWqYl7eZ0q38KKsUEjwZiwzCxcn9qzcFZp8OpUE7ftwNi8ESi5WxwY315ntthjrrP%2FAMORXeJ7KW%2FUXLLjQdVMG1s2qlWIZYpiWC1Op3cv2%2Bx1409zTGmzeW95Xx4dUkAyMX7glgz%2Bgwgb7RigozZHcXR41G02vp5zpcMcewupc8blELuLb84FNA3hngdj0m8O7ZmxUJxK3%2F5%2F3JvwVnN2Yp7RNP0fcxXHSLz6zMuP4ZxOV6%2F9HWwudlJ9KCUSyqRUiBuUL9Ruj05I7dfziTybivrTcqSRBSV1y7Jz2VW1i0hnDI8SG63hK%2Fok%2BKF1X%2FLmNmyA3UfGyCMu%2BGH8XaAmgsOUBN07WJoexy5O%2BkQhI2hMfeMAZKc4avLkl5KnNZ66izny%2B4N7iYmQIVC%2F6CYWzmuzKrAV1e0x0s39LkXO30ueDkvpgMPBG0fkMBoRrBMMZ%2Fe8kHD2YZQUD21zopGgK4d7YB9rOcrAIjBcLaVK0wJYtvjnWA33355NnUOpjNa5fQdnRWDj7FglzcLUsAh79JRxGscbjDO9YbHBjqkAbnTOoJkQfJ5gEDnvyxIa%2FWjTDUSqHAa%2BTVRirrsm9HO0dbwOcx50d%2FkjyVrVwsnRk24%2FTtiFTTzFo%2FnjMAcw5fVU8EzJOsV0TC8patciXTa0uSTvK02kaj7pB7U5PKtfziw9SPeIYkhttkVBuqJ1jvH%2FHOWwMVKrZKm8QyFUpolaWm15DImMWgSr0YxBTejahyD96reBm7P4uZ6pt4ee82gmu5e&X-Amz-Signature=09cc2fbf8d6d6c3786280536b6f191db291f8d6e013cbfe9159977e444e8d5a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
