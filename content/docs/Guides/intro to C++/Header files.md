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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666WFSCUJ%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T161154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIF1FKb9MrsBOXfshxSLLVTGhLp4jvv5s2c2lxoV%2FKmN%2BAiEA1E06STnW3STD4207Al%2FqmnMJeNS5y%2F4OLA6gLcKw4WYq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDHwSG8wpNtcwBSVS0CrcA1VyrhrbczqqY1bV7oYLwsBfU9TQN3ReHytqz7uI1ms3oBaqIXUZJuFo9Y0yMq8mCIkXET%2FjIQun04zGYUADL1MPnhiuFkUy3WHSXLy34swNXqgyG0rGo8LPEQOM5OFL%2BWBayzIwbmTMnDWD0F%2BcPzj7XO4pb8foV3cOk1dtuO7iWdxOFT1P1P1e%2FzLlEXj3NIRuU%2BTnb%2BDX5EupyIO4JFwtBm2qfySw3lw3ZlHGxVUt%2BfHHPcI%2FO2wzQ7mfJfJc36EiGOE63gV28MZXrK87ILXWwtjxVCjTdv0v04kbeGXCd%2FSDBU%2BngD7ktuuUMUMROGugjbonlhcd901Q3IRgFd6P3ny5n1NM1myFhSn3BWVLh%2BxRmO%2FPtyeOrbX7gAOOcFXQ2spnjdz8Lhzc1BRhPGbuOj7fVh7PxTtMG3gzIRKvxomOK12xWuRTNmQMlllhbArml1f5mro1dOPOuivvddTsK1I6qpXRvzVxp5IiWUoyXHgpuF8ypDueQOyG2Hh3AuiiK5B9kAoK4Ko%2FhJGdXMPeD6pmX89EWaEBSZd5nPon%2Bt9uGqTkiQsbwM%2F9GWbKQM8Yva6u3SmAiGtmp3IPSrSIwkUSaG%2BEJblZx3rYHOlV8VmMOoo15%2BBYl6vOML%2Bg%2FMEGOqUBIvKUy54HM7wDXycHreAV3T5wGgZmTotKs5I%2BAcJQxK26V9NnJ3gDzokgbnO2HqPsSae%2FH08TVYYo%2Fps9HUzNglaVaeEnC0tjcE0qPdeyV231Wl7GffrXh9vV02gM%2BFeXYj3UCmYxX4sgfCdYpdl2B%2BejojDqQ1rPfCn6odmrtV%2FECDjlrE1zr81JBGEB%2BFtdPhUM9%2F%2FbC%2Ff58omJ8eHaWhMUUBjI&X-Amz-Signature=0e7d8caa37f198d4a8cc3944038b808a542f37fd0d83f45a05e95e9956ef8302&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
