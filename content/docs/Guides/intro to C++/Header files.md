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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666J2OQ5B2%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T181026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIBqsu4VnQMv1i5PQ9kJXSYO9CrA6e%2BP8EMRuOKKHl3wtAiEAxX6JcWklOZVCZTrV9DWNypzHmIV3K01kgZ1%2Firc4%2BXoq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDAOJy1FRStY7%2Fui4ISrcA361g5JLWNlY%2BOwxKd62mvNGIRopP1D5MJUtgE4cTGAStsXZEIRN%2BIjrKegeij1tXjdhQwTg6P%2BpD2SnVJAMEKgZFHrOeQ%2F1Lieb%2Fj1bhPZ4%2F2dGkOSqNZ7gFKaF62bkG7VbSGtpOUAoZnlL4ozKgGrR1dXeTWsOdpHmIE4naxzp1huJqstVJ8HfNkKdM74K8pZBuUk4a6t5vvwSFxgYYjxNsYHO0kE%2B8xFoHJJpcbZg4P0uJLe3XEFgcahnZ6oQBrhaZ%2Fdtccq616YVpUL%2FWmqOGg9sV2T4tx3VVhhxbtzI970%2FP060GAnHVNpx6iy7c6QE%2FIYmePmNGp8yp3iH%2BawkRWjULshTcRRYc81QTdr%2BPu%2BKJmVXymIcp9eZROLHBHvQF8QeInqWNXWpzfhUnVCaYjqnUTsnxbDQY7FeV4Qy9Vsh9ayhCtTiwxoQSQUhRX6T3LEorSCJsZ8mpAW%2Byicp2i%2BXdAuDYy8WD5%2BYOcSsCE8yDYB0uXqeVYA9g%2BWD07PbtDIjHDHC7YAF%2FgeXC9BcgXrFiN3inDo8pXf7Eo0jCdx%2B7qpVuWmHSaWCN%2BxLkZIH7zcokXXMjM1qVKs68T9Cf7uyUXsZQ2fEE%2FHOJ4vaWj%2FCmlQA10HcJREOMJG71b8GOqUBoV0ZvItOYtGGpXJzxdjFoarH8i95KwS2FsMOizmtfBMrWlx69TKnaduF1OTrYWP%2F%2BNAYOCXPgeIHlzUnCUo7ixjZC5BfsH%2Bc0d0ZvYa132sEhIBaa6fqba1cIN63W76M6GuGIAfsVYkhb%2BHrU2jB%2FCDUVIkhhfstF%2BX%2BVsUf13ThRY5G7jMe6EOMUCOGohmLmD01iSGhjkcFzAPA5KasNfbw3tMH&X-Amz-Signature=db40383e1fd479b3199cde27d3624c034299e46f970dc19df9955afdc02f6f7c&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
