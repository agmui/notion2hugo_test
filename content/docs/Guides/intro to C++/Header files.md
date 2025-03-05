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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZH6GCZSH%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T220743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICOix3lTgx4BT2S5K%2BB5kM4hXwR4RmMGKsLT%2BETK5RDIAiBnO0vhRlBQf8JuUTZwcudxq%2BIJYxbt%2F%2BO0f9KkwocMaSr%2FAwgfEAAaDDYzNzQyMzE4MzgwNSIMpZD%2FAkkzA996t9DgKtwDhwqyk2iIKPlzHDeHq%2F0rQQ6XrY3HeW5BO043%2BW9SaefqSr61%2BbWBaHyvmXcfq6BomXBtrCFD89mXUIlaGfjUMq6s8fYmq8x6yOwl0bOLlDX7BD%2FDiFODaKb9Fjo9310GKbnJNXmlanycMhB9T4c%2FqmpcVJSMxCde5MeMFA0S0nezu1LFudOawB%2FIwYeXCu3RU4tVvkszCehBl0L%2Bmj74uX0RM6ZIOItp7eI3g5JOLRqorfoRNt0ISKJU21tItw5FebYltma7nx1r8M1n9K%2FNHiqblqv2%2FQnUTUi7moX%2BceFtyHcF6KZW51i6k%2B6bga%2BQWDFyQH%2FxJl1RuBZycoAZZFyoahGvsWK7VImz6CT5QfDUjkUMZqyoSojmbpJXQS4ZQzQYic6nrsLVfjjk6Jyh6P2e8yNLHWhvUQ648fzaBx%2BSRwGVnAYYYO2wK1hWF8AED6bsdCjgSQN1FUHsDVF7KyDXjXA8xHkcsEtT%2BHH9Nj4FhXGN%2Bj6sUb8sfVeAxD56sCaUTkgsn0iNL35xyYA6n4UM9PRUlPsBDp8mGzQcNj6gaN9HJYNKANy71%2FGxU8RghJ%2BTe7t8ses0dkrNIaA7cIoIKbK6acR3DP7eUzU6OEYklgWaSrpu%2F3PJe3MwvoKjvgY6pgHUAMGPToZkZQ%2BgcL7EeWmaO1GykeSseVCUkqtqoXKqtlpC93ctBJxd0al2mXPAZRRECN5w8KDRn%2Fc3GSjwtfUxUbBuwAgu5pF%2BQ1N8m0t7gxYrFsNUA%2BSZX8aPmqd2G0cAaWSkEHutdfiiQkTA4RqyxoCXkUhQJp25Z10RWBx6AWM5lQy72yqgC2MihyPbmHyOWcBPrmJeG%2B4xiJ5n64OfrG6h8Lif&X-Amz-Signature=69b23841150f76ad895657a592f9104acabf6eae5a8543503b4489d94e153f0a&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
