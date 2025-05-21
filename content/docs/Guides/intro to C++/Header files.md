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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZSVDIHG%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T170759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQDU6onpC7P5ADseYbxQ%2FL6oafGZY5HFrscgE83ZKkyU8QIgUJlvqmlwWlxeRn4GA4aufHd%2Bflh40%2BMIq851ZGXTcZ4qiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN7bA%2F7JfOBQUSQWtyrcA6v99HVdcTUgRXDFBpLfN08JbVAe5fgWvjN%2FwzdsdodiSKFFIl4XMVFbgoStH0kMhaJK7ifjiBhTPj9Fx%2F5y%2F%2BkMJ%2FG%2BC1icyVLKtVQdW0lu2%2BkVxUdRPWeRpShAFqg%2Fmdbm8Fvfkvy7Tp5KTxNiWUZeqGZ5IH9R9RHMiGSkfX6YRX5xykmTUE1InzDYV24BcvYjfy6yHT8iKmAWbG8%2Bx9KhwJK4bFwZlZa55yblmUZMtU3nwFyEWJCC%2BB4kyhq%2Bx1V2UfK6IBTBozxFBD%2FW1NSF9%2Fdpm%2FUDRr8qmA79vLChkKc38FVp28MNnmk8QlkOKCCYuz31DT35p9i44isAtJY4RUkB7KaVr%2FnLgraQIooUts8XismgKo4UMCgmpopTuLDGj5ePj00mr5%2FLgSKXj6XcEhBKA3CDtoXx3Hi%2FULBiPDNuVOWkKPoBRUq2EkpnUHjAp1pOiixx4o238plSr6pa%2BTv5tMDJBF2Zzimqe27PZSJkOLdCtXmsYZoJM0JOExU0JdNEmCGKjKRrHDgrvmyFApXz2Lo1vX2kIa0ifP29bykx%2B%2BJcASsYtMe0ygLFwFt9kn6uii3bXshaOLRJXnzdfNFFUWR53idJN4RAiB61LhrFoyKc4aKw3g1yMJqOuMEGOqUBCBNHHk0di4UPmTIHcqoY2rCXhIpPy2I05JBG3rFRaBA0qMhsbyMV7CXZV9bqUahN6ZDA1rSloB8HRPigGRPLOLO9qF%2BhpPI52Y82suzhBR3viFag%2BVOiojs4%2Fr2AB%2Fc%2BBM462fmsiTJErlNHIJYoT0X%2BnPo0sTW7cUN09umP4fc0jtSYuzxMh4lvH6nd1a3jhaqj8TtRFEeS2k4xpvEEZ2nx0gKX&X-Amz-Signature=05f4e0b3e80fe983cd77935fb81a83e7f21515428ae0dd140d3f5c250a4497e0&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
