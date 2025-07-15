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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUQX63WJ%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T042935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQDpnx67IyLulfQYSOicA6UWSfbLOR1hFuaaZSmEWFlUNwIgA51rU%2BF0qIV1tbC7qd8ZtrHELc09Vsimmx365PvO2jYq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDHqmjIjkKQPCoWXEZircAzCKdvMG5bsmgek178XX7HBqXkDrFmBwmQ5HnMiilVZUArO%2FrgV5Edl9NuTnN74%2FmIXxtIBrIB8oQKBlzvSIBfBmJGRRQMjlM0vbnSgx6I13yD%2FtsPV%2B9TBbDIf6Mr%2FWdMw%2FAWsIRvGVQ4MR8wnY7lzvH8x23DosHtGMlJA5BDGRrx6%2FoGifpqkiAHc6%2FNUlbyDUpQ5gf9kFbB1icsiGiD%2FnhGFT3fsRXO0nIUj5Mj3UCn%2FQFq%2F3bVRHppJODSaSHCxbu9MBdd6K6IKF7GRpEq14B1i8PzPfeMjb21N8h228F2lTEyfGMs8lLyl40pL%2BQHJSfe5zR7nR05C%2Boel6tLPw77cbTOXo%2FuAK%2FV26HNZle5wV8ooVP5wYV8cJJrziQZV7wdwfX5z2IsSOg%2FtXZlBSOrxrKvdvpGA%2FSOncwpe8vrM5BKFwbeHB3Y0Mnzf7Flq31Lu97ATWXeXRkBL%2FFkw6vrj6HsFYOewJ1iLztTrUq1mIQAZDw5o%2BTZzXVzOsL3gSgfDrj68MIuDYokoTHpokjhX8o2FNayCARfXUxe%2FhquYSXCQtZeT3EETj9Xf8sE63eO%2B7mnuIb5%2BlCi4XGTQH9eTuBndTx1A76GH0YlzVQf%2BibscZmNz9Lc7WMLyq18MGOqUBgSlhJR2k9hGexjfw5Nof7QcmR9CoMnw84v0XyYcZ4l6lUckT71JT915xH0E20%2BYxkYNiWzeFW1yp1N80dgoSSqa0%2BxbjCMtEgG1kW%2F5SfmEfxc83kc1rD6DYwlxNIn15g8b0xLEzoGMelNI4g1HZ7tGEsjvR63DFIzSUQNkvqtdoRiFiWhoiNxcSaAyG9OwOliFEKFZIE4PNUnudYK6PKqhkeKZp&X-Amz-Signature=a2e460b02a384b5d854399ae1622460f677e8e2a9f7301594ee3809c2604bd15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
