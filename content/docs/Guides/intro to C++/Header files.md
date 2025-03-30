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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KVSPNVQ%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T160809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIF6GOezttZUxTB8PkIMaRkk8UdP6qskAGeeDI9qnplnyAiB1OiGG8pG49COtbBgLwSLeJShqFy0%2B3IpNZFzkm1HBayqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQI3DOPGnfrEogfm8KtwDroAQd8HupziC8oxxMFCIhHzA9h26Lq6rN%2BsRyx00loyQh%2BzejMa%2BXK%2BXYxHFWwVC4UTGVaRBSH%2F8FWKFYwYy5WFwWNPLQDk9yzDDuUPr6sgcGefhGvKwKkZCCuuKwDH0KEp7XdM4Pjf3mpZBVKMNltuepc8OCh3Nhs%2FQZc75Kkm%2FK3nJicVpiwP1I6hhcjyLBFYGSZBJBCxKKIroQQ0HB4sto48ly3ND%2FCpG32QJAUBhDLqhHR6%2BOiTIcvHFPkeW61LSlovG3431ekOCRgqQ%2FGKlztstSTwOit3HWDwWBdf4XTvTnbokAVnJYJe5hn7uc5Bod9%2FJRwy%2B1atGF2tG253H4zrFETTqiIvsBzopKItSzgzaxjRYn4jjScTIVqhZpgbN3M3dA7Fvv%2B3Ch0ulW1my73uJR%2Be49RkovOUSUXA%2BmI%2BCE4ZAq1mv%2BRZEI%2Bg9j3ueVCZMfzHiDMeJ2JChuyn5gZMNbxl22mDQ8zMn5rnu3Cvz0L5Qa8rEhK1z8kFjZdAnicdKL%2B4Fyk6HwxGepjoEdmVQW3Qt0WkmKc9Nf8G3cxVikrBHiriiZRoEGRAy8SbvCA8JNFrDWYESX0q9vkTj53nFWEogLSczCF0B6w8QAkvQ6TRkPaSzJcAw59OlvwY6pgHBryu3enrOyHv2EUWQMMB54zSIjaMgLUQVYNH2jMRClFeQXnxpDjxN9dCYOYvOKXKrgQBLArfXZOraV4pDTCceOAh7qlq5vpSTc8qFgPFaTt%2BaiON5Jo%2BbKg2OwYwsyhA9Rzn3jL2dm45cFyHVobwJoNoCkgIGkSgcAW5ViTFyO1wQNZogOicp5GOFOnN23MSBWcGkq32RYPFWdk0mKOsr33OZ1ZEM&X-Amz-Signature=4334776687716458826d9156a52724711e0516ff4dce3ba909cedf9fa9ef71f3&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
