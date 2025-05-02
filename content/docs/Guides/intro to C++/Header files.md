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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2DD2A76%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T220811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQCQvMSyATbDlwyVjEEEJz3vuxWOzNhkGzGKlU6B6aTShgIgCszpTDQZblIREozRlg4CO9XhgfX7fpnywis1us%2FoFwMqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOi%2F%2Fk56Ba2Au%2FFSwSrcA5kYQbghoKOcMDyA8KRNSP3XoSGdmKc8ac9JWfhalxCdWglE979XTC4oR9SxPLtJHt6A%2B7U5uWEfP1mxfvX%2FR9kX1Z37DlNQVPcz8zKRB6bqMSsJvSbs2zoyV3WnBfCmE3B1pgLVrzljCRDovDBUuOxOsZGC%2BKstfbkrrneho%2BiueYnQO4KvqddchKUqHxDiNDwIBDsNmQ%2FNe1hvQssXbs2rk6kXS%2B%2BhRiOeYS%2FDFh2Cdm8XpaAKqMru%2BcL9pJzNDztrYrVL52OTEasZ6TUAUSXdhT50ps2JpXMX%2FTdYMPnMA8uqLQ12tKh1EWjvmK5YZhu7ygwAyqrDc5bkTfROXoFiFgauUa5vIYscLfrPEB9HpHoNoJN6jRQgAmImps3dihB8Q36V1X66Ba%2FAikIy4S278mjWhlDTmw1MSTkettvyqfiA4Xevg%2Fj2tLfQAWrGXNoArIuIXvf4AdBo%2Ff0rUSwDBqqZAUywmJ8rUssNvNJN6CJKLROwD4TpJtQT4u1d9NszxnMUUOxKAejbYkfhc1YxqR8dyseClTC%2F6gWERwvOA88S%2FMCZ%2FEZ5xygVWdzFuxmUDMTSHqy%2FWZfeePu8RLq5mW%2FBl9jurI6OCJZGZYowEBH%2FkwsRe7pVjdlxMIrl08AGOqUBnRMQZ3RGTzcPT2rjoCNWRtvQG%2F7yfVZdzgNZ5u9yPmXEhts%2FmOcAEbeMYkmUlr3BD%2B1njVw8pRWNEUNgQGcEbtS48z89YG%2BE%2BLbhPjwxjFQsP5pjosWjEJHft8W3cIgvdfC82YCIFWV2wnqyLjGDgVDEPEEagq3c03idHlaBSZCdV9%2FHTkcxoNNVHID2Hg%2BAMcCiwLH3IZ4cksXPUDGK37AXMdL3&X-Amz-Signature=580e9d8cab27fc317e75b4820971768c841b5d4186be40e5b313d6838e2f56a2&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
