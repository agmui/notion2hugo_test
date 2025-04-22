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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YPGJMBW%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T090906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIE%2BhV74Mtp8XeKUbyPZA3Lgi0U0ZSkKMZkxjIDFVy1RZAiEAjieGZCWQP3L1dUIU3vqFH%2FRLZiRk7VVzPwNbXu8QFz8qiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE%2Fg8rDUm9%2BNvhkBnCrcA%2Bqb%2FtXZy4n1mPrVhRgavpyLBdPzd0%2FzlDTBpICxN4QnQdzbHdZvZRjkYVLDYoqkYYlt5q1AnVxXuinNH0FnsZ4Un9T5FCOP%2FqoqMWjeS%2Bncpn5Ribc9PdtAfc9Srkk2iQLPmr1DKze%2FAgYOhEyYvPIahHJXMQl4ZzMd4gljR3cDxtUCPPWkUQo9uVpviju63iKENySjndD3V8FEAuMblGuM6c1%2B3%2Bi6mI99%2BATJS4iaWqqbRf0SnpSRbgug4YHpfszvDAJahEHM0yG347PVwvXiS3rDD6NZjXVoKhhP8MonkfZpJwb4C%2B07I8YbxYBKqtjLgbQcEAsncY64xl788COkkw6O0wRLk5jgi8Dgf6CF9hzNzOpaFM9E0%2BzzTCwMzGd2cnsND%2BJSgRe2hedDKkB4TAzJFTrGmoESrEBh42ThxyCJWh1vU4XWC83QhvXMdXg8xsdBQd2VdGWU7%2FT8AScHc50D%2FCkBh8F3FsNqOCMVqlnAPkkAoF1rLtHCA%2BlvEXqAyQ1ghBWDwN8iEwECWvjvVJF95OAhq1GKXSDmofzMPjm3U%2Bw9q%2FcQR2%2F467aalv45zMIb741D6b6Y8LUTyOYvsguK3SUMaGRYoMdHI%2FHr6tmx3vJHHYX%2FDj0iMLCLncAGOqUBM73SKxWkitzBvLJSP58lwzxIIW%2FU%2B%2B0DVwMUpo7P9aRyuQMcSWMj3eBWbMmwPFPloKu0WYs%2FV%2FF66yLzmpvEGHbHZUdMeevryS%2BWVJ%2BXSJ%2Fn3ueJzIDeWEb6VtPdy1uQQ1FQJFOJCNUVa%2BVnWOAGDwCyf2i2swbMwCNHWdXR6bS9JBoJO0Vg0xdcL7PW2IZAgAxAM7JAFkloUIokkY20MD%2Fuf8g5&X-Amz-Signature=33f6bc038852e74c69ebe5c7fce1fe0c5575129c106bdccaf33c6ab89b4b8285&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
