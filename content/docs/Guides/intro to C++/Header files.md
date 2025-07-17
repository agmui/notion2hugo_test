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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466275OWRU4%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T132947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQDnil3yz9OtPYB1AOc830dqclDo5gAnNfDt86hS2kBbbgIhALjs691iydLaaBRsTtB4GnDoe5C5CbmegsevAJ1sD%2Fl6Kv8DCHYQABoMNjM3NDIzMTgzODA1IgwNqodRe8nE5GH7Dsoq3AO7HLopDrBBffAv%2BVcFwCvAGRMaihHX3RneFCPUONetFHFa2ep9VfjswqSHHU7dJH5O1HRh19uCunb6lVOapzCn0iEUP9NLmXwAKK78zCQVmALwFkxa5mbAqDhZrOuW5Hb395mTSVj3tLWa%2BtG9U0lVIpdlUjYsZhQDV7QX9F5RYVwJt0aDKPmIyLkcwddcElmhYjz7LIGv%2BCAV3YenXx7xKkrRIin2f7SDOnBHCuOgXWfiXW65tkM9gmFY0TnsZ4f%2BsbFcIzVpY1tPiFBlw2t11XFWWnoXeDNNZuiLg33D%2Fj2CLu%2Bx%2FEGKRM93%2Be8KZYdUQe80TtbZcEZYzcdiVXf1xyucCrdPLs5%2BmLfvCEKlWbR4a7WQrnqWUV12t%2Fzzeyy1s2waEPD%2BbehDpbRk4LpulqC0FM8cT0Pot8%2FLX172p%2B%2BJd852f09YUSXLPZdeAHQZK0PWosaTq%2B3EXV6Vn9mWwLG%2FTmZnTck8tZNcD3XHL7FXrZPjeUKUQdU0Tvfke%2BywjrjFznpVFFHiCLZVfBu8%2FhgiXpvB%2B%2FewqkQ4F9RR%2FMaMJcU45QvHPhV9V%2B8K5hKh4zjAXJ%2BdwfePxLI5V6jvuDIgCp0%2FOHsf5eHGYSYU3%2FVG4sQRax%2F8K1Zr6DCx4uPDBjqkAej5RLkNpJUC2LCWNQDXLKt3UVAKkAY647BO52RSvlgnkiG%2B5SplsOkVWmjbx%2FI07T73Q9UhBaQPsnU05CDdmBkEgLZ55KZTSGARUSbjdTs1hJ5Lxa0Di4GHq8IdcT1SBtPw2Y8ckqje1TckU54dc2ecoUlpj46dyHYN1JnQiU%2BPw5%2B5aAxBfMSEL4imByQMCaW7zIzPOHghgWfcZp%2FNWPkLfPzv&X-Amz-Signature=f71dd8330468a3193dd2f870c71a958ade0905ebb68f5bd3a85485ba46804fec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
