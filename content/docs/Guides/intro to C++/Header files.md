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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPAKA7B4%2F20260403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260403T022628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFpAsLcqmt%2BxpJ5gnc%2Bn9ZZ5k3X%2FMGlhIGbyOKmGuiSWAiEAh2cOI5e1I2tjju%2Fj4CMb%2F5h5H%2BHMFrJt4eNSOW1uFt4q%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDICVROwO2%2FieUWx1MyrcA1c0xP0yICUJgx52owB0Un7UXKqpQ9EhcBfbfpleJR%2BE3bIrFvPs7JnWoOjH8L8e8nO89r6kNqwQGMMq1cbgxQSUgZkUEO6rQ4NiVcWaeCWczEWnkA%2FKUFkI63VbkyBITEjfbAp%2BXJ5%2BlShdh5exnXVS6KLoVDRMOlooPH70x%2Fji%2FjF4L1ST3QdIbcj0Yk5t7yAxjUFeFlvWc71lhOt8i532EDsXtTgkUduNXeAqh22gwxgTaddmCKDHQPmKrSmszeiXfwp5zmCOjwVqZmIGf%2FVWoZubHzkefP4U9aIjh%2BbYvKZlUjiIKcQnBRKfq9MwRXf6vhGMLkGmaygfufSRQvSYT2BWdU9va137Hfpr5LgoORTzgn8HlgAaFtGfZ4ByluP4oduQIodLhx1osU5hXEu0Wves1ofJ8tT6UERT%2FvImJ%2FulePGt4gAWsVEdvGPWATakf6pZxsuFS1k5CcORL7%2FOYlKz39%2BCEMtP7JJBVcHEmDo7vEFKD0%2Bw1DnpPZ852jbFEWvHvlE7ajUC3G%2F1k%2BpLRVy%2FHonga4Sgykqon%2FNpN%2FfPYSg9gVdvs2WHEONPQ5FqP5eWo1Chz3UT3d%2FiHLvBAfkL1QB42uUFDHA95nG00pdEh4hEi9SPH1fyMODFu84GOqUBqDug4Q7ILyLi2QFsP1NgD47eAH3Wj3Q5ZqaJkEegbkeQGAUJmbfQp8yeW03Q%2BvOj4pBhIOgJt8i5j%2BHoTHVu6N4U71pkZ%2FHM%2BTst2LLW3Jnk7Bknv0qBRqkOrwlXLGIDHbDgclIX0HkvPTP31vX01zcWTzOlYv6WN%2BSup7P74l3s040xDwBCPnTbirL5CY%2FtpIKfm7KhSxBZFR14KbeevvaZopSo&X-Amz-Signature=deb1495c1c0420515c12245dd21e6ccc4f0b3c179f74f5d2351bcdf777f942dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
