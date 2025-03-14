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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PSZ67AS%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T003718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHnRCmMa%2BPtxnJStPFtuvhq2VuDX%2FUkzIVnj%2F%2FEtZJiQAiBQr%2BjyXfWJLid3q%2FAXFdoy0UhDespJNvV6aU1K99IOqiqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsNRliIEY%2BzphWInSKtwD1iMdr4G58zcY68R%2BchL8n61QxkmaQM122lsRptx7NFO1%2BcJ0eQbqZuzfnTU5OWykMxJctVxlXP%2BZM1rIuoyNA5hJHxaBenaBl9CtYaLILEeybyAc9sbLwgTeBhgYBcPth2Rlga0bkt%2BcaEaVfXkZ9YA2rmIyyEjcr3bLuhrze5vsoC0cEEu3YziPL8QTu6ijLxAnJLsJquSg6IQY81sV6S1hTGisFunX2ItG4O7Jf1D1mOmOwd6CAQ81Am%2Bhyn0aSjGmSmufmqoHNyUOl2D7j3kfB4HIqeae4gIJUZQiOQlqMBEZgF2J3ge5jEiu3r5F0V0nl8oXwsciyIZh8wNgow8ZzsWd2mnHeyCI14G7jpDjyue2sSbDLpWZT82YMTOSSozxm1aHBhfZWs0PkLsw6jV9JdhpYTf4i0FTBs0R65ZVuKyQ8lNH9Q7fdaXjInaRb5OMA62SKIDD9cazqifCHjennPbdKsBG04meXfGPjgQsq6NIpWaHIvilOEi7OFI3eSalo8r20LvIZaEpvYy1%2Bh4YnyAFwaQqcOv6IaU3BXkrw6G3PFqKyVSwbLfzUH%2Fqsz6CRfedqdXnX6FLvgZlQYHZdmy4v20br8KbCKo4kiz0t%2BQwNCn6FtCPkgAwjO7NvgY6pgHhTeE%2BQ4LwI%2FQlatrF6%2B3v72%2Fy2RT%2BZG78qbs0%2Fgkh5b6u%2Bw16JUMOtaG4EpB1KB7pU0%2BM4q9XuAnZ8Oo%2B37W8YF4QQjwjhCNoFPDHANeoRL781e03BsuVfrH%2BMuh3kmMwx14yBaa0pwAoGB676XRGxuL6oWe1uUk5RujQr9ifymK9gPzuz7t1zlpKwr0qnClQVCvy8s9dWX%2B2uyeYJgTPNrwYUCcg&X-Amz-Signature=03510e3c8df22d2fd5d2119c12485b3a978294712ae68239c61414d333bbf9c6&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
