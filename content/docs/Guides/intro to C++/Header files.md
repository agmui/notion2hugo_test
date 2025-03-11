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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USFZHOWY%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T200843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIFWwf0M4N6GHk5CbCF%2BW3h8gUQmK1%2FBKxY72jwyWaoSfAiBJQ9rypjTfm7%2BVkcSStuWaTBfTRP5hNEgLKW9rylo5ACqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiNFaFS4TFPGaf51BKtwD0KXwmAMFIVqbt6nIYAoAPmKXd2%2Br7XX8gTovQoEK5AEga5MB1o13tfhxkrAc2Fmdpg9JYbkfLRHaz%2FUblmovsHhPNF0ZVssVw2INSON%2BOh2VllBX%2B2SJRqW2Ri5aspQMSQurUwfZDlCAY%2F1UFt9TflruuV4ScB4JyQJ1%2FOpf5Jb%2BtsjyAhCmT%2Bp9iAuzOXpmF7qnbpx3rHtdp035Jk%2B9ZvmGIwuUKCsNV80C1kugF6L8Guc7vpdEjAHquJrJkvK%2BS6YAEjZzJMipM%2FSvhjSPgsYmZP5nsUsstO02OZLslbWcpVx1Fu6imiSQdL5DXgr%2FsNwkXlWrxxkHzfffsb3GkwbQRs5aNTXIB9HQbrN28hyFUmU0070yvmf6tFSCZf1vK%2BL1u6dfM6L3QBzodBRZl%2Bm3aDi%2BhSv5Xpc6psdHNLOgPuiYd3WHiFcSiHcVyUL4Q0Mukp%2Fb1vSerwvbkhSa0nBSwUTTL1FclJWKo8aKSTizDNSHo3o%2FEb%2BOnuhnzJQBuhTqJglv00DXWs5UOupCmV%2BmXS2rfAqsdLrUeYHrp2TEc11V5Dg3XtuGZxiIcQ81tboCkEU1SdO1lA3A2qtOpbktHcitEZvPDTRNSoYT1WMQEAeEQ%2BOrjP2YXZAw85DCvgY6pgE9dqDQ5fPtvAyxS3E%2FnHBFIciR8otTmnQNAWTPYEwdkgZtUpdNyo%2FgyYb%2Bgd97dKl4NQg5wxVtlUusNAqMxWWJO7aMYn%2B9eEIBbj3axXmhpYhcYJ6TgO%2F1e%2FI1m7PiRIPU3jqrsHwSe8yOpdG0jUCYMujCatWMVyRgg%2B4aWLeH7P0F%2F%2BhJJ6vEVE2KxD1vwf4FPohhODbDkrIvwkGLFc%2BOJ1H6hYZV&X-Amz-Signature=c44a1addc81f57a1729e57b5df46f2473cc2cfa371ec8273efe31b3a1c5f6ede&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
