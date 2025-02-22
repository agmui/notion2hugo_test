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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQQ2J7TQ%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T190116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxNS1CI1ECqirJLD03ehQsehEGhYxxUyn%2FhV82H%2FiGTgIgDsAzIW3yrSwm0Fg6c9976VHMcDHM7jZUg537izZYDOcqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIp87W7jvOEjKUNd%2FCrcA5lHTuvJSf2vcqTW3oIZ7GV1usua0GTS8EGggIxzzN0%2BXqWMqMYlNsRBUYuchRcWuLdJWp9waoj13GLuafEPbz8TN385VIr7FTZZc3cAb00EezF0yoczw8WHtiS1OrIGkeIIBDNBbhF4wKvej4yDLwLmnuWTWdWJMfqjDwL8lYiTTDs2UFh3%2BXXbzxmD9nu38FtKA3Q4WavVW105PB7chWpKMRecffRkJEMLdFQEqEz7EyrVwaLgN7PVii52U1c4%2Bj1hFIGY9MkXlOuZ7RsxlvCjoSbZHH4YlzKxaxxH6rfVbqjniIZAXd6cUICuH%2BJR9zzdmJyPsC%2FWlSV2%2FDncy482MCEZdQzoT4apCZkyfE6CLyVmiOTdjR7sPp2wIuvnvCmRma3bdNMcNsT5WqHg1YYOypL%2BXcjzzUerGQ72ezTHo7nrpmzVdpjNnpM%2BI63GYWltAGwZiyANkzAj73dcwaLyyb0IEbe%2Fr6Or%2Fw5re6GIgfuiKgqecLjueTYx0Htz0SkZYKPmm5nNiFyot3C%2F6c3IydD2ylffWcK1qrc2bAJCSezl%2FrQud2OsuRYc9BjnBn6WLJDBO6cSEBuuuWUxw8RoYKC6qewN4DTuIwSDLGTl9OaKOzEZwHhbWgp0MI2J6L0GOqUBclislrhHFiYP%2BGoPgYMSkTgJr388vGpsnQM9gxQAwE5GP%2FwJPOYHq0v3YKiWwQcH9v4GKVOf7hWOUbMItrTEBmQMzHzqucima8WPwizTKT6HEk8PmjkyNW%2FM7hp8JFmRIGxvcZFjO6AL8GeveiHWYmks3xQqXDQ6eSlIHIbjEBy5SkELNaR6bTxNvjrE5XpOVyfw0Wjdz%2FF8p7Bi911eTcaOc0K%2F&X-Amz-Signature=82f2bfccb26650524d6305c5675d3425906610666a8e9c50e3b2f83f4fedf9aa&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
