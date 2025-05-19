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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZAJOKMD%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T132430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID8%2BKgRmZcwOcviB6EBQv5qlmNSXhoLfkghtsZ9xnGK9AiAjjuSMCkGgWqR3hWL2e4Er668%2Flc%2BMgN10mZgjxnJWMSqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJhApBDMHolKfzAuwKtwDdpJeh76YptVnoylMIb8gdvcttHN5g5GpdkhG6Qp2Z6EnNNJIXgc1AsGRtCwbHOoLYlIRv5Z4CYSp5%2F%2B5jVfLci%2FByC%2B9OgI613TZOeIh0z8s3ILC2qIIvRkb1h9NQucSsui4xLx8K%2Bvtqg8na%2BYffw1xnPU5STSo30GaJLsDntRFhOFDnhPmKRCaJPmUN9KHCe4vCWNH1RfmZmlunrXtrAJ0B8fGKyJ%2BAuWLBXRsTE9lhjhUaVwVIrYKlXu7sj3awLLt7GyWgx4ZmhbeaDRqeZNRJ4iSpX0kg%2BQQRf0YZ3klAMR9uIGywmihXUpPAfH5xSSJyGPaB2kgv1vN079s%2F1P4ohBQ2QbG2oY%2FMWsYhZdyTy1k7%2FVfCb%2FK0qm0oQSEnfKzUCs4CdPQcfYOC04KnAZo1ytK37NfINk8J%2F4b2CftvjWoTP9SNJ6%2Bz2EiIdGaDqIWs1zvhjrBjW%2FWHbKUUJcw0tp7mCiqUnsH3Z5Zq5%2BZeHwnAOG4rVzNEPYp2zVw6NDMmOknxrbgju7zFC5ltx9vo%2FLOnSOefzmC7WeZb8fcYA8YrewaDTxUeRAYWG%2BtXUrgCn%2FHJXxx5oq6EUUnGc1b92PM3QuSjTzClowh6rrGeQWlsZstBfJ5H18wzbGswQY6pgGHtQQlwd40WncUOxTfaSKWJdcIcqul4%2BoOdRpm3yaHIvCutDphDUKKDG7EW3SoiFnctzIbTcgoLDW765jrzQCpt8NbTYlnjTkGliIN6nOW7pgKNj2LWYC0hgQJkZBybkH1D8055Q1PbUvIVNawId%2F1%2F%2FVbUJEcPggJfJBHFrBeViR8gyf%2BS%2B%2Bc0WgBr3Mr9zaSp%2F%2B0LroVd20skjf6L6z8jpKUKDME&X-Amz-Signature=41e68a11c5ef8d6fd949dba7513928c5364f8c59a4ba904fb875c7fa2e67935e&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
