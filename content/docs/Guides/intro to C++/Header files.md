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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3CYBPTR%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T050847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLq3wLHoZzbE5P4rvBSJJWo%2BRXniCDaZx0dnto4rbnsQIhAJzYjU97t40J12S4LIaWZcBmECXGu1PCTYLXsOXWdwM5Kv8DCGoQABoMNjM3NDIzMTgzODA1IgxlL4oxxJxK52XQ6AUq3AP0Dq4e7DfAQWP1JQpzAV2yK4v%2B686fZwuhkHwbdL7uViqVOl9te8aq6X0wmUDyof6j8aoGODjcI%2BHQZ1qF1MDowQ8JkX5Rw8krKiT2IFLuTbE2TqD0VCQoOZMCfALw6Ci16uYVuV4jViHokRIuiusWlRvQzPGGSfecofL3HTcHlZjwog375Z8zODDDmWV6hgbsl3D8hH7I9dN154SSRQbKrpnFdJlBXocYKBlq1oFOR98NmEGjZHgtKm2lytb%2BZtxzZeDbLYIwF3YJC2NLGuzg45aRO41lqwKIwui6%2Fl8%2BJA04jTIuXf34Wy%2FbXfpNdzzMNQ0dMz9Ky9DMJS6CsjCr%2BtGWR1jlTsr1JZcMoX7kZq8he94n51gcZkRr2QjgLrA1rJD9YPkInOWG%2FW1MQ4Jx1zutqUU%2BWs8dwf3wUWsZiWVJM2OTzDRqyIvG3ZwSmkizfFgSpC6MHTHnVHBdc4kISmgjN5iK9pIN%2BdjgQw1mJ8rrkM0lvJkKVP0UtDhBVWWjqNDpGbSnKp6gmelEtVxSb9IuL%2BlfXD5JoVhxr3xNpPk53jCA1wqU12N6SHyBTtEoXDu3wHnDXnVw%2BZ1R3QeETz%2BwHB4IqThVjDtrAwXc%2BdyxcG9uqhPcGzSOSTDd16TBBjqkAUEYWQkFv61avb9ef8vw%2BlyLK8niSY1a9aA4cixg3VYBFHxzQmh9be1MS13sn9HuqAGQaNRtPIhDSWwigJdmEnlrpLz%2BISLc0NiA4ikJD14F97OKWXRs%2BFa7SWdTzKGByk3cfnm3fqX%2F5yhvNKTyvzOlrowWV0WUQlsPdl8u%2BHFu%2FRvsguBZ9v5M9uI%2FuMgdZPH7ocqodBFv8vWD22r9QM%2FGWo5D&X-Amz-Signature=943ff8287ee130a7caa8820b37dd878217299c30978b0561942b1bc795c0487b&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
