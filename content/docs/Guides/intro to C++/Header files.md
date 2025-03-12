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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSYVW4MN%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T150850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQCvkr7kahL2WZFqBWXX5bVh0ID9CDFZe5LEaI4466%2B3AgIgWvdEmNAADcYFAnYKiqMhwmDlTH76N9r7pezO3o4mdDUqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEsD0bRx8nUgsb%2BnjyrcA1w1UpCbv5%2BzGui%2B60aKENT%2BbC%2FcnbkqZvu0QewkHZ67TXiDhdhIShRZLy72G6r%2FyawZ8g%2FpxQstPpHJPnoxWEFIoRBp%2B0veL26cM6CHqM7TGwPp%2Fj56bLUckmlRyscMBS5em08MAvYCmOSd2bvbr1udJJfA3sN5ByDZp2dUXVaqqOAW9vtDbujHtMWN%2BgkkkjIFJJfvHlU42PbIHGqHwEgrYQTjJI9GRfp52bG7OvvNr8EvnlX5UwZez24UZFQvoeDo3JBpecl43BeiphZAatyaILHUcIRjSdwODzU2cNMACYYuNCRRjnEzrdUSv2sqIFqVYr%2FejWTYoiR1nSMrnyRhFFRMi5YeYVhJYDHqiDssjUSD6N66bU1estBBUM0aVY35%2BnlcNiw0uHt9sWv5umUV04qj%2BnDDgELcRI%2FSPwQhD0EUMOEAK5DkIuj8ljG1oEfBEO6bsxleMSUzUERcx9WxySaNKf788wnple2hMr7z253nQD7IXuOPNTLIHNWR25U%2BG5eS%2Bl8TkD4Wb9B4MkBXBT6O1FVlPIv%2FUnAA6f3fmfLqN2uKes9o4ZWIUnx5xLu7loFEDHctLquKTNqIez9tVwJzUTSckeC8CvUR4iilIoUrXFBtzLGagv6cMJ%2B%2Fxr4GOqUBHjktMc%2B9ECR%2F0JJuuECc9OEoS4Fs%2FvI%2Fzli0vNgFpx9HHwJWWUoFa1%2B%2F4rxG1E%2BH9KPyaE2I1JTwKvqsDDwSlxp1wjL1918Nrtw6fQOMORHQYnKt8IyEz6Os%2B24HxW6eynT%2BR0aj%2BdmxzfjFSKuzFheeztEPoup02adn%2FeoonOktkYTNlhsVQTbwolUYgZX8%2FR1CdEmhu7hNsYahbu5qrMkW9RJ1&X-Amz-Signature=2ba080ec6481c96b29c87acc553765a9022c4df12145e247c788ea7ba81c70e6&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
