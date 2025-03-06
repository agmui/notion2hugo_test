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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5EVC73V%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T200839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIESzRrtQEwdLYsQkwI0FVp36dV2CUEbF%2F4pBWcax%2FxDuAiEAkkVi56Z%2FhC3WeUZNcwMn49LrWJLY5dAtSozShOgXbdUq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDLw%2Bq5kk6IpLHh0JQyrcA6X0c7BygrmozyTohDYslNJ%2Ff4JcuGSks1DfOtv52TsUsVp4JIeyg4ahEFlXUwGq3UeypSuIPLBXyNiWkCbNA%2BV8gsIZ7tXa5l0Eqb5liJNtfQcOZvR%2BmMfSgvVe2eoUu6QjaMYx3yDfocSN6oCDMELl%2BdKvmxR1nWX1UIht56rf7vqNnnL42cxBvCZsFt09CeX7ekU5E46SNZwkiq9DxdtzVqFIOr62zI07c2eCLTHOuivYqUBCKD1WK71iKoBJFELkmzM5Qlsq5E1RzryBC7aiSvHB9%2F7oQM74Z7UeKj4FGMEwM7j5r%2FBY51kxaFisjkLPg82V3NmzYDK%2BnijtTIBoouUOjaIp%2FkSfWBswb0dYCa8jE6HnyEbyQjevDAFlR8L%2F4ao6RmyTk%2FHdYcWgBCVLMCJQHiVNkNIVNvBOe0wVMrD3tb4UEyOAWiiUb8tSa1fNMpq6X3eEuSN6OfXqX6YxE6%2F8TEcRwYC9ReDgY%2BMcd5yR0fC4UncTdyOeQAxsuhx52chRwGDlGA8Hijwt6PYZDkyziNf5gSxiBlOg46QCklWy%2FgJKa7IC11pN40bND4LO8EYuE4tqgMb475oW76f%2BFIr9RLLkfOhxsM8IjqBlvtnkt9IM4RDxfNb4MPjNp74GOqUBQbJVl3sSbfAedBudTFP0xaH9QxhiSACNO2mLASRnoS9JkMkHuGOSirsmmcAnQ9M9NaldfoybpXQOaGgKx8JLNTtvdwICYqYI7rp76ghVk3HLGyKfCfGkf08z96xUTV8FzU7Z41iBalQesZoxN%2BM6kSTfrZXxYZXqAx7eCR8GonzK26x5uZyUKK0kUsCM5lXne44cXyNKn2pmtQ3TK2MDNukl%2BxMI&X-Amz-Signature=ff5c831ef20e503323d0f65c5be88615fc825f4b8437bfc8f1461af88b7abc67&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
