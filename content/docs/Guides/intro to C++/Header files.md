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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466564VNQB4%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T161018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCIBmLlPxmkFbvVQutlX1exSRBVqT1npPWddU8bUSA%2FT8ZAiAOSwj65wtX73ecoyllzVolpcjrYm9juhTyqWcKptr01Sr%2FAwgZEAAaDDYzNzQyMzE4MzgwNSIM1R5MitIZgW3k7yz2KtwDpitMRMLo2sMryOTMvjwGPAizCvj0I%2FYSOhLXI0kJfO5fh2c5BWtxFP%2FHFCrpKuCtYMC4AyiBKu9g%2FRNdyX7f97HRVD6gdvbFUiLosuYZ6bIp9dBBRNIuU4l5URb3mp7Ls0jGM6ij8EuNg%2F0CU37YZfKDt6imsDFG559FKY%2Flt6Gcy%2BHtEDet3d1K9TepaF7ABpbdDYUI6o3eVWgU95sXhyvSzkpZWL2HkXbnK0nUP3DFdrI6nvwxoEQNOu34UYDIRN6zxRkCPYksFVVjiXP8LJnq%2FqTmrSaw2ml2mDVdRVizoH1KzHyWGU8S%2FjKxsFR5g4Cckda0Izayuo16vi82RRUbOKhTeuG8pmH%2BQ%2BwT0fNIPfJari%2Fzf6rxzWflY6SpZkFTkm7v%2BOUUmswNHWu8gmvNqY40lT7EUOWjHP%2F1aKwz99FbxPn1qDkuo72p1FAO7PByMBD1T0GRhs9n2moxBlMnQczESgK%2BKkQAx16ChI9%2Ff%2F57S%2BJ8kwdLYNuDUA3ZPksg2JXSA2e1msTV2QYOuqFoTyBbo%2Fckq3fahv3TmZFV7ZWBtKQkol3tqn05cqAzi7uWSuckGcI6cmS1KLNrQpn%2FxVzULGIGQCfzhp%2B1UOJmamIFP6TLrHD8uaQwyu%2BSwQY6pgElPVjlJpeX%2BhC58BRamt5%2FlBeq7u1e81LmQiQa0c6QReuzCwFcO1pEz6ikS%2F8VmzKBC%2FiHU8QkBn6XjTW12P44c2fSvQ%2Brxh5GzD8AJ9a6zwk0IqsCgyNUEJvFFp2BOhnYaxhnDCC%2BpSFt%2ByQZu8PW1pBu2ZemnxTAlfUfdtgLRBU%2B8Em7OJE7PQaWRww34s3xvB%2FZc1DuM1H0YDhJhsz9UqO8i0pM&X-Amz-Signature=fc51d78339b331313d2487de0d7bc36169724c262e9b9d278a18297c21e61aa9&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
