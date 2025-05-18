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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4XCDBGT%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T033841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBQrVRVoLUzClL40xWtiA3B4gOpR93rrbscZGiuG7dLzAiEAmOmyeJhSY%2Bz7NAd7kMLf71wjol4kWj9bc%2FvXsjCUaz8q%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDPP%2F1ZiQVP6L8esMKyrcA9MgNSv6G1NZdGNSXHEc2cxLm0xr%2BzvlOS5xfE%2FIY%2FCBqoEql8zxwfpmeV%2BOdHRmmGU1evCIJ1nNR0Ip%2FP5UStaZdCiwkSLftpsF3PQruIZcgebjZeeDfzEGRoHMUxSy2qPjk6lEnzSA7f1P4yRXRURV%2BB%2Fli445kO49LqVQvXg7mvpWE5fFlkun4GcFKbtjpEBPiHp3K5LzQkuX07%2F%2FSMy7kz5r4E5vF%2F4dRQkaYKw2JhxDBgLulTJ0aj8a%2FnNyMsx64coqeV%2BXP%2F1ce3%2B%2BTwMNqnrMMu%2BkB5j6dZXxCKEJKo0JO%2BrOafLuKHntBvyqrMuU7mRA79ArYc4Hpp%2Bx9UA1XK7U6t488GkindB1%2FnMokeEe5onotq1ql%2BUxlR%2BLE9ys4EIfQAHuHzsnQbZsC4HjWEi%2BWBJql%2B25m7XDHAV6oiam2KFIApX%2F2qaWiVXMEY5Myzq4k7hXKs8KH4ts6xmpjyQYkMJlps%2FgI0MGiPP6cL5f3xN6thcAp1VjwDasOBzvIu%2BXZ8RmWno9Ke9PGIn0VXc5AjvO4dKpTuWJ5JQSF2nCKOfv8dcylLZQzDXEPpi7qphyyFGC%2FfFdFteQI0AmR77k9ghJPqI20IZRIzh41H70bhaJQuG1d1v%2BMKzXpMEGOqUBprLruaSDkEdbgexOj2M%2BLDDVyUMSTyAfPD56N5W3OmYKoJDfiP8pTA25SzmloSveU%2FW%2B%2B6wVLpazRq%2FQM5x5tchaY5sQUWmA%2FJti50ghIZabTNYypPl%2BKLLBhzgGV76mtyMabaYNbCK2eWxWQ89KqYD1PmMEpxzwuAyf%2FuBEaK6UYQ3ivUFPEkaVd%2FEZuKgz2OXQG2DJzLYH6jBdKA1lKluVP4Yd&X-Amz-Signature=def005fb6940b365728634a14a86ef1d48c0d8348967b8b4f7d6412decede705&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
