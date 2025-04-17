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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQAL4BN2%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T161001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEXq0wMDCailrJZwB8WvjWoKF9lzRBCh7CH74ZOxBjz%2BAiA5Jan%2Fqzlrwrgi2Spcgdf3gjbLOeCnbIHlM%2Bcg58efEir%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMcYjLsjUH8PHCDmH5KtwDVYnlGPwAU7Q1TfJ9DPSzjtkehQh2ylhpRngfPbipI0%2BlnRsRRIUIiIR7VVK9oPjqJVuv8oO8NgQvk7DWBzB0FcC4mOW%2BP6UN9nXvQjnHu2KTc6uruNYW7ysjAL49m1wPuIIbpsa6yJ2LT217xsF%2Fqt4Gz6vQPfH1yiz7raDFQsdFe7GshmU0hFa4ueptUMJkQYmAI%2BK4rlRpo%2F5%2FkdtJEkKZcBAk30%2FGga0dpFFPt8f5qvfmdC5xTmsUiHrx%2FCqjnlUlRR7S1s3PfHE9sSAYquigpGKtHlu%2B9QNoiLcFSTNaLuyCAQcXYi%2FbVPMtejDsnWtDBrmrGqFGQufLRNdDRptDyOBqPNa6y3CFCKk7GKNj2wSn08TxEndcYWn5rNsx%2Bch9Xh%2FT79DaTraBLTxyGKIqogyQHsu%2FOZMSHrlCEn60qbrlny6r68nu5wXlzJiiMPO5eGtIyYhnhuoKvflZP4asBUQDsmIowx%2FDedXYKo7kO2TbiGbBN0oQT460aRRAyavxGQby7h6K16Dqlhporkm9M1uq87vct2%2BfhcouLVxjGYCf2SB5StwFZhpN3%2FcaEK1sZlRAdW1y4KRTE6WXoMf9gGD8bTGmLl1aJRsA%2BjdmDWC4udipcauwAyUwmMqEwAY6pgHLp2dO1HjokaX4NcIvKga%2FK09Zoud3dwbn4LvdW8AZLmbAHUvUTf4rkbEeHtjnNfWYbmAqR2WJKVkMqV8g%2BBqW%2FhLIHRX%2FBGXTeSO5z9%2F8nZHA%2FP9LCTcqogY0AODrzfiCL1B8BQ%2Fgz678JuxB9BkgUsVsdebYzOxvaljNfEg6Mn3wIrou2NU%2FDqFbjtTX01HTqhT6IW2dk9MsN4MVykkzdsYT1HS3&X-Amz-Signature=404fc7df192c04fe803f0d1b5c73a041caa924813d19e4b1ff88ddcad37de69e&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
