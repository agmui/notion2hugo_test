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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666QXTTSO%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T050758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQCogwqie5WjtWQd4TbbCF0XqtXCngNcC7r6%2BDR0c4cCwgIgN84zgTvpwcHWTWum9aajzb%2FPVzQi1rZtZ7Xz9ON7%2Bqsq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDJGm309KXHgg18wqEircA7jX6Nw%2F%2FtMYIJd2JgoVByuHyj57aTNRS6UWymckg748PtApejzu6IFcv7XJwH57KcO4ME3m768JeVJSFi375ec0WAzTSNgAdtSVHMX5xzBRsq62vJ2D00kCLkWkDW6LshD1mmYBedJ%2FGyH3EpFRmJE4gQ9IBd2%2BEe6o4WuyLLoCpMUydTp4k2xO4dJx2%2F1bTP%2Ft9gXrsH6afHC5VzyalIdrwN%2FEuBa9VAx0fZjdB98ylem7KlYd1lDyg2UV6L6Xu%2FrqqBBNts1GkhEgx890vCp2wvK2SKzFnROaowJw98og5DKzY8bm20LgpRRhtRiTHsOsRcjVdWwD1IxmXDYTEJlUZiGHNBDBJNYIUgQAiR2AA2%2FRoO%2B0lw3qNGH0Fsb3lpaCsIamsmHySNaxeWr4LbHUIIm3%2BeVdftb6JhTig68JumtOIftxoh0i1SBWWfQ4a4I7tafpHuSgm7Z5slI1RwajP06vsu8kBZ1KcL9sBkHtHLrTzQXcWv0h391Z68Z4ug33xmAg9npvbi2qrkFtjhL9UMrO5DpzBLcZFgofhDiTbiCq%2B4jmkB16%2B2j4GVL4JWT%2BzNFxauhSfzbvH3KGpqlzligjglWO5u25LlAyLBcbpT4%2FRQjEzfKQQkEtMMmjhr0GOqUBBBW%2BMG121oB4nyrDVJCzoKxy%2BcFeE5RLIEb5xY6KxWPplVppSLCfmon0wXgIL0zGyJclr4EFY8w%2FfIeAnk0WcsL7w97ffpEIHKb%2Be5Tx23QTfVtB0%2F%2BZMlNjIs1TV5vBXfOPibUvuDqrUxRAbI1YFZdDEu9V7knAYyYLTJSGRZXvqILHWsTehoWC0qHMcigl8gTXcj53q61dLHPvrJNQGOLwezun&X-Amz-Signature=1a708053e4f8dd58321d221957e1d9eebeca88c6ae0da7b729576ad0b0c50137&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
