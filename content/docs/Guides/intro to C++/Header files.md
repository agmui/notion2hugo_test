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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIY5YJOO%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T131705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCn9SXQJjunnFWo10U98jSv%2BcyQ1or0bkahK0we8x52YwIhAJ4x1gVUuHRnlWr943FP4qh9S25OOA9cf5mkZ2yCVJEZKv8DCC4QABoMNjM3NDIzMTgzODA1IgxuwWN80y5Ad6sq6Dgq3AOznoWQ1d4gGBAK54bYQGwO5jgSnOjbO47KO%2BjmsJA8zHzGTvZKPtToCXSutGEkl62H2FMSpe1hRFGQ8yQLlKsZC1HiiA237kuupAyHhPB2%2B3umq9F3dnSo98Vf8pu2htKfq5FLrTDjll7KEzk3SzFviQ11rbq%2BMMlG0Wfyx7PnO0ne4NMxkKmrveEepDtH6YYtzP7PbqciFrDXtrFmQMdsv5LliFofxj5eVnmoEXrc76Kn5v6Vo7elej%2FxKcuAsOvEMJdp%2FATZ%2BnVFaZzGTTao5%2BsW5LuDVAn%2FeHSVjca%2BQ4xKKHcSs9657XQAQp2IpfOLNvjkgVzlqe%2F4c5FgHQPdPt0GiTecrANjJrLcLCWCjlEDrbhXsdCwqu18wLnmUnYtx%2BjQKnxJdknmJ3nim3Ywi%2Fcgzt3sCXzvZdr%2BSNbVdPPM30x4JYsQSrlB1HnKPomstBnJyOpljnmZy4D1ftCvuxlfxpzruDQlevgyfuBjA%2BeWYzFTEWk1ODcgHD3mmOM5ERFJM%2B3Ek0wHONmouXzA9JVx4NQjd8%2FRVTgBWtriWbEFL2EMBAB6cg54wb1XJSBlBVbJACuJM1Zv%2BZI1nRw3I4vjuGU7ugnTQ3j%2Bi8BDNjZzLEO5ErUDzLCkCjDi1vG9BjqkARlOzkI6JXlw1UN%2Bvxu0esxi9S8ApoQmKNxyl7%2FwiyWqeR4l44JHAh6Ue%2FjtQVmAtxDAxeUEIGKFkkdjidTLfCJhtqF9FbY9Vhjuf3HP8deaOIIBhKBsq%2FD%2FamCUHw%2F2Lon4CN6Pc2%2BtKR6iwhtQpUU7DPYjSjV7Hu%2BdSPo1H3xvNEA4wrOiQ9uaoE%2BGbOJ7xLDZbF4Jh6MtRXWp1KNklhjTFwC4&X-Amz-Signature=98169a6805525f662d42b4179dd633fc3de32998ef1c10b432b214125b0031c0&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
