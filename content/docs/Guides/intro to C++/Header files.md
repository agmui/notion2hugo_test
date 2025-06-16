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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJKKDE37%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T071149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQCr07muEDMQPt46ZHp049CTPDhCaN3RILdUYlYMVztL%2FgIgbF6%2BVZdihnbjI%2FNq5n%2ByFvA5LBnOKTEH9ZwNP9xs9r8q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDLypzob2CGmcAfCp%2FSrcA3eEvumeAHMnHy1SqcZNLzSmDGUz5xicRDwh8bQbjoWp%2FZ7BBrjk272qxlTX%2BdQfJLlTHb6N6pQHvsmtgw%2Bg%2BcvSXvj9OUh8uzGyjnYGiJIZ3vKJnvmW%2FwMiLUYJpoEyrIEH6N1igM%2Bpl1UTA%2F5OtiDJqqQtGwlRrR0WNhSJ9neC%2FZlGblBc%2BQbggLYjWiXE2kuy78tRa6RhdOSA%2BzabAQmXQHcdQBpS%2Bni%2B7bZgoUqSVJ5SuhHOw7Y8TdSEyRTzUNAJZAyNOFbvcA1XeY9tSYMQZ9LowGLjYMk2ma2wMJBvvAg9T0fQkjs3G%2B5T%2FxDOlYnVgB6MYX54OLn5OdoX8oMHBkD0mPN1JuMC7OQSXRMz1U2h%2BsC68AQQoK3fWwWJDW%2FDubs0xZ5IcmP%2Bjww%2Fj7K7aBe0j%2BgK4vHRZ3dgtEIX2wlAdCaqB0HCbyBpTTcGq%2FTm04zf5HsiTqf%2Fq9dcwbIwGIqr6S290QYNLVT8YHO31m1bBJUObitSzox1BdrXhYCXE%2BrM%2FO7aLfkUsDgDsH8nN46pKa6h8%2F9jO0JszXkClm7TobmhNo0BmSTQJA0pwniIv4JmWgkAWmrP4nbRHjpp0jPOlx6jARSYIMTzJeZJQT7JvYox%2BqRRnVdQMKL%2BvcIGOqUBh1HMi37cVYHvhtudPcnNADqOeEM4nPd4A57of5V3HGjgW%2FODd7CSnD2b%2Fji64qS6QAvw%2BO%2BWzjGx%2FkoPzYw5rsFvNj8OINZhicAxIzyFCy7lw2fUl5z23bwskN3lOQZ8YuPpG%2FoV5tLnhKTCEm2HdcMXvgbIdwJm8%2FMwRsPDY7u6%2B%2FcKMWCFsQYOMsMfkq2GrlKXkZyo4eRQL9jtIqCUsmwJBPFq&X-Amz-Signature=8da19772b2ab6cbfab08f886d61439343501d834bd05eef3943cdec3c33b281b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
