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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6JHB6LN%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T170732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFMR9XFmzqSVySNX4hixg42xM7pF6fYrI5cYxSoPKg0fAiBl6DOrDfSwu4jk31zFnbtpHO31SLtxkXiPEUL61zEHhSr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIM3C1hv3cCaumcK%2F0AKtwDFlTtkUTfIZDiqe94VtP%2BLVZmQkwsk0vhVcNxNi9AbnGPxpfL7%2F1H9%2BCMyzm64UQJbOYg2z3VGlgIgAeNMqVKai%2FzWsMWdHC6lph5LB78qN%2BrkrWV%2Btaflwh7aW43bAZkC%2FquvDVAWMY26ASUtRDvSyS9vKzhdO6NKtUOTU7uC6YqpDO6RZ%2BmyKdXDzHEPmh8ZK%2F43l2MidJ6p0ee8gf0Ve6GkL3A764LzfoOdELoOboAD4iMkjDW2tSoJjCki8gGg9dDd1hLVUFe0MlqlburVEyrk3%2FwoFF%2BYh5TNIXObWPsKy008kRur5DrVY6OU3EOfHR5DkEhcpfUAY57a11QSdAi6K%2BIXK9BY9ar5pf03utrGAYfG33x%2BPmfLKC4vHHnBMHJErBpKJjGza6cMY4motgUABF%2BK1P0nP2ZEunOFQe0DVPjjFZYtcxVG9PkJVWs3ainoouqYJqK5zCcUSYqcKRBAjoC9oZZrp8j%2FZ9uaCer1n9DhiXleJZ2Cv1fcp5ATRcDiUvWusTwms5s7t2c5tkiOnImbyydYOML%2BgKy%2F%2BH%2F1lL6uWPFEIcUwNDN1LekZHSYg%2FqKE16BFhPQ%2B3A13WDjoDlMGzSsIEUJdEJUW9pST6jNOdZRTJeqcdYwvPmJwAY6pgGS9m0FMKE7JXyQSl%2FSZXAF1u7iwbOcdeN20QnqyUS0Je2HL%2BZXZLNx3vY9015WMSfBoJQJpoAGOGKmqId9Xl9ghxYlMP3XBZLzF5oG2uMiBLMoRBeBMhKl4GsLkqNHyzSs8p03Pzgo1KpuDxmc18EY%2F%2BO8xlE6NUYMPlfhYQ8XTl5RXqNfx0HHZZ7mBotkqJRzeqxSBWuY1tvCi7hdH63K55eeYJEM&X-Amz-Signature=e0701ad0317880f27a74fe573b7856bf4a62fa5be195feca7cc23fb87661c9e5&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
