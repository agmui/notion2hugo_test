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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQJNXZY4%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T181018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCICf8OTGjTc9CDV1JHTfA06UbCuIgVAV%2FwJotbkagtBeQAiBzphhRIg7%2F4tFwcm2ZyHovii8Ev8cPdJK0HgQMqhgM1yr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMU9JmivoHL3yXEyB%2FKtwD20%2BOYvaD0ModnTcujdGhdB3oN%2By38SxzeT0uf3Baa7tIUh6161URRqpc9xAkFhC5CKnsxdYDEo%2B2DnFPIB0q7qQg6i8GAehbyUXkbEZkieyppt3vTEKt5l7H3Hq31N7dtEN%2FwDzbAK0CmPEvkKEc1DtUYsL3X1zchDR5lSEYrXHPsPwbYYZEuj89oXvsKogAxRkJ%2BeIq41R7ZGLWWjIYV03HjFhNn5zXLHWfWk89qo2n3mkRmRlrCEJwcQ8mPsdfSxFw15nPjR1gau%2Bx8luKUQzTIA4U0jumoCLUOgQKly7wF%2FC7%2FllUb66ckuZdJDhgG6QnKEIfTWdFQyhnBZiaJYXEJUe5C11pHt7Jpl3ejDVRAqeFgNRMLlDvtswygF2aU5S0Sxi4hS5HDsMfW26D4jRTieegq5CL4SVkwvx1FGXq3wer%2B4fwbyAOUWUiTkUVo9HhJnPgYG0OATn%2Bo97GmmtZzHjQDF5XJTUuVYA1kn1vfnvPjooeh8ttIs%2Fg94QstZx4vDzShzJXLV1Z1ZBViZWQT%2F13s5sgsYyP9CA2bFHeLiFUrdN%2BXAd3OH6Q5TDcbj296HZ83t9wgN%2BDUHREVLO31ZQBxb3KqU5Xujx43wrJQ60rr%2BKB3zJ6nw8wyYSEvQY6pgHnsKz%2FaBKl0wkQtMEknrbdHogDdi1lzB6XKmMrMq8uCiRrvmC9a4htToevCYFEe%2BmZsIlhaUNsvFzAhkynf8TZpnjaRy0Ohkke5u95ofWhOAe59FsRWIg4C6SwXRaulv3a2S%2F7AFxzM%2Fy0H%2FOxFPNmh8nDm5N6Ho8iwqeOVxKsy%2BKrVEoc3fOgUYGLamEqXtoq%2BYfNq9QAMEYMUuxBORaUDoTu1HCr&X-Amz-Signature=ae997764cb471fa1c8bf75e18097ba0331b5e5c934f17cc6985a06cb9df69813&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
