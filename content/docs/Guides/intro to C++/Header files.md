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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYVIT4N7%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T210116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQCxYyYM1mvxcYgrNeDZYy69Xam5y31cxNtVzwumWobF1QIgIswjRea2kN1%2Becs7O1vPA156Xe%2BuHyhhcChrcMes9lwq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDLXyxDPmDP%2FpgT%2FAGircA0OAFDxUfwEGNeJ9Ggr4BsAXDmUQmme7Bb%2FbUCxj4FcExpylwu0A5WwEapsnm6XKkg4LEFB%2Bt5uKHXJKpxaRU9FCHhAQrc89nyp2LZkIjKGAge4buLy9yLbX1D%2BRdpAoUci8UkwySg7RuFU0u%2FQ1bTIjPnapig5m2Kgjid2hmtjiX0ydd4anVdiNz415gC9TxgU9RM0%2BTh1FURPn%2BJ7s%2F7r58%2FwCReEUVeIe%2FS9f6pOFKLw9%2BrD2qIULnQIkR9Hc1IpD0h06l1eg9sThbe4nY8n9%2B9IZTgy0YVqLN9lbuKwHBJK0NhVfQQkNKkI4fhP42hNyXhRn9ZkYCnnDe6sBUD93lWQBVhHIB1bIySt0oFbpynmRM7FTGr9V4BbAKV89mMRiYcmebkys525JX5Gd5dOMWl3%2BX2kuyogGA1GBbO1PDEBok0mHAFsQQeopLfVmVG8sC%2F9u2V80s%2BlFVQpHJhxrmft6x%2BmvzVm8oTmzwetkMINvnsdJY5z7ulSFIDDklR%2BBJ2JrXOO6b2zfIgtIi0YZLnqWUJa%2FYQPykdnRVjzoq4VftUSJKKJriTh8DgX1h%2F6HhmTXPlsEUOMr5%2BAvwjjTxTHXgyqAVOsEJxaEBMxzonADE5XIeNlEMwX2MNTht74GOqUBekJSj7qolVJzUAzLa8XDUtw8VglGEYlF0qdbwod0N10NZ6uFTVl%2BRBkJCknKT38aaYiWGXe6BrhtZ1Vrww12dkbihIRkYqE526t1n206heSFM1HfhgA4n7mWbqZ6Q%2BA0JuSz4Nv%2FUKDVwVpYFK493JjbZere0e26F5dxXuLMyO803FDP9oJ6Bd3rFXSh6yZ5LHVSPhFXegiamkFfY1hQwczIWizH&X-Amz-Signature=f9b0c2c5bf7bb95c585e065beb4224e2da8a6f0b272fb7eafb24bbaae129594a&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
