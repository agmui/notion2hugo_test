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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UTCE62D%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T081138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQCungRf5XWgAVWu9V3nELbanvgGo5tyX4Dd5GYswKZkjgIhAMewHwEXEnPJkIVj%2F%2Bi8f5B4cjCOiPfRT%2BAfm%2B%2FxQkYwKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyRzEERzoQBY3CLT6gq3AOm1XyuJyRDGbmQPeCwB5FCvyBO53NBqCIu6RqMAVI7%2BPcnXBK5fHGMdTxrDASoUprBOJSXEqDwHHd1wtcdrIa8JvdThF0T5LoOsIEsJcDeHe37jZBsNzXprcvXBIiUFqfaLWwUgL3qmbfQ3qLzRkUFvcgXDHg3BJAOYXDhCS56Oo1fF%2FuZq8EHXD94JLp7TqLOzN7g1trx9%2F10ymvfpHCNK%2Brz4Z7bnchaPqGCNsekg%2F8%2BwMEWQ8od1p8k%2Fxwh4XX%2BWPjlXtCqyx4Y8%2B%2FctRHq%2BKc5pwcpU32t4%2FT6C3st62Xgxed9gRyteE49sHb7V%2BWLVriAKzS4e55Hlqt%2FwP78Bow0A8tw3VWbUW5inGXskHKWT0VbFFmcqyKzDOfnWMZn9O%2BdNsyLqU%2BH447o1IbdVRX7XeOJZoPSsBlTnKGnyK28Q7sgxvMNesAuCSK652J7kMo6MeF35%2FG1USzeJqBtW6tjw%2F4INJUy4dmiNuAFmbQUXqQzir5hsYKL%2BhTN1QGj%2F1ReVxaxOKEgRXfMkmYhuoDhgzJy756k6KQCZ2bNnAorrLVxuP6NJgCmOP269v03Ob6Z8rQ%2BrDJXDMe5x4MOgyxJK%2B%2BZlwxluVxbROy7nF39MWCzNPnxchjnazCMmOO%2FBjqkAbK%2FNNC87gbJXZQut7S8m8UWVci%2FyKM81VPlKnN9hRWkkNzQF3NBfKhTUFxwUa3rRt3mG0LvaybhhO%2F%2BWt%2FNo4u3b3LkBGUwmlQ6sI6pVN%2BQQcK7HCNGq%2BdoIkzSyt2ZZkPviTEyG0sHA5ovw1%2B83UiecxbTl7Eqt0YmALTlibI6fmA%2FV9xXL58tWkQkuwf%2BAVDVb5cJ9TSiwhU%2FeDhj6HDTzVgd&X-Amz-Signature=260da02f1d76e20f629683db37855a97f70eb00be26cd8b59ac4d9e4d05437c8&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
