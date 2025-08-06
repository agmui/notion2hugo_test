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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6CKEK6G%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T133448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIEg8lyHaLvevuUPJPnllZgrtvoHP5rRpGj7uq598fWyDAiEAtQYi1M44zDpvgSg%2BKb1uhF0iVNGtF1TfHEXYCwAl4s4q%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDKBsSAaJN1OTNVZHISrcAyZpY40fd8iDcdLHyVGUHBiu0h21ziY0gomADHylNIYB%2BZIEZye1m167h7uQ1ZJnNVY0%2FJrkOTp0n0pTp6fe7SJCZZNJrH%2FYntg%2BqGxoPmxkdzSfLCf5E2PT5kMBAxvG7ojPJduBQBTOchzNMifkTJ8KNGdoPAQ18ZHI257gsJ5Js4ySkWN1BZ%2B9mkXdDAsm3mJmfd2SXNgPNUi%2FvmLWc2Jtm9c0IUume2%2FXbJqwdDxrtwb1dywZeONV5Et85SPcW3XcAG0rolpKfZx0m9zw6LZCWjg6WTF%2F5J4mjE1CJiNyNkCJCmbpVcPoyOlW%2BqGxCMCRpR6GRQeHKUU0aNVxUlG%2Ft8XS%2BdlnHP37ZHMm%2B0Z9CDcaOCDfdvsAbPBaFvIhereEGqWW%2BW9oqG9v4Ramfk%2FEedU8CcUk9vI7LrtumAvkraRrs9G5pHR6pxW1SkZxCbNGjHHs%2Br7iXD1klnhyx4SIyvi8zpj2V82p9NX5HHj7oAXu8pSZaSFxAEQLM%2BJtfIF%2BWfh8Vgsm0sJ10K0l%2BQh4hAnEn%2BuSelTKGUvzWLw%2BtJwPM%2F1llnPN3U%2B4LIXGCv2BC6qdAGUy5IQdhOE23qctqhEMIWlXTK44cRTXjV67EjCQ%2F5Wf5SL5bu7zMLquzcQGOqUBGi2aboXUp70E6NI3sUjPhwS05kxuUHvAQ7erIabwWl%2B85WJMK0Ion2JWgKuQyez%2BysmdG6CNkiiRKmRy3c7ry%2BeOxvC4OR%2Fp4F9ik9%2FzGOiX0eo0%2B9itNVKUzrE1FQZJ1h5UafConasjz%2FutPs%2BAnCePhr6KYqtikyalLg4Wnj512AAvEXbMbMUQR%2Bw6kj41Qdlz3hhZ6IJxqY479Co3ST7PhEtS&X-Amz-Signature=948980dafa654a0656ecc552f981a979b0d445793cc99d5221eab7abb0b351ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
