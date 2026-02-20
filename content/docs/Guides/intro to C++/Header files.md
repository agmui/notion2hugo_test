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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVIDNHQL%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDaxoMQ%2BgPmdvOaBBxxdS8ocAoiVBAP711n%2Bm2FXaLEJwIgVnUEwG1rD15mfpEi7WQ%2BYVpOhGK%2Bz8uc8LRLtdMdn1QqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBkEGFx7rJqCPI0PrircA3b%2BXzvppzYcOS%2FpgDzWjv%2FN8%2FQKwIZJiL%2BFGFe2DW7ITBRYA67d7hyqvdUZSfUzXKRAx6lLqfpuAHP1Rc4WRVZk3yO8Wh%2BQFIPiGkJLhZEUP%2BDxkuZB7pHEpK9uFdDVSE7BLGcBqZ48Coo1O1oiUCMUEDy92O9hei%2FRKWYFE3TgabAY3QOrTDkaODD7OXum8CHMjYz%2BenOg0tcj5JLH%2BY8qyaC%2BjZZh6iO23yQz2Jl21Jae4CeRnnOruwd%2FriHBT%2BixzvUyQVDLAfTQgcHcufvpY7ocUS2%2BN%2BJnNvUj%2BIFqzej5MM96zrrn0v8LiLMF82H1v1bjpcdIbyTGA7iMrA%2Bd77LIyKfrsoSEpqBZHSi6N81LIWzDoEcdEY3wsy22KJ2gjaLjStxMVAtqrmF2Raso2w9BW39bCbPNpbYHdAc7%2BBe8ZypNFcGZLDjxzH5DqvWCqn8OnhXidiJ5T8sktAzMXMdEceAYoYh7zwnWMu3CMzMM6qj5en9qurvhcchwbjnZ2SVyh6q0JMtx6TrGr%2BFC4RkYS4lHVs5qL14CZof4L6LJ3VrgdXsK9EcWFRBRYa0Y3B56KAec2N0MPE0lppC48gdZ1osaNzR8gjtQlmsqJHU1a%2B4dl%2BmJSV8BMNrn3swGOqUBzPoUjPo9rm27z7jlzUc%2F%2Bpcq2dCcpDEdrMuPElqRRQPvic2Tse1H2USRhwhtqg05Lq19cNV89CKLhdiGDvSyD8HDvjlrzX7iZDDYwhdcp7ifdE3TIs8%2B0ZLh3GHllJfENxTlaOl7S3vSK%2BlQ1dKjhmUyHYpc2R8HILHsZ6pFcVvNxpNLkT70hEgIThZPNyWj%2FUbNygqiY7oFXnL0KgWgazBX0e3b&X-Amz-Signature=5e3bc06d46be68e4aa77255a23a32861aefbc64d279d288c4f508abb62b006ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
