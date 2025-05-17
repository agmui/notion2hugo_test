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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVBWTKSQ%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T150711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBYZ5AFYlIamGapM5Tx%2BLtL3YScBQulLNjYrzxKoSU6MAiBrn8ypztb4yyj1lUPtJ%2FvWW4c%2BAEAloA%2Bj6bFOe8h67Sr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMwBg4CIUA2g2w5i%2BSKtwDOCa7L%2FbRjwbOVle8cC2pP89O1TLB53yAQnb38I4F6BN%2BmLakyW%2FYbeal98uaePJa3qGsnxfd35LNWKrhqsQJOvtOyQM720mHEts%2B4UjNVVqTjVfFZ%2BGu%2Bx0gNcuwCPQiBEt1ba5kHLdDzFPVzdVVO6DbcuJNhc%2FIG2rpcq8KmSai2ScBzszOc3NrKfLXWcAulyQVkmd8DIJK%2B%2FkR%2BnDmD%2Fe%2B%2BYqcTMDJgbpwcIAoJr6WcuDiOE3nMkcKfh012TIwLLYUU9EMO4482NzAJwBwwzpTZMYpS8IvT0qWNEQQ6Ke6apBiTcXJNbbYtK7buv7Ri4jaFK9%2Bes8lgpkBXEUOoOM6Dhy3dDPB%2FTGJdKxRcXeiTYgXhE8MbziMBodRfEDxprkJuO8h7F89BbZVwpUmJfcrUJEP2Xm%2ByFbvtSPvJkOsHdwfffHeoDivn7rm7HnY1BMUJVbZ42wEFcU0Z%2FapoxAWLyXUsUwbLLFnEx6vTtx%2FS7MHRGrgW4iWxgjU5Hm4OZM03eGdkgHAdtNIlxMSNIrBkGcPJwYWLPuP9fe0gnnukMrE8EGVKJfRsfQicwyaZC9HjUEZxRa4RmMOH%2BQRe33j3ty9LAAT8NiIFUAfwaSb9jzs4BRcXkauR%2FUwv7aiwQY6pgHS0JGVQfyUWdulZWoRWLmeW%2B0mbmjnrUwr6yafqrsW4kY%2FMPxPPRMUVgpwziyQBE6mj%2F75QKJMnmAEZIl35gUEUX1Z55FtU9kExCnduyZcfdMzUnfV3g6LF5h4VQHNQMnojgPzihRSFNiXsblrRHwzRE5JTa6EBVbqHBVlR%2FT0%2Fzycf%2FRH3XDYQ9NIvC0djjx0hgQK7sD%2F2gPwYJf4v4NJ%2BU16f9uV&X-Amz-Signature=ace5044af425661a50078c7bdc1362d08c92995822c03484c4f11928cf6c42e4&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
