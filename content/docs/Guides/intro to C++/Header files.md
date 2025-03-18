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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UISGFYHM%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T021738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICbe4rP7uTRiRWDJY%2ByVp5BH9thwqev82S0O00BXftUdAiEAvz%2BoNJh6HdQpimRqVXKfDx8MDOoxwyC0DTzyoXD5rSoq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDPSvaoTdRC0IL1U59CrcA3QvXjV7DWW1LU%2FGLe1eAjPUFiLT74vGKOlu9WHDpoYRLxJFPkTyRqztEy%2F61Vn8JwU4BN5LJbk%2BrxEVmatos%2BZ5K7O9wXWFggdgacBLwn8VZ1NInsG8%2BXQGvnn2yqeAa2GKiidtgrApyFvlkcbzOkPaZmX2RM8n2jsiCEnGHY9g5P3t%2BY3TylfAtBw5Tv0XKPAqsTwdf02IcKWogzoRusNYiHp%2BOMJO6kpN8RfIsrJKWXDP%2BHXuavnk3jjIKeQpG2Da6XxBxaZQIs4OBlqWX0JRl8%2FzC%2B2nKq%2Btyla0fgPrGd8EJaXoKduCL80d6wYJ7m979EOsV9LJURpxlhPMj%2F8t%2BCJ6gki6ARLTGYnnIj%2BMXoQlfMoyKzHhNoBHCmeZImmoo09HmtEwfdy3NgZ9kD6UCXa1jUIPdv2dWIyc2%2B4qEjh8WagxKs4ePUo2bOFzEC3RpQwvqAaFXziufCJG1L8lQ6z4U29NuHZl0M1IBfX7FIkq3e4b3CtYUduKa%2Bfc2KhDlZbfNpvpIeVYLMMLJhCMxnBbYYTJlqIZOsEoQzZLUDqB2gVstLHTvUn%2Bo9KjNwiTkjNw9iE0cO%2BF2iD8z2hPgvUFnW0aHCkD2i%2BWo%2FXEPGhtb4sY7YG6dW%2FNMLKr474GOqUBK7ROTf%2B0oiJ2X9jzt86uHHUDDkb0cxJ521zsvQWGmSKczKnWSonqvuI2E02MOTYRR7JY1ZSJetpua8xccZ3zeCNFQ1k%2FC%2FFoB%2B0xeKJ0PioaIiyTNcVeH2BDEA6VM6rqWpYN6sthIOJ80MHrX5VA6WSZVAfOhf6HRCw%2Fh1YuNoapaiSp4m2WDcawLxIWL7rjq0ZdH0Z6huf1iPUOtT95iDphiRU%2F&X-Amz-Signature=db1ea7277991a2f212d99951e7542172cb384d7930109fc184f3e37d30e832de&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
