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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URPFSJPN%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T170659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCfa0i8G1Aecr13ft41urQPZCFHqm4XHfcBGRR7xrnRgIhALDQYoLDFoDd%2FjYVkFoYLjd%2BPVb5qWjjL3XCZO%2FLGbc1KogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz7pPMV4I2tZjdQ5vQq3ANdXELW21Anltv8CNhs%2BD6AfjNs1YodPBca68URkcSRF0GKbzwZhlXFYf89j77JbAKjLOHIDudpOya0AFY7ighfWQrh2ABoRTrDdMJdC5VjqHShYBNZmWijePiUOlW5JqoF02dMoYjiUwntkp1xMKlQsSCTb1QuY39KBJTXCBtPGPGxFTFFdVLT6dylLcvnEiJiG8zHzohOlaO99lmu3L8CCZJ3CHAc0S1xF6qE6YdzezAyIiqKSFXjMY%2FhAI03wvijhZVuI9h3byLVS9JxcxWsiX2r1ZNi6alDKZW5RZ%2BUIdxXGz48zfsIcAl%2B%2FF1Z0IQsKuQlV3Qj8vsnRa9o1C9UIffiy53EBILIegYpH1IUQ6k%2B4%2B%2FY%2BMUhMlT%2BZnaT2G%2FogRf87n2PUAyF2bV4md53T1cc0zCPYR7qw0Ft45ta7wylkgNJqA1C%2BHTT85POusdiRGj84aGQYaFG6RiZnT5WJPUHo8PNkeOJnukZVb1ntp2Qz%2BMN9lTpSqOMzKn6KsWNCizArpkHr1fWM5fv6fJQPERBzDqtlds8IscKqocMgoqZyNnw4zlW2BhwZStDU4NpW2XqDbg38Cr8%2B0SMQuJquwqZfJ3dUb78cceJq622HBkbzMgx6M6jL1SFmjDqlsrDBjqkAVE1o4xUHJsmMyqvKRFUKsvPwgRSvaFPrJhuXdu%2BhnroruoGoSDy7VK1H%2Bv76XIQMKayWax6TZyebnjAbpVj%2BXuWMHbVrPzqUzkxGsBqEkXfTyx7Uhw6P6A%2F6jBhROeQwqpjP7CDoIBQRhTPpyLbS0dJ1gZy1foQN9wiDzk%2FpwB1tbdnsaSj2XfvrNhwpC1Vlw4Q%2FP%2BWzR%2FDk8sSYL0THiaG3%2BXs&X-Amz-Signature=923e4e6adc12a6cbe7a9abbf8c695a3c2575243012680cc85620e45c9578a6ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
