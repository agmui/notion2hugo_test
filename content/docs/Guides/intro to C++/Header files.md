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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVTTMMSF%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T220824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICQVFYKX3PKCsfgihRWuSxYID4UEYxsc8R0CY9osKIjpAiBKo3cO9cWsjfEzej8g4HfkZSsda5EQLgjm1yNrPPPrBCqIBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMimDr%2BwFw364Brk1yKtwDIjN0h9oH%2Boiwc793ACgyz00r5gWicsRzpS%2Bi0IJS8HsDT%2F%2FHmRW1SO85AXy2z8rZQaBWYgBWPdqqExlq209STJhVaNvbuW0A%2FePp%2BV3FqUNJzeqh2isFSEY0Y0bUpd4V7ISuCSmceFKGPsPjvD3VmXeYmcfcVFIIgB8eAYOtxTQTICV52zXTrhXFYmXMc8eEiwVmdOleS8nT4%2F7DHQDeQ3MTWYRjj2UFC6%2B%2B47s5eA2TXdTEOS%2Fkq9uU1u%2B7PlXdOktdVopu2rQpW%2BQgZLrsrq9jUdTEm16KHi4TM0XLB8p2uMJt9BYKEbTHQdSC4bpCnEUZPAkqhWa8MK8HT5pDrn860YYSzhwIIih2WJDiT44QsXUsvhQf4LLjBY265kJhBi3Lff%2FeaCXcVOabZa9fP5THRGeJ7Jb5Ak%2FXEDHIORueno%2FTYvYtsRW5gvQ3LI8E69%2FY88Wg2isxzFpuN2J2Zn1S4Tfpjm%2B43ciUCpG6rNXyYWDDx4xgCbpn0jgUslMq7I8sKHMLp%2BWLBjAchQOE4803E88e4zg866HluLUtCvba%2FF8dW76TTJyZTlPrenY5TamhNm7sOSY6R4ngoVfu5gE6W42%2FS5mfzFwqPGIIRzcrtSvIfnGfVF7hUv0w0byWwwY6pgH3LZJFuW9co8YNfiD0WsgEjm0zefCGsnHGuXffTR5b3AZrqUIQU8HR3C8RWOwVZAVSnQN1p86goxH7J304kOFwaUEhohyTWRmGmG4vXBCa%2Bl18SKABDqSe84DuYNJOt9o8CavmITGKE%2BiGcvk89Ujq8mkAWTwhKqA76KNJkoWNeCe%2Bc1loYnTN2Dh1FYxlzrfYHd4xsoZn30mpSELRjhTbTByJ3ozo&X-Amz-Signature=72462c6565c8a9e2ddc15a957a7c1c54b8e1a66320f86e36d8fa43ca8eefae8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
