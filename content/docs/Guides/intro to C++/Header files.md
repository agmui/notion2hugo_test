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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X54QQNBS%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T220801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQDikCWXHysnBXjtRX5l%2F4Dhvjt8ZJjCoieaDSiiIqaTPAIgKK3zmBsJc6XwiLNuRVkIy8vRDxPhNvV9amGsFWW5TkIqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOEcsSBvRXygwMHyYCrcAzHP8N28LERoTofrzwKnRTQoDHSMbbkQuDV6p7EQsidOyXuagWbluYKDVv2PLsY7N68X4kgVtSkhIW4g9BJxztlJPD39KRrWKT%2BfAQnaHcCiQLUdkYXszFl5BCahaAaoS%2BE5e4qgJVDp1wVfox%2B0rmGu0Avz0FB6MHSrTMXF9tJMVjndI0ztAOS8KvEDPCDt5jMyugQD84sN9v3a7nniUhZSel3JLxZ%2FU3%2BDM20l3rkkdX8rBMp8q%2BgBdZo8rp6cGOrx7iyXviGA7YWoV9PE3F642dCdi%2B9YH2ko%2F9hUkPK%2Bc4cefrzWExIhQ50pf%2Fe4ixvIHGINahnGZ3RXTZA6UibaL7veiFSsvKEGQzNI8%2B5XcLFsAJoTTIekFPYYUy%2BXjySES6fSRTY%2FByrPvTUXbbnubF9sNK3CgfY%2FafucwNjpMrk4vGMeftgL6BUmw6qU9vob7GYKKeTiybAHJDwaCUl98Z9wd4UJpzFvJkfw6liJS%2FubOuyQpOw3JoFM7NrWTBf0UbqLNQVbRh6gX%2F5rv6K66vZOB%2F2%2FyKFDp1lARtPbplr8FcNnYS3Mx8f3iu0UFzOkvj19kfrY0sOWwlBNv3Q3tT1wjlHE38%2BFUmcGQ3DEfBsnwwpdedj9THZjMLSvysAGOqUBzWsA6ZfcwpvrYBHEgRrhJTQDHwV36DL%2FUOgb6BZKSPVVyDFdVbzf9HcsqPJmI6tusXK0lC2lFY1z0KQxoKNv7wxExGmtkMvUEOYJYJYBDZmGsgxhzI30rzUl3KDyzC0T0v%2B6SAZG6wskQEvLavT3aGSI5ze%2F8w5NRXggK4t5itiy1BTzCi%2FKaluMUQBy9GKkpB7rYUUcEDfAq546pn9it0A7LKNF&X-Amz-Signature=9ec750d13b641f4c6bc57fdf341beb32c52ca440480d531384b1e621b5e63b2f&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
