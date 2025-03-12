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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XT4PWZE%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T050842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIDkSgySeAZxsPmEDqq%2BDREdKr9fUVq%2FZRYt%2F0KAgmi5kAiAE%2BawM0dq9f%2BKMMeFqu1vlfBoLiyqK%2F0Pn%2BhIHob5UDSqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMC93SuJBvJCeVuMJxKtwDVz4UierFbf2KtCRyC9DIftbps2hi%2BJInmNqN7VmFufcotHl9aqCEnBUBzotPJYaCjkia1yGySEq8D3Ast3KOZqIu1KRzlQOQytY7AuEYGTE%2FXuN6SIBgGRUqEj0jc8W23KbYfRAi12sBJ9CjxhY2WfBJvJdb5DawyTIsdanmOMml3W0MahY0rM132yHI5lGsIxHMtodr9iwl0Wqpza2MN4Wm6IBQiKXL6MZelQX9MHjqW0%2BVCkRaYkGcgqsVjShg1FQsKMrGxbn8ajexxUFuya%2B5JDpaAqc%2Baf4xqRTfpqWxOyxrwDCJbr0Ui%2FNM5h3ZuXiK00YtyUuf4uoFicl9Vi4OzE4ygy6alKlEgTkwq2Yam95uJ988tGcF5jIfSy0SRO%2FMfabZwxTudzlEopxJj7daWiUfar9Qzt5bTx9%2B1AivLUEV%2BCTdy1Rp%2Fs1830DxYRyjzp0j7vlBhRtEiGQhUidP8cnqHQe2wyzPhZ6df7WqdWW5iEqDgYYhSdAOiKXtmGBBo3RVPmvg0X2BW0ucwAZuTyJY9q3sGgsTlTTOUhqvIfPUinaga6bF3UkGd60LydCdpns0LbQaag%2B8o%2FdR6Ur9vxt06Lr0VCD1dltdEGZXAt7ZfoZWJgGP0BAwuJvEvgY6pgG5hIm04sc1DSrvoVldLF0H32NtXLzI9%2BDyD3WnPndmgimHhTE9CFZ%2BlsdW4T4zzmN8iogcLTqHz386xO0gxyd949wnQ1sFlF2M2inx3CSUZ2tHYMjWjWbwFb1ed1%2BH8Z2VWOu3A4aHZAhc5AUKxUhVNAaEGe12TlLW4LjczbmiMAg0LgvJVBCZEcv0BnOphyYJJ705WmpFyQUAejxyoGGbkowBBk58&X-Amz-Signature=a9f256a502efc945c74b4bedb82c1445f27bf960b8674b1a5d8338d036775a18&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
