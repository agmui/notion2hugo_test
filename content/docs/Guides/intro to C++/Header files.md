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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXRMVNUM%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T101038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIDHP2%2B6G60CJOMXjL71ZCzt5togv%2F1cN5ZWT5pZ6QmOQAiEAmGfrp64dEh8hfINVmQYLw848SyQe8ogieb2iBkRe4p8qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP9MLS6fcyeBW9cLzSrcA03B%2Fn89OgYSDNNXQ3OPZ0OIkWnpA4JSec00K9zrimKmoKne0RCk%2FtdWQ6JpUjoPrXGXi2V5u1J2GChUusawJqqJb0dQ%2FV51ijRK3SvgZ3VHrmbiogyCyOVnWbTNTXycaLTXk4fD9OpPPTJ9f81szLsAwouKRT7%2BhKXAg%2F%2B00NFkvcMCoVvHRGgsXaN4UyISL6qgvNViTaUddvhM6UeqPC61vwpXndVV0N3UQ6f1TKEcl%2F%2BvtXSmhAEak0o38CrZ3HBZ2h5QxOzPOL2pR8C1%2BWwid6imEVlhgkbptyf7t66IYP%2B32lsWEBA35%2BbXIYfR8ofkPlyzQwvKm0Lzt7fThUMg1f%2FyLTdM2JeBHR93F44ZTbRtdvt6P46ubtm4qPXelmhSi0qqqRaWG%2BD2vOE9fM8yKlGSMx6V7xOP%2BznhVMRIw6ExytB4W1rZkyCb5q8dMAl2z2qs4gdENf9%2FprzE1QsAr5GXABWW74D7YW03j6zekmaeaIoJgdrx1oaSQYxsDCqIB3OGgOAlshEX8oCJdrIyz5ultsCW6ug%2B8JGSjKPGf%2BhwTe1pST74ECK5%2FVb7JmVbpP6%2FICrvg8kkGROYyd2Nu4aMfeBsyeb6mGu%2BTHf0WZ2ZmvYx0q0UK3bJMK372L8GOqUB7xyHxKxHyG7p2zS1NZuf4xF44TDlzJYfvZegIuc3PZyNs3hLjY2e9NKMCD4ONlzcrj5e6aNyAUUujrQ5xpfh6sA8NIwOFy6br090F0ikRZAEIkVEl2ADH%2BKLg7h9Ez6Y3LYYDytgvj%2FJ2tZNRMar8U8bcxPldGJaM2mkQHETT1YeC%2B9SC%2B7BjMTMzbix2%2BGD%2BT%2BPMXGtArnE7pCcUGqgCUqHAO2V&X-Amz-Signature=60f332fc48d76c5f46be038d10dfba536398334d01174e18e0a2973d78e589f4&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
