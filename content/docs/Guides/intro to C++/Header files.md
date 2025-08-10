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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRW6VDXF%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T121535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FWorQWJQjwGN661WPf23MUTYdE3Z60WdCXclCsHycDgIhAMas2xbQcbz1dGP33dF0JpoD55dBRIGBhrgGCnx7Geh5KogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzKmFh5JWah%2Fo1LH8Iq3APH%2FGw38LA9iqcgjI1WEbAo7CeolpfuodXY1T94iK5TIimxEuJ8R%2Box%2BjwBTtEaGcvzGPbRYKbkUyJBRCo0%2B%2FnvJxZrU2VXUoDh7ZzdrBYzgHgso4gjPftHkzNr4k%2Bo9Qh9y1PFv9iDurT4mTSktq%2B%2BwQP0vU6EhjDD9o0J%2F9DURweXx%2F0d9fgI8JctSgmGVk17uCsJPZaG0xr9YExQiyFv%2FIAXmxk4rDwx0hSQ%2BnlyLYG0oo%2BqEmey3RQaeqfn16HH8JIS%2BJxLkBBWUtscqhlf1HmedwFefsBJFimjqT64QupjoLJosjluBfI0Lmo%2B6Tir86EAKxWOD1lKuhD%2FZtko8dhLzraXkngk%2F2%2Bi3sQZhgOrK93mHHBrJRq3mqbRDBDqyE3%2FrtIi4Sd87CjXadFNv0vGHyLfb35Q08dTHzJE%2BDvyF1UFSYJ7b5bI10sEwO1CNecHnL0nA5f6%2BGS67QwyBrfL9kInrIQ9XTxsRzNft9cPh7zAUp1Vu9DJvJMf%2FdJYAzrUQ0CUn5TbGmQFepInVkr%2Blyjjn5qpgLO%2BeZk1I1jvGzN4bIF9BKj%2Fee8DntJ5dwJNyD5akM1bZ4n4N%2FGFb%2Fma9Q%2FbZnL8O2eITG6NNl5PWvLUtk2QYKgVhDCOmeLEBjqkAVi94MERSGwWpml%2FVBw0h3qBl%2FZFMokFj8mhCo4NxELntKtNGogwlnQF45Kg7kIawUeNzTW%2BQg1npwG71hD3wldE62uR%2BpYKLjohLp%2FT7Ha%2BN3xxWRV6wLCQOoG4ZVoI5ONdExfZACNtHXiMe1io9TnMJSGQ3wO532oiDuFqjig3XhFYFkJdLnQbRcYXlDFBboOPybL7SdPowEvJL8Ed75ZmUxep&X-Amz-Signature=265243aafa03d1a26a673413164daa31e91138bf1059bd60c2ac2b08d12f7508&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
