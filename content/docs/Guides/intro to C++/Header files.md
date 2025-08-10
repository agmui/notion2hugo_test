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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMWAE25A%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T230830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMvjqwk1Z%2FZWdP87DDq%2BXrI0EvSTkEbgWosoDrRldbjgIhAJ1vyoOd9d5tHO%2FUBoZKZ4avSJHd5HxgTRwDTkn0LLRUKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwkS6l04i0qAl7VIwcq3APUVsgsRBdgagu8VyrIygj7QCCoD%2F07a05r1jQ2e26fH8VDzLwhlTlZaM33J1Fj%2Bcj%2BYZJCFtNxcHjm8wlnde8XzFnmF%2BUzlSBUujvwUVl8wggb0DJzDo5jFiJsiMZkrM2DaZh24ukqMeWBpXg1xulNcm%2BV12NJYF8sFiBPTz3Bth5hliZuiG2H3t5JFEJxNCiUsjvoHi1tG31wk9B%2F2ZJGXJ0tM1LxuaUplU6FRdJvE542Z5DcrQbwhFZE7yxjo2QtRGo%2BFN7mnWKbsEJGAz%2BhA%2BsVUj8m4MjqY3lZnRjbUv%2BRM8hmmdNBlfLDDmRbF1yHdvELrglV3zoWeu7uq6BhOvJALbX94CGzGjKfbmxdtzMZ%2FI6VflLP0Ulx6frDRW9Vj6Bd4MkqwVoT1sMvUAmPOU0N%2BRb%2Bu1ok6DHgZL6G%2FDakhBUbTAFw1tiJF4o3Kp60PKyLn1BbEMlYsD9Da%2BwW4zqkb9h5rnvd1pOyp5VFCNCu5UDqzimfB8s2O8LkXaoetnYiz0%2FgZf9o1KKHHryleeaVLyElAo4iS5lrOQgY9Ocrgt1Lv2cer7eU88z3U8LNlnAGvGhgDy%2B9YkdNQ5hXzvQWjb1hR0XgASRwAmLaloXqB0HwGSt%2Fxb4TQDCxuuPEBjqkAbKAEBXwBJ9pDrR6JtOdBMC4aPNiFHfv2%2FZ%2FEKREYUsulIsHf8S41bltvZ7CYbJ0hZGVGe%2FzbU34%2BudoVVKCz7GXl%2BFeySD5w54wT3nUCv4BMA1vvQXD4w9j7tQQgEh1S4Ibcpa5BuikzRAensJYCoWVQSjkkU23p5uk0J8AAqNyyQj%2FYLdfsYmWglLHQIWLmsPY%2FooE9xu59UXuNRn3pvnDqpZ0&X-Amz-Signature=88d7266e24ddcf7c7612a1ed28284fc0b4c5cbe98c92da95378543bff32603ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
