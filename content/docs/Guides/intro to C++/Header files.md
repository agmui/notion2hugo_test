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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SY7XPROL%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T170159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDULq6SLZs2XXHJKh5sjontKRlVjdLhh00%2Ftwrx8XhKAgIhANJgEeBVuocvtkhLr6yEcaKBPlJSn%2BCzOE9sNfVA59nAKv8DCDEQABoMNjM3NDIzMTgzODA1IgzWuWD8%2BaJjRZDhVZEq3ANF9VrGL7eaO1j%2Bb09tUzDX36%2B%2BXJdokgQ%2B6%2BMPhMB3tLmHucxA4RUq16MyUti1RNuGjAAV6a9NgIMTnSIt9gghim3WwIiS91yzVQuez5VpZPhWMkZTflYndpf%2B1iNolpAAPM%2FZkPeAVqm2KQu%2F17riK3HFrjexZgjjAQFXNhocyAWTE9oQO2pEJbe4BpFdXFXflrGF7tYxbeZQucmzVt6crLaAS7eFi2YueFFNoa%2F3qtzJZyRBg8BOUg6knViL3GUPyqcUvf%2BGc3Yd%2FzwgrV6Tm4o5DhnQmXShXPKPX%2BFn5sMkZ%2FLDtc62MQULZr1pUG%2FoBWVMQ2fFJhnYkyFH6h3CE9u%2FEIkDn09XvQaKMNLepEroKQ6I0SDlBkFc%2B0qPYOKW%2FOGwHmYykb85KuqDrZKOs3CQGozETy6cI7YQdigFSnV0rPwY3kAbSh7HvBUxGOg8aerGQMbpbca30d3U%2B6xLCzc8fqn7xgHmwEs5gT0sh1RP5ZBm7PNA0sGiq9Jl2ULgzzVzIKiplQ4dcEKD1PKs22c7YJmhio8ezvfv3Go2g6eRLkvSYPyO0IKLlfNZTcM%2FEI0uYA3jq%2FKQQSWc%2FIntZMKwwiwYZkic1V6pwtULuWLH1rIhlXDeZOl80jDio8W%2FBjqkAbOxnndzbeO%2BIebOwtKcMi9bZRdCHcG8wzHmr%2Far868iqIT3tuXydSLYBWxeRQQ1filwKaASoIbwpu1jJTbf%2BNP8JRJYVNfJ1GRtvZL1rTKYXFaFnF%2BRY9Sn5pOgeuzFrF8vYyxxdYaKKAGRKCYU7Wjna4zVYpi3RDHpd73nGKtKh5NalQ6dNJrRO1AG9Zknl5VOA1vcjh8Wx981ICVmMt3lvQje&X-Amz-Signature=23ee3380f5ceb2b27be6b2db77e1bcccc2b28dfd7efd158aa808b1776de84494&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
