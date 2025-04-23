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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNCNMKZ2%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T220808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIEC%2FoPOjS9nG%2FcQj4fcYckeaV1vbPi7%2Busz2%2F6zC85TNAiBQMd93X8JBW2qJCj6yHVXAN8fMhkZi%2F%2Fh36LCwUb5kHiqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaT65BVNCNjVcs5EUKtwDlfGxfwCUWmA%2FLvzLsvc%2Fy6vqHv3envyC1F33QHBZH9BuO1k0HYd0DzmF%2FRcEirOWbslGTcFtG5mIZo5gAqIitOePst1UNZqKBWck6uz3dLUrK0UskR2pqQJnisOLecoXjd0RVHTid5UJ6WGg06mR3DLfmRhPxgoM1pNLxm1BUqvwCRTxobCZ6M9cZpCxMcnmHgHk7eqAFROgnKYjTQPRhZNOmwveNOPAqr6wNdxNKdV1RE4awC1wDS8IkvAga4ZqyizKdZA0amOPmaIOG%2BoEocx0JCg1zobSjEtUXjBxhNvBpV0EWroo76cBcJZcBrVpCDry%2BYiCNPmyvkRpOo4PI2%2BsfV7jl3Hzkj2bf7PFHKbxnAZvakvrlgyWcv7SE4uPiozeX9gySOSlYai6TAxr%2Fgfv01ZjIXT%2FJD9crek2w2XwdKEufpvDFy%2B6QlFQNckgMcWRJSu9IzZhHcpzXBd4TnPdhPde%2FrW8eLJu4fiwSx6SxJFK0QvCcnbLmxUG4bTwdCWkg8Z5SsJ4LFsjgIcvbko6eri0kHtHAvUVy11LW54YKd300WaA9101LsWqZWneWFnlkPEm62n1aNx9BNBWpPQQ3W3pyZsstxKUCFShv%2FrhTccqw8NaYCo3nTYw08alwAY6pgFjQfNvRJHLWSXz9tH27oEJkQ020OvfzVqiO846kPyhnZHHAds2xZse7ospJrELYMo5NmdAb3HxxZpLWwZLb8Rj%2BLJG1zxyVnCFGLDyKE5uJUwfmGcwUoLgcAZbtYQzuI%2FDOLnLTHbLcQ4gHzAgHEs6Zt6lIdAvLNJ9GZQreRWaiomncvLV6gT0YUuoMgrkYNUEsmPWXsue9YB8oJAR6l3c5hYw2Ev6&X-Amz-Signature=de9a6affcdbdc9ad1134a896dcbf7c16c2adb3bb2fd4717a555761f91ccdf4db&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
