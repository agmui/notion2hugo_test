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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654SINEOF%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T051029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcPJ%2BMbTRclDfHRlWXn%2FsCTVHdCz8281%2BR6BdM%2BEFxtgIgYpYtUSzrmFmZJH03PulmXRuuQhjilik1Y4WKWD6m%2BQAqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK%2BJOqiD2Na8gkbNSSrcA09ipudl8ivY3l12gz%2F2s%2BeU7%2B%2B6ZIwBrH5FcofUaZxm9ZTBqajwdrbiHFlQjsAozjfzMRFDPvF53cDgn7%2FUkU7HCT3NQWsmBO4xa9mOXKLMJYLPXWA%2BtQBhw9QY0mjY1NPKP%2B6rFb0QA2I%2FD08T1icOrShp%2F4PpvvdU17xk5%2FRyk3I23fLbP%2BIAXNEqjI%2BZ3zLtpQxgbx97x3MF1Y2dLnqC4%2FmvVyORu8bB1YInZS%2FwxkMonZjo7l4j5v%2BxFhb5s%2BvpwplYUbQTgtvSdSCIlK00yw9OfU5Z0coAJi4cy3hKt6pytqua6LW7UFoCV2jg%2FA4wLeRPTQOVKAVkQkkvCz2Sw3EpXzBESeU%2F6Ql8n%2BlOy6qLBI3RJ9iAlZ4ap6hS3ujXTgazwZzthRv6xcL99etFhQMF7ZCeWXtgGVgufuvbQYs8o7GQkBysP7pJ%2FTBR5miqfZ7RYYRczWaClRP7z%2BLwwdmKwR%2BXZ63PMO0L9sY%2FE1xGhXtnjYGqFegBUTFzHjsklHxp%2BXRL3h06iZlHwSzQl8wOE53IUJjXKK8R0J7nawy705nJF6Q1v6sQNpDJiqciH1aB2kKaUpOtlOmH9cP6vA4CnkFdDQbcvmOdK4RBYHRMXXebW%2BkXHN5zMIu908IGOqUBolq7m4SqX5QB7sKquIkxpgkTXrIhCYHX%2F73lE9ethRXuVzpX9JK7XtCUSk6O9wJHtowdRBd3qt96tUB5oGXky8HgESrfG435hA81FiTG3iiTdgYpzozuJPEHw4JQacb34MV0r99l3pvY4Ib1y90xq%2Bv7C96KO%2BLwozm%2F39J9i4A98tM16veDf80YirfRIN3e8%2Bbtv%2BRVIAPPWCjPhNEDD8yLCV8n&X-Amz-Signature=df85382c25d6f8086fc105573b2f022476c9098de3bd45b7750021daac1f36a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
