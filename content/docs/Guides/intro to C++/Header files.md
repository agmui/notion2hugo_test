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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQCHVR7L%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T090147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQCJv%2Bdn8mTUjL57wGHJsCLP4KiMmZsqocypPyEptSD8VwIgfiuKRuYAYkthot6IYA04SuOJlBVHzK7oQS87qIZKN5Uq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDP8%2FKzVtbIHFs%2F0iBCrcA6hgptVeOc6VSngMlE7RBaUr7PPUZEyFBsL%2Bs5RbCpHbkxQ1%2FDptNwURVmw5Vk4oyl%2Bmsx9vLODdK6IC3ba%2Fof2zzftPqNGOeph0az71kjIb8Nn6oovQjrB9fy0hHQ8wZTPjjrxCbIRaoEUdvfCoTJmxGUHAnIX8tY6zCExPYlrehYCZr0DQqal%2Bku89ktFv1zLzE1HmDgyOxMmb%2F6b6QwFd4V435SwQic7SHbIwzTw3L10FhleVJHpT1DsXmbcU%2BA1SHvv0MnNUGu293XkNxzCnEJOYlG6ptt61ML8dRm5jUGomRULcU%2BPeKbjzsANYyUNkQZkV4fesw%2Bim9a2trczhcWEQCRYEgrG026Aels651LKG41cunFUM6hsY8tGXFJxlH%2B6x1BKBjOafsoswKTYdQ7qGFnwnzRBlZn11kq5bStZoIl7%2FLN4e3gUB%2Fqz2wBRVyhFwppMH%2FqtLc6ZgziP3fV%2BWXoxhrrlB%2Fph2845WHnpOG%2BPPCxTj%2BmR8YGqQSyqh%2FNA4Pg%2BeB%2BWagPYgQqmaJrVOKdy%2BNQpIbZE%2FOApBi3Gz5FoK5r3%2FbG5ete%2BDJvlUomDa8jjt6%2FTWCiVVLkCcsJ2mam23KcuJHKy8mizzKSHmbHpHf2H4FD4aMIjgr74GOqUB12Ze%2FG3zEbyRLh%2F59X%2B5QM%2BJ0qmq%2Bo%2BGLzX6y47zjfcbkKZiIzvR3r%2Byzyviet19DMntTNV3s4VXWvzaYQ7zMzSeOxMf6VfUOlJqNmZh4rGW%2B5UI4X5M7PvM%2FF1JWmRXt2BvjBOYnEvruBUMQjfW08AfOJcj7bbRJp%2FARCKHr79dH%2BJj%2BfkTeD3p4bLXjm6%2FQzSSkSL9IGm7Lx5kMb1VylUUWJO%2B&X-Amz-Signature=c1da61678b94c91b6dd9a839a022b2aee9d2a54338fb3205cb27e67323656b08&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
