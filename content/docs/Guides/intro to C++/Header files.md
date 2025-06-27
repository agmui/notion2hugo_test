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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVQWEQWM%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T051040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIBFwpVZ8KSfnd3WVfAWCF8TDEN%2Fk4YuY561R45faO6USAiEAgu2rPqGFRcDXTVNqRokqxhLdtFylW839niV6vAg9S1Eq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDGj8LF6rHuGLKZ9i8SrcA1RClN3tNPODGBF%2FX1dKvQEHOwjFiI4W8prJE3hUagRSmP9G70CnP9IMWezqAX6zjWqVqAY6Jfdq5a5PiUYO2MNKa7hiw6o05Ja3KN2SxFvFZKjFu97UAq4A4Ca%2B9OnlitCajR75rn0buNO8KDTcQ6HtLbI88AQZQ3Ocew6IefvpuZoECyhIGABuL%2BCZOPRtXp9VXAoyaBnG2WDnwLCOG68WJQ1JzXZUD07PIn5edltEih8QCgk3KgMh%2FfvvVcnGqFRLeUVV5izJLGtPVPbL29seizs8QH%2BS8dyf3VKLgmRM5%2BpA%2FDENwUM6zE8SvYINxkvdH5fhb5LLyYa1npAI0geJDnhr4Pa9c5DI%2FP5gRcucK3gi63LTL0IJRH%2B6ywSQv1gy79n6kjxuweO0em0lVf%2BpfqKaR%2BkdJBRtnYsxSM4go5OCCyaUCjGwZAfi08eNTR91pnZF28wMbFAlWQTGHzFUonLRN4wqxPk98G4199fSVxZRXEb8FqbzPTWsxWc33k9sYBNmux5F%2F7yBLwGQvTUEe3lj0Mu43jCHUr1vktEVxfCz0B7xgER%2Bpin%2B09LLmUkKD8JhbREqyDU7HtzhKijDeyyeEUMWpeEfHZErEl2j%2BoU8GxQbsD1nVy%2B0MLjK%2BMIGOqUBc3AA0cJCf7%2FfCH3MHV7%2Flv668tHxhck55vnLG%2FK38dTCAcW94jdVtJg%2B3iiVUHL%2FzZ5eYav3dglr7i1wJtfPc5XaZ5x9CjLvL8Z2F%2BO0cqDgHXZTMlGlxHmUPLOP30KAs5JfCRo0DIDFnfa3dQG3jCAUqobBzzpil%2BE25aPY4NDh%2Fh%2B7VhN9J98qoCyA20dBTCpNJndQiiyyYfkA9lAeGoJ29Z8O&X-Amz-Signature=a110b0aa326a572323860b70221b5e23ebff72db26286fea9b0db1be15e1ff6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
