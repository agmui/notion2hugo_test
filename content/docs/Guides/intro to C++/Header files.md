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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TIFIAGM%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T121412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDU%2FA2W5dFfaFsvWN6%2Fx2XhlZdcS26%2BP4mr%2BO22u8kxlwIgOwV%2FWRbjofcHMp6WNZP%2BGWBmFAXmrM1zqJrQ32mcr7cqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFkWarXnVqKPtf235SrcA3Lg%2BgPu2x1yIb3mXoEgvigrmyZBVS4xPzWw32lXWGak9AdhnD8NE2scNfVhckbasAcbZnCZ4bguDt12qzSr9KD9jte%2FyFSUl2Mgs5wHKNh1yFRTdk02BtUTuEOHpa%2BY4DSZT%2B38ctyYq0y0FeA4sHWSGoaQFnhdFT76TsGt6aR%2FPRLTz9dzgp53VB0IDMVDsof2%2BNls2rdvtwg%2FuZ3F8RHTU7xh0Ef1s%2FtkjYckZ4OICD5%2BP2Q2acrhZMR746Kaz0pBBLsA9SszNJHHAMM54ep%2FwNNRQ%2FcXld25wRkisZ46iXhXtEXaiMkL3i8H83f6pJm8V3txZtTB5V7NVijfDq%2BmyX%2BZkEveySdPSp6FvcGYT9jOFm6vbprR%2FcXBgEEHyg98lf8XUu%2BZDgNCuXhJOZMq76%2BzvLyGHawk3se0tpwM5ugdnz6pwd6oAlXmxSKgV75R5%2BR9tPt2rKkvlk%2B8iXPYTWMQVUUcExQa%2FetHJHVnbdyDbhQZBcF9EEDdMshU1Pi9N752F0LDfn8vRlX5ruolNl5Q%2B4vqrX4%2BefU9f7F%2BUHjYodFxpzPUORZMTbx67ERF2Y4awQsPZigvc9C%2FEs1Lnvpq%2BOHIOkOB0AwNg9WnTc9zekX4vECy9EnnMPTf8MEGOqUB25pfBfF1F1YTPZ2Pqkyf0M303jFTrTvC3nkdd3sAM1%2F2qrmjaI4jYnfMqufhbSqN5TC7Yrg2Adj5IGStaP6uQurO9ofieOUKeZjNVAi34E7tclNMU8ETkVpri%2F6VKBoC8zGyqyGk3AtW5pR%2B1mDLy7NKh%2FimzpLfAtmpnn9BwBXlg395Sv4DHi3VgChTBkzKiZJA2d9Tc%2BLE5pBu%2F%2BIa8yMylvf6&X-Amz-Signature=c403bbf900f0f56a8240a5d770de514705fdc541ffa8ef8689db965a90eaed22&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
