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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663C45LGVT%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T131005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC9xnI65lY5OFKeFZi%2FLPGl8H0ZbmqYDtD9B6MuUEFg7AiBV1xNKNYM3pyRyg1d8ljEa7wzeRVvWMsdkiNdDuS065yqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdgN5iJZxArK3qy0lKtwDslF3hzm%2Fav0YI352ePsBJzVf91RjBfxH254u7a9X37rIj533621hsDsHzN3LNSchHa%2F4IttzDQYEnzSTMV2vDlBHwSrPo63kPAXaXGSgrREMemk0H2z3ORtguE2F5TtjoQFoAswJBevTAIVz5BG7WtrxLDl7DPuOicT24E8A69u%2BZEkjzydhHWPiPFSao1jdRtcrp0PPNtVXQGntyNqdSzIyQVipQCii6idi0A6WDgBL5N7w6L22cZKO4xWj9%2FqDGZPSf8jQkHyWvDD4bq7TJeznEo2TSkh5LaZ9trmO7jQ7yk3wsA5LdjRqIRbE0JuZB6XZuBj89sAM2CRWwNVqZys5O%2BruTQQHX7HIOQgZRee0HIB7dXQUDiXoeVob7ubffmMtGnleXb16StqmhCtkJlW8%2BP39DfoRpoqqL5r61td56LIy50vv0vfidTfrN8wOoHbWjDIKoOsP%2BR36yYq%2F18Rm2GLB8zOSGBIU1lrqSEuz5eLdmXZElD8brfj4mZGChRCNHmHj7%2B4Cj7A76qOG2t9gDLG7Hxi4DqFVQMcurYfv9fsTJmIbzlUV2HmODjx4MVRD1BdFcBS1dhYxKc3%2FCcIxPctku6S4LX8bwWLNW%2Fw4zJvVZ6r2GkdJRIEw9uOhvQY6pgET2LJNNIIOH%2B1jR9ZzbrL%2Bx5fGc%2FVK%2FOf9OEibV7Dh4krkT8Q%2FeNMoNX75k7jxyrbfrPSQgT4gHItN4DaVsBsFAiJQSX%2BlONuyPPKbxzJaBU%2BDv%2FW5MQuF5m4zUoKRyMR5FUhHriKX2POsW508j%2FsILkqkWn%2F4sP9xyYHVKoH%2Bwpmhe81rPwBqJrg7Sep0PzWNDtXjBRQ1qUrpim7Dy22nJLHTbcD9&X-Amz-Signature=9a484701c867a2898290f81939e0e6b05aa848920cd0ae2edcb19367a5de1cc3&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
