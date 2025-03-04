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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7WFPYXF%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T050829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyF0pqtTOytlcaEXrJWPWuo4UtXOgO6xVyRfMGfPGVtgIgFZylPCAqyVCbh51vUQcFvBqMyTCMIzrz48awTrL3AdMqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAb1g9jTym22MjI%2FoircAxkTwX3TN7RC9BbMnXRAoz7cc9Srspzs%2FJNJRjwzp%2Bh6ERonhnnItL%2B9sLRMiRiadLAhBlyvJrMEWcZaT%2FDBlut%2FCzYy3WMYzgHl6gPNIS16QMFaIlH8spzounCOFum%2FFVwiPifsnk49xRMvJYQst9Auyi6VnagibKbWuW12YHYHVs%2FG4IHZl8QG5EoEV8uGaLfLIRIZn9zP5VZWsNdmi%2BqnDsFBr3%2BK4kFtva%2FTv3jyj7cqW4fmqOlaYBn87nB2dz%2Fm%2BoM0ITtMKk1KG4%2FfRXJdL7%2BzSu5JiLjY0Rap5BUsxWaJaIciL8Ciff0MBXW0imQcgXonjqpK5%2F9AdqCUteO2HBhHSJMaCv0dk7ISoGlCt1V5aGK6K4IIrbMlr5%2B18qZKODiJuHFNsaAHOoVJCjGrjEIBtqlbszxPa1nmHIyjwnB%2FDpfmpuB2YmwGAgVJQTQSnYI7HspVO4GKUn9j12zgqeahca7JQ3WPVjYLDlXkvDWF5y8ADmvx1HuhtVidrTDLc%2FcVo897M9D%2B2gQuDiLCmc4maPF9CjVz7FqnLq9ZVFzBV2gP0knZ%2FpkbdVtQOgLA5ugxweeTLIrielp%2F7Zc%2BScBGGwKMX5jTlqVNtcvdOxSpw8Xta%2FeGFvPVMIT4mL4GOqUBUIoVUIiavkRGdzthuPWoSg867gtPwAlsXib4Bc1DLzlUc0Xr9UbgNFLcslqCduwPMRpkvQmFpuEV7pAtGZ8oFs83%2FAA%2F8gKuc1NBCS0ACroTHhCR%2FGS%2Fy10dvIIO46aRvhqoD8hLoazrDCA2SzlaJHxG9uUVIbIzgUJnUdKTx67eX1IwdDUfQRUZYEU%2Bk7G1H9MLIqvMp0RuI3A0nRZ5aiT7vb7R&X-Amz-Signature=4dbaf69e5c0031159fbb217d98b31911a681c990c1d9b7ac39b5e5a8036bc00b&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
