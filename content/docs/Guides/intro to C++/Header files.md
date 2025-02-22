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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DWKBI5Q%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T090659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDy3%2BZLh%2Bj%2FeOO5DSs19hg2vIsG%2BpZotGfjJLBTUOgrkgIhAOE4KU%2BeKCMRhmpj01ZdOh7xgB3m01miWUAdQV78O0dvKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzvz4%2BwJIz6HFNiRRMq3AN1EW6WAdGOd0qassJVouKqEZYTuClLBtautoZdFjkjOtkBeOmCuN3TtbXIAbRULYWWS5mpgaoYtjVsuoHdfPHL8pCQZPDolm%2Fm7mqJwrje3njzAodEXaELZ%2FY9bQlOr4FutXOnGv4Fq1ApwJuwMMW%2BmSlJ1f8TWrX2DftuPAKykfbbK3I6d2AkCwzkLLbBoLw3LIBPEd%2FVg%2BJaoRy1n7QYng1ok0B%2B8gzaapOZNyHfQkP%2FxtjxWwLq%2FcYelNP%2FpmNGia8I6Ha08T9aeCHAgD9FdOVtBAsuQCuGmVGWTp9%2BjWfJh%2FmciFHIzQUk%2B2Nxa%2BaoB2a7L%2FlIcFdQroHUTBZz2OPfDAxp7LN5ZI0jBwcSjuvhTaigB1WMSvzQ7%2FqT3pO9GTzLJM1%2F79WQpNY1WeGAQZLYQTO591vK5UhzVQlgglGnjmt1wJJxeh4xN1f4pv6pv0CGyTwFw4Bov6CsxCbxHmjOse7a%2FsfM5Ye0meyXOF%2B2vEpDTbl4FPAYvHq9NIjEFlFM8Y9MiWxdLjYAR%2Bc%2BHtsD0Zxz20AInDRGYvS%2Fy4Y66Ewa5qodzytySu%2BO4EBir6jbae6BbdTiJZu6N%2Fk9XliDWX9uu2MRHw9JsFE9CRBXljbZVB3aywBQtDC4x%2BW9BjqkATnNtO1uq%2B1punCDj4wVN70sE%2F8cq4icC6FTESKvSoaMdhl0HPssJ2r%2Fxz3TSM16eHsalhM%2B97XJj8lTJdQwzYRxKx1H1kDouypGGgLTC%2Fog7a1INr88ZppU9eMrA%2BWUS8woeyx%2FAB%2FQ%2B7vKIASgHuPkfiVVO9Hg8vI3kN456svwFweVPpwJ4Yeqe7WLKWUygvveMJN9mjpYYUWA8x9WwcVJv3eY&X-Amz-Signature=7e04ba2823e7c9548a3119607a0e76f4864ce16c09c77ad9f1ea617bc8afa6bf&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
