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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XALQKD3V%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T210147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBFFPXCavJuix67SsIKprsj0C615UrUG3wdjGJFN2KsaAiEA3c9US3shRbveVAYm6G6jbkHkvAN4IDUTCuU%2FeryuRxsqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFRhzEtO7%2FQyNx%2BmXircA%2FNEM3lViwCkzWYsbramssczowjCgcvtxCWZrEx9zPzdFMdXxsHdbRlvbiuFuQBqcijFnISf4xiU3PXhA3mA5ZSBEqaiIlJNoL0A5Fz1GYFz4RLW20JrCieN5RmfwpDAkUYl1RtzypsvCPapasjsMxNKe%2FZ%2FkTYUijBQYvdmXjFQUQIsLmVuULACTptEyhcoy%2FqHToy12wpA%2BkeHYjN%2FCQVuGmuKs6mIu6sfPSWB12oRIttJT8RcVFWJ7XvVngDc7AZFmN0K2Dn%2B4bRs0sHcmDc8VlB%2FimVqoJAF0%2FrlzwYEYc1IMIF15ZHvx3mT6KVK4x2t1u39AWOr372soBXd0Nj2UXZnlKdTkH8flmH0LUtrtO8A5DMgWHcD2TbGBMYu1lPDyNyPgJUAzkeEGaI22fdw%2FbQcznmO6o6lTrOSCYR6IVaA2AdukNRj4FdyeDTlzyGC95hdbtrGg2xYQUelGTG19odYyuB1dWDDNelx9wDQdAgATuUr3kUeeAvkEDOopOVyJO%2Bx50DaNNXMxG8Nj1kxeM8WjENaaZ9aVqTTeMCegmp%2BQzijReMHMFhT2zBkBtLPNxwnlFUBDOGUc9oS8w7Naea%2FQm8q%2FKV9HM3MRrwXEMn5TL54I%2Fu9HnMOMK6V%2BrwGOqUBmYAlYF0nuWqftU%2B%2BkYREpeh%2BZ%2FXlc1RG2fX9h%2FCWJBgyAjLmpgVyz24hPbmwmP3iNU4Zpk3PKVm67suw4a9ybttKt5a0vfF7y0PaCCcIUPC%2F55qTZmKkT2ziZUrbFEokzGR71%2BxpYuySrS1tojAu3rjwivOVSF1fO4RAm2zUW4DyLAKdYWUAzupNCNMH4t22akTE0WEqt4spA0xT%2FkkDlSSN9eAq&X-Amz-Signature=97c3570d5de5327ab64b85fab735c4f9893d7d9d8e8f1d9204d56bcce03123cc&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
