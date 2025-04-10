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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4QL5MW5%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T100937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIAkr3MAZXKt86srsX87NaoCE6QxrOI9zJemTk7vXLj3GAiEAgnqfDXpmgFv9V3e1AStAyQthuTlitxQaVMQq6VmwRhsqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOawGIY6hilst7oSjCrcA7yjcxgi4Fli1TytdLgUMc5d9awoDcdZ644WfiPFsdbM86ivVXFAarR6LIIIV%2FyMhd2hLo4tmFjcZBBFbKCM2SHF4IIXNKUCb7OQfk1vUS%2FTRJVcyGIneZ%2FypjKwgyQPXsUze2DDhYPRcz4b7aStFsAq0FVhcDuPIfYCbwZJr%2BquPkEKhInkN9SE%2B%2BZukQ5lab2IBx925c2SAUn3QOu%2FMU60fQQpBNp7dZW2aBJFC8jb5ikpvTGaxU3Ve4iqu3Wwp8JbUiFh03cC7wW47adMpkqjiL4jdzsaEK2Fc4nm5mBo1BSjcoCMpo11TfklFjETCwvLLrT2WJ2f5ch906eNQJoVPr4XlczPm%2BZ9xq9wwyJgTLR9XSSqQbDq74GJ51dbpo6txUljf9eLWf5YtwwCC4%2F8lacF4htmXEi%2Bdo2uXK23p6GiaQrToDYCLO%2BLZKK1iqvcUXVttcD%2FAy3t%2B00njfWdIWazCLUXS%2F7QUggHGyooYy3b0UtjTna9TXPPX3xc5qJ9tGg%2FAGTFaT4sKvQrRSpL%2BGuml2U%2BKH9KSa9lAneEwNTk2Bg6LhjY%2BHXvXrEYnAmblliIe%2Bp2Ksu7BDWhIGo4CzTx0nwseq90zPsURc2t278w7DAl9lu19tvEMNmk3r8GOqUBznv%2ByPoqtPKq4BqKUYFJ7EJiZnkVfz3OogNCL2Nbpi4JYhZLtOjDT3A%2FnJbKc0eC8XsJNUBSxmI%2BR1Zjdc0Sthm4fewXUGAmPMGOvHei11siGhV2OBLn1ZwLyDafW6w93g8jZ1%2BX0Vx1tEbUJ7kXHfI9IB9gA%2BVWJN%2BZ88mQA3kWVTzsgBP5Zt8pFws2p1L3cNLW%2BixmGFiXAv9yQ%2BVhDr28nFKB&X-Amz-Signature=54f31a4a4840ebc6148c69a8472052d559463d784eef4e39ce2ea1c11d7d0a42&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
