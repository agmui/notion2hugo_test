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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665URSTTAL%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T100959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQCj0sYOQ%2FG0dS8%2F26VSc1MUqzZ8ytD20dOxmHZRZAtC%2FQIhAKaPGIFkkChGvlo2RdVQUZJGKeAigWhBLob4V83aDak8Kv8DCEIQABoMNjM3NDIzMTgzODA1IgzcVW3bDKlnUSI%2FKc0q3ANgtqjbr3EDTRh0lZEud6hiontHp597u21lMzBf7wECwzU1fQy%2Bqk%2FVAxvo3vK1UqCL5abAPpGlMwQbM0QCsh1UtBlBOxkETwR9tnV8EG5KFU00s8IIlaBHIcAqw7XVXEs6LJL%2Bs3XZwy0%2B%2FiWAW1atodvLt20X8Tl5UMbhWiIagtO3RwmovkDofe2xUnlCGc4A0WTsvIN8TSWC4A6KVi8OZH4sW0QvWPErWIKvpudbqjmrZ28rrHNRrpikSen810Z9zaCwMVUyFXSaRtTY7uXT3P4Z46UlIQh34slwBmQLpzBrAwgyH25Lj%2FUJChFvadkkQB1PomUg%2F0YiOPR9xJChbl482h4h8UdeAiSWB%2Ffztw%2FMCfrST0e%2BlsLPPA8Q%2FmPV22q8b2haygPe1uYM64wjUdnXYj2vd3EY6XovyM2yUb9v5j6uCVSEITS4SLLw6Res9KSA91k1nU0ywP8yjexGSRXMdjgel%2FV6sKE3eyU%2Fp6wzT4%2FRLlyrp%2BRJVloJLIrHw8p1%2FWj281jF%2BId7xbiTRKP%2BmBmmO0LkAZ3ysDYRduyxw4THkS1XtOjY6tWgmAvf%2B9rpVHxM3SIEtpa7YnxdJwt9B4SIkmyGsbB1jPfupWZGoNlW0R66hlqgHjDgjY3EBjqkAZOOtjj3j8idDgizA8XLyY0NrZOwbGml9PZv3StVgyCDlYSKyZjRH%2F1w4FNBupjfJ7zCYusYtzLGLc5PcmncnZ3kfswtcxUcSFzE1c8oR5eO3Y6o25kR%2FCwoe27OYb55wSUJl6CvVHEnL8q5rLlnd4Kwr00OYRUF5KzrulrqfrrDMqfHfgq3CgRS0FJK%2FszAt%2FrJvUQFUTCHLEi2%2BMJItc42bNcx&X-Amz-Signature=2e25222a4eecb0da57043610fb9fdd1dae7a0151c09825ace9fc567c3d271b01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
