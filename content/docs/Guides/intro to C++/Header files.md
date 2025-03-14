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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYMBPRC7%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T181040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2B546eXjYbGRJZwc5nKcTAgas54xde%2FmbP1%2FL3xYJnXQIgTpwBcci%2BCIxAIdeH53D2EtIOn6nyVuHPK05WBdV8KsAqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA8TSgOsypksdDKJeCrcA6ibFyCyo4TccbSBxuxBO4TIzMepXFA9YShpO1PyF0J1omMnruuijt5EvvCk9LSM0zcp7dkd%2FR%2BEy0iUstbOraMc0SnyE4CQWf%2BjWAMVYHJdU9qzbXKK9PXbnh%2BoNrxt9%2BUagMSAyTVBGPKmsN3h0mFIqjMxKSm0%2BpAHAyqsZE8az%2BBQazPhWZNRu3c8AN9nQCWhJn8RKI4YecWaTPY4IBdAT0WTWS%2FRwWD9pRi4NmhG%2FiW%2FYA%2FrQLoPRlPKCP9amN5jOYiDT2MTqHf%2BHqhZ5P5B1ziaZJonrK5TKaZxRfFhs8IgKuZ8Pb3xzsTh%2BVXdymMhFLPaniQ5JbUIt3VlohHRwvMNmuIV%2FpvrJkpk0Krqz0JiuZO79tqnMrmXnuF6VzYOrPND0hudwGXDoqy7i%2FJe1BF8jdWCIdj4RkdvVB69in%2BpSmW8CCsGI7bRuTS22LokiavJn%2Bx5Xe9SmOCerOOQx4EeoKlNTaF%2F9RoJMkxVz1ycBjdOTV3lAcNcIBPqwH1eZtIs%2B9Kjz6%2FJP6DNwqT8dO51CnILvsKx6Qy4NkLL6%2BR2rsp7cPjAbRqvqvwufFYnjKpi17Hpe%2BLXylxf62ECZFI82F4jASHqJviFYArwFx08s82X269HmI7PMMq%2F0b4GOqUBJMaBoj8uK5SS0czNLf5b7NyO8Yaq%2FdcY5EzSdJ2rRpsTjTh17ppj2OJZB74K%2FK2FTYsv1H6PP%2F3CODxrOYrnQg0gn%2Bh5cXce8iPKHqXbbG6XjZ1o6r86x1s4wb7mmCAx4mh8aWKKNX%2Btr2c6Kkk%2FOzUUMpd6%2BIlYhTyyoAK3JQ1fyyP68%2BbhyDFX%2FP9TnOPx%2BFDyH00OyfgSz5Mskoru%2BkuSznwZ&X-Amz-Signature=6b3d56603f3b06bd813c459d6bc7f4d7c0d4cd0cfd8458e37b1124184e43cd88&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
