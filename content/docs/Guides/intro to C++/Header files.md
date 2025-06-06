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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDER3BQF%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T100950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDea39qKoJfVmgHZejtfgV4Kw5HecaFhYlGVMLlEeVVOgIhAMj7UbJMoGZPxEqq1fDLhw9uwJvN6xIRU%2FSQEcF1y7iyKv8DCFsQABoMNjM3NDIzMTgzODA1IgxPpFjmI0IJQXEDo5Aq3AO49mVEUpUV%2FeY8w6o7W0M%2BbZAHNAIuw7S0tXLA49%2Fl5wuRynCV0IyG4hdCJwwYZX%2BY5zZvzrM5C3V2FjgSjzQhnm0S5eq8F%2BiFlrNlN3aqzAGY%2BceOn%2BwPILOfaKCuTNvyG%2F0QCNXxMAlV78Rf4DFeMPngtIzQL7bWcc9VN34%2BvdhA1%2BF3rrZsxwVzVPj1NhRxwiAdn1cf%2F36q%2FmyHk91iqwO9QcN2OdFzV09QxaviThJ10nX%2Fwmm4%2FDoI5GHv3fwVbgGKsQrmnd3jOgG8yUfPt3aL9jsHOU3SBOjhZREN83QrPLsIEFljSXKCCY%2FKqnwPgjOQHUrt9Gv%2BML6BqAvraquzh2W40LRU50BXd2qzpvKpx7eg4oq%2FQosl0THGRUUwFDdLiBST7VN4Fos%2FGRF%2BTyPOJAZuOzT6stnSaNUW2Y92fZt6VOqOWd3PdVWh6l%2FWngwAJtwJVMkttg%2FMeXaukrQ%2B0l777Gi7fagLKePtaD8nS%2BjXAwNrRBuC9ejAhfWynvwxaA0cAwGT6zd1ZtiiLm1a5CKToxKr2XdC72U0UrgH6WPlvLEbk%2FHJD3AXB11VZ%2BGZmA1%2FkFTU2VQe%2FDB7O6hbGaWgkghuVhbo1In%2FCoXNAOfsmpiv8q4qkTDD6IrCBjqkARykCJ6g21jIyFhiueLCr4p%2FNmYD%2FQPq2mo7JMEFQjQ%2FS1EsIUXAMSp669qn97EC9aUhBjA2MBbw1GzYUroE1SkPM8Dwwh%2FX87Laxlv66IuM6tLN6dBfQbPg8IZJ6Puz9%2Bh%2BgulJQY1xSJKM2QitXEexoJSGt4bbGvx5R6HhP6uhmvGOEchweNDLAdKfaCcWMj8W3VpC9a%2FHKKKtJVTwXWSGZdhl&X-Amz-Signature=b6e3cfadaf10d75af20ea26a046d1fd65fa53c595fed52e229e86bbe690a38d3&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
