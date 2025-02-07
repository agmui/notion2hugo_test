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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDEPAUZU%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T061104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIQDt2AzcCfYUSqq7mlYUATrueaCz6c2%2FyrnQgzRPDl96%2FAIgRvdw9S65e%2BDjWmWHr41U4Ae%2BJaMC6gnj%2FyxeIXCM2lQq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDNMZjFUfhPTn36xm6SrcA3JlG9gOz5VYv47JqKlnwB4U69Pzxt1xGxEEcrg00WpqCteehQXN2MuuornM9DWGYJhfWnFaQK%2Fg1QmKU9P%2BpxpYCcoyWMSTYDRnjcMfeh1tcbELCGVBrWjyoh0%2Bl7Kkq7MGyez6n4SueD3tsEzHasgua%2Bnpr1S%2FNxMR9GXPEkbPaek4vuwnzeJHCYiNt6eQyjMPSlUYmoliqLSe5A81RfIivYTBjs1axCVt4CtVNGbmvXnU5EbZTcb1zCEvCq7tLp%2Fvss8ukkVYZMXGdINvVHcXhv6jwh%2Fo49KBPAofj2F4bbaDTEpeZtkKWNeKQJmaF0FOza1U3xShbLqbm1tuyLwSr657ai3vWa3AtQaaq98Ah6ThHGW8xAL7UZWOCwX1A56OGFPkXP0Pe993QcmogIIKc5ATFaiE%2FAfYLk7tcozoRU1zir%2BBBfS8OGGfyzMFCxsK%2FOrTavM5QEobVaarT1Tr1KhiP%2FBDdXfNEszWml5GyVbNEYkLxxKQzYvI0QqXvXVkN12LcpknJ63gxnRR2kYh%2B8hNVpNMft87yhJO1LHkJmcfRaAczp3as4ARaRjg%2BgBXLUKMg7J1VocPmgmP%2Fd4zqDMIzM0pNZbZt0M3g%2FapHGcR%2Fk19fUymtqbnMPvAlr0GOqUBOfT5rL9isg1Zh%2FtV4d1BEjBbm5yXkpRHyTfpjRtas8JVNxpRq5Ly33NyuKRy3EJCmG6RA1ei0j8BL%2B0F%2B41JmhmRcXXVwsyGfPZ1VOKIcP%2BomA1U8eimwoHv3vjd%2FE9l7GSp1mXfECneSxmfCSdCfE5Jl%2FLb3XhAsVBApf6R7sSPjGnJNazJGSlJudMzkvgunylP8%2F%2F4LG2PMVhjo5G1kohMQ4SY&X-Amz-Signature=d810cf2967f303e4356d42c95410809b806616f8a52b39d5eef51fc5e34d3bae&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
