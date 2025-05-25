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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFY4POSE%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T100753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIF6AvamrYCLVLaLv17emCCk5wv47Na7L1oJYhUPUi5eYAiAxPFsIGn1D33EKrdzw5yIWpI1hjjc7ouHwYI6bMNqjUCr%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIM4WGgwa9WgtbdvT6lKtwDJcMUsrdhLuh0JYGweFIACaafETPHdAZXXShei%2BA4Bd12Tje0voVVe8okUTDUU1xuc6LJe8O7EDbTDdGEOGjuI%2BlN7vjeVlKOiAP%2Fgdwj%2BxNxB2fJ3ab%2FePfm0DpAJC8udS%2BSfkrSnZ4d44VH2TC%2BXGmPSo%2FlF4C84N72uXfZkW1y30WFreLCnzEmoPwI2wGbAI0m2eCQ18EJ2z1UazboF0NtZhBQ2v0Y8ww3JiVP1C6dhS6Mlshy4PkLXs7vktNCZsZ63gnWIhVV0v%2FQFq%2Bc%2BJShEDbky2rqNpTENQU7F41EWCRj28cBOxzGa0pD4vy2SNqzhRs2nMAryL5Bq4Xm6BmBN1962KMttUrSVrqvf1S8hHiSWIWcuk5fKzuElZcQLAfZftHc%2FFhnMWGYJveCf%2FEd3YrWxJ5zwUK7Wv0j8PAFydCP42fzFy0DY3jArH9xJFZRegpZF8IFMFGW0FoUxHYds1uEVWLdYdEUlfVU7aww1KTVZ1%2BHL7qD3irpgxWtB6m%2BzHXq0CfK9HO88gk3EBDae5mqw7eVqgTZWaimU7ROjVUcNKwRB3kuUcReo%2Fl%2BOoufuByhW7uXdHJh8vAPvmPjwmTCYH%2BkZ0V6PWHQ3GV6M3OV%2B4h4SdkYCPYw07%2FKwQY6pgGAa3iyKJcEFF5ZJ03x%2Bo5ILWoTgfFr0%2FaCbZ74sUyG4Ec28gZ6xPBoZ%2FLb8yJa3wPzFG46eNqIFL1AL82rBe7zHVB%2BU3gLLTbfTBMQvgRIPd2H67Sz1OxGZm%2FoaajHsO0yQjMl9C2C4FfhuQTi4IennzRHpgJgp%2B8QcoKq2ucB3yrgQ00tZJKmBVZCHU5TZwTqKiSfClJAStcNsHN2GFHL7cgAOjP2&X-Amz-Signature=6ff8c97460cb68d33ef87372ddd995b7697068c5ee3df7591012c66aeefe7fa5&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
