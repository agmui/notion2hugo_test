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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JFH6JPK%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T061137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2XUZYjJdX6PIZpTh4J%2Fvg84V6eKP8xpUZUJRA8SZrvAIhAJMWIDli5NZA%2FhdvzjCRcKMy%2FJ17Xx0MvoWQQeTJeDDUKv8DCCcQABoMNjM3NDIzMTgzODA1IgzUdTqx66U5Z%2BoZduUq3AMpF32c2q6ET6a6BNnAZSUDQHNfoWq6If2YEYbdtM6hiiEWR0hbh2rZhZr7psJgkCBjyAnkKdPkk4YoL8hqNSB3IR6QCMLg0Dxv8n32BhZGO6DByO9R8YS2HE39T52WqEZdWH%2BBKesokl%2FyQv%2FVS9gsIR2LarwtriAX2J3iIrAcKK0hMZZb9keRVPKicjSui%2BQ3QaN6JpLBuYUZMOjePJpccw9a4ta3Ok%2BJXMzI2IKYP52sptf9JcpZMO854aKY7U72fZGUqJ0UAcEe8WQkq%2BDRz6%2B18gl%2F6R7Z9o8vApWem6aOsQAJr8JV9dKUm7O%2BVPTQbCmiJRbqRiDw8k4sQMhkP81I5XdlokD9bOY2Fl7yma1t3d4dEriqx%2BIMFSnMWwcaLnS3GFe2Svgv5arKKL5EZSQssHOcebx8qNimUGXEh7qXkMM2w9SMd2xVbFFXm9NrOv1Eky4IeBt5cjjqUCsoxmzhYv%2FOnb3FM8ECjLFgzcaydMytJEDmfHLBc%2Bscbc3HHvazQPvw5taHmnuqLqDK1wgEaIraOUjuY6RpJDLrbpJZbi5EDssgaRMwCEoPTeKFUaxOIvA0LsWpBKbb4IqHKF3gIjc9BT8Qt6bdWtu96hbSr3eq72TTNlrU5DCq96S%2BBjqkAc%2FZM6aILwaApxLgIQXFxzh399NpQae1m3V3rIeAedj5YXMaLfddxRmD5G8TpGFdq3GZagxIM6hgk6UBI42NktfgyBwxzR3h9SjX%2Fax1qWWLhkn%2FMHx7Mb%2B44gX9QBcswPk1VbjL8nX9HHEqhCJosbtJPe2FWnppgeI00p6NgeIXmPB4zLIq6%2BaoB8yWPuPSMOj605tjMbC4eWHqta%2ByehElrfnZ&X-Amz-Signature=2ae543e9f2f9478b37b24304dc9df7febc309a40e8fad18c70fc0a67b9289754&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
