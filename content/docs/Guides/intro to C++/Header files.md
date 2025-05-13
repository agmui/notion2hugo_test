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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SZLRWKZ%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T070941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQDZlp%2FYWyWeTTefluDAfs1yD5EHtAIc%2FXs5l3kh4ld6FQIgLUxcjXtd37VsicF9uQZ%2F73XDw33utjdqAnbg47FcPLEqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD%2BxPk%2FzmUHgccomSircAzvcVQVoFwxi5aCK3%2F905a2eZgh09yx3up%2BZ6ge%2FFiS4FCdmtc26JEl29r9DzKQ%2B%2Be8huTXWgqTf3XUFms9z6t%2BqGqthYH23ZmwgfyjQq5iH9gnAbPg9C0srY2GFHyQIAe%2F5ZU%2BHCSm5QcWtb%2FcEim9Y9drKhJF74q%2FtYFS%2Fi7epHbDFd4BRz1r%2FVeHReoaHQPMmFpAF%2Bq2K%2Bd3WwDSubmZbHgTuMEnFMbR9OCnFKL6lpEQDyE71YIl5DgxASUcbL2VyOKyQp6uTIfwWbFt%2F4ga3lIZx4Oob0JjYb4jO%2FhUCFa9TfwCxA%2BKiYDsoemOo0r%2F7YH4iTElhpsk3%2FVQT%2BW%2BwCbl6NP4tmg2B%2FmDoSEbI9JpjzdpRSM4IoX6fS5NQ0W8Djih1RASitRrtLc3Y%2FoZjRtNlF9YXcjruEq6ffMKFfpMByLQbnEJVMGroqtbT9gy47QeLrOW56PpFkfNtzQoiN9vO2VAG4WFZa9BBcap1bQOEXVe9JlgFOLw9AytkAp0X1LHjFrq5cwvPNMrmU6vWnTJtkq1nE3u3A%2FF4qXXjbHr5Qfg8LwlqOcrhd84tlu%2FtueTcauVGCT7zae2gF50Cbql7Ldroe4Iaw4gyYTfCjb0y5iozIt2nx4uXMJLai8EGOqUB7Pf6Xm2vGB27j2v6lb3NbN4fcEA0a%2BgihlA7Os9CsYdmz5jdxlsVp%2BfHV1RvUg95ywNQeN5NraJQcP4ZUEEfiPxheLcgATn5j%2FHdHa7wgomMg%2B3exsC%2FcGyiG1mhTN9I6rPervKz6vil846a1k0%2FdiqOGteXQXd9JatGOgHQRgjGWagTzFZHMiqGiARvMM1Rb332px%2FSXBrddAa7jalLUq%2BXJZ0v&X-Amz-Signature=fcdc4c9f695d588ddd0b5359354bc003f536aaa02e1a809d0e19848e2d60fa1e&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
