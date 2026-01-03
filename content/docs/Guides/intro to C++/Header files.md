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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJUS234Y%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIDJVeMJBPjyeDpGSBx2kEqLLtBmpMpdex%2Fg5p%2FnpuZCuAiAqPQtj4cmmk5hAY9FLm6j2GbQyR6xun11wQSgPfnwCPyr%2FAwgHEAAaDDYzNzQyMzE4MzgwNSIM1hPUw7w%2BkKEEOEwOKtwDsmAVRxImJu5LJh93CeRK1QM%2F5AekiYVvsVGpQ7qsw4Yz%2BHcO39qUO3ZpJNItY6in0dutq11%2FL1cjZX0EA1CkMuHunLEMvoqS6mWLzZPC7We%2FlgTwoX6H5YNqAUAitAI6CUJXZ2HuVz%2BWT8cEK86w0cFWeltMrjx39UywISLI8yTvc3DYIQjp3d4dsW3JXERuS9LuyCburTbcMrWWA0HLhi1GTzjCIKUJUF%2FL1V3%2BajikOVAwxF8gBU2diCQ%2FaDVDEw%2FDiCIPsznP33sSP33BVx5yBH4haHlZ0fFQxEjPX1Jub0NNHkRMva6nZCTwxUhxTdV5jOcTEqkxEs02w5NCZgXCb4%2FR3Y1JddiKAulr%2B4OTMETg9wmbxmwl%2FP93cGf9YFeE9cM92qXxW6cEmOtbtlse4kNNlIuggooBRP24oADgMEUjUV2xIjasavZgsg3lu60NFaZNob5VLrmeGa79QiemJgemTwnPkyXRLWAIxPMKPy2bkHGqhQqLezxxGzsrj8hCPiuM9QnpwvAQnqKkaYMtC%2FfTRhQ2K%2BqXnsNbErfpn88f5cDktK1C37xrJDb2B2%2B91XCz8%2Fhs1IlTXrpD31i2Y0ourjm98ODZvRyQtyeO%2BQ6OSxrVdBUAAdkw8fzgygY6pgGhASoqz%2F7cnkeje8sIqS91VEBrnFUyIU7bvC2RkIgQQyfOU0H9dPmWrLk7890WaHTdrRpGjivWPdef5diAyVfAYE5HgwdGyJBUObqM7va3djejggl%2FOvb9ujrzW7p7L3E6oVKs4e%2BKGq%2B7YJ7tNbq7wL0qrzgz0MH2gktSA%2BzZqZkx5qskSAr0FsDrMl9duFwA2ybi1LlWJintubmMZBC00VANtN3c&X-Amz-Signature=29a81984765bbb116e9d166303580b837e5df6ce74674ea365661ca67623b4c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
