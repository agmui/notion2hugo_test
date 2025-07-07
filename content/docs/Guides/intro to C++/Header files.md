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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XROYUI4J%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T081422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQCQXcdug8Bir1snDMM00H2utkFur1VZ6C6wFeR7ZUoU5gIgXNXFP0hPzGxNvNQHNteYgjz1QCnL6jwN1rKVZJRsFKEq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDGygihKxlU7S6Rk2oircA2cYXQUXjQeCQgb55e2lYodQs5EwmSfQ8OcClgVBHT9FwE3iOY9xu%2Be6ESMZKKyPYBhbZhL1%2FVMFexmn5qYdrym5ZUmTesPM0gsXanpFBIyRGv4JQNNPEt1HK%2FLrTEAq%2FQBDHwymOXF3T3Xce9HK3KO5YN%2Fsz%2BqicXTDIAEFdXxmEXfesA48KXjqqv43c9VnA0N08uII4yaVdkvVwxNcRgXpE4ZTU0k%2BdCdGkMtXQ5kTpncx6rHeAfI0QXXWJG5uHHztc8sk9oLvGwesE8zR4yuto6trgNNce3%2FC5w2QZUd2h9WXN2X7BUPku18Puj5zqk%2BBu3jV%2B3voj00qnyGTzHW4DuWqSnA8q8n44HlcZtjhjzzl5qg0D9od3%2BII9IqNNHoorPIruSY0PQG0cGQkLvAD766hf7MdlLday8%2BQp%2F2lsUXznenFErAhMI2eKRJEvP875GXyJzUKt%2BxzrRAJZlekLzPsC4kwk5NA8HP8bQkGXkgfaGgGJimP3RfLsvP1s03hbrPtv%2F1DmFRva8bifY00qoP6npc9VSqUcax8aa0vil99vcQNfTlJHG8PhhPpgAnTvIdYJDvCcLAhn9YX0uqMzJ45Vx%2F%2B0UkjzdWJLt77YMAAxS7h4sZjYlTUMKK9rcMGOqUBO%2F5pNO9k2qAQbT3BNfWdCG5qenJUKAA6C%2FHZGtLQIZUCHkHHyoudvDzTroNJNvsxXe7D3fzKfOfj5zPvk%2FRK9PmLANZZh76HZYb6uB8sQZKbyJB514GueH%2BdGU93kA48Vux3wR5dG5iYC6sJd5X1A9ruQi9rnBsOKgW6Wlipxz9w72XlPTjXTh5rALEzG0FJlZZ1%2FRe3fSaRCINvkrjDxZMxwJn0&X-Amz-Signature=a5d64e05176bfba0145e4380cc46d34e9644fa4e5cfe7b0f7a4c224b0af57dfd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
