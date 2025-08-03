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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYUPNITK%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T071000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEkhPbNOiW2K43W5Wo9PBeHOQNHrTGuLJS6EVAuVQQTAIgDw%2BPqKgdjgxG3s%2F%2BxWsNs6lJLuIYhcEPRYHjayz1bQAq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDC8adU5XGDFOlhyo%2BSrcA%2FZ5fpdwDTe86Nd6oKpQCYv12RfvKy5cujDPP9x5ziuai8PKj6y9a2OLwVVDuYZM%2FT44BjFi7arZgHWfMoAeAQQiPlTdb%2BxOHEIkugepACs8GgeLN%2BYFf1slxE0G553CNk8R61u6PvzZpJ7y%2F28CKj%2BaIiOiBJLo9DLi3ubblXyFa%2BDu%2BToRdUnCfjiquY4q8sEepFOItFNkWxtFxPgpEEKEq6cFhZLtxWOaIYSrrM18eDZZCDW9zGYNY1zTa8TdegYXpToHe4lJVwKsBC8gITTPM7Da0%2BBTBdoyfpFocazbVgUbIDGa4R9c4G8kCJYvytjBBkNpOpzxhJsQQ20OcTXbV3mnWsXlwa4jHwwytNhKDu7oWpv5IrO8Mjq1GyjRCdMiuMXzOQeJfH3SicKG4tSWKO245Y4eFp7%2F6e79B6U9rJHDQV6I9JDXmfxAWTIxWj5rH4dcQWwa%2BvIMDuOFclsBspwT9dIwSaUmCLxSN2ZVrYiw5%2Bthrtk1FIe0Q5lIgDAwGs7QV0fY0LCad6sHYKDYX6hV9p6fcAJ8RG1lwdjynCY%2BFF2nhhMil07aKkRTg0CKE3IUsK%2BuKU%2F6p3TBV%2FpjtSnHwAlrpDHDTCAI55SmgQCWfrR3if2XN%2BfyMO%2Bbu8QGOqUB8cME8mNmFweH%2FmKq96kYfhmjI16yLOXkoJ8%2FxcjikTjuDXO1c4%2BNrWiI0ycul2jGcJw64zmJJComtQSZ9hW2mkpPbtPr0e9cmw7q7r4aLq4ZC7NP3mTNFyLQuFQFPFbDmzLJLtC%2BzwcZh1Q9SzFfgrWk4g0yynmX5OZdFdZZMCEVczljZQKF2NRu4rkGoIS%2BmSUk8%2Bw0mO0DXwSw6NFAxS2Y6xtU&X-Amz-Signature=793de694afa6f60b6ead04ffeb12f7710b07cd9baa060d97fb493367a8d671e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
