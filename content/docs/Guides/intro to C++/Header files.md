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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466623TQGKE%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T121116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE67IzhVFMdIpwP5iP7x17ISa7PXVgfTb2bhV0Q%2FsgIwAiEAkdsQ%2FLfBaeO4tgH1rQhOnY6te6hvj0UxC0DP9H87bhcqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAXKoMMvrZMC829uByrcAzPKOIk16jk%2Bzlwtc0XCv338AYQuH01JXZfMFfe%2FGkwDAKXd%2BoWQbZLYg7acgLze87zJ4ysIN5HemQogrEx8lodmNMDXEnF1mTyCiAgN26swFPklzMu6CiJ%2FyzBaegJBolo9b58F4KvbxCA3YOcHYSRYAV64Q3SR0QF2a4z2C5RBmhgkrgjqq7SWg%2F00prP3ke3UiXE5r5EIDFkZTeRQMQdMT3IN2NiRS5QrdybAZ0j4iANpUSdchQereM08B4hcp1UcHtM0WlTAKFsJQGz85WfNKxcUoEb8q5yroMSuFdkTX%2FA%2BiFKCrFLg0cPZz6d4llCp0auIdz2NFltpK%2B7RizUPznHaR3%2FNQIwst%2F9SqleQUParKds37cHsqQMFLvdnotab%2BFcFGTT8QOcl%2BG9pesLP77oEcPHbgNMv3q9edX7q4vzS4fkuoRP6cQ2qcTlDb3NJdJQB5LXmVg24JROFZW%2BmnnfY9e9uhpcih%2FNb7whpJXSZ5pGrkdg4jwVS6XlEUbg%2FfyLkO2WMgS4%2FWU51EFC58oi0Gq7P%2BIiaM9S44VNepqc%2FSkJfMDMGCAOG24SzJzKJwUDh29fwKFKomBapIvVDJNwg1JUAfgLpOkbugRUYiTdzs8FGuVY0VefaMIad%2FLwGOqUBspYs%2FsvZKk3S3WZ5P4CHXOlySwYYrMRazKKloHjQPRzOQDPt3FoZYLpcyDojV4auP3138IDkPiZRPNdhb6KKLYqo9CFfnbOcrJdZrw98jfKaqwNBywAdF6Xyey5V1PCalRMCUR1PPKkag7xT2ZR4RZozi2%2BOj9aR%2FZaxXDaVq%2FZM0U%2BYGXiE0oQ1kuxgPO0iEzlMYlr7R%2BPNRtqHdam0DAar%2FoB3&X-Amz-Signature=d6e744c101a0551c115d54649ca7bd5498a7fffa56082e7ebc252596fae26f54&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
