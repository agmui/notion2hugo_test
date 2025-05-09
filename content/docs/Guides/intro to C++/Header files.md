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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WTXGSTD%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T121456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDm1BmyRh23Bk1YRUZzrHv7qxHbbeKZ7vl47Xnt4QXiwwIhAMJ8eibihEGa2dXEnxdOvQ6KMo0HUPeDEgoq677ayxBiKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzndpoznQjB1LJq4jMq3AOgieEbXO%2FipgKq6FMoLup7NBhlhEzqZjrEUvNOi9xgnX9Ab91eSc2kAC%2BkyHZlGtDQXqZYH4aqQbsMTUoy2oH5lbXc9IUtoRxtsKsgXuj1%2BxIeqWKKwCGbc5Q2bActekRDIT%2FshHRdWbPw8dcdwzrwDwMYQZgM%2F45vjIw1DMugpJ%2BT5UNlbmYvl8zONhF5Gb8Dfbn4mEjxHLzoDe6GumdRKciXp6ECsDUVX%2B63VyKJ%2B5JpekzanF9d0ETAg1Va37CniXLfzMRpW8dtD1fehW29KFGXQQJO6WGZiBxBCTbdTNVsKjn4KweWwwjEbsSOtoMLjJPnu5ij3%2FJD8cC0QlyHNlhWbWVnw5LgHgpBy3nhg00N1zOwFsrQ30n%2Fm%2B9Lblmw5jUvPBYE8FpUPhXDgQWNPrx%2F4npBALvDrjfvwrGjj6Ov09mCLVuqA4YPFh0GsSVI4B7sudwjhT9eQaepZtaoRkrXIfVS7eT%2BBgwp9ILtFne06NWCU8NWMn67KuzG56Q3EChtLaXi7wnk5Bgc5PPkoEIJnLCtEzcaX2sKbr5CcNCMT5fNotrnoa5bG8nkTB2y7W%2FNmzqf%2F%2BDpkRp017oB82OzTYLI2XQuTL6ZeD%2F4L%2Fy1I6gsyHkAe5nzWDC01ffABjqkAR3RHoixbd4LTLWbZiAfUD4%2Fl34buUX5zVD8DC2HNRyKu2s01m%2Ba7YXDHEMxsxTeSiP1rA8W91LsRBFIbEApi5Kqdiin7%2BpenKXy9Gf%2F2Pwwh0x5sKVS5tWmDWO02pHW4EwZQgW1MA8GgvNXVcHqNBfiP0lwC6gOJulFB0PRuVqiU8zQp%2BFuAvu8S%2BwNXSlUNYOfrJ7nFf%2FiZgp6HTmrfnJD%2BpCg&X-Amz-Signature=c21dba7471c038f0bed549ef81483942ee00fc1c6fe05948347e6aa8de89720f&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
