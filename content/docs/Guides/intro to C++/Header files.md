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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IXDXQJF%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T121354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQCUfgjBzWHMmoJt5I2uIDjJCtQvj7M1JP1HMux%2B0H6kmwIhAOQVBj%2FWH0pMorbQt5bCZm3GLyKR6%2BDluUvPQL4Gff3MKv8DCC0QABoMNjM3NDIzMTgzODA1IgzqZ7KlfeWcF4J9zpMq3AN%2FPi8xn%2BeyTJDcruuWmdcRrrOucjofPd%2FJtZluaH3qZQWAn4OdI6E5Aa1TnlOBTru1ipufn4azug06ZjTW7couuTEroJG5SBqZQuXPOnFv5FURpd%2FtJLgBzLqiQBbRNJQEe%2Bfnra0ofoL0ZfshiURIqN6j%2Fm1rq7vxvAHNqs55bDLbQ6FmHncP34RLJnO%2B2csAmXsRenUjA0XEHt5PFGIKETQnfb2%2F7Q6snzCl1mPWkpq23OKhXuat1jDuEItWsK00mOmVt%2F07%2FpN5NyCgSKPKdJhrsZWYCNh%2F2wc6sfEyxPHMvzNQPNBOvi%2FAxKP2cUPifrZBP%2Fe3ftX6HPIuhxrNbk56RX4Edu7k4CQhCsOetY7xzLSRABhNcfXMueg1e4ySnIoBDuxzzzDmH0Vsq8xNsD%2FORHMBUzMVWQfPG3%2Fav72fblDqZErL5i1rwzAqYRNvxUvFOKvKtt%2Bg0GGFszF2NHLW1SzFVmVmLM10KRbb7%2FtDq%2BhrG%2FV9BU8qNqbj6mgWmgSEr%2Bi6O45VjFCg3tdRZp38dZJw18%2BvsWuKUqI5U3HGmdr%2FlZF7tGAnoLWWeXtz9196UcN04e1HaDw2%2FB3t6dTOwNpq6hVT5lSN5TMznyGcwuaR%2BjVFrskDuzCXwbXCBjqkARI5hlVM1Ps7NV8LTfWI1O7HRclnVkmpPR1HI2Fz70%2BttZDEVxT6x66lHOvCrmfj7ggm%2F%2BG1l6ZNEl9mzXGs%2BwFwaQezla%2F8wn2rTJeQfeKOE%2BZDj3IGrPe80B1CZaHAHO%2Bk3GyOzNBNSDoQWIG3JakIlRHmstJ5vN0Ldx0YMMpLY3OnJwmFzZldSGXTeZgzSMEMMxDiclbAn6I%2Fv0K%2BGns%2B7zjO&X-Amz-Signature=967fa8601c553bb2f138d7240f3886c842c353f3f5c11fbcf2a80bcda51fc9ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
