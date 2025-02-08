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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6BCYCIP%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T040901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIEz6el3gL1B2ilgue89oz5ZieaV894Sq0u1bPOZshbnTAiBsiMHPs2ina%2FC3y%2Fete4jjgPetI6n8AOo9ABMXGNBA2yqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMORYTNY%2Fbp%2FB%2Fj52kKtwD7eiyvEtc%2F%2F1Ob8NLQA4eskcsXokXbn28vKdtLRQH33YIYKtB0ZdT6YJ7fZuDZULnKmAjy%2FnybwayLEcACimQtqx1sm0TJYqLqjf%2FrguQBX9PKc00AIelzXks2b99aq28HMOzEXGP0PimVolHkPsC2QpRbT9Ih3yfl5XZJu3WXlxilV3sfGqQV2JBNv1YhLVOcnpe3afufkpPibjgneHj8XN9hpCBaWMAI2OPkfy9VeNd%2Far6MQgtLn5u7WsqEAOQeEkb5vDR%2B79cCxwYcKwvX2ZkxZOsTlCp92uPUZUvvk9pH5mqNy%2FWfczaz1yh%2FMbufKQsaPmYfrwm3OUt5DniP5RiLVMsT4rwMZVdAKWydKzaL%2FL1mjSpRJWkech9ESQw5qe4o8ydINRgz8f%2BmpCxCGsp%2FD3RyMnedKD2KVrN0zfXQTQ3vifBUS4WpJhoymFOy6OeEFLWtcygqBxkZvG5GiF9v9D9oWG3uvf6sWrO2a7uL6Bc9I2Mx45CGAm4pDrXdkZKzTssFRbk8M6IeC%2BTQEZw0STbTifx3HcxjKOYZ61IFpQA0i9MyJbCZ6O4LfwTOLpkIOA8MJlQZBJLmIF2cIR3DnQidTq9bt5o2IE5ym797Dqsvl1EkB8LXZMwuZebvQY6pgEWFt3egk8ry27PPhzjiBFLT12tk6BDoU%2FM6RDGAL9stIure0VWjaiz%2F6NNCaLx05%2BlFA51LfUJway1%2BiTlGrRDIpmt%2FzkttfAFCZR7EjMAtg0m3v4SlJhcq4Tp2ac%2BOu1Rr6hslovdvmOy1iWhWruzxDfONY1PcYXTrF9rtuRsjb9li0%2Blu1Jzksw9QSTOPWKofyeY4eBE7iD0fKo6zCauDweRCP0i&X-Amz-Signature=fabe5f08c663ade2901f4cbf187a1048b11d295d5ec98e7ce7f2991555d87c0a&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
