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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKGQ4UNQ%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T170113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTPlr%2FajjiXESluG9wVslN3H7obDfEp7NOMku%2BQDpDeAIhAPozzL5RfUT%2F86yhEQlVxgfspvXp1qXOPejVYM36YH3PKv8DCEoQABoMNjM3NDIzMTgzODA1IgyTbEE4TFtTW%2FSKaRMq3AMKVxM%2BjuPLCLSFfh7j2jJV7nS19zfbXLQIwDD78IquQamSkB4o9HBLHc71Fwusd%2F812RjrzzFRW09ClnGRjLpUEIXC6By%2FDeS6QZXI9R4TXAVnv6FxryBs992sfF8uRmOttKcQdu12j99RS0NhbcL1H1YHFWD2wZorXUBkC%2Fl2ywsWcN9gAAX0WkeyJK7xnpPgylRCMvTyfEc1iPonARakmgbn1jRPifyDGOXwdOsWSlvLQ%2F7kVpKEWNmA5GfhLwHFTv%2BNGEBqmCwHGojCxRAIVLnE82IjY0Bsxrlv5X%2Fg%2BBl1U5GJLUEnWmtIRDdgseoo0V%2ByCcTi9cJFp5WxLze9wRZRK2K2cHUAHVbH3tBlwt8FxrjIzoJYjEy%2Fm8b9T8MNHD828QcXSeSuvUEK024fWHvDTvOzJFfCQynk8n%2F2wf%2Bzp8xFwBmogMFhmQ8Ps3qV93IuGjYA%2FHD7LZElN315PYjM%2Bo4eaLLtN%2FPOuBlyxyGPWkyUvoLTm5Ry2EqGUe59fS2N4kmmiDWZgnbsTyXI8XpODXsZOybRY7nYkx9YgNXVGDWl%2Fuw%2BA7hfQsDYyBV6%2FtTZCC0nxryAyUmmANkZEiRmr3H%2BvKEUlY11IfJSW1eMkzDJUXz0iaLzQDCaz53BBjqkAZABA5d4h3dn8rohIpln60hF4CaPabpkHnRIhlcdw%2BTlwYUOuRqTQFGZ8HSePN1%2BGhwU9sQbM5fCUhIz75KLIEXjjSUBEnZJltTIpn0yYYjjUMnea4wWKKmV8bfKthG4RxDE6%2BEXlEDZE7IYkVK9vMI38xLhWOpJ%2F6ZjT4sJLQdQ5rD05vaWSqCoRkEssEmwMp5GVEgPgJB1KKInMWnrBLZc9hCi&X-Amz-Signature=cd69f3cedce64a779a25216fd98915719a5c59d10baebaa75a2a718972d1580d&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
