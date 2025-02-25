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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TGPQBMI%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T170809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQCpvVRKPqLg%2FPGHt5vIve%2Benn2EReVFLMscUk2c%2F5Hx4wIgUVUz47TBsAfBG2KpYNMxwzDMrprShLZD471rjF%2BuC1Mq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDLO3rvR9hwqDNDm3TircA827ve2tlpQda9ZxAIBPCJn833CuNHR3FTQuoOaGA0nA8EdokvlQ9kBPuHY5dD1tUtDfApb%2BqtyEmved%2B%2BUU4IHPXFOQzReHevZXI%2FM4KntdZWHqcmCRTORfngfIIqQQzvW%2F6SIqLZueX51b6nBX5KYVm7So%2BBlDV8yw9McWoFSipxt0KO2GLo5Tb3yodI4ibWzORJFSeI53g%2Fo0KtyGJkaFoZxy8w78HuiikZCwTnEnuBcBcKIuoGUyr7rNmG2UdKXPRhZ7wZKfvm%2BOhcPBxy1YzixTeLqrrqvSyniMnHzD7%2BWUEWpF7b9UJsAOvCpxwdFO8Nael6tI8927CgToLBfX4gkaMy5iI0bm7wMpshRq0ouyYS6c1ae6GHGY0qR%2FaBWnvjoLP1huSoq%2FEJ58UMSZ5b5O8QCGRGj0IuFrcfKYb5Mp9xTy9rixhfnVl3KE87uHxnKc8Zjql6mZa7WNQqKH7fp%2FpaetIQxz3IKCdsiNZbOOFVeM0hoTo0TQR4sbQfEcaUWSQQQdS%2Fpljnh63lEkJx7wLie9cHtZO8eSQsIUHv0B1BbWHB0QqBvQQDNV8Lzl2gZ%2B2rQBfDKDm5Gcnv5rdC1clbTq589bBU73moeDpb%2FnYzQbtFk06FRVMMnu970GOqUB96Ppt5vsY1BV8WE8bXQ%2BGJ3cGph8giHDyjrDouPeb9J7iuaHKDfs3j805NvZLXgkeQThijwn1C6kAloWWxQczXzvepLnNoO9SObpuhyVkryA37mhq18YVk%2BTPAyLvysubw%2FUk8QxxngZ79FduYgkIRttVlXBReCx4A%2FVt3UMfkGbBJPAyXTPgHWNSuZorMXrJG9773Id4VBh5wxHeMn6iacQ15UR&X-Amz-Signature=c672f95a8c7f62fd573437f4f013defbcc3a3f3864cf00fc35c2f902c57d07f7&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
