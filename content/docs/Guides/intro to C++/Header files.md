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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2V6SHR7%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T003838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCw5NwW1rbaxJWThsKOZ0958M0J8tGb%2BJ16wOtUlCfP3gIgS8khcYzCynHM0FDUN0Ez4Fid%2BhFFlg3b2Ug9KLDLgNcqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHw9moF2%2Fk%2BF3q0IjyrcA2LGWu1Q7CR2ggJInuwReVuwSsZj9Gjp2ne7fCuIwUSXOadshhNw3PTbRHTRR26B1d693gMBvo%2Btd%2BAWLG%2BWNw0dFY3wPXeWJl6KTbd3uvVsMPB%2FyNaENIodbvBl7WrrYBqCnqFz3nX8ColtDIufnHZyvxufpdSUq9YZDWksk%2BuX8utg8vr%2B1JFh4feRZKZJ2WGwmQgC5OEWH3E7IU6kjdcTdUZxcmRN1s5Q0CZ2UGiL2Sd6Kbsi6fESgT%2FzKF%2FzAk0tYLtYlfmW7pvUTi%2BXwK%2FP33ObZeiQB4yW0Lc4O6yUtcULQb71MazNhr9fAE5ZtOhQsFNLaKjBDeUSWWWXph%2BHVcUROfwIcVro0u05MAiVxc4hlcVxSnYljp3NX7TfCgUtUiWquGHu0kFme4yId98WQ3H3%2BsETELLS%2FCcLlUvXE4bnkOfDaoK20VENdMgfGfEsml4l5n3jrg4b%2BzLjg4VTJ6pqL6dimYbjZwsSw%2FkJb7z132bV22oPTfOzt%2B2fTU8TrTedk0aqUdN1cxIapkL7s3oq7nlLwKd5QTn8s%2B6WxbGicpiGtXK2VwbAln0MZKly4Dx4khslI1FUiBHHTkcQS6%2FkMuJi6dqzNUuK%2BsFex3g8hGbZbO30NuUoMOnwh78GOqUBcFtWMG5dzkDKVLoMTB7MVcXUvpCBZjV1ooXkv%2ByTmrgQf8cDSfLSlB3YIN%2FEeSLNt%2FoZkrQLjKUhTqI9ZY4umc7H4B4gVL271YCP9Ug4VCz6PJ1WBi3iRt3H1nvZfO6XP9kK6IS1OJABxoHDtv76VnFslHn1UIfmA%2FmUixrBi5FDd%2Bm5rkh4V%2FQ1MFnQIHXWyITZxMa7PXd0WdVkvVTLTvqkPwP7&X-Amz-Signature=e5e407f130b42c0e84cdbd2d0a1c3eb1b5926610ff6ab3fa3ae26dfceec3e6e4&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
