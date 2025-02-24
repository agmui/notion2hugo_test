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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MJYHV3N%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T150851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGgs3OS1XcODrpF9MPR9D07xMboaubs%2Bn3yqkD0jm3Z4AiEA%2FMtgwJaLKWCvsu4%2F0zbHmmpBwMhdqCOqwv2BX8lk2IYq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDIJl6MdK6eyglxovnSrcA7ZHWGG4oUGbfs7bQZ3cK%2BqgXb%2Bk2TQPRrcH7fbHAI0mjTUSz5bDQ5UNVomLz3EqumQIBdmfnT1241vxIbeW9pPCUYLR79xWbOCs%2Bk4ywPxKYUpB8bhjfm%2FnQ75e1rq8shFPKNwj7s3N29XLPlfin2NKklRsZZAI0e3OgOM%2BFo8QEOzghjupGfk9FJzwRpLKaiwAOT3rkyQq85%2B6paTXu7lR9ddIMJMAmr%2FH4zqMj9fO07%2B4SPudmyN3yGsIJ2d%2FUzKkWrcyP3ryar2JFS%2FW%2FLy6biJyKHHVvhNj8uN6ONGbiBGnlhNYLcj23kM4x86MpafUqMbwJD6N1QSNmI2L9QgP4ketI2KVdbK%2B3d3OhzxiD4Z44dmiUL%2Fc8n0gmk7I%2F%2By8prkzqSB4904qYO79%2BbwxWykBBm%2FAfxVJp127SdMI1jMnFs5b%2F0%2B1VTeu4dL0mmBdPQAcYeq4VDqkzbf4mJGjyLLvt%2FTYtuIlRXyph%2BJqTbJO42rKu3UrY8S2YR3KhUQiXTVhNVzBR%2F72NNPEm1oZvczRNijbpJ%2Flm59nB5NAPQPL6vWwgojlwJut7h2fnepa%2BhNXWzqnZB7MKK%2BE0V13BXFG9qJEqMfI1KZtCGLWc1g1gtyVUmQfMDtKMMX98b0GOqUBjm1Xq%2Fs0Rw270dv%2BzHyX%2Br6v7AQE7xOMk6GKOM6K6V3wo6EyC%2BCKy2adPnlJflNQFDkjKqccF9%2BvRiWZrpDyUAkJ3%2FFXSUlpkdOfRal1gKKek9%2FJIC2ca%2BTHJuJc0fbtOyFIp3KoXlCcEwTDHeZ7i%2FxSY8twaUNOVdCJyTGGP7IRCeSJopUql%2BrbrhtUn8SAlu8h5ejNfnqqJLuI8BBIUr6nfhx%2B&X-Amz-Signature=1a6b48a687c5a74e3b4757d6d28bd49484c1527aef8259bdf58ac143c8ed3d10&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
