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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6HUWPCI%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T140715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrbMwLbwmojqqBElaPqZcOYNkzrC387K2%2FbmDTEvYepQIgZLxMHf6uwd1Q%2Fzh5Cwq7M96EwQQGF3xJUZO1yyR3GuUqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF7ecHmfQkuKfvNJ8SrcA9fNjpFuAT%2Bpu%2BnZAu8WzOKBfQRon2P2w2jXxMAodJgqj6YvYj6CUZeg80jwmIIv2f6IHUrmiotgbAbh%2FFwFifxqw0oX3%2FCRv3IytAm6CnGSOCFIm9k3hz3dn2HSO058ddlBbcg9hHMQMvBPz8v2c1PCrQ3Jzfe1tfXwWJ2xYNnjheXDZD2IjLv1ykJXJW1LsZo3R2crABeDiqHqLwO8nDYyJddwg0gDIbJmTXyKxbdgLEfKhJ5kK5ci8XcVZafzNCwuRcvRV4JeVRUV%2BCe%2FP7LC6jm45Lz8boUR9kENyeEIc4LErNu%2FgZIO0zHEdA60Bm%2B4wW0vczMreiD%2Blqa8pTQ3DFpdFS1Q4vCVmqkrR99E7gUSuy3MG54GZ5H2g8wP%2Fkc4juNckm8j4J6QNZzg8Kx4S8v1zoojqsqGt9akUwL9drVsuHylpRyjOIUsSaXeODfEQibPy7o2E5f867RdkXNqo0pkuC9N%2BUHTFtuWt9xUoHgvGMMG3X3ykrB%2Ba%2FRmpI7woYlLROQBDxraEUlt9Wglgr99JIHu9aq9go9B6DpW9jNvotPZo%2F8LA2ENd8glQI44xJDk2YfOia4TtkoP4toG6VgjVJuZLoKSH%2BDICbJNbRPC0oYKdd7VMp7jMKnnhMMGOqUB7M60LbOwBBXbUaWf%2Fk9gCsjgLbu%2FhZ5ohcVVkJzWLtvvbiR9C31BhKR4awLH8GcnitiopwxXV6XqpvER0uBEpdJQuAoVYA6axQFKdwQZRqKnLiPXxYT20xz3AqI%2BWHq%2FyM9odDDmHZADBi1dR54IApyit%2BPns8Z5SSTT5cowxh2vmMdOeONc4Es2qkqbM9p1OpHhyla4VqFDeeAPVSpUj4F%2FNxh4&X-Amz-Signature=3805fc5b39698af52380b1c62d3771a6b3e52f062eb8e6e455801bb509c374ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
