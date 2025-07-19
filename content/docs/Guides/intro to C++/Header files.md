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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFJRLZK5%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T042051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPsjLevH2zITpbR9sTeE49FDIm5RDm4DkvnsZHnhri5gIgNPf6XkW%2BvDU0q0Hlj6neIf15QaDHVNGTjeC3bFpvDQ8qiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI6jK9F2MJY6DlH2kCrcA5VYG3SMrLJEkHklqOeNIcsFive54GvHAu5ENi2RfXjlhxdWqfj57XQmLenRKJF%2FXiGgU0DmSo8koKMsmtnETMQbqAzCs1WZ4OJul8MHoYMV39bed4dtnYZqT45fmgCebtl62HJkY2HG8blJGb1N54aLyUWlWjSXuv7Pua6nO5PgQEn2U3orFgp6sAXkeRieToEWEsWk79xEByBAoUkSAkVFZhl7sr99ks6T90jTuz4Iy7J2vVXvBnE8JXkqV9nJYyBSGtEU7oo04NtVBF1kcp8BTXSivXqsqJgAL3O06fxtx8CnkU9W3rVN%2FcbVjyUm3ju02tMA1GqyNA9o6qqcIyoK%2FbEABv8JHOM%2Fld5HnsWm7dCELqh5QuZSfYfHV%2F%2BBqtGHCKpxFmnkacYDplKlWM7Yqa292wmzOeIxs3qflc16tPuv9bO0EsfFo%2F7V0Eoi28SXxfTShbpXYq1etEifOKepivUZ%2FnTQ%2Fmy0rfmJOqGVdo2Akpu5u3mb5MuIKCuqbK8yaM%2ByXdBwrez2r%2Fotu7PvxPwtQkFdGIjyWFrUtzteBcAA9gWlRbJixNnp7R9d1HWEGTc992pK3OX08qtveXe1%2BnKbtpLdk%2B943CoN841o10dH%2F15SizTevUoDMIWh7MMGOqUBRe0DfIXX1qugEEYMGGp4B5WcvVgRCB%2BQCkGzLHMpI%2FV58zR5SUZMgf%2F9ZEh513fmzE7AX%2BqYsS7s2N0Fd3MTxCY3O4HTHOaQ4c63R3XO5VWhkeptiRCqFJopL67sAnNW0lEMvvIXDagsVztUfJnZ1qdqp4JraH%2B7VFuXypu1mcn6%2BI6g9TbHMBlW%2F9MGjrOs6VGmHcuomIOpSpYn4RcP7F0PhXby&X-Amz-Signature=c10c45da959d92ce31635bd7927eaf645653fe60e3afd6771805a21eeddaaa67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
