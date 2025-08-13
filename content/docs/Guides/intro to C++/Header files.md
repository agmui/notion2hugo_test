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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466436JDICA%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T034406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIATH34pGHnGW1tSGW98n5%2FoEl4FVuwJddNgmEWQ9eH0aAiANBsgSQLDI4tD04EJo2Y9CQu26UQARDpNDzsKxa4YwnSr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMm1rtj1pUxqPvXINFKtwDRUR9wj6z3qofBH4iIz%2BrMMbFr6UVSyEZJxXEWTo2sASRj5p9uOUPCkKRyp%2ByQ9YiVefHum%2B67V613z4lM4HLeG%2FPofSU6XvZtPGj8NQXTlgYs1uE1cF99VtZkaNRbq7kim5nSHYWv2Bj%2B4WwN9KmAmmIfrN7%2B6dXkxcyyr7DAhSKKnSRGg%2Fd1x41I8ymmYf0E6OuxR9pMv7PiDayQRebOvIkBT%2BNgN6QF%2BQ0JpMFbnSOkFvVv%2FMV0d%2Fao6YKspJSP1lRz%2BsqMjrR7TQlREtn9MG%2F9i8o1lSJV8ad4PyFy%2FyVI3F8lVN9NblCxQgPsqWhhOreykgpAs%2FWfKAHyJdnpX2zRgIRKpCflXcDFL4ZvkOJ1jp4NbzbkbHp5dHQ%2F8yaubPIVCF2weoRIaGR21WsWpd0AwSUY3EBBH7v4QWQMqEHbo6OfUUrUG1v97UOD5%2FWtbV2jcUt%2BqpoUwbpdbQdKQklbURssFars98Nz7B08xf6qZiSsf0aeko9L0BQDt6AIX%2BY3EZx4fA1rxWA3eJo5XaEuPfi5GYqYntTJZQnIiIJUttYDbZ%2BbHrjA6ezlylDYDiGtrPGFqYDs6ty55Yg8YFKWsW5bUgnA8qnxFXs0tVUxlDAmdQ3EBfr7ukwqYfwxAY6pgGQ5pMS6hie%2BQant3T4pkLV7m5qcIiabN0hlvujGFs%2FlJ70myIb5OhGEB8byMyCd9EWzQxFIrOi%2B%2F3UZQ%2FVLUVsweEVywpg09UlMEZfOiOQDBI8IkMav3Sac3tLwnD9hNrH9klKdQq9GZstp4XmrZHg1E3X9gGHM44v142Y9jN%2FodyRmf30%2BQJ80FQCTKY3yro%2BU0tklCp7Yw79JnjNxwR0FdKWt5QI&X-Amz-Signature=2a6e6315fe3e685cd4d642e9271dc00cfb53c9c94ef09cf0a8ac82d26ea21aaa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
