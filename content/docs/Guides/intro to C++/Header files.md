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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IZ5ZVVK%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T181124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID0UZPcw%2FVuWqsPf58S4b4x%2FlWBQBclWrW%2BNLYrRSq9PAiBDAX%2FIGQxWD2qcuV84aGnybD8REz8KO99TXy3Az3xvYyr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIM5KMd3WW0zmRlzhyiKtwDPMX86tyy3nklJEGlIPvb8inU41T%2BbyKg7k731qX9TgD198uPBmE3oNrhD%2FmPWnTE6JM9564pUrXQnyZIZiMge25ejlg%2FKFLLViKffovrTOSKGcBIs4qIry0vCo6Di9ncw%2BCabxaUCTBmgNdDObgiAitrMFdcMHXmYQrqgCZm7Il9lTs%2B2aPHZn7CNyjF2XGvmfUgYIlGCmrGvIn4%2BbXaz7PI6RekBa2haoxDgA%2FzQI13xUs%2BsRLojNw3mplf1UnAMIGuUuWrjfja1MznXN35Sv%2Fwu8ujD1iuoigrh6uanePYdxTkspK6Ra5Ey6xGG0F4LQxgyUR%2BQ6UpQyPOwv8nNczNDDfXtzWRYs2%2Ftg107lEnBKtin3UibbIeng36oV4ZLkOOHwGKd9HeyK%2FDnk28qxh2Ga8IJP78ddwwIMhgOlwx8zWvhezO%2FIvEoWH28BnBMXpXFy6Scaw3Oj%2B29oY0TsVQiCHvlGTUeUqZJA6Cy7wuPPY5SZrMdCY6v2bQNup30sU1KbLZhRBpZLAGt8vt%2BPY4REOLcyMecxNgzCng7qu5OzxBgYiPuZSrOCoUO0DvabauwiC2PmS1I8NMjEGWS8b9ZoX3V5bx8m0yMTT4gZWVcNNviDiVMztm0yUwnd%2F%2FvwY6pgGceOa%2BakCseU4W7sgWiNPaOHQXs4zKpWzZE%2FmnxqBLhkBTEA8%2FxjyH5wzoEgdaohAdeAx8X6fx%2B0ngWrYFCgpCGGyW4gUorODJW7CZqcFnG9wpnjHimsIZ1wV1VZ%2FyLsWpurcv7SBLA9ACWYnlbEzpCVbFOA2qAOtw1PgicLfc%2Fl0AyrFRm0dyywkgs4T%2BCyKrzI7L6%2BQyuGty6zhRrjItg9CdYDNI&X-Amz-Signature=4a35da247db39483c8f4d7ec8b1c9f0feb2e4292ae19e43ab82131c157c99253&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
