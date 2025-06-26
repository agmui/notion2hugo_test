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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFHW5XMS%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T041827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJIMEYCIQD5CGUg7AjMjj7WPxLcQ0Tnq9TsgyTsR2NqkGDrMCeO9gIhAKWNgFk7DmJJjn2fR1DqhKbqI70CqOzT%2FZxBhk6EVQDhKv8DCFUQABoMNjM3NDIzMTgzODA1IgzDBVb9AtWSwL3TweEq3APSmDlHbKavrhHhv551XQdnR%2FmUS%2BiLC%2BBVW8sc8ti0itsPftXabsPm7%2BOg62kssih6D%2B9L9uETQEI4i8cpSyG4W19ltfu%2Bc1FBtR%2F%2F%2B8PeB769jP9ran1%2F0a7GWYdOvQQItl1JvRsGY58aNxTG609M3txghENC19vFuaRpwj56zpzAoNg0ghEAg%2BimUf761QtljJdhfyUE80lXpLARJdl7e2j0q52Eex%2BCnlNrOeWa0RqvzMRSJjNlr8j9cJY6u46YWL5QuZ2uEsxg2QyIQoS%2B0woQQZgguqLniYnREkWDI6cEKqdUIej1DZjW7e2Zf43wbdWrNtdIdIafPxB83%2B0BptAB3kBXz1xePTWwYZdLOFK8ZcLPKqV4yDmkH5q8Z7WQSTNS7reeeu86bnwkOYhK57qPTs0C7Vi%2BcnF30b7upnTXkMVMOdhS2XSIGEGCAJNFMn8Kc8L5CoNoi7atqQi0wt9AuP%2F83V41q6nFKgdjYtL3L6pWNoja1iUi0aNoxmbuluWxZUil%2FQuMean0%2B7NK0dBhsX9mPTcU2lUau1ZvDFDeHiTZTFQ4gthqoBqAu%2FFr6spovDmwBJ6k%2Fuo5WKv0sLdhDFs3oj%2BOOC1FrCTd0Yu488cK7YiVJ26S0zDPifPCBjqkAVh8ysRC4sSkIIwidcxJyS%2FuoL6oA%2FmC0%2Bz56D%2FPm46zljtXzvcFCxdg9uzlCukAEoTroZarcYBpr6ZfLr9wYY%2FXlsiP6NXP63saR3B4pVu8X74H4ANvRCJxvykAdFboRxAvPFxM13RpAN5%2B9E7hIVdm3j05jaObdLI%2BzDihvqIO8pxYVfiQeW74be3SjslVjfW96rXkyPUCeOZyEdhMRKDY11Op&X-Amz-Signature=d1329cc3c52348bdbf130acf38659e83c318e00ad97285945f6af36e2325c463&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
