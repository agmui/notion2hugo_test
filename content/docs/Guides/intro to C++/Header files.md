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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCIMDTYQ%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T230856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICwkZV0ZxYS%2FqndU1yR%2BEjhpK9mweVmpwBAC5wt5zHupAiACPaxjzeXbU8u%2B%2BNR45TQRz5WvvPWrHorxvYmGuVGc%2ByqIBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgmOhQ2aewyg47hEGKtwDtb5pykUeQjmFTem22QfUuiRZgLLGrIbZAROUx0M3u2yN3bseePBZyN7NVibRK77EZmevAiGs2ebmNrEyw%2BGWsZnqBucUdxzYNM6XmwyhAL2ay0WZs21qsaWVW8ZJntvEVl6BQR%2FydfpUaonVsiw91V2XakVCdP5OPt7FJB%2BLMdaU7cus%2F7omXcm%2FFX0XQieujna%2FaWe0615ge%2BK1%2B7rpODgjySTvxr1nK2mUfrXEy29EOHv6J338dd8d5Xu7YBKiDmPzUHxQ1SD6iGfsQAzAWTza9gcN7Qa98TVYhoSzYIWbuJjHR%2ByOnBgKF2o7QKbAvhWSiwt2L4BiZ1wcD9DP0aVqD5mvar7lXwRUIkHL%2B5Q1xepy5JJMNLh82H%2BPdZ0wVF6vgGwW78AW2hWeJwQTnPI75HNcMjj3fVC%2BufOj7XmnmBlAofYT3%2BpGZdf3w270Nf4eN5WPAuDCBL7%2FRmn1wQOOaZyx11KM8F5Q%2BwrBL34mj30Jk6ruBez%2BHkWfbkMK6WHu5I%2BfpAhtaRNjiL%2Fer0IsDpCNCoZP6q5u0DPsdZtpH9QWu0luzrnrJXbMfODlNhC0R%2BXLc%2FYaN4457mzUOzdlHkNUIIbmnHNdNk8fm8xQPiFkAspP2ncr2HswmL2WwwY6pgGVED3HVZcK75SEJL45FYXMv88QCO3BQBR3yvCUqz377rqSEqIYSNjiNQRgrRdq%2BQfYCv5d0IdAVQp3tv54UdlNDC7lPooZ0F3L3IHFzI1drC%2FjvF%2BA8F7sZCQyIBnNgfO7%2BTXiBhQVkUZRxoNe%2FC8MlJWvB1gjfkTsoOzy9xhoq%2Brq9qslz0TM46JR0oUFxwFUefuaJ4vKHLvc%2BnqAKuxlsF7bq2OV&X-Amz-Signature=9aac86acdce2e3970fc7398e32e6837b7e9ebc0322ac29c3be92c90d909a1697&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
