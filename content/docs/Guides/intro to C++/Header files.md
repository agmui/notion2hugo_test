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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MTBGPVW%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T050906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQCYPtY4scfW5JD%2BTT7pDh9vvKeD6P9ZsHq%2B33Sob1s5QgIgRthGodZI3ZhOu%2Fvl5OpvhOqe3p0vb3ePmeN72iJlCKYqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPY5fGGK3BYhfIrHhCrcA6BztDjsP5YWOYt3Ubf%2BQfNiO%2BYcK4J5g8CdoxVbcaK4tnrVjSu%2BSv55%2BiY%2B0inPfmJQlXBhZiiWudj%2FDztRw4ClwEo56psoZcQDI5vbzkRWSr5OQ0dguB183u9sOjrNKSZtpKyGSFyTMqBtznYR80auD5zBpMWdXDpfP5MvnKueWeDRbDg72xwAnz5QGpxL%2FlA3yjIEWZmmmqvmLmLlfDQtEsvHHbyw1J1ae1RgODCxiLIUBx%2FhmzHuaLdh8AFsozioWl%2B5yYzmjvyxOrfaxAhGh%2FoPNG8kD45x6%2F3dxEb6uvz7zqJBx9F%2BH7f2VTu06WJ6uS%2BaRXVIBmQlaa42lSPZh0zNWO10zRmXv4oKq1Uy8kHW1duvnHgs137YLgC2QLyAOn%2FaQDc%2Bgx6G6lhWwJPtdsCWDLj9yDaMlBIYTNDEHtYXV%2Ba6abCAfriq8n0ccu%2F%2FWlqxrUbMvP6TpKBkhdE3oWbc%2BRz%2BCIHK6SRcYLX5GmdMWeP6VDypLM6eLret40uzBPKUDEyUX%2FwZfboRkjFx3jnG9txcWOzCs8vF%2F7Mrs%2FkGdGC%2FCoWR8J9emFwx2bF6fPy5uoDpAGgSYNflqxsdz2sn2yClFezW4aTZHpM%2F9BoQKAqLB%2FsKNYt0MIXcxsAGOqUB5Pz1hPD9xD8Z6Q%2BfenhtMMbVsg6d7rh6ij3nLhznBKFpUPtOZDEWg1rxQWj1lCTmdM8B%2FG8XbbOYKUWWDYfKvyyxyZQux8Sw6735L60AzLNzpZWwaLOLnqc6LsSP81EnMDAFpnMaI7O7iFHZS2SQrSPHZiehhPadMWzsHjdkF72bFgh1jp7nkb6uVOdDPeQdtB8JwNruwPRMZDXESb7cngnHAvrc&X-Amz-Signature=5da0993670e5ad77874b27b2e6fa25a44eb50f103bcbdec7c63ab8cf654e1548&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
