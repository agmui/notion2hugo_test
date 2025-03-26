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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666S3PYW2F%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T121431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICe1QHj5BF0NfoXyANOyBTiDuAs%2BKgYT5LJcgNCBy4%2FJAiAuLguSV1wQyaMVPaA6wzrsi0evz%2FuRlNXJgW%2FgMupueir%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMTmnKnBT2GVqXqQxLKtwDDcbsLvl0ix5%2FIk4yiFcS0aM8R8rp9n5w5%2BtBui1ForH8nHrc11Nrvo5P9kpLgiRuwuBXgrwEKwpfNZr2MeJ6XkHILaziqzsU0LOZl1omxOwMY9UDlmReLsi2s%2BYcnbzmVuQb0sYC035Z%2B2pb6ZCGRaWB76aETa6rX%2F0LAUtUI6Q8s%2FCeYWW%2FFUZxoQ5wappJHUgc8o1t3nOzJD3qEGmulZGwG%2FW49VdMcyT2wWqFDcazuDvpXqCDCwDh4lpl%2BnSD%2BkDPHtAGW0cnhMEknIkiwJ97cBtkl6NySMYeIsaBsOBNXGGPk1KkQbPXF5y1YnOwr0zAIebTUZM18rr29VuhnExrB03YhAvkLhhPtotT1fqtpm7JJzG%2BRAVTjo8QFI94gf1pSddHtUT8uH3xXjyEBiBE3hGas5OxLloBWyY%2Fd7Pro9OdHGAbmigfhPP7BwTDsUynI5nTPOhwGA9kDbs5On96UCfk39kYfCZMtokls3dygrR11cnuicjzK70%2FhPMZ%2FxmRmqh3wT8Cpq%2F7POKEFe%2BiDYL08zAoXsM2LvKAoTN2rMA1E5qvuqabNr5nuu3RPMsdsLGNXESxhOR3RGQxDxD0LpxzZ33%2BdN%2BNgxTHvdBnZ3iELcqmpx%2FySiIw3NqPvwY6pgFtP3j7YhlDtuQxXOwDZGULPcSEjYWBQrIGGJmXeBuo1m%2FOHhavgIgxF%2BiZBMsd5c7RpWzINOpjDgil0MqSDwdjKigdmM4lWYvNxkPo7mNJ2uEYLIntlCX6Zr1ZNwADDo6BLkVYTE1QmM8Ui0W5i9vm%2FY3yIFe6HQeqcL9A1WV6ubb1M402AZ1zNXH6mQj7z4JgM9VHk%2FQKHWPHheQz8nakKeW8TSHx&X-Amz-Signature=03616848b69de85ae5906d19371e6094f9582f96d34e1b841f2e01e849e52cdd&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
