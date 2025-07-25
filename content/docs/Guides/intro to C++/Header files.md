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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBM4G6CJ%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T141039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQCoq%2BTsbY7RscXH%2BPU6x%2B131WBrjQ0w8zXtti4yHl0P9AIhAOrbA8xZiVtiiaKyL8pd2G0RrIHXSf5ngISjNhuuYmtJKv8DCEYQABoMNjM3NDIzMTgzODA1Igy0c9geYzayCqoDwN0q3AON5JaQMjR%2FGGormZXDRu%2Biqjz6BJmK5W4MPhAHoKfbua8niqtlNjeb6L8Wczd6y91CgIqGiQgzTQkMwkcDVEzianXZJ28w5lBr1xd4fuTTMrtsArXZ%2B4ohLG9RUlHen4JvP068twp%2BU7k4oXPdcvmr2ujCPbE%2BQOClm8LArbAotaMweYSNxr7rMkiS8UwHsR6qb7%2B9G%2BRQIVwnI6VoBNuHjiVrxdGFl0vQk9PsVCKeHITSSPwH1A0fK5l45b7m2DNpUtPM61SKMgKve5B4c40MxNlfNRn3KUEu9XqeljjAYe%2Fg4nhFPFla400tkQ7p1SHv%2FJEBZeIbonaVOjoEyf3kiDNcESJVsu3tBs71AITGiDzhMLbkdWc8eJgUmZXsKLpybzWjJossT%2FxL0AbSNTmjgvVaItzgEA9AuA03qK8y48s7u8VuDlQKshOV9JeIVkYDw3T33qMIFucRS2pQDf%2FRaMH98nO2ZGxGJbuA%2B8zXuw860i%2BK5pWt%2FzKbWdHXFYJ%2FQGApAKsckRULcida8woKB5s6O75TTw3156fafS%2FIFzFzKVGMYK2zGMPE3iHYArQPU4Rvn4sUrdaciTUqWfvxrgyhv7kGz8qwZ5d4eFOsDm1Ls0nlhqJ2hbpjGTD0hY7EBjqkAZENApjZeH5uF77L4QOoljp9kouzUjE63XY9sifSyG72DIVhwqvTvZRZMy9H%2F%2B%2Fr7h4k5EqJce%2FZz5heggFgz9OilaerT0mEhl3nBWQwv6xLhh0mBjiI8XMT7kcBwfkZoWB95VlRzppE0EewNAAPffWy1Dj0h3HBcWLUaFRBNBPQqApZNd0jtp%2Fwo9xAmZchnpQG%2Fgf%2BKltDgRWKdBZ2rVYMc0kG&X-Amz-Signature=c921073dfa0d50d5a10d923753f3eba677f0a637f3bbb3cb222b565bd3af44a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
