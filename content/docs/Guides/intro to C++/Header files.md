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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIVRAZR6%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T150700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAYrIgrAEBffJIuitepZkShhu%2FFBMeSlw6PCI0NrYvYYAiEAw5tCLX8H1RGByA%2BFmwdmCafr38UAh7AbqPZjcaf9mGwq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDMiKv3XxbTWtZgwEQircAwh2Dxw%2Bo5Bl4yuNB5DENYfNRO0Im13WEVw0EXJmbw3fITv%2FdyvU3uTIa79uvxKcNzgirYPLFy%2FycMFEnuh3Bv8X50KxGmdFhhtz%2BdAYCKcJ2ULat%2FcnJfUFmZctC1x3OVdNsuG7n8qDcN%2Fhi2dydhlbKFhOTJmwTCAv3ibh3ARZ9o8mPTx26l351%2BUm6hwC5Wltlp5zxioVpQS%2ByU%2Fp1RZDF8GU43dW%2FfMyXZahcAKOg8ruisQcrGDJTNpjcR9GJQJJEDltJNtrtVWz8s4NYzEZhBme7glRTEwwEjGUXNdlvFW6jDAs%2FyAsKqalhxFY7pIRao1G5lqyismCZ59U0dB6nwFUiPYRXCOaIocK1EPm%2F%2FVskN5oiBLuzfUl%2FNqz%2FZIZRHfWX3gkAVAU6rjBIcuLF%2FqdP9O0rpb7XabDuLas8In0jKW%2BDwQAjrEr9ekG50SCuLT1cDtc4Oew7s0Wgfp4626j6CAIr3kAVj5cSxASR3KLr3SCrn5s1iLwqCL7bRuCSMGCU5H6cQo90ObmuDkj7ZtwC22IVQAThjoy1t%2FfKjcKVWzFAWRHHjJ5mVlorpCHOgUYMl%2B%2B2j8S4wwefqlVKx03AS8hN84pw50Wl3htCPjsMCKXDk9BcXbsMN7ms8AGOqUBdbWW7zJc6dTRXT6kCGMDp9N0HHmA%2F3ocBCBq7Td0G8MzDH4Wbxl75vkYNuG7x443xZ5K6uraGTxzSZiCTh0kSWQPzH%2FauX6jRCS4r%2FRScW25uOEWao5floBc70wUZzHMbv0mu4qo9KdGcPYudh91hzSGGqAztI8j94qH%2FRfH71Ih8VEgh0G9Gx7RYxpYSWEqWCngPAPX8iJNJh%2BGA4lJKM5txc%2Fu&X-Amz-Signature=60e6bb9deba5ebf4614a4b792a61190a6e3dcec99d729d607b4a50f17b944778&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
