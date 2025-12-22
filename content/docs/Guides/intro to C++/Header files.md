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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RY5OIIXO%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T014937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIHjqprTw2zh7ifoS89MPWfWJsphrIJMvSeqr3KAxQuYJAiAHeLYM10f9rM1ZnuS8cML6yjq9p2qfZGgAjHvulf22GyqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsG7t%2FEyzVJjop1GjKtwDXXGw1gx6a2uemPF4PWmuEzWSvlxn5Z8XANFFb6WRn0EtANQNNAmHZgS0szfq0HAjt1%2FthO4hTHcGkYq86JBnvt2uVzMgk4n9mMcymkvJaF8ofpzJR%2FvFGpPv58nES1J08n9VBELXAJomL5TWgTX7Agewd1taie53lVm2UUjDxBgUT%2F2%2BSRz1VfcmvnwCERihpObSL47kbDL2yA1%2FQb14sybvHjAablJ%2FSup%2B2L8mAPRd1rFhP0nhjR%2F0DX8QlsPWSUJh06KN193ty2dudEHViUDbcGXf%2Fzk7nUqenSJnTJrCryyfRPDfMFJieLWU49iHSv%2F%2FEXDmx3PWQOKTgy9O%2FhTSVi7Q8goQcvp%2BvI%2Bn7ErgttPjfV3FesdUHd3RaadAtFnPbWt8vRoTLattJC1CllOXXV3z6O2fgbaskLVzy6iIlmDPAMYemGyxpBzvHDt86kHVT73zepkRkkXF4LNOL0AUdzz4aC9AHJna4YhCY%2FfF2MeukAqnyXbCQqApuQOWZaan5rwlr0%2B5VXzVChS5XJZQCtaVQJZU9NECFxDXzyAJn3EgTtlgpfgL%2FzVhbCR4HwzTkPX5r3xDqqifvh7BCNi5DoP4Uwg8KIW%2F%2FKfavg%2FhKHtzeG%2FHyyruQKIwv%2FmhygY6pgF%2FAV8eP51O3bUyZNWviPD7bI9kle%2FNgtTAt5ADQ4yzwmbO1NznlopWrnPAfxqf%2BYa68ewe4WapWjjeaXgsTPKhC6mxl4ekyew%2BnWux%2B%2BmBSzAuXxdojqzLiqkCiq3BbFZakzhYzEJvVIDVMeBvVkIOTm9J70oZSLLp%2FNM7nGJSzvMvpBQZmjmuu6eQf9P3Cz6M8yJTzocSVTVLwFn9AMS%2Fnb50%2F9hi&X-Amz-Signature=2f576b63b98cd65c337fa317ba4eb3f4a83381fd33bfca3071c5d6767256586a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
