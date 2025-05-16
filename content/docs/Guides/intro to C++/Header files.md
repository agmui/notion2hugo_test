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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSYPL742%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T220758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRJfXAR%2FETM8NoEj1Gbf5BqDucYDbmEvZeJWIJNpz%2FYAIhANqZC0VnjyQn2tO%2FaSbs9MWmNe42iwvg6%2FAItChlGniRKv8DCE4QABoMNjM3NDIzMTgzODA1Igx5%2BZaLow5GiOyp5TAq3AO7eLEkoX2XDEekh7Zt3FscpaCQSWMZ498qf6XUv9xDRk5PjlCN05TohVPeDORtefLdQgrPqhvv8rEQ94tM4DMvLTHBTX3feh27eMRgdTOIcCaBlmQaB6z6KqxywiZ6hSwPShtEK0MB1Hc4wFiyFT8oUNOmnzIANCnUdhDGrlRmUE8mkejPVh7O%2FEdAIO0YC2%2BLvuTE1Axp5twaV%2BzEHr138ZP%2B9%2Fs0DDeZB4gFUoNnwFcHZvzrxdQtZXw7QXVYRrMx0HbmCvyBTJ%2BpEYUpoK1IrW6FLrMS89VkfgMUyCPH6g9hCsIbYQ0IfK%2Fqf0APxE6Lj3jWHfaem6spIW%2FereeKgJugsrxEzqPawUxi0X9WUtD8Raj3rgLw5uPYiBoPwT89lctWhFloNS4evumqxgIoNGVW3oBbAOf%2BzAWEMYaYHMYFFtrRQZ3svVRGWOccstPtku5u4tcsO4fTTEQktX0y8kqKgwDaOh%2BYTIPoTzmk0prOOR3mliKguhkb8D1LAd7k33KdIB2fajA0vYAfUVhp0FZIzuRBseaTr4hkzwoA%2FD2JR%2FPowUopDRE6pgXrmSrSvYCsKmmp%2Frg3pmSFyXEGX16mApswDZutLREuT4hgj4t0qvG0Tq1gbYB4qjD1w57BBjqkAeFDrnLQzuFYetiK%2Fcuwy1AXDaE9bISk0Qdnjtk3QXjpN5XRxqseF5gpxL2uXVelOZcBwP0pVlQ8ESiC6Z5o%2B8OB6cW8JP3hqb9yjoMRApyHqdcrVMj1rQkLwAJFvdg0KhA2m4FPRvOmBP75viTlOHnLpgwMhOvweYwGTCOa97eOlP%2BjDOvFhJWL2NKuLivWnA4huViFRWwfTn5yJQmqrPnYNfl1&X-Amz-Signature=cb1c5fc6e840f9dd1d38800449eebc60f0bbbad48e383c788c4626c6e52b4425&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
