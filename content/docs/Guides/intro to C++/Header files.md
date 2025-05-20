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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBJ6I7AW%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T150954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF4A0Orpg8rDKMi9A%2Fmw5TLYHC0RE65LmVxsjQ0G35FBAiBoikKon5a2iXIpcNUlzp2nbjUPq1yFN1QVpITel2tV9CqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRCeeq8gST%2F0%2F%2FpjaKtwDNwcqYi2srh%2BUL5VrL%2By7LjpYlTPlQ4YwWT7GZ%2FWlymzm5Zz6QgnFJiNtE5nPzS65gQF%2B4e4Vf4oItVAsQkVPBAjt8knlVeo9EBFZoCaMjpB306%2FBem0BExoB8HuULf08eJkVPiQdRc02Bcc2COE5isipBG228%2FOrkf4Ss8owXav6bM9IEHU6EZE4ywJ4FtCOb1fr5C9HubaHbztiI7bVTIFiPG8XvgWUUV66qTms0xJBmRmruJfa%2FWxNNYVwth%2FwKl2c7YSPxq4d%2FZ9Jcywmp2wqnNOJf1%2Bytxabq51gb%2B1ckpdhhFsYcHl7ekxmjA1WY29nccORSnVw9VxkJ2S2Y1zJBxINPZRFpMeQe%2FUDy9nAMI1p5mv4qUj1PBrpH8YOOkG%2BuzQHnVYHQctZRjMdzuOhljpjMQ9SBrsTuH7TjW94n4h8G%2Bqwf4WRZMuQAd3aVYi%2FWBilFstlU0RDRUvhMJmKTh73hVzKk7MdLsop%2Bh1yoRdJVphynbx7ddKEIr2yPOgExUudNtMvcua6NnmC5KA1FTIxzU4FSER%2BDo1fTva5JTqEFIygT2vPoqBG%2BmnXrrJ4wJ5iHkqB7vA9wkWbwYJ21Wqqp%2FcHv47%2BkC58cOfAjCzC05adO%2Bm2AQEwlLSywQY6pgEUFsexkBsH1k33hRHq9H8y%2B0hKXtxghA5dJtES4mZ1CgJxe8jeE4y8qKN3Ylb4KpK24BtEUXXzlWNcmSrmFd9tdR8fwLErqSHoYSJYUak9VH%2Fr%2F9pPVGGwbP9TwKWL9CZc4qTYpzVP7%2F%2FyNIWoCWKdgM%2FaPc4%2FDKiK2FH16tC4l2Jo2NEB%2F4RtkL%2FBkZCv7xn2GiUeA%2BSlMgGry4DwWxzD32ZeAGb8&X-Amz-Signature=2f8e2b5419f2b7d4cc2fb5edf50d05c71f2734c616f9cb28455895812e6e3871&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
