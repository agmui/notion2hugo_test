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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663A52GZEA%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T190109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDsYdYWVE1EdotYsTKnQmmE6v5IJPuFU73vch7wurGiTAiA7A42LQxpGR0izoQnJmy25BDdjRGmP%2BwWhG9mM6Jb5jyqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLoiTOzYFkaNcH4FRKtwDk%2F1zoBLbtkZIaMvvEkScr7QFLjxno5hPFZ6nC6ZRadv0VnKlkD4LyIa7cYh%2FkIlf%2FlRSRZfTbi7k0JL9uRbGyFtea1K3M7zArYuC2PHvcw%2B2eH59wV1jIX825rTAVBOGHuKqxx4%2BZG7JfVHz%2Fn2rhD%2B8unJptati8DqMOsd8vp%2FnsyGUbq4J7pjWU6QrV0M918HLt5YT4b1OGk2aa6wgSXbRtNzkQFxgfcRuTK5Gksu2HyVbu7zP4HeYuvTBGX39sCFbcN5Lwu7mt7f4Ez2IkxvpjDZ0lieXXtD0Bos1EEnwNmmq%2ByCbJHFneDWDjtrRN0NrVyXjxMFIoBoT9zJlzhQ6Wo%2BXgt%2Fe6q93M42SEdsPAMmydeQ7qjgnkT3o0pfyTRBQBNgakqVq132WZTo4jCj%2BMVDcu11MkB49lGlHfcH6YQwXM9wV6xq18Uui54rJw3YphnC%2F5ojMcHqzL4oOD9WYRec5ElodQFNysc5MgvVf3p%2Bfvji2P0Y6GjRuOQ4M1bajkw90HEf61mReiLZjdED9MQUgIJWNmtWx62ZZQ6%2BZ%2FX4CUqctwS2KsJgirJXCCJpY5yueqbmOKmdoPQILsr7uRzGEe0z3jerKf%2BN8SzkdhzA1xkzZo4hkASYwjJDvvAY6pgFCd9hdx%2B%2F%2By%2Bg6TiqTd7tBfDB9g1sjtMnKnNdhjuZeXHheUmANZxlJR0yhoSs6Jo19CQgoF%2FRa6UDZCZih3scED1AoA8vX%2FsphN1MK2%2FItj%2BCcqpWoJfYRMardMtcP5SuLFYW7jWAvReBExoxGbAUPBufTcwA8wiC6EOz6oNHsj%2FgTiEzORopIBnkBMfMWn%2F0WR114qdo%2BWlzIBkOy%2BgUbtsQh%2BhZs&X-Amz-Signature=a2d61956e43ed4aed7ed89ed248a415a541678c93089603d14b3f509ee52c754&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
