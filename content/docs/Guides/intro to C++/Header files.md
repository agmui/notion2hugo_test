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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6HCHF6D%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T160946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCIGa7WWr7aWe8nJidbbO9hLDFzY92mvz2sAGg5sEgAOeHAh8%2FoUFLdrxA3IXS0wrR19zd1XqwCy9%2FubDR0VSwAoA0KogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzoStL0iUYWB%2BxOWs4q3AOwevQOjviUj4WmdrCcvnb5RfGWRQybfmFBDPrzOaFypW3EDWeMjQIYx92teyxSEQjtfD1j7oGjTD7QqPWm22BApyACT7PesipumUPWRREberOJMvim5d74RqTWFMuVmjsqC8UuuwrFQSAp3tzQW7iEkJkQ1q4MWlttIZopK%2Bv9W3MyACj5mMWLsOZgeFHJ%2FpGd7U1lLdSL2C3%2FlNkgdLVVFC8uVmCfW8RBbj0moYHqN1A79dEJO%2FKo7siY%2BYpjYmFlJzDVlsjT7kieFmP9FB6bcftS98AT9ni0MyaNn12urkAPFxlLbjppj1Wfdb5Hf6f2j1miguWOP9f6PKFeanec4jPw9OlRCWFwSPw61tSc5FEIgyK4B%2FofuvQ6d0IL3J7mOq%2BwpKKWw2dVBUiNDNVO1oMprPc5bmkfmBFI%2Fep0lAii30co00jFTBbXbgo4Nu%2BoxjssDgOYfKpcJhY612LdhJsCHoKZ0rRhoK7DK6HSG6vVnC%2B4yQtSz%2FvYXnqUVAIoOmKyNriTndnnehRxPdiLoqFhKsZWBGJSEcSepT6KTTuLN4cWz83%2FYS8KO%2BRYIyQp0qMK8O3jPgzZuW0WQUrj%2BcIQAiaKablFeRc21F6tr3prhUOSpWx6MdGX%2BTC4ld29BjqnAfw8WV3Tve1U22JQplZfzW6pgsTriXUu6NeCyNHnBqNIrGRTkq59yYnLSmA5rLKIxkIq6kcLh4DtC88Be0hLoVFO78HbMj7c3qmcXDL4hkbdI%2FIvDjhaYLPy%2B0gfkiZH2sG8PYe0bExCDfAXY%2F2xgbXOLhIVPoI9obx7Onk7tsTfKWIXzUNi5YNk3Y778lSZ0mbotdwT9kZo5a9caxxkcUZUdzZxsTYi&X-Amz-Signature=e023b76c0050bb51ceb9eca2e133f6249c77eee2232ddcc77ca75d6eec00b8d9&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
