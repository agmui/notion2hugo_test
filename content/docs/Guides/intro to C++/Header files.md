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
  <summary>{{< markdownify >}}Why do we do this??{{< /markdownify >}}</summary>
  
In C++ we can’t use a function until we have defined it

**EX:**

```cpp
int main(){
	printf("%d\n" funnyNumber()); // this wont work
}

int funnyNumber(){
	return 69;
}
```

To fix this we use forward declaration

```cpp
int funnyNumber(); // forward declaration

int main(){
	printf("%d\n" funnyNumber()); // this wont work
}

int funnyNumber(){
	return 69;
}
```

we say “Hey C++ here I promise I will eventually define this function `funnyNumber` but don’t freak out when you see it”

Here is a link that goes more in depth: [https://www.learncpp.com/cpp-tutorial/classes-and-header-files/](https://www.learncpp.com/cpp-tutorial/classes-and-header-files/)

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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XC7GTEW%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T015631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQC2FxM2wXHSU8SSOooCv3KQF8YHdibzETegDxrpSet4vgIgYE7ZGBGAkG81bHsBc82tWL1oFx7iZl1sPY9NjPXbdr0qiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKiA%2BWbk1lBCy4uYkSrcA5oVCYuIYx1vY8P2HEjSmMaTZ07iHza1AKQxeMuzsZuR%2FE6W53W%2FuBFQ5pC6m%2B6NKQIR7UsBnHS%2BMMMqeY1mPiW9%2B%2BbuGZEVdvpbW57M4lGttIdlpChQUa7BjY4do%2BrarFjjpDDVKboiZNF33De3oFi44%2BfwbKGdlXmTUUeDqBfDV82%2FO%2Bk8hTwSDV11SEtecD7Vo%2ByQMfe9%2FTpufnUNJOLiNErthaPfa8dyUAjZZwllbyiNYP5%2FuOOc%2Fkwzha0iIvKGyFdcvL3jxRUsFjEPDcaovdHKDpbbwuqvx2VPMM5j9c9chUZ1TUc1Hm5pQhftNdPs9XVSMyKUsvgGf2aGrjIfRwe45cUi5pb%2FkTB4Zea82EgdEUE4go7BYLqUtbmazv9%2FWjiv6QDduaHH3FIOgOWsLl%2BomkRoDyiFEd76opLtqSWbGi%2FIzAcEne0Y91R2RbFICbOgz1b%2BGZJMCEwJhkrbzzjTzNB5gNWkIqQyZVCqSuK3N6w8nCHvGRFYKWiHcSLiFIuSswceG2QHUysi%2FQbUbIgmDeJAEopdM2bwv4BVVCX9nmXKnYGJYBhjHFFVUZX5lU2f3wBix6%2BSzRWckQxQo0pYWls2kllPlwdpUdl4uY0zWJgxVkdOJonhMPL6i8sGOqUBLsLQ3uN%2BYxfEUGSyYzKShHBu5pRf9yxmUC5%2F9vjR7LMCueKyXSi0YhFl51H920eNyOa1t3xsvfegDUyFuhx40epSKUhgQgH8zv%2FFOhF5ky0ZH8MQSv8TnyWyREssqieKKHmDIaCGC6FV5vOQBcnun86BMfBe2UYPEsIvd3uNfW1nc5vOQrMHbyhOY741M%2BlUJ1G54RJHH7f2bXFWjwlu5vvF2xbQ&X-Amz-Signature=b8c65f92a93f2a72392f0ab64d0b3acba14586b524f006f92ec0a502503ace2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
