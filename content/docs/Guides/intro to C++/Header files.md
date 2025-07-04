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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665M4ZMOTG%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T100944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCID93e93pHlKmeY8ZlLFQyTM6k4%2FiKdc%2FbZABBiMWjG3JAiB3DbxRwTyEloq%2F9Bp3HYokTQQkSEZ1YpdhFwbG%2BW7Y%2BCr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIM6v76L%2B6HH7Fjg4ETKtwDDm525JKM0W1X2aoXHfBPHOrfhCmFeTmyChT2AzjNEaVh4xlb8qA1WZvGW6kERRFmEB4DIadYGQzpcpQSL2SbsTJDdnVXNBromjn2ZIy51RFHvYNrQdQGQsUOWuAJCo9xIW76IoCh34LEKiPkeC1E6Fggx2GcEsmRSAGkrWWEmB07VV%2FZdzw3yX%2F6msNDHJY0%2BeaGTdEAu6YfW7opCZp0RaN0Q0AHU8tTKj3K8B6MjM9cMsnfcfSIdBchTBy5Oq4fsEV1B0aLcBn1JmBLMsOGbDsEvIDmrOSGVBasrwD4udbRBVP%2By%2BFw83DspekceFyOYyePdIMh3lC7HOWV%2FRIoD5UQjKxI63uHR%2FdX1e2tN7ApDscKaSlOtF7sUz7z95aom51Bl%2FDA7xOBuQwt3kS72eJOGIhEststeTI9AmGAIvp5ectWI2%2BL4LWp7gCibmfg8Xi7%2FTmv09dubEYeWTM%2FCnhyM93714ljmlCSXSZuFkfsnnUAxCwjFCCewxHYZWlNzJGHZ%2FvPtI2axjliOY4VidmRLHm%2ByXifrWo8irIbPqrU5NjYIUvdhGncDynFMt9tk8yvBllHhHLtz0XVurc5ody2vxe8IQjKQtp2aCqldYKvtRbYboihVEtCHE8wi76ewwY6pgEExjLc2oJGj18GTnOZuWTEn7Yk3xZpBK%2BSq3CNTunsTVSTZmQiwwGB%2FQ%2BBt8SGz9HNGmu%2BuIr6cFVJZmdx%2F6JqieUVlaFd9dqlEhAOQ%2BKENyG6NWvWn5qPRD9%2BC5dGTGi6gXy7hYrWU3gAEYk%2BDPNk40t4hHRSnZIZ0cxKw4BXd3Jcijs3ZymbpfZbMNz68uhQ4CWGRrqfZxLOxqZ60v3za2nWBWE9&X-Amz-Signature=a220d3043e624982fad03c02ff89fa3f00e05298d96410649724dfcadac9a8e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
