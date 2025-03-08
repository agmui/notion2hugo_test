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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFAWQQ2W%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T050213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIAv07WnDFiolQcsUO6gU%2FM7jYtspYXPa62IY%2Bjoc0GVIAiEAwza7ET0nLlirj3lwFZZGe%2BBiUQGEvckBw7yEFvlaCEcq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDE4xrp8togyj%2B95J8CrcA1uNZVJbbMUCoBPsawYNGBK0UHEtfhWGF4a4MOd4lTv2AY3PEHqhuSE35LalXw%2Fas60X1xLiXmaJ8pbcPAMDG%2FKXGn1RjS91X78jNB02muMJDP9u2D2OfgSphROD9OpmE6qqsNPhzEk%2BtlZb6XpFZOMhltpMMlnsRQkDEPAD9oL%2Bd0PbBCp559yR0wX6tKMiiKzRNSpojNIyjM5Q%2BELMxZHmnU69UiqZEmUYwLRKqp3vN46SElHAsDgzAARCGgXOLgnkSHkik24Qz901PzK5w0RpR0X9W88Yr6J%2BNUkbhYwKRn0l0HrVMMI4Z7STytmeG8Mgo%2Bqw07AGlsl5oWbCDjVI%2Fg6CTIDju4Mvb1sBzOrwKLkhpGZ7DGiQ2Pz7BLuQNhUtu9vG%2FToJ3br9Ic95%2FanTlwoPw3D0HToC6bitM6BC%2FUwyQNJ0mPn%2FTHA497%2BbB7yCJjv7cx1mTmOhaJsTNmMRybo6vYqtFM60fqENYrCgP5Z3gs%2FYqZkFeL23NR3JCncdQh67DOndUuTLKWPJsJbCyS2mJOdG50g8%2FZW6%2F8ssBlUICFuP7R9qLw7Rrst0e8LGNkFUpQEOXU2aVyahuIy9oHYAp0eujhrUAdd8VSOQxRWClknVDumqilvSMKf7rr4GOqUB%2FX%2B%2Boe0WwjqExstAYe737B3008WISct%2BCW5QVKhHJBQyytdAEgsBdgNjmQUFrbSzSahwbpoq9nMTqJcQBkuo8sg13c9jIHs9lHmpVSIjbn68NiSYLMwJK44br7%2Bi6keZwLHhcMIu5Hmb6ikioR3MltrVkVNzBjY5iQIalAFUXCTz4pGzHQYGbyEQSaEpl6BG01rDkubwN2%2B32YDSRJtbhNDrf61F&X-Amz-Signature=716ac7ba6c55cd2b5e706e35954ab933dcbf062b15275b45686b79f43b2d7b8b&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
