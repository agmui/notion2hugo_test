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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDFMUDKD%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T190307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIAeQhoqxDlct7wRXf1l5RzEzSlK%2B0GH41l5YXGf738KLAiEAmAnYOmeqjGByX5uvEZouf8PHDoAL2pwJ6iZaIjLYbgcq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDDpGkuRLylorKr5NByrcA2Qoqj2gozuJrIOVuubv7yBQHrQL3RrcwoXo5vXfW%2FyZiizo6h9xhKoBmAr5myeFYPKpXe9dDNVLDGRjM8wozindhr8VnWc44oAEEASTsShJRRvo9MITmOX8SFR5Vy3UX%2FVQ7kyPmHS2m1LTJihueFk%2FMjU3ZSt90RO5HfwW6eLrKofavOM4CVNAnnpRNInh3sjPjgnhN7oR3uH%2Ft2lyw2sRZ3hsgQD58GuMMEG1ztpaGJWbfZnzBkU1tVlWi%2Fxq508MYnvJjn%2BsoFL9AmKxnyuMuvZTqVYSPjeJijtb4v1dEkW0GxNTWt93yU4PG45Vg3QlD5m5zFHD0oThdzQ8VQmIkJxxWwXIYgDSYeqZH%2BIewE%2B%2F52zhLnuLgQBka3iYo1ZsErlM%2BTCpOkn4S%2BLeYhTLkxRq772PiHAeJ2XEVpaFPYz8zk0LsNXL6sQVA4z7OPEkC%2BT1IVXb%2FY8xFjOlsUm2LYIUiy4T9ctX7s2ga00afGSYk6VcHXYypRxxtxsfgdCbSJPlNF5EVm4MafoIKUczhPNMtUM3Yu46iT2URRQqkklgHpl6Bj8cWXV6zOxm%2BFM61ggEYbT8v4PNp0TmaOwrcrsY7LfsRs%2Ffrvkn4%2FwJdduXOFclo1ioSmULMPvy5r4GOqUBi52DkplXjI3lYYRZLmTBPxTLXhvZXZ5LfNBjiPAqDoHbL1t%2FInZh9k4g0WnPw1BLVuNrPGrGjqIk3EcOeRtj7d9Amvc6cRZU%2FFXEgn0dC6rS5DZuW3NFBifv5mH%2BnZJ2OSS8fsWSSKTfVW05i0wJUsCT0BdDH6rgKZ6%2F39kR0hMErsAg9saisSBp767CFqSHiYnROxKduRCX%2FGBNASJkNW28vvt8&X-Amz-Signature=b21113ac7df2883b5f0f620fe9dadd2d78aac12be4bdfd1771c262aa8f38912a&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
