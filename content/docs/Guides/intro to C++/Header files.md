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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LWSAASW%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T131819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIH09n%2FtYP3veHhztrHy9XRSu2VR3eVzqFY4515XdaNCpAiEAiKjARChbA9GaqLRETbRyT0eOfTIu8OMW4aye%2Bbu1bf8qiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMDs7UJ0JWk%2BbC5PZyrcA3mO3Ip1HSDOjyVwaxc8PlX3J5q9Iof8ZNI6Ft%2BOuduDA0sW4HYfQFCP9I3byOPp3XvkNyiFb3xPuJHCqn1Cg1mQkm5Kd7iBG9lCbAP1t4B3PxWfaMzJv%2BhcJIjX%2F%2FA7FuytToLWOJffo%2FSPQXa4b%2BSxl1fn7K1jhSRwVHKxJN0FwDzXP7XNuZyA6fuSCnA62SA9nveCL532YMyZ3%2FMXqbK%2Bnx5m2JnhH8y9pvFI3SxD8bBxGfEnLJrnLyElZL7tQ2GqpjoIp6NKybqkWkPNgjr2TXoxLkIT3EaJ5Lf04f4GmQAL%2FsTjdizS9TS1cos%2BUy2xsHjyVgTFSbd9dXquP1sQCj%2BMXZ6t6FkU8LtCZuzGN%2BMrnAYrH7QufeWeAgAYEaqweM6jmQt2Qq1yfedJurb38e8aqz5cj%2FOd4XC0gNGrWQI%2FmmF8fJeVCFuOi29t%2BA7iiNu2%2BQgZGXo7GIlf%2BqyyJVRdSRv5Px8nlF0ckqyGuyYRAT0at1J62JflqYQkF2%2FTXZLs0r0HgeP8Li6Rc0eT4mhb5d3B6KHOxX9%2FaoOwtzPbko5srnM0wtwN0KMa0gpPNxmUca5kTzvzHwUJqzaBQUbe4tBtQHJa2wIUImHXny1X5IlWIZqTasyRMIjrwL4GOqUB0pIW%2Fo%2FAPlL%2BeDQRMIZd73GMhk6NWOEZjoUI8MISkcuCRq396XDvt9lguzDuE2FRGZlREfdiB6Pdatp8BD78FU%2BXQeGEJpo%2FZYoeGoyQpeUwcCnb1TsQk7W4k67867vC%2B6lAQM0oz02sPyYFUT%2Flshzxg%2FkfdLub%2BbY4U2ijjSzwm7u3dvIr5uiGr8nIahas6VkPmi6IAxOWQIlQUF8kcB422Tft&X-Amz-Signature=f4d0fb8bf5e6d27ad0e55d0e42ad5aec15f6a14d0710cfc5a272243108cf86f1&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
