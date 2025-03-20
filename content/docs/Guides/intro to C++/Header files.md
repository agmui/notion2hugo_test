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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UU7PYYVJ%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T140817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCICC6KXikMtThsGgs%2F5JM0f%2F5Wdmkf5%2BKtPP%2FuzmJmN97AiEAkh%2BUJiA6pJMpSlwqjp%2BSKCWiWrN71pjqIdVxmP4IjGYqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFcwk70odAXak4QLxCrcA0lpoKTIGsBXJ5s%2FaB2W0vMcb7XMfYLUtJ8aBDNiZdWa2QkhHvIHr2MRaq9q57Hs8DaSxe4vlRYlWgXTnMiU5HJEuLzcqYy0e0WEpt0kG3lLaQJ4%2BI9IlNUIIKrrWD9UgYRMHjtVkUOB9j%2FL4%2B5Rb6dUQzpa86hD4xTOv7uJ9JrTfuJDAh1o5MgJ2VDZvyu23XnRX6e%2Fb3W8N9M48Z1i5hXYQpHeZoNaISkorCzw3dL8H%2BSF6i9aaEcBoMVGkuiDUSb8NPaNTWJD6hNoZiNDpoGoy0BfhMWIWaFr3FG3txYIBglQ6Tgy8d667T2LTg3ILgfXaNKI3GbYNdreXUpc%2B2Dln8fuNy%2FP1s1fFNCOU7q%2FJAlNqswRUAdsrUyWhGhwOSdvadDn%2BRZc8AQat8geoI9btcGk828UOGwcUMz%2B9TgEBYMwcMUqRQzmbngMsyXPqL7bc48gsqnT7X%2BLECII9pCNm1ZQh8CduvE9YUH8MxroFerYec26kxPIo33Yx5VcgtbIXCELCrScTE%2FJtwZOQY0S%2FvT6izV5%2FKek2ylRrAwDOgvZlEYDaBhhLhPOVIPqRBCnLe7A%2FAese%2Fclwybp9Odk3NY0gM9isZAaSre3G4yK2yo1dsBJjGvrneJ4MJum8L4GOqUBYTWEC0DYOh8ZAvWbN9QW%2FW3dkx8kYQ1Pi2Ms1vvYarSgH6QXmL6573XgZT9Cs%2F%2BMZyybm3Vf%2FC9SZ0vYA%2F7EBRTILeTwPqBRq93cfsGN%2B%2F6nrIA84wZScTyV463ugVCS2f7xBtEJnw1Pq3nU0CQZU62JBwVjtG1xzGmY0JTZF4lv1Vk4g4bPpCwILeD18dQY21Ioazy52WK8t6dRA18JzChhqMVd&X-Amz-Signature=ac0d4187638a8ed82f738c6e41977919a978de89aac55af66294076c63b60c25&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
