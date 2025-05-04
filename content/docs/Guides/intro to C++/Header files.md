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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HW2FJ7N%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T160838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIDMT2wlYpXSb1%2FP59CDZFQ7TLRnkRb3UKUh%2BYp8GFSyIAiAEV8mmV0ZgClCuve0tIZqjOir8MkOQTtKH9z%2BhPDq72Sr%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIMush%2F7DTG%2FZxc2RozKtwDSzn2iDHnDAO9RslM%2BzLbZjyL%2BsR%2BIpQTtb9LyC9yKmiLei4rQihEsmdRgUpupElgSM6UR7fQYkN0lvEe%2BAS7tRgbiqrsFOG9UF05JrmiwotgJRVIyMVGLPTOwMzXgrOIHtC64T5IekM2CoeJSe744sMYCucQZpXly1510ZiZZD7b0SQKckwJpHQnF6VZGoxITK3PyZfbTpdYSQPaIdJ4lzf8v5laLdD31fPSXCMpP1TL43NrSuUNW%2BTJKdkhnVGVzAnlT9thtnEL8cYsvdwqPi4GCpR5JeZFamI7%2FFcwivkeqRM%2B2Z5gC0cYADgbr3e2a2xYkjt9lNzimmwlrhZYMl4wFTmmD6AC2QfwYLJasND1Eziit6SxjPD8iez3%2FY2dNllu5eKWcBhg0YQzrDyF1fnRbfuwuZghYvbwurg5kqIDE%2BBH6zy4avlyba11eIOctPFh7Vnr%2FTcknKZ%2F%2BGDsNoKAXjg7DuHuE3kwadUoLH%2F8CYOiJhvWENdQ0xRG81yPmkskt6WN9aokN7VRTs6%2FD9N1q3HrpGhONuTad5jbMBjHBMSle8KMiO%2BhNXPa441zoMg9GtNS0sX5L79HaeI3%2F9vd1G6yOLAmJrP7wkJD%2BLTb1pYD0VIPJuKU9Oow6ojewAY6pgHAXHjpHjEpANwD2%2BELpsfaWgh1QAcTMF1I1OeLN35790WqCU0OdwTqFASaYdCtcp%2B91W7ZvpltqCM%2FkOnfNunPxQDTFRhLiWEcJvPQO9Quy2GITgt2acoaTzJxzYGJn34v8aekozgzmfw8upgc3hCas8EL9NrnBTeWxIkkAGkn2lxNojs5N%2FaFBuhmunlIHXfdYAFYo0L9o2wLVZhfnviIz2ISRRct&X-Amz-Signature=4d92784638bd93448882a9b650a037214d13380b6549c463f36c756af10b1054&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
