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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6HSRJDW%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T100815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQDelM%2BdLGljLhu9x5FEhFSMZfnE3EUbSIJllaNxUUWWCwIgAQa1XPQoI%2BZpoeDLcvurZzHt7uvogG%2Bsjn%2Fgr58taZcqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAdSMguz1m0YW7ejqyrcA6JVxv9V2MUMk1KxuMMwNPH2F575x2Kxw5%2B0fOt%2BEb3byNW16WTn2ShA9WErs2XxTXpT75TYRdxaZhNu0EOmtUB7XMSSbUCnDiPazQ6K1%2BrJxwFmxm8RU0AFLsTAopwSuqjtjcdHon2CgeAmNb0uXNFiC8rDdb%2Bn336IPNbjRzzo1kObnXFqlnKv1ElBtyx4ztqggeR5OpAfVi6k54jxMObrq54uX5dj0lZx6qEitbL7UoxZ%2F1EBUd6IV88TOPYMOjW0JNBPvOQTGFr5PdkdnrOCK9Mma1pzNH4n1UmHFGhknzxn1tk5YraQZKCnAbh8kwv6w5nsbl1vAuNw%2Fzhs1O0HS%2FbP6yK7%2FkUbwJphBHKYVZb%2F%2FqBFi8SqR4JDKc5L6nC6IFc6hkxydZuv9OknnK99Lqra2TfUOi%2Fq4C0kKvpAsfG%2FjWuGM7Ko67OO91cn7mqbtyJILB89DyKy%2B1qWsEBdxf7FyyP4PnNjXtLix99frE%2B9z9KcyEK0rqURY9ANuHJMzv3nPhZxpU%2BXElRnVYSaKAjjhCpj5zI67tFBsjVRn06pOhkHqwsFYKBR4z3toIk5OWHGXENyRPxFrHdLX3iEyQnruSt9ECgEblSsKV%2B74hDp6%2FzVlevS%2BF%2BsMLDr28AGOqUBCTjMceW3qHvtF9TlJWHhpSqZzde18sHb5duParLWtGxhewaUWK2rsgQl7Dlid85Y%2BJRACp4a7BobSSaPKpLEGdQGp%2FWtdZGIm42mhmRAd1Gwvc9QMPYftWaHqnSqBER7EtDyRBOCtPKFnI718rUJPZcRs%2BvE4GbWjf3U%2F%2Bq4Y517VB0QhvLLKt7Z37fx4HvWvJbxICPqW6XcDG8FujpQb38jcgqk&X-Amz-Signature=faa330a0ec9bfc33cf65cdd24e6d8c3f580d5bf3127851bfad09a471f06c77b0&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
