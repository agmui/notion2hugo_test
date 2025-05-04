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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JHE5KQA%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T210725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIDdn%2BVI6f8EiWYiyw8lTg5aGpTkhD2scEHnbq9jxNCk9AiEAhKcvQb0MonIN3XPHAUys5wW8AfjjsM3A3oHvyreTRzcq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDKYytUbvQHe5XwIwbircA9E6v1ZWwtsxublv1Em5bT1JZDfGMsZCmGub0GoKpNX4njg2Oxt6YzT04a6%2F2SOdWwJe9tDL60yMdGEz8Ch3U5xAFSWULPBvRA5owmYaL2zewJQQkZHQzlPu7Xq8p18Y2YjExElpi2E8FW55DT1a9uylq%2Fa1Edl71BfQjTrhJ3WmlTIqlcMoKX%2FL6Fsl0GJIwvBKCh1pTEovW%2Bo2mw5Pse%2FXuHLlubKw3CfBJF5UviXL6mXrAiTSFX1Tv%2BdZyW7vesGbZlwE%2FRos2PRwMQK7RJlBuakaDSaw31KqSJH2mFqhLGzyGdLcJbmymEJwywTELUQt0smbBoDhnBTVyOgiJ%2B8mrAeo4K14XXRwNBE8ZagTJyWx9gtAYuulR77nTRVaK33Ks8DSXvy0pvMX4BEWAisvnHSUqbdapyXPtGnLpw4S9tj%2FAQ2db%2F%2BZfgDYmRSQQcjhxwpQxuwknWCqZ8fe%2F1S%2BXXND7n1wAkCKZxlji1lhKZYO8VneSgyXF53KYWiFDs%2FB2kVLhm9ahDepOsl7xZScTCroxnsr4Kh9sm4IAwbko6J6b2OgXVhkLJHZ3i63dJqLdVa%2BcNs98niwJWQyGKlRK14QpXqp4Ko9EECFCoznArPgBPLrtBCr8euHMLWs38AGOqUBE54UWMD1%2F46qjuo3oRaNr8fVDRXQX4qAgUvgvgQY3fu%2FT2ji8LHqv6dN3wP1edyu198TR05bJnfWIBNnW04atColtt8KC3Mc4LK5oktRDMiR9NuRP6YPULvLT1%2FpXR6R1bvQUSs1EjEI6XOoy4STcvniw3fwmjrZrjlMpxYmdWTp4MLW3ujQLZDEvaM6ZJPHbpN2Yn9icObw5M5k2OKoru4Aqrql&X-Amz-Signature=a89d9f21e61f1ad856bad698c4ef2919287a4d1e578dcefef426013318d3d7b3&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
