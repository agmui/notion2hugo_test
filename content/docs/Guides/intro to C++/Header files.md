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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ACZFCG5%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T100953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9x1WIa%2FzKQ5kApzbN9hSnyg0DUyC2nGs8XPT0lnYmQwIhAOJgxkRkFtm29hjrHhg2qJzyOKvPcOo4YM%2FhkmIbCIcEKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw74TSFhw3mVACbTfkq3APDsKT%2BSf2IwF1jJlPIbMC2n3SQhZ2icw3%2BhCIdX%2FrmR3pUMBA2O46RGz36YhIxf9j7R5%2FQsvyKPAtTULVwhQcd4DRZySm7xziFQOTcAmzcmIqIsy%2FM8XOdWXG2mvYSiL0OIx1cnyBz8T9a9YoTlpOcfMloEW0IUvHHrMQP%2BXMFSHaE4aSC%2Fw0eVYKTCzczGF%2Bo0OFxxsUIfof%2FMUXCAWfhwJCYRVoCBJJjRbhGZeEOuWGb8Jinnv1L%2F1eTUj4B2TxiFuRQjUv4BEhur72uZ5aVBmIiaZI8zfMisSuYe7uunBdq055q7tXE89lMRIpKvE5pag80gSgk6InjQJH6Z9%2FTW0K6%2BCvU5zY15XauVLIktMFZUyTOHwElZeOtw6e00Ivl94Mkahad866Vl71SLzLWk1CWgiVyl4rCq%2Fix8E0O1l6BT98zAFjT54y3j%2B0QpE4eg%2FIGk90dMGtTMheTUMwHVJaDiSDE5EStG4lEfJiqeYxOgRpormpy1943eHgWtkac%2FGVazmvF4SnbEyzV1gE7kLAs7RnxkpHuV7GZI%2Fd7R%2BGrtKMMMzgIwGh43fBNM6czuzFqV4kveBWPluPGCs0ESULbHtyvvR%2Bt%2BMjSaTowc43Wjs1v9uDJOkTCPTC64pPDBjqkAfg054zp51gjcI4JTMpLI8vOIsw0vh0VuXaG0DvdzBINBC%2BC8otPKgEN3sDKzJQPvRQDT4Sg8btlaPx9lBgv6mAADpGq6o0fPUCBXH08SvfTIH6eL%2F6aUHkPhHUiDPDHhq%2B97fk0iRBlkI7GnuPnr2OJnFvgKJXTV9njdJyRvEu7UKrlVH7cUT5yWbDkvg83YNdB0kwi8s4hdP0zAzeSGXJj%2BgSI&X-Amz-Signature=d3104a378171a6422b7a4d6a6b35dabd304187c45015c5eb5c138f3ebf6fd2d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
