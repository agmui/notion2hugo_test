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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQZL2YEY%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T190248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcAABPEpYb5SzHk4HmR1UHUnjmFbY3O0iLLqAtKpy9dwIhAPVU95lmbKhMieyVBS9wcsJ0FSn%2Fxm4d2jmsko4BchvrKogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwcYwu60qs4KRQV0RQq3ANXdSZimqpC826niGV%2BN05KIKpd4HSf086g5J49i8qzMsw20gJGq80qFllLXjg%2ByzPqnXHQX%2B7vgPfNl9LyK7QzIB5tHBy5c%2BwhQX6KWdZsIsqX9Rj3Kucsla5fHVAN74U0o1ksFC20fBVDJ7%2BnOSIUwWkshJwzsaiTIYaOSiXp7FgXEfh1601oZEJbk2xa3B2hGiEat0Wj6NcaPjlPQPov2fZkGgyIJ1wqWHOe9e3eEzBtZu0PLV8Jl7I5ft%2BKmfHv%2BMuSWPD0KBjswJsiT1Y6v%2BuhQmeyIKWOt4cvBIXpcvfXiXDG4fWg1FDnue4tguHPeCdYI7VQu1ys5P%2FIi7pLe0fxHx%2F%2FNV%2BK5RnTZ61hlB4tTq0WvXT4nk6fyH6J%2Fz2tZKs1Zk%2BlQ2GcB0LKkLDt6MzYg0%2B5U4LL7EXf2U%2FXMj1n3OagOUq1Zrx3%2BZrtJs3OCDoRz5eLTxvBfPS5lf1NJUgkfYNRhAxayTaCymabZ8XvxlRwr7trdo%2BPe6UOmXylEGEvU7Ww0DoXEKrP83pzy8UpUstuvJtKu2FHnsKPHoLRV7ad%2FNuiaqJq3VXnnKBLzax2b1ZuhFHjNtPwQKiu0Gyq%2BKqK3mbXlwDh59pVzCrjhMXYpqrKZwhOnzCd1cy%2BBjqkARs7t7Zz5GHjn0zl8Yuqm1UrrzH7s5L9tBiZY5REruRAIZopmv3t8Gi22W%2FuiVbiICSxRIL7RT3PoZ8Ma%2B6S3s0gDDHDyfxGqrm%2Bg3qVoiDvySSn1yvY2BnfwCSaJCxZbEKGlQXQdwR9SLxIQsIm72sVzIUZqqc02oGJFrAQ0f6sR0c02J%2Bh55DGAiTQON971JXAsPCQlYsbu7idPjvtc9GeP1iF&X-Amz-Signature=1817e090661675666d2f1f79747af04a9ea277380474e7c3d89fcb70afba96c6&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
