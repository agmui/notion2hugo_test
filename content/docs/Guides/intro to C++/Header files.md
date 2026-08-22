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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VALEPZAH%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T011237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAoZby5IKzqxC55T1acSikMn%2BIc1K5%2Bjcu%2FsI4%2FBSKxIAiAQmhUF453XJ0Jn%2BgQ0HGjJyeMtT9f0WhiiORTdfclfhCqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEqm1qNlsCcScLYDVKtwDEF7kd1Ks4m%2FODu%2Fjf8%2FJRdHjHgyu%2BHO7q23UncaASW7oOhPR%2Blk8TqyypyFb5hygmpZAl4xUXYheRSUx03yVDE16I0WulgeJxihOFzPISzJBhjV9joLHZSbesiZ5FAS9P%2FRfIzUeNofsFcvaeXHQcqrHkWxHYl5Q0nMLvXJXFRhC8on3MGRLyicfAQn0RLE4JGoQ3uTql9UN2bs%2BK1ULB5xvhXuQmWSqNjF2MDrGFKjL7fPv5HK%2BUwX4TRFzZeerXImhiV5arhfyn3iJ8qsD9isLcJeSEbjFFqSaI0C9%2FfSw2j6Xn1xg5e1V%2FAbNW6i24bHC7nUbjs7ygSHU3j%2FKtaO7EWcZ709JfdqtIJ%2BuB8qxVh6cZzaJ92FfWHAgridCIFPLqCNTPvMo2hn1zkvs8EJSwvDcU0LAE9nHsmjyEiT1Nykn2Qn8%2FxGupcijwBEo2VWTGS3B2feoN2FSdrT9gEK%2B5FmWPeauneT%2F4i%2BPKrzm%2Bp%2F7n0FSkuBrV0LEknNHtH6B43yPixD71nyWYwcUCGnLfV4yZv7NXyasNtO3e%2FZk%2B7MYHdjzsqRo5N%2Fq2ZXPVSTI1ws705N12kbjGvbMZ1X73pjFvHew2OxaogIFubTX1ztQXk0Jpxb30K0w4MKj1AY6pgFcimxLorJd5hZvvjvKuZlfhNlU6x0ml4CHoVlYUtRyoOhzJjaI5PBOC%2FH8OhnNoEM%2BsifiRzjt04hzbIoISCacRKrXo7mRBMelL1ZDlc7%2BitAaGv6ksosrFDr3cRsKEHJQzqUw1Za2dq5S1hcoBl%2FiTTAq6I3XDhlLO6fxjGVXOYtYREb5msCEE1cALLxRqD6hmkc%2F3knbgWQPfNiA%2Bpbhch2Y6ULp&X-Amz-Signature=24e2fe50ace78825740504e37c6f7ee19bbf2e1f0b1840750c51ee3ad97ea4b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
