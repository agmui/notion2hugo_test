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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632T53TB4%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T210147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCICPUE8Fqitdj3%2F2b%2F725ACxpMg5CkGLsIBHnOJo%2Fpk0vAiByxjuRcKREpAf6MOa70NsxncqJpD68evzQ7L133HZ%2F4ir%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIM4zkZ9XQXNjfB0J6sKtwDlcZQCx2FvANLArDezUn9Yj2b518ZNvI%2BKH2%2B8lfVq74Rv0L%2BxH%2FmK1EzlP88ABeDMWG6MGvsU50z9SGHAcqmBglmpR9B3h7IOsqHxgTm2fr37JHNPAx%2FQspd%2B%2F2x9bt%2Byk1heLTr0ZfhWU2XWFUhBgh3b%2FzwwnCskcBwE5Qvb5biXX1YIgMXVECps587Sk90d2IEdNqzAJwRkhMe3C7dc0qp%2BX%2BX%2Fvb5QKpU%2B8ZM%2BnDjoVoNOJ%2B1%2FubYxLGDxlZbBI09iibq9gnLYHP1fI8hjFVNtEDskqwWqAec%2B77wWh9mX1HGxCHzgHkb4QPdPphNYRTRKIlzrQMABuY9h4xwD5Wbgx77uzb%2BZlIXswgfd3KurRRs0pootjamk9Q6b9iZnNCXvCiJSlXQppM60P5zuAl1f00WC5TtdFcf%2Bbz5QQoUGxcWSylv%2F3AMvsKFRW4l%2BeVw9l2qQhXLCSK9to8PsXrw1ytNLE99vd4ZNW%2BQ2LYJM8YXtui7BO1YX4sXYOY0ovgrEuM2ykheJ7he6mBB3rQJrwF0x%2Ba58a9nYvIA%2FF6W5xkaTMgrknxQvIVyud9JTUNIOpNiZDBPgOgpswo%2B5rQRrccR0czZ64nm4c%2BUkdAQ0qbmzQWN2cIsmLAw5NSyvgY6pgGJw6hkvE%2BaSdxMw9h7Qb%2FsAQ87hHaD3kGLbY5XQ%2FyGrHjP%2BbJmLMlTbTj3pbfYKiJ1cR5lyvB53blRa9wsc8C3YLs825rkiqMZrCDVqZb7w7x4VBiO45fHIEZsd%2FBMfsRVoRvleRCdf16a54fddvLIdgx%2FQzHgbtIKPfbUpuYc4esvUuYfAnjhFqi%2BgHurd5zJSG%2FrYtpiyYnYpco6NJ%2BHZUgywtz%2B&X-Amz-Signature=2d384838183db3e05f2c7bc65fe017b4fc87b85f649188baf4171b73a07e2583&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
