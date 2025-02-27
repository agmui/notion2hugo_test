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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EHBU7YI%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T181101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIA%2FCyUV1Q%2BbWJ5itanoMhUY%2F5nU5k9kXHiQMlZ2PeiDkAiEA%2FPd1vi1goJjRcwV4PX%2FnhGKbkvgSyj5L3ocPcm%2B8%2Ffcq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDMAGA4ehhXNMf6BGBircA88y4mho2Dv43DfMiEyUlGkP0jDpcGpLkhw%2BrzNLfVxE3hawjLswx%2FHef2UMaM8L3R3eW%2B8cEtANR5GIi89drAPHcKtmYWju94%2BlT2iUyE%2FR3TB5Aj%2F3%2FQkow%2FSO7xAFSPqjUGAzClAIz1fE6XNpUJYwFjPkoY77q6M72wtw0VUoirWQnqtUPwKOZVv2%2BXSVBRoHzYUInEF5sfowids0rXfqKIprydZnXBlPVdO3ay%2BNjDKmiK6OO9gZ9ktkhCStD0f2L8C%2ByAkNEIwfPKKXuCp0LwP9Dv%2FZBrBG1RivgzCSFmkRlbb%2FBbWX5wdl1i2ANWl3iISGJb5ZMXwsdgpu5MK0xSWQXE8JlZ788KZ3ot2s8Ny0TqKcTxEXg4B3xN3hkjzrnYKrUQ6scOylR95k3dzlFPbK%2FA7LZzkaJqoYWYNWS6Bp4MHAtXqcLOWH0j6Z1akCXZvMICcl6YoYlO1kwggg%2FmJ7dSbJv9lRgaQ8A7Fffl8d00Q9zymBa2ugEVzMfrOlplxhCh7FjOqMoJSvuNbbnA1pAehxGkU9c38bbxAEzdMNKV2kPW3o3rLS9byh14lMymWucWXhOw8GIPigveeSJVSh4vcKvCiyUr7x8i8RhCyUCry1%2F3Sg1jIwMLPSgr4GOqUB35aYsiN7CSYuFtSxXT54SootScrkJWrrAPSYrkUV4Fy7d3yorfF%2BFF%2FGLEDp3qgwtKRA5fo%2F5D8UzUQ3b3mCphKHsh1PaNxu%2FG0QgdJF2WUy42Ija3GVHU3MD9XzsPlAWGockeyNFFnX1GF3OTEe7kcpcH8M5PTiTevRXbZQEZa%2B6h54LMP5h05coAQo5%2Fm4xNjuCciIaA2I%2BMUKa7EgZoQ7jyUi&X-Amz-Signature=19ef014dc2eaeba7e4ea72bf229f57765dc967d937e75c66300d676f8571c341&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
