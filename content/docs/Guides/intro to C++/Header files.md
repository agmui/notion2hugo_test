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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIYNRLS7%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T070802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuFLzw3Dwq9gPWE3XMLxEZAEV620%2FH76%2FSm%2Buodbj5XwIgbyrPb9v%2B%2FT5aXLCG%2BwSAL4KywkdI1EqFvtrfcyuB3x4qiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF0U03ivnidJtLuMaSrcA1MCo2j%2FumzYcEjzR2eNAa4iDylWGNS2MZc8Ns%2BBuwn0eW3mExPuhVlELyo89Rpzks9LoAK7ijETzvM3TLDF8OSQolZ%2B1%2BGt3nuInow4hNgPQZ0nO%2FRIHIpli0QzwE3TyX0DWbHx28bB8DXv3f0gRDwszbv%2FjGznipOxPlc3YtSbA77lhS%2FHNCJAkVj2LcmruX%2BG3jeVxQJ2ikc3wv%2FXDd9pIlJsSYoASKe2HTWQYseD32F9I%2BXsHFBOhUQNw0mwFytfjac8WHE1Vvsgxgvu0%2FMO1mvEJbaadUWqARSggOdGYDH1P46i9kRE%2FhItMJ1HXYj6JrvsLj2qY9bFbQtaSBi0Ko8A7UcS3aG8dN3BzzA987b%2By9MlwpzbS6jgLDT98zrkBoC4bRp7MXejZv%2ByoRfvg7zjXy97j82U%2FYs5A9PqNFAh4SNd%2Bs5Bs3isuYIk%2B5ji1JL0Qqa7XTIm%2BbhT27LVqfN9sneEUkT0WUZSuOK9fuBWurJyvmCgvSQCKxomkqDSj1zAyxj%2F%2Bi5lZ0XVU7zomPkh%2FizSF%2FJFeg9lIeUu39KnOCWZiCWtaThxZQ2T9rjb8%2B%2BJj%2BKpq8%2BpZ2%2BoHMIakLQLeY0IZ%2FvJcVfEVfeNR8AyD6sD7OBFnVt7MLiFyr4GOqUBtzxXG69Gb0c95DSTx6bA2KNBdMRwBlOvxaTeBCUG4axjqEvTzett72mfQGVSZgeaNB7LN5iH9OZfHm%2FIy5ga2J6FRrSv45BesqixIFKaJ5ZJsc7pZJvwClgqNY3r71%2BIJNGNszXis7rwcmNUzRbIErjZ5prlmyAqUT48IXVdBx%2BnyAxp65XYaxEgix%2BWRaQQhnmgQoAbhhbbx0s7N0lzAk3U96TC&X-Amz-Signature=8c2a5a6226aae2a8149045ca7d47c44a05981febf18c25e3335381549074b27c&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
