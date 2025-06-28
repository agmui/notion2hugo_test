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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z57GOLPL%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T150747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGDMxeKLD9k%2BPv1aCRsbV%2Bz7bqq9c6mJMGR8jGKEVDiAIgeDVimrEICoQ3KfGWGg%2FmvnEW2edGxTv1%2F%2BFCSwv%2F%2BBQqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKScBWGdF2ddBmXO6SrcA07AAnY%2B25u%2BFjRY9wZJ1dvAwSNhW%2FCXt6wEEIsPb95VoevEEtfrKm7K1yTrobYmblhMzowjt%2B%2Bf1JSdYUtQlqKoO27LkUBxyTdLAMLdcRmqzfZOq13MmNdG54KXWU2eHENQXkWltZE3C0hFgmgu2BNWAnKby%2FNTI1V9QaChXTsZ5gL%2FgcPyJ%2FC5d1Nc0l2KHR0PvWAwKQttTYim%2BNdjx4B5fIO5TLc6gjscWhOWSw9%2BPD17mdtfyxqyjb8tbEyWbhmCvu17ztNEpgTeQ7915Co17oGMQlfooj7K1fGtCknSYi8t7v3ajirw3e3%2BAAO6GECLUeuNzoQThI0TahrdFevmjgP0sRVHhnnJ0djtE7iThiLAzxBB7h%2FJ6cGORpZBFYoOJxxA5VLy5GtO1XuTyvdBjDza2FL5poORzdVq3XpeOTJ50pYqbTIG2gd0qmRsxdbd5t1YTC3REEekvtFERpiIqFxS92JKorYIDVXx7om1Q63k4Y99OlzTvMAuXbM9%2FZD7Trzox5RTCazJHP5n%2BYSoZBdTO7pVq8szAQcWRxrdp5e%2FB%2Fq6O7U7CJDa33EH%2FRETKSvgdY30qh4K%2Bn6pBxwg%2B3JDaxROvUeHRhf3xkJXzRat1BDjKxm07p4OMOed%2F8IGOqUBOx3wN83ldXok3oRheGJJh%2FaRq76ZQdY8e0r5yaI%2FycddConEzVLaoGWf4aRaCt2yPLbmONRvNxgysW8BMShqiScVe%2FL87u2yhSTs7wXcMuU5kITbRR9OA%2FPBYgT2HmF0yGzXgnbqLIJf53PpM3bq8vErX%2BU5%2FbMYvl5pj6CQ1wtMoPG%2F09gY3xxuGegi3v8CtkZ7zVjJoiRZYrhLQtl0eyL%2F0UQL&X-Amz-Signature=dc5a6a256f7b7ed4a3486916e9c82b32af8e8913e0f3e1b4017e6472187d646d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
