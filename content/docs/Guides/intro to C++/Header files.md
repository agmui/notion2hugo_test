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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVDS36BP%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T190303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDPqmYFBKm%2Bw2D6I5gQpVhOww3qy0sBPJYVJnfo%2BXFnQIgco4rCQ0jkIdYvA%2FjXnGPkAUzGavpFwlS8i2rydhLKMkq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDIb0u18K3L5o7fKSsCrcA3d9sFCw%2FWByHs%2FORNVA0ofy3TShHOySR0lRlXlE19XYgWv2W%2FD7Jgm1z3LVVuDfpiJHpVMNDpZ%2BrNLSued1mTYnSu%2FX2Ts1dUqaq%2BNXR%2BaBceGCTPqTXPsSJVFBNWX0W3GoMKHcgvZ644LCYw29ipVzE%2FNUc%2BaTRmCi%2Fd1hB0cYtUUZDThJHvXiG%2F%2Fqk3lPzgbewbtbcNF55rUlwg8z1%2BQN8f9FmwQBQCw0AGHxp%2BYeEOyh7T87IzfcALv9%2BnxX4JYad6ACyKztDVA0XzMTaviXUGbY3lLBmcwLzNzurUjC%2FXyffjZ3a4Z3gyrz%2BupaMt02q677VPL3W2vj1By5C0poJ6eGO8elPiR0JGCWCE2LC%2BQUOhrq6QoAMQiT%2Ff3%2BZcYkHB2OWxeymgRAHymvgIzi4I6agrvKG5R5cfB8J4%2FflYDuFU8f2%2B04Sub1drg7oZQGDuRlYPTnXb4uhM4gLoocHVtSV3xteAUlg4VnOsMgHtzyWzFNR3As2aqpVmXepJfdzwqKCyFrzQ2RNWjVqIB7paR5k6cgDAb70d99fJ7LrGA71GOADZhmdVCS5M%2BBRAn9YpSw2S%2BGXNQZOg6BRzvh%2FH4tVROuwvYJJ2bqwrUvWE3NdhS6G99jRfqsMMmEor4GOqUB3EdxzdC8Fugpy6t1Y2kp1KphmtPLXZ255JWsEmidmd%2F8sitv8vbr14wav5HJEGzBv6VXQuJbBSzQdkvkg3jn88ODRkPiLqFuUOEvyU7ag6kXAAyYOPRIY9RtV0D0TDRIgIvj3iSyeYlGLd%2BHIVgBe7sN%2F6tFxGede9EkKoyIkjh357I4xHNja6mnRqHJBlRqp3KreUSJjNOsRybpzifrEpQgPFAr&X-Amz-Signature=78f989d27ec852a8a94825477b64272622be513a0f68bb36413c2091c5c544f1&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
