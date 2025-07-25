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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCZQPBH4%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T061446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIFNl9JqNzl4E1D4Zn3r4J0xhaD%2BuXv6Ep9Y%2FTDu2rPdaAiAMjPitmHUZv6mmWguuu1j3M0bti8iqZJA4lKBbMbBfgSr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMhsEj3%2FGk%2BpyWhctVKtwDt85%2FXzcTYQZJNYCj9FuJpLWtxsU%2Bgi0dHNPXidrBKqaBzqGGO2DE2D84xY%2BXx8sHTAbacLNrPrPcpbOaau9cxjHJGeYmc53PFK3XgHmYBY%2Bjk93gyjfcUjJzEaBxdSDgNDcagLJpdQPUQnNCUZtI0RfhoOUQI2dCB3sOJT%2BRqxJsvI722IsCF1j35EqRL983YTzNNfMoiDokpCeGGZ5%2FjyktFr5lR5YvKMTaRo6KkGaLRKrLf3SDGwkCmt5619OEqMKgLcKOHyMe4yY5xGCJNd1OUUnZfFnq7YWd4gCoYWtgfv6MGnutnuLXDQaU0kip%2FGpWkvanOdC5azZu%2F4ETctNZbA5oK%2Bw7lpctnU62L4YMTd45ztR7t5It5WAllfWEdM85BI8IfIGqWukxNIjV%2B%2FBrMsD57u0VZZHHxu2t%2F6bguWa9OEUEpYUeIFXRHsfmf3s%2FaW5cmdHl1qznAdntJGyn3iVbPcYxRBmlun8n%2B87%2B4JlWWBjY4%2F1Ao37iNukZ4ddsWlcxf%2Fky8k%2BJiEOt6le%2BmJLCu3EOenTRSPBWhfF9efomEQbuqjVUrNMC%2FU1t1XzzIcXgu%2BlJ8BkiDZdH8YB3J0vcDLDSq5bqVFJQTBqdOKhvnt1XKgk56ggwt5yMxAY6pgFCy2E8iXl1MsbHPLfk%2Fgts%2B%2BllKhJyj5pg9hCX87bnblwmJfeLrUpp6RVed5%2BmDOYNnG3nRr9baxssadyxvMPmtJ%2FB6aGNuWFHkqL6efeOCXyY8x%2FCQU2gtZaSuZRkswyC5QiAJ93Oz95ssBAZOWweJMUu4HRPvI69pA7N8cyCjVctgbdb36q1H7eYfszNyBzIT6aW06J6h%2FG4uyFyN1swNA79qzjR&X-Amz-Signature=5892b4c2f6d0c7c59d973deaee6465418e1ff8a221b694ddd6f781500eff1679&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
