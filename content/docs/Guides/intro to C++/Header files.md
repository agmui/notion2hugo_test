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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YE55H3Y%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T100826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDzOUhzc3exo2mshjRnevJJpe2kKkeiZrXbDZJLURw9ZAiEA0ufKcgQ42cVwebQPg99KWD2CPuMiMtTcKfzhM9JL8KgqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDESDUWJOdAzl1DZXzircAyY4DrtQGnTAnoFX1CNemY0SdbshYcEF%2B8JDK8w3L6vhTV%2FX7b%2BU44KF8Zgw8vj8MlJuJSOEn7WaNfqn9GiTHxMzH0NjElXtsMeKGOCIvSdsL%2B%2BZRS7pdOxNAm0EUhZkeBSVSZR7hX44dEv4alIZVTaG2d%2FKnWVogVdbduVPzW9koaSjywVtj7nsd3RmaCvBgiht1otkcG4lVPot4UohRlQyQR4Sa7kLTSnQUM7kqIzUtQtkCcakdTDoW%2Bf2w5yDHJOKa9f7cK7nifBpCkbAu8%2F%2FepFW3%2FiETpNbY9ZdPqfa2y4HtaBj1cT9hBwvn0yJGSqeSxYPbfXHn2wjDfH1P0yy6HXevUl2z7DBxQfPBNDK1LmzQSI3endO%2F7vqZC6QI%2FqB3PQZ9DbAkZSwX5VuwYJ18TMirbR9rk8S43Y9Bl%2FgzW%2BGMwj1r%2BCgjpM88Lddl24JwKByC%2BSogBmWB5tC3PHAoXD2XbfCu5V4W4DcrB8%2BhR%2FymPLWu%2FWhgIVZye%2FuGogXIaDcSAdmgcAhmrcDbCQc5sY8KLDYVwRbtjW9ShIjXs%2FKjXQKc%2FU6qLhEAQF%2B8ufrX5tq7OrPy4lYdVA%2BD7iWX3xEbCF9iJd7r%2B43%2BxydvuTvBpVgPqgC1A8wMKrr2cIGOqUB9TSoeU5Nqj4fdHk5mcTXrxattgwcLU%2Fcl1T9z%2B3S%2FDpMPD4TSx27RFXVoKPBz%2BMnhJCNQsMc1zUosL8l8rNR6xU%2BIYoC2sRmHVkaTJl%2F3nJJDDLnsLGZZXsC49SI2G0hAwHCZg%2F6io3clSJY27j9hlqdXo1PMkwQHLjeue0pxOQFy58peiUVIouedu1OJbMaTS2LjgpuK0AcMh4abjJW7qCdxnd6&X-Amz-Signature=32badee234cf072bb9820adb372380b991214b65e7dcde0506423674a4725c72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
