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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6XCJDTP%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T040940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDc7ykXwkTMstxvFl1St%2FzumuF3E2JiLxWqZjTwmE%2Fw1AIhAM4bF9t2pSlkNULqHS3DvUp1oN0QSCHh%2BRx2aopRQbwQKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw5lIp3bOFn6Bz2FJ0q3AP3rSghlOIkR3bES0vZ3ZCbGZpaoOC3VBDSY5Hqp746mluyZOHgsOcO0XN5X6p9iVuARQBlaf5RTJoq%2BBYvDE15y4jUPR24bPlzYcdNwNeQhhADcFGNcoLt7PZ4PJoTg4I4NseZ%2FbWdMkz8HHWTjry5wBgVppUJptAUouylb0swBvkvK%2FDBeGcwRyVtunMNp7L9l%2BfwbDwKsckzfsY7VOvXsDoHPts5D0a8ynA4u%2Bbm9LrcbdSVlVVDLxjRKKAxh3eLc%2F%2BdMjrxlQFmUfKBE2BOPoYjq%2FRZUo5B91zP3q1y4K3IX%2FBy49R7peJENyNTNqqZM6t5ja%2FhF2Ao9AiLIn6p9UXxr6rAeDxjRQP3POoFszJW6qdWMXahAattUnHx0tQ9Pnp3BE5a4ukOD3%2BNWU%2B2fu1%2FYgohAbkuXRPc17rL7UeOY4V4QoEmaCTVuAr1gdgkUqSlAIo70UGoBztP%2BpMSLQ7DZ7snjXCFjds6VrFLwUhUi8csScZbxmjeDXAEXV%2BPw%2FMi45XH4%2BVOfD4pqfV4lPGU49Rgn24qGPXP7qYP3yap2CT5EH0RvaR%2BJ0kYBrdZiRdmvAoAL%2B0s2fIxzYVS%2B75jeSlELVMlcPgR3UcdFOHm1FGfkH27x0cT6zDjwYC9BjqkAf73ZfwUVxnspMhekUYpg1BwRsuUKGVSr9O3bk2Rl9yrBDN7KxD8wFkJcafzhAdfyTAm6pMVta6qPV1YTLOoj1J802UA2S5gCOcckL5G%2BtHQ5RcMPF6oQFAv7VNxVtb%2FtlvS6appq2XE%2FhBacR6ajV%2BZdkYOklGXqqZc9Zk9Dh9c9Rr23Hd9EmEO2xhk3Uw%2FT38bDMNBt4q2lteOB4dkECStu4qQ&X-Amz-Signature=45067f6df45eac4051fc536fff358231f6abcb7bbfabc80cff91a5fe629d8ebe&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
