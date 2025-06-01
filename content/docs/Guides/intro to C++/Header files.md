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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7UF7XAN%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T070815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIBByVu%2FaCOFt0fPyY8pN%2FJf%2BQM6HuXEd%2BYugxpQMqjeIAiAkwPGDGt5s%2BsaW6ccYS7PBhkQxLJOo1YlM%2Fj%2Bgmnr6eiqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAjOXT0rnp1v1vDUhKtwDSC5Y1ru2o3A78bIaDLVWLuWqz7tegVq60GGDVAQkS2paliOeAhta9TZJ7NYv1EQkdvAW64p0rfmiaYPPxfDnBpXAIaRGMJvlyJM9AY9LLyMc7JYEmDCwiyqre%2FpTfCE4nq0NRQr85m0WJuG2okjpBkSUc0YQeOegfFdIf2fm%2BfVDSQI1tzRfPBEKxKMj1s%2BYIkbdSopsqzvMyEXOjPMmdfPVE6BtxPioaNQPMFScSQSiFveC4c0UB5vxagrHni01qQMi8n0oVgZPnfW%2Bu7CL%2BpTEmtNKZBVqPC%2BbIwSpyqdi0vmJGD6W4RrEoLBky%2F%2FJkeKRKfamK8zq7KZULVCTL8y6CLbCHPucuVrk2q2g9vtubaUC%2F1QphjA5NNqLfIRJRf7f%2BYytAthw8nPTqhN04T6zmGtlk4LbGnPVaXJGih8JLnEZm%2FohFADtTbRk0Ww1oYatpkTnkVGbNcw81oYpk%2BURLiRjAf1gHORclxm9oxTFGbJgh6Ew73CqIiz64CiINDIAMXpSED64XClYvKFRMC4nZQWZfxY%2FHMSDek7BI%2BtvgbkjAyxI4%2FE%2FUFLLWMaNbAAFwmQWPPxDuPsBKbzEVxsxfyPCmBKqOc%2Ft0bJSGkTxasdmsi9i2ETa5OUwlZ3vwQY6pgE1NqqZbTfWw%2FyHt6IBhS6eveAe1NGAXTORNQt0xnV35Dj5WnJOiOq58z%2BxDpIf4VP9VbRzqf45dgbDrPXrQDrL9MTnrzwmmp%2Frw9e89IeG9zD9bRi7ytSaf8YCvlrmhYU%2FCb5DfzWnTzjxLqeM3SyRv3Zj8POvPBar%2FXHZNTg63jxQHXea8r%2BUmaI6iruGjQahy1U7L%2F3gIVd7KU4eNgs9yEU%2FFBW0&X-Amz-Signature=29c2bee07c5d046880b38953c0219419bfc0c280506ab3a8a279c868fb2f8601&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
