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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQTRIFCN%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T160758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQD5wn79YEs3ZKZEc3QkkdX5EIBTJZ9sNumui72T3Y6M9gIgcZAcn%2B7bHOqv1BM5gl0P9cWvBsu%2BJi7Pup2v6MyMxzMqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCRVzA%2BVdqZCVAcyMyrcAxeKZdUR8deVrTPYpt4AMh9dVU5lYED16WadV4MFHtZdPbrLuNkMMSOEP0eyYBjToRR6rslVpGI8ROrh33gISF5lLeaJ8%2Bm%2FJFsY8fZc2n2YPw87jFbiUbe6bL0ctm8Lq8GUKZyNQOvRV%2BmalEAb6PNZ8V0VHAHyK2jieJB49bVQmRIDGBbcyip1nJYQoMfhS2gg1ICMgYugnpLIHAvODIAaGzUS%2B2KvNgW2tA4U4HWLqnnO%2BNUHkCXqIzJQolUHa3ehONHdUPO2eAzNoJJKk11kYvCc8sOzX6HQ7wNi5BMDy2bnAtdz%2FCyodYkE79cl76EWAY9FXVsHTrLkDsO%2BNftP0QoqY3frc3AJcqEo6oM1jYReKolpaSt3oIrt%2BA1Qi%2B8RPELSTwek4hAbUZCQmgy31HIHhCxSSKw8A1enoWWNroJRdtqsuTjKsrjbB%2Fx4N3M7d%2BBk4v6lZc4IX0DjWc2Mxf6GR8%2Bz02fciPv%2BscGKiS%2FbEqx4MguDtcmTQOPZeUFyWCy50IwVBZAThLQ8ygJf3UuRBWqJ%2BgZY9rA3s7jKwST1kXmIic0DOJZOGUSsyLeBNrQMEM4Ap%2BT7oohDpMiAWykGav96lnB%2F%2FW5a9tjBuOgDRwK20WzxZJkqMI%2FN%2F74GOqUBGCzkw%2BZeEUMFIFYVSiVBIzh%2FCZyGNKVd7zca0z8dkC11Z9oo4I4X%2F43wfQmNq86VXw%2FTs5sSCGken%2FNr82%2BEU3%2FgvOh956PL6GzjglXlCytiZlE5jReHCdSDsvFj%2FmpILT1NyG6qT6ju5QPZgLY6diyjZiYoW34mtPzsym7UwhfWXBGO5qTXt2CAotFcDfK0A%2F8oTIUzSqZiNHCPcrYUCw1OTP3l&X-Amz-Signature=036c44bbf84069d276ceccc2069c3f555f9ec6788c0aec1a6e776ab4fac0324f&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
