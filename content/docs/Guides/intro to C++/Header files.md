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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675CBVRU2%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T190116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIGKvGI7P1DqvvLfrXNwOS3FSt8%2Fh6mtbJVMSavZ6%2Bc8nAiBe1X5SvoPGZTvDajbEoa29IWb%2FJq24Wq6JgcwMvb4ZvSr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIM43e7YeCj%2FC%2BEGu25KtwDb3xkJYbc69RPsNK4PANc6nGfoekNiJfu0OfsO3xS0Bvzp9wSVK88tPawBNPOHAI3BK7tn8W1yKhm0VOcr3PM8o%2BiPzwJR2zWpPJhyDFOMr4REzRH2NNuSrPAL8tMjadKW3MxUNY6JkwvUemk4fNAlff6BYSmXFABUVUSFGTzE9xnHsZngglfnkamWFB%2FO52vOlox55BV3ehWmfQPkXW7YdXwQvKBPJRuZKWZtrpGfSJpJrDVFkOaiwKb0nlI9FWfpqiTf3XGsa9Fd4Vy2RtVYa5SxpYgGC5%2B5jb%2F04rh66f68CA15Uf8ua8jBkUZ6Y8hzfeUYQPvPXiKluOXYY5nUiY0uz7qT3r%2BQTsliPCuGXGGVk4lf98L2k3BxwTF35lbkJA6Y3E2uf%2BGW4uMxlzPCZ9vk7Zwj2Wl5Jp7DeS3pRfD9besSkA2KRHfp2CkinTb%2Bapfn5gKZCq%2FgR0SN9PA2ouLT%2Bu6usu1s6Icrvfw2aFxhs4DpGYkB7vduIpfI3rAu6Irrb45wEOI5J%2BPxLxuFOic3snqrM1twHiDVKGMx4GgZTmpsV16ePgKnXikb7QswSR8%2BPhu7SmtkxP37Qtx8AI3%2B5N%2FMVDEmN3ywMR%2B%2FkzY1PFfjjyXRKnHgygwx8XNwQY6pgECoYqwbuOLQnMxw05JQk3ayKrZfwKlda1flX4c6ggpSyvaQqrvdWeEEY8XSremUoCZYmG0E9Wj74FsWr5IRjFzrzxQwC8Q%2BhU09tnnYRfF2HsClCwpY79u5954x8h0DcQrk%2BMgV7BoMn2%2FaZSVD%2B%2F4ade%2FbTd3cJTgGUDOUZg2%2FKnrG9f2XlGTaUsUSclRhn8GLoShKUCat66LKscyGiu1cGqh61cj&X-Amz-Signature=6ea0363400300aa0d24672fe585c3367d5a6c23422ad5dc8452f65fe0fdeae57&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
