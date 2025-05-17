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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EUF3KAI%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T170148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuTsJ1nzn8A3tdVuO4RqtnQMH9c5YPGKdmBhGOOpdt%2FwIhAM4e7otZ%2BPrkAw1V64llGumjQVw8y1jKmEDaVVq8LdJvKv8DCF8QABoMNjM3NDIzMTgzODA1IgzaM%2FbacuLC62pgfXQq3ANhacAxtXiEMgsU3VT0vi095MY8EMw19hyOInYf3OwOEwDWDBh%2FrpdCNfh6FcK6xi%2BAqMRgAaDXSVguIx4%2BHw65UzQ7rr47iYf3X5cVXQ8MVnq5%2BBl0IQlqq4nXOR8HifJMmCsQNYgc4J1HA26kZoutbJq5sguQbCcBQjw1Kyzsv5t66a51InGgsYwkqXoDxbM%2FllUxlJfqKSdgjo4d2I6nZghuog6HdbPa%2Bpm6OrLuRilAa7QdPhbsrL0tG9LozkHr4FT9xw4crNu8ymF52qvLVZktrylwdQhPNtg%2FX4C6GP52b%2F4KeXuoqnTTsyp%2FgLxroQc4T5N4W3KGnB%2FlURaPOyfBHSPV39FzOtZuuoZ3%2FSKoa8heZgW%2ByXPY99b0%2Fn0%2BzajgU5r%2FjJifBdgdOwHosVnUn19hEdQ5cfQKY%2F%2FytMHQ8WE9GBVZeCQ2EQRhtconoQB349pPxR2hniaNXs42kXDGUlL7pEzgapF%2BgzF9rzttZ8x6ovJhl0WXkJW1btdLB11Gw5N6xfnd0AX%2F3xEpx64W9vUMvs2ZYuOf0Jqaf9r2GwHeXCIJQE5pXLa%2Fyt%2FcLQT9Envbj5d4zMhHrTATFzfnqPm3W13qlsigxdb8f2gXoMOGHSVe1MsUsTDttqLBBjqkAVV6DYp5IwjwxAFzZ8o6viawOaBLNCleu%2FibO78BdndI2aCSFVVESF74pEoXz5FeQeVlxvQzZeWFwfPTNFNpZMEZ908rN8MxSLCFhZDVm7Ygqc8EDFZaPvz77sJxnXGR%2FaKSraYbddsJ%2BWv7FPEJD58VTsKBMyPcVS1UOzT46Qa1WqJpul5K45WJIawBJmdZmAUe3wMJ2XVSCOVUBVegTaSJAaJ4&X-Amz-Signature=5b7c82e5e4acf6aab4fb9d5694db8c3951f7184f782d0e71fed3d3cf2b637565&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
