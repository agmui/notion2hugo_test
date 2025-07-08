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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5ONZMZA%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T110845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDG%2BY3YXqTWACykUgrMp%2FNSzL1j6NFkCJQZOO7AK9jpnAIhALw62BWJqXgdwsWBlewHq9L3aB8pi7caniSL56noBV%2BwKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwazpWkAb3Y%2FEVb5bMq3AMHs6hgBA%2Bfxy7XeRIeb7BZHcigYXtJP5qPOfRtoo9gQr7ROQtM2yizzhemJAS1yR%2B1FB8LP1uIy72fhDGG638NAcfe7KfM%2Ft7LT%2BJNXw6BLa1Kgj%2F43Uv9HMLwWv7tuYiSjB%2B7rTrLX1kLjNeGAfVCEFulHnEGiirwR%2BRsIGLh4Kf0QmPjs8hvAd7H8%2BiiNwd5IS46ETcHFO19ROaICgIQvI%2FS5zsae7I5BNrsz%2Buk5xc78fj1QFKRAf9LNhbd0%2Bm5enbQIyA2vgEa3jIraLboKWUjl%2F%2Fkmfx5WW%2FIs2UYhF2jGueMILG2Z2yI29qO2mfLU3IiT6XiyVSVVwLQlvYz2i4VNg%2FY%2Be4O7eN7MagTPFCgibHmfmP%2FD9Bpo04PhKVNUWKr7v7UvfriHGJE7MDOikh%2FDfsO65WqfH1FHbBR5aZ2VJ3K3k4yaHCAp%2FR4KWT52ScwbnoaXVbYjqCJuQDiRit6ech1srGdwu4rl2Jjf42aI5C2RN7Z2nJRxZQd4dcs8CIxv5n8CxyWAxL3AVTAmxYpfwx%2BABG799i1WtMI5yP1Sb6pPlHmnDLxdZYBbsTAvQvP5Z1l%2FyS4Ee2JsOkGJKMIsipEJzdxToYglf7YWdLw3zFjYsm2IQeoQTCnyLPDBjqkAcFhYK28dtksQ17zM9M3XWcH2Bx2MNQALm2OsGKx9FgjZ1m7CALjEb9djiMkRuh%2Bfr6oi6XP36j1ZT%2FEtbCjj7DYhixR20apVs6k0kMOtdGkrAnfUF7CeeVIwBallDV2W11OsAIA%2F2f4Vb%2FR31k2ww%2FfOpOiIv97Iif0kTYpY9by4jU%2BmNmdljc9lv4MyWxrKqjkJu0e7SYVHZYaSELp6aMRGJ%2FK&X-Amz-Signature=e8f7123f3fefdb29641f7ac9bbc833e41e1f5b21339f01f21d30bf2d321e0df8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
