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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XP3S64C%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T041004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIA9Sw3cgPblvZZCahXXVH9p1GN4yqc7HmU8ScoXz0i0EAiEAqfMzNZcogX3wD87%2BUStC6ZP3BLNXjC%2FgKIRaa28nlTEq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDLNGuDXyg3Ii9lx3oircA5GBwNf78zCB2o6y%2F%2BxWVT8ZfbO%2FnDMDqR3NGfsxF7xi%2FQJSUfcZGS%2BFK%2F7IAaanp%2B0L%2BKPTQtu14mozB6kLE9tgB37bQfo0cs%2BSVOQR5Ezo3eC6zSJ6v8uBvCJS6Nh2SsXcGodvSIytLLy6Yz7s1Ogz%2Bn0m%2BAhhM9FGQbLB1IXEOSov5Po0pk%2FC%2FVv2JtMzqv2UbZjoRC%2FPORMwkrUHQMG6t3tLR4MFTrf5vudGyoU%2FvSFGc4cA3OrSK3eDEHmq1BrTtyOLNfeW08yO4bWchrQqgZ04rZTMEhv7fhhNX2oastHjVo97Dua9GLMhRGHqI2caMdmGCr2TaCo3kfrqlwKQ7SodUGtuqHyzTCin6BlQ1vDYYL4IdqBbIvxqdAbV4XvowKEIahv1wmprvGd%2F7OBhkRGTi75alBvjQFfpso3mb4vKvkrfcZEXzl5dtZLTZxVrKagslVpFYyNVq4n1F4YlXb%2BtaoOCLDEF%2FqagALm%2B7nU6JFeMOxJoiJbNgYDK3v9P4jDHm6lQnwGI%2BWbMUi3i6ZX1JiU%2F7prj74beOV4BxEazeMXHTjJWpnx1RpX78AqFlGpdM%2FDSGBrw%2FlZ40CGxzk8RiY%2FztQqEtaEyzAsDmsh00osLTPMizWOhMI%2By%2F70GOqUBXXcLElzjMjX7n7u09EDPSen2VCQShs6JIzbHk0fs4Noqmtc3zPP4vvCZxPq3teWbIMv%2B9K02x%2BT3fQ1%2F72ppouOf8szNwFglFUNERADOR8Bbh%2FZ1pAPVptZ0HiRgd%2BLGiTPoZ4Ef1Zu5jmN%2F4zyL7xN5GgSpTYOEoj%2BfiynbpArpdR9JB2N4mhSvGVnDUl48lmfR0r4juqzHYrVB52llqpV6rVjd&X-Amz-Signature=e7328f870f9b8a41e0985fbb035e4bdd133cc2fc8fc7737228e38407092a0426&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
