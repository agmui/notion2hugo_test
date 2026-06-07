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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667L67BIGP%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T035900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsCa7AZ37%2FQYBrsvEcumrybDAiOvmDN5wp2r4VXqimdAIhALEpTQdNch3p6Xz6cGuYJ59VxxBJ%2BvbPpbra4n4lIiZoKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxXn779m6%2FKz4ndQvYq3AOzMWerCwDjFaZhAIbjKC0yf147mk5adPLVJs%2B5x6i%2B29QEcdIIUaEXiISY%2BgEZB5rlJhQsJzd71oiPa4M6bHRFXpAfPNaYzMZJ53oCSelHNnLoTuRzwED1UTMTVljSI0AMVGXPkjfIM%2BJraNls8FeUy0oytIo9%2FtvBcnCqn9fTC4%2BahO6SADVG9ZGRNS8ALhSTtmivPtO1svX7mpMp1c8%2Bo77qXQD6uk%2Fx2Baaw7oJVcLR5lgfkAJNn1VJ%2FBPumN8OSZlf0ZmU3uHkOJ5NT1EZmwn0uKgNelhDdawn%2Bh%2BQatgRiWOBgx7VAg12ZtjKiAzhLF4YzbgHs79e%2FR5nf1QnPkc1q5Bi4I1MfTm3xPj3LBdZeapSocA8u4ITHigdGQzzw7J5iorRmGujQcgm9F4S0MxfaPpKC7F4pa7jRjaUSHhgNpMWQnhbrTNCQfnm%2F%2BiY5mG%2FidAEWhJrrWZ%2FMXGkV%2BcJjAJRWiBy6VFruFOzemNMZ99yFjobIrrv816024nvFBByCU%2FUTv%2BYlAn94cp5gFr1pZcn0RSyTe98VDoxcpNafOc5ZC1VdFkJsjUyZc7x8R67vdNoBU1%2F%2FU3iB8T0SlrK8RYkxJURsbiM0h87XO6bci8FSgBgy%2BLbRDC80JPRBjqkAWZMgS18QSOX0pGb1alSE4zYWX0Pp0YXD0W2xjdZJkufgh7hiX9PCD%2FlYrxpEOg4XpqndGreLDp%2B2q5bHiIkBIPtcgVYMwr1GWOy09bqusHASGoB5Bu8I1tzYB297pmjhQo5C26qqqZKbRLeD3xGxwKavgFzfjh6dJ%2Fo%2BJ7yLpbmYQW0bay8AcK4xxHvQVpIqualWiKnzRSRsJMnVvx9ScXlC740&X-Amz-Signature=101a38aad957f1a59c8a4f94778f2b56419174390203b91da31e1669879708f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
