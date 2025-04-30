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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V27TIP7I%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T132007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQC9Mrs1SrhUYjf%2B2wDh4yTm5%2FIZikis%2Bvqxe4rBs8zi7AIhAMJKSUqZLpNE0R96pCY%2FI6tQqfCDTFiV6tZ9HDlKDN1nKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJKRhnn95LA5gxAOQq3AMWC9u23LemfWK%2BosCSx5iRO08psR0WGnkoDLPWFjIjdBz5vzEFsL80PaNRSI1m87WkAQbi6juN0ARwf%2Bifo%2F5l41onIp0cVA4hKK3riKOrTFFyDBvxD3gAJwuqkcjBo3YB8PH16DggoVjBqLkbGX2dD%2BJDS4TPTAjiYqtyYIHKm%2FnggYmwXLI3LFbfUB4ikmK1FziwaZdZzM3sb9qGqTd%2BPde1KJvD5%2B7YnCyldnsfvuvneKyX3aIbVElEj5ZdHykuzLD9LNvmGyhKcQVvh8M6tDcJtRdFLQYFMyPTAUIY7O2fmHh6PjqgUNJQwiAnTtA3tj%2FELqVQZ12QB6qdqxZuZuaXVz0b9RMcCCb5eKKoFyhEZMvyjXlRMTnTXOTR%2F9giOdDnFbFpHMVaOCtImEkOHucbUyZpWGfwPjGmNqfjz309Z8%2Fm5zgoBxhJ1NBQsL%2FUZa5r2ADWMrrvaQmP7R5gYt2XzxyGHfhx1Pro6ohoFfbRFxx1PJhmKWfeMfnlAm54xBd5lohZYThQ2zK%2B7zR2DqRefopalqQY%2BZAGcjxA9Ph53Ac6R5x2GkWOTvGlmrnqzyIfq3FJHg%2BNabWSjQaWMdaOnkMtEDdVKPYYndVw%2Fr5HTN9XHt0bwQBwyzDfw8jABjqkAcblLDOSu%2BqSmjLRjDy54vgHSJBny0KFdSq5Z8jpfbJW6ra2a6DYEeZXI6TExdNjqa3PaHsu2keV5Okay87zJKzUFuMmV9A0bWLXxBi4Fryv6VrX%2BVrODNlFCxywoE%2FqVfIhhyy8cJQDCWlhKAbT7lnQjFmikLq%2Bvky2jhuR7zmMGDTlDAYPGvmGh6fSRiy2JNObmw%2BvuPt6509EVPxCDSWXzs1g&X-Amz-Signature=aeee4cad2c269e37c2468754d22762310a7aade00238216c3a0debbd2a96194a&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
