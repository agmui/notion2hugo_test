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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZJVU2CW%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T081221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIHKKxUYXzJVLa7N6Q%2FYbvtbmCTSllWhBAQkT3sO9VrdvAiEA191OdpVETbL0wAGDty8vnK3FG7LhZ%2FIYkr3g1o8xZC0qiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG%2FGTHPlQrOAUurMdCrcA%2FC3Zr4VgT0vE%2B7%2FJ6yzfOmDEHYGXh7jWSmft79HRzISaKe6bWJxPQbB7GEbXt7FM8iMK7rPw5e5u2YZHmohsi%2B0ZYwrKKvvt0Up%2FH0MQwG%2FEHjPzVXadZTnBFTa92vYFU607XNCVx33msn9GnGxSjXPfbsxXapn7irCvYStaBkuc%2BylqiB9MHNQIO1MIx%2BCwICCi%2B4NmdYKkIjzRUuvv3WghIoIecPBIQ6H9j1eN%2BiTVgX06snDm5ElH3cioischNUtqJgw7UsJhNXj4QzrnZfdkXSZe0dpV6%2BwvOO9GKaLhg3cOQjoOSpuj0l%2BHOaRZqFiNVSq7Mx3fctxN1Pfo4fyT5PiURZVmXf9deAJnzJ6XsCvWG494atlOGeP4sdMNDX2lBPRqc0NZmEHuSVcRyd2ikJqKjq2qYNvEFl6r0FBPonQ1iWyn%2BXGe00O85NHj%2Bx9Qw0lNFS3comCBKN5asCfc9VvG%2B6vhQ3rl7%2F%2BJowkJZWXRHMCK%2BVaLhN6DpxGZRMkmK0vWLMC8pUVGyF3lw5ioaMG%2BzIpyZvT8GZhOHdS7vjBIGaCzacyjGeEZy2PhTFcjauLJp9dCfcDYrpIEd73tbcsW%2B5mcdwpGmRF%2FnpqxX4XDMdMGnEy88ioMK3yi8EGOqUBmgxMIZQaiQNOhglryC2cZSEGw4cu%2BIds3t6djE8sSpmjFCk6eYzU3JAimcGqd3jAnyqaC4vKbtPjKseBlAIAjVpKoX4h6WdNMRGK%2F7FxsD9kkpuhfCGSGFh1GtKUrTgsqJ0CAYX%2BAEX0%2FTcIlWKTfdAkjT5Z76l4Z240zyPz6qjf9NoLv2XZZOYrkZkxlEkGXeNlR5KO4blnSyWldQc4VwRQ4yvT&X-Amz-Signature=0e8de0902e348af888bd2e816be6e499e38ac363bb6bd35791cc242f0b5f1293&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
