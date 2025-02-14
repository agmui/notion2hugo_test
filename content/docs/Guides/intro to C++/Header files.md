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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7W2QTUP%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T121334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIA623DplqlWAgh9iRxgb8EvoefjeDqX6eQM8wxwU1GbQAiEAmkSQ0X8sP71XRQa3nEevx3B765Qg1DiM7URDTRv%2FCXAq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDAl5fqmZYSIYmahTNyrcAyyXVRJOVW2tLe8%2FTMW%2FS3xgde3lL8d%2FtKEqMGRW4hFipakhQ%2BYXR9rNhZfiWpsIvlN6rSYxRQ7ufJEtTnmEfUqMTt%2Fv%2BtCt%2BH8sd1yqKz21SY7IDppmZOGLqyBDhCuBsFBzjpXuyZI6aquodBLhoNCwLNgBS8WiYii%2BF0RZYUwkFpyCu0FvFjYYMovjHrdrpA0EKJ4nExZ9LabrsJ%2BK8Edzk9Hj8oQgkxzwvx7TUsRiClPoIbqJ2y58iSRWeQrlW1oAmYc4YaeQcmci2nnheXgg7C2gow76iyJ%2B4KOSn9lKWZu4SwNWgyN1ZOmTZpr2LiiTeD09T7j9%2BabYYMZRv6Rn%2FacA7LE6kthizAhoLv8ANii15Z35Ip1l5kzWAvqPB1A0EX%2F5vul%2Bc%2BysWEhi9ryubA89oXOC3NSzIqoYaXGxuQ2bkm2rcdyNrdrJA0F4Yg%2F3O2GgQQnfymc%2BB8fBvKkowfEIfu10MSlvu9PmzQGLi%2BHFeVzHS%2Fms7VKPWE8zX81SoXFsZR%2BM5CNMqH4oMupnhdkkXxWMBsZC8kekNcfsbbB8SgnrdJUPdN1FubBotenjsY%2BvQcMpEsdk9kt83s6Ai2ZVgzdsXqXEBO51lA5L4s%2FX8eq2yvKAIno%2FMPWxvL0GOqUBsyGjARZMgoX9%2B8gNOjsSGwLIBzql6qOnuYO9HvzXhO%2F%2Bn1QWd75U6kPai6FKxlRUDP27vpFdYGeT%2FDHGRYHVdIiut3R%2Fg8jJis2iI0UdpC5wAv%2BZfgd7NicSBTFDK%2By53sYoejnRgnYvLmG0sprEgWMiEUsQ242841HeOTOnp4MPNhjQ8WXoZ6o0s8Z6adKxfHFQiG6CABoUTfXkWCE9%2FJccTdws&X-Amz-Signature=5f75b32d7e59f1328642a7fd20bd24112c87e5fc8d2a448883c1cb9f8a23f98a&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
