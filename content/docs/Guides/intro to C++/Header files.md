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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YWU232D%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T131344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDHRlgknmqB9x095Jsb%2FcGuC52zyMOR5R7WAPAUO7pU0AiEAwvQGt3jlV7LPqXWOVoVYcOK5bcmBDp%2Biposnn9VAaf8qiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNWMsACEtmUuZxgMfyrcA1Kl2Zc%2FEH%2FfZ0rN1SysoHq43nI81ARH8opccJtUUSMaricVMpAsjpM5nUGiuqwSbmxBeyvIAy7wuHW8gBIxN6ChCupszPyPVimnG9YN4Le66cBuQQjYso3vzZH%2BwY7iMUSzttinSSAIW6j6UJtNGGZDm7QZ93MH3gM%2FL9uGtqJpHdeoJga8Yl8LXE6tm0puSqJ9HBhMqYiQLDoWNzGzocHCdcvw1DM%2Bl5Ok6dtRRmFj8pNjQYehYdIsnP8p3rP2XBSa78nCRFHNfycECAa3AQLqk221MuhBJ5eTlrRuCPXYWiHGMcYohIA1FaWAcoVFAbalyM9%2FsYy55eh1O1yRBklqif0dkxQT%2FlsFsgIFlroBhUZ4v47M4K5H86VeJVUaCuJLYu9sg%2BmGysu%2BP1ggOH%2Bwo9CoV0fypVZn%2FxZwcIAwo%2FU3oLEsp%2BksBkcBNej2cQ2r44PTmh8mX89U%2F%2FEUNCRwNL7sdFdG2TmdkSEt59Xq86MQGIp0lD0gECxblpuwJWRMs4xwBspWUIpZggdpcTbW2EM8Diq2IeVHAO15NvS4S5DxWROJbYSCKlHoWgU4eLLs4WGtZ0N8LJBHfPkCISqAtXfJQhJ2G2xxxhqZylkRO9Y9iod90o22dZ4yMO%2BQ87wGOqUBbg3XMWEQ08VhApR1PdhW0fxUCYbfls6h7bUFeM9XZLOXen6FbEicC46P9kxPlcxyOiHifig4QB7x5vDNRyWhdg7yVUKj2JJlAPL2FJI3suVeosO8jNIt9WxeEpDQZ8UOZIAQnPgplJqbtA8JBQ%2FnZi4ch5RitZTcOzmbbaJ4f8kKiYIUh%2ByIkGqrKLc9a%2FXopKzhOFzKSDAC1f09ZN%2F7WulA7aYT&X-Amz-Signature=1ab51b7893e17594fe4848b2c1ad66b5219ac8f8401fe12937044378e6db26a3&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
