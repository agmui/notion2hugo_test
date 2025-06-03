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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466235OHL6F%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T004314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQCNh%2FMTW8CCYuM1Dhmk6RoY1FLHJi9T%2B7sgdo9eyCvxegIgI40rD%2Br1fTxUMKJ%2FHW7V4hmYWvqrD%2FpI8S%2BcNxKT4GoqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHpOIW619eEebJGTOircA4o0bWc59mSKp3Nsk6YMlxaLwK17YoUNW%2FobHc22YPPmkm3mARNeyEqjHQ21Sh3qhrSu5fxZgNYicHnxlTiqxCmzqsa%2F2F8fcGFXsulmAbch%2B21YpyBHOChFivfz%2BPEbhTKy3vB7AoxlhfTf8HW6RKsYFjFcymz58KrqHB2qSZ3Gt3XxfPwUsF3ngdJlXtRlzyc2nbmsLmL5u%2BTpHYxVYqy9%2FgZ9n8ZgYqrjckbJztvJ74b2vUf7756QUBdHwnm7I2EGkCe8N23%2FrAkP6eYXPk3gH535LGkgiXGFpM65GGtRxf9diYT%2BTeaXNWr1jUXX%2FU8LnJXvmkH04D08yfrtflqMFKD7tz7n0Q9x%2BFnRbNjWTQqibYXuYQRDIa3TlaE2dsRqaJ%2Fmivq1TcxLCzJYU7%2Ft1LCU2EcTh4k1NTPQek1ekm%2FVzT%2FIBtCQILYljH5jeJ%2F5LfdF%2F8gNH75idp8GztekK%2BK4rvbuCRbpwIYk4wUpSL90DO%2BU%2BGBroZSSzRV79hzGxRaamScYyMnhXsv4p1h5U1nJGb5wUJkOXUh4Zw%2BYrWHc9mpZJV5oUPfqhKU%2Foa38vKCOPoBpYPlravkfY045ceXjuOcxYBvPBBdRrMpOhYY5awq9SKK9KI9WMN3n%2BMEGOqUBLyqO3suOrH4PDqNiiEaqjO%2FqZGOIXbnVpy%2FGHBSVywiXBEFJqZZf66ZRujIkyOobTG%2BLJVNG%2Ba%2BRdrciyxVZOpPoj1Ip2rtzcL%2FsQzF%2BFG%2BStaQr60PjSXSupuBPH5Ql0108%2BHOFIndpLF1psJ5Pboe%2BBoNshEdqwFu7WPIc9sEX5DrnY9NPNz46KblRdTcDztrGXmLyTp00eoE9xFCxTjjDs%2B35&X-Amz-Signature=b4e7034eec42b2c32677772222ee16d441b04d1e6aa693ff540927966824968e&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
