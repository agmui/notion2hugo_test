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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCAXKNRP%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T140105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFbvWxpgpv3umoAr%2BVZNNzbj5DH0deiKhGr2VjEguHzGAiEAp36l78J7%2BUOO80AfEoLC3UN19tJgnakMu1dLeQUvilkqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLDOohO3TUjZ2IKISCrcAyX34vuJpOBDFKN3SUCLHIzJxjuR3bHmA6nxa4HKw7Xi7o3EdD%2F2gt9fu1x1Y3UtvJ3xP%2BtvFumihTj9hZO4mnDpaVxAjJXYQ4gwM6KyKqFliMTVRMr5b5jufQIIKJqwTmk7vNpe7ojz2jg4EYRK6UAyxk3z4GXzIQgdWa8b1hPskGvdN%2BwhFO4nTxV7KcGos7qLHBWGTHzm5F%2B04nDTG9gqf378qBDcgBpc%2FGfvsXqBRk0fkUcQi972xEvwXRR7UI5a7cNmD2H6YTsQxNkDNrJQDZ98P3HpXXm%2B4n1h4X9SCtR5YRcZqlDYQzzSqytLTh1JVyeWYPNp2%2FR7ovwCELJ1Fp75Nw4983k1QgFWFJrZZNVSE%2Bt7D7zp2urUipDkx3FDoCBxK8bce6BKhm0f4wIH29nTGvhKW7L1h6lzEialY8Isjwotyajq8Nv8y9s0yJqRCOW%2BUp2EOCvoFk3lxxsLUFCmmQI6dRoRYFDpicG9usBOOIzPuQFPC0bG4Creth8w8NYTU8ANa5HM3DAhTGk1exwKmkgEWrQ2KzjdKwe7Woo%2FL%2BoV13uhjhtr%2BSejm9CZnAHDuhfMIynpNB9HivLif09EaIHhDHgco%2FRikt0F2L28DfcRxVcV6S27MPelrb0GOqUBg7u97Wpt%2F6JVjoHJ%2FhHCJKa47gXH%2BP1v0DLFPR44IQQxW665YuNo9Hf%2FGHRqupwG0nms%2Fh9euWEhtWP9iBlTroYCKSWkK8djt7FOshXakUxPxAqBqD0%2Faoe3IDg8KZZ%2F14z%2BE6IOFiBCdhqhe2W2k1hZXbB%2BARWUZM%2FS%2FIEFAfPTxXcIyzn5C9Elj6k1O2Spq0ipXB50VNGjSwrlbCEiXhWtOYnK&X-Amz-Signature=1820aa904690ae6bdd10bf5d40459bfd3c75aeee3fbc449790e0a67e6a5aedd5&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
