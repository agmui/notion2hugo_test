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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466474RIVLP%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T090814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQDuSl5nLgWOCsQNA0DMhAk7HCVapnraYJW9Q0XapDNqOgIhALvRTubTVdPwzTe58f9UrO%2Fd7Uz52%2FBtaqboZF1hXqGiKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwpNh8GWX8yyPcINooq3AOsZqloJY4QgmWbksc3p90Ov8gp2cRGrhej6qFvoncvZQbK%2FJXkMoY9qoTlEBg1%2BYQg9acEPJ8rmf2Nc%2FlSNaNhqpMJxT4fjvamzmr0IkD%2B4PqxAb57fSbMwIKb1Apn5XMjglJKHSfx1%2FrhRTP6nDnMd00pei2Ffz7V4jlkLsAPvPYfZYrXQC9eFvTba7XOiJKWIK4g4iXS9rw7ifaiVAK%2FiLALqLfHm37%2BOSUN6hVjfwY1DUEwstjCBmNUwfT5TSFKkfthSBOQg5mumxzf97DZSlSQwZbhgT7jOrAUESwRIEoJrOmEJ4WSiQxDuO5cHMYxXmgnoB%2BHrs51on8TLfyI1z9q61EEsHKAdJUOV0zRvKKqT2KfxpHtpL2kZw67X8HO%2BmpQWvD9uliLkHfuSM3UrZMl5s81ZOMKvKcCRzhZD7veKdg%2FZw00w5VDMCXJqsZI9gwqbNqDL3nMAxZO4Vf0RZBcCSh3gpfXc9JTYI6nHcNTlg2vj205b5mfQK%2FtCA7KD7E8%2B3bheVzSCkvp8tKjS707r9A%2F0Iw84LWYoIlSoSN4XLCgZU4be298V2joa6GRcr%2F6oQ9tf4FlqrzIxL909%2FIG8jSuaEMuxVCIkjJCKPVefaQjK%2FDFs1H3pDDKvNa9BjqkATysI%2BlN2m9kEOWtKL3P5z5PhcMzc7Nbbdqxgglw%2FG4uFpzRewSiowngy4WT5VgNs0EBucPGnSqtFdIvXPREtJj0YmlwiciFhHcQJhOO0nM%2BeHVvoX69Yclx7Nlur1BOBBKzsXyxZYNGxTnMrNrpg3sqYLzE7Lwj%2F%2FYx3AuwaEzIdDqvhVkbx%2BOsZowy%2BgFxp8F6c3Om6MD8HT9UteSbjbC%2Bacfz&X-Amz-Signature=82495584993f3092bb0915a7b5951cdadb74731118d5562cb98b55b1c4b39167&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
